# Studio CMS API — Cloudflare Worker scaffold

This folder contains a server-side API for connecting the CMS to GitHub. It is deliberately not deployed or active until you configure Cloudflare Access and a GitHub App.

## API routes

- `GET /api/health` — authenticated health check.
- `GET /api/posts` — lists Markdown post files from `_posts/`.
- `POST /api/posts` — creates or updates a post. JSON: `{"path":"_posts/2026-10-27-example.md","content":"---\ntitle: Example\n---\nText","sha":"optional-existing-file-sha"}`.
- `DELETE /api/posts?path=...&sha=...` — deletes a post only when its current Git blob SHA is supplied.
- `GET /api/media?folder=assets/images` — lists media files in the permitted image folder.
- `POST /api/media` — uploads or replaces an image. JSON: `{"path":"assets/images/example.jpg","contentBase64":"...","sha":"optional-existing-file-sha"}`.

The Worker validates request origin, Cloudflare Access JWT signature/audience/issuer/expiry, paths, content size, and file type. GitHub credentials remain server-side. The GitHub App installation token is restricted to the configured repository and contents permission.

## Before deployment

1. Create a GitHub App for your own account. Give it **Contents: Read and write** and **Metadata: Read-only** permissions. Install it only on `ndangelo/madtinker`. Generate a private key.
2. In Cloudflare, create an Access application for the eventual CMS API hostname. Require your identity explicitly; do not allow public access. Record the Access team domain and application AUD.
3. Use a custom hostname on a domain managed by Cloudflare for the dashboard and API if possible. GitHub Pages' `github.io` origin is cross-site from a custom API hostname, which can complicate Access cookie behavior. Configure the dashboard's API base URL to the protected API hostname and ensure CORS allows only the dashboard origin.
4. Configure Worker secrets (never commit these values):
   - `GITHUB_APP_ID`
   - `GITHUB_INSTALLATION_ID`
   - `GITHUB_APP_PRIVATE_KEY` (PEM private key; newlines may be escaped as `\n`)
5. Set the real values for `CF_ACCESS_TEAM_DOMAIN`, `CF_ACCESS_AUD`, and `ALLOWED_ORIGIN` in the Worker configuration. Keep the app private key out of `wrangler.toml`.
6. Deploy from this directory with Wrangler, then verify that unauthenticated requests are denied and authenticated requests can only modify the installed repository.
7. Connect the dashboard UI to this API only after Access, CORS, and the custom hostname have been tested.

## Notes

- This is a scaffold, not a deployed service. No live publishing has been enabled.
- GitHub Pages posts are public once committed. Do not use the public repository for confidential drafts.
- Keep deployment secrets in Cloudflare's secret store. Never paste a GitHub token or private key into the dashboard, a public file, or a chat message.
- Review and test this code in a staging environment before relying on it for production publishing.
