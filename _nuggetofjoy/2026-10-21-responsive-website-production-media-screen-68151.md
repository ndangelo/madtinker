---
layout: teaching-post
title: 'Responsive Website Production: @ Media Screen'
slug: responsive-website-production-media-screen
date: '2026-10-21'
modified: '2026-10-21'
status: published
wordpress_id: 68151
source_url: https://nuggetofjoy.com/responsive-website-production-media-screen/
author: admin
categories:
- Projects
tags: []
---

<div class="amde155-media-lesson">
<header class="amde-hero">
<div class="amde-kicker">AMDE 155 · Introduction to Web</div>
<h1>One Page.<br/>Three Layouts.</h1>
<p>Learn how to make a web page adapt to different screen sizes using CSS media queries. You will start with a simple student portfolio wireframe and transform it for desktop, tablet, and mobile.</p>
</header>
<section class="amde-section">
<h2>What is responsive design?</h2>
<p>People visit websites on laptops, tablets, and phones. These screens have different amounts of space. A layout that looks good on a laptop might feel crowded on a phone.</p>
<p><strong>Responsive design</strong> means a page can adjust its layout to fit the screen. We can change the number of columns, spacing, and arrangement of content with CSS.</p>
<div class="amde-callout">
<p><strong>Today's goal</strong></p>
<p>Build one page and use <code>@media screen</code> to change its layout at different screen widths. We are creating a wireframe, so focus on structure rather than color, decoration, or polished graphics.</p>
</div>
</section>
<section class="amde-section">
<h2>01 / What is a media query?</h2>
<p>A media query lets CSS apply only when a condition is met. For responsive web layouts, we commonly check the width of the browser's viewport.</p>
<div class="amde-code-label">Basic syntax</div>
<pre class="amde-code"><span class="sel">@media screen</span> <span class="punct">and (</span><span class="prop">max-width</span><span class="punct">: </span><span class="num">600px</span><span class="punct">) {</span>
  <span class="sel">.example</span> <span class="punct">{</span>
    <span class="prop">background-color</span><span class="punct">: </span><span class="val">lightblue</span><span class="punct">;</span>
  <span class="punct">}</span>
<span class="punct">}</span></pre>
<p>Read this as: “When the output is a screen and the viewport is 600 pixels wide or narrower, apply these styles to <code>.example</code>.”</p>
<div class="amde-grid">
<div class="amde-card">
<div class="amde-number">1</div>
<h3>@media screen</h3>
<p>Targets screen-based displays, such as a computer, tablet, or phone.</p>
</div>
<div class="amde-card">
<div class="amde-number">2</div>
<h3>max-width</h3>
<p>Applies the rules at the stated width and below.</p>
</div>
<div class="amde-card">
<div class="amde-number">3</div>
<h3>CSS rules</h3>
<p>Define what changes, such as columns, spacing, or alignment.</p>
</div>
</div>
</section>
<section class="amde-section">
<h2>02 / Three screen sizes</h2>
<p>For this exercise, we will use three layout states. These are practice breakpoints, not universal rules: real websites choose breakpoints based on when their content needs to change.</p>
MADTINKERBLOCKTOKEN0END
<div class="amde-callout">
<p><strong>Important:</strong> The browser viewport is the visible area where the page appears, not necessarily the physical size of the device. You can test it by resizing your browser or the CodePen preview.</p>
</div>
</section>
<section class="amde-section">
<h2>03 / See the layout as a wireframe</h2>
<p>A wireframe is a simplified plan for a page. It uses basic shapes to show where content belongs before we decide on the final visual design.</p>
<h3>Regular / desktop</h3>
<div class="amde-demo">
<div class="amde-demo-nav"></div>
<div class="amde-demo-layout">
<div class="amde-demo-block">Introduction</div>
<div class="amde-demo-block">Profile image</div>
</div>
<div class="amde-demo-projects">
<div class="amde-demo-project">Project 01</div>
<div class="amde-demo-project">Project 02</div>
<div class="amde-demo-project">Project 03</div>
</div>
</div>
<h3>Tablet</h3>
<div class="amde-demo">
<div class="amde-demo-nav"></div>
<div class="amde-demo-layout">
<div class="amde-demo-block">Introduction</div>
<div class="amde-demo-block">Profile image</div>
</div>
<div class="amde-demo-projects" style="grid-template-columns:repeat(2,minmax(0,1fr));">
<div class="amde-demo-project">Project 01</div>
<div class="amde-demo-project">Project 02</div>
<div class="amde-demo-project">Project 03</div>
</div>
</div>
<h3>Mobile</h3>
<div class="amde-demo">
<div class="amde-demo-nav"></div>
<div class="amde-demo-layout" style="grid-template-columns:1fr;">
<div class="amde-demo-block">Introduction</div>
<div class="amde-demo-block">Profile image</div>
</div>
<div class="amde-demo-projects" style="grid-template-columns:1fr;">
<div class="amde-demo-project">Project 01</div>
<div class="amde-demo-project">Project 02</div>
<div class="amde-demo-project">Project 03</div>
</div>
</div>
<p class="amde-small">These diagrams illustrate the intended layout. Your own CodePen page will change automatically as its viewport changes.</p>
</section>
<section class="amde-section">
<h2>04 / How CSS changes the layout</h2>
<p>We will use CSS Grid to arrange our content. A desktop layout can use three equal columns. At a narrower width, a media query changes the grid to two columns. On mobile, it becomes one.</p>
<div class="amde-code-label">Regular layout</div>
<pre class="amde-code"><span class="sel">.projects</span> <span class="punct">{</span>
  <span class="prop">display</span><span class="punct">: </span><span class="val">grid</span><span class="punct">;</span>
  <span class="prop">grid-template-columns</span><span class="punct">: </span><span class="val">repeat(3, 1fr)</span><span class="punct">;</span>
  <span class="prop">gap</span><span class="punct">: </span><span class="num">16px</span><span class="punct">;</span>
<span class="punct">}</span></pre>
<div class="amde-code-label">Tablet layout</div>
<pre class="amde-code"><span class="sel">@media screen</span> <span class="punct">and (</span><span class="prop">max-width</span><span class="punct">: </span><span class="num">850px</span><span class="punct">) {</span>
  <span class="sel">.projects</span> <span class="punct">{</span>
    <span class="prop">grid-template-columns</span><span class="punct">: </span><span class="val">repeat(2, 1fr)</span><span class="punct">;</span>
  <span class="punct">}</span>
<span class="punct">}</span></pre>
<div class="amde-code-label">Mobile layout</div>
<pre class="amde-code"><span class="sel">@media screen</span> <span class="punct">and (</span><span class="prop">max-width</span><span class="punct">: </span><span class="num">600px</span><span class="punct">) {</span>
  <span class="sel">.projects</span> <span class="punct">{</span>
    <span class="prop">grid-template-columns</span><span class="punct">: </span><span class="num">1fr</span><span class="punct">;</span>
  <span class="punct">}</span>
<span class="punct">}</span></pre>
<p><strong>Notice:</strong> We do not need to create three different pages. We have one HTML document, and the CSS changes its layout when the viewport reaches a breakpoint.</p>
</section>
<hr class="amde-break"/>
<section class="amde-assignment">
<div class="amde-kicker">In-class assignment</div>
<h2>Build a Responsive Student Portfolio</h2>
<p><strong>Your task:</strong> Create a simple, single-page portfolio for a fictional student. Use a wireframe approach: basic rectangles, simple text, and clear organization. Your main goal is to demonstrate how <code>@media screen</code> changes the page at regular, tablet, and mobile sizes.</p>
<h3>What your page needs</h3>
<ul class="amde-checklist">
<li>A header with the student's name and simple navigation.</li>
<li>An introduction section with a short bio and a placeholder for a profile image.</li>
<li>A projects section with three sample projects.</li>
<li>A footer with a contact line.</li>
<li>A responsive layout using two media queries.</li>
</ul>
<h3>Part 1 / Set up CodePen</h3>
<p>Open CodePen and create a new Pen. Put all of your HTML and CSS in the <strong>HTML panel</strong>, including the <code>&lt;style&gt;</code> tags. You do not need a separate CSS panel for this activity.</p>
<p><a class="amde-button" href="https://codepen.io/pen/" rel="noopener noreferrer" target="_blank">Open CodePen</a></p>
<h3>Part 2 / Start with this wireframe</h3>
<p>Copy the starter code below into your HTML panel. It includes the basic page structure and the regular desktop layout. Your job is to complete the tablet and mobile media queries and test all three views.</p>
<div class="amde-code-label">Starter HTML + CSS · Copy into CodePen</div>
<pre class="amde-code"><span class="comment">&lt;!-- Responsive Student Portfolio --&gt;</span>
<span class="tag">&lt;style&gt;</span>
  <span class="sel">* </span><span class="punct">{</span>
    <span class="prop">box-sizing</span><span class="punct">: </span><span class="val">border-box</span><span class="punct">;</span>
  <span class="punct">}</span>

  <span class="sel">body </span><span class="punct">{</span>
    <span class="prop">margin</span><span class="punct">: </span><span class="num">0</span><span class="punct">;</span>
    <span class="prop">font-family</span><span class="punct">: </span><span class="val">Arial, sans-serif</span><span class="punct">;</span>
    <span class="prop">line-height</span><span class="punct">: </span><span class="num">1.5</span><span class="punct">;</span>
    <span class="prop">background</span><span class="punct">: </span><span class="val">#f2f2f2</span><span class="punct">;</span>
    <span class="prop">color</span><span class="punct">: </span><span class="val">#222</span><span class="punct">;</span>
  <span class="punct">}</span>

  <span class="sel">header, footer </span><span class="punct">{</span>
    <span class="prop">padding</span><span class="punct">: </span><span class="num">20px</span><span class="punct">;</span>
    <span class="prop">background</span><span class="punct">: </span><span class="val">#d5d5d5</span><span class="punct">;</span>
  <span class="punct">}</span>

  <span class="sel">nav </span><span class="punct">{</span>
    <span class="prop">display</span><span class="punct">: </span><span class="val">flex</span><span class="punct">;</span>
    <span class="prop">gap</span><span class="punct">: </span><span class="num">16px</span><span class="punct">;</span>
    <span class="prop">flex-wrap</span><span class="punct">: </span><span class="val">wrap</span><span class="punct">;</span>
  <span class="punct">}</span>

  <span class="sel">nav a </span><span class="punct">{</span>
    <span class="prop">color</span><span class="punct">: </span><span class="val">#222</span><span class="punct">;</span>
  <span class="punct">}</span>

  <span class="sel">main </span><span class="punct">{</span>
    <span class="prop">max-width</span><span class="punct">: </span><span class="num">1000px</span><span class="punct">;</span>
    <span class="prop">margin</span><span class="punct">: </span><span class="num">0 auto</span><span class="punct">;</span>
    <span class="prop">padding</span><span class="punct">: </span><span class="num">20px</span><span class="punct">;</span>
  <span class="punct">}</span>

  <span class="sel">.intro </span><span class="punct">{</span>
    <span class="prop">display</span><span class="punct">: </span><span class="val">grid</span><span class="punct">;</span>
    <span class="prop">grid-template-columns</span><span class="punct">: </span><span class="val">2fr 1fr</span><span class="punct">;</span>
    <span class="prop">gap</span><span class="punct">: </span><span class="num">20px</span><span class="punct">;</span>
    <span class="prop">margin-bottom</span><span class="punct">: </span><span class="num">24px</span><span class="punct">;</span>
  <span class="punct">}</span>

  <span class="sel">.panel </span><span class="punct">{</span>
    <span class="prop">background</span><span class="punct">: </span><span class="val">#fff</span><span class="punct">;</span>
    <span class="prop">border</span><span class="punct">: </span><span class="num">1px</span> <span class="val">solid #bbb</span><span class="punct">;</span>
    <span class="prop">padding</span><span class="punct">: </span><span class="num">18px</span><span class="punct">;</span>
    <span class="prop">min-width</span><span class="punct">: </span><span class="num">0</span><span class="punct">;</span>
  <span class="punct">}</span>

  <span class="sel">.projects </span><span class="punct">{</span>
    <span class="prop">display</span><span class="punct">: </span><span class="val">grid</span><span class="punct">;</span>
    <span class="prop">grid-template-columns</span><span class="punct">: </span><span class="val">repeat(3, minmax(0, 1fr))</span><span class="punct">;</span>
    <span class="prop">gap</span><span class="punct">: </span><span class="num">16px</span><span class="punct">;</span>
  <span class="punct">}</span>

  <span class="sel">.project </span><span class="punct">{</span>
    <span class="prop">min-height</span><span class="punct">: </span><span class="num">120px</span><span class="punct">;</span>
    <span class="prop">background</span><span class="punct">: </span><span class="val">#e0e0e0</span><span class="punct">;</span>
    <span class="prop">border</span><span class="punct">: </span><span class="num">1px</span> <span class="val">solid #bbb</span><span class="punct">;</span>
    <span class="prop">padding</span><span class="punct">: </span><span class="num">16px</span><span class="punct">;</span>
  <span class="punct">}</span>

  <span class="comment">/* TABLET: add your media query here */</span>


  <span class="comment">/* MOBILE: add your media query here */</span>


