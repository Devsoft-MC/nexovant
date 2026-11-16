#!/usr/bin/env python3
"""Narrow root helper for mailbox-file changes; input/output is JSON on stdio."""

from __future__ import annotations

import fcntl
import grp
import json
import os
import pwd
import re
import secrets
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path


DOMAIN = "nexovantsolutions.com"
MAIL_ROOT = Path("/var/vmail")
USERS = Path("/etc/dovecot/users")
VMAILBOX = Path("/etc/postfix/vmailbox")
SENDER_LOGIN = Path("/etc/postfix/sender_login")
ALIASES = Path("/etc/postfix/virtual")
DISABLED = Path("/var/lib/mail-admin/disabled")
LOCK = Path("/run/lock/mail-admin.lock")
LOCAL_RE = re.compile(r"^[a-z0-9][a-z0-9._+-]{0,63}$")
SYSTEM_ALIASES = {"postmaster", "abuse"}
VMAIL_UID = pwd.getpwnam("vmail").pw_uid
VMAIL_GID = grp.getgrnam("vmail").gr_gid
DOVECOT_GID = grp.getgrnam("dovecot").gr_gid


class OperationError(Exception):
    pass


def fail(message: str) -> None:
    raise OperationError(message)


def checked_local(value: object, field: str = "mailbox") -> str:
    if not isinstance(value, str):
        fail(f"Invalid {field} name.")
    value = value.strip().lower()
    if not LOCAL_RE.fullmatch(value):
        fail(f"Invalid {field} name.")
    return value


def email(local: str) -> str:
    return f"{local}@{DOMAIN}"


def read_mailboxes() -> dict[str, str]:
    result: dict[str, str] = {}
    for line in USERS.read_text().splitlines():
        if not line or line.startswith("#"):
            continue
        username, sep, password_hash = line.partition(":")
        if sep and username.endswith("@" + DOMAIN) and password_hash:
            local = username[: -(len(DOMAIN) + 1)].lower()
            if LOCAL_RE.fullmatch(local):
                result[local] = password_hash
    return result


def parse_map(path: Path) -> dict[str, str]:
    result: dict[str, str] = {}
    for line in path.read_text().splitlines():
        row = line.strip()
        if not row or row.startswith("#"):
            continue
        parts = row.split()
        if len(parts) >= 2:
            result[parts[0].lower()] = parts[1].lower()
    return result


def read_disabled() -> set[str]:
    try:
        lines = DISABLED.read_text().splitlines()
    except FileNotFoundError:
        return set()
    return {line.strip().lower() for line in lines if LOCAL_RE.fullmatch(line.strip().lower())}


def atomic_write(path: Path, data: str, mode: int, gid: int | None = None) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, temp_name = tempfile.mkstemp(prefix=f".{path.name}.", dir=str(path.parent))
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as handle:
            handle.write(data)
            handle.flush()
            os.fsync(handle.fileno())
        os.chown(temp_name, 0, gid if gid is not None else 0)
        os.chmod(temp_name, mode)
        os.replace(temp_name, path)
        dir_fd = os.open(path.parent, os.O_DIRECTORY)
        try:
            os.fsync(dir_fd)
        finally:
            os.close(dir_fd)
    finally:
        if os.path.exists(temp_name):
            os.unlink(temp_name)


def compile_maps() -> None:
    for path in (VMAILBOX, SENDER_LOGIN, ALIASES):
        result = subprocess.run(["postmap", str(path)], text=True, capture_output=True, timeout=8)
        if result.returncode:
            fail("Postfix map compilation failed.")


def reload_services() -> None:
    for command in (["postfix", "reload"], ["doveadm", "reload"]):
        result = subprocess.run(command, text=True, capture_output=True, timeout=8)
        if result.returncode:
            fail("A mail service could not reload its configuration.")


def snapshot() -> dict[Path, str]:
    return {path: path.read_text() if path.exists() else "" for path in (USERS, VMAILBOX, SENDER_LOGIN, ALIASES, DISABLED)}


def rollback(old: dict[Path, str]) -> None:
    atomic_write(USERS, old[USERS], 0o640, DOVECOT_GID)
    for path in (VMAILBOX, SENDER_LOGIN, ALIASES):
        atomic_write(path, old[path], 0o640)
    atomic_write(DISABLED, old[DISABLED], 0o600)
    compile_maps()
    reload_services()


def make_password_hash(password: str) -> str:
    # No plaintext password is placed in argv, process listings, or logs.
    result = subprocess.run(
        ["doveadm", "pw", "-s", "SHA512-CRYPT"],
        input=f"{password}\n{password}\n",
        text=True,
        capture_output=True,
        timeout=8,
    )
    match = re.search(r"\{SHA512-CRYPT\}\S+", result.stdout)
    if result.returncode or not match:
        fail("Could not create the mailbox password hash.")
    return match.group(0)


def generated_password() -> str:
    return secrets.token_urlsafe(24)


