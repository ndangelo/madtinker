---
layout: post
title: 'Week 8 — Midterm Project: Build a Purposeful Website'
slug: week-8-midterm-project-build-a-purposeful-website
date: '2026-10-10'
modified: '2026-10-10'
status: published
wordpress_id: 67926
source_url: https://nuggetofjoy.com/week-8-midterm-project-build-a-purposeful-website/
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
**Week:** 8


## Learning objectives


By the end of this lesson, you should be able to:


- Define the intended audience and primary goal of a website.
- Organize page content into a clear hierarchy.
- Use a wireframe and visual system to guide implementation.


## Key concepts


Create a responsive, multi-section website for a small business, artist, or creative professional. Your site should have a clear audience, a defined purpose, an understandable navigation or section structure, and a consistent visual direction.


Before coding, be ready to explain:


- Who the site is for.
- What visitors should understand or do.
- Which content is essential and which is secondary.
- How the design will work on desktop and mobile.
- How typography, color, imagery, and layout support the goal.


The goal is not to include every possible feature. The goal is to make deliberate choices that work together.


## Interactive demonstration


**Demo file:** `12-midterm-site-planner.html`


Complete the Midterm Website Planner. Identify the main call to action and check off the sections you plan to include.


[codepen\_embed height="600" pen\_title="12-midterm-site-planner" version="2" default\_tab="html,result" slug\_hash="pvepqLR" user="ndangelo"]See the Pen [12-midterm-site-planner](https://codepen.io/editor/ndangelo/pen/01a12157-283d-729d-80a0-006b85ea2787) by Nicholas D'Angelo ([@ndangelo](https://codepen.io/ndangelo))
on [CodePen](https://codepen.io).[/codepen\_embed]


Prepare a short project brief, a low-fidelity wireframe, and a style tile. Be ready to explain your choices during a desk critique.


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
<p>Midterm integration: planning, semantic HTML, CSS, assets, responsive layout</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Submit <code>midterm-site/</code> with <code>index.html</code>, <code>css/styles.css</code>, <code>assets/</code>, and <code>README.txt</code>.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Semantic HTML, external CSS, classes, links, images with alt text, responsive layout rules, and relative file paths.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Build a responsive homepage for a small business, community organization, or creative professional. Include header/navigation, hero with clear call to action, at least three content sections/cards, and footer. Base the design on your wireframe and style guide.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Combine a header, hero, service cards, and footer.</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong> <code>midterm-site/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;header class="site-header"&gt;
  &lt;a href="index.html"&gt;Studio North&lt;/a&gt;
  &lt;nav aria-label="Main navigation"&gt;&lt;a href="#services"&gt;Services&lt;/a&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
  &lt;section class="hero"&gt;&lt;h1&gt;Thoughtful design for useful ideas.&lt;/h1&gt;&lt;p&gt;We turn early concepts into clear experiences.&lt;/p&gt;&lt;/section&gt;
  &lt;section id="services" class="card-grid"&gt;
    &lt;article class="card"&gt;&lt;h2&gt;Strategy&lt;/h2&gt;&lt;p&gt;Define the problem.&lt;/p&gt;&lt;/article&gt;
    &lt;article class="card"&gt;&lt;h2&gt;Design&lt;/h2&gt;&lt;p&gt;Shape the experience.&lt;/p&gt;&lt;/article&gt;
    &lt;article class="card"&gt;&lt;h2&gt;Delivery&lt;/h2&gt;&lt;p&gt;Prepare the work to launch.&lt;/p&gt;&lt;/article&gt;
  &lt;/section&gt;
&lt;/main&gt;
&lt;footer&gt;&lt;p&gt;© 2026 Studio North&lt;/p&gt;&lt;/footer&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><strong>HTML file:</strong> <code>midterm-site/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Studio North | Creative Services&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header class="site-header"&gt;&lt;a class="site-name" href="index.html"&gt;Studio North&lt;/a&gt;&lt;nav aria-label="Main navigation"&gt;&lt;a href="#services"&gt;Services&lt;/a&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/nav&gt;&lt;/header&gt;
  &lt;main&gt;
    &lt;section class="hero"&gt;&lt;p class="eyebrow"&gt;Independent creative studio&lt;/p&gt;&lt;h1&gt;Thoughtful design for useful ideas.&lt;/h1&gt;&lt;p&gt;We turn early concepts into clear experiences.&lt;/p&gt;&lt;a class="button" href="#services"&gt;Explore services&lt;/a&gt;&lt;/section&gt;
    &lt;section id="services" class="card-grid"&gt;&lt;article class="card"&gt;&lt;h2&gt;Strategy&lt;/h2&gt;&lt;p&gt;Define the problem.&lt;/p&gt;&lt;/article&gt;&lt;article class="card"&gt;&lt;h2&gt;Design&lt;/h2&gt;&lt;p&gt;Shape the experience.&lt;/p&gt;&lt;/article&gt;&lt;article class="card"&gt;&lt;h2&gt;Delivery&lt;/h2&gt;&lt;p&gt;Prepare work to launch.&lt;/p&gt;&lt;/article&gt;&lt;/section&gt;
    &lt;section id="about"&gt;&lt;h2&gt;About the studio&lt;/h2&gt;&lt;p&gt;Write a short introduction.&lt;/p&gt;&lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;&lt;p&gt;© 2026 Studio North&lt;/p&gt;&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>CSS file:</strong> <code>midterm-site/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">body { margin: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #172033; }
.site-header { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 20px 5%; background: #172033; }
.site-header a { color: white; }
nav { display: flex; gap: 16px; }
.hero { padding: 64px 5%; background: #eaf1fb; }
.hero h1 { max-width: 760px; font-size: clamp(2.2rem, 6vw, 4.5rem); line-height: 1.05; }
.button { display: inline-block; padding: 12px 18px; background: #2457a7; color: white; border-radius: 5px; text-decoration: none; }
.card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; padding: 32px 5%; }
.card { padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; }
footer { padding: 24px 5%; background: #172033; color: white; }
@media (max-width: 650px) { .site-header { align-items: flex-start; flex-direction: column; } .card-grid { grid-template-columns: 1fr; } }</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>Important:</strong> The HTML links to <code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Replace the sample studio with your chosen client and test every link at three screen widths.</p>
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
<li><code>midterm-site/index.html</code> — homepage with header/nav, hero, at least three content sections/cards, and footer.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>midterm-site/css/styles.css</code> — typography, color, spacing, layout, and responsive breakpoint.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>midterm-site/assets/</code> plus <code>asset-credits.txt</code> — local images and source/license details.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>midterm-site/README.txt</code> — goal, audience, folder map, preview instructions, limitations.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>midterm-site/testing/</code> — mobile, tablet, desktop screenshots and a checklist for navigation, images, responsiveness.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>All linked files load; site fits audience and wireframe; responsive screenshots, credits, README, and complete folder included.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Keep all HTML, CSS, image, text, and PDF files inside the named weekly or project folder.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Open the HTML file in a browser before submitting and confirm linked CSS and images load.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>


## Connection to your website project


This is the planning and production milestone for the midterm website. Follow the instructor’s directions for the final deliverable.


## Before you leave (3-minute exit check)


Write down one thing you changed, one thing you learned from the result, and one question you still have.


## References


These references support the key concepts and practices covered in this lesson. They are provided for verification and further study.


- Figma. (n.d.). \*What is wireframing?\* Figma Resource Library. <https://www.figma.com/resource-library/what-is-wireframing/>
- Mozilla Contributors. (n.d.). \*Structuring content with HTML\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content>
- Mozilla Contributors. (n.d.). \*Responsive web design\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design>
