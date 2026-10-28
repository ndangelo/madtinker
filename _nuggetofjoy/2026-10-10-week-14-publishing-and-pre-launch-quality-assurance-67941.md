---
layout: post
title: Week 14 — Publishing and Pre-Launch Quality Assurance
slug: week-14-publishing-and-pre-launch-quality-assurance
date: '2026-10-10'
modified: '2026-10-10'
status: published
wordpress_id: 67941
source_url: https://nuggetofjoy.com/week-14-publishing-and-pre-launch-quality-assurance/
author: admin
categories:
- Projects
tags: []
---

## 90-minute class plan


- **0–10 min — Opening and visual warm-up:** Introduce the learning goals, review the previous class, and discuss a relevant website example.
- **10–25 min — Mini-lesson:** Explain the key concepts and show examples. Keep the presentation focused on what students will apply.
- **25–45 min — Instructor demonstration:** Walk through the interactive CodePen or a live example. Pause for predictions and questions.
- **45–70 min — Guided and independent practice:** Students complete the lesson exercise, first following a short demonstration and then making their own decisions.
- **70–83 min — Apply and critique:** Students connect the skill to their website project, compare results with a partner, and make one improvement.
- **83–90 min — Share-out and exit ticket:** Review key takeaways and ask students to identify one thing they learned and one next step.


**Course:** Introduction to Web Design  
**Week:** 14


## Learning objectives


By the end of this lesson, you should be able to:


- Describe key tasks in a website pre-launch review.
- Test links, content, responsive behavior, accessibility, and assets.
- Explain why publishing requires a final human review.


## Key concepts


Before a site is shared, review its content, navigation, responsive layout, forms, images, page metadata, and contact information. Remove placeholder text, check for broken links, and confirm that important interactions work.


Test at more than one viewport width and use keyboard navigation. Make sure images are optimized and text remains readable. If the site is being published publicly, review permissions, ownership, and any personal information included.


A checklist helps you work systematically, but it does not guarantee a perfect experience on every device or for every visitor.


## Interactive demonstration


**Demo file:** `14-publishing-checklist.html`


Use the Website Publishing Checklist and mark items only after you have tested them. Discuss which checks can be automated and which need a person to review the result.


[codepen\_embed height="600" pen\_title="14-publishing-checklist" version="2" default\_tab="html,result" slug\_hash="yyMpGjb" user="ndangelo"]See the Pen [14-publishing-checklist](https://codepen.io/editor/ndangelo/pen/01a12158-df7b-7121-9135-e03b71400e81) by Nicholas D'Angelo ([@ndangelo](https://codepen.io/ndangelo))
on [CodePen](https://codepen.io).[/codepen\_embed]


Conduct a pre-launch review of your current website. Create a short bug list ordered by impact: critical problems first, then usability issues, then minor visual refinements.


## Connection to your website project


Use this review to prepare your final project for presentation.


<div class="wp-block-group sublime-lab-card"><!-- wp:heading -->
<h2 class="wp-block-heading">Sublime Text coding lab</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Complete this coding task in Sublime Text, save the files using the names below, and open the HTML page in a browser to test it.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Today's coding focus</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Publishing, deployment-ready structure, relative paths, pre-launch QA</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Prepare <code>site-ready/</code> with <code>index.html</code>, other HTML pages, <code>css/styles.css</code>, <code>assets/</code>, <code>README.txt</code>, and <code>asset-credits.txt</code>.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Relative paths, consistent capitalization, stylesheet links, image <code>src</code> paths, remove local-only paths and unused files.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Prepare the multi-page site for static hosting. Check links, images, CSS paths, titles, responsive behavior, and credits. Test locally and follow the instructor's publishing workflow if available.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Document the site structure and pre-launch checks.</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong> <code>week-14/README.txt</code></p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->
<!-- wp:code -->
<pre class="wp-block-code"><code class="">PROJECT: Student Portfolio
PAGES:
- index.html
- about.html
- work.html
STYLES:
- css/styles.css
ASSETS:
- assets/
PRE-LAUNCH CHECKS:
- Test all navigation links.
- Test mobile, tablet, and desktop widths.
- Check alt text and asset credits.
- Confirm page titles are unique.
- Confirm no files are missing.</code></pre>
<!-- /wp:code -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><strong>HTML file:</strong> <code>week-14/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Launch Checklist&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;&lt;main&gt;&lt;h1&gt;Pre-launch checklist&lt;/h1&gt;&lt;ul&gt;&lt;li&gt;Navigation links work.&lt;/li&gt;&lt;li&gt;Mobile layout is readable.&lt;/li&gt;&lt;li&gt;Images have appropriate alt text and credits.&lt;/li&gt;&lt;li&gt;Titles and descriptions are unique.&lt;/li&gt;&lt;/ul&gt;&lt;/main&gt;&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>CSS file:</strong> <code>week-14/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">body { margin: 0; font-family: Arial, sans-serif; line-height: 1.7; color: #172033; background: #f8fafc; }
main { max-width: 760px; margin: 40px auto; padding: 24px; background: white; border: 1px solid #cbd5e1; border-radius: 8px; }
li { margin-bottom: 10px; }</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>Important:</strong> The HTML links to <code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Expand this to at least ten checks. Test locally, then repeat the checks on the published URL.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Save and test</h4>
<!-- /wp:heading -->
<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Save the file in the exact folder shown above.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Open the HTML file in a browser, or refresh it after saving if it is already open.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Check that linked CSS, images, and navigation work. If something fails, inspect filenames, capitalization, nesting, and relative paths.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->
<!-- wp:heading -->
<h2 class="wp-block-heading">Assignment and required deliverables</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Submit every item below. Use the specified filenames and folder structure. A screenshot does not replace a required source file.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Required files</h3>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>site-ready/</code> — complete project folder with source files and assets organized into <code>css/</code> and <code>assets/</code>.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>site-ready/README.txt</code> — description, folder map, local preview instructions, published URL if deployed.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>site-ready/launch-checklist.txt</code> — at least 10 pre-launch checks marked pass/fail.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>site-ready/asset-credits.txt</code> — sources and licenses for third-party assets.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>No missing files; relative paths work; 10 checklist items; README and credits included; publishing status stated accurately.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Keep all HTML, CSS, image, text, and PDF files inside the named weekly or project folder.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Open the HTML file in a browser before submitting and confirm linked CSS and images load.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>


## Before you leave (3-minute exit check)


Write down one thing you changed, one thing you learned from the result, and one question you still have.


## References


These references support the key concepts and practices covered in this lesson. They are provided for verification and further study.


- GitHub. (n.d.). \*Quickstart for GitHub Pages\*. GitHub Docs. <https://docs.github.com/en/pages/quickstart>
- Netlify. (n.d.). \*Deploy overview\*. Netlify Docs. <https://docs.netlify.com/site-deploys/overview/>
- World Wide Web Consortium. (n.d.). \*The W3C markup validation service\*. W3C. <https://validator.w3.org/>
