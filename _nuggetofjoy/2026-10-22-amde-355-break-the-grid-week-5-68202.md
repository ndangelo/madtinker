---
layout: teaching-post
title: AMDE 355 - Break the Grid (Week 5)
slug: amde-355-break-the-grid-week-5
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68202
source_url: https://nuggetofjoy.com/amde-355-break-the-grid-week-5/
author: admin
categories:
- AMDE 355 ADVANCED WEB DESIGN
tags: []
---

{::nomarkdown}
<div class="amde-grid-lesson">

<section class="ag-hero">
<p class="ag-eyebrow">AMDE 355 · Advanced Web Design · Week 05</p>
<h2>Project 1: Break the Grid.</h2>
<p>Now put your visual research to work. In this project, you’ll create an expressive, responsive web composition that deliberately challenges a conventional grid—while keeping the content legible, the hierarchy intentional, and the experience usable.</p>
<div class="ag-chips"><span class="ag-chip">Project 01</span><span class="ag-chip">Art direction</span><span class="ag-chip">CSS Grid</span><span class="ag-chip">Responsive composition</span></div>
</section>
<section class="ag-section">
<h2>01 / The challenge — break the grid with purpose</h2>
<p>A grid is a tool for organizing relationships. Breaking it does not mean placing elements randomly. It means establishing a visual structure, then disrupting selected parts to create tension, emphasis, rhythm, or surprise.</p>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">01</span><h3>Start with structure</h3><p>Build a clear underlying layout with a meaningful reading order and a strong focal point.</p></article>
<article class="ag-card"><span class="ag-number">02</span><h3>Choose what to disrupt</h3><p>Use scale, alignment, overlap, asymmetry, or an unexpected span to make a deliberate visual move.</p></article>
<article class="ag-card"><span class="ag-number">03</span><h3>Keep it usable</h3><p>Maintain readable text, coherent content order, clear links, and a layout that adapts to smaller screens.</p></article>
</div>
<div class="ag-callout"><strong>Design question:</strong> What does breaking the grid communicate in your project? Every unusual placement should support the content, tone, or visual hierarchy.</div>
</section>
<section class="ag-section">
<h2>02 / Three ways to challenge a grid</h2>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">A</span><h3>Scale</h3><p>Make one headline, image, or detail much larger than the surrounding elements. Use scale to create a clear focal point.</p></article>
<article class="ag-card"><span class="ag-number">B</span><h3>Alignment</h3><p>Offset selected elements, shift the start of a column, or let one item cross the established rhythm.</p></article>
<article class="ag-card"><span class="ag-number">C</span><h3>Overlap &amp; span</h3><p>Allow a featured item to span multiple tracks or overlap another area—without obscuring essential information.</p></article>
</div>
<div class="ag-callout blue"><strong>Remember:</strong> contrast works best when there is something consistent to contrast against. Establish a pattern first, then decide where to interrupt it.</div>
</section>
<section class="ag-section">
<h2>03 / Build a grid you can deliberately break</h2>
<p>Start with a repeatable CSS Grid. Then use a class such as <code class="ag-inline">.featured</code> to give one item a different relationship to the grid.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">layout.css · establish the grid</span></div>
<div class="ag-code"><span class="tok-selector">.project-grid</span> <span class="tok-punct">{{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">grid</span><span class="tok-punct">;</span>
<span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">repeat(12, minmax(0, 1fr))</span><span class="tok-punct">;</span>
<span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-value">1rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span>
<span class="tok-selector">.project</span> <span class="tok-punct">{{</span>
<span class="tok-prop">grid-column</span><span class="tok-punct">:</span> <span class="tok-value">span 4</span><span class="tok-punct">;</span>
<span class="tok-prop">min-width</span><span class="tok-punct">:</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">1.25rem</span><span class="tok-punct">;</span>
<span class="tok-prop">border</span><span class="tok-punct">:</span> <span class="tok-num">1px</span> <span class="tok-value">solid #182033</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span>
<span class="tok-selector">.project.featured</span> <span class="tok-punct">{{</span>
<span class="tok-prop">grid-column</span><span class="tok-punct">:</span> <span class="tok-value">span 8</span><span class="tok-punct">;</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">#b8f34b</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span></div>
</div>
<p>The 12-column grid gives you a flexible underlying structure. Regular items span four columns; the featured item spans eight. Try changing the spans before adding any overlap.</p>
</section>
<section class="ag-section">
<h2>04 / Add an intentional disruption</h2>
<p>Once the structure is working, introduce one strong move. For example, let the featured item extend across more of the grid, or offset a selected card. Make sure the disruption has a clear purpose.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">layout.css · controlled asymmetry</span></div>
<div class="ag-code"><span class="tok-selector">.project:nth-child(3)</span> <span class="tok-punct">{{</span>
<span class="tok-prop">grid-column</span><span class="tok-punct">:</span> <span class="tok-value">2 / span 5</span><span class="tok-punct">;</span>
<span class="tok-prop">transform</span><span class="tok-punct">:</span> <span class="tok-value">translateY(2rem)</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span>
<span class="tok-selector">.project.featured h2</span> <span class="tok-punct">{{</span>
<span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">clamp(2rem, 5vw, 5rem)</span><span class="tok-punct">;</span>
<span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">.95</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span></div>
</div>
<div class="ag-callout amber"><strong>Watch out:</strong> transforms change an element’s visual position without changing the space it occupies in normal layout. Check that the offset does not cause collisions or misleading reading order.</div>
</section>
<section class="ag-section">
<h2>05 / Responsive behavior is part of the design</h2>
<p>A desktop composition may rely on asymmetry and overlap. At a narrow viewport, the same choices may become confusing. Make a deliberate responsive version rather than simply shrinking the desktop layout.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">layout.css · small-screen version</span></div>
<div class="ag-code"><span class="tok-key">@media</span> <span class="tok-punct">(</span><span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">700px</span><span class="tok-punct">)</span> <span class="tok-punct">{{</span>
<span class="tok-selector">.project-grid</span> <span class="tok-punct">{{</span>
<span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-num">1fr</span><span class="tok-punct">;</span>
<span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">.85rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span>
<span class="tok-selector">.project, .project.featured, .project:nth-child(3)</span> <span class="tok-punct">{{</span>
<span class="tok-prop">grid-column</span><span class="tok-punct">:</span> <span class="tok-num">1 / -1</span><span class="tok-punct">;</span>
<span class="tok-prop">transform</span><span class="tok-punct">:</span> <span class="tok-value">none</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span>
<span class="tok-punct">}}</span></div>
</div>
<div class="ag-callout blue"><strong>Test:</strong> Check the desktop, tablet, and mobile versions. If an overlap or offset stops helping the composition, remove it or replace it with a different small-screen decision.</div>
</section>
<section class="ag-section">
<h2>06 / Project 1 — Break the Grid</h2>
<p>Design a single-page web composition for an exhibition, artist, musician, publication, event, or self-initiated concept. Your page should use a clear underlying structure and then challenge it with deliberate visual decisions.</p>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">01</span><h3>Choose the content</h3><p>Define the subject and audience. Gather a concise set of text, images, labels, and supporting details.</p></article>
<article class="ag-card"><span class="ag-number">02</span><h3>Establish the system</h3><p>Define the grid, type hierarchy, spacing, color, and image behavior before introducing disruptions.</p></article>
<article class="ag-card"><span class="ag-number">03</span><h3>Break with intent</h3><p>Use at least two techniques—such as scale, asymmetry, offset, or spanning—to create a clear focal point.</p></article>
<article class="ag-card"><span class="ag-number">04</span><h3>Refine and test</h3><p>Test responsive behavior, fix collisions and overflow, and confirm that the page remains legible and navigable.</p></article>
</div>
<h3>Project requirements</h3>
<ul class="ag-checklist">
<li>One complete single-page web composition built with semantic HTML and CSS.</li>
<li>CSS Grid used as a deliberate structural system.</li>
<li>At least two intentional grid-breaking or asymmetrical decisions.</li>
<li>A considered typographic hierarchy and consistent visual direction.</li>
<li>A responsive layout that works at desktop, tablet, and mobile widths.</li>
<li>A short rationale explaining what you disrupted and why.</li>
</ul>
<div class="ag-callout"><strong>Success criteria:</strong> the design has a strong focal point, the unusual layout choices feel intentional, the content remains understandable, and the responsive version is designed rather than compressed.</div>
</section>
<section class="ag-section">
<h2>07 / Critique prompts</h2>
<ul class="ag-checklist">
<li>What is the underlying grid, and where has the designer chosen to break it?</li>
<li>Which disruption creates the strongest visual effect? Does it support the content?</li>
<li>What do typography, scale, and negative space contribute to the hierarchy?</li>
<li>Where does the layout feel intentional, and where might it feel accidental?</li>
<li>What changes between desktop and mobile, and what stays consistent?</li>
</ul>
</section>
<section class="ag-section" id="instructor-layout-code">
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;">
<p style="margin:0 0 8px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h2 style="margin:0 0 8px;">Instructor Layout Code — Step by Step</h2>
<p style="margin:0;">Live-code a small exhibition page. First build a predictable grid, then introduce a featured item, asymmetry, and a responsive reset. Ask students to describe the effect of each change before applying it.</p>
</div>
<h3>Step 1 — Add the HTML</h3>
<p>Use a small amount of content so students can see how layout changes affect hierarchy.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">index.html · instructor demo</span></div>
<div class="ag-code"><span class="tok-tag">&lt;main</span> <span class="tok-attr">class</span>=<span class="tok-string">"page"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;header</span> <span class="tok-attr">class</span>=<span class="tok-string">"page-intro"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"eyebrow"</span><span class="tok-tag">&gt;</span>Independent Exhibition / 2026<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;h1&gt;</span>Unstable Ground<span class="tok-tag">&lt;/h1&gt;</span>
<span class="tok-tag">&lt;p&gt;</span>Artists working between memory, place, and transformation.<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;/header&gt;</span>
<span class="tok-tag">&lt;section</span> <span class="tok-attr">class</span>=<span class="tok-string">"work-grid"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"work featured"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;p&gt;</span>01 / FEATURED<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;h2&gt;</span>After the Light<span class="tok-tag">&lt;/h2&gt;</span>
<span class="tok-tag">&lt;p&gt;</span>Photography, gesture, and memory.<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;/article&gt;</span>
<span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"work"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;p&gt;</span>02 / VIDEO<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;h2&gt;</span>Slow Signal<span class="tok-tag">&lt;/h2&gt;</span>
<span class="tok-tag">&lt;/article&gt;</span>
<span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"work"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;p&gt;</span>03 / PRINT<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;h2&gt;</span>Field Notes<span class="tok-tag">&lt;/h2&gt;</span>
<span class="tok-tag">&lt;/article&gt;</span>
<span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"work"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;p&gt;</span>04 / INSTALLATION<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;h2&gt;</span>Temporary Forms<span class="tok-tag">&lt;/h2&gt;</span>
<span class="tok-tag">&lt;/article&gt;</span>
<span class="tok-tag">&lt;/section&gt;</span>
<span class="tok-tag">&lt;/main&gt;</span></div>
</div>
<h3>Step 2 — Establish a regular grid</h3>
<p>Before breaking anything, make the page feel orderly. This gives the class a baseline for comparison.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">style.css · regular grid</span></div>
<div class="ag-code"><span class="tok-selector">*</span> <span class="tok-punct">{{</span> <span class="tok-prop">box-sizing</span><span class="tok-punct">:</span> <span class="tok-value">border-box</span><span class="tok-punct">;</span> <span class="tok-punct">}}</span>
<span class="tok-selector">body</span> <span class="tok-punct">{{</span>
<span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">#f2f0e9</span><span class="tok-punct">;</span>
<span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">#182033</span><span class="tok-punct">;</span>
<span class="tok-prop">font-family</span><span class="tok-punct">:</span> <span class="tok-value">Arial, sans-serif</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span>
<span class="tok-selector">.page</span> <span class="tok-punct">{{</span>
<span class="tok-prop">width</span><span class="tok-punct">:</span> <span class="tok-value">min(92%, 1200px)</span><span class="tok-punct">;</span>
<span class="tok-prop">margin-inline</span><span class="tok-punct">:</span> <span class="tok-value">auto</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span>
<span class="tok-selector">.work-grid</span> <span class="tok-punct">{{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">grid</span><span class="tok-punct">;</span>
<span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">repeat(3, minmax(0, 1fr))</span><span class="tok-punct">;</span>
<span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span>
<span class="tok-selector">.work</span> <span class="tok-punct">{{</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">1.5rem</span><span class="tok-punct">;</span>
<span class="tok-prop">min-height</span><span class="tok-punct">:</span> <span class="tok-num">220px</span><span class="tok-punct">;</span>
<span class="tok-prop">border</span><span class="tok-punct">:</span> <span class="tok-num">1px</span> <span class="tok-value">solid #182033</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span></div>
</div>
<h3>Step 3 — Create a featured item</h3>
<p>Give one item a larger span and an accent background. Ask how the focal point and reading order have changed.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">style.css · featured span</span></div>
<div class="ag-code"><span class="tok-selector">.work.featured</span> <span class="tok-punct">{{</span>
<span class="tok-prop">grid-column</span><span class="tok-punct">:</span> <span class="tok-value">span 2</span><span class="tok-punct">;</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">#b8f34b</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span>
<span class="tok-selector">.work.featured h2</span> <span class="tok-punct">{{</span>
<span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">clamp(2rem, 4vw, 4.5rem)</span><span class="tok-punct">;</span>
<span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">.95</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span></div>
</div>
<h3>Step 4 — Introduce asymmetry</h3>
<p>Offset one item. Preview and inspect the relationship between the element’s visual position and the space it still occupies in the grid.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">style.css · controlled offset</span></div>
<div class="ag-code"><span class="tok-selector">.work:nth-child(3)</span> <span class="tok-punct">{{</span>
<span class="tok-prop">transform</span><span class="tok-punct">:</span> <span class="tok-value">translateY(2rem)</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span>
<span class="tok-selector">.work:nth-child(4)</span> <span class="tok-punct">{{</span>
<span class="tok-prop">grid-column</span><span class="tok-punct">:</span> <span class="tok-value">2 / span 2</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span></div>
</div>
<h3>Step 5 — Reset the composition for mobile</h3>
<p>Remove the large spans and offsets on smaller screens. Explain that this is not abandoning the art direction; it is adapting the composition to a different context.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">style.css · responsive reset</span></div>
<div class="ag-code"><span class="tok-key">@media</span> <span class="tok-punct">(</span><span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">700px</span><span class="tok-punct">)</span> <span class="tok-punct">{{</span>
<span class="tok-selector">.work-grid</span> <span class="tok-punct">{{</span>
<span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-num">1fr</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span>
<span class="tok-selector">.work.featured, .work:nth-child(3), .work:nth-child(4)</span> <span class="tok-punct">{{</span>
<span class="tok-prop">grid-column</span><span class="tok-punct">:</span> <span class="tok-value">auto</span><span class="tok-punct">;</span>
<span class="tok-prop">transform</span><span class="tok-punct">:</span> <span class="tok-value">none</span><span class="tok-punct">;</span>
<span class="tok-punct">}}</span>
<span class="tok-punct">}}</span></div>
</div>
<h3>Step 6 — Live critique</h3>
<ol class="ag-steps">
<li>Ask students to identify the original grid and the two deliberate disruptions.</li>
<li>Remove one disruption and compare the visual hierarchy.</li>
<li>Try a different span or offset and discuss whether it improves the composition.</li>
<li>Resize to mobile and verify that all content remains visible and in a sensible order.</li>
<li>Ask students to explain the intent behind one unusual layout decision in a single sentence.</li>
</ol>
<div class="ag-callout blue"><strong>Instructor note:</strong> Keep the live demo focused on one change at a time. Students should see the relationship between structure and disruption, and understand that responsive behavior is part of the design—not a cleanup task at the end.</div>
</section>
<section class="ag-section">
<h2>08 / Final quality check</h2>
<ul class="ag-checklist">
<li>The page has a clear underlying grid.</li>
<li>At least two disruptions have a clear visual purpose.</li>
<li>Typography and spacing support the hierarchy.</li>
<li>No content is obscured or unintentionally overlapping.</li>
<li>Desktop, tablet, and mobile versions have been tested.</li>
<li>The rationale explains what was changed and why.</li>
</ul>
</section>
<p class="ag-footer">AMDE 355 · Advanced Web Design · Week 05 · Break the grid with intention, not by accident.</p>
</div>
{:/nomarkdown}
