# Mail Admin

Small owner-only mailbox and alias manager for `nexovantsolutions.com`.

## Access model

- Nginx serves the app at `https://nexovantsolutions.com/mail/`.
- The Nginx location is allowlisted to the existing WireGuard client (`10.77.0.1`) and requires HTTP Basic Auth over HTTPS.
- The Python API binds only to `127.0.0.1:4110`.
- The API runs as an unprivileged `mailadmin` service account. It can invoke only the root-owned mailbox helper through sudoers.
- The helper validates every address against the exact mail domain and supported operations. It edits Dovecot/Postfix flat files atomically, compiles the Postfix maps, and reloads only those mail services.
- New and reset passwords are generated, hashed with Dovecot, and shown to the admin once. Passwords are never written to application logs.
- Disabling a mailbox preserves its Maildir data. It does not erase stored mail.

## Operations

- List active mailboxes and aliases.
- Create a mailbox and show its generated password once.
- Reset a mailbox password.
- Disable a mailbox while retaining its stored mail.
- Re-enable a disabled mailbox; this issues a fresh password and restores access to retained mail.
- Add or remove aliases to active mailboxes.

`postmaster@` and `abuse@` are required system aliases and cannot be removed.
