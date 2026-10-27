# Studio CMS dashboard prototype

This is a front-end prototype for the Studio CMS project. It is intentionally static at this stage.

## Features currently implemented

- Posts list with search and status filters
- Create and edit draft content
- Browser-local draft storage using localStorage
- Markdown formatting shortcuts, word count, and a basic preview
- Export a post as a Jekyll-compatible Markdown file with YAML front matter
- Responsive layout for desktop and mobile

## Open the dashboard

After GitHub Pages deployment is enabled, visit:

`https://ndangelo.github.io/madtinker/admin/`

If the repository later moves to a custom domain or a different base path, update the link accordingly.

## Important limitations

- This is not an authenticated admin system. The `noindex` meta tag is not access control.
- Do not enter confidential, sensitive, or student information.
- Drafts are stored only in the current browser profile. Clearing browser storage can remove them, and they do not sync to GitHub.
- The Export .md action downloads a local file; it does not upload or publish it.
- The Publish button is disabled intentionally. GitHub authorization and commits must be handled by a secure backend, never by exposing a GitHub token in browser JavaScript.
- The preview supports a small Markdown subset and is not intended to be a complete CommonMark renderer.

## Next engineering milestone

Choose and configure a server-side publishing service with authentication and narrowly scoped GitHub access. Then replace local-only draft storage with authenticated API calls, add a real media upload endpoint, and add repository/site configuration. Keep secrets in server-side environment variables or managed secrets.
