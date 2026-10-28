---
layout: teaching-post
title: 'Week 4 — CSS Fundamentals: Style the Structure'
slug: week-4-css-fundamentals-style-the-structure
date: '2026-10-09'
modified: '2026-10-10'
status: published
wordpress_id: 67911
source_url: https://nuggetofjoy.com/week-4-css-fundamentals-style-the-structure/
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
**Week:** 4


## Learning objectives


By the end of this lesson, you should be able to:


- Explain the relationship between HTML and CSS.
- Modify common CSS properties including color, padding, border radius, and text alignment.
- Predict how a CSS change will affect a component.


## Key concepts


CSS stands for Cascading Style Sheets. It controls how HTML elements appear: colors, spacing, typography, borders, layout, and responsive behavior.


A CSS rule typically includes a selector and declarations. The selector identifies what to style; each declaration pairs a property with a value. For example, `padding: 24px;` creates space inside an element, while `border-radius: 12px;` rounds its corners.


Good CSS is intentional and consistent. Designers often build reusable rules that establish a visual system.


## Interactive demonstration


**Demo file:** `04-css-rule-playground.html`


Change the preview’s background, text color, padding, corner radius, alignment, and font weight. Read the generated CSS after each change.


[codepen\_embed height="600" pen\_title="04-css-rule-playground" version="2" default\_tab="html,result" slug\_hash="vExpveb" user="ndangelo"]See the Pen [04-css-rule-playground](https://codepen.io/editor/ndangelo/pen/01a1214c-f9f0-702a-8cc7-2d60fc656253) by Nicholas D'Angelo ([@ndangelo](https://codepen.io/ndangelo))
on [CodePen](https://codepen.io).[/codepen\_embed]


Create three visual variations of the same card component. Change no more than three properties in each version. Compare which version best supports the intended message and explain why.


## Connection to your website project


Save your preferred CSS decisions for the midterm site's visual direction.


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
<p>External CSS, selectors, declarations, properties, values, and debugging</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Create <code>week-04/index.html</code> and <code>week-04/css/styles.css</code>; link the stylesheet with a relative path.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>CSS rule syntax <code>selector { property: value; }</code>; element and class selectors; braces, colons, semicolons; <code>&lt;link rel="stylesheet" href="css/styles.css"&gt;</code>.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Style the Week 3 profile page with background and text colors, base font, content width, spacing, and a distinct heading. Intentionally remove one semicolon, observe the effect, and fix it.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Connect HTML to an external stylesheet and practice selectors.</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong> <code>week-04/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">body {
  margin: 0;
  padding: 24px;
  font-family: Arial, sans-serif;
  color: #222222;
  background: #f4f4f4;
}
h1 { color: #2457a7; }
.intro { font-size: 1.2rem; line-height: 1.6; }
.card { padding: 20px; background: white; border: 1px solid #ccc; }</code></pre>
<!-- /wp:code -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><strong>HTML file:</strong> <code>week-04/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;CSS Fundamentals&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main&gt;
    &lt;h1&gt;CSS Fundamentals&lt;/h1&gt;
    &lt;p class="intro"&gt;HTML gives content structure; CSS controls presentation.&lt;/p&gt;
    &lt;section class="card"&gt;&lt;h2&gt;Practice&lt;/h2&gt;&lt;p&gt;Change the selector and observe the result.&lt;/p&gt;&lt;/section&gt;
  &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>CSS file:</strong> <code>week-04/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">body { margin: 0; padding: 24px; font-family: Arial, sans-serif; color: #222; background: #f4f4f4; }
h1 { color: #2457a7; }
.intro { font-size: 1.2rem; line-height: 1.6; }
.card { padding: 20px; background: white; border: 1px solid #ccc; border-radius: 8px; }</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>Important:</strong> The HTML links to <code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Add class="intro" to a paragraph and class="card" to a section. Change the heading color.</p>
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
<li><code>week-04/index.html</code> — profile page linked to external CSS.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>week-04/css/styles.css</code> — at least six declarations across four or more rules.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>week-04/README.txt</code> — explain element, selector, property, and value.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Stylesheet loads; six or more declarations; four or more rules; README defines all four terms.</li>
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


These references support the key concepts and practices covered in this lesson. They are provided for verification and further study.


- Mozilla Contributors. (n.d.). \*CSS styling basics\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics>
- Mozilla Contributors. (n.d.). \*CSS selectors\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors>
- Mozilla Contributors. (n.d.). \*Getting started with CSS\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started>
