---
layout: post
title: AMDE 355 - HTML &amp; CSS Refresher (Week 1)
slug: amde-355-html-css-refresher-week-1
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68186
source_url: https://nuggetofjoy.com/amde-355-html-css-refresher-week-1/
author: admin
categories:
- AMDE 355 ADVANCED WEB DESIGN
tags: []
---

<div class="amde-grid-lesson">
<header class="ag-hero">
<div class="ag-eyebrow">AMDE 355 · Advanced Web Design · Week 01</div>
<h2>HTML &amp; CSS Refresher</h2>
<p>Back to the foundations—but with an advanced designer's eye. Audit the structure, clean up the styles, and rebuild a familiar page into a responsive composition with stronger hierarchy and more intentional code.</p>
<div class="ag-chips">
<span class="ag-chip">Code audit</span><span class="ag-chip">HTML + CSS</span><span class="ag-chip">Responsive layout</span><span class="ag-chip">Studio lab</span>
</div>
</header>
<section class="ag-section">
<h2>01 / The challenge — make the basics work harder</h2>
<p>Advanced web design is not about piling on effects. It starts with a solid structure, a stylesheet you can reason about, and a layout that behaves when the viewport changes. This week, you will revisit familiar tools and use them more deliberately.</p>
<div class="ag-grid">
<div class="ag-card"><div class="ag-number">01</div><h3>Clean the structure</h3><p>Use semantic elements and a clear heading hierarchy. Remove unnecessary wrappers and confusing markup.</p></div>
<div class="ag-card"><div class="ag-number">02</div><h3>Take control of CSS</h3><p>Review the cascade, specificity, box sizing, reusable classes, and the difference between layout and decoration.</p></div>
<div class="ag-card"><div class="ag-number">03</div><h3>Make it responsive</h3><p>Use Grid, flexible sizing, and a deliberate breakpoint to recompose the page for a narrow screen.</p></div>
</div>
<div class="ag-callout ag-green"><strong>Studio mindset:</strong> Don’t just ask “Does it work?” Ask “Is the structure clear? Can I predict this CSS? Does the layout support the content at every size?”</div>
</section>
<section class="ag-section">
<h2>02 / Learning objectives</h2>
<div class="ag-grid">
<div class="ag-card"><h3>HTML structure</h3><p>Recognize semantic elements, attributes, nesting, and a logical document outline.</p></div>
<div class="ag-card"><h3>CSS behavior</h3><p>Explain selectors, specificity, inheritance, source order, and the box model.</p></div>
<div class="ag-card"><h3>Debugging workflow</h3><p>Use the browser inspector, test one change at a time, and verify the result at multiple widths.</p></div>
</div>
</section>
<section class="ag-section">
<h2>03 / HTML refresher — structure before style</h2>
<p>Semantic HTML describes what a piece of content is. Use headings for hierarchy, paragraphs for text blocks, and elements such as <code class="ag-inline">&lt;main&gt;</code>, <code class="ag-inline">&lt;section&gt;</code>, and <code class="ag-inline">&lt;article&gt;</code> when their meaning fits the content.</p>
<div class="ag-callout"><strong>Look for:</strong> one clear page-level heading, meaningful section headings, descriptive link text, and elements nested in a logical order.</div>
<h3>Example / A compact project feature</h3>
<div class="ag-code-window">
<div class="ag-code-top"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-code-label">HTML · structure</span></div>
<pre class="ag-code"><code><span class="tok-comment">&lt;!-- The page's structure --&gt;</span>
<span class="tok-tag">&lt;main</span> <span class="tok-attr">class</span>=<span class="tok-string">"page"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;header</span> <span class="tok-attr">class</span>=<span class="tok-string">"intro"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"eyebrow"</span><span class="tok-tag">&gt;</span>Independent creative practice<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;h1&gt;</span>AFTER IMAGE<span class="tok-tag">&lt;/h1&gt;</span>
    <span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"intro-text"</span><span class="tok-tag">&gt;</span>
      An experimental archive of image, sound, and memory.
    <span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;/header&gt;</span>

  <span class="tok-tag">&lt;section</span> <span class="tok-attr">class</span>=<span class="tok-string">"projects"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"project-card featured"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"label"</span><span class="tok-tag">&gt;</span>01 / Featured work<span class="tok-tag">&lt;/p&gt;</span>
      <span class="tok-tag">&lt;h2&gt;</span>The Shape of Noise<span class="tok-tag">&lt;/h2&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>A short description of the project.<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/article&gt;</span>
  <span class="tok-tag">&lt;/section&gt;</span>
