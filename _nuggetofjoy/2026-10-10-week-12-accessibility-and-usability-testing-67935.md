---
layout: teaching-post
title: Week 12 — Accessibility and Usability Testing
slug: week-12-accessibility-and-usability-testing
date: '2026-10-10'
modified: '2026-10-19'
status: published
wordpress_id: 67935
source_url: https://nuggetofjoy.com/week-12-accessibility-and-usability-testing/
author: admin
categories:
- Projects
tags: []
---

<div class="week12">
<div class="hero">
<div>
<p class="eyebrow">Week 12 · UI/UX Design Lab</p>
<h1>Accessibility and Usability Testing</h1>
<p class="dek">Make it work for everyone.</p>
<p>A website can look beautiful and still be difficult to use. In this lab, you will build, test, revise, and document an interface entirely in CodePen. Your writing, code, testing notes, peer feedback, and final reflection must all live in your Pen.</p>
</div>
<div><img alt="Mountain landscape used as an example of imagery in a website interface" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"/></div>
</div>
<div class="grid">
<div class="card"><div class="bubble">♙</div><h3>Accessibility</h3><p>Help people with different abilities perceive, understand, navigate, and interact with a website.</p></div>
<div class="card"><div class="bubble">↖</div><h3>Usability</h3><p>Evaluate whether people can complete tasks and understand what the interface asks them to do.</p></div>
<div class="card"><div class="bubble">⌘</div><h3>CodePen workflow</h3><p>Use HTML, CSS, and the live preview. Keep your notes and written responses inside the Pen too.</p></div>
<div class="card"><div class="bubble">✓</div><h3>Evidence</h3><p>Test with a peer, record observations, make improvements, and explain your decisions in CodePen.</p></div>
</div>
</div>


## 01 — Understand the problem


Accessibility helps people with different abilities use a website. Usability considers whether people can complete tasks efficiently and understand what an interface asks them to do.


<div class="week12 section">
<div class="two">
<div>
<h3>Look for common issues</h3>
<ul>
<li>Text that is difficult to read against its background.</li>
<li>Links and buttons that are difficult to identify.</li>
<li>Interactive elements that cannot be reached by keyboard.</li>
<li>Images without useful alternative text.</li>
<li>Forms with missing or unclear labels.</li>
<li>Headings and navigation that are hard to understand.</li>
</ul>
</div>
<div class="compare-grid">
<div class="compare"><h3>🔴 Common issues</h3><div class="bad"><h3>Explore outdoors</h3><p>Find your next adventure.</p><img alt="Mountain landscape example" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&amp;fit=crop&amp;w=400&amp;q=70"/></div><ul><li>Low contrast</li><li>No clear focus style</li><li>Unhelpful alt text</li></ul></div>
<div class="compare"><h3>🟢 Improved</h3><div class="good"><h3>Explore outdoors</h3><p>Find your next adventure.</p><img alt="Mountain landscape example" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&amp;fit=crop&amp;w=400&amp;q=70"/></div><ul><li>Readable contrast</li><li>Visible focus</li><li>Meaningful alt text</li></ul></div>
</div>
</div>
</div>


## 02 — Create your CodePen workspace


Open a new Pen. Use the HTML panel for your interface and written documentation, the CSS panel for visual and accessibility improvements, and the live preview to test your work.


**Everything for this assignment belongs in CodePen.** Do not create a separate report or write your reflection in another app. Put your audit, observations, peer feedback, and final reflection in a clearly labeled section of your HTML.


<div class="wp-block-buttons">
<!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://codepen.io/pen/" rel="noopener noreferrer" target="_blank">Create a New Pen ↗</a></div>
<!-- /wp:button -->
</div>


<div class="week12 section">
<div class="code">
<h3>Suggested HTML structure</h3>
<pre>&lt;main&gt;
  &lt;section id="interface"&gt;
    &lt;!-- Your accessible interface --&gt;
  &lt;/section&gt;
  &lt;section id="audit"&gt;
    &lt;h2&gt;Accessibility Audit&lt;/h2&gt;
    &lt;!-- Write your audit here --&gt;
  &lt;/section&gt;
  &lt;section id="testing"&gt;
    &lt;h2&gt;Usability Test Notes&lt;/h2&gt;
    &lt;!-- Record observations here --&gt;
  &lt;/section&gt;
  &lt;section id="reflection"&gt;
    &lt;h2&gt;Final Reflection&lt;/h2&gt;
    &lt;!-- Explain your revisions --&gt;
  &lt;/section&gt;