def ensure_maildir(local: str) -> Path:
    base = MAIL_ROOT / DOMAIN / local
    if base.exists():
        fail("A mailbox directory already exists for that name.")
    for part in ("cur", "new", "tmp"):
        path = base / "Maildir" / part
        path.mkdir(parents=True, mode=0o700, exist_ok=False)
        os.chown(path, VMAIL_UID, VMAIL_GID)
    for path in (base, base / "Maildir"):
        os.chown(path, VMAIL_UID, VMAIL_GID)
        os.chmod(path, 0o700)
    return base


def operation_list() -> dict[str, object]:
    boxes = read_mailboxes()
    disabled = read_disabled()
    mailbox_map = parse_map(VMAILBOX)
    aliases = parse_map(ALIASES)
    mailbox_rows = []
    for local in sorted(boxes):
        mailbox_rows.append({"local": local, "email": email(local), "size": "—"})
    alias_rows = []
    for source, destination in sorted(aliases.items()):
        local = source.split("@", 1)[0]
        dest_local = destination.split("@", 1)[0]
        alias_rows.append({
            "local": local,
            "email": source,
            "destination": destination,
            "managed": local not in SYSTEM_ALIASES,
        })
    # Guard against an inconsistent flat-file state rather than displaying a
    # mailbox as ready when Postfix cannot accept its recipient.
    active = [row for row in mailbox_rows if email(row["local"]) in mailbox_map]
    disabled_rows = [{"local": local, "email": email(local), "size": "—"} for local in sorted(disabled)]
    return {"mailboxes": active, "disabledMailboxes": disabled_rows, "aliases": alias_rows}


def operation_create(local: str) -> dict[str, object]:
    boxes = read_mailboxes()
    if local in read_disabled():
        fail("That mailbox is disabled. Re-enable it from the disabled mailbox list.")
    aliases = parse_map(ALIASES)
    address = email(local)
    if local in boxes or address in aliases:
        fail("That address already exists as a mailbox or alias.")
    password = generated_password()
    password_hash = make_password_hash(password)
    old = snapshot()
    maildir = ensure_maildir(local)
    try:
        users = dict(boxes)
        users[local] = password_hash
        vmailbox = parse_map(VMAILBOX)
        vmailbox[address] = f"{DOMAIN}/{local}/Maildir/"
        sender_login = parse_map(SENDER_LOGIN)
        sender_login[address] = address
        atomic_write(USERS, "".join(f"{email(name)}:{value}\n" for name, value in sorted(users.items())), 0o640, DOVECOT_GID)
        atomic_write(VMAILBOX, "".join(f"{name} {value}\n" for name, value in sorted(vmailbox.items())), 0o640)
        atomic_write(SENDER_LOGIN, "".join(f"{name} {value}\n" for name, value in sorted(sender_login.items())), 0o640)
        compile_maps()
        reload_services()
    except Exception:
        rollback(old)
        shutil.rmtree(maildir, ignore_errors=True)
        raise
    return {"ok": True, "email": address, "password": password}


def operation_reset(local: str) -> dict[str, object]:
    boxes = read_mailboxes()
    if local not in boxes:
        fail("Mailbox not found.")
    password = generated_password()
    boxes[local] = make_password_hash(password)
    atomic_write(USERS, "".join(f"{email(name)}:{value}\n" for name, value in sorted(boxes.items())), 0o640, DOVECOT_GID)
    reload_services()
    return {"ok": True, "email": email(local), "password": password}


def operation_disable(local: str) -> dict[str, object]:
    boxes = read_mailboxes()
    if local not in boxes:
        fail("Mailbox not found.")
    if len(boxes) <= 1:
        fail("The last mailbox cannot be disabled.")
    remaining = sorted(set(boxes) - {local})
    fallback = email(remaining[0])
    old = snapshot()
    address = email(local)
    users = {name: value for name, value in boxes.items() if name != local}
    vmailbox = {name: value for name, value in parse_map(VMAILBOX).items() if name != address}
    sender_login = {name: value for name, value in parse_map(SENDER_LOGIN).items() if name != address}
    aliases = parse_map(ALIASES)
    next_aliases: dict[str, str] = {}
    for alias, destination in aliases.items():
        if destination == address:
            if alias.split("@", 1)[0] in SYSTEM_ALIASES:
                next_aliases[alias] = fallback
            # User aliases to a disabled account are removed.
        else:
            next_aliases[alias] = destination
    disabled = read_disabled()
    disabled.add(local)
    try:
        atomic_write(USERS, "".join(f"{email(name)}:{value}\n" for name, value in sorted(users.items())), 0o640, DOVECOT_GID)
        atomic_write(VMAILBOX, "".join(f"{name} {value}\n" for name, value in sorted(vmailbox.items())), 0o640)
        atomic_write(SENDER_LOGIN, "".join(f"{name} {value}\n" for name, value in sorted(sender_login.items())), 0o640)
        atomic_write(ALIASES, "".join(f"{name} {value}\n" for name, value in sorted(next_aliases.items())), 0o640)
        atomic_write(DISABLED, "".join(f"{name}\n" for name in sorted(disabled)), 0o600)
        compile_maps()
        reload_services()
    except Exception:
        rollback(old)
        raise
    return {"ok": True, "email": address, "storedMailKept": True, "systemAliasesMovedTo": fallback}


