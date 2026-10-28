---
layout: post
title: Week 9 — Navigation and Information Architecture
slug: week-9-navigation-and-information-architecture
date: '2026-10-10'
modified: '2026-10-10'
status: published
wordpress_id: 67928
source_url: https://nuggetofjoy.com/week-9-navigation-and-information-architecture/
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
**Week:** 9


## Learning objectives


By the end of this lesson, you should be able to:


- Compare horizontal, compact, and sidebar navigation patterns.
- Use labels that help visitors predict where links will lead.
- Design clear current-page, focus, and menu states.


## Key concepts


Information architecture organizes content so people can find what they need. Navigation exposes part of that structure through labels, links, menus, and pathways.


Navigation labels should be clear and familiar to the intended audience. A current-page state helps visitors understand where they are. Interactive menus should communicate whether they are open or closed and should be usable with a keyboard.


Choose a navigation pattern based on the number of sections, context of use, and available screen space. A trend is not a substitute for a usability reason.


## Interactive demonstration


**Demo file:** `07-navigation-patterns.html`


Switch between horizontal navigation, a compact menu, and sidebar navigation. Change the current page and observe the active state. Test the compact menu’s open and closed behavior.


[codepen\_embed height="600" pen\_title="07-navigation-patterns" version="2" default\_tab="html,result" slug\_hash="GgWyPOb" user="ndangelo"]See the Pen [07-navigation-patterns](https://codepen.io/editor/ndangelo/pen/01a12150-d5fc-73b2-971c-643398ef7f5c) by Nicholas D'Angelo ([@ndangelo](https://codepen.io/ndangelo))
on [CodePen](https://codepen.io).[/codepen\_embed]


Create a small sitemap for your project and test navigation labels with a classmate. Ask them where they would click to find specific information; revise labels that cause confusion.


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
<p>Multi-page architecture, navigation consistency, relative links</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Create <code>week-09/multi-page-site/</code> with <code>index.html</code>, <code>about.html</code>, <code>work.html</code>, <code>css/styles.css</code>, and optional <code>assets/</code>.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Relative paths (<code>href="about.html"</code>), shared navigation, semantic <code>nav</code>, unique page titles.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Expand the homepage into a three-page mini-site: Home, About, and Work/Services. Add consistent navigation to all pages, make every link work, and identify the current page accessibly.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Reuse navigation across three separate HTML pages.</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong> <code>index.html, about.html, work.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;header&gt;
  &lt;a href="index.html"&gt;Portfolio Name&lt;/a&gt;
  &lt;nav aria-label="Main navigation"&gt;
    &lt;a href="index.html"&gt;Home&lt;/a&gt;
    &lt;a href="about.html"&gt;About&lt;/a&gt;
    &lt;a href="work.html"&gt;Work&lt;/a&gt;
  &lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;&lt;h1&gt;Page-specific heading&lt;/h1&gt;&lt;p&gt;Content for this page.&lt;/p&gt;&lt;/main&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><strong>HTML file:</strong> <code>index.html, about.html, work.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;!-- Save a copy of this page structure in index.html, about.html, and work.html.
     Give each page its own title and main heading. --&gt;
&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Portfolio Name | Home&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header class="site-header"&gt;&lt;a href="index.html"&gt;Portfolio Name&lt;/a&gt;
    &lt;nav aria-label="Main navigation"&gt;&lt;a href="index.html"&gt;Home&lt;/a&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;a href="work.html"&gt;Work&lt;/a&gt;&lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;&lt;h1&gt;Home&lt;/h1&gt;&lt;p&gt;Introduce your portfolio here.&lt;/p&gt;&lt;/main&gt;
  &lt;footer&gt;&lt;p&gt;Contact: hello@example.com&lt;/p&gt;&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>CSS file:</strong> <code>css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">body { margin: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #20242c; }
.site-header { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 20px; background: #20242c; }
.site-header a { color: white; }
nav { display: flex; flex-wrap: wrap; gap: 14px; }
main { max-width: 760px; min-height: 55vh; margin: auto; padding: 24px; }
footer { padding: 20px; background: #f1f5f9; }
@media (max-width: 600px) { .site-header { align-items: flex-start; flex-direction: column; } }</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>Important:</strong> The HTML links to <code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Create all three files, give each a unique title and heading, and click every navigation link.</p>
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
<li><code>multi-page-site/index.html</code>, <code>about.html</code>, and <code>work.html</code> — three complete linked pages.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>multi-page-site/css/styles.css</code> — one shared stylesheet.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>multi-page-site/site-map.pdf</code> or <code>.png</code> — page hierarchy and navigation diagram.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>multi-page-site/README.txt</code> — target audience and page hierarchy.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>All pages link consistently; titles differ; no broken relative links; site map matches the site.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Keep all HTML, CSS, image, text, and PDF files inside the named weekly or project folder.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Open the HTML file in a browser before submitting and confirm linked CSS and images load.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>


## Connection to your website project


Use your sitemap to refine navigation for the midterm site and plan the structure of your final site.


## Before you leave (3-minute exit check)


Write down one thing you changed, one thing you learned from the result, and one question you still have.


## References


These references support the key concepts and practices covered in this lesson. They are provided for verification and further study.


- Figma. (n.d.). \*What is information architecture?\* Figma Resource Library. <https://www.figma.com/resource-library/what-is-information-architecture/>
- World Wide Web Consortium. (n.d.). \*Page structure tutorial\*. Web Accessibility Initiative. <https://www.w3.org/WAI/tutorials/page-structure/>
- Mozilla Contributors. (n.d.). \*Creating links\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links>
