#!/usr/bin/env python3
"""Flag structural risks in styled WordPress lessons without modifying content."""
from pathlib import Path
import json
import re

posts = {
    match.group(1): path
    for path in Path("_nuggetofjoy").glob("*.md")
    if (match := re.search(r"-(\d+)\.md$", path.name))
}
results = []
for css in sorted(Path("assets/css/imported-posts").glob("*.css")):
    post = posts.get(css.stem)
    if post is None:
        results.append({"id": css.stem, "issue": "missing_post"})
        continue
    content = post.read_text(encoding="utf-8")
    style = re.sub(r"/\*.*?\*/", "", css.read_text(encoding="utf-8"), flags=re.S)
    selectors = " ".join(re.findall(r"([^{}]+)\{", style))
    ids = sorted(set(re.findall(r"#([A-Za-z][\w-]*)", selectors)))
    absent = [
        item for item in ids
        if not re.search(r'\bid\s*=\s*["\x27]' + re.escape(item) + r'["\x27]', content)
    ]
    body = content.split("\n---\n", 1)[-1]
    has_html = bool(re.search(r"<(?:div|section|article|header)\b", body))
    preserved = "{::nomarkdown}" in body
    has_markdown = bool(re.search(r"(?m)^\s*(?:#{1,6}\s|[-*+]\s|\d+[.]\s)", body))
    risks = []
    if has_html and not preserved:
        risks.append("HTML subject to Markdown parsing")
    if has_html and has_markdown:
        risks.append("Mixed HTML and Markdown")
    results.append({
        "id": css.stem, "post": str(post), "missing_ids": absent,
        "html": has_html, "preserved": preserved, "risks": risks
    })

Path("audit-results").mkdir(exist_ok=True)
Path("audit-results/teaching-css-audit.json").write_text(json.dumps(results, indent=2))
flagged = [r for r in results if r.get("missing_ids") or r.get("issue") or r.get("risks")]
lines = [
    "# Teaching archive CSS audit", "",
    f"CSS files checked: {len(results)}",
    f"Pages flagged for structural review: {len(flagged)}", "",
    "| WordPress ID | Missing CSS IDs | Structural risks |",
    "|---|---|---|",
]
for result in flagged:
    lines.append(
        f"| {result['id']} | {', '.join(result.get('missing_ids', [])) or result.get('issue', '')} "
        f"| {', '.join(result.get('risks', []))} |"
    )
Path("audit-results/teaching-css-audit.md").write_text("\n".join(lines) + "\n")
print("\n".join(lines))
