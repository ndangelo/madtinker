#!/usr/bin/env python3
"""Audit imported teaching pages against their WordPress-specific CSS selectors."""
from pathlib import Path
import re, json, collections
posts = {re.search(r'-(\d+)\.md$', p.name).group(1): p for p in Path('_nuggetofjoy').glob('*.md') if re.search(r'-(\d+)\.md$', p.name)}
results = []
for css in sorted(Path('assets/css/imported-posts').glob('*.css')):
    post = posts.get(css.stem)
    if not post:
        has_html = bool(re.search(r'<(?:div|section|article|header)\\b', content))
    preserved = '{::nomarkdown}' in content
    has_markdown = bool(re.search(r'(?m)^\\s*(?:#{1,6}\\s|[-*+]\\s|\\d+[.]\\s)', content))
    risks = []
    if has_html and not preserved:
        risks.append('HTML subject to Markdown parsing')
    if has_html and has_markdown:
        risks.append('Mixed HTML and Markdown')
    results.append(dict(id=css.stem, post=str(post), missing_ids=absent, html=has_html, preserved=preserved, risks=risks))
Path('audit-results').mkdir(exist_ok=True)
Path('audit-results/teaching-css-audit.json').write_text(json.dumps(results, indent=2))
missing = [r for r in results if r.get('missing_ids') or r.get('issue') or r.get('risks')]
lines = ['# Teaching archive CSS scope audit', '', f'CSS files checked: {len(results)}', f'Pages flagged for structural review: {len(missing)}', '', '| WordPress ID | Missing CSS IDs | Structural risks |', '|---|---|---|']
for r in missing:
    lines.append(f"| {r['id']} | {', '.join(r.get('missing_ids', [])) or r.get('issue', '')} | {', '.join(r.get('risks', []))} |")
Path('audit-results/teaching-css-audit.md').write_text('\n'.join(lines)+'\n')
print('\n'.join(lines))