<span class="tag">&lt;/style&gt;</span>

<span class="tag">&lt;header&gt;</span>
  <span class="tag">&lt;h1&gt;</span>Alex Morgan<span class="tag">&lt;/h1&gt;</span>
  <span class="tag">&lt;nav&gt;</span>
    <span class="tag">&lt;a</span> <span class="attr">href="#about"</span><span class="tag">&gt;</span>About<span class="tag">&lt;/a&gt;</span>
    <span class="tag">&lt;a</span> <span class="attr">href="#projects"</span><span class="tag">&gt;</span>Projects<span class="tag">&lt;/a&gt;</span>
    <span class="tag">&lt;a</span> <span class="attr">href="#contact"</span><span class="tag">&gt;</span>Contact<span class="tag">&lt;/a&gt;</span>
  <span class="tag">&lt;/nav&gt;</span>
<span class="tag">&lt;/header&gt;</span>

<span class="tag">&lt;main&gt;</span>
  <span class="tag">&lt;section</span> <span class="attr">class="intro" id="about"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;div</span> <span class="attr">class="panel"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;h2&gt;</span>About Me<span class="tag">&lt;/h2&gt;</span>
      <span class="tag">&lt;p&gt;</span>
        I am a student exploring design, technology,
        and creative ideas.
      <span class="tag">&lt;/p&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;div</span> <span class="attr">class="panel"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;p&gt;</span>[ Profile Image Placeholder ]<span class="tag">&lt;/p&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;/section&gt;</span>

  <span class="tag">&lt;section</span> <span class="attr">id="projects"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;h2&gt;</span>My Projects<span class="tag">&lt;/h2&gt;</span>
    <span class="tag">&lt;div</span> <span class="attr">class="projects"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;article</span> <span class="attr">class="project"</span><span class="tag">&gt;</span>
        Project 01
      <span class="tag">&lt;/article&gt;</span>
      <span class="tag">&lt;article</span> <span class="attr">class="project"</span><span class="tag">&gt;</span>
        Project 02
      <span class="tag">&lt;/article&gt;</span>
      <span class="tag">&lt;article</span> <span class="attr">class="project"</span><span class="tag">&gt;</span>
        Project 03
      <span class="tag">&lt;/article&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;/section&gt;</span>
