---
layout: post
title: Week 6 — Images and Art Direction
slug: week-6-images-and-art-direction
date: '2026-10-10'
modified: '2026-10-10'
status: published
wordpress_id: 67922
source_url: https://nuggetofjoy.com/week-6-images-and-art-direction/
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
**Week:** 6


## Learning objectives


By the end of this lesson, you should be able to:


- Explain how crop and aspect ratio influence visual meaning.
- Choose imagery that supports a page’s purpose and audience.
- Describe image licensing, optimization, and alternative text considerations.


## Key concepts


Images establish context, emotion, and identity. Crop, focal point, aspect ratio, and color treatment can change how an image feels and how it works within a layout.


Use images that support the content rather than choosing them only because they look attractive. Consider where the image will appear, how it will crop on mobile screens, whether you have permission to use it, and whether the file is optimized.


Alternative text should communicate meaningful information conveyed by an image when that information is not already available nearby. Decorative images may need empty alternative text so assistive technology can skip them.


## Interactive demonstration


**Demo file:** `05-image-art-direction.html`


Change the aspect ratio, focal point, color treatment, and overlay. Observe how the composition changes as the viewing area changes.


[codepen\_embed height="300" pen\_title="06-css-grid-playground" version="2" default\_tab="html,result" slug\_hash="dPvJwZQ" user="ndangelo"]See the Pen [06-css-grid-playground](https://codepen.io/editor/ndangelo/pen/01a1214e-d499-7e75-b610-52d32f415512) by Nicholas D'Angelo ([@ndangelo](https://codepen.io/ndangelo))
on [CodePen](https://codepen.io).[/codepen\_embed]


Choose two images for your project. Create desktop and mobile crop plans, write proposed alt text for each image, and document the source or license.


## Connection to your website project


Use appropriately licensed, optimized images in your midterm website.


<div class="wp-block-group"><!-- wp:group {"className":"sublime-lab-card","layout":{"type":"constrained"}} -->
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
<p>Images, asset folders, relative paths, alt text, formats, and file size</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Use <code>week-06/index.html</code>, <code>week-06/css/styles.css</code>, and <code>week-06/assets/</code>.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p><code>&lt;img src="assets/example.jpg" alt="Specific description"&gt;</code>, sensible image dimensions, CSS <code>object-fit</code> and <code>object-position</code>.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Add two appropriately licensed images: one meaningful content image and one decorative or art-directed image. Add useful alt text to meaningful images, style one crop, and use clear lowercase hyphenated filenames.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Make an image responsive and check its path and alternative text.</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong> <code>week-06/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">/* HTML: &lt;img class="feature-image" src="assets/studio-work.jpg" alt="Printed photographs arranged on a table"&gt; */
.feature-image {
  display: block;
  width: 100%;
  max-width: 720px;
  height: auto;
  margin: 24px auto;
}</code></pre>
<!-- /wp:code -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><strong>HTML file:</strong> <code>week-06/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Image and Asset Example&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main class="content"&gt;
    &lt;h1&gt;Images and Art Direction&lt;/h1&gt;
    &lt;figure&gt;
      &lt;img src="assets/studio-work.jpg" alt="Printed photographs arranged on a studio table"&gt;
      &lt;figcaption&gt;Studio process and source: add your asset credit here.&lt;/figcaption&gt;
    &lt;/figure&gt;
  &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>CSS file:</strong> <code>week-06/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">body { margin: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #222; }
.content { max-width: 900px; margin: auto; padding: 24px; }
figure { margin: 0; }
img { display: block; width: 100%; height: auto; border-radius: 8px; }
figcaption { margin-top: 8px; color: #555; font-size: .9rem; }</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>Important:</strong> The HTML links to <code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Add a second image with meaningful alt text. Record the source or license in asset-credits.txt.</p>
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
<li><code>week-06/index.html</code>, <code>week-06/css/styles.css</code>, and <code>week-06/assets/</code> containing two image files.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>week-06/asset-credits.txt</code> — creator/source, original URL, license/usage terms, and local filename for each image.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>week-06/README.txt</code> — alt-text rationale and why image dimensions/formats are appropriate.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Both images load; meaningful filenames; useful alt text; credits and license details recorded.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Keep all HTML, CSS, image, text, and PDF files inside the named weekly or project folder.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Open the HTML file in a browser before submitting and confirm linked CSS and images load.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group --></div>


## Before you leave (3-minute exit check)


Write down one thing you changed, one thing you learned from the result, and one question you still have.


## References


These references support the key concepts and practices covered in this lesson. They are provided for verification and further study.


- Mozilla Contributors. (n.d.). \*HTML images\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images>
- Google. (n.d.). \*Image performance\*. web.dev. <https://web.dev/learn/performance/image-performance>
- Unsplash. (n.d.). \*License\*. Unsplash. <https://unsplash.com/license>
