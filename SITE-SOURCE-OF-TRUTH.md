# Nexovant website source of truth

The live site was fetched over HTTPS on 2026-11-13. Its HTML and JavaScript bundle match the full Vite homepage. The maintained copy of that app now lives in [`live-site/`](live-site/); edit and deploy that project for `nexovantsolutions.com`.

Use these commands from the repository root:

- `npm ci --prefix live-site` to install the live site's dependencies
- `npm run build` to generate `live-site/dist/`
- `npm run dev` to preview the live site locally

The `app/` directory is a separate Next.js implementation and is not the version currently served at the domain. Its scripts are explicitly named `*:next`. Do not use its build output for production deployment.

`../downloaded-site/project-bolt-source/project/` and `../downloaded-site/` are local downloaded copies. They have also been synchronized for reference, but `live-site/` in this repository is the editable canonical source going forward.

Pending figures, case study results, and testimonials are clearly marked in the live source. Add verified metrics and client quotes only after confirming the facts and permission. No Review or AggregateRating schema is present.

The updated local production build is ready. Publishing is still pending because the VPS rejected SSH host-key verification; do not bypass that check. See `deploy/README.md` for the release steps.
