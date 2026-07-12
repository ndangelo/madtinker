# MadTinker CMS

This directory adds a Decap CMS editor at `/admin/`.

## What it edits

- Blog posts in `_posts`
- The About, Categories, and Archives pages
- Site settings in `_config.yml`
- Uploaded media in `media/uploads`

## Authentication

The CMS is configured to write to `ndangelo/madtinker` on the `main` branch.
For production editing, enable GitHub authentication for Decap CMS on the host
serving `/admin/`.

If the site is served by Netlify, you can switch `admin/config.yml` to the
Netlify Git Gateway backend after enabling Identity and Git Gateway:

```yml
backend:
  name: git-gateway
  branch: main
```

For local testing, run a Decap local backend server and open `/admin/` from a
local Jekyll server.
