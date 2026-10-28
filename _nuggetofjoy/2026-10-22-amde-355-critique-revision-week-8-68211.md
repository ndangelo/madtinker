---
layout: teaching-post
title: AMDE 355 - Critique &amp; Revision (Week 8)
slug: amde-355-critique-revision-week-8
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68211
source_url: https://nuggetofjoy.com/amde-355-critique-revision-week-8/
author: admin
categories:
- AMDE 355 ADVANCED WEB DESIGN
tags: []
---

{::nomarkdown}
<div class="amde-grid-lesson">

<section class="ag-hero">
<p class="ag-eyebrow">AMDE 355 · Advanced Web Design · Week 08</p>
<h2>Project 1 Critique &amp; Revision.</h2>
<p>Move from “I like it” or “I don’t like it” to evidence-based design decisions. This week, you’ll present your current interface, gather useful feedback, identify the most important problems, and revise the design with purpose.</p>
<div class="ag-chips"><span class="ag-chip">Design critique</span><span class="ag-chip">Evidence-based feedback</span><span class="ag-chip">Iteration</span><span class="ag-chip">Responsive refinement</span></div>
</section>
<section class="ag-section">
<h2>01 / Why critique is part of design</h2>
<p>A critique is not a vote on whether a design is attractive. It is a structured conversation about how well a design communicates, supports its audience, and meets its goals. A useful critique identifies what is working, what is unclear, and what could be tested or improved.</p>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">01</span><h3>Observe</h3><p>Describe what you can actually see: hierarchy, spacing, labels, alignment, contrast, navigation, and behavior.</p></article>
<article class="ag-card"><span class="ag-number">02</span><h3>Interpret</h3><p>Explain what the design seems to communicate and where a viewer may hesitate, misunderstand, or lose their place.</p></article>
<article class="ag-card"><span class="ag-number">03</span><h3>Recommend</h3><p>Suggest a specific next step tied to the project goal. Avoid vague instructions like “make it pop.”</p></article>
</div>
<div class="ag-callout"><strong>Core principle:</strong> critique the work, not the person. Feedback should be specific, respectful, and useful enough that the designer can decide what to do next.</div>
<h3>Vague feedback versus actionable feedback</h3>
<div class="ag-grid">
<article class="ag-card"><h3>Too vague</h3><p>“The page feels off.”</p><p>“Make it more modern.”</p><p>“I don’t like the colors.”</p></article>
<article class="ag-card"><h3>More useful</h3><p>“The heading and body copy are almost the same size, so the page has no clear entry point. Increase the heading scale and check it at mobile width.”</p><p>“The pale text on the image is difficult to read. Test a darker overlay or move the text onto a solid background.”</p></article>
</div>
</section>
<section class="ag-section">
<h2>02 / The critique framework</h2>
<p>Use the same sequence for each project. The order helps separate observation from opinion and encourages feedback that can be acted on.</p>
<div class="ag-steps">
<div class="ag-step"><span class="ag-number">1</span><div><h3>Restate the goal</h3><p>Who is the intended audience? What should the visitor understand or do? What problem is the interface solving?</p></div></div>
<div class="ag-step"><span class="ag-number">2</span><div><h3>Describe the first impression</h3><p>What attracts attention first? Is that the most important content? What does the visual hierarchy communicate?</p></div></div>
<div class="ag-step"><span class="ag-number">3</span><div><h3>Walk through the experience</h3><p>Follow the navigation and primary action. Notice unclear labels, missing feedback, dead ends, or unnecessary steps.</p></div></div>
<div class="ag-step"><span class="ag-number">4</span><div><h3>Check the interface at different widths</h3><p>Look for overflow, crowded navigation, awkward line breaks, tiny targets, and changes in content priority.</p></div></div>
<div class="ag-step"><span class="ag-number">5</span><div><h3>Prioritize the feedback</h3><p>Separate critical usability problems from important refinements and optional polish. Do not try to fix everything at once.</p></div></div>
<div class="ag-step"><span class="ag-number">6</span><div><h3>Revise and explain</h3><p>Make focused changes, compare before and after, and explain which feedback informed each decision.</p></div></div>
</div>
</section>
<section class="ag-section">
<h2>03 / A simple priority system</h2>
<p>Feedback is not all equally urgent. Use this priority system to decide what to address first. The labels are a planning tool, not a grade.</p>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">P1</span><h3>Must fix</h3><p>A visitor cannot complete the main task, important information is missing, text is unreadable, or a key interaction is broken.</p></article>
<article class="ag-card"><span class="ag-number">P2</span><h3>Should improve</h3><p>Hierarchy, spacing, labels, content grouping, or responsive behavior causes friction but does not completely block the task.</p></article>
<article class="ag-card"><span class="ag-number">P3</span><h3>Polish</h3><p>Small decorative refinements, subtle transitions, or optional details that can wait until the main experience works.</p></article>
</div>
<div class="ag-callout amber"><strong>Remember:</strong> a beautiful hover effect is not a priority if the navigation label is confusing or the main action cannot be found.</div>
</section>
<section class="ag-section">
<h2>04 / Review hierarchy, typography, and spacing</h2>
<p>When a page feels unclear, inspect the system before adding decoration. Ask whether the layout makes the most important information easy to find.</p>
<div class="ag-grid">
<article class="ag-card"><h3>Hierarchy</h3><p>Is there one clear primary heading? Do subheadings divide the content into useful groups? Is the primary action visually distinct?</p></article>
<article class="ag-card"><h3>Typography</h3><p>Are heading sizes meaningfully different? Is body copy comfortable to read? Are line lengths controlled? Does type scale fluidly?</p></article>
<article class="ag-card"><h3>Spacing</h3><p>Are related elements grouped closely? Is there enough separation between sections? Are repeated gaps consistent?</p></article>
</div>
<h3>Example — tighten an unclear heading hierarchy</h3>
<p>Imagine a page where the main heading is only slightly larger than a card title. The first example has no clear hierarchy; the second uses a deliberate scale.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">before.css</span></div><pre class="ag-code"><code><span class="tok-comment">/* The hierarchy is too similar. */</span>
<span class="tok-selector">h1</span> <span class="tok-punct">{</span> <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">1.6rem</span><span class="tok-punct">;</span> <span class="tok-punct">}</span>
<span class="tok-selector">h2</span> <span class="tok-punct">{</span> <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">1.4rem</span><span class="tok-punct">;</span> <span class="tok-punct">}</span>
<span class="tok-selector">.card-title</span> <span class="tok-punct">{</span> <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">1.3rem</span><span class="tok-punct">;</span> <span class="tok-punct">}</span></code></pre></div>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">after.css</span></div><pre class="ag-code"><code><span class="tok-comment">/* Use a stronger, responsive scale. */</span>
<span class="tok-selector">h1</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">clamp(2.4rem, 6vw, 4.8rem)</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">1.05</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">h2</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">1.8rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.card-title</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">1.2rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<p><strong>Discussion:</strong> bigger is not automatically better. The goal is to make levels clear and consistent, then test the hierarchy in the actual layout and at different screen widths.</p>
</section>
<section class="ag-section">
<h2>05 / Review navigation and interaction</h2>
<p>Do not evaluate an interface only as a static screenshot. Interact with it. A navigation system can look polished and still be difficult to use.</p>
<ul>
<li>Can you predict what each navigation label means before clicking?</li>
<li>Is the current page or section identifiable when appropriate?</li>
<li>Can you find the primary action without searching?</li>
<li>Does a button or link look interactive and behave as expected?</li>
<li>Can you use the interface with a keyboard, and is focus visible?</li>
<li>Does the page give feedback after an action?</li>
</ul>
<h3>Example — visible keyboard focus</h3>
<p>If the focus indicator has been removed, a keyboard user may lose track of their position. This small CSS rule makes focus easier to see.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">focus-state.css</span></div><pre class="ag-code"><code><span class="tok-selector">a:focus-visible, button:focus-visible</span> <span class="tok-punct">{</span>
  <span class="tok-prop">outline</span><span class="tok-punct">:</span> <span class="tok-num">3px</span> <span class="tok-value">solid</span> <span class="tok-value">#2563eb</span><span class="tok-punct">;</span>
  <span class="tok-prop">outline-offset</span><span class="tok-punct">:</span> <span class="tok-num">4px</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<p>Have a classmate press <kbd>Tab</kbd> through the page without using the mouse. Ask them to narrate where they are and what they expect to happen.</p>
</section>
<section class="ag-section">
<h2>06 / Responsive critique: desktop, tablet, mobile</h2>
<p>Responsive design is more than shrinking a desktop page. Content, navigation, spacing, and layout may need to change as the available space changes.</p>
<div class="ag-grid">
<article class="ag-card"><h3>Desktop</h3><p>Check overall balance, content width, whitespace, alignment, and whether wide layouts feel intentional rather than stretched.</p></article>
<article class="ag-card"><h3>Tablet</h3><p>Check whether columns become cramped, navigation wraps awkwardly, or images and text compete for space.</p></article>
<article class="ag-card"><h3>Mobile</h3><p>Check readability, touch target size, vertical rhythm, overflow, image crops, and whether the primary action stays easy to find.</p></article>
</div>
<h3>Example — make a two-column layout collapse cleanly</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">responsive-layout.css</span></div><pre class="ag-code"><code><span class="tok-selector">.project-layout</span> <span class="tok-punct">{</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">grid</span><span class="tok-punct">;</span>
  <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">minmax(0, 1.2fr) minmax(260px, 0.8fr)</span><span class="tok-punct">;</span>
  <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">2rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">@media (max-width: 700px)</span> <span class="tok-punct">{</span>
  <span class="tok-selector">.project-layout</span> <span class="tok-punct">{</span>
    <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">1fr</span><span class="tok-punct">;</span>
    <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1.25rem</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
<span class="tok-punct">}</span></code></pre></div>
<p><strong>Test it:</strong> temporarily make the browser narrow, then widen it. If content gets squeezed before the media query activates, consider changing the breakpoint or using a more flexible grid.</p>
</section>
<section class="ag-section">
<h2>07 / How to give feedback that helps</h2>
<p>Use this repeatable sentence structure when responding to a classmate. It keeps feedback grounded in an observable design choice and a project goal.</p>
<div class="ag-card">
<p><strong>I noticed…</strong> Name a specific element or behavior.</p>
<p><strong>I expected…</strong> Explain what you thought would happen or what you thought was most important.</p>
<p><strong>Because…</strong> Connect your observation to the audience, task, or visual hierarchy.</p>
<p><strong>You could test…</strong> Suggest one concrete revision or comparison.</p>
</div>
<p><strong>Example:</strong> “I noticed the three cards have equally strong titles and buttons. I expected one story to be the featured item because it appears first. Because all three compete equally, the priority is unclear. You could test a featured card or stronger heading hierarchy and compare the result.”</p>
<div class="ag-callout"><strong>Designer’s role:</strong> listen, ask clarifying questions, and take notes. You do not need to accept every suggestion. You are responsible for deciding which feedback best serves the project goals and explaining why.</div>
</section>
<section class="ag-section">
<h2>08 / In-class assignment — Critique, prioritize, revise</h2>
<p>Use your current Project 1 interface. You will present the design, receive peer feedback, choose the most important changes, and document the revision.</p>
<div class="ag-steps">
<div class="ag-step"><span class="ag-number">1</span><div><h3>Prepare a short walkthrough</h3><p>Show the main page or prototype. State the audience, purpose, and primary action in two or three sentences.</p></div></div>
<div class="ag-step"><span class="ag-number">2</span><div><h3>Collect peer observations</h3><p>Ask at least two classmates to describe the first thing they notice, one point of confusion, and one thing that works well.</p></div></div>
<div class="ag-step"><span class="ag-number">3</span><div><h3>Make a revision list</h3><p>Record at least three observations. Label each P1 (must fix), P2 (should improve), or P3 (polish). Explain the priority.</p></div></div>
<div class="ag-step"><span class="ag-number">4</span><div><h3>Revise at least two items</h3><p>Implement at least two meaningful changes. At least one should address hierarchy, navigation, responsive behavior, readability, or accessibility.</p></div></div>
<div class="ag-step"><span class="ag-number">5</span><div><h3>Compare and reflect</h3><p>Capture before-and-after screenshots or prototype states. Write a short note explaining what changed, which feedback informed it, and what you would test next.</p></div></div>
</div>
<h3>Deliverables</h3>
<ul>
<li>Current Project 1 design or prototype.</li>
<li>Peer critique notes from at least two classmates.</li>
<li>A prioritized list of at least three potential improvements.</li>
<li>At least two implemented revisions.</li>
<li>Before-and-after evidence and a brief reflection.</li>
</ul>
<div class="ag-callout amber"><strong>Submission reminder:</strong> show the changes, not just describe them. Screenshots, prototype links, or clearly labeled before-and-after states help demonstrate what you learned from critique.</div>
</section>
<section class="ag-section">
<h2>09 / Critique worksheet</h2>
<p>Use these questions as a guide during peer review. Be specific and refer to an actual part of the interface whenever possible.</p>
<div class="ag-table-wrap">MADTINKERBLOCKTOKEN0END</div>
</section>
<section class="ag-section">
<h2>10 / Final self-check</h2>
<p>Before you finish, review the project against this checklist.</p>
<ul>
<li>The audience, purpose, and primary action are clear.</li>
<li>The visual hierarchy guides attention in a useful order.</li>
<li>Typography and line length support comfortable reading.</li>
<li>Navigation labels and interactions are understandable.</li>
<li>The layout has been checked at desktop, tablet, and mobile widths.</li>
<li>Keyboard focus is visible and the interface can be navigated without a mouse.</li>
<li>Feedback has been prioritized instead of treated as a list of mandatory opinions.</li>
<li>At least two meaningful revisions are documented with before-and-after evidence.</li>
<li>The reflection explains what changed and what should be tested next.</li>
</ul>
</section>
<section class="ag-section" id="instructor-layout-code">
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;margin-bottom:18px;">
<p style="margin:0 0 6px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h2 style="margin:0 0 8px;">Instructor Layout Code — Step by Step</h2>
<p style="margin:0;">Use this worked example to model how to critique an interface, translate feedback into specific changes, and verify the result. The sample is intentionally small so students can follow the reasoning from problem to revision.</p>
</div>
<div class="ag-steps">
<div class="ag-step"><span class="ag-number">1</span><div><h3>Present the sample problem</h3><p>Show a simple project page. Ask students to identify what they notice first, whether the page has a clear purpose, and whether the action is easy to find.</p></div></div>
<div class="ag-step"><span class="ag-number">2</span><div><h3>Separate observation from assumption</h3><p>Write down what is visible before interpreting it. “The button uses the same color as the background” is an observation; “users will never click it” is an assumption that needs testing.</p></div></div>
<div class="ag-step"><span class="ag-number">3</span><div><h3>Make a priority list</h3><p>Identify whether each issue blocks the task, causes friction, or is simply optional polish. Choose one high-value change to model.</p></div></div>
<div class="ag-step"><span class="ag-number">4</span><div><h3>Revise hierarchy and spacing</h3><p>Use a stronger heading scale, readable text width, consistent spacing, and a clearly differentiated primary action.</p></div></div>
<div class="ag-step"><span class="ag-number">5</span><div><h3>Add responsive behavior</h3><p>Demonstrate how a multi-column layout can collapse at a suitable breakpoint. Test it in the browser instead of assuming the breakpoint is correct.</p></div></div>
<div class="ag-step"><span class="ag-number">6</span><div><h3>Verify and document</h3><p>Repeat the original critique after revision. Ask whether the change addresses the original issue and what evidence would show that it works better.</p></div></div>
</div>
<div class="ag-callout amber"><strong>Teaching note:</strong> Do not present the revised version as the one correct design. The purpose is to model a defensible process: observe, explain, prioritize, test, and reflect.</div>
<section class="ag-section">
<h3>Instructor example A — A deliberately weak starting point</h3>
<p>This example intentionally uses similar heading sizes, a long text line, minimal spacing, and an unclear action. Ask students to critique it before showing the improved version.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">before.html</span></div><pre class="ag-code"><code><span class="tok-tag">&lt;main</span> <span class="tok-attr">class</span>=<span class="tok-string">"project"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;h1&gt;</span>Design for Everyone<span class="tok-tag">&lt;/h1&gt;</span>
  <span class="tok-tag">&lt;h2&gt;</span>Design for Everyone<span class="tok-tag">&lt;/h2&gt;</span>
  <span class="tok-tag">&lt;p&gt;</span>
    We make digital experiences for people. This project explores
    simple ways to help people find information and complete tasks
    online. Our goal is to make the experience easier to understand.
  <span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"#"</span><span class="tok-tag">&gt;</span>Click here<span class="tok-tag">&lt;/a&gt;</span>
<span class="tok-tag">&lt;/main&gt;</span></code></pre></div>
<p><strong>Ask the class:</strong> Why are there two nearly identical headings? What does “Click here” tell us? What should the visitor do next? What is missing from the content structure?</p>
</section>
<section class="ag-section">
<h3>Instructor example B — Improve the structure and wording</h3>
<p>Revise the HTML so the page has one main heading, one descriptive paragraph, and an action label that explains its destination. The label should make sense out of context too.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">after.html</span></div><pre class="ag-code"><code><span class="tok-tag">&lt;main</span> <span class="tok-attr">class</span>=<span class="tok-string">"project"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"eyebrow"</span><span class="tok-tag">&gt;</span>Interface Design Case Study<span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;h1&gt;</span>Design for Everyone<span class="tok-tag">&lt;/h1&gt;</span>
  <span class="tok-tag">&lt;p</span> <span class="tok-attr">class</span>=<span class="tok-string">"intro"</span><span class="tok-tag">&gt;</span>
    A study in making digital information easier to find,
    understand, and use across screen sizes.
  <span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;a</span> <span class="tok-attr">class</span>=<span class="tok-string">"button"</span>
     <span class="tok-attr">href</span>=<span class="tok-string">"#case-study"</span><span class="tok-tag">&gt;</span>
    Read the case study
  <span class="tok-tag">&lt;/a&gt;</span>
<span class="tok-tag">&lt;/main&gt;</span></code></pre></div>
<p>Point out that the improvement is not only visual. The content structure and action wording are clearer. In a real project, verify that <code class="ag-inline">#case-study</code> points to an existing element or replace it with the correct destination.</p>
</section>
<section class="ag-section">
<h3>Instructor example C — Apply visual hierarchy and reading width</h3>
<p>Demonstrate the CSS after students have identified the issues. Explain each rule as you add it and ask what would happen if you removed it.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">revision.css</span></div><pre class="ag-code"><code><span class="tok-selector">:root</span> <span class="tok-punct">{</span>
  <span class="tok-prop">--ink</span><span class="tok-punct">:</span> <span class="tok-value">#172033</span><span class="tok-punct">;</span>
  <span class="tok-prop">--muted</span><span class="tok-punct">:</span> <span class="tok-value">#596579</span><span class="tok-punct">;</span>
  <span class="tok-prop">--accent</span><span class="tok-punct">:</span> <span class="tok-value">#b8f34b</span><span class="tok-punct">;</span>
  <span class="tok-prop">--space</span><span class="tok-punct">:</span> <span class="tok-num">1.25rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.project</span> <span class="tok-punct">{</span>
  <span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">1100px</span><span class="tok-punct">;</span>
  <span class="tok-prop">margin-inline</span><span class="tok-punct">:</span> <span class="tok-value">auto</span><span class="tok-punct">;</span>
  <span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-value">clamp(1.25rem, 5vw, 4rem)</span><span class="tok-punct">;</span>
  <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">var(--ink)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.eyebrow</span> <span class="tok-punct">{</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">0.8rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-weight</span><span class="tok-punct">:</span> <span class="tok-num">800</span><span class="tok-punct">;</span>
  <span class="tok-prop">letter-spacing</span><span class="tok-punct">:</span> <span class="tok-num">0.1em</span><span class="tok-punct">;</span>
  <span class="tok-prop">text-transform</span><span class="tok-punct">:</span> <span class="tok-value">uppercase</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.project h1</span> <span class="tok-punct">{</span>
  <span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">12ch</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-value">clamp(2.4rem, 6vw, 4.8rem)</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">1.05</span><span class="tok-punct">;</span>
  <span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-num">0.5rem</span> <span class="tok-num">0</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.intro</span> <span class="tok-punct">{</span>
  <span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">60ch</span><span class="tok-punct">;</span>
  <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">var(--muted)</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-size</span><span class="tok-punct">:</span> <span class="tok-num">1.125rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">line-height</span><span class="tok-punct">:</span> <span class="tok-num">1.7</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<p><strong>Explain the decisions:</strong> <code class="ag-inline">max-width</code> limits line length, <code class="ag-inline">clamp()</code> keeps the heading responsive, the custom properties centralize repeated colors, and spacing separates the eyebrow, heading, and intro.</p>
</section>
<section class="ag-section">
<h3>Instructor example D — Style the action and add keyboard focus</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">button.css</span></div><pre class="ag-code"><code><span class="tok-selector">.button</span> <span class="tok-punct">{</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">inline-flex</span><span class="tok-punct">;</span>
  <span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">center</span><span class="tok-punct">;</span>
  <span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">0.85rem</span> <span class="tok-num">1.1rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">var(--accent)</span><span class="tok-punct">;</span>
  <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">var(--ink)</span><span class="tok-punct">;</span>
  <span class="tok-prop">font-weight</span><span class="tok-punct">:</span> <span class="tok-num">800</span><span class="tok-punct">;</span>
  <span class="tok-prop">text-decoration</span><span class="tok-punct">:</span> <span class="tok-value">none</span><span class="tok-punct">;</span>
  <span class="tok-prop">border-radius</span><span class="tok-punct">:</span> <span class="tok-num">0.5rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">transition</span><span class="tok-punct">:</span> <span class="tok-value">transform 180ms ease</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.button:hover</span> <span class="tok-punct">{</span>
  <span class="tok-prop">transform</span><span class="tok-punct">:</span> <span class="tok-value">translateY(-2px)</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">.button:focus-visible</span> <span class="tok-punct">{</span>
  <span class="tok-prop">outline</span><span class="tok-punct">:</span> <span class="tok-num">3px</span> <span class="tok-value">solid</span> <span class="tok-value">#2563eb</span><span class="tok-punct">;</span>
  <span class="tok-prop">outline-offset</span><span class="tok-punct">:</span> <span class="tok-num">4px</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<p>Ask students to test the button with the mouse and with the keyboard. The hover effect is optional polish; clear wording, adequate target size, and visible focus are more fundamental.</p>
</section>
<section class="ag-section">
<h3>Instructor example E — Make the layout responsive</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">responsive.css</span></div><pre class="ag-code"><code><span class="tok-selector">.case-study</span> <span class="tok-punct">{</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">grid</span><span class="tok-punct">;</span>
  <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">minmax(0, 1fr) minmax(0, 1fr)</span><span class="tok-punct">;</span>
  <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">2rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-selector">@media (max-width: 700px)</span> <span class="tok-punct">{</span>
  <span class="tok-selector">.case-study</span> <span class="tok-punct">{</span>
    <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">1fr</span><span class="tok-punct">;</span>
    <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1.25rem</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
<span class="tok-punct">}</span></code></pre></div>
<p><strong>Teaching prompt:</strong> resize the browser until the two columns become uncomfortable. Move the breakpoint if necessary. Explain that a breakpoint should respond to the content, not simply copy a device’s advertised dimensions.</p>
</section>
<section class="ag-section">
<h3>Instructor example F — Model the revision log</h3>
<p>Have students document why each change was made. This makes the process visible and helps distinguish thoughtful revision from random tweaking.</p>
<div class="ag-table-wrap">MADTINKERBLOCKTOKEN1END</div>
</section>
<section class="ag-section">
<h3>Instructor facilitation checklist</h3>
<ul>
<li>Model a respectful critique before students begin peer review.</li>
<li>Ask for evidence from the actual interface rather than general preferences.</li>
<li>Make each reviewer identify one strength and one actionable opportunity.</li>
<li>Ensure students separate feedback they heard from the revisions they chose.</li>
<li>Ask students to explain why a revision supports the audience or project goal.</li>
<li>Require a second check after revisions; do not assume a change fixed the problem.</li>
</ul>
</section>
</section>
<footer class="ag-footer"><p><strong>AMDE 355 · Advanced Web Design</strong> — Week 08</p><p>Project 1 Critique &amp; Revision · Observe carefully, prioritize thoughtfully, and revise with evidence.</p></footer>
</div>
{:/nomarkdown}
