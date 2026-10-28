---
layout: teaching-post
title: AMDE 355 - Typography, Motion &amp; Composition (Week 6)
slug: amde-355-typography-motion-composition-week-6
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68204
source_url: https://nuggetofjoy.com/amde-355-typography-motion-composition-week-6/
author: admin
categories:
- AMDE 355 ADVANCED WEB DESIGN
- Projects
tags: []
---

<div class="amde-grid-lesson">

<section class="ag-hero">
<p class="ag-eyebrow">AMDE 355 · Advanced Web Design · Week 06</p>
<h2>Typography, Motion &amp; Composition.</h2>
<p>Typography is more than choosing a font. It creates hierarchy, pace, tone, and movement across a page. This week, you’ll build a typographic system and use restrained motion to guide attention without distracting from the content.</p>
<div class="ag-chips"><span class="ag-chip">Type systems</span><span class="ag-chip">Fluid typography</span><span class="ag-chip">CSS transitions</span><span class="ag-chip">Motion with purpose</span></div>
</section>
<section class="ag-section">
<h2>01 / Typography is interface design</h2>
<p>A strong typographic system makes a page easier to scan and gives it a recognizable voice. Instead of styling every heading independently, establish a small set of roles and use them consistently.</p>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">01</span><h3>Hierarchy</h3><p>Use size, weight, spacing, and contrast to show what matters first, second, and third.</p></article>
<article class="ag-card"><span class="ag-number">02</span><h3>Readability</h3><p>Control line length, line height, and paragraph spacing. Small adjustments can make long text feel dramatically easier to read.</p></article>
<article class="ag-card"><span class="ag-number">03</span><h3>Personality</h3><p>Choose typefaces that support the project’s tone, then use contrast deliberately rather than collecting too many fonts.</p></article>
</div>
<div class="ag-callout"><strong>Design principle:</strong> create contrast with a plan. A large display headline, a comfortable body size, and a restrained supporting style are often enough.</div>
</section>
<section class="ag-section">
<h2>02 / Build a small type scale</h2>
<p>Define reusable CSS custom properties for your type system. These tokens make it easier to adjust the overall design later.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">type-system.css · reusable type tokens</span></div>
<div class="ag-code"><span class="tok-selector">:root</span> <span class="tok-punct">{</span>
<span class="tok-comment">/* Type scale and reading rhythm */</span>
<span class="tok-prop">--type-body</span><span class="tok-punct">:</span> <span class="tok-value">1rem</span><span class="tok-punct">;</span>
<span class="tok-prop">--type-heading</span><span class="tok-punct">:</span> <span class="tok-value">clamp(2rem, 5vw, 4.5rem)</span><span class="tok-punct">;</span>
<span class="tok-prop">--type-subhead</span><span class="tok-punct">:</span> <span class="tok-value">clamp(1.25rem, 2vw, 1.75rem)</span><span class="tok-punct">;</span>
<span class="tok-prop">--reading-width</span><span class="tok-punct">:</span> <span class="tok-value">65ch</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">body</span> <span class="tok-punct">{</span>
<span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">var(--type-body)</span><span class="tok-punct">;</span>
<span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-value">1.65</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">h1</span> <span class="tok-punct">{</span>
<span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">var(--type-heading)</span><span class="tok-punct">;</span>
<span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-value">0.98</span><span class="tok-punct">;</span>
<span class="tok-prop">letter-spacing</span><span class="tok-punct">:</span> <span class="tok-value">-0.04em</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></div>
</div>
<div class="ag-callout blue"><strong>What does <code class="ag-inline">clamp()</code> do?</strong> It sets a minimum, a flexible preferred value, and a maximum. The headline can scale with the viewport without becoming tiny or enormous.</div>
</section>
<section class="ag-section">
<h2>03 / Tune the reading experience</h2>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">A</span><h3>Line length</h3><p>Use a readable measure for paragraphs. The <code class="ag-inline">ch</code> unit is useful for limiting text width based on character size.</p></article>
<article class="ag-card"><span class="ag-number">B</span><h3>Line height</h3><p>Body text usually needs more vertical space than a large headline. Adjust each level for its role.</p></article>
<article class="ag-card"><span class="ag-number">C</span><h3>Responsive scale</h3><p>Check your type at mobile, tablet, and desktop widths. A good scale adapts without breaking the hierarchy.</p></article>
</div>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">type-system.css · text measure</span></div>
<div class="ag-code"><span class="tok-selector">.article-copy</span> <span class="tok-punct">{</span>
<span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-value">65ch</span><span class="tok-punct">;</span>
<span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">1rem</span><span class="tok-punct">;</span>
<span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-value">1.7</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">@media (max-width: 600px)</span> <span class="tok-punct">{</span>
<span class="tok-selector">.article-copy</span> <span class="tok-punct">{</span>
<span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-value">1.6</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-punct">}</span></div>
</div>
</section>
<section class="ag-section">
<h2>04 / Add motion that communicates</h2>
<p>Motion can signal interactivity, provide feedback, and help users understand a change of state. Keep it brief, purposeful, and consistent. Avoid animating every element just because CSS makes it possible.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">motion.css · a clear hover response</span></div>
<div class="ag-code"><span class="tok-selector">.project-link</span> <span class="tok-punct">{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">inline-block</span><span class="tok-punct">;</span>
<span class="tok-prop">transition</span><span class="tok-punct">:</span> <span class="tok-value">transform 180ms ease, color 180ms ease</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.project-link:hover</span> <span class="tok-punct">{</span>
<span class="tok-prop">transform</span><span class="tok-punct">:</span> <span class="tok-value">translateY(-3px)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">@media (prefers-reduced-motion: reduce)</span> <span class="tok-punct">{</span>
<span class="tok-selector">.project-link</span> <span class="tok-punct">{</span>
<span class="tok-prop">transition</span><span class="tok-punct">:</span> <span class="tok-value">none</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-punct">}</span></div>
</div>
<div class="ag-callout amber"><strong>Accessibility note:</strong> respect the user’s reduced-motion preference. Motion should never be the only way to communicate important information.</div>
</section>
<section class="ag-section">
<h2>05 / In-class assignment — type in motion</h2>
<p>Choose a short piece of content from your Week 4 visual direction or Week 5 composition. Turn it into a responsive typographic landing section with one purposeful motion interaction.</p>
<div class="ag-steps">
<div class="ag-step"><span class="ag-number">1</span><div><h3>Define your type roles</h3><p>Choose a display heading, subheading, body style, and small supporting label. Document the size, weight, and line height of each.</p></div></div>
<div class="ag-step"><span class="ag-number">2</span><div><h3>Create CSS tokens</h3><p>Use custom properties for your type scale and colors. Include at least one fluid size using <code class="ag-inline">clamp()</code>.</p></div></div>
<div class="ag-step"><span class="ag-number">3</span><div><h3>Add one interaction</h3><p>Apply a short transition to a link, button, or project card. Make the state change obvious but restrained.</p></div></div>
<div class="ag-step"><span class="ag-number">4</span><div><h3>Test three widths</h3><p>Check desktop, tablet, and mobile. Confirm that the headline wraps intentionally and the text remains readable.</p></div></div>
</div>
<div class="ag-callout"><strong>Deliverable:</strong> a working responsive page section, your type-token CSS, and a short note explaining how typography and motion support the project’s tone.</div>
</section>
<section class="ag-section">
<h2>06 / Critique &amp; self-check</h2>
<div class="ag-grid">
<article class="ag-card"><h3>Hierarchy</h3><p>Can a viewer identify the headline, supporting information, and next action quickly?</p></article>
<article class="ag-card"><h3>Consistency</h3><p>Are the type styles reused intentionally, or does every element feel unrelated?</p></article>
<article class="ag-card"><h3>Motion</h3><p>Does the interaction communicate feedback? Is the page still understandable without motion?</p></article>
</div>
<ul class="ag-checklist">
<li>Type roles and CSS custom properties are defined.</li>
<li>At least one type size uses <code class="ag-inline">clamp()</code>.</li>
<li>Paragraph measure and line height support comfortable reading.</li>
<li>One purposeful transition or interaction is included.</li>
<li>Reduced-motion preferences are considered.</li>
<li>Desktop, tablet, and mobile views have been checked.</li>
</ul>
</section>
<section class="ag-section" id="instructor-layout-code">
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;margin-bottom:18px;">
<p style="margin:0 0 6px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h2 style="margin:0 0 8px;">Instructor Layout Code — Step by Step</h2>
<p style="margin:0;">Use this demonstration to model how a designer develops a type system, tests it in context, and adds motion only when it improves the experience.</p>
</div>
<div class="ag-steps">
<div class="ag-step"><span class="ag-number">1</span><div><h3>Start with content</h3><p>Choose a short headline, one paragraph, and one action link. Ask students what should be noticed first and why.</p></div></div>
<div class="ag-step"><span class="ag-number">2</span><div><h3>Build the type scale</h3><p>Define body, subhead, and display sizes as custom properties. Demonstrate how changing one token affects the whole page.</p></div></div>
<div class="ag-step"><span class="ag-number">3</span><div><h3>Use fluid type</h3><p>Replace a fixed oversized heading with <code class="ag-inline">clamp()</code>. Resize the browser and discuss minimum, preferred, and maximum values.</p></div></div>
<div class="ag-step"><span class="ag-number">4</span><div><h3>Adjust the reading measure</h3><p>Apply a <code class="ag-inline">max-width</code> using <code class="ag-inline">ch</code>. Compare long lines with a narrower text column.</p></div></div>
<div class="ag-step"><span class="ag-number">5</span><div><h3>Add one transition</h3><p>Animate a small interaction such as a link shifting upward on hover. Explain the duration and easing, then test keyboard focus as well.</p></div></div>
<div class="ag-step"><span class="ag-number">6</span><div><h3>Check accessibility and responsive behavior</h3><p>Use the keyboard, test narrow widths, and demonstrate <code class="ag-inline">prefers-reduced-motion</code>. Ask whether the design still communicates without animation.</p></div></div>
</div>
<div class="ag-callout" style="margin-top:20px;"><strong>Instructor demonstration:</strong> The six steps above are the teaching sequence. The examples below are the actual code to type, test, and discuss. Move slowly through them; show the result after each change instead of pasting everything at once.</div>
<section class="ag-section" style="margin-top:22px;">
<h3>Step 1A — Start with the content and semantic HTML</h3>
<p>Begin with meaning before decoration. This sample gives students a headline, a supporting paragraph, and one action. Ask: What should the visitor notice first? What information supports that message? What is the action?</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">index.html</span></div><pre class="ag-code"><code><span class="tok-comment">&lt;!-- Start with the message. Do not style it yet. --&gt;</span>
<span class="tok-tag">&lt;main</span> <span class="tok-attr">class</span>=<span class="tok-string">"poster"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"eyebrow"</span><span class="tok-tag">&gt;</span>Independent Design Journal<span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;h1</span> <span class="tok-attr">class</span>=<span class="tok-string">"headline"</span><span class="tok-tag">&gt;</span>
    Ideas move<br/>the world.
  <span class="tok-tag">&lt;/h1&gt;</span>
  <span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"intro"</span><span class="tok-tag">&gt;</span>
    A journal about creative work, unexpected connections,
    and the people who make things happen.
  <span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;a</span> <span class="tok-attr">class</span>=<span class="tok-string">"action"</span> <span class="tok-attr">href</span>=<span class="tok-string">"#stories"</span><span class="tok-tag">&gt;</span>
    Explore the stories <span class="tok-tag">&lt;span</span> <span class="tok-attr">aria-hidden</span>=<span class="tok-string">"true"</span><span class="tok-tag">&gt;</span>↗<span class="tok-tag">&lt;/span&gt;</span>
  <span class="tok-tag">&lt;/a&gt;</span>
<span class="tok-tag">&lt;/main&gt;</span></code></pre></div>
<p><strong>Explain:</strong> the <code class="ag-inline">h1</code> is the primary message, the paragraph gives context, and the anchor is a real link. Classes let us style the roles without using HTML elements only because of how they look.</p>
</section>
<section class="ag-section">
<h3>Step 2A — Create a type scale with CSS custom properties</h3>
<p>Show students the hard-to-maintain version first: different font sizes scattered across selectors. Then replace the repeated values with named tokens. The names communicate intent and make global changes easier.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">styles.css</span></div><pre class="ag-code"><code><span class="tok-comment">/* First, define a small and intentional type system. */</span>
<span class="tok-selector">:root</span> <span class="tok-punct">{</span>
  <span class="tok-prop">--type-small</span><span class="tok-punct">:</span> <span class="tok-num">0.8rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">--type-body</span><span class="tok-punct">:</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">--type-subhead</span><span class="tok-punct">:</span> <span class="tok-num">1.5rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">--type-display</span><span class="tok-punct">:</span> <span class="tok-num">3.5rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">--leading-body</span><span class="tok-punct">:</span> <span class="tok-num">1.65</span><span class="tok-punct">;</span>
  <span class="tok-prop">--leading-display</span><span class="tok-punct">:</span> <span class="tok-num">0.98</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">body</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">var(--type-body)</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-value">var(--leading-body)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.eyebrow</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">var(--type-small)</span><span class="tok-punct">;</span>
  <span class="tok-prop">text-transform</span><span class="tok-punct">:</span> <span class="tok-value">uppercase</span><span class="tok-punct">;</span>
  <span class="tok-prop">letter-spacing</span><span class="tok-punct">:</span> <span class="tok-num">0.12em</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.headline</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">var(--type-display)</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-value">var(--leading-display)</span><span class="tok-punct">;</span>
  <span class="tok-prop">letter-spacing</span><span class="tok-punct">:</span> <span class="tok-num">-0.045em</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<p><strong>Demonstration:</strong> change <code class="ag-inline">--type-display</code> from <code class="ag-inline">3.5rem</code> to <code class="ag-inline">4rem</code>. Then change it back. Point out that the selector remains the same while the token controls the visual system.</p>
<div class="ag-callout amber"><strong>Compare:</strong> a token is a named design decision. <code class="ag-inline">--type-display</code> describes the role; <code class="ag-inline">3.5rem</code> is the current value. Students should avoid creating a separate token for every tiny difference.</div>
</section>
<section class="ag-section">
<h3>Step 3A — Make the headline fluid with clamp()</h3>
<p>First show the fixed-size version, then replace it with the fluid version. Resize the browser slowly so students can observe the difference.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">fixed-size.css</span></div><pre class="ag-code"><code><span class="tok-comment">/* This can look oversized on a phone. */</span>
<span class="tok-selector">.headline</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">3.5rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">fluid-size.css</span></div><pre class="ag-code"><code><span class="tok-selector">.headline</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">clamp(2.2rem, 6vw, 5.5rem)</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">0.98</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<ul>
<li><strong>2.2rem:</strong> minimum size; the headline should not shrink below this.</li>
<li><strong>6vw:</strong> preferred fluid size, based on viewport width.</li>
<li><strong>5.5rem:</strong> maximum size; the headline stops growing beyond this cap.</li>
</ul>
<p>Ask students to predict what will happen before resizing. Then have them test a narrow phone-width viewport, a tablet-width viewport, and a wide desktop viewport.</p>
</section>
<section class="ag-section">
<h3>Step 4A — Control the reading measure and line length</h3>
<p>Long lines are tiring to read. The <code class="ag-inline">ch</code> unit roughly tracks the width of the “0” character in the current font, making it useful for setting a text column.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">reading-measure.css</span></div><pre class="ag-code"><code><span class="tok-selector">.intro</span> <span class="tok-punct">{</span>
  <span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">62ch</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">var(--type-body)</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">1.7</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.poster</span> <span class="tok-punct">{</span>
  <span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-value">clamp(1.25rem, 5vw, 4rem)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<p><strong>Before/after exercise:</strong> temporarily remove <code class="ag-inline">max-width</code> and stretch the paragraph across the full screen. Restore <code class="ag-inline">62ch</code>. Ask which version feels easier to scan and why.</p>
</section>
<section class="ag-section">
<h3>Step 5A — Add motion to a meaningful interaction</h3>
<p>Start with a static link. Then add a small movement that signals interactivity. Avoid large, constant, or distracting motion; the effect should support the action rather than compete with the headline.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">motion.css</span></div><pre class="ag-code"><code><span class="tok-selector">.action</span> <span class="tok-punct">{</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">inline-flex</span><span class="tok-punct">;</span>
  <span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">center</span><span class="tok-punct">;</span>
  <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">0.5rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">transition</span><span class="tok-punct">:</span> <span class="tok-value">transform 180ms ease, color 180ms ease</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.action:hover</span> <span class="tok-punct">{</span>
  <span class="tok-prop">transform</span><span class="tok-punct">:</span> <span class="tok-value">translateY(-3px)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.action:focus-visible</span> <span class="tok-punct">{</span>
  <span class="tok-prop">outline</span><span class="tok-punct">:</span> <span class="tok-num">3px</span> <span class="tok-value">solid</span> <span class="tok-value">currentColor</span><span class="tok-punct">;</span>
  <span class="tok-prop">outline-offset</span><span class="tok-punct">:</span> <span class="tok-num">4px</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<p>Test with a mouse, then press <kbd>Tab</kbd> to reach the link. Explain that hover feedback is not enough: keyboard users also need a visible focus state.</p>
<p><strong>Try three values:</strong> change <code class="ag-inline">180ms</code> to <code class="ag-inline">80ms</code>, then <code class="ag-inline">400ms</code>. Ask which feels immediate, which feels sluggish, and whether the transition is noticeable without being distracting.</p>
</section>
<section class="ag-section">
<h3>Step 6A — Respect reduced-motion preferences</h3>
<p>Motion should not be required to understand the content. Add a reduced-motion rule so people who have requested less animation receive a calmer experience.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">reduced-motion.css</span></div><pre class="ag-code"><code><span class="tok-comment">/* Keep the interaction understandable without movement. */</span>
<span class="tok-selector">@media (prefers-reduced-motion: reduce)</span> <span class="tok-punct">{</span>
  <span class="tok-selector">*, *::before, *::after</span> <span class="tok-punct">{</span>
    <span class="tok-prop">scroll-behavior</span><span class="tok-punct">:</span> <span class="tok-value">auto</span><span class="tok-punct">;</span>
    <span class="tok-prop">animation-duration</span><span class="tok-punct">:</span> <span class="tok-num">0.01ms</span> <span class="tok-value">!important</span><span class="tok-punct">;</span>
    <span class="tok-prop">animation-iteration-count</span><span class="tok-punct">:</span> <span class="tok-num">1</span> <span class="tok-value">!important</span><span class="tok-punct">;</span>
    <span class="tok-prop">transition-duration</span><span class="tok-punct">:</span> <span class="tok-num">0.01ms</span> <span class="tok-value">!important</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
<span class="tok-punct">}</span></code></pre></div>
<p><strong>Discuss:</strong> the headline, paragraph, and action still communicate the same information if movement is removed. Motion is an enhancement, not a substitute for structure or content.</p>
</section>
<section class="ag-section">
<h3>Step 7A — Put the pieces together and inspect the result</h3>
<p>Use this compact combined example to review the relationships between the tokens, fluid type, reading measure, and motion. Students do not need to memorize every value; they should learn to recognize what each rule controls.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">composition.css</span></div><pre class="ag-code"><code><span class="tok-selector">:root</span> <span class="tok-punct">{</span>
  <span class="tok-prop">--ink</span><span class="tok-punct">:</span> <span class="tok-value">#172033</span><span class="tok-punct">;</span>
  <span class="tok-prop">--accent</span><span class="tok-punct">:</span> <span class="tok-value">#b8f34b</span><span class="tok-punct">;</span>
  <span class="tok-prop">--space</span><span class="tok-punct">:</span> <span class="tok-num">1.25rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">body</span> <span class="tok-punct">{</span>
  <span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
  <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">var(--ink)</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-family</span><span class="tok-punct">:</span> <span class="tok-value">Arial, sans-serif</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.poster</span> <span class="tok-punct">{</span>
  <span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-value">clamp(1.25rem, 5vw, 4rem)</span><span class="tok-punct">;</span>
  <span class="tok-prop">min-height</span><span class="tok-punct">:</span> <span class="tok-num">70vh</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.headline</span> <span class="tok-punct">{</span>
  <span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">12ch</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">clamp(2.2rem, 6vw, 5.5rem)</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">0.98</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.intro</span> <span class="tok-punct">{</span>
  <span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">62ch</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">1.7</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.action</span> <span class="tok-punct">{</span>
  <span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">var(--accent)</span><span class="tok-punct">;</span>
  <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">var(--ink)</span><span class="tok-punct">;</span>
  <span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">0.8rem</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">transition</span><span class="tok-punct">:</span> <span class="tok-value">transform 180ms ease</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.action:hover</span> <span class="tok-punct">{</span>
  <span class="tok-prop">transform</span><span class="tok-punct">:</span> <span class="tok-value">translateY(-3px)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<h4>Live demonstration prompts</h4>
<ol>
<li>Change the accent token. Which parts of the composition update?</li>
<li>Increase the headline’s minimum size. At what viewport does the layout begin to feel crowded?</li>
<li>Remove the intro’s <code class="ag-inline">max-width</code>. Compare reading comfort.</li>
<li>Temporarily remove the transition. Does the link remain understandable and usable?</li>
<li>Tab through the page. Can you always see where keyboard focus is?</li>
<li>Turn on a reduced-motion preference and confirm the experience still makes sense.</li>
</ol>
</section>
<section class="ag-section">
<h3>Instructor quick reference — What each decision does</h3>
<div class="ag-table-wrap">MADTINKERBLOCKTOKEN0END</div>
<div class="ag-callout amber"><strong>Instructor reminder:</strong> type hierarchy, line length, and motion should be judged in the actual composition. A value that looks good in isolation may fail at a different screen size or when the full headline and paragraph are present. Keep asking students to predict, test, compare, and explain.</div>
</section>
<div class="ag-callout amber"><strong>Teaching note:</strong> keep the focus on design decisions rather than decorative effects. Students should be able to explain what each typographic choice and motion cue contributes.</div>
</section>
<footer class="ag-footer"><p><strong>AMDE 355 · Advanced Web Design</strong> — Week 06</p><p>Typography, Motion &amp; Composition · Build hierarchy, refine readability, and use motion with purpose.</p></footer>
</div>
