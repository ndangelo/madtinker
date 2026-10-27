# Studio CMS dashboard prototype

This dashboard is the front-end prototype for the Studio CMS project.

## Implemented in the browser

- Posts list with search across title, description, category, and tags
- All / Published / Draft filters
- Create and edit posts
- Automatic local draft saving after a short pause while typing
- Manual save with `Ctrl/Cmd + S`
- Markdown formatting toolbar, word count, and a basic safe-text preview
- Custom URL slug and featured-image path/URL fields
- Export a post as a Jekyll-compatible Markdown file
- Export and restore a JSON backup of the local post collection
- Duplicate and delete posts
- Responsive desktop and mobile layout

## Open the dashboard

Once GitHub Pages is enabled for the repository, visit:

`https://ndangelo.github.io/madtinker/admin/`

## Data and privacy limits

- This is **not a secured admin system**. The `noindex` tag only asks search engines not to index the page; it does not prevent anyone from opening it.
- Do not enter confidential, sensitive, or student information.
- Posts are saved in the current browser profile using local storage. They are not synced across devices or committed to GitHub.
- Export backups regularly if you use the prototype for real writing. Browser storage can be cleared, and local storage has limited capacity.
- Exporting a Markdown file downloads it to your computer; it does not publish the file.
- The preview implements a small Markdown subset, not full CommonMark.
- The featured-image field stores only a path or URL. It does not upload the file.

## Publishing architecture

The future production dashboard needs a server-side API with authentication and narrowly scoped GitHub access. GitHub credentials must never be embedded in browser JavaScript. A GitHub App installation limited to the selected repositories is preferred over a personal access token.

Before exposing a live publishing endpoint, configure access control, validate every request server-side, validate file paths and content, add rate limits, and keep credentials in server-side secrets. Public GitHub Pages content is public; private drafts must not be committed to a public repository.

## Next milestones

1. Server-side authentication and GitHub publishing.
2. Repository-backed post listing, creation, editing, and deletion.
3. Media upload and folder browsing with real repository paths.
4. Multi-site configuration and site switching.
5. Robust Markdown preview, validation, revisions, and scheduling.
