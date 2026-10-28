---
layout: teaching-post
title: AMDE 355 - User Flows, Navigation &amp; Interaction Design (Week 9)
slug: amde-355-user-flows-navigation-interaction-design-week-9
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68213
source_url: https://nuggetofjoy.com/amde-355-user-flows-navigation-interaction-design-week-9/
author: admin
categories:
- AMDE 355 ADVANCED WEB DESIGN
tags: []
---

<div class="amde-grid-lesson">

<section class="ag-hero">
<p class="ag-eyebrow">AMDE 355 · Advanced Web Design · Week 09</p>
<h2>User Flows, Navigation &amp; Interaction Design.</h2>
<p>A good interface helps people understand where they are, what they can do, and what will happen next. This week, you’ll map a user journey, organize navigation, design interaction states, and test whether the interface supports a clear path toward a goal.</p>
<div class="ag-chips"><span class="ag-chip">User flows</span><span class="ag-chip">Information architecture</span><span class="ag-chip">Navigation systems</span><span class="ag-chip">Interaction states</span></div>
</section>
<section class="ag-section">
<h2>01 / What is a user flow?</h2>
<p>A user flow is a sequence of steps a person takes to accomplish a goal in a digital product. It describes the route through screens, decisions, and actions—not just how the screens look individually.</p>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">01</span><h3>Start with a goal</h3><p>What is the person trying to accomplish? Examples include finding a project, booking an appointment, or submitting a form.</p></article>
<article class="ag-card"><span class="ag-number">02</span><h3>Map the steps</h3><p>Show the screens or states the person encounters, the choices they make, and the actions that move them forward.</p></article>
<article class="ag-card"><span class="ag-number">03</span><h3>Check the outcome</h3><p>Make sure the flow ends with a clear result, confirmation, or next step—and provides a way to recover from errors.</p></article>
</div>
<div class="ag-callout"><strong>Design question:</strong> Can a new visitor reach the primary goal without guessing, getting stuck, or taking unnecessary steps?</div>
<h3>Example — a portfolio visitor wants to contact the designer</h3>
<div class="ag-card">
<p><strong>Home page</strong> → <strong>Projects</strong> → <strong>Project detail</strong> → <strong>Contact</strong> → <strong>Confirmation</strong></p>
<p>At each step, ask: What does the visitor know? What can they do? What should the interface communicate next?</p>
</div>
</section>
<section class="ag-section">
<h2>02 / Map the flow before designing the screens</h2>
<p>Start with plain-language steps. You do not need a polished diagram to identify missing steps or confusing decisions. A simple flow is easier to discuss and revise early.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">simple-user-flow.txt</span></div><pre class="ag-code"><code><span class="tok-comment">GOAL: Find a project and contact the designer</span>

<span class="tok-value">[Home]</span>
   |
   v
<span class="tok-value">[Browse projects]</span>
   |
   v
<span class="tok-value">[Open project detail]</span>
   |
   v
<span class="tok-value">[Select Contact]</span>
   |
   v
<span class="tok-value">[Complete contact form]</span>
   |
   v
<span class="tok-value">[Confirmation message]</span></code></pre></div>
<p>This flow is a starting point, not the only possible solution. A visitor might contact the designer directly from the home page, or use a persistent navigation link. Compare alternatives and decide which best serves the audience and task.</p>
<h3>Add a decision and recovery path</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">flow-with-decision.txt</span></div><pre class="ag-code"><code><span class="tok-value">[Contact form]</span>
   |
   v
<span class="tok-value">{Required fields complete?}</span>
   | Yes                 | No
   v                     v
<span class="tok-value">[Submit form]</span>       <span class="tok-value">[Show helpful error]</span>
   |                     |
   v                     v
