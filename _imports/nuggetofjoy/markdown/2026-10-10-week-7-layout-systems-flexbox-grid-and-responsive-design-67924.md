---
title: 'Week 7 — Layout Systems: Flexbox, Grid, and Responsive Design'
slug: week-7-layout-systems-flexbox-grid-and-responsive-design
date: '2026-10-10'
modified: '2026-10-10'
status: published
wordpress_id: 67924
source_url: https://nuggetofjoy.com/week-7-layout-systems-flexbox-grid-and-responsive-design/
author: admin
categories:
- Projects
tags: []
migration:
  format: hybrid-markdown
  original_html: original-html/67924.html
  post_css: null
  needs_review: true
---

## 90-minute class plan


- **0–10 min — Opening and visual warm-up:** Introduce the learning goals, review the previous class, and discuss a relevant website example.
- **10–25 min — Mini-lesson:** Explain the key concepts and show examples. Keep the presentation focused on what students will apply.
- **25–45 min — Instructor demonstration:** Walk through the interactive CodePen or a live example. Pause for predictions and questions.
- **45–70 min — Guided and independent practice:** Students complete the lesson exercise, first following a short demonstration and then making their own decisions.
- **70–83 min — Apply and critique:** Students connect the skill to their website project, compare results with a partner, and make one improvement.
- **83–90 min — Share-out and exit ticket:** Review key takeaways and ask students to identify one thing they learned and one next step.


**Course:** Introduction to Web Design  
**Week:** 7


## Learning objectives


By the end of this lesson, you should be able to:


- Distinguish common uses of Flexbox and CSS Grid.
- Control columns, gaps, and item spans in a grid.
- Explain how a layout should adapt to different viewport sizes.


## Key concepts


Flexbox is useful for arranging items along one primary axis, such as navigation links or a group of buttons. CSS Grid is designed for layouts that need coordinated rows and columns.


Responsive design means a layout adapts to its available space. This may involve changing column counts, adjusting spacing, resizing typography, or changing navigation. A responsive layout should preserve the content’s purpose and usability—not merely shrink a desktop design.


Choose the layout pattern based on content, hierarchy, and the behavior people need.


## Interactive demonstration


**Demo file:** `06-css-grid-playground.html`


Experiment with the CSS Grid Playground and Flexbox Playground. Change columns, gaps, item spans, direction, alignment, and wrapping. Resize your browser to test the layout.


[codepen\_embed height="300" pen\_title="06-css-grid-playground" version="2" default\_tab="html,result" slug\_hash="dPvJwZQ" user="ndangelo"]See the Pen [06-css-grid-playground](https://codepen.io/editor/ndangelo/pen/01a1214e-d499-7e75-b610-52d32f415512) by Nicholas D'Angelo ([@ndangelo](https://codepen.io/ndangelo))
on [CodePen](https://codepen.io).[/codepen\_embed]


Build a responsive card grid with at least six items. At wide widths, use multiple columns; at narrow widths, make content easy to read without horizontal scrolling. Use Flexbox for one component and Grid for another.


## Connection to your website project


Apply responsive layout principles to the midterm site and test it at mobile and desktop widths.


<div class="wp-block-group sublime-lab-card has-custom-css"><!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|luminous-vivid-amber"}}}},"textColor":"luminous-vivid-amber"} -->
<h2 class="wp-block-heading has-luminous-vivid-amber-color has-text-color has-link-color">Sublime Text coding lab</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Complete this coding task in Sublime Text, save the files using the names below, and open the HTML page in a browser to test it.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Today's coding focus</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Flexbox, CSS Grid, responsive breakpoints, and mobile-first testing</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Create <code>week-07/index.html</code> and <code>week-07/css/styles.css</code>.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p><code>display: flex</code>, <code>gap</code>, <code>justify-content</code>, <code>align-items</code>, <code>display: grid</code>, <code>grid-template-columns</code>, <code>minmax()</code>, and <code>@media</code> queries.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Build at least three cards using Grid or Flexbox. Add a breakpoint that changes the layout from multiple columns to one column. Test at approximately 375px, 768px, and 1280px.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Build a three-card grid and stack it on narrow screens.</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong> <code>week-07/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}
.card { padding: 24px; background: white; border: 1px solid #cbd5e1; }
@media (max-width: 600px) {
  .card-grid { grid-template-columns: 1fr; }
}</code></pre>
<!-- /wp:code -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><strong>HTML file:</strong> <code>week-07/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Responsive Card Layout&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main class="card-grid"&gt;
    &lt;article class="card"&gt;&lt;h2&gt;Design&lt;/h2&gt;&lt;p&gt;Explore visual ideas and layouts.&lt;/p&gt;&lt;/article&gt;
    &lt;article class="card"&gt;&lt;h2&gt;Develop&lt;/h2&gt;&lt;p&gt;Build pages with HTML and CSS.&lt;/p&gt;&lt;/article&gt;
    &lt;article class="card"&gt;&lt;h2&gt;Test&lt;/h2&gt;&lt;p&gt;Check designs on different screens.&lt;/p&gt;&lt;/article&gt;
  &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>CSS file:</strong> <code>week-07/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">body { margin: 0; padding: 24px; font-family: Arial, sans-serif; background: #f1f5f9; color: #172033; }
.card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
.card { padding: 24px; background: white; border: 1px solid #cbd5e1; border-radius: 8px; }
@media (max-width: 600px) {
  .card-grid { grid-template-columns: 1fr; }
}
@media (min-width: 601px) and (max-width: 900px) {
  .card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>Important:</strong> The HTML links to <code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Change to two columns, then change the breakpoint from 600px to 800px. Test at 375px, 768px, and 1280px.</p>
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
<li><code>week-07/index.html</code> and <code>week-07/css/styles.css</code> — responsive page with at least three cards and a media query.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>week-07/responsive-tests.pdf</code> or <code>.png</code> — screenshots at approximately 375px, 768px, and 1280px.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>week-07/README.txt</code> — layout technique, breakpoint, and one issue corrected.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Three cards; no horizontal overflow at three widths; Flexbox or Grid and at least one media query.</li>
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


- Mozilla Contributors. (n.d.). \*Flexbox\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox>
- Mozilla Contributors. (n.d.). \*CSS grid layout\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids>
- Mozilla Contributors. (n.d.). \*Responsive web design\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design>
