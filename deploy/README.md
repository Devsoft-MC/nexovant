# Nexovant Solutions static deployment

The site exports as static HTML into `out/`. It can run on the existing VPS's Nginx without a Node.js service, leaving the existing API proxy untouched.

## First deployment

1. Build the site with `npm ci && npm run build`.
2. Copy the contents of `out/` to a new release directory under `/var/www/nexovantsolutions/releases/` on the VPS. Point `/var/www/nexovantsolutions/current` to that release and make the files readable by Nginx.
3. Install `nexovantsolutions.com.bootstrap.nginx` as `/etc/nginx/sites-available/nexovantsolutions.com`, enable it in `sites-enabled`, run `nginx -t`, then reload Nginx. This temporary vhost only serves ACME challenges for the apex and `www` domains.
4. Issue the first certificate using the existing Certbot webroot:

   ```sh
   certbot certonly --webroot -w /var/www/certbot \
     -d nexovantsolutions.com -d www.nexovantsolutions.com \
     --cert-name nexovantsolutions.com --agree-tos \
     --register-unsafely-without-email --non-interactive
   ```

5. Replace the bootstrap vhost with `nexovantsolutions.com.nginx`, run `nginx -t`, and reload Nginx. The final vhost redirects HTTP to HTTPS, continues serving ACME renewal challenges, and serves static files from `/var/www/nexovantsolutions/current`.
6. Check HTTPS for both domains and confirm that the API host still responds through its existing Nginx proxy.

The certificate command omits an email address because no certificate-notification address was provided. Certbot renewal can still run through its existing system timer.
