---
title: 'AMDE 155: Give Your Website a Personality (Week 5)'
slug: amde-155-give-your-website-a-personality-week-5
date: '2026-10-22'
modified: '2026-10-23'
status: published
wordpress_id: 68162
source_url: https://nuggetofjoy.com/amde-155-give-your-website-a-personality-week-5/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
tags: []
migration:
  format: hybrid-markdown
  original_html: original-html/68162.html
  post_css: styles/posts/68162.css
  needs_review: true
---

<div class="amde-grid-lesson">
<header class="ag-hero">
<p class="ag-eyebrow">AMDE 155 · Introduction to Web Design · Week 05</p>
<h1>Typography, Color, and Visual Hierarchy</h1>
<p>Typography and color do more than decorate a page. They help people understand what matters, move through information, and recognize a consistent visual identity.</p>
<div class="ag-chips">
<span class="ag-chip">Typography</span><span class="ag-chip">Color &amp; Contrast</span><span class="ag-chip">Visual Hierarchy</span><span class="ag-chip">CSS Design Tokens</span>
</div>
</header>
<section class="ag-section">
<p class="ag-eyebrow">01 / THE BIG IDEA</p>
<h2>Design gives information a reading order</h2>
<p>Imagine a page where every word is the same size, every color competes for attention, and nothing feels more important than anything else. It might contain good information, but visitors would have to work harder to understand it.</p>
<p>Typography, color, spacing, and contrast create visual hierarchy: a set of cues that helps people notice the most important information first and understand how the rest is organized.</p>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">01</span><h3>Typography</h3><p>Use size, weight, line height, and line length to make content readable and establish levels of importance.</p></article>
<article class="ag-card"><span class="ag-number">02</span><h3>Color</h3><p>Use a limited palette to create tone, group related elements, and draw attention where it is useful.</p></article>
<article class="ag-card"><span class="ag-number">03</span><h3>Consistency</h3><p>Repeat a small set of styles so headings, body text, links, and buttons feel like parts of the same system.</p></article>
</div>
<div class="ag-callout"><strong>Today's goal:</strong> Create a simple style tile with a headline, subheading, body text, button, and a small palette. Test how typography and color affect readability.</div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">02 / TYPOGRAPHY</p>
<h2>Build a type hierarchy</h2>
<p>Different kinds of text need different jobs. A headline introduces the main idea, a subheading organizes a section, body text carries details, and small labels or captions provide supporting information.</p>
<div class="ag-grid">
<article class="ag-card"><h3>Scale</h3><p>Make important headings larger than supporting text. Use a limited number of sizes instead of styling every line differently.</p></article>
<article class="ag-card"><h3>Weight</h3><p>Use bold or semibold type selectively to signal importance. If everything is bold, nothing stands out.</p></article>
<article class="ag-card"><h3>Line length &amp; spacing</h3><p>Keep paragraphs at a comfortable measure and use line height that makes text easy to follow.</p></article>
</div>
<h3>Example: a reusable type system</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">style.css · typography</span></div><pre class="ag-code"><code><span class="tok-selector">h1</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">clamp(2.5rem, 7vw, 5rem)</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">1.05</span><span class="tok-punct">;</span>
  <span class="tok-prop">letter-spacing</span><span class="tok-punct">:</span> <span class="tok-num">-0.04em</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">p</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">1.7</span><span class="tok-punct">;</span>
  <span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">62ch</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<div class="ag-callout blue"><strong>Notice:</strong> <code>clamp()</code> allows the heading size to respond to the screen width while staying within a minimum and maximum. The <code>ch</code> unit can help limit line length.</div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">03 / COLOR &amp; CONTRAST</p>
