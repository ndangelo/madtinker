# Studio CMS dashboard

This dashboard is a front-end editor and management UI for the Studio CMS project.

## Local features

- Post search across title, description, category, and tags
- Published / Draft filters
- Create and edit posts with a Markdown toolbar, word count, and basic preview
- Automatic local draft saving after a short pause
- Manual save with Ctrl/Cmd + S
- Custom URL slug and featured-image path fields
- Export an individual post as Jekyll Markdown
- Export and restore a JSON backup
- Duplicate and delete local posts
- Responsive layout

## API features (require separate deployment)

The Settings screen accepts the base URL of a protected publishing API. When connected, the dashboard can:
- Test the API connection
- Sync repository post filenames into the post list
- Load an individual post from GitHub when opened
- Commit a new or edited post to GitHub
- Browse image folders, upload images, replace an existing image, and copy a site-relative image path

The API implementation is in `worker/src/index.js`. Follow [the Worker setup guide](../worker/README.md) before enabling API access. API integration has not been deployed or end-to-end tested.

## Open the dashboard

After GitHub Pages deployment is enabled, visit:

`https://ndangelo.github.io/madtinker/admin/`

## Security and storage limits

- The dashboard is front-end code and is not itself an authentication boundary. The `noindex` meta tag is not access control.
- Do not enter confidential, sensitive, or student information into the local prototype.
- Local drafts are saved in the current browser profile. They are not private server-side drafts and do not sync between devices.
- Export JSON backups regularly while using local storage.
- The Markdown preview supports a limited subset; it is not a full CommonMark renderer.
- Public repository content is public after it is committed. Private drafts need a separate private storage/repository design.
- The API must be protected by Cloudflare Access and use a GitHub App installation restricted to the intended repository. Never embed a token or private key in this dashboard.
- For reliable cross-origin authentication, configure a custom dashboard hostname and API hostname on the same site, protect both with Cloudflare Access, and test browser credential handling before production use.
