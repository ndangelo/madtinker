---
title: 'Week 3 — HTML: Give Content Structure and Meaning'
slug: week-3-html-give-content-structure-and-meaning
date: '2026-10-09'
modified: '2026-10-10'
status: published
wordpress_id: 67909
source_url: https://nuggetofjoy.com/week-3-html-give-content-structure-and-meaning/
author: admin
categories:
- Projects
tags: []
migration:
  format: hybrid-markdown
  original_html: original-html/67909.html
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
**Week:** 3


## Learning objectives


By the end of this lesson, you should be able to:


- Describe HTML as the structural layer of a web page.
- Use headings, paragraphs, and semantic containers appropriately.
- Explain why semantic meaning matters beyond visual appearance.


## Key concepts


HTML stands for HyperText Markup Language. It uses elements to describe the role of content in a page. A heading identifies a title or section heading; a paragraph identifies a block of text; an article or section can group related content.


Semantic HTML helps browsers interpret a page and supports assistive technology, search engines, and future maintenance. Choose a tag because it fits the content’s role—not simply because its default appearance looks right.


HTML describes structure and meaning, CSS controls presentation, and JavaScript adds behavior.


## Interactive demonstration


**Demo file:** `03-html-structure-lab.html`


Edit the headline and paragraph, switch the headline element and content container, and inspect the generated markup. Notice that changing a tag can change meaning, not just appearance.


[codepen\_embed height="600" pen\_title="03-html-structure-lab" version="2" default\_tab="html,result" slug\_hash="gbmoQjd" user="ndangelo"]See the Pen [03-html-structure-lab](https://codepen.io/editor/ndangelo/pen/01a12105-9eff-7bfd-91c0-4d992b8ccd97) by Nicholas D'Angelo ([@ndangelo](https://codepen.io/ndangelo))
on [CodePen](https://codepen.io).[/codepen\_embed]


Write a short profile for a fictional creative professional using one main heading, at least two section headings, paragraphs, and a semantic container. Indent your code consistently.


## Connection to your website project


Use semantic structure when you begin building your midterm site.


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
<p>Semantic HTML, heading hierarchy, lists, links, and syntax debugging</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Create <code>web-design-course/week-03/index.html</code>.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Semantic elements (<code>header</code>, <code>nav</code>, <code>main</code>, <code>section</code>, <code>article</code>, <code>footer</code>), heading levels, paragraphs, lists, anchor tags, matching closing tags.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Build a profile page for a fictional designer, photographer, or local business. Include one <code>&lt;h1&gt;</code>, at least two <code>&lt;h2&gt;</code> headings, two paragraphs, a three-item list, and one meaningful link. Check nesting and closing tags, then test in a browser.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Practice headings, lists, links, and image alt text.</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong> <code>week-03/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;main&gt;
  &lt;h1&gt;Ways to Explore the City&lt;/h1&gt;
  &lt;h2&gt;Try these ideas&lt;/h2&gt;
  &lt;ul&gt;
    &lt;li&gt;Visit a local gallery&lt;/li&gt;
    &lt;li&gt;Walk through a public park&lt;/li&gt;
    &lt;li&gt;Explore a neighborhood cafe&lt;/li&gt;
  &lt;/ul&gt;
  &lt;p&gt;Learn more at &lt;a href="https://www.nps.gov/"&gt;National Park Service&lt;/a&gt;.&lt;/p&gt;
  &lt;img src="assets/park.jpg" alt="A tree-lined walking path in a park"&gt;
&lt;/main&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><strong>HTML file:</strong> <code>week-03/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Explore the City&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main class="article"&gt;
    &lt;article&gt;
      &lt;h1&gt;Three Ways to Explore the City&lt;/h1&gt;
      &lt;p&gt;Plan a day around places that interest you.&lt;/p&gt;
      &lt;h2&gt;Start with these ideas&lt;/h2&gt;
      &lt;ul&gt;&lt;li&gt;Visit a gallery&lt;/li&gt;&lt;li&gt;Walk through a park&lt;/li&gt;&lt;li&gt;Try a local restaurant&lt;/li&gt;&lt;/ul&gt;
      &lt;p&gt;Find more ideas at &lt;a href="https://www.nps.gov/"&gt;National Park Service&lt;/a&gt;.&lt;/p&gt;
    &lt;/article&gt;
  &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>CSS file:</strong> <code>week-03/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">body { margin: 0; font-family: Arial, sans-serif; color: #20242c; line-height: 1.7; }
.article { max-width: 700px; margin: 0 auto; padding: 24px; }
h1 { line-height: 1.15; }
a { color: #1457a6; }
li { margin-bottom: 8px; }</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>Important:</strong> The HTML links to <code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Add an ordered list and replace the sample image path and alt text with your own asset.</p>
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
<li><code>week-03/index.html</code> — profile page with required semantic elements and content.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>week-03/syntax-check.png</code> — screenshot of browser output or Sublime Text code showing heading hierarchy.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>week-03/README.txt</code> — two HTML syntax errors checked and how you confirmed the page worked.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>One <code>&lt;h1&gt;</code>; logical heading order; three-item list; meaningful link text; no obvious broken nesting.</li>
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


- Mozilla Contributors. (n.d.). \*Structuring content with HTML\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content>
- Mozilla Contributors. (n.d.). \*HTML elements reference\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Web/HTML/Element>
- World Wide Web Consortium. (n.d.). \*The W3C markup validation service\*. W3C. <https://validator.w3.org/>