<h2>Color should support readability</h2>
<p>Color can establish mood, organize content, and emphasize an action. But text must remain readable against its background. Do not rely on hue alone to communicate important information.</p>
<div class="ag-callout amber"><strong>Good practice:</strong> Test body text, small labels, and buttons—not just large headings. For accessibility, aim for a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.</div>
<h3>Interactive Color &amp; Contrast Lab</h3>
<p>Use the controls to change the text and background colors. The preview and estimated contrast ratio update as you work. Try a light-on-light or dark-on-dark combination, then adjust it until the text is easier to read.</p>
<div class="ag-controls">
<div class="ag-control"><label for="ag-text-color">Text color</label><input id="ag-text-color" type="color" value="#20242c"/></div>
<div class="ag-control"><label for="ag-bg-color">Background color</label><input id="ag-bg-color" type="color" value="#f7f5f0"/></div>
</div>
<div class="ag-demo-preview" id="ag-contrast-preview">
<p class="demo-kicker">Color &amp; Contrast Lab</p>
<h3>Make the important thing clear.</h3>
<p>Contrast helps readers distinguish text from its background. A clear design can still have personality, but readability has to come first.</p>
<a class="ag-demo-button" href="#style-tile">Example action</a>
</div>
<p>Estimated contrast ratio: <span aria-live="polite" class="ag-contrast-result" id="ag-contrast-ratio">—</span> <span id="ag-contrast-guidance">Choose colors to check contrast.</span></p>
<p class="ag-muted">This small lab estimates WCAG contrast from the selected colors. Use a dedicated accessibility checker for final project verification.</p>
</section>
<section class="ag-section">
<p class="ag-eyebrow">04 / PUT IT TOGETHER</p>
<h2>Make a visual system, not a pile of styles</h2>
<p>A consistent page uses a small set of repeatable choices. Define colors once, reuse them, and give each one a purpose. The same idea applies to typography, spacing, buttons, and links.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">style.css · reusable design tokens</span></div><pre class="ag-code"><code><span class="tok-selector">:root</span> <span class="tok-punct">{</span>
  <span class="tok-prop">--color-ink</span><span class="tok-punct">:</span> <span class="tok-value">#20242c</span><span class="tok-punct">;</span>
  <span class="tok-prop">--color-paper</span><span class="tok-punct">:</span> <span class="tok-value">#f7f5f0</span><span class="tok-punct">;</span>
  <span class="tok-prop">--color-accent</span><span class="tok-punct">:</span> <span class="tok-value">#c64f3d</span><span class="tok-punct">;</span>
  <span class="tok-prop">--space-unit</span><span class="tok-punct">:</span> <span class="tok-num">8px</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">body</span> <span class="tok-punct">{</span>
  <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-ink)</span><span class="tok-punct">;</span>
  <span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-paper)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">a</span> <span class="tok-punct">{</span>
  <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-accent)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<p>CSS custom properties (also called variables) let you reuse the same color or spacing value. If you change the variable once, every rule that uses it can update.</p>
