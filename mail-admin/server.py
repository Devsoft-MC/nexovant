#!/usr/bin/env python3
"""Small, loopback-only HTTP API for the Nexovant mail administration UI."""

from __future__ import annotations

import json
import os
import re
import subprocess
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parent
HELPER = os.environ.get("MAIL_ADMIN_HELPER", "/usr/local/sbin/mail-admin-ctl")
PORT = int(os.environ.get("MAIL_ADMIN_PORT", "4110"))
MAX_BODY = 4096
LOCAL_PART = re.compile(r"^[a-z0-9][a-z0-9._+-]{0,63}$")


class Handler(BaseHTTPRequestHandler):
    server_version = "NexovantMailAdmin/1.0"

    def log_message(self, fmt: str, *args: object) -> None:
        # Avoid logging addresses, payloads, or generated mailbox passwords.
        print(f"mail-admin {self.command} {args[1] if len(args) > 1 else ''}")

    def _json(self, status: int, payload: dict[str, object]) -> None:
        body = json.dumps(payload, separators=(",", ":")).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        self.wfile.write(body)

    def _page(self) -> None:
        body = (ROOT / "index.html").read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Content-Security-Policy", "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'; img-src 'self' data:; base-uri 'none'; frame-ancestors 'none'")
        self.send_header("Referrer-Policy", "no-referrer")
        self.end_headers()
        self.wfile.write(body)

    def _require_proxy_auth(self) -> bool:
        # Nginx enforces HTTPS Basic Auth. The app is bound to loopback only.
        if not self.headers.get("X-Remote-User"):
            self._json(401, {"error": "Authentication required."})
            return False
        return True

    def _read_json(self) -> dict[str, object] | None:
        if self.headers.get_content_type() != "application/json":
            self._json(415, {"error": "Send application/json."})
            return None
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            self._json(400, {"error": "Invalid request length."})
            return None
        if length < 1 or length > MAX_BODY:
            self._json(413, {"error": "Request is empty or too large."})
            return None
        try:
            value = json.loads(self.rfile.read(length))
        except (json.JSONDecodeError, UnicodeDecodeError):
            self._json(400, {"error": "Invalid JSON."})
            return None
        if not isinstance(value, dict):
            self._json(400, {"error": "Expected a JSON object."})
            return None
        return value

    def _call_helper(self, request: dict[str, object]) -> dict[str, object]:
        result = subprocess.run(
            ["sudo", "-n", HELPER],
            input=json.dumps(request),
            text=True,
            capture_output=True,
            timeout=12,
            check=False,
        )
        if result.returncode != 0:
            raise RuntimeError("The mailbox operation failed. Check the server log.")
        try:
            response = json.loads(result.stdout)
        except json.JSONDecodeError as exc:
            raise RuntimeError("The mailbox helper returned an invalid response.") from exc
        if not isinstance(response, dict):
            raise RuntimeError("The mailbox helper returned an invalid response.")
        return response

    def do_GET(self) -> None:  # noqa: N802
        path = urlsplit(self.path).path
        if path == "/health":
            self._json(200, {"ok": True})
            return
        if not self._require_proxy_auth():
            return
        if path in ("/", "/index.html"):
            self._page()
            return
        if path == "/api/mailboxes":
            try:
                self._json(200, self._call_helper({"action": "list"}))
            except (OSError, subprocess.SubprocessError, RuntimeError) as exc:
                self._json(503, {"error": str(exc)})
            return
        self._json(404, {"error": "Not found."})

    def do_POST(self) -> None:  # noqa: N802
        if not self._require_proxy_auth():
            return
        # Basic Auth is protected by HTTPS and VPN allowlisting at Nginx. These
        # checks prevent cross-site form submissions from causing changes.
        origin = self.headers.get("Origin", "")
        if origin != "https://nexovantsolutions.com":
            self._json(403, {"error": "Request origin rejected."})
            return
        if not self.headers.get("X-Requested-With") == "MailAdmin":
            self._json(403, {"error": "Request token missing."})
            return
        body = self._read_json()
        if body is None:
            return
        path = urlsplit(self.path).path
        request: dict[str, object]
        if path == "/api/mailboxes":
            local = body.get("local")
            if not isinstance(local, str) or not LOCAL_PART.fullmatch(local.lower()):
                self._json(400, {"error": "Use a valid mailbox name before @nexovantsolutions.com."})
                return
            request = {"action": "create", "local": local.lower()}
        elif path == "/api/aliases":
            alias = body.get("alias")
            destination = body.get("destination")
            if not isinstance(alias, str) or not LOCAL_PART.fullmatch(alias.lower()):
                self._json(400, {"error": "Use a valid alias name."})
                return
            if not isinstance(destination, str) or not LOCAL_PART.fullmatch(destination.lower()):
                self._json(400, {"error": "Choose an existing mailbox as the destination."})
                return
            request = {"action": "alias_add", "alias": alias.lower(), "destination": destination.lower()}
        elif path in ("/api/mailbox-password", "/api/mailbox-disable", "/api/mailbox-enable"):
            local = body.get("local")
            if not isinstance(local, str) or not LOCAL_PART.fullmatch(local.lower()):
                self._json(400, {"error": "Invalid mailbox name."})
                return
            action = "reset" if path.endswith("password") else "enable" if path.endswith("enable") else "disable"
            request = {"action": action, "local": local.lower()}
        elif path == "/api/alias-delete":
            alias = body.get("alias")
            if not isinstance(alias, str) or not LOCAL_PART.fullmatch(alias.lower()):
                self._json(400, {"error": "Invalid alias name."})
                return
            request = {"action": "alias_remove", "alias": alias.lower()}
        else:
            self._json(404, {"error": "Not found."})
            return
        try:
            result = self._call_helper(request)
            self._json(200, result)
        except (OSError, subprocess.SubprocessError, RuntimeError) as exc:
            self._json(400, {"error": str(exc)})


if __name__ == "__main__":
    httpd = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    httpd.daemon_threads = True
    httpd.serve_forever()
