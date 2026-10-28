---
title: 'Week 2 — Wireframing: Plan Before You Style'
slug: week-2-wireframing-plan-before-you-style
date: '2026-10-09'
modified: '2026-10-10'
status: published
wordpress_id: 67907
source_url: https://nuggetofjoy.com/week-2-wireframing-plan-before-you-style/
author: admin
categories:
- Projects
tags: []
migration:
  format: hybrid-markdown
  original_html: original-html/67907.html
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
**Week:** 2


## Learning objectives


By the end of this lesson, you should be able to:


- Explain why designers create wireframes before high-fidelity mockups.
- Organize content according to audience needs and page goals.
- Compare layout patterns and describe their trade-offs.


## Key concepts


A wireframe is a simplified plan for a page. It focuses on structure, hierarchy, and content before the designer commits to final colors, typefaces, imagery, or decorative details.


Wireframes help answer important questions early: What should visitors notice first? What information belongs together? How will someone move through the page? What changes when the screen gets smaller?


Low-fidelity wireframes can be made with pencil and paper, sticky notes, or digital tools. They are useful because they are quick to revise.


## Interactive demonstration


**Demo file:** `02-wireframe-studio.html`


Switch among a landing page, portfolio grid, and editorial article. Change content density and navigation. Notice how arrangement changes the experience.


[codepen\_embed height="600" pen\_title="02-wireframe-studio" version="2" default\_tab="html,result" slug\_hash="vExpvNV" user="ndangelo"]See the Pen [02-wireframe-studio](https://codepen.io/editor/ndangelo/pen/01a1212a-86a5-76fd-ae31-99f4382d7dd7) by Nicholas D'Angelo ([@ndangelo](https://codepen.io/ndangelo))
on [CodePen](https://codepen.io).[/codepen\_embed]


Create desktop and mobile wireframes for the homepage of a small business, artist, or creative professional. Label each region and mark the primary call to action. Do not add final colors or detailed styling yet.


## Connection to your website project


Your wireframe becomes the structural plan for the midterm website.


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
<p>Wireframes translated into structure; nesting, indentation, comments, meaningful filenames</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Create `web-design-course/week-02/index.html` and `week-02/wireframe.pdf`.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Opening/closing tags, parent-child nesting, indentation, HTML comments such as `&lt;!-- Main content starts here --&gt;`.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Create a low-fidelity homepage wireframe for a small business or creative professional. In Sublime Text, build its HTML skeleton with header, navigation, hero, three content cards, and footer. Use placeholder text and consistent indentation.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Turn a wireframe into semantic page regions.</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong> <code>week-02/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;header&gt;&lt;h1&gt;Neighborhood Cafe&lt;/h1&gt;&lt;/header&gt;
&lt;nav aria-label="Main navigation"&gt;
  &lt;a href="#menu"&gt;Menu&lt;/a&gt;
  &lt;a href="#story"&gt;Our Story&lt;/a&gt;
&lt;/nav&gt;
&lt;main&gt;
  &lt;section id="menu"&gt;&lt;h2&gt;Menu&lt;/h2&gt;&lt;p&gt;Seasonal favorites.&lt;/p&gt;&lt;/section&gt;
  &lt;section id="story"&gt;&lt;h2&gt;Our Story&lt;/h2&gt;&lt;p&gt;A place to gather.&lt;/p&gt;&lt;/section&gt;
&lt;/main&gt;
&lt;footer&gt;&lt;p&gt;Visit us this week.&lt;/p&gt;&lt;/footer&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><strong>HTML file:</strong> <code>week-02/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Neighborhood Cafe&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;&lt;h1&gt;Neighborhood Cafe&lt;/h1&gt;&lt;p&gt;Fresh coffee and baked goods&lt;/p&gt;&lt;/header&gt;
  &lt;nav aria-label="Main navigation"&gt;&lt;a href="#menu"&gt;Menu&lt;/a&gt;&lt;a href="#story"&gt;Our Story&lt;/a&gt;&lt;/nav&gt;
  &lt;main&gt;
    &lt;section id="menu"&gt;&lt;h2&gt;Menu Highlights&lt;/h2&gt;&lt;p&gt;Explore seasonal favorites.&lt;/p&gt;&lt;/section&gt;
    &lt;section id="story"&gt;&lt;h2&gt;Our Story&lt;/h2&gt;&lt;p&gt;A neighborhood place to gather.&lt;/p&gt;&lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;&lt;p&gt;Visit us this week.&lt;/p&gt;&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>CSS file:</strong> <code>week-02/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">body { margin: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #222; }
header, footer { padding: 20px; background: #f3e8d7; }
nav { display: flex; gap: 16px; padding: 16px 20px; background: #243447; }
nav a { color: white; }
main { padding: 20px; }
section { margin-bottom: 24px; }</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>Important:</strong> The HTML links to <code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Add a third section with a unique id and link to it from the navigation.</p>
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
<li>`week-02/wireframe.pdf` — desktop homepage wireframe labeling sections and reading order.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>`week-02/index.html` — header, nav, hero, main content with at least three cards, and footer.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>`week-02/README.txt` — target audience, page goal, and primary action.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Wireframe and HTML have the same section order; nesting and indentation are consistent; primary action is identified.</li>
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


- Figma. (n.d.). \*What is information architecture?\* Figma Resource Library. <https://www.figma.com/resource-library/what-is-information-architecture/>
- Figma. (n.d.). \*What is wireframing?\* Figma Resource Library. <https://www.figma.com/resource-library/what-is-wireframing/>
- Nielsen Norman Group. (n.d.). \*The definition of user experience (UX)\*. <https://www.nngroup.com/articles/definition-user-experience/>