</section>
<section class="ag-section" id="style-tile">
<p class="ag-eyebrow">05 / IN-CLASS EXERCISE</p>
<h2>Create a one-page style tile</h2>
<p>Choose a fictional artist, musician, exhibition, publication, or creative studio. Keep the content simple and focus on the visual decisions.</p>
<ol class="ag-steps">
<li><strong>Choose a direction.</strong> Write three words describing the mood you want to communicate.</li>
<li><strong>Set the type hierarchy.</strong> Create a headline, subheading, body text, and small label with clear differences in scale and weight.</li>
<li><strong>Choose three to five colors.</strong> Give each color a job, such as background, body text, accent, or secondary information.</li>
<li><strong>Style one action.</strong> Make a button or link that is easy to identify and read.</li>
<li><strong>Test and revise.</strong> Check the text/background contrast and adjust any combination that is hard to read.</li>
</ol>
<h3>Success checklist</h3>
<ul class="ag-checklist">
<li>Headline, subheading, body text, and label are visually distinct.</li>
<li>The palette is limited and used consistently.</li>
<li>Links or buttons are identifiable without relying on color alone.</li>
<li>Body text is comfortable to read and has sufficient contrast.</li>
<li>The style tile communicates a clear visual direction.</li>
</ul>
</section>
<!-- INSTRUCTOR-ONLY SECTION: REMOVE THIS ENTIRE SECTION BEFORE PUBLISHING TO STUDENTS -->
<section class="ag-section ag-instructor-only">
<p class="ag-eyebrow">Instructor-only material · Remove before publishing</p>
<h2>Instructor demonstration — change one decision at a time</h2>
<p>Use this sequence to model how CSS choices affect the same content. Keep the preview visible while you demonstrate.</p>
<h3>Step 1 — Establish the hierarchy</h3>
<p>Point to the headline, body copy, and button. Ask students which element they noticed first and why. Change only the heading size in the live example above, then ask whether the hierarchy feels stronger or weaker.</p>
<h3>Step 2 — Change the palette</h3>
<p>Use the text and background color pickers. First choose a combination with poor contrast, then adjust one color until the text is readable. Ask students to predict the outcome before changing each value.</p>
<h3>Step 3 — Introduce a deliberate CSS error</h3>
<p>Show the following rule with a misspelled property. Ask students to find the problem before correcting it.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">debug-this.css</span></div><pre class="ag-code"><code><span class="tok-selector">.demo-title</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-szie</span><span class="tok-punct">:</span> <span class="tok-num">3rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">#20242c</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<div class="ag-callout amber"><strong>Correction:</strong> <code>font-szie</code> should be <code>font-size</code>. CSS may ignore an invalid declaration while applying the valid one. Fix the spelling and preview again.</div>
<h3>Step 4 — Ask for reasoning</h3>
<ul>
<li>Which visual decision most clearly establishes hierarchy?</li>
<li>How does changing the accent color affect the mood?</li>
<li>Why is contrast a usability issue as well as a visual design issue?</li>
<li>Which styles should remain consistent across every page of a site?</li>
</ul>
</section>
<!-- END INSTRUCTOR-ONLY SECTION -->
<section class="ag-section">
<p class="ag-eyebrow">06 / REFLECTION &amp; NEXT STEPS</p>
<h2>Connect today's choices to your website</h2>
<p>Use your style tile as a visual guide for the midterm and final websites. You can revise it as your project develops, but keep track of the decisions you make and the reasons behind them.</p>
<h3>Before you leave</h3>
<ol>
<li>What is one typography or color choice you changed today?</li>
<li>What did that change do to readability or hierarchy?</li>
<li>What is one design decision you want to carry into your website project?</li>
</ol>
</section>
<footer class="ag-footer">
<strong>AMDE 155 · Introduction to Web Design</strong><br/>
  Week 05 — Typography, Color, and Visual Hierarchy<br/>
<span>Build a system. Make the important things clear.</span>
</footer>
</div>


<script>
(function () {
  const root = document.currentScript && document.currentScript.parentElement
    ? document.currentScript.parentElement.querySelector('.amde-grid-lesson')
    : document.querySelector('.amde-grid-lesson');
  if (!root) return;

  const textInput = root.querySelector('#ag-text-color');
  const bgInput = root.querySelector('#ag-bg-color');
  const preview = root.querySelector('#ag-contrast-preview');
  const ratioOut = root.querySelector('#ag-contrast-ratio');
  const guidance = root.querySelector('#ag-contrast-guidance');
  if (!textInput || !bgInput || !preview || !ratioOut || !guidance) return;

  function luminance(hex) {
    const value = hex.replace('#', '');
    const rgb = [0, 2, 4].map(i => parseInt(value.slice(i, i + 2), 16) / 255);
    const linear = rgb.map(c => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  }

  function updateContrast() {
    const l1 = luminance(textInput.value);
    const l2 = luminance(bgInput.value);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    preview.style.color = textInput.value;
    preview.style.backgroundColor = bgInput.value;
    const button = preview.querySelector('.ag-demo-button');
    button.style.backgroundColor = textInput.value;
    button.style.color = bgInput.value;
    ratioOut.textContent = ratio.toFixed(2) + ':1';
    if (ratio >= 7) guidance.textContent = 'Excellent contrast — meets WCAG AAA for normal text.';
    else if (ratio >= 4.5) guidance.textContent = 'Pass — meets WCAG AA for normal text.';
    else if (ratio >= 3) guidance.textContent = 'Below AA for normal text; may pass for large text.';
    else guidance.textContent = 'Low contrast — adjust one or both colors.';
  }

  textInput.addEventListener('input', updateContrast);
  bgInput.addEventListener('input', updateContrast);
  updateContrast();
})();
</script>