<span class="tok-value">[Confirmation]</span>      <span class="tok-value">[Return to missing field]</span></code></pre></div>
<div class="ag-callout amber"><strong>Important:</strong> error states are part of the flow. A user should know what went wrong, what needs attention, and how to continue without losing their work unnecessarily.</div>
</section>
<section class="ag-section">
<h2>03 / Information architecture: organize before decorating</h2>
<p>Information architecture (IA) is the way content and features are organized, labeled, and connected. Good IA helps people predict where information lives and understand how sections relate to one another.</p>
<div class="ag-grid">
<article class="ag-card"><h3>Organization</h3><p>Group related content in a way that makes sense to the intended audience.</p></article>
<article class="ag-card"><h3>Labeling</h3><p>Use concise, familiar words for pages, links, categories, and actions.</p></article>
<article class="ag-card"><h3>Navigation</h3><p>Give people a clear way to move between sections and understand their current location.</p></article>
</div>
<h3>Example — a simple portfolio site map</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">site-map.txt</span></div><pre class="ag-code"><code><span class="tok-value">Home</span>
<span class="tok-punct">├──</span> <span class="tok-value">Work</span>
<span class="tok-punct">│   ├──</span> <span class="tok-value">Project A</span>
<span class="tok-punct">│   ├──</span> <span class="tok-value">Project B</span>
<span class="tok-punct">│   └──</span> <span class="tok-value">Project C</span>
<span class="tok-punct">├──</span> <span class="tok-value">About</span>
<span class="tok-punct">└──</span> <span class="tok-value">Contact</span></code></pre></div>
<p>Ask whether “Work,” “Projects,” or “Portfolio” is the clearest label for the audience. A label that sounds clever to the designer may be less useful than a familiar label that people immediately understand.</p>
</section>
<section class="ag-section">
<h2>04 / Navigation patterns and responsive behavior</h2>
<p>Navigation should be predictable, consistent, and appropriate to the amount of content. A small portfolio may need only a few links. A larger site may need categories, secondary navigation, or search.</p>
<div class="ag-grid">
<article class="ag-card"><h3>Primary navigation</h3><p>Provides access to the most important sections of the site. Keep labels clear and the number of choices manageable.</p></article>
<article class="ag-card"><h3>Contextual navigation</h3><p>Links related to the content currently being viewed, such as related projects or a next-step action.</p></article>
<article class="ag-card"><h3>Mobile navigation</h3><p>Preserves access to important sections when space is limited. Do not hide essential destinations without a clear alternative.</p></article>
</div>
<h3>Example — semantic navigation markup</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">navigation.html</span></div><pre class="ag-code"><code><span class="tok-tag">&lt;header</span> <span class="tok-attr">class</span>=<span class="tok-string">"site-header"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;a</span> <span class="tok-attr">class</span>=<span class="tok-string">"site-logo"</span> <span class="tok-attr">href</span>=<span class="tok-string">"/"</span><span class="tok-tag">&gt;</span>Studio Name<span class="tok-tag">&lt;/a&gt;</span>
  <span class="tok-tag">&lt;nav</span> <span class="tok-attr">aria-label</span>=<span class="tok-string">"Main navigation"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;ul&gt;</span>
      <span class="tok-tag">&lt;li&gt;&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"/work/"</span><span class="tok-tag">&gt;</span>Work<span class="tok-tag">&lt;/a&gt;&lt;/li&gt;</span>
      <span class="tok-tag">&lt;li&gt;&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"/about/"</span><span class="tok-tag">&gt;</span>About<span class="tok-tag">&lt;/a&gt;&lt;/li&gt;</span>
      <span class="tok-tag">&lt;li&gt;&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"/contact/"</span><span class="tok-tag">&gt;</span>Contact<span class="tok-tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tok-tag">&lt;/ul&gt;</span>
  <span class="tok-tag">&lt;/nav&gt;</span>
