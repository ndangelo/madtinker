# Studio CMS — Phase 1 static blog

This is the first milestone: a reusable Jekyll-powered static publishing site. It does not yet include the private dashboard or secure publishing backend.

## What's included

- Responsive editorial homepage
- Post layout with featured image, date, categories, tags, and next/previous links
- Archive grouped by year
- About page
- Sample post
- Jekyll SEO and RSS feed support
- GitHub Actions workflow for GitHub Pages deployment
- Accessible skip link, semantic structure, and reduced-motion support

## First setup

1. Create a **new repository** on GitHub for this test site. Do not use an existing live-site repository.
2. Upload the contents of this folder to the repository root, preserving folders and filenames.
3. In the repository settings, open **Pages** and choose **GitHub Actions** as the build/deploy source.
4. Ensure the default branch is named `main`. If it is not, adjust `.github/workflows/pages.yml`.
5. Open the Actions tab and watch the workflow run. When it succeeds, the deployment URL appears in the workflow or Pages settings.
6. Edit `_config.yml` with the site title, description, and author. Replace the sample post and placeholder cover before public launch.

## Writing posts

Create a file in `_posts` using this filename format:

`YYYY-MM-DD-short-title.md`

Example front matter:

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

Then write the article below the second `---` using Markdown.

## Important notes

- GitHub Pages sites are public. Do not store confidential drafts, access tokens, student information, or private content in this repository.
- The dashboard is a later phase. Do not place a GitHub personal access token in client-side JavaScript.
- The sample image is a placeholder and should be replaced.
- Google Fonts are loaded remotely in the CSS; remove the `@import` if you prefer system fonts or want no external font request.
- This first phase is intentionally a static-site foundation, not yet a WordPress-like CMS.
