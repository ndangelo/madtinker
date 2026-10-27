# Studio CMS

Studio CMS is being developed in this repository, `ndangelo/madtinker`, as the permanent project and test environment.

## Current milestone: Phase 1 — static publishing foundation

The site is built with Jekyll and is designed to publish to GitHub Pages.

Included:
- Responsive editorial homepage
- Article layout with featured image, date, categories, tags, and next/previous links
- Archive grouped by year
- About page and sample post
- SEO metadata and RSS feed
- GitHub Actions workflow for GitHub Pages deployment
- Accessible skip link, semantic structure, and reduced-motion support

## Deployment

1. The default branch is `main`.
2. In the repository's **Settings → Pages**, select **GitHub Actions** as the build and deployment source.
3. Open **Actions** to check the workflow named **Build and deploy Jekyll site**.
4. The current project-site configuration uses `https://ndangelo.github.io` with `/madtinker` as the base path. If a custom domain is configured later, update `url`, `baseurl`, and the Pages domain settings together.

## Publishing a post manually

Create a file in `_posts` named `YYYY-MM-DD-short-title.md`.

Example:

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

Write the article below the front matter using Markdown. Store images in `assets/images/` and use site-relative paths in front matter.

## Roadmap

1. **Static site foundation** — in place; deployment verification pending.
2. **Editorial dashboard prototype** — create/edit post UI and preview.
3. **Secure publishing** — authenticated backend that commits content to GitHub. Never expose a GitHub token in browser JavaScript.
4. **Media library** — upload and browse assets.
5. **Multi-site support** — manage publishing destinations from one dashboard.
6. **Polish and safeguards** — validation, drafts, accessibility, and error handling.

## Security

GitHub Pages content is public. Do not commit private drafts, credentials, access tokens, student records, or other confidential information. The future dashboard must use a secure backend for authentication and GitHub API operations; a static admin page alone cannot securely publish changes.

The sample post and cover image are placeholders to replace before using the site as a real publication.
