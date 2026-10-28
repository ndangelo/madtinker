---
title: AMDE 355 - Make the Layout Do Something (Week 2)
slug: amde-355-make-the-layout-do-something-week-2
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68189
source_url: https://nuggetofjoy.com/amde-355-make-the-layout-do-something-week-2/
author: admin
categories:
- AMDE 355 ADVANCED WEB DESIGN
tags: []
migration:
  format: hybrid-markdown
  original_html: original-html/68189.html
  post_css: styles/posts/68189.css
  needs_review: true
---

<div class="amde-grid-lesson">

<section class="ag-hero">
<p class="ag-eyebrow">AMDE 355 · Advanced Web Design · Week 02</p>
<h2>Make the Layout<br/>Do Something.</h2>
<p>Today we move past “put the boxes in a row.” We’ll revisit CSS layout tools, compare Flexbox and Grid, and use spacing, alignment, and hierarchy to make a page feel intentional.</p>
<div class="ag-chips"><span class="ag-chip">CSS layout</span><span class="ag-chip">Flexbox</span><span class="ag-chip">Grid</span><span class="ag-chip">Responsive thinking</span></div>
</section>
<section class="ag-section">
<h3>01 / The challenge</h3>
<p>A layout can be technically correct and still feel flat. Advanced web design means choosing a layout system because it supports the content—not because it is the first CSS trick you remember.</p>
<div class="ag-callout"><strong>Studio question:</strong> What should the viewer notice first, second, and third? Your layout should help answer that question.</div>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">A</span><h4>Flexbox</h4><p>Best when you are arranging items along one main axis: a navigation bar, toolbar, button group, or a row of controls.</p></article>
<article class="ag-card"><span class="ag-number">B</span><h4>Grid</h4><p>Best when rows and columns work together: editorial layouts, galleries, card systems, and larger page structures.</p></article>
<article class="ag-card"><span class="ag-number">C</span><h4>Spacing + hierarchy</h4><p>Use gap, padding, width, and alignment to establish relationships and create rhythm—not just to fill empty space.</p></article>
</div>
</section>
<section class="ag-section">
<h3>02 / Quick refresher: Flexbox</h3>
<p>Flexbox distributes items inside a container. Try changing <code class="ag-inline">justify-content</code>, <code class="ag-inline">align-items</code>, and <code class="ag-inline">gap</code> to see how the relationship changes.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">flex-layout.css</span></div>
<div class="ag-code"><span class="tok-comment">/* One-dimensional layout: align items in a row */</span>
<span class="tok-selector">.toolbar</span> <span class="tok-punct">{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span>
<span class="tok-prop">justify-content</span><span class="tok-punct">:</span> <span class="tok-value">space-between</span><span class="tok-punct">;</span>
<span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">center</span><span class="tok-punct">;</span>
<span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></div>
</div>
<div class="ag-callout blue"><strong>Try it:</strong> Change <code class="ag-inline">space-between</code> to <code class="ag-inline">center</code>, then <code class="ag-inline">flex-start</code>. Notice how the composition changes without changing the HTML.</div>
</section>
<section class="ag-section">
<h3>03 / Quick refresher: CSS Grid</h3>
<p>Grid lets you define a two-dimensional structure. This example creates three equal columns that collapse naturally when the container gets narrower.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">gallery-grid.css</span></div>
<div class="ag-code"><span class="tok-selector">.gallery</span> <span class="tok-punct">{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">grid</span><span class="tok-punct">;</span>
<span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span>
<span class="tok-value">repeat</span><span class="tok-punct">(</span><span class="tok-num">3</span><span class="tok-punct">,</span> <span class="tok-value">minmax</span><span class="tok-punct">(</span><span class="tok-num">0</span><span class="tok-punct">,</span> <span class="tok-num">1fr</span><span class="tok-punct">));</span>
<span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1.25rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-comment">/* At smaller widths, move to two columns */</span>
<span class="tok-key">@media</span> <span class="tok-punct">(</span><span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">700px</span><span class="tok-punct">)</span> <span class="tok-punct">{</span>
<span class="tok-selector">.gallery</span> <span class="tok-punct">{</span>
<span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span>
<span class="tok-value">repeat</span><span class="tok-punct">(</span><span class="tok-num">2</span><span class="tok-punct">,</span> <span class="tok-num">1fr</span><span class="tok-punct">);</span>
<span class="tok-punct">}</span>
<span class="tok-punct">}</span></div>
</div>
</section>
<section class="ag-section">
<h3>04 / Layout is also art direction</h3>
<div class="ag-grid">
<article class="ag-card"><h4>Scale</h4><p>Make one element clearly dominant. Equal-sized everything can make the page feel monotonous.</p></article>
<article class="ag-card"><h4>Rhythm</h4><p>Repeat a spacing system, then break it intentionally when you need emphasis or a pause.</p></article>
<article class="ag-card"><h4>Negative space</h4><p>Empty space is an active design element. It can group content, slow the viewer down, or make a focal point feel important.</p></article>
<article class="ag-card"><h4>Constraints</h4><p>Use max-widths and consistent gaps to keep content readable across screen sizes.</p></article>
</div>
</section>
<section class="ag-section">
<h3>05 / Instructor demo: redesign the same content three ways</h3>
<ol class="ag-steps">
<li><strong>Version 1 — Utility:</strong> Use a straightforward, balanced grid. Prioritize clarity and scanability.</li>
<li><strong>Version 2 — Editorial:</strong> Create one oversized feature card, supporting details, and a deliberate asymmetry.</li>
<li><strong>Version 3 — Experimental:</strong> Break the regular rhythm with scale, alignment, or a controlled overlap—but keep the content legible.</li>
</ol>
<p>Keep the content constant so you can see how layout alone changes the tone and reading order.</p>
</section>
<section class="ag-section">
<h3>06 / In-class studio: Layout Remix</h3>
<p>Build a responsive layout for a fictional exhibition, music event, design archive, or personal project. Start with a small set of content: title, short description, one featured item, and at least four supporting items.</p>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">1</span><h4>Build the structure</h4><p>Use semantic HTML and choose Flexbox or Grid for a clear reason.</p></article>
<article class="ag-card"><span class="ag-number">2</span><h4>Establish hierarchy</h4><p>Use type scale, spacing, and one dominant visual element to establish the viewing order.</p></article>
<article class="ag-card"><span class="ag-number">3</span><h4>Make it responsive</h4><p>Test at desktop and mobile widths. Adjust the layout instead of simply shrinking everything.</p></article>
<article class="ag-card"><span class="ag-number">4</span><h4>Make a second direction</h4><p>Duplicate your design and create a noticeably different composition using the same content.</p></article>
</div>
</section>
<section class="ag-section">
<h3>07 / What to submit</h3>
<ul class="ag-checklist">
<li>A working CodePen with semantic HTML and organized CSS.</li>
<li>At least one Flexbox layout and one Grid layout.</li>
<li>A responsive adjustment for a smaller viewport.</li>
<li>Two distinct layout directions using the same content.</li>
<li>Two screenshots or a short note comparing the designs: what changes in hierarchy, mood, and reading order?</li>
</ul>
<div class="ag-callout"><strong>Success criteria:</strong> The layout has a clear focal point, spacing feels intentional, the content remains readable, and the mobile version feels designed—not merely compressed.</div>
</section>
<section class="ag-section" id="instructor-layout-code">
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;">
<p style="margin:0 0 8px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h3>Instructor Layout Code — Step by Step</h3>
<p>This is a live-coding demonstration. Build the page in stages, preview after each step, and ask students to predict what will change before editing the CSS.</p>
</div>
<h4>Demo goal</h4>
<p>Use one small exhibition listing to show how the same content can feel orderly, editorial, or experimental through layout alone. The starter uses Grid for the main page and Flexbox for the top bar.</p>
<h4>Step 1 — Create the HTML structure</h4>
<p>Start with semantic content before styling. Explain that the class names are hooks for CSS and that the content order should still make sense without visual styling.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">index.html · instructor demo</span></div>
<div class="ag-code"><span class="tok-tag">&lt;header</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"site-header"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"brand"</span><span class="tok-tag">&gt;</span>FIELD NOTES<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;nav</span> <span class="tok-attr">aria-label</span><span class="tok-punct">=</span><span class="tok-string">"Main navigation"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;a</span> <span class="tok-attr">href</span><span class="tok-punct">=</span><span class="tok-string">"#featured"</span><span class="tok-tag">&gt;</span>Featured<span class="tok-tag">&lt;/a&gt;</span>
<span class="tok-tag">&lt;a</span> <span class="tok-attr">href</span><span class="tok-punct">=</span><span class="tok-string">"#archive"</span><span class="tok-tag">&gt;</span>Archive<span class="tok-tag">&lt;/a&gt;</span>
<span class="tok-tag">&lt;/nav&gt;</span>
<span class="tok-tag">&lt;/header&gt;</span>
<span class="tok-tag">&lt;main</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"page-layout"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;section</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"feature"</span> <span class="tok-attr">id</span><span class="tok-punct">=</span><span class="tok-string">"featured"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"eyebrow"</span><span class="tok-tag">&gt;</span>EXHIBITION 01 / OCTOBER<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;h1&gt;</span>Unstable Ground<span class="tok-tag">&lt;/h1&gt;</span>
<span class="tok-tag">&lt;p&gt;</span>Works about movement, memory, and place.<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;/section&gt;</span>
<span class="tok-tag">&lt;section</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"archive"</span> <span class="tok-attr">id</span><span class="tok-punct">=</span><span class="tok-string">"archive"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"item item-one"</span><span class="tok-tag">&gt;&lt;h2&gt;</span>Afterimage<span class="tok-tag">&lt;/h2&gt;&lt;p&gt;</span>Photography · 2026<span class="tok-tag">&lt;/p&gt;&lt;/article&gt;</span>
<span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"item item-two"</span><span class="tok-tag">&gt;&lt;h2&gt;</span>Soft Machines<span class="tok-tag">&lt;/h2&gt;&lt;p&gt;</span>Interactive · 2025<span class="tok-tag">&lt;/p&gt;&lt;/article&gt;</span>
<span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"item item-three"</span><span class="tok-tag">&gt;&lt;h2&gt;</span>Common Weather<span class="tok-tag">&lt;/h2&gt;&lt;p&gt;</span>Moving image · 2025<span class="tok-tag">&lt;/p&gt;&lt;/article&gt;</span>
<span class="tok-tag">&lt;/section&gt;</span>
<span class="tok-tag">&lt;/main&gt;</span></div>
</div>
<h4>Step 2 — Add the base styles and Flexbox header</h4>
<p>Normalize the box model, establish the page background and typography, then use Flexbox to align the brand and navigation. Ask: “What happens if we remove <code class="ag-inline">display: flex</code>?”</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">style.css · base + flex</span></div>
<div class="ag-code"><span class="tok-selector">* </span><span class="tok-punct">{</span>
<span class="tok-prop">box-sizing</span><span class="tok-punct">:</span> <span class="tok-value">border-box</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">body</span> <span class="tok-punct">{</span>
<span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
<span class="tok-prop">font-family</span><span class="tok-punct">:</span> <span class="tok-value">Arial, sans-serif</span><span class="tok-punct">;</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">#f2f0e9</span><span class="tok-punct">;</span>
<span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">#182033</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.site-header</span> <span class="tok-punct">{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span>
<span class="tok-prop">justify-content</span><span class="tok-punct">:</span> <span class="tok-value">space-between</span><span class="tok-punct">;</span>
<span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">center</span><span class="tok-punct">;</span>
<span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">1.25rem 5vw</span><span class="tok-punct">;</span>
<span class="tok-prop">border-bottom</span><span class="tok-punct">:</span> <span class="tok-num">1px</span> <span class="tok-value">solid #c9c7bf</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.brand</span> <span class="tok-punct">{</span> <span class="tok-prop">font-weight</span><span class="tok-punct">:</span> <span class="tok-num">900</span><span class="tok-punct">;</span> <span class="tok-prop">letter-spacing</span><span class="tok-punct">:</span> <span class="tok-num">.12em</span><span class="tok-punct">;</span> <span class="tok-punct">}</span>
<span class="tok-selector">nav</span> <span class="tok-punct">{</span> <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span> <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1.25rem</span><span class="tok-punct">;</span> <span class="tok-punct">}</span>
<span class="tok-selector">a</span> <span class="tok-punct">{</span> <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">inherit</span><span class="tok-punct">;</span> <span class="tok-prop">text-decoration</span><span class="tok-punct">:</span> <span class="tok-value">none</span><span class="tok-punct">;</span> <span class="tok-punct">}</span></div>
</div>
<h4>Step 3 — Use Grid for the main composition</h4>
<p>The feature gets more room than the archive. This is the first clear hierarchy decision: the page is telling viewers what to look at first.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">style.css · grid composition</span></div>
<div class="ag-code"><span class="tok-selector">.page-layout</span> <span class="tok-punct">{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">grid</span><span class="tok-punct">;</span>
<span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-num">1.2fr .8fr</span><span class="tok-punct">;</span>
<span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1.5rem</span><span class="tok-punct">;</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">5vw</span><span class="tok-punct">;</span>
<span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">start</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.feature</span> <span class="tok-punct">{</span>
<span class="tok-prop">min-height</span><span class="tok-punct">:</span> <span class="tok-num">440px</span><span class="tok-punct">;</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">clamp(1.5rem, 4vw, 4rem)</span><span class="tok-punct">;</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">#b8f34b</span><span class="tok-punct">;</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span>
<span class="tok-prop">flex-direction</span><span class="tok-punct">:</span> <span class="tok-value">column</span><span class="tok-punct">;</span>
<span class="tok-prop">justify-content</span><span class="tok-punct">:</span> <span class="tok-value">end</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.feature h1</span> <span class="tok-punct">{</span>
<span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">clamp(2.5rem, 7vw, 6rem)</span><span class="tok-punct">;</span>
<span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">.95</span><span class="tok-punct">;</span>
<span class="tok-prop">letter-spacing</span><span class="tok-punct">:</span> <span class="tok-num">-.06em</span><span class="tok-punct">;</span>
<span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-num">.25em 0</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.archive</span> <span class="tok-punct">{</span> <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">grid</span><span class="tok-punct">;</span> <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span> <span class="tok-punct">}</span>
<span class="tok-selector">.item</span> <span class="tok-punct">{</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">1.25rem</span><span class="tok-punct">;</span>
<span class="tok-prop">border</span><span class="tok-punct">:</span> <span class="tok-num">1px</span> <span class="tok-value">solid #182033</span><span class="tok-punct">;</span>
<span class="tok-prop">min-height</span><span class="tok-punct">:</span> <span class="tok-num">130px</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></div>
</div>
<h4>Step 4 — Make the layout responsive</h4>
<p>Show the page at a narrow viewport before adding the media query. Ask students what feels cramped, then change the structure rather than simply reducing every font size.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">style.css · responsive adjustment</span></div>
<div class="ag-code"><span class="tok-key">@media</span> <span class="tok-punct">(</span><span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">760px</span><span class="tok-punct">)</span> <span class="tok-punct">{</span>
<span class="tok-selector">.site-header</span> <span class="tok-punct">{</span>
<span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">flex-start</span><span class="tok-punct">;</span>
<span class="tok-prop">flex-direction</span><span class="tok-punct">:</span> <span class="tok-value">column</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.page-layout</span> <span class="tok-punct">{</span>
<span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-num">1fr</span><span class="tok-punct">;</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.feature</span> <span class="tok-punct">{</span> <span class="tok-prop">min-height</span><span class="tok-punct">:</span> <span class="tok-num">340px</span><span class="tok-punct">;</span> <span class="tok-punct">}</span>
<span class="tok-punct">}</span></div>
</div>
<h4>Step 5 — Make three quick art-direction variations</h4>
<ol class="ag-steps">
<li><strong>Utility version:</strong> Change <code class="ag-inline">grid-template-columns: 1.2fr .8fr</code> to <code class="ag-inline">1fr 1fr</code>. Reduce the feature height and use a smaller heading. Discuss clarity and balance.</li>
<li><strong>Editorial version:</strong> Keep the uneven columns, increase the headline scale, and add more padding around the feature. Discuss emphasis and negative space.</li>
<li><strong>Experimental version:</strong> Let the feature span the full grid width by adding <code class="ag-inline">grid-column: 1 / -1</code>, then rearrange the archive cards. Discuss how breaking the pattern changes reading order.</li>
</ol>
<h4>Step 6 — Test and discuss</h4>
<ul class="ag-checklist">
<li>Preview at desktop, tablet, and mobile widths.</li>
<li>Use browser dev tools to change the viewport and inspect the grid.</li>
<li>Ask students to identify the focal point and describe the visual reading order.</li>
<li>Ask which layout best fits the content and why. There is no single correct answer; choices should be intentional.</li>
</ul>
<div class="ag-callout blue"><strong>Instructor note:</strong> This is a teaching scaffold, not a required student solution. Encourage students to experiment with their own content, proportions, and visual language rather than copying the exact composition.</div>
</section>
<section class="ag-section">
<h3>08 / Before you publish</h3>
<ul class="ag-checklist">
<li>Check that text and cards do not overflow the viewport.</li>
<li>Use <code class="ag-inline">gap</code> for consistent space between layout items.</li>
<li>Confirm the layout still makes sense at a narrow width.</li>
<li>Keep CSS selectors readable and avoid unnecessary repeated rules.</li>
<li>Make sure colors and text contrast are comfortable to read.</li>
</ul>
</section>
<p class="ag-footer">AMDE 355 · Advanced Web Design · Week 02 · Layout is not decoration added at the end. It is part of how the content communicates.</p>
</div>
