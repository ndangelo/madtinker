---
title: 'Week 11 — AI-Assisted Web Design: Prompt, Evaluate, Revise'
slug: week-11-ai-assisted-web-design-prompt-evaluate-revise
date: '2026-10-10'
modified: '2026-10-10'
status: published
wordpress_id: 67933
source_url: https://nuggetofjoy.com/week-11-ai-assisted-web-design-prompt-evaluate-revise/
author: admin
categories:
- Projects
tags: []
migration:
  format: hybrid-markdown
  original_html: original-html/67933.html
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
**Week:** 11


## Learning objectives


By the end of this lesson, you should be able to:


- Write a design brief with a clear audience, goal, visual direction, and constraints.
- Evaluate a generated concept against explicit criteria.
- Identify assumptions and decisions that require human verification.


## Key concepts


AI tools can help generate ideas, organize a brief, or suggest possible approaches. The quality of output depends partly on the clarity of the request, but even a detailed prompt can produce inaccurate, generic, inaccessible, or impractical suggestions.


A useful workflow defines the audience and goal, sets constraints, requests alternatives, evaluates the results, and tests promising ideas. Never assume generated code is secure, accessible, accurate, or production-ready without reviewing it.


The responsibility for the final design and its consequences remains with the designer.


## Interactive demonstration


**Demo file:** `11-ai-design-brief-lab.html`


Use the AI-Assisted Design Brief Lab to define an audience, goal, tone, and constraints. Build a brief, then rate a hypothetical concept against audience fit, hierarchy, accessibility, feasibility, and evidence.


[codepen\_embed height="600" pen\_title="11-ai-design-brief-lab" version="2" default\_tab="html,result" slug\_hash="RNpxEQO" user="ndangelo"]See the Pen [11-ai-design-brief-lab](https://codepen.io/editor/ndangelo/pen/01a12156-1161-74ff-8720-45a856bb9150) by Nicholas D'Angelo ([@ndangelo](https://codepen.io/ndangelo))
on [CodePen](https://codepen.io).[/codepen\_embed]


Write a brief for one feature of your website. Compare two possible design approaches, including one you develop yourself. Explain which you would pursue and why; identify assumptions that need testing.


## Connection to your website project


Document how you evaluated any AI-assisted work used in your final project, following the instructor’s course policy.


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
<p>AI-assisted coding, code reading, verification, and responsible revision</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Create <code>week-11/ai-code-review/</code> with <code>index.html</code>, <code>css/styles.css</code>, and <code>AI-USE-NOTES.txt</code>.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Review HTML tags, CSS selectors/declarations, media queries, and code comments; identify unfamiliar syntax.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Ask an AI tool for a small component. Paste it into Sublime Text for inspection, test in a browser, make at least two purposeful corrections or improvements, and document the changes.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Review a small component before accepting AI-assisted changes.</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong> <code>week-11/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;article class="project-card"&gt;
  &lt;h2&gt;Community Garden&lt;/h2&gt;
  &lt;p&gt;Learn about volunteer days and seasonal planting.&lt;/p&gt;
  &lt;a href="events.html"&gt;View upcoming events&lt;/a&gt;
&lt;/article&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><strong>HTML file:</strong> <code>week-11/index.html</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-markup line-numbers" lang="markup">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;AI-Assisted Component Review&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main&gt;&lt;article class="project-card"&gt;&lt;h1&gt;Community Garden&lt;/h1&gt;&lt;p&gt;Learn about volunteer days and seasonal planting.&lt;/p&gt;&lt;a href="events.html"&gt;View upcoming events&lt;/a&gt;&lt;/article&gt;&lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>CSS file:</strong> <code>week-11/css/styles.css</code></p>
<!-- /wp:paragraph -->
<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code class="language-css line-numbers" lang="css">body { margin: 0; padding: 24px; font-family: Arial, sans-serif; line-height: 1.6; background: #f1f5f9; color: #172033; }
main { max-width: 720px; margin: 40px auto; }
.project-card { padding: 24px; background: white; border: 1px solid #cbd5e1; border-radius: 10px; }
.project-card a { color: #1d4ed8; }
.project-card a:focus-visible { outline: 3px solid #f59e0b; outline-offset: 3px; }</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><strong>Important:</strong> The HTML links to <code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Ask for one accessibility or styling improvement, inspect the suggestion, test it, and document your prompt and decisions in AI-USE-NOTES.txt.</p>
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
<li><code>index.html</code> and <code>css/styles.css</code> — tested component on a simple page.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>AI-USE-NOTES.txt</code> — prompt, generated-code summary, two changes, and how each was tested.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>code-review.png</code> — screenshot of code or working component.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><code>README.txt</code> — one new understanding and one remaining question to verify.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Generated code reviewed, not blindly accepted; two improvements documented; page tested; AI use disclosed.</li>
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


- OpenAI. (n.d.). \*How can educators get started with ChatGPT?\* OpenAI Help Center. <https://help.openai.com/en/articles/8313929-how-can-educators-get-started-with-chatgpt>
- United Nations Educational, Scientific and Cultural Organization. (2023). \*Guidance for generative AI in education and research\*. UNESCO. <https://unesdoc.unesco.org/ark:/48223/pf0000386693>
- Mozilla Contributors. (n.d.). \*Learn web development\*. MDN Web Docs. <https://developer.mozilla.org/en-US/docs/Learn_web_development>
