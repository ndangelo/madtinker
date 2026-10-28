---
layout: teaching-post
title: Week 5 — Typography, Color, and Visual Hierarchy
slug: week-5-typography-color-and-visual-hierarchy
date: '2026-10-09'
modified: '2026-10-10'
status: published
wordpress_id: 67913
source_url: https://nuggetofjoy.com/week-5-typography-color-and-visual-hierarchy/
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
**Week:** 5


## Learning objectives


By the end of this lesson, you should be able to:


- Use type scale, line length, and spacing to establish hierarchy.
- Explain how color contrast affects readability.
- Develop a consistent visual direction for a web page.


## Key concepts


Typography communicates tone and creates a path through information. Headings, subheadings, body text, labels, and captions should have distinct but related roles. Scale, weight, line height, and line length all affect readability.


Color communicates hierarchy and mood, but color choices must maintain sufficient contrast. A beautiful palette is not successful if visitors cannot comfortably read its text.


A visual system should be consistent without making every element identical. Use a limited set of type styles, a deliberate color palette, and repeatable spacing decisions.


## Interactive demonstration


**Demo file:** `15-typography-hierarchy.html`


Experiment with the Typography Hierarchy Lab. Adjust headline scale, body text size, line length, and headline style. Then use Color & Contrast Lab to compare text and background combinations.


[codepen\_embed height="300" pen\_title="15-typography-hierarchy" version="2" default\_tab="html,result" slug\_hash="xbqpmzz" user="ndangelo"]See the Pen [15-typography-hierarchy](https://codepen.io/editor/ndangelo/pen/01a12159-fe62-762f-a827-11cf85008e0d) by Nicholas D'Angelo ([@ndangelo](https://codepen.io/ndangelo))
on [CodePen](https://codepen.io).[/codepen\_embed]


Create a one-page style tile with a headline, subheading, body text, button, and three to five colors. Test text/background combinations and record contrast ratios for main text colors.


## Connection to your website project


Use this style tile as a visual guide for the midterm and final websites.


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
<p>Typography, color, hierarchy, reusable classes, and accessible contrast</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Create <code>week-05/index.html</code> and <code>week-05/css/styles.css</code>.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>HTML class attributes, CSS class selectors, font stacks, <code>font-size</code>, <code>font-weight</code>, <code>line-height</code>, color values, and CSS custom properties such as <code>--color-accent</code>.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Create a small style guide and apply it to the page. Define at least four colors, a type scale for h1, h2, body, and small text, and style a button/link. Check contrast with a contrast checker.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Create reusable color and spacing values with custom properties.</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong> <code>week-05/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">:root {
  --color-ink: #20242c;
  --color-paper: #f7f5f0;
  --color-accent: #c64f3d;
  --space-unit: 8px;
}
body {
  color: var(--color-ink);
  background: var(--color-paper);
  font-family: Arial, sans-serif;
  line-height: 1.6;
}
a { color: var(--color-accent); }</code></pre>
<!-- /wp:code -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><strong>HTML file:</strong> <code>week-05/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Style Guide Example&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main class="style-guide"&gt;
    &lt;p class="eyebrow"&gt;Visual identity&lt;/p&gt;
    &lt;h1&gt;A small style guide&lt;/h1&gt;
    &lt;p&gt;Use a consistent palette, typography, and spacing system.&lt;/p&gt;
    &lt;a class="button" href="#details"&gt;Explore the guide&lt;/a&gt;
    &lt;section id="details"&gt;&lt;h2&gt;Color and type&lt;/h2&gt;&lt;p&gt;Reuse design choices consistently.&lt;/p&gt;&lt;/section&gt;
  &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>CSS file:</strong> <code>week-05/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">:root {
  --color-ink: #20242c;
  --color-paper: #f7f5f0;
  --color-accent: #c64f3d;
  --space-unit: 8px;
}
body { margin: 0; background: var(--color-paper); color: var(--color-ink); font: 16px/1.6 Arial, sans-serif; }
.style-guide { max-width: 760px; margin: auto; padding: calc(var(--space-unit) * 3); }
h1 { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; }
.eyebrow { color: var(--color-accent); text-transform: uppercase; letter-spacing: .08em; }
.button { display: inline-block; padding: 10px 16px; background: var(--color-accent); color: white; text-decoration: none; border-radius: 5px; }</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>Important:</strong> The HTML links to <code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Change the accent color and add a .button class with padding, background, and border-radius.</p>
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
<li><code>week-05/index.html</code> and <code>week-05/css/styles.css</code> — styled page using a consistent design system.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>week-05/style-guide.pdf</code> or <code>.png</code> — four labeled color swatches, type choices, h1/h2/body samples, and button/link example.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>week-05/README.txt</code> — typefaces/fallbacks and contrast results for body text and accent action.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Four palette colors; four text levels; reusable classes or variables; contrast results recorded; guide matches page.</li>
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


- Mozilla Contributors. (n.d.). \*Fundamental text and font styling\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals>
- Google. (n.d.). \*Google Fonts\*. Google Fonts. <https://fonts.google.com/>
- World Wide Web Consortium. (n.d.). \*Tips for designing\*. Web Accessibility Initiative. <https://www.w3.org/WAI/tips/designing/>
