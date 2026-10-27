# Studio CMS

Studio CMS is being developed in this repository, `ndangelo/madtinker`, as the permanent project and test environment.

## Current milestone

The repository now contains a Jekyll static site, a richer browser dashboard prototype, and a secure-publishing API scaffold.

### Static site

- Responsive editorial homepage and post layout
- Archive and About page
- SEO metadata and RSS feed
- GitHub Actions deployment workflow
- GitHub Pages project-site configuration for `https://ndangelo.github.io/madtinker/`

### Dashboard prototype

Open `admin/` after the Pages deployment is live. The dashboard currently supports:
- Post search and Published / Draft filters
- Markdown editor, formatting toolbar, preview, and word count
- Browser-local autosave
- Duplicate and delete controls
- Export a post as Jekyll Markdown
- Export/restore a JSON backup
- Custom URL slug and featured-image path
- API settings, repository post sync, and publish controls
- Repository-backed image browsing and uploads when the protected API is configured

The dashboard is still public front-end code. Its browser-local drafts are not private storage. The API features remain inactive until the Worker and Cloudflare Access are configured and deployed.

### Secure publishing API scaffold

See [worker/README.md](worker/README.md). It includes Cloudflare Access JWT validation, GitHub App installation-token generation, post read/write/delete routes, and image listing/upload routes. Configure the GitHub App and Cloudflare Access before deployment; no secrets are stored in this repository.

## Deployment

1. In repository **Settings → Pages**, choose **GitHub Actions** as the build/deployment source.
2. Open **Actions** to check the workflow named **Build and deploy Jekyll site**.
3. The current project-site configuration uses `https://ndangelo.github.io` with `/madtinker` as the base path.
4. If a custom domain is configured later, update `url`, `baseurl`, and Pages domain settings together.

## Manual post format

Create a file in `_posts` named `YYYY-MM-DD-short-title.md`:

```yaml
---
title: "My article title"
date: 2026-10-27 09:00:00 -0400
description: "A short summary for search and sharing."
categories:
  - Photography
tags:
  - process
  - studio
image: /assets/images/my-cover.jpg
image_alt: "Description of the image"
published: true
---
```

Write the article below the front matter using Markdown. Store images in `assets/images/`.

## Security and data handling

- GitHub Pages content is public. Never commit confidential drafts, credentials, access tokens, student records, or other private information.
- Do not place a GitHub personal access token in browser JavaScript.
- Use a GitHub App restricted to this repository and Cloudflare Access to protect the publishing API.
- The admin page's `noindex` directive is not authentication. The dashboard should be served behind access control before real use.
- Export local dashboard backups regularly until a server-backed draft store exists.

## Roadmap

1. Static Jekyll foundation — in place; verify the Pages build and live deployment.
2. Dashboard editor and local draft management — prototype implemented.
3. Secure API integration — scaffold implemented; deployment and authentication configuration pending.
4. Repository-backed posts and media — UI and API routes implemented; needs end-to-end verification.
5. Multi-site management — planned.
6. Production hardening — full Markdown rendering, revisions, scheduled publishing, conflict resolution, and automated tests.