<span class="tok-tag">&lt;/main&gt;</span></code></pre>
</div>
<p class="ag-muted">The code sample is color-coded: blue marks tags, violet marks attributes, green marks string values, and gray marks comments.</p>
</section>
<section class="ag-section">
<h2>04 / CSS refresher — make rules predictable</h2>
<p>CSS applies declarations to selected elements. When a style does not behave as expected, inspect the element and determine which rule wins before adding another override.</p>
<div class="ag-grid">
<div class="ag-card"><h3>Selector</h3><p>Identifies the elements a rule targets, such as <code class="ag-inline">.featured</code>.</p></div>
<div class="ag-card"><h3>Property</h3><p>Names the aspect you want to change, such as <code class="ag-inline">grid-template-columns</code>.</p></div>
<div class="ag-card"><h3>Value</h3><p>Sets the chosen value, such as <code class="ag-inline">repeat(3, minmax(0, 1fr))</code>.</p></div>
</div>
<div class="ag-code-window">
<div class="ag-code-top"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-code-label">CSS · layout + responsive rules</span></div>
<pre class="ag-code"><code><span class="tok-comment">/* Foundation: make sizing predictable */</span>
<span class="tok-selector">* </span><span class="tok-punct">{</span>
  <span class="tok-prop">box-sizing</span><span class="tok-punct">:</span> <span class="tok-value">border-box</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">body </span><span class="tok-punct">{</span>
  <span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-value">0</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-family</span><span class="tok-punct">:</span> <span class="tok-value">system-ui, sans-serif</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-value">1.5</span><span class="tok-punct">;</span>
  <span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">#f5f2eb</span><span class="tok-punct">;</span>
  <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">#182033</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.page </span><span class="tok-punct">{</span>
  <span class="tok-prop">width</span><span class="tok-punct">:</span> <span class="tok-value">min(1100px, 92%)</span><span class="tok-punct">;</span>
  <span class="tok-prop">margin-inline</span><span class="tok-punct">:</span> <span class="tok-value">auto</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.projects </span><span class="tok-punct">{</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">grid</span><span class="tok-punct">;</span>
  <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">repeat(3, minmax(0, 1fr))</span><span class="tok-punct">;</span>
  <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-value">1rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.featured </span><span class="tok-punct">{</span>
  <span class="tok-prop">grid-column</span><span class="tok-punct">:</span> <span class="tok-value">span 2</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-comment">/* Recompose for smaller screens */</span>
<span class="tok-key">@media</span> <span class="tok-punct">(</span><span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-value">700px</span><span class="tok-punct">) {</span>
  <span class="tok-selector">.projects </span><span class="tok-punct">{</span>
    <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">1fr</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
  <span class="tok-selector">.featured </span><span class="tok-punct">{</span>
    <span class="tok-prop">grid-column</span><span class="tok-punct">:</span> <span class="tok-value">auto</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
<span class="tok-punct">}</span></code></pre>
</div>
<div class="ag-callout ag-coral"><strong>Debugging tip:</strong> If a rule appears crossed out in the inspector, another declaration is winning. Check specificity, source order, and whether the selector matches the element.</div>
</section>
<section class="ag-section">
<h2>05 / Instructor demo — diagnose, repair, improve</h2>
<ol class="ag-steps">
<li><strong>Inspect:</strong> Open the browser developer tools and select a card. Review its HTML and applied CSS.</li>
<li><strong>Repair:</strong> Fix a missing class, invalid nesting, conflicting rule, or broken image path.</li>
<li><strong>Recompose:</strong> Use Grid for the project area and make the featured item span more than one column.</li>
<li><strong>Resize:</strong> Narrow the viewport. Add a breakpoint only when the content needs a different arrangement.</li>
<li><strong>Explain:</strong> Identify which change improved structure, which improved styling, and which improved responsiveness.</li>
</ol>
<h3>Optional debugging snippet</h3>
<div class="ag-code-window">
<div class="ag-code-top"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-code-label">JavaScript · console check</span></div>
<pre class="ag-code"><code><span class="tok-comment">// Small debugging habit: inspect a selected element.</span>
<span class="tok-key">const</span> card = document.querySelector(<span class="tok-string">".project-card"</span>);

<span class="tok-key">if</span> (card) {
  console.log(<span class="tok-string">"Card found:"</span>, card);
} <span class="tok-key">else</span> {
  console.log(<span class="tok-string">"Check the class name in your HTML."</span>);
}</code></pre>
</div>
<p class="ag-muted">This tiny script is only a debugging example. The core refresher is HTML and CSS; you do not need JavaScript to complete the main assignment.</p>
</section>
<section class="ag-section" id="instructor-layout-code">
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;color:#182033;">
<p style="margin:0 0 8px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h2 style="margin:0 0 10px;">Instructor Layout Code — Step by Step</h2>
<p style="margin:0;">Use this as a live-coding script. Build the page in stages, preview after each stage, and ask students to predict the result before you make each change.</p>
</div>
<h3>Demo goal</h3>
<p>Build a small creative portfolio page from a plain HTML structure into a responsive, editorial layout. This revisits the HTML/CSS foundations while giving students an engaging before-and-after transformation.</p>
<p><strong>Suggested timing:</strong> 20–30 minutes. In CodePen, place the HTML in the HTML panel and the CSS in the CSS panel. The HTML and CSS below are separate snippets.</p>
<h3>Step 1 — Start with the content structure</h3>
<p>Paste this into the HTML panel. Preview it before adding CSS. Ask students to identify the main heading, the introductory text, and the three project cards.</p>
<div class="ag-code-window">
<div class="ag-code-top"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-code-label">HTML · step 1 / structure</span></div>
<pre class="ag-code"><code><span class="tok-tag">&lt;main</span> <span class="tok-attr">class</span>=<span class="tok-string">"portfolio"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;header</span> <span class="tok-attr">class</span>=<span class="tok-string">"intro"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"eyebrow"</span><span class="tok-tag">&gt;</span>SELECTED WORK / 2026<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;h1&gt;</span>Ideas in Motion<span class="tok-tag">&lt;/h1&gt;</span>
    <span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"intro-copy"</span><span class="tok-tag">&gt;</span>
      A small archive of experiments, images, and digital objects.
    <span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;/header&gt;</span>

  <span class="tok-tag">&lt;section</span> <span class="tok-attr">class</span>=<span class="tok-string">"projects"</span> <span class="tok-attr">aria-label</span>=<span class="tok-string">"Selected projects"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"project featured"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"project-type"</span><span class="tok-tag">&gt;</span>01 / IMAGE<span class="tok-tag">&lt;/p&gt;</span>
      <span class="tok-tag">&lt;h2&gt;</span>Afterimage<span class="tok-tag">&lt;/h2&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>Photographs about memory and movement.<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/article&gt;</span>

    <span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"project"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"project-type"</span><span class="tok-tag">&gt;</span>02 / INTERACTION<span class="tok-tag">&lt;/p&gt;</span>
      <span class="tok-tag">&lt;h2&gt;</span>Soft Machines<span class="tok-tag">&lt;/h2&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>A playful experiment with digital interfaces.<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/article&gt;</span>

    <span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"project"</span><span class="tok-tag">&gt;</span>
      <span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"project-type"</span><span class="tok-tag">&gt;</span>03 / MOVING IMAGE<span class="tok-tag">&lt;/p&gt;</span>
      <span class="tok-tag">&lt;h2&gt;</span>Common Weather<span class="tok-tag">&lt;/h2&gt;</span>
      <span class="tok-tag">&lt;p&gt;</span>Short studies of atmosphere and place.<span class="tok-tag">&lt;/p&gt;</span>
    <span class="tok-tag">&lt;/article&gt;</span>
  <span class="tok-tag">&lt;/section&gt;</span>

  <span class="tok-tag">&lt;footer</span> <span class="tok-attr">class</span>=<span class="tok-string">"site-footer"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;p&gt;</span>Made for the web · 2026<span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;/footer&gt;</span>
<span class="tok-tag">&lt;/main&gt;</span></code></pre>
</div>
<p><strong>Explain:</strong> <code class="ag-inline">main</code> contains the primary content; <code class="ag-inline">header</code> introduces the page; <code class="ag-inline">section</code> groups related projects; each <code class="ag-inline">article</code> is a self-contained project item. The class names connect the HTML to CSS.</p>
<h3>Step 2 — Add a reset and readable defaults</h3>
<p>Paste this at the top of the CSS panel. Show how the universal selector makes box sizing predictable and how the body rules set the overall tone.</p>
<div class="ag-code-window">
<div class="ag-code-top"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-code-label">CSS · step 2 / foundation</span></div>
<pre class="ag-code"><code><span class="tok-selector">*</span> <span class="tok-punct">{</span>
  <span class="tok-prop">box-sizing</span><span class="tok-punct">:</span> <span class="tok-value">border-box</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">body</span> <span class="tok-punct">{</span>
  <span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-family</span><span class="tok-punct">:</span> <span class="tok-value">Arial, Helvetica, sans-serif</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">1.5</span><span class="tok-punct">;</span>
  <span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">#f2f0e9</span><span class="tok-punct">;</span>
  <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">#182033</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.portfolio</span> <span class="tok-punct">{</span>
  <span class="tok-prop">width</span><span class="tok-punct">:</span> <span class="tok-value">min(1100px, 92%)</span><span class="tok-punct">;</span>
  <span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-num">0</span> <span class="tok-value">auto</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre>
</div>
<p><strong>Live change:</strong> Temporarily remove <code class="ag-inline">margin: 0 auto</code> from <code class="ag-inline">.portfolio</code>. Ask students to compare the alignment, then restore it.</p>
<h3>Step 3 — Establish the typographic hierarchy</h3>
<p>Style the intro first. This creates a strong opening before the cards are arranged.</p>
<div class="ag-code-window">
<div class="ag-code-top"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-code-label">CSS · step 3 / type + spacing</span></div>
<pre class="ag-code"><code><span class="tok-selector">.intro</span> <span class="tok-punct">{</span>
  <span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">clamp(3rem, 10vw, 7rem)</span> <span class="tok-num">0</span> <span class="tok-num">3rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">850px</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.eyebrow, .project-type</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">.75rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-weight</span><span class="tok-punct">:</span> <span class="tok-num">800</span><span class="tok-punct">;</span>
  <span class="tok-prop">letter-spacing</span><span class="tok-punct">:</span> <span class="tok-num">.14em</span><span class="tok-punct">;</span>
  <span class="tok-prop">text-transform</span><span class="tok-punct">:</span> <span class="tok-value">uppercase</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.intro h1</span> <span class="tok-punct">{</span>
  <span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">800px</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">clamp(3rem, 9vw, 7.5rem)</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">.9</span><span class="tok-punct">;</span>
  <span class="tok-prop">letter-spacing</span><span class="tok-punct">:</span> <span class="tok-num">-.06em</span><span class="tok-punct">;</span>
  <span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-num">1rem 0</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.intro-copy</span> <span class="tok-punct">{</span>
  <span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">560px</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">1.15rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre>
</div>
<p><strong>Ask:</strong> Which property changes the headline's size as the viewport changes? What does the first and last value inside <code class="ag-inline">clamp()</code> control?</p>
<h3>Step 4 — Turn the projects into a Grid</h3>
<p>Use a three-column grid and make the first project span two columns. This creates a clear focal point without adding images or JavaScript.</p>
<div class="ag-code-window">
<div class="ag-code-top"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-code-label">CSS · step 4 / Grid layout</span></div>
<pre class="ag-code"><code><span class="tok-selector">.projects</span> <span class="tok-punct">{</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">grid</span><span class="tok-punct">;</span>
  <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">repeat(3, minmax(0, 1fr))</span><span class="tok-punct">;</span>
  <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.project</span> <span class="tok-punct">{</span>
  <span class="tok-prop">min-height</span><span class="tok-punct">:</span> <span class="tok-num">220px</span><span class="tok-punct">;</span>
  <span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">1.5rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">border</span><span class="tok-punct">:</span> <span class="tok-num">1px</span> <span class="tok-value">solid #182033</span><span class="tok-punct">;</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span>
  <span class="tok-prop">flex-direction</span><span class="tok-punct">:</span> <span class="tok-value">column</span><span class="tok-punct">;</span>
  <span class="tok-prop">justify-content</span><span class="tok-punct">:</span> <span class="tok-value">space-between</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.featured</span> <span class="tok-punct">{</span>
  <span class="tok-prop">grid-column</span><span class="tok-punct">:</span> <span class="tok-value">span 2</span><span class="tok-punct">;</span>
  <span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">#b8f34b</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.project h2</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">clamp(1.5rem, 3vw, 2.5rem)</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">1</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre>
</div>
<p><strong>Live changes:</strong> Remove <code class="ag-inline">grid-column: span 2</code> to make all cards equal. Restore it, then change the featured card's background. Discuss how scale and contrast change the reading order.</p>
<h3>Step 5 — Add the responsive breakpoint</h3>
<p>Resize the preview. When three columns become too narrow, change the layout to two columns and then one column on small screens.</p>
<div class="ag-code-window">
<div class="ag-code-top"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-code-label">CSS · step 5 / responsive layout</span></div>
<pre class="ag-code"><code><span class="tok-key">@media</span> <span class="tok-punct">(</span><span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">760px</span><span class="tok-punct">)</span> <span class="tok-punct">{</span>
  <span class="tok-selector">.projects</span> <span class="tok-punct">{</span>
    <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">repeat(2, minmax(0, 1fr))</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
  <span class="tok-selector">.featured</span> <span class="tok-punct">{</span>
    <span class="tok-prop">grid-column</span><span class="tok-punct">:</span> <span class="tok-value">span 2</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
<span class="tok-punct">}</span>

<span class="tok-key">@media</span> <span class="tok-punct">(</span><span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">520px</span><span class="tok-punct">)</span> <span class="tok-punct">{</span>
  <span class="tok-selector">.projects</span> <span class="tok-punct">{</span>
    <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-num">1fr</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
  <span class="tok-selector">.featured</span> <span class="tok-punct">{</span>
    <span class="tok-prop">grid-column</span><span class="tok-punct">:</span> <span class="tok-value">auto</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
  <span class="tok-selector">.intro</span> <span class="tok-punct">{</span>
    <span class="tok-prop">padding-bottom</span><span class="tok-punct">:</span> <span class="tok-num">2rem</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
<span class="tok-punct">}</span></code></pre>
</div>
<p><strong>Explain:</strong> A media query applies rules only when its condition is true. The layout changes because the content needs more room—not because every element should simply become smaller.</p>
<h3>Step 6 — Finish the footer and test the page</h3>
<div class="ag-code-window">
<div class="ag-code-top"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-code-label">CSS · step 6 / finishing touches</span></div>
<pre class="ag-code"><code><span class="tok-selector">.site-footer</span> <span class="tok-punct">{</span>
  <span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">2rem 0</span><span class="tok-punct">;</span>
  <span class="tok-prop">margin-top</span><span class="tok-punct">:</span> <span class="tok-num">2rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">border-top</span><span class="tok-punct">:</span> <span class="tok-num">1px</span> <span class="tok-value">solid #b9b8b0</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">.85rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre>
</div>
<ul class="ag-checklist">
<li>Check the page at desktop, tablet, and mobile widths.</li>
<li>Confirm there is no accidental horizontal scrolling.</li>
<li>Change one color and one spacing value to show how easy it is to adjust the design.</li>
<li>Use the browser inspector to select a project card and identify its applied CSS rules.</li>
<li>Ask students to describe the visual hierarchy and name the CSS rules creating it.</li>
</ul>
<div class="ag-callout ag-coral"><strong>Instructor troubleshooting:</strong> If the featured card does not span two columns, check that the HTML includes <code class="ag-inline">class="project featured"</code> and that the CSS selector is <code class="ag-inline">.featured</code>. If the mobile layout still has two columns, confirm the second media query appears after the first one.</div>
<div class="ag-callout ag-green"><strong>Teaching note:</strong> The goal is not for students to copy this design exactly. Use it to model a process: structure the content, add predictable styles, create hierarchy, test the layout, and explain the decisions.</div>
<section class="ag-section">
<h2>06 / Studio assignment — the code rescue</h2>
<p>Choose a previous page or use a supplied starter page with deliberately messy markup and CSS. Your goal is to make it easier to read, easier to maintain, and more responsive—without losing the original content or concept.</p>
<div class="ag-grid">
<div class="ag-card"><div class="ag-number">A</div><h3>Audit</h3><p>Identify at least three problems in structure, CSS, or responsive behavior before changing the code.</p></div>
<div class="ag-card"><div class="ag-number">B</div><h3>Refactor</h3><p>Use semantic HTML, organize the stylesheet, reduce duplicated declarations, and create a clear layout.</p></div>
<div class="ag-card"><div class="ag-number">C</div><h3>Test</h3><p>Check wide and narrow screens, repair overflow, and verify links and images.</p></div>
</div>
<div class="ag-callout"><strong>Required design move:</strong> Include one clearly featured content area and at least one intentional layout change at a smaller viewport.</div>
</section>
<section class="ag-section">
<h2>07 / Submission requirements</h2>
<ul class="ag-steps">
<li>Submit the working HTML and CSS files or the assigned CodePen link.</li>
<li>Include desktop and mobile screenshots; include a tablet view if your layout has a distinct tablet treatment.</li>
<li>Provide a short code audit listing three problems and how you addressed them.</li>
<li>Write a brief reflection: what did you change, and why is the revised version better?</li>
</ul>
</section>
<section class="ag-section">
<h2>08 / Final quality check</h2>
<ul class="ag-checklist">
<li>The HTML uses a logical heading hierarchy and meaningful structure.</li>
<li>The CSS is organized and does not rely on unnecessary overrides.</li>
<li>The page uses Grid or Flexbox intentionally rather than fixed positioning for everything.</li>
<li>There is no accidental horizontal scrolling at narrow widths.</li>
<li>Links and images work, and image sizing remains responsive.</li>
<li>The screenshots show the actual revised page.</li>
</ul>
</section>
<section class="ag-section">
<h2>09 / Troubleshooting lab</h2>
<div class="ag-grid">
<div class="ag-card"><h3>“My CSS isn’t changing.”</h3><p>Confirm the stylesheet path, save the file, check the selector, and inspect whether another rule overrides it.</p></div>
<div class="ag-card"><h3>“The grid is overflowing.”</h3><p>Try <code class="ag-inline">minmax(0, 1fr)</code>, remove fixed widths where possible, and test the narrow layout.</p></div>
<div class="ag-card"><h3>“The code looks messy.”</h3><p>Group related rules, use meaningful class names, remove dead declarations, and format indentation consistently.</p></div>
</div>
<div class="ag-callout ag-green"><strong>Next week:</strong> Advanced CSS &amp; Layout Systems. Bring your cleaned-up page—we’ll compare Grid and Flexbox as design tools and explore more flexible sizing patterns.</div>
</section>
<footer class="ag-footer">
<h2>AMDE 355 / Advanced Web Design</h2>
<p>Structure with purpose. Style with intention. Test every decision.</p>
</footer>
</section></div>
