# Studio CMS API — Cloudflare Worker scaffold

This folder contains the server-side API for connecting the dashboard to GitHub. It is not deployed or active until Cloudflare Access and a GitHub App are configured.

## API routes

- `GET /api/health` — authenticated health check.
- `GET /api/sites` — returns the allowlisted sites available to this account.
- `GET /api/posts?site=studio-journal` — lists Markdown posts in the selected site's `_posts/` directory.
- `GET /api/posts?site=studio-journal&path=_posts/2026-10-27-example.md` — reads a single Markdown post and returns its content and Git blob SHA.
- `POST /api/posts?site=studio-journal` — creates or updates a post. JSON: `{"path":"_posts/2026-10-27-example.md","content":"---\ntitle: Example\n---\nText","sha":"optional-existing-file-sha"}`.
- `DELETE /api/posts?site=studio-journal&path=...&sha=...` — deletes a post only when its current Git blob SHA is supplied.
- `GET /api/media?site=studio-journal&folder=assets/images` — lists media files in the selected site's permitted image folder.
- `POST /api/media?site=studio-journal` — uploads or replaces an image. JSON: `{"path":"assets/images/example.jpg","contentBase64":"...","sha":"optional-existing-file-sha"}`.

## Multi-site configuration

The dashboard reads its site list from the server. Configure `GITHUB_SITES` as a JSON array in Worker variables, for example:

```json
[
  {
    "id": "studio-journal",
    "title": "Studio Journal",
    "repository": "ndangelo/madtinker",
    "baseUrl": "https://ndangelo.github.io/madtinker"
  },
  {
    "id": "teaching-site",
    "title": "Teaching Site",
    "repository": "ndangelo/your-teaching-repository",
    "baseUrl": "https://ndangelo.github.io/your-teaching-repository"
  }
]
```

The second entry is an example only; replace it with a real repository you own before enabling it. The GitHub App must be installed on every configured repository. The API rejects site IDs that are not on the server allowlist, so a browser cannot use it to target arbitrary repositories. Each site should have its own valid Jekyll setup and deployment workflow.

## Before deployment

1. Create a GitHub App for your own account. Give it **Contents: Read and write** and **Metadata: Read-only** permissions. Install it only on the repositories you intend to manage. Generate a private key.
2. In Cloudflare, create an Access application for the CMS dashboard/API hostname. Require your identity explicitly; do not allow public access. Record the Access team domain and application AUD.
3. Prefer a custom dashboard hostname and API hostname on the same site. GitHub Pages' `github.io` origin is cross-site from a custom API hostname, which can complicate Access cookie behavior. Configure the dashboard's API base URL and set CORS to the exact dashboard origin.
4. Configure Worker secrets (never commit these values):
   - `GITHUB_APP_ID`
   - `GITHUB_INSTALLATION_ID`
   - `GITHUB_APP_PRIVATE_KEY` (GitHub App PEM key; the Worker accepts RSA PKCS#1 or PKCS#8 PEM)
5. Set `GITHUB_SITES`, `CF_ACCESS_TEAM_DOMAIN`, `CF_ACCESS_AUD`, and `ALLOWED_ORIGIN` in the Worker configuration. Keep the private key out of `wrangler.toml`.
6. Deploy from this directory with Wrangler, then verify that unauthenticated requests are denied and authenticated requests can only modify allowlisted repositories.
7. Connect the dashboard UI to the protected API only after Access, CORS, and the custom hostname have been tested.

## Security and limitations

- The Worker verifies the Cloudflare Access JWT signature, issuer, audience, and expiry. Cloudflare Access must still be configured to protect the hostname and require the intended user.
- GitHub App installation tokens are requested for the selected repository. The App installation must have access to that repository.
- Request origin, content size, post paths, media paths, and media extensions are validated. The API does not allow arbitrary file paths.
- Public GitHub Pages content is public. Do not commit private drafts or student information to a public repository.
- This is a scaffold, not a deployed or end-to-end-tested service. Review and test it in a staging environment before relying on production publishing.
