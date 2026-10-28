---
layout: teaching-post
title: AMDE 355 - Design Systems &amp; Reusable Components (Week 7)
slug: amde-355-design-systems-reusable-components-week-7
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68206
source_url: https://nuggetofjoy.com/amde-355-design-systems-reusable-components-week-7/
author: admin
categories:
- AMDE 355 ADVANCED WEB DESIGN
tags: []
---

{::nomarkdown}
<div class="amde-grid-lesson">

<section class="ag-hero">
<p class="ag-eyebrow">AMDE 355 · Advanced Web Design · Week 07</p>
<h2>Design Systems &amp; Reusable Components.</h2>
<p>Move from styling individual pages to building a visual system. This week, you’ll define reusable design tokens, create consistent interface components, and use variants and states to make a design easier to maintain as it grows.</p>
<div class="ag-chips"><span class="ag-chip">Design tokens</span><span class="ag-chip">Reusable components</span><span class="ag-chip">Variants &amp; states</span><span class="ag-chip">Consistency at scale</span></div>
</section>
<section class="ag-section">
<h2>01 / What is a design system?</h2>
<p>A design system is a shared set of visual rules, reusable interface patterns, and guidance for using them. It helps a website feel coherent across pages while making future changes more efficient.</p>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">01</span><h3>Foundations</h3><p>Color, typography, spacing, borders, shadows, and layout rules establish the visual language.</p></article>
<article class="ag-card"><span class="ag-number">02</span><h3>Components</h3><p>Buttons, cards, navigation, form controls, and other repeated patterns turn the foundations into interface elements.</p></article>
<article class="ag-card"><span class="ag-number">03</span><h3>Guidelines</h3><p>Usage rules explain when a component belongs, how it behaves, and which variations are appropriate.</p></article>
</div>
<div class="ag-callout"><strong>Design question:</strong> If you changed the brand color or button radius tomorrow, could you update the whole site from one place?</div>
</section>
<section class="ag-section">
<h2>02 / Create design tokens</h2>
<p>Tokens are named values for decisions you repeat. CSS custom properties make these values easier to reuse and revise without hunting through every selector.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">tokens.css · shared foundations</span></div>
<div class="ag-code"><span class="tok-selector">:root</span> <span class="tok-punct">{</span>
<span class="tok-comment">/* Color tokens */</span>
<span class="tok-prop">--color-ink</span><span class="tok-punct">:</span> <span class="tok-value">#182033</span><span class="tok-punct">;</span>
<span class="tok-prop">--color-paper</span><span class="tok-punct">:</span> <span class="tok-value">#ffffff</span><span class="tok-punct">;</span>
<span class="tok-prop">--color-accent</span><span class="tok-punct">:</span> <span class="tok-value">#b8f34b</span><span class="tok-punct">;</span>
<span class="tok-comment">/* Spacing and shape tokens */</span>
<span class="tok-prop">--space-small</span><span class="tok-punct">:</span> <span class="tok-value">0.5rem</span><span class="tok-punct">;</span>
<span class="tok-prop">--space-medium</span><span class="tok-punct">:</span> <span class="tok-value">1rem</span><span class="tok-punct">;</span>
<span class="tok-prop">--space-large</span><span class="tok-punct">:</span> <span class="tok-value">2rem</span><span class="tok-punct">;</span>
<span class="tok-prop">--radius-card</span><span class="tok-punct">:</span> <span class="tok-value">1rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.card</span> <span class="tok-punct">{</span>
<span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-ink)</span><span class="tok-punct">;</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-paper)</span><span class="tok-punct">;</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-value">var(--space-medium)</span><span class="tok-punct">;</span>
<span class="tok-prop">border-radius</span><span class="tok-punct">:</span> <span class="tok-value">var(--radius-card)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></div>
</div>
<div class="ag-callout blue"><strong>Remember:</strong> tokens are not just for colors. Spacing, type sizes, border radii, shadows, and animation timings can also be systemized.</div>
</section>
<section class="ag-section">
<h2>03 / Build a reusable component</h2>
<p>A component packages a repeated pattern into a named rule. Start with a basic card and make its structure and spacing consistent before adding variations.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">components.css · a card component</span></div>
<div class="ag-code"><span class="tok-selector">.project-card</span> <span class="tok-punct">{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span>
<span class="tok-prop">flex-direction</span><span class="tok-punct">:</span> <span class="tok-value">column</span><span class="tok-punct">;</span>
<span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-value">var(--space-medium)</span><span class="tok-punct">;</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-value">var(--space-large)</span><span class="tok-punct">;</span>
<span class="tok-prop">border</span><span class="tok-punct">:</span> <span class="tok-value">1px solid #dbe2ea</span><span class="tok-punct">;</span>
<span class="tok-prop">border-radius</span><span class="tok-punct">:</span> <span class="tok-value">var(--radius-card)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.project-card h3</span> <span class="tok-punct">{</span>
<span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-value">0</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.project-card p</span> <span class="tok-punct">{</span>
<span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-value">0</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></div>
</div>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">A</span><h3>One base component</h3><p>Define the shared structure, spacing, border, and type treatment.</p></article>
<article class="ag-card"><span class="ag-number">B</span><h3>Meaningful variants</h3><p>Add a variant only when the difference has a clear purpose, such as featured, compact, or muted.</p></article>
<article class="ag-card"><span class="ag-number">C</span><h3>Predictable states</h3><p>Consider default, hover, focus, active, disabled, or error states when the component needs them.</p></article>
</div>
</section>
<section class="ag-section">
<h2>04 / Variants and interaction states</h2>
<p>Variants communicate a meaningful difference in role. States communicate what is happening during an interaction. Keep both consistent and make keyboard focus visible.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">components.css · button variants and focus</span></div>
<div class="ag-code"><span class="tok-selector">.button</span> <span class="tok-punct">{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">inline-flex</span><span class="tok-punct">;</span>
<span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">center</span><span class="tok-punct">;</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-value">0.75rem 1rem</span><span class="tok-punct">;</span>
<span class="tok-prop">border-radius</span><span class="tok-punct">:</span> <span class="tok-value">999px</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.button--primary</span> <span class="tok-punct">{</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-ink)</span><span class="tok-punct">;</span>
<span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">white</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.button--secondary</span> <span class="tok-punct">{</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">transparent</span><span class="tok-punct">;</span>
<span class="tok-prop">border</span><span class="tok-punct">:</span> <span class="tok-value">1px solid currentColor</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.button:focus-visible</span> <span class="tok-punct">{</span>
<span class="tok-prop">outline</span><span class="tok-punct">:</span> <span class="tok-value">3px solid #2563eb</span><span class="tok-punct">;</span>
<span class="tok-prop">outline-offset</span><span class="tok-punct">:</span> <span class="tok-value">3px</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></div>
</div>
<div class="ag-callout amber"><strong>Accessibility note:</strong> don’t remove focus indicators without providing a clear alternative. Color alone should not be the only signal that a component is interactive or in a different state.</div>
</section>
<section class="ag-section">
<h2>05 / In-class assignment — build a mini design system</h2>
<p>Use the visual direction and composition developed in Weeks 4–6. Create a small system that could support a consistent portfolio or project website.</p>
<div class="ag-steps">
<div class="ag-step"><span class="ag-number">1</span><div><h3>Define your foundations</h3><p>Create tokens for at least three colors, three spacing values, a type scale, and one border radius.</p></div></div>
<div class="ag-step"><span class="ag-number">2</span><div><h3>Build three components</h3><p>Create a navigation or link style, a button, and a project card using your shared tokens.</p></div></div>
<div class="ag-step"><span class="ag-number">3</span><div><h3>Add a useful variation</h3><p>Give one component a purposeful variant and define its hover and keyboard-focus behavior.</p></div></div>
<div class="ag-step"><span class="ag-number">4</span><div><h3>Test consistency</h3><p>Place the components together on one page. Check spacing, type, contrast, and responsive behavior.</p></div></div>
</div>
<div class="ag-callout"><strong>Deliverable:</strong> a one-page mini design system with token definitions, three reusable components, at least one variant, and a short explanation of the rules that hold the system together.</div>
</section>
<section class="ag-section">
<h2>06 / Critique &amp; self-check</h2>
<div class="ag-grid">
<article class="ag-card"><h3>Consistency</h3><p>Do the components look like members of the same visual family?</p></article>
<article class="ag-card"><h3>Reuse</h3><p>Can a shared token change a value across multiple components?</p></article>
<article class="ag-card"><h3>Usability</h3><p>Are interactive states visible, understandable, and keyboard accessible?</p></article>
</div>
<ul class="ag-checklist">
<li>Color, spacing, typography, and shape tokens are defined.</li>
<li>At least three components use the shared system.</li>
<li>A variant has a clear purpose rather than being decorative only.</li>
<li>Hover and keyboard-focus states are visibly defined.</li>
<li>Text and interface contrast are checked.</li>
<li>The components remain coherent at smaller screen widths.</li>
</ul>
</section>
<section class="ag-section" id="instructor-layout-code">
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;margin-bottom:18px;">
<p style="margin:0 0 6px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h2 style="margin:0 0 8px;">Instructor Layout Code — Step by Step</h2>
<p style="margin:0;">This is a live-coding walkthrough, not just a discussion guide. Build the system from a blank file, explain each decision, and show how one token change updates multiple components. The examples below are deliberately complete enough to type, test, and modify during class.</p>
</div>
<div class="ag-callout amber"><strong>Demo setup:</strong> Create a new HTML file in CodePen or your editor. Use the HTML and CSS below as the starting point. Students should see the page change as you add the tokens, components, variants, and states.</div>
<h3>Step 1 — Build the HTML structure</h3>
<p>Start with a small project listing. Point out that the HTML describes content and meaning; the CSS will define the reusable visual system.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">index.html · semantic page structure</span></div>
<div class="ag-code"><span class="tok-punct">&lt;!DOCTYPE html&gt;</span>
<span class="tok-tag">&lt;html</span> <span class="tok-attr">lang</span><span class="tok-punct">=</span><span class="tok-string">"en"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;head&gt;</span>
<span class="tok-tag">&lt;meta</span> <span class="tok-attr">charset</span><span class="tok-punct">=</span><span class="tok-string">"UTF-8"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;meta</span> <span class="tok-attr">name</span><span class="tok-punct">=</span><span class="tok-string">"viewport"</span> <span class="tok-attr">content</span><span class="tok-punct">=</span><span class="tok-string">"width=device-width, initial-scale=1.0"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;title&gt;</span>Studio Projects<span class="tok-tag">&lt;/title&gt;</span>
<span class="tok-tag">&lt;/head&gt;</span>
<span class="tok-tag">&lt;body&gt;</span>
<span class="tok-tag">&lt;header</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"site-header"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;a</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"site-logo"</span> <span class="tok-attr">href</span><span class="tok-punct">=</span><span class="tok-string">"#top"</span><span class="tok-tag">&gt;</span>Studio / 01<span class="tok-tag">&lt;/a&gt;</span>
<span class="tok-tag">&lt;nav</span> <span class="tok-attr">aria-label</span><span class="tok-punct">=</span><span class="tok-string">"Main navigation"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;a</span> <span class="tok-attr">href</span><span class="tok-punct">=</span><span class="tok-string">"#projects"</span><span class="tok-tag">&gt;</span>Projects<span class="tok-tag">&lt;/a&gt;</span>
<span class="tok-tag">&lt;a</span> <span class="tok-attr">href</span><span class="tok-punct">=</span><span class="tok-string">"#about"</span><span class="tok-tag">&gt;</span>About<span class="tok-tag">&lt;/a&gt;</span>
<span class="tok-tag">&lt;/nav&gt;</span>
<span class="tok-tag">&lt;/header&gt;</span>
<span class="tok-tag">&lt;main</span> <span class="tok-attr">id</span><span class="tok-punct">=</span><span class="tok-string">"top"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;section</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"intro"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"eyebrow"</span><span class="tok-tag">&gt;</span>Selected work / 2026<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;h1&gt;</span>Ideas become visible.<span class="tok-tag">&lt;/h1&gt;</span>
<span class="tok-tag">&lt;p&gt;</span>A collection of experiments, images, and interactive work.<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;a</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"button button--primary"</span> <span class="tok-attr">href</span><span class="tok-punct">=</span><span class="tok-string">"#projects"</span><span class="tok-tag">&gt;</span>Explore projects<span class="tok-tag">&lt;/a&gt;</span>
<span class="tok-tag">&lt;/section&gt;</span>
<span class="tok-tag">&lt;section</span> <span class="tok-attr">id</span><span class="tok-punct">=</span><span class="tok-string">"projects"</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"project-grid"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"project-card"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"eyebrow"</span><span class="tok-tag">&gt;</span>01 / Image<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;h2&gt;</span>Moving Studies<span class="tok-tag">&lt;/h2&gt;</span>
<span class="tok-tag">&lt;p&gt;</span>Photographic experiments exploring motion and memory.<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;a</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"text-link"</span> <span class="tok-attr">href</span><span class="tok-punct">=</span><span class="tok-string">"#moving-studies"</span><span class="tok-tag">&gt;</span>View project <span class="tok-punct">→</span><span class="tok-tag">&lt;/a&gt;</span>
<span class="tok-tag">&lt;/article&gt;</span>
<span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"project-card project-card--featured"</span><span class="tok-tag">&gt;</span>
<span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"eyebrow"</span><span class="tok-tag">&gt;</span>02 / Interactive<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;h2&gt;</span>Open Signals<span class="tok-tag">&lt;/h2&gt;</span>
<span class="tok-tag">&lt;p&gt;</span>A web-based exploration of patterns and connections.<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;a</span> <span class="tok-attr">class</span><span class="tok-punct">=</span><span class="tok-string">"text-link"</span> <span class="tok-attr">href</span><span class="tok-punct">=</span><span class="tok-string">"#open-signals"</span><span class="tok-tag">&gt;</span>View project <span class="tok-punct">→</span><span class="tok-tag">&lt;/a&gt;</span>
<span class="tok-tag">&lt;/article&gt;</span>
<span class="tok-tag">&lt;/section&gt;</span>
<span class="tok-tag">&lt;/main&gt;</span>
<span class="tok-tag">&lt;/body&gt;</span>
<span class="tok-tag">&lt;/html&gt;</span></div>
</div>
<p><strong>Ask students:</strong> Which parts of this HTML repeat? Which class names suggest a reusable component, and which describe a specific page section?</p>
<h3>Step 2 — Define the design tokens</h3>
<p>Add the tokens before styling individual components. Explain that the names communicate intent; <code class="ag-inline">--space-large</code> is easier to understand than remembering the same raw pixel value in multiple places.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">styles.css · design foundations</span></div>
<div class="ag-code"><span class="tok-selector">:root</span> <span class="tok-punct">{</span>
<span class="tok-comment">/* Colors */</span>
<span class="tok-prop">--color-ink</span><span class="tok-punct">:</span> <span class="tok-value">#182033</span><span class="tok-punct">;</span>
<span class="tok-prop">--color-paper</span><span class="tok-punct">:</span> <span class="tok-value">#ffffff</span><span class="tok-punct">;</span>
<span class="tok-prop">--color-muted</span><span class="tok-punct">:</span> <span class="tok-value">#64748b</span><span class="tok-punct">;</span>
<span class="tok-prop">--color-accent</span><span class="tok-punct">:</span> <span class="tok-value">#b8f34b</span><span class="tok-punct">;</span>
<span class="tok-prop">--color-line</span><span class="tok-punct">:</span> <span class="tok-value">#dbe2ea</span><span class="tok-punct">;</span>
<span class="tok-comment">/* Spacing scale */</span>
<span class="tok-prop">--space-1</span><span class="tok-punct">:</span> <span class="tok-value">0.5rem</span><span class="tok-punct">;</span>
<span class="tok-prop">--space-2</span><span class="tok-punct">:</span> <span class="tok-value">1rem</span><span class="tok-punct">;</span>
<span class="tok-prop">--space-3</span><span class="tok-punct">:</span> <span class="tok-value">1.5rem</span><span class="tok-punct">;</span>
<span class="tok-prop">--space-4</span><span class="tok-punct">:</span> <span class="tok-value">2rem</span><span class="tok-punct">;</span>
<span class="tok-comment">/* Type, shape, and layout */</span>
<span class="tok-prop">--type-body</span><span class="tok-punct">:</span> <span class="tok-value">1rem</span><span class="tok-punct">;</span>
<span class="tok-prop">--type-display</span><span class="tok-punct">:</span> <span class="tok-value">clamp(2.5rem, 7vw, 5.5rem)</span><span class="tok-punct">;</span>
<span class="tok-prop">--radius-card</span><span class="tok-punct">:</span> <span class="tok-value">1rem</span><span class="tok-punct">;</span>
<span class="tok-prop">--content-width</span><span class="tok-punct">:</span> <span class="tok-value">1100px</span><span class="tok-punct">;</span>
<span class="tok-prop">--transition-fast</span><span class="tok-punct">:</span> <span class="tok-value">180ms ease</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></div>
</div>
<p><strong>Live test:</strong> change <code class="ag-inline">--color-accent</code> to a different color. Later, apply that token to a badge, button, and featured card so students can see how one value coordinates multiple parts of the interface.</p>
<h3>Step 3 — Apply the system-wide base styles</h3>
<p>Use a small number of base rules for typography, page width, and predictable box sizing. Avoid repeating these values inside every component.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">styles.css · base rules</span></div>
<div class="ag-code"><span class="tok-selector">* </span><span class="tok-punct">{</span>
<span class="tok-prop">box-sizing</span><span class="tok-punct">:</span> <span class="tok-value">border-box</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">body</span> <span class="tok-punct">{</span>
<span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-value">0</span><span class="tok-punct">;</span>
<span class="tok-prop">font-family</span><span class="tok-punct">:</span> <span class="tok-value">Arial, Helvetica, sans-serif</span><span class="tok-punct">;</span>
<span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">var(--type-body)</span><span class="tok-punct">;</span>
<span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-value">1.6</span><span class="tok-punct">;</span>
<span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-ink)</span><span class="tok-punct">;</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-paper)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">main</span> <span class="tok-punct">{</span>
<span class="tok-prop">width</span><span class="tok-punct">:</span> <span class="tok-value">min(100% - 2rem, var(--content-width))</span><span class="tok-punct">;</span>
<span class="tok-prop">margin-inline</span><span class="tok-punct">:</span> <span class="tok-value">auto</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">a</span> <span class="tok-punct">{</span>
<span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">inherit</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></div>
</div>
<h3>Step 4 — Build the navigation and button components</h3>
<p>Style the shared structure first. Then use modifier classes for variants. The double-hyphen naming pattern is a common convention: <code class="ag-inline">.button--primary</code> is a variation of <code class="ag-inline">.button</code>, not a separate unrelated component.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">components.css · navigation and buttons</span></div>
<div class="ag-code"><span class="tok-selector">.site-header</span> <span class="tok-punct">{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span>
<span class="tok-prop">justify-content</span><span class="tok-punct">:</span> <span class="tok-value">space-between</span><span class="tok-punct">;</span>
<span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">center</span><span class="tok-punct">;</span>
<span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-value">var(--space-2)</span><span class="tok-punct">;</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-value">var(--space-3) max(1rem, calc((100% - var(--content-width)) / 2))</span><span class="tok-punct">;</span>
<span class="tok-prop">border-bottom</span><span class="tok-punct">:</span> <span class="tok-value">1px solid var(--color-line)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.site-header nav</span> <span class="tok-punct">{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span>
<span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-value">var(--space-3)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.site-header a</span> <span class="tok-punct">{</span>
<span class="tok-prop">text-decoration</span><span class="tok-punct">:</span> <span class="tok-value">none</span><span class="tok-punct">;</span>
<span class="tok-prop">font-weight</span><span class="tok-punct">:</span> <span class="tok-value">700</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.button</span> <span class="tok-punct">{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">inline-flex</span><span class="tok-punct">;</span>
<span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">center</span><span class="tok-punct">;</span>
<span class="tok-prop">justify-content</span><span class="tok-punct">:</span> <span class="tok-value">center</span><span class="tok-punct">;</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-value">0.8rem 1.15rem</span><span class="tok-punct">;</span>
<span class="tok-prop">border</span><span class="tok-punct">:</span> <span class="tok-value">1px solid transparent</span><span class="tok-punct">;</span>
<span class="tok-prop">border-radius</span><span class="tok-punct">:</span> <span class="tok-value">999px</span><span class="tok-punct">;</span>
<span class="tok-prop">font-weight</span><span class="tok-punct">:</span> <span class="tok-value">700</span><span class="tok-punct">;</span>
<span class="tok-prop">text-decoration</span><span class="tok-punct">:</span> <span class="tok-value">none</span><span class="tok-punct">;</span>
<span class="tok-prop">transition</span><span class="tok-punct">:</span> <span class="tok-value">transform var(--transition-fast), background var(--transition-fast)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.button--primary</span> <span class="tok-punct">{</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-ink)</span><span class="tok-punct">;</span>
<span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-paper)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.button--secondary</span> <span class="tok-punct">{</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">transparent</span><span class="tok-punct">;</span>
<span class="tok-prop">border-color</span><span class="tok-punct">:</span> <span class="tok-value">currentColor</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.button:hover</span> <span class="tok-punct">{</span>
<span class="tok-prop">transform</span><span class="tok-punct">:</span> <span class="tok-value">translateY(-2px)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.button:focus-visible</span> <span class="tok-punct">{</span>
<span class="tok-prop">outline</span><span class="tok-punct">:</span> <span class="tok-value">3px solid #2563eb</span><span class="tok-punct">;</span>
<span class="tok-prop">outline-offset</span><span class="tok-punct">:</span> <span class="tok-value">3px</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></div>
</div>
<p><strong>Demonstrate:</strong> switch the HTML class from <code class="ag-inline">button--primary</code> to <code class="ag-inline">button--secondary</code>. The element keeps the base button behavior while changing only the intended variant styling.</p>
<h3>Step 5 — Create the project card and its featured variant</h3>
<p>Show how one base component can support multiple pieces of content. The featured card changes its visual emphasis but still uses the same component rules.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">components.css · card component and variant</span></div>
<div class="ag-code"><span class="tok-selector">.project-grid</span> <span class="tok-punct">{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">grid</span><span class="tok-punct">;</span>
<span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">repeat(auto-fit, minmax(min(100%, 280px), 1fr))</span><span class="tok-punct">;</span>
<span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-value">var(--space-3)</span><span class="tok-punct">;</span>
<span class="tok-prop">padding-block</span><span class="tok-punct">:</span> <span class="tok-value">var(--space-4)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.project-card</span> <span class="tok-punct">{</span>
<span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span>
<span class="tok-prop">flex-direction</span><span class="tok-punct">:</span> <span class="tok-value">column</span><span class="tok-punct">;</span>
<span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">flex-start</span><span class="tok-punct">;</span>
<span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-value">var(--space-2)</span><span class="tok-punct">;</span>
<span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-value">var(--space-3)</span><span class="tok-punct">;</span>
<span class="tok-prop">border</span><span class="tok-punct">:</span> <span class="tok-value">1px solid var(--color-line)</span><span class="tok-punct">;</span>
<span class="tok-prop">border-radius</span><span class="tok-punct">:</span> <span class="tok-value">var(--radius-card)</span><span class="tok-punct">;</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-paper)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.project-card h2, .project-card p</span> <span class="tok-punct">{</span>
<span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-value">0</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.project-card--featured</span> <span class="tok-punct">{</span>
<span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-accent)</span><span class="tok-punct">;</span>
<span class="tok-prop">border-color</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-accent)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.eyebrow</span> <span class="tok-punct">{</span>
<span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">0.75rem</span><span class="tok-punct">;</span>
<span class="tok-prop">font-weight</span><span class="tok-punct">:</span> <span class="tok-value">800</span><span class="tok-punct">;</span>
<span class="tok-prop">letter-spacing</span><span class="tok-punct">:</span> <span class="tok-value">0.08em</span><span class="tok-punct">;</span>
<span class="tok-prop">text-transform</span><span class="tok-punct">:</span> <span class="tok-value">uppercase</span><span class="tok-punct">;</span>
<span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">var(--color-muted)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.text-link</span> <span class="tok-punct">{</span>
<span class="tok-prop">font-weight</span><span class="tok-punct">:</span> <span class="tok-value">700</span><span class="tok-punct">;</span>
<span class="tok-prop">text-underline-offset</span><span class="tok-punct">:</span> <span class="tok-value">0.2em</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></div>
</div>
<h3>Step 6 — Add responsive behavior and accessibility checks</h3>
<p>Test the layout at narrower widths. Components should adapt without losing their hierarchy or making navigation difficult to use.</p>
<div class="ag-editor">
<div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">responsive.css · narrow screens and reduced motion</span></div>
<div class="ag-code"><span class="tok-selector">@media (max-width: 600px)</span> <span class="tok-punct">{</span>
<span class="tok-selector">.site-header</span> <span class="tok-punct">{</span>
<span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">flex-start</span><span class="tok-punct">;</span>
<span class="tok-prop">flex-direction</span><span class="tok-punct">:</span> <span class="tok-value">column</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.site-header nav</span> <span class="tok-punct">{</span>
<span class="tok-prop">flex-wrap</span><span class="tok-punct">:</span> <span class="tok-value">wrap</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.intro h1</span> <span class="tok-punct">{</span>
<span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">clamp(2.25rem, 12vw, 4rem)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-punct">}</span>
<span class="tok-selector">@media (prefers-reduced-motion: reduce)</span> <span class="tok-punct">{</span>
<span class="tok-selector">*, *::before, *::after</span> <span class="tok-punct">{</span>
<span class="tok-prop">scroll-behavior</span><span class="tok-punct">:</span> <span class="tok-value">auto</span><span class="tok-punct">;</span>
<span class="tok-prop">transition-duration</span><span class="tok-punct">:</span> <span class="tok-value">0.01ms</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-punct">}</span></div>
</div>
<h3>Step 7 — Run a system audit</h3>
<ul class="ag-checklist">
<li>Change a token and confirm more than one component updates.</li>
<li>Confirm every button has a clear purpose and a visible focus indicator.</li>
<li>Check the featured card: it should be different for a reason, not just different.</li>
<li>Test navigation with a keyboard and check the order of focus.</li>
<li>Resize the browser to mobile width and inspect wrapping, spacing, and overflow.</li>
<li>Check text/background contrast and verify the page remains usable with reduced motion.</li>
</ul>
<div class="ag-callout amber"><strong>Teaching note:</strong> distinguish a reusable component from a copied style. If students duplicate the same CSS in several places, they have repeated the implementation—not created a maintainable system. The aim is shared rules with intentional variants.</div>
</section>
<footer class="ag-footer"><p><strong>AMDE 355 · Advanced Web Design</strong> — Week 07</p><p>Design Systems &amp; Reusable Components · Turn visual decisions into a consistent, maintainable interface.</p></footer>
</div>
{:/nomarkdown}