def operation_enable(local: str) -> dict[str, object]:
    disabled = read_disabled()
    if local not in disabled:
        fail("Disabled mailbox not found.")
    boxes = read_mailboxes()
    if local in boxes:
        fail("Mailbox is already active.")
    base = MAIL_ROOT / DOMAIN / local
    maildir = base / "Maildir"
    if not maildir.is_dir():
        fail("Stored mailbox data was not found; cannot re-enable this address.")
    for part in ("cur", "new", "tmp"):
        (maildir / part).mkdir(parents=True, exist_ok=True, mode=0o700)
    password = generated_password()
    boxes[local] = make_password_hash(password)
    vmailbox = parse_map(VMAILBOX)
    sender_login = parse_map(SENDER_LOGIN)
    address = email(local)
    vmailbox[address] = f"{DOMAIN}/{local}/Maildir/"
    sender_login[address] = address
    disabled.remove(local)
    old = snapshot()
    try:
        atomic_write(USERS, "".join(f"{email(name)}:{value}\n" for name, value in sorted(boxes.items())), 0o640, DOVECOT_GID)
        atomic_write(VMAILBOX, "".join(f"{name} {value}\n" for name, value in sorted(vmailbox.items())), 0o640)
        atomic_write(SENDER_LOGIN, "".join(f"{name} {value}\n" for name, value in sorted(sender_login.items())), 0o640)
        atomic_write(DISABLED, "".join(f"{name}\n" for name in sorted(disabled)), 0o600)
        compile_maps()
        reload_services()
    except Exception:
        rollback(old)
        raise
    return {"ok": True, "email": address, "password": password}


def operation_alias_add(alias: str, destination: str) -> dict[str, object]:
    boxes = read_mailboxes()
    alias_address = email(alias)
    destination_address = email(destination)
    current_aliases = parse_map(ALIASES)
    if alias in SYSTEM_ALIASES:
        fail("That name is reserved for a required system alias.")
    if destination not in boxes:
        fail("Alias destination must be an active mailbox.")
    if alias in boxes or alias_address in current_aliases:
        fail("That address already exists as a mailbox or alias.")
    old = snapshot()
    current_aliases[alias_address] = destination_address
    try:
        atomic_write(ALIASES, "".join(f"{name} {value}\n" for name, value in sorted(current_aliases.items())), 0o640)
        compile_maps()
        reload_services()
    except Exception:
        rollback(old)
        raise
    return {"ok": True, "email": alias_address, "destination": destination_address}


def operation_alias_remove(alias: str) -> dict[str, object]:
    if alias in SYSTEM_ALIASES:
        fail("Required system aliases cannot be removed.")
    aliases = parse_map(ALIASES)
    address = email(alias)
    if address not in aliases:
        fail("Alias not found.")
    old = snapshot()
    aliases.pop(address)
    try:
        atomic_write(ALIASES, "".join(f"{name} {value}\n" for name, value in sorted(aliases.items())), 0o640)
        compile_maps()
        reload_services()
    except Exception:
        rollback(old)
        raise
    return {"ok": True, "email": address}


def dispatch(payload: object) -> dict[str, object]:
    if not isinstance(payload, dict):
        fail("Invalid request.")
    action = payload.get("action")
    if action == "list":
        return operation_list()
    if action in ("create", "reset", "disable", "enable"):
        local = checked_local(payload.get("local"))
        if action == "create":
            return operation_create(local)
        if action == "reset":
            return operation_reset(local)
        if action == "enable":
            return operation_enable(local)
        return operation_disable(local)
    if action == "alias_add":
        alias = checked_local(payload.get("alias"), "alias")
        destination = checked_local(payload.get("destination"), "destination")
        return operation_alias_add(alias, destination)
    if action == "alias_remove":
        return operation_alias_remove(checked_local(payload.get("alias"), "alias"))
    fail("Unsupported operation.")


def main() -> int:
    try:
        raw = sys.stdin.read(8193)
        if len(raw) > 8192:
            fail("Request too large.")
        payload = json.loads(raw)
        with LOCK.open("a") as lock:
            fcntl.flock(lock, fcntl.LOCK_EX)
            result = dispatch(payload)
        print(json.dumps(result, separators=(",", ":")))
        return 0
    except (OperationError, OSError, subprocess.SubprocessError, json.JSONDecodeError, KeyError) as exc:
        print(json.dumps({"error": str(exc) if isinstance(exc, OperationError) else "Mailbox operation failed."}), file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
