# Nexovant Solutions live website deployment

The live homepage is the Vite app in `live-site/`. Build that app and deploy its `dist/` output. The separate Next.js app in `app/` is not the version currently served at `nexovantsolutions.com`.

## Build

From the repository root:

```sh
cd live-site
npm ci
npm run build
```

The static site is written to `live-site/dist/`. The contact form requires the existing Supabase environment values in the ignored `live-site/.env` file; never commit that file. See `live-site/.env.example` for the required variable names.

## Publish to the existing VPS

1. Create a new release directory under `/var/www/nexovantsolutions/releases/`.
2. Copy the contents of `live-site/dist/` into the release directory and ensure Nginx can read the files.
3. Point `/var/www/nexovantsolutions/current` at the new release.
4. Run `nginx -t`, then reload Nginx.
5. Confirm `https://nexovantsolutions.com/`, `https://www.nexovantsolutions.com/`, the contact form, and the API proxy.

The active Nginx site configuration is `nexovantsolutions.com.nginx`. Keep indexing enabled; the live homepage must not send a `noindex` directive. Verify the VPS SSH host key before connecting. Do not bypass host-key checking.