<span class="tok-tag">&lt;/header&gt;</span></code></pre></div>
<p>The <code class="ag-inline">nav</code> element identifies a navigation region. The accessible label clarifies its purpose, and each link has a meaningful destination. Use real URLs for the project rather than leaving placeholder links in the final version.</p>
<h3>Responsive navigation example</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">navigation.css</span></div><pre class="ag-code"><code><span class="tok-selector">.site-header</span> <span class="tok-punct">{</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span>
  <span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">center</span><span class="tok-punct">;</span>
  <span class="tok-prop">justify-content</span><span class="tok-punct">:</span> <span class="tok-value">space-between</span><span class="tok-punct">;</span>
  <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1.5rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.site-header ul</span> <span class="tok-punct">{</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span>
  <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">list-style</span><span class="tok-punct">:</span> <span class="tok-value">none</span><span class="tok-punct">;</span>
  <span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
  <span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">@media (max-width: 640px)</span> <span class="tok-punct">{</span>
  <span class="tok-selector">.site-header</span> <span class="tok-punct">{</span>
    <span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">flex-start</span><span class="tok-punct">;</span>
    <span class="tok-prop">flex-direction</span><span class="tok-punct">:</span> <span class="tok-value">column</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
  <span class="tok-selector">.site-header ul</span> <span class="tok-punct">{</span>
    <span class="tok-prop">flex-wrap</span><span class="tok-punct">:</span> <span class="tok-value">wrap</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
<span class="tok-punct">}</span></code></pre></div>
<p>This is a simple responsive pattern, not a universal navigation solution. Resize the browser and check whether the links remain visible, readable, and easy to tap.</p>
</section>
<section class="ag-section">
<h2>05 / Interaction states: show what the interface is doing</h2>
<p>Every interactive control has states. At minimum, consider its default appearance, hover appearance, keyboard focus, active or pressed state, disabled state when relevant, and feedback after an action.</p>
<div class="ag-grid">
<article class="ag-card"><h3>Default</h3><p>The control is available and ready to use.</p></article>
<article class="ag-card"><h3>Hover / Focus</h3><p>The interface communicates which element is under the pointer or has keyboard focus.</p></article>
<article class="ag-card"><h3>Feedback</h3><p>The interface confirms success or explains an error and what to do next.</p></article>
</div>
<h3>Example — button states</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">button-states.css</span></div><pre class="ag-code"><code><span class="tok-selector">.button</span> <span class="tok-punct">{</span>
  <span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">0.8rem</span> <span class="tok-num">1.1rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">border</span><span class="tok-punct">:</span> <span class="tok-num">2px</span> <span class="tok-value">solid</span> <span class="tok-value">#172033</span><span class="tok-punct">;</span>
  <span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">#b8f34b</span><span class="tok-punct">;</span>
  <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">#172033</span><span class="tok-punct">;</span>
  <span class="tok-prop">cursor</span><span class="tok-punct">:</span> <span class="tok-value">pointer</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.button:hover</span> <span class="tok-punct">{</span>
  <span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">#a5df35</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.button:focus-visible</span> <span class="tok-punct">{</span>
  <span class="tok-prop">outline</span><span class="tok-punct">:</span> <span class="tok-num">3px</span> <span class="tok-value">solid</span> <span class="tok-value">#2563eb</span><span class="tok-punct">;</span>
  <span class="tok-prop">outline-offset</span><span class="tok-punct">:</span> <span class="tok-num">4px</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.button:disabled</span> <span class="tok-punct">{</span>
  <span class="tok-prop">opacity</span><span class="tok-punct">:</span> <span class="tok-num">0.5</span><span class="tok-punct">;</span>
  <span class="tok-prop">cursor</span><span class="tok-punct">:</span> <span class="tok-value">not-allowed</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<p>Explain that hover is not a replacement for keyboard focus. A disabled control should also communicate that it is unavailable and should not be the only way to explain why an action cannot be completed.</p>
</section>
<section class="ag-section">
<h2>06 / Feedback, forms, and error prevention</h2>
<p>Good interaction design anticipates questions and helps people recover. Form labels should be clear, errors should identify the problem, and successful actions should produce a useful confirmation.</p>
<h3>Example — a form field with a visible label</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">form.html</span></div><pre class="ag-code"><code><span class="tok-tag">&lt;form</span> <span class="tok-attr">action</span>=<span class="tok-string">"/contact/"</span> <span class="tok-attr">method</span>=<span class="tok-string">"post"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;label</span> <span class="tok-attr">for</span>=<span class="tok-string">"email"</span><span class="tok-tag">&gt;</span>Email address<span class="tok-tag">&lt;/label&gt;</span>
  <span class="tok-tag">&lt;input</span> <span class="tok-attr">id</span>=<span class="tok-string">"email"</span> <span class="tok-attr">name</span>=<span class="tok-string">"email"</span>
    <span class="tok-attr">type</span>=<span class="tok-string">"email"</span> <span class="tok-attr">autocomplete</span>=<span class="tok-string">"email"</span> <span class="tok-attr">required</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;button</span> <span class="tok-attr">type</span>=<span class="tok-string">"submit"</span><span class="tok-tag">&gt;</span>Send message<span class="tok-tag">&lt;/button&gt;</span>
<span class="tok-tag">&lt;/form&gt;</span></code></pre></div>
<p>The label is explicitly connected to the input through matching <code class="ag-inline">for</code> and <code class="ag-inline">id</code> values. The placeholder should not be used as the only label because it disappears as people type.</p>
<h3>Example — a helpful confirmation message</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">confirmation.html</span></div><pre class="ag-code"><code><span class="tok-tag">&lt;p</span> <span class="tok-attr">role</span>=<span class="tok-string">"status"</span><span class="tok-tag">&gt;</span>
  Thanks — your message has been received.
  We’ll respond as soon as we can.
<span class="tok-tag">&lt;/p&gt;</span></code></pre></div>
<p>In a working application, the confirmation should only appear after the form has actually been accepted. Do not show a success message merely because someone clicked the button if submission failed.</p>
</section>
<section class="ag-section">
<h2>07 / Accessibility is part of the flow</h2>
<p>Accessibility is not a final decoration pass. It affects whether people can perceive information, navigate between steps, understand controls, and recover from mistakes.</p>
<ul>
<li>Use semantic HTML elements for navigation, headings, forms, buttons, and links.</li>
<li>Use descriptive link text rather than repeated “read more” or “click here” labels where possible.</li>
<li>Keep visible keyboard focus indicators.</li>
<li>Ensure text and interactive controls have sufficient contrast.</li>
<li>Associate form labels and errors with the relevant fields.</li>
<li>Do not communicate an error or selected state through color alone.</li>
<li>Test the interface without a mouse.</li>
</ul>
<div class="ag-callout"><strong>Quick test:</strong> put your mouse aside. Use Tab, Shift+Tab, Enter, and Space where appropriate. Can you understand your location, reach the main task, and identify the next step?</div>
</section>
<section class="ag-section">
<h2>08 / In-class assignment — Map and improve a user flow</h2>
<p>Choose the primary task for your Project 1 interface. Create a user flow, examine the navigation, and revise the design so a visitor can complete the task with fewer points of confusion.</p>
<div class="ag-steps">
<div class="ag-step"><span class="ag-number">1</span><div><h3>Write the user goal</h3><p>Use one sentence: “A visitor wants to…” Keep it specific enough that you can tell whether the task is complete.</p></div></div>
<div class="ag-step"><span class="ag-number">2</span><div><h3>Draw the current flow</h3><p>Map each screen, decision, and action from entry to outcome. Include an error or recovery path if the task involves a form or decision.</p></div></div>
<div class="ag-step"><span class="ag-number">3</span><div><h3>Audit labels and navigation</h3><p>Identify unclear labels, duplicate destinations, missing links, unnecessary steps, or places where the next action is hard to find.</p></div></div>
<div class="ag-step"><span class="ag-number">4</span><div><h3>Revise one interaction</h3><p>Improve one meaningful part of the flow. This may be navigation wording, button states, a form label, an error message, or a confirmation.</p></div></div>
<div class="ag-step"><span class="ag-number">5</span><div><h3>Test with a classmate</h3><p>Give your classmate the goal but do not explain how to complete it. Observe where they hesitate, click, or ask a question. Do not guide them unless they are completely stuck.</p></div></div>
<div class="ag-step"><span class="ag-number">6</span><div><h3>Document the result</h3><p>Submit the flow, a screenshot or prototype of the revised interaction, and a short reflection on what you learned from the test.</p></div></div>
</div>
<h3>Deliverables</h3>
<ul>
<li>One-sentence user goal and intended audience.</li>
<li>A labeled user-flow diagram or step-by-step flow map.</li>
<li>One identified friction point and an explanation of its impact.</li>
<li>One implemented interface revision.</li>
<li>A short usability-test note: task, observed hesitation, and next revision.</li>
</ul>
<div class="ag-callout amber"><strong>Keep it focused:</strong> you do not need to rebuild the entire site. One clearly explained improvement supported by a real test is more valuable than several random visual changes.</div>
</section>
<section class="ag-section">
<h2>09 / Peer testing worksheet</h2>
<p>Use this worksheet when a classmate tests your flow. Record what they do and say, not only what you think they should have done.</p>
<div class="ag-table-wrap">MADTINKERBLOCKTOKEN0END</div>
</section>
<section class="ag-section">
<h2>10 / Final self-check</h2>
<ul>
<li>The user goal and intended audience are clear.</li>
<li>The flow includes the steps needed to reach a meaningful outcome.</li>
<li>Navigation labels are familiar, specific, and consistent.</li>
<li>Interactive controls have visible and understandable states.</li>
<li>Forms have visible labels and helpful error or confirmation feedback.</li>
<li>The design has been tested at desktop, tablet, and mobile widths.</li>
<li>The main task can be attempted using a keyboard.</li>
<li>A classmate tested the flow without being coached through it.</li>
<li>The revision is based on observed evidence and the next test is documented.</li>
</ul>
</section>
<section class="ag-section" id="instructor-layout-code">
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;margin-bottom:18px;">
<p style="margin:0 0 6px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h2 style="margin:0 0 8px;">Instructor Layout Code — Step by Step</h2>
<p style="margin:0;">Model how to move from a goal to a flow map, then translate the flow into semantic interface code and test it. Use the examples one at a time; ask students to predict the result before showing the next step.</p>
</div>
<div class="ag-steps">
<div class="ag-step"><span class="ag-number">1</span><div><h3>State the goal before choosing screens</h3><p>Write the goal in plain language. For example: “A visitor wants to view a project and contact the designer.” Ask what information and actions are necessary—and what can be removed.</p></div></div>
<div class="ag-step"><span class="ag-number">2</span><div><h3>Draw the happy path</h3><p>Map the simplest successful route first. Then add decisions, errors, cancellation, and recovery. Avoid drawing every possible edge case before the basic flow is understandable.</p></div></div>
<div class="ag-step"><span class="ag-number">3</span><div><h3>Translate flow into semantic HTML</h3><p>Use navigation, links, buttons, labels, and status messages according to their actual purpose. Semantic structure improves predictability for users and assistive technologies.</p></div></div>
<div class="ag-step"><span class="ag-number">4</span><div><h3>Style states and responsive layout</h3><p>Add hover and focus feedback, then test the same flow at narrow and wide widths. Verify that visual styling does not hide the next action.</p></div></div>
<div class="ag-step"><span class="ag-number">5</span><div><h3>Run a think-aloud test</h3><p>Ask a student to attempt the task and say what they expect at each step. The instructor should observe and take notes rather than explaining the intended interface.</p></div></div>
<div class="ag-step"><span class="ag-number">6</span><div><h3>Revise based on evidence</h3><p>Choose one observed friction point, change it, and repeat the task. Compare the second attempt with the first rather than assuming the revision was successful.</p></div></div>
</div>
<div class="ag-callout amber"><strong>Teaching note:</strong> distinguish what the tester did from why you think they did it. “The tester clicked Work twice” is an observation. “The label is confusing” is a possible explanation to investigate.</div>
<section class="ag-section">
<h3>Instructor example A — Build the flow from a goal</h3>
<p>Start by writing the task in a sentence. Then list the required steps and outcome. This simple representation can be created on a whiteboard before opening a design tool.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">flow-planning.txt</span></div><pre class="ag-code"><code><span class="tok-comment">USER GOAL</span>
<span class="tok-value">Find a project and send a message to its designer.</span>

<span class="tok-comment">HAPPY PATH</span>
<span class="tok-value">Home</span> <span class="tok-punct">→</span> <span class="tok-value">Work</span> <span class="tok-punct">→</span> <span class="tok-value">Project detail</span>
<span class="tok-punct">→</span> <span class="tok-value">Contact form</span> <span class="tok-punct">→</span> <span class="tok-value">Confirmation</span>

<span class="tok-comment">QUESTIONS TO TEST</span>
<span class="tok-punct">-</span> Can visitors find Work?
<span class="tok-punct">-</span> Is Contact available when needed?
<span class="tok-punct">-</span> Does the form explain required fields?
<span class="tok-punct">-</span> Is successful submission confirmed?</code></pre></div>
</section>
<section class="ag-section">
<h3>Instructor example B — Implement the navigation</h3>
<p>Use this complete header as a concrete example. Explain that the navigation links move to pages, while buttons are generally used to trigger actions. Replace the example paths with destinations that exist in the actual project.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">header.html</span></div><pre class="ag-code"><code><span class="tok-tag">&lt;header</span> <span class="tok-attr">class</span>=<span class="tok-string">"site-header"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;a</span> <span class="tok-attr">class</span>=<span class="tok-string">"logo"</span> <span class="tok-attr">href</span>=<span class="tok-string">"/"</span><span class="tok-tag">&gt;</span>Studio Name<span class="tok-tag">&lt;/a&gt;</span>
  <span class="tok-tag">&lt;nav</span> <span class="tok-attr">aria-label</span>=<span class="tok-string">"Main navigation"</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;ul&gt;</span>
      <span class="tok-tag">&lt;li&gt;&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"/work/"</span><span class="tok-tag">&gt;</span>Work<span class="tok-tag">&lt;/a&gt;&lt;/li&gt;</span>
      <span class="tok-tag">&lt;li&gt;&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"/about/"</span><span class="tok-tag">&gt;</span>About<span class="tok-tag">&lt;/a&gt;&lt;/li&gt;</span>
      <span class="tok-tag">&lt;li&gt;&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"/contact/"</span><span class="tok-tag">&gt;</span>Contact<span class="tok-tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tok-tag">&lt;/ul&gt;</span>
  <span class="tok-tag">&lt;/nav&gt;</span>
<span class="tok-tag">&lt;/header&gt;</span></code></pre></div>
<p><strong>Discuss:</strong> Would “Explore,” “Discover,” or “Work” be clearest here? Ask students to justify the label based on the visitor’s goal, not only personal preference.</p>
</section>
<section class="ag-section">
<h3>Instructor example C — Style the navigation and focus state</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">header.css</span></div><pre class="ag-code"><code><span class="tok-selector">.site-header</span> <span class="tok-punct">{</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span>
  <span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">center</span><span class="tok-punct">;</span>
  <span class="tok-prop">justify-content</span><span class="tok-punct">:</span> <span class="tok-value">space-between</span><span class="tok-punct">;</span>
  <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1.5rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.site-header ul</span> <span class="tok-punct">{</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">flex</span><span class="tok-punct">;</span>
  <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">1rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">list-style</span><span class="tok-punct">:</span> <span class="tok-value">none</span><span class="tok-punct">;</span>
  <span class="tok-prop">margin</span><span class="tok-punct">:</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
  <span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.site-header a:focus-visible</span> <span class="tok-punct">{</span>
  <span class="tok-prop">outline</span><span class="tok-punct">:</span> <span class="tok-num">3px</span> <span class="tok-value">solid</span> <span class="tok-value">#2563eb</span><span class="tok-punct">;</span>
  <span class="tok-prop">outline-offset</span><span class="tok-punct">:</span> <span class="tok-num">4px</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">@media (max-width: 640px)</span> <span class="tok-punct">{</span>
  <span class="tok-selector">.site-header</span> <span class="tok-punct">{</span>
    <span class="tok-prop">align-items</span><span class="tok-punct">:</span> <span class="tok-value">flex-start</span><span class="tok-punct">;</span>
    <span class="tok-prop">flex-direction</span><span class="tok-punct">:</span> <span class="tok-value">column</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
  <span class="tok-selector">.site-header ul</span> <span class="tok-punct">{</span>
    <span class="tok-prop">flex-wrap</span><span class="tok-punct">:</span> <span class="tok-value">wrap</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
<span class="tok-punct">}</span></code></pre></div>
<p>Ask students to test the header with a mouse and then using Tab. Resize the browser. Is the order still logical? Are links still easy to identify and use?</p>
</section>
<section class="ag-section">
<h3>Instructor example D — Make a form error useful</h3>
<p>Explain that native HTML validation can help, but custom forms should also communicate errors in context. This static example demonstrates the kind of message to show; in a working application, connect the message to actual validation logic.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">form-error.html</span></div><pre class="ag-code"><code><span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-string">"field"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;label</span> <span class="tok-attr">for</span>=<span class="tok-string">"email"</span><span class="tok-tag">&gt;</span>Email address<span class="tok-tag">&lt;/label&gt;</span>
  <span class="tok-tag">&lt;input</span> <span class="tok-attr">id</span>=<span class="tok-string">"email"</span> <span class="tok-attr">name</span>=<span class="tok-string">"email"</span>
    <span class="tok-attr">type</span>=<span class="tok-string">"email"</span> <span class="tok-attr">aria-describedby</span>=<span class="tok-string">"email-error"</span>
    <span class="tok-attr">aria-invalid</span>=<span class="tok-string">"true"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;p</span> <span class="tok-attr">id</span>=<span class="tok-string">"email-error"</span> <span class="tok-attr">class</span>=<span class="tok-string">"error"</span><span class="tok-tag">&gt;</span>
    Enter a valid email address, such as name@example.com.
  <span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;/div&gt;</span></code></pre></div>
<p>Discuss why “Invalid input” is less helpful than a message that explains how to correct the problem. The error should be associated with the relevant field and should not rely on red color alone.</p>
</section>
<section class="ag-section">
<h3>Instructor example E — Run a quick think-aloud test</h3>
<ol>
<li>Give the tester one task, such as “Find Project B and send the designer a message.”</li>
<li>Ask the tester to say what they expect each link or control to do.</li>
<li>Do not explain where to click. Observe hesitation, backtracking, and questions.</li>
<li>Write down the exact location of the problem, not only a general judgment.</li>
<li>Make one revision and repeat the same task.</li>
</ol>
<div class="ag-card">
<p><strong>Example observation:</strong> “The tester looked for Contact in the page footer, then returned to the top navigation.”</p>
<p><strong>Possible interpretation:</strong> “The Contact link may not be visible or prominent enough where the tester expected it.”</p>
<p><strong>Revision to test:</strong> “Make Contact consistently visible in the main navigation, then repeat the task with another tester.”</p>
</div>
</section>
<section class="ag-section">
<h3>Instructor facilitation checklist</h3>
<ul>
<li>Ask students to state the user goal before they show their design.</li>
<li>Keep critique focused on observable evidence, not personal taste alone.</li>
<li>Have students test the navigation rather than only show screenshots.</li>
<li>Ensure students record at least one point of hesitation or uncertainty.</li>
<li>Ask for a reason behind every proposed revision.</li>
<li>Repeat the test after a revision and discuss what evidence changed.</li>
</ul>
</section>
</section>
<footer class="ag-footer"><p><strong>AMDE 355 · Advanced Web Design</strong> — Week 09</p><p>User Flows, Navigation &amp; Interaction Design · Make the next step clear, test the journey, and revise based on evidence.</p></footer>
</div>