&lt;/main&gt;</pre>
</div>
</div>


## 03 — Build your interface


Create a small landing page, event page, service page, or interface related to your existing project. Use semantic HTML and make the design your own.


<div class="week12 section">
<div class="challenge">
<h3>Your interface must include</h3>
<div class="elements">
<div><span class="element-icon">▤</span>Heading and text</div>
<div><span class="element-icon">▧</span>Image with alt text</div>
<div><span class="element-icon">↗</span>Navigation link</div>
<div><span class="element-icon">▱</span>Button</div>
<div><span class="element-icon">☷</span>Labeled form field</div>
</div>
</div>
</div>


## 04 — Audit and improve


In the HTML panel, create an **Accessibility Audit** section. Check at least five items and record each result as “Pass” or “Needs improvement,” followed by a short explanation.


<div class="week12 section">
<div class="two">
<div class="card">
<h3>Audit checklist</h3>
<ul>
<li>Text and interface contrast</li>
<li>Logical heading hierarchy</li>
<li>Useful image alternative text</li>
<li>Visible keyboard focus</li>
<li>Keyboard-only navigation</li>
<li>Labels connected to form fields</li>
<li>Clear link and button wording</li>
</ul>
</div>
<div class="code">
<h3>Try this CSS</h3>
<pre>a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}</pre>
<p>Navigate with Tab and Shift + Tab. Make at least three meaningful improvements and keep your audit notes in the HTML panel.</p>
</div>
</div>
</div>


## 05 — Conduct a peer usability test


Ask a classmate to use your interface without explaining how it works. Give them two simple tasks, such as finding a link and completing a form field. Observe without coaching them.


<div class="week12 section">
<div class="steps">
<div class="card"><div class="bubble">1</div><h3>Give a task</h3><p>Write the exact task you asked your tester to complete.</p></div>
<div class="card"><div class="bubble">2</div><h3>Record evidence</h3><p>Note hesitation, confusion, mistakes, and what the tester said or did.</p></div>
<div class="card"><div class="bubble">3</div><h3>Revise</h3><p>Describe what you changed in response to the test and why.</p></div>
</div>
</div>


**Important:** Write your testing notes and peer feedback directly into the HTML panel of the same CodePen. Do not submit a separate document.


## 06 — Document and submit


Your CodePen must contain all of the following. Keep your documentation in the HTML panel and style it with headings, lists, and cards so it is easy to read in the live preview.


<div class="week12 section">
<div class="card">
<h3>Required sections in your HTML panel</h3>
<ul class="checklist">
<li><strong>Accessibility audit:</strong> At least five checks, each marked Pass or Needs improvement, with evidence.</li>
<li><strong>Testing notes:</strong> Two user tasks, observations, and any feedback you received.</li>
<li><strong>Three revisions:</strong> Describe at least three changes you made and why.</li>
<li><strong>Before-and-after evidence:</strong> Add screenshots or clearly labeled image comparisons to the Pen, with brief captions.</li>
<li><strong>Final reflection:</strong> Explain the most important issue, the change that helped most, and what you would test next.</li>
</ul>
</div>
</div>


## 07 — Final reflection and submission


<div class="week12 section">
<div class="note">
<h3>Before you submit</h3>
<p>Save your Pen and test the shareable URL in a new browser tab. Make sure the HTML, CSS, accessibility audit, usability test notes, revisions, evidence, and reflection are all inside the same CodePen project.</p>
<p><strong>Submit only the CodePen URL</strong> through the usual course submission area. The URL is the hand-in link; all assignment content stays in CodePen.</p>
</div>
</div>


## Free reference resources


Use these resources for guidance, but write your audit, notes, and reflection in your CodePen.


<div class="week12 section">
<div class="resources">
<a class="resource" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility" rel="noopener noreferrer" target="_blank">MDN Web Docs<br/><small>Accessibility fundamentals ↗</small></a>
<a class="resource" href="https://www.w3.org/WAI/tutorials/" rel="noopener noreferrer" target="_blank">W3C Tutorials<br/><small>Practical accessibility guidance ↗</small></a>
<a class="resource" href="https://www.w3.org/TR/WCAG22/" rel="noopener noreferrer" target="_blank">WCAG 2.2<br/><small>Web accessibility guidelines ↗</small></a>
</div>
<p class="note" style="margin-top:24px"><strong>Remember:</strong> Automated tools can help identify problems, but they cannot replace keyboard testing, human feedback, and thoughtful design decisions. Your CodePen should show your design, your testing process, and what you learned.</p>
</div>
