#!/usr/bin/env python3
"""Audit imported teaching pages against their WordPress-specific CSS selectors."""
from pathlib import Path
import re, json, collections
posts = {re.search(r'-(\d+)\.md$', p.name).group(1): p for p in Path('_nuggetofjoy').glob('*.md') if re.search(r'-(\d+)\.md$', p.name)}
results = []
for css in sorted(Path('assets/css/imported-posts').glob('*.css')):
    post = posts.get(css.stem)
    if not post:
        results.append(dict(id=css.stem, issue='missing_post'))
        continue
    content = post.read_text(encoding='utf-8')
    style = css.read_text(encoding='utf-8')
    # Detect ID selector roots only, excluding colors, comments, and URLs.
    style = re.sub(r'/\*.*?\*/', '', style, flags=re.S)
    selector_text = ' '.join(re.findall(r'([^{}]+)\{', style))
    ids = sorted(set(re.findall(r'#([A-Za-z][\w-]*)', selector_text)))
    absent = [id for id in ids if not re.search(r'\bid\s*=\s*["\']'+re.escape(id)+r'["\']', content)]
    results.append(dict(id=css.stem, post=str(post), missing_ids=absent, html=bool(re.search(r'<(?:div|section|article|header)\b', content)), preserved='{::nomarkdown}' in content))
Path('audit-results').mkdir(exist_ok=True)
Path('audit-results/teaching-css-audit.json').write_text(json.dumps(results, indent=2))
missing = [r for r in results if r.get('missing_ids') or r.get('issue')]
lines = ['# Teaching archive CSS scope audit', '', f'CSS files checked: {len(results)}', f'Pages with unmatched ID selectors or missing posts: {len(missing)}', '', '| WordPress ID | Missing CSS ID selectors |', '|---|---|']
for r in missing:
    lines.append(f"| {r['id']} | {', '.join(r.get('missing_ids', [])) or r.get('issue', '')} |")
Path('audit-results/teaching-css-audit.md').write_text('\n'.join(lines)+'\n')
print('\n'.join(lines))