<span class="tag">&lt;/main&gt;</span>

<span class="tag">&lt;footer</span> <span class="attr">id="contact"</span><span class="tag">&gt;</span>
  Contact: alex@example.com
<span class="tag">&lt;/footer&gt;</span></pre>
<h3>Part 3 / Add the tablet layout</h3>
<p>Find the tablet comment inside the CSS. Write a media query that applies when the screen is 850 pixels wide or narrower.</p>
<ul class="amde-checklist">
<li>Change <code>.projects</code> from three columns to two.</li>
<li>Keep the introduction side by side for now.</li>
<li>Resize the preview to see when the new rule takes effect.</li>
</ul>
<h3>Part 4 / Add the mobile layout</h3>
<p>Find the mobile comment. Write a second media query for screens 600 pixels wide or narrower.</p>
<ul class="amde-checklist">
<li>Change <code>.projects</code> to one column.</li>
<li>Change <code>.intro</code> to one column.</li>
<li>Make sure all text and project panels fit within the screen.</li>
</ul>
<h3>Part 5 / Test all three views</h3>
<p>Use the CodePen preview and resize it. Check the layout at approximately these widths:</p>
<ul class="amde-checklist">
<li><strong>Regular:</strong> 1000px wide — three project columns.</li>
<li><strong>Tablet:</strong> 768px wide — two project columns.</li>
<li><strong>Mobile:</strong> 390px wide — one project column and a stacked introduction.</li>
</ul>
<div class="amde-callout">
<p><strong>Before you finish</strong></p>
<p>Do not make three separate pages. The same HTML should adapt through your media queries. Your goal is to show that you understand how and when the layout changes.</p>
</div>
</section>
<section class="amde-section">
<h2>05 / Submission checklist</h2>
<ul class="amde-checklist">
<li>I created one single-page student portfolio in CodePen.</li>
<li>I used <code>@media screen</code> for the tablet and mobile views.</li>
<li>The regular view shows three project columns.</li>
<li>The tablet view shows two project columns.</li>
<li>The mobile view shows one project column.</li>
<li>The introduction changes from two columns to one on mobile.</li>
<li>I tested the layout at all three widths.</li>
<li>I saved my Pen and can share its URL.</li>
</ul>
<h3>What to submit</h3>
<p>Submit the shareable URL to your CodePen. Your instructor should be able to open the Pen and resize the preview to verify all three layouts.</p>
</section>
<hr class="amde-break"/>
<section class="amde-section">
<h2>Remember</h2>
<p>Responsive design is not about shrinking everything to fit. It is about making thoughtful decisions about how content should be arranged at different screen sizes.</p>
<p>Start with a clear structure, use media queries to change the layout, and test your work at multiple widths.</p>
<p><strong>One page. One set of content. Three responsive layouts.</strong></p>
</section>
</div>
