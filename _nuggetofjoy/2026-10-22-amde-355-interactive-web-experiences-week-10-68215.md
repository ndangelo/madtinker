---
layout: teaching-post
title: AMDE 355 - Interactive Web Experiences (Week 10)
slug: amde-355-interactive-web-experiences-week-10
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68215
source_url: https://nuggetofjoy.com/amde-355-interactive-web-experiences-week-10/
author: admin
categories:
- AMDE 355 ADVANCED WEB DESIGN
tags: []
---

{::nomarkdown}
<div class="amde-grid-lesson">

<!-- BEGINNER-FRIENDLY JAVASCRIPT EXPLAINER -->
<section class="lesson-card" id="javascript-basics">
<p class="eyebrow">JavaScript, without the mystery</p>
<h2>JavaScript is the part that makes something happen</h2>
<p>Think of a web page as a small stage:</p>
<ul>
<li><strong>HTML</strong> puts the things on the stage: headings, buttons, images, cards.</li>
<li><strong>CSS</strong> decides how those things look: color, size, spacing, layout.</li>
<li><strong>JavaScript</strong> makes things respond: open a panel, filter projects, update a message, or react when someone clicks.</li>
</ul>
<p>You do not need to memorize JavaScript. Start by recognizing the same simple pattern each time:</p>
<div class="code-panel">
<div class="code-label">The basic pattern</div>
<pre><code><span class="tok-comment">// 1. Find something on the page.</span>
<span class="tok-key">const</span> button = document.querySelector(<span class="tok-string">"#hello-button"</span>);

<span class="tok-comment">// 2. Listen for an action.</span>
button.addEventListener(<span class="tok-string">"click"</span>, function () {

  <span class="tok-comment">// 3. Make something happen.</span>
  alert(<span class="tok-string">"You clicked the button!"</span>);

});</code></pre>
</div>
<p><strong>Read it in plain English:</strong> “Find the element with the ID <code>hello-button</code>. When someone clicks it, show an alert.”</p>
<p>For now, focus on the three jobs: <strong>find → listen → respond.</strong> Most of the beginner interactions in this lesson use that same pattern.</p>
</section>
<section class="lesson-card" id="javascript-vocabulary">
<p class="eyebrow">A tiny vocabulary list</p>
<h2>What the JavaScript words mean</h2>
<div class="table-wrap">
MADTINKERBLOCKTOKEN0END
</div>
<p><strong>Important:</strong> JavaScript is very literal. The ID in your HTML and the selector in your JavaScript must match exactly. <code>#hello-button</code> looks for <code>id="hello-button"</code>; it does not look for a class named <code>hello-button</code>.</p>
</section>
<section class="lesson-card" id="javascript-first-example">
<p class="eyebrow">Example 1 · One click, one response</p>
<h2>Build the smallest useful interaction</h2>
<p>First, write the HTML. The button needs an ID so JavaScript can find it.</p>
<div class="code-panel">
<div class="code-label">HTML</div>
<pre><code><span class="tok-tag">&lt;button</span> <span class="tok-attr">id</span>=<span class="tok-string">"hello-button"</span><span class="tok-tag">&gt;</span>
  Say hello
<span class="tok-tag">&lt;/button&gt;</span></code></pre>
</div>
<p>Next, add the JavaScript. Place it near the end of the page, just before <code>&lt;/body&gt;</code>, so the button already exists when the script runs.</p>
<div class="code-panel">
<div class="code-label">JavaScript</div>
<pre><code><span class="tok-key">const</span> helloButton = document.querySelector(<span class="tok-string">"#hello-button"</span>);

helloButton.addEventListener(<span class="tok-string">"click"</span>, function () {
  alert(<span class="tok-string">"Hello, web designer!"</span>);
});</code></pre>
</div>
<p><strong>Try this:</strong> Change the button text and the alert message. Save, refresh the browser, and click the button again.</p>
<p><strong>Why use a name like <code>helloButton</code>?</strong> The name is for you, the person reading the code. It makes the next line easier to understand. You could call it <code>myButton</code>, but choose a name that tells you what it represents.</p>
</section>
<section class="lesson-card" id="javascript-change-page">
<p class="eyebrow">Example 2 · Change the page</p>
<h2>Make a button update text instead of showing a popup</h2>
<p>This pattern is useful for “Show more,” “Read the artist statement,” or a simple confirmation message.</p>
<div class="code-panel">
<div class="code-label">HTML</div>
<pre><code><span class="tok-tag">&lt;p</span> <span class="tok-attr">id</span>=<span class="tok-string">"status-message"</span><span class="tok-tag">&gt;</span>
  This is the original message.
<span class="tok-tag">&lt;/p&gt;</span>

<span class="tok-tag">&lt;button</span> <span class="tok-attr">id</span>=<span class="tok-string">"change-message"</span><span class="tok-tag">&gt;</span>
  Change message
<span class="tok-tag">&lt;/button&gt;</span></code></pre>
</div>
<div class="code-panel">
<div class="code-label">JavaScript</div>
<pre><code><span class="tok-key">const</span> changeButton = document.querySelector(<span class="tok-string">"#change-message"</span>);
<span class="tok-key">const</span> message = document.querySelector(<span class="tok-string">"#status-message"</span>);

changeButton.addEventListener(<span class="tok-string">"click"</span>, function () {
  message.textContent = <span class="tok-string">"The message has changed!"</span>;
});</code></pre>
</div>
<p><strong>Read it:</strong> We find two elements, listen for a click on the button, and replace the paragraph's text.</p>
<p><strong>Notice:</strong> <code>textContent</code> changes the text. It does not change the element's CSS, its size, or its color. Those are separate jobs.</p>
</section>
<section class="lesson-card" id="javascript-toggle">
<p class="eyebrow">Example 3 · Open and close</p>
<h2>Use a class to show or hide content</h2>
<p>A common beginner approach is to use JavaScript to add or remove a CSS class. CSS controls what that class looks like; JavaScript decides when the class is applied.</p>
<div class="code-panel">
<div class="code-label">HTML</div>
<pre><code><span class="tok-tag">&lt;button</span> <span class="tok-attr">id</span>=<span class="tok-string">"details-button"</span>
        <span class="tok-attr">aria-expanded</span>=<span class="tok-string">"false"</span>
        <span class="tok-attr">aria-controls</span>=<span class="tok-string">"project-details"</span><span class="tok-tag">&gt;</span>
  Show project details
<span class="tok-tag">&lt;/button&gt;</span>

<span class="tok-tag">&lt;div</span> <span class="tok-attr">id</span>=<span class="tok-string">"project-details"</span> <span class="tok-attr">class</span>=<span class="tok-string">"details-panel"</span> hidden<span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;p&gt;</span>This project explores color, movement, and memory.<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;/div&gt;</span></code></pre>
</div>
<div class="code-panel">
<div class="code-label">JavaScript</div>
<pre><code><span class="tok-key">const</span> detailsButton = document.querySelector(<span class="tok-string">"#details-button"</span>);
<span class="tok-key">const</span> detailsPanel = document.querySelector(<span class="tok-string">"#project-details"</span>);

detailsButton.addEventListener(<span class="tok-string">"click"</span>, function () {
  <span class="tok-key">const</span> isHidden = detailsPanel.hidden;

  detailsPanel.hidden = !isHidden;
  detailsButton.setAttribute(<span class="tok-string">"aria-expanded"</span>, isHidden);

  <span class="tok-key">if</span> (isHidden) {
    detailsButton.textContent = <span class="tok-string">"Hide project details"</span>;
  } <span class="tok-key">else</span> {
    detailsButton.textContent = <span class="tok-string">"Show project details"</span>;
  }
});</code></pre>
</div>
<p><strong>Plain English, line by line:</strong></p>
<ol>
<li>Find the button and the content panel.</li>
<li>When the button is clicked, check whether the panel is currently hidden.</li>
<li>If it is hidden, show it. If it is visible, hide it.</li>
<li>Update the button label so it describes the next action.</li>
<li>Update <code>aria-expanded</code> so assistive technology can tell whether the content is open.</li>
</ol>
<p>The symbol <code>!</code> means “not.” If <code>isHidden</code> is true, <code>!isHidden</code> is false. This is how the code flips between hidden and visible.</p>
</section>
<section class="lesson-card" id="javascript-debugging">
<p class="eyebrow">When it does not work</p>
<h2>Beginner debugging: check these things first</h2>
<ol>
<li><strong>Check the spelling.</strong> Does <code>id="details-button"</code> match <code>querySelector("#details-button")</code> exactly?</li>
<li><strong>Check the symbol.</strong> A class selector starts with a dot, like <code>".project-card"</code>. An ID selector starts with a hash, like <code>"#details-button"</code>.</li>
<li><strong>Check where the script lives.</strong> Put the script just before <code>&lt;/body&gt;</code> or use <code>defer</code> if the script is in the document head.</li>
<li><strong>Check the browser console.</strong> Right-click the page, choose Inspect, and open Console. Red error messages often point to the line with the problem.</li>
<li><strong>Check whether the element exists.</strong> If JavaScript cannot find the element, the variable may be <code>null</code>. This often means the selector is wrong or the script ran too early.</li>
<li><strong>Change one thing at a time.</strong> Save, refresh, test, and then make the next change.</li>
</ol>
<div class="callout">
<strong>Easy rule:</strong> Do not paste code and hope. Read the HTML ID, find the matching selector in JavaScript, and test the click. If those match, inspect the console next.
  </div>
</section>
<!-- END BEGINNER-FRIENDLY JAVASCRIPT EXPLAINER -->
<section class="ag-hero">
<p class="ag-eyebrow">AMDE 355 · Advanced Web Design · Week 10</p>
<h2>Interactive Web Experiences.</h2>
<p>Move beyond static layouts and design interfaces that respond to people. This week, you’ll explore interaction patterns, microinteractions, feedback, and simple JavaScript behaviors that make a web experience feel clear, useful, and intentional.</p>
<div class="ag-chips"><span class="ag-chip">Interaction design</span><span class="ag-chip">Microinteractions</span><span class="ag-chip">JavaScript basics</span><span class="ag-chip">Feedback &amp; states</span></div>
</section>
<section class="ag-section">
<h2>01 / What makes a website interactive?</h2>
<p>An interactive web experience responds to a user's action and communicates what happened. Interaction can be as simple as a navigation link, an expandable panel, a filterable project list, or a form that confirms a successful action. The key is not complexity; it is whether the behavior supports a real user goal.</p>
<div class="ag-grid">
<article class="ag-card"><span class="ag-number">01</span><h3>Input</h3><p>The person does something: clicks, taps, types, selects, scrolls, or uses a keyboard.</p></article>
<article class="ag-card"><span class="ag-number">02</span><h3>Response</h3><p>The interface changes in a way that makes the result visible and understandable.</p></article>
<article class="ag-card"><span class="ag-number">03</span><h3>Feedback</h3><p>The experience confirms the state, provides the next step, or explains how to recover from an error.</p></article>
</div>
<div class="ag-callout"><strong>Design question:</strong> After someone interacts with this element, can they tell what changed and what they can do next?</div>
<h3>Example — a microinteraction</h3>
<div class="ag-card">
<p><strong>Action:</strong> A visitor selects “Show project details.”</p>
<p><strong>Response:</strong> Additional project information becomes visible.</p>
<p><strong>Feedback:</strong> The control label changes to “Hide project details,” and the expanded state is communicated.</p>
</div>
</section>
<section class="ag-section">
<h2>02 / Choose an interaction that serves a purpose</h2>
<p>Before writing code, define the user need and the behavior. Avoid adding animation or interaction just because it is possible. A useful interaction reduces effort, makes information easier to explore, or provides feedback.</p>
<div class="ag-grid">
<article class="ag-card"><h3>Reveal</h3><p>Show or hide additional content when someone asks for it, such as an FAQ answer or project description.</p></article>
<article class="ag-card"><h3>Filter</h3><p>Help people narrow a set of items by category, tag, or another meaningful property.</p></article>
<article class="ag-card"><h3>Confirm</h3><p>Provide feedback after a meaningful action, such as saving a preference or submitting a form.</p></article>
</div>
<h3>Plan the interaction before coding</h3>
<div class="ag-table-wrap">MADTINKERBLOCKTOKEN1END</div>
</section>
<section class="ag-section">
<h2>03 / Interaction states and microinteractions</h2>
<p>Every interactive component needs states that make its behavior understandable. Consider the default state, hover, keyboard focus, active or pressed state, expanded or collapsed state, loading state, success, error, and disabled state where appropriate.</p>
<div class="ag-grid">
<article class="ag-card"><h3>Visual feedback</h3><p>Changes in color, border, underline, icon, or position help communicate that an element is interactive or has changed state.</p></article>
<article class="ag-card"><h3>Content feedback</h3><p>Updated labels, expanded text, a result count, or a confirmation message tell the user what happened.</p></article>
<article class="ag-card"><h3>Accessible feedback</h3><p>Keyboard focus and programmatically communicated state help people using assistive technology understand the interface.</p></article>
</div>
<h3>Example — button hover and focus states</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">interaction-states.css</span></div><pre class="ag-code"><code><span class="tok-selector">.action-button</span> <span class="tok-punct">{</span>
  <span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">#b8f34b</span><span class="tok-punct">;</span>
  <span class="tok-prop">color</span><span class="tok-punct">:</span> <span class="tok-value">#172033</span><span class="tok-punct">;</span>
  <span class="tok-prop">border</span><span class="tok-punct">:</span> <span class="tok-num">2px</span> <span class="tok-value">solid</span> <span class="tok-value">#172033</span><span class="tok-punct">;</span>
  <span class="tok-prop">padding</span><span class="tok-punct">:</span> <span class="tok-num">0.8rem</span> <span class="tok-num">1.1rem</span><span class="tok-punct">;</span>
  <span class="tok-prop">transition</span><span class="tok-punct">:</span> <span class="tok-value">background-color 160ms ease</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.action-button:hover</span> <span class="tok-punct">{</span>
  <span class="tok-prop">background</span><span class="tok-punct">:</span> <span class="tok-value">#a5df35</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>
<span class="tok-selector">.action-button:focus-visible</span> <span class="tok-punct">{</span>
  <span class="tok-prop">outline</span><span class="tok-punct">:</span> <span class="tok-num">3px</span> <span class="tok-value">solid</span> <span class="tok-value">#2563eb</span><span class="tok-punct">;</span>
  <span class="tok-prop">outline-offset</span><span class="tok-punct">:</span> <span class="tok-num">4px</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span></code></pre></div>
<p>Test with a mouse, then use Tab to reach the button. Hover and focus are different states: keyboard users need a visible focus indicator even when there is no pointer.</p>
</section>
<section class="ag-section">
<h2>04 / Build a show-and-hide interaction</h2>
<p>This first example uses HTML and CSS to explain the concept. The button is a real button, not a link pretending to be a control. For an actual toggle, JavaScript will update the visible content and accessible state.</p>
<h3>HTML structure</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">details.html</span></div><pre class="ag-code"><code><span class="tok-tag">&lt;section</span> <span class="tok-attr">class</span>=<span class="tok-string">"project-card"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;h2&gt;</span>Project: Field Notes<span class="tok-tag">&lt;/h2&gt;</span>
  <span class="tok-tag">&lt;p&gt;</span>A short introduction to the project.<span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;button</span>
    <span class="tok-attr">class</span>=<span class="tok-string">"details-toggle"</span>
    <span class="tok-attr">type</span>=<span class="tok-string">"button"</span>
    <span class="tok-attr">aria-expanded</span>=<span class="tok-string">"false"</span>
    <span class="tok-attr">aria-controls</span>=<span class="tok-string">"project-details"</span><span class="tok-tag">&gt;</span>
    Show project details
  <span class="tok-tag">&lt;/button&gt;</span>
  <span class="tok-tag">&lt;div</span> <span class="tok-attr">id</span>=<span class="tok-string">"project-details"</span> <span class="tok-attr">hidden</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;p&gt;</span>Research, sketches, prototypes, and final outcome.<span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;/div&gt;</span>
<span class="tok-tag">&lt;/section&gt;</span></code></pre></div>
<h3>JavaScript behavior</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">details.js</span></div><pre class="ag-code"><code><span class="tok-key">const</span> toggle = document.querySelector(<span class="tok-string">'.details-toggle'</span>);
<span class="tok-key">const</span> details = document.querySelector(<span class="tok-string">'#project-details'</span>);

toggle.addEventListener(<span class="tok-string">'click'</span>, () <span class="tok-punct">=&gt;</span> <span class="tok-punct">{</span>
  <span class="tok-key">const</span> isExpanded = toggle.getAttribute(<span class="tok-string">'aria-expanded'</span>) === <span class="tok-string">'true'</span>;

  toggle.setAttribute(<span class="tok-string">'aria-expanded'</span>, String(!isExpanded));
  details.hidden = isExpanded;
  toggle.textContent = isExpanded
    ? <span class="tok-string">'Show project details'</span>
    : <span class="tok-string">'Hide project details'</span>;
<span class="tok-punct">}</span>);</code></pre></div>
<p><strong>Walk through the logic:</strong> find the button and content, listen for a click, check the current state, update the accessible expanded value, show or hide the content, and change the label. In this one-button example, <code class="ag-inline">querySelector()</code> is enough because there is only one matching component.</p>
<div class="ag-callout amber"><strong>Instructor note:</strong> if you place multiple project cards on one page, each button must control its own details panel. Do not reuse the same HTML <code class="ag-inline">id</code> on multiple elements. The later instructor section demonstrates a multi-card pattern.</div>
</section>
<section class="ag-section">
<h2>05 / Add a filter to a project list</h2>
<p>Filtering helps visitors narrow content without navigating to a new page. The labels should be understandable, and the interface should make it obvious which filter is selected and how many results remain.</p>
<h3>HTML example</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">filter.html</span></div><pre class="ag-code"><code><span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-string">"filters"</span> <span class="tok-attr">aria-label</span>=<span class="tok-string">"Filter projects"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;button</span> <span class="tok-attr">type</span>=<span class="tok-string">"button"</span> <span class="tok-attr">data-filter</span>=<span class="tok-string">"all"</span><span class="tok-tag">&gt;</span>All<span class="tok-tag">&lt;/button&gt;</span>
  <span class="tok-tag">&lt;button</span> <span class="tok-attr">type</span>=<span class="tok-string">"button"</span> <span class="tok-attr">data-filter</span>=<span class="tok-string">"web"</span><span class="tok-tag">&gt;</span>Web<span class="tok-tag">&lt;/button&gt;</span>
  <span class="tok-tag">&lt;button</span> <span class="tok-attr">type</span>=<span class="tok-string">"button"</span> <span class="tok-attr">data-filter</span>=<span class="tok-string">"identity"</span><span class="tok-tag">&gt;</span>Identity<span class="tok-tag">&lt;/button&gt;</span>
<span class="tok-tag">&lt;/div&gt;</span>

<span class="tok-tag">&lt;p</span> <span class="tok-attr">id</span>=<span class="tok-string">"filter-status"</span> <span class="tok-attr">role</span>=<span class="tok-string">"status"</span><span class="tok-tag">&gt;</span>Showing all projects<span class="tok-tag">&lt;/p&gt;</span>

<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-string">"project-grid"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"project-item"</span> <span class="tok-attr">data-category</span>=<span class="tok-string">"web"</span><span class="tok-tag">&gt;</span>Web project<span class="tok-tag">&lt;/article&gt;</span>
  <span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"project-item"</span> <span class="tok-attr">data-category</span>=<span class="tok-string">"identity"</span><span class="tok-tag">&gt;</span>Identity project<span class="tok-tag">&lt;/article&gt;</span>
  <span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"project-item"</span> <span class="tok-attr">data-category</span>=<span class="tok-string">"web"</span><span class="tok-tag">&gt;</span>Another web project<span class="tok-tag">&lt;/article&gt;</span>
<span class="tok-tag">&lt;/div&gt;</span></code></pre></div>
<h3>JavaScript example</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">filter.js</span></div><pre class="ag-code"><code><span class="tok-key">const</span> filterButtons = document.querySelectorAll(<span class="tok-string">'[data-filter]'</span>);
<span class="tok-key">const</span> projectItems = document.querySelectorAll(<span class="tok-string">'.project-item'</span>);
<span class="tok-key">const</span> filterStatus = document.querySelector(<span class="tok-string">'#filter-status'</span>);

filterButtons.forEach((button) <span class="tok-punct">=&gt;</span> <span class="tok-punct">{</span>
  button.addEventListener(<span class="tok-string">'click'</span>, () <span class="tok-punct">=&gt;</span> <span class="tok-punct">{</span>
    <span class="tok-key">const</span> category = button.dataset.filter;
    <span class="tok-key">let</span> visibleCount = <span class="tok-num">0</span>;

    projectItems.forEach((item) <span class="tok-punct">=&gt;</span> <span class="tok-punct">{</span>
      <span class="tok-key">const</span> matches = category === <span class="tok-string">'all'</span> ||
        item.dataset.category === category;
      item.hidden = !matches;
      <span class="tok-key">if</span> (matches) visibleCount++;
    });

    filterStatus.textContent =
      <span class="tok-string">`Showing ${visibleCount} project(s)`</span>;

    filterButtons.forEach((otherButton) <span class="tok-punct">=&gt;</span> <span class="tok-punct">{</span>
      otherButton.setAttribute(
        <span class="tok-string">'aria-pressed'</span>,
        String(otherButton === button)
      );
    });
  });
});</code></pre></div>
<p>Explain the loop in plain language: when a filter button is selected, the script checks every project, compares its category with the chosen filter, hides items that do not match, and updates the result message. The pressed state communicates the current selection.</p>
</section>
<section class="ag-section">
<h2>06 / Make interaction work for different users</h2>
<p>Interactive elements must be operable, perceivable, and understandable. Do not rely on color or hover alone. Make the focus state visible, use native buttons for actions, and communicate changes in content or status.</p>
<ul>
<li>Use a <code class="ag-inline">button</code> for an action and an <code class="ag-inline">a</code> element for navigation to another location.</li>
<li>Ensure interactive controls work with a keyboard.</li>
<li>Make focus visible and distinguishable from hover.</li>
<li>Use clear labels that describe the action or destination.</li>
<li>Provide a visible state change when content expands, filters update, or a task completes.</li>
<li>Respect reduced-motion preferences if transitions or animation are used.</li>
<li>Test at mobile widths and ensure controls have comfortable touch targets.</li>
</ul>
<h3>Reduced-motion example</h3>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">reduced-motion.css</span></div><pre class="ag-code"><code><span class="tok-selector">@media (prefers-reduced-motion: reduce)</span> <span class="tok-punct">{</span>
  <span class="tok-selector">*, *::before, *::after</span> <span class="tok-punct">{</span>
    <span class="tok-prop">scroll-behavior</span><span class="tok-punct">:</span> <span class="tok-value">auto</span><span class="tok-punct">;</span>
    <span class="tok-prop">transition-duration</span><span class="tok-punct">:</span> <span class="tok-num">0.01ms</span> <span class="tok-value">!important</span><span class="tok-punct">;</span>
    <span class="tok-prop">animation-duration</span><span class="tok-punct">:</span> <span class="tok-num">0.01ms</span> <span class="tok-value">!important</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
<span class="tok-punct">}</span></code></pre></div>
<p>Motion should enhance the interaction, not be the only way a user can understand the state or complete the task.</p>
</section>
<section class="ag-section">
<h2>07 / In-class assignment — Create a small interactive portfolio</h2>
<p>Build a small interactive section for your Project 1 website or prototype. Choose one useful interaction and implement it in HTML, CSS, and JavaScript. Focus on clarity and behavior rather than visual complexity.</p>
<div class="ag-steps">
<div class="ag-step"><span class="ag-number">1</span><div><h3>Choose one user need</h3><p>Examples: reveal project details, filter projects by category, or show a clear confirmation after an action.</p></div></div>
<div class="ag-step"><span class="ag-number">2</span><div><h3>Describe the interaction</h3><p>Write down the starting state, user action, visible response, and how the user can reverse or recover from it.</p></div></div>
<div class="ag-step"><span class="ag-number">3</span><div><h3>Build the structure</h3><p>Use semantic HTML with clear labels and appropriate controls. Keep the content readable before adding styling.</p></div></div>
<div class="ag-step"><span class="ag-number">4</span><div><h3>Style the states</h3><p>Add default, hover, and focus styles. Make the active or expanded state clear. Keep motion subtle and purposeful.</p></div></div>
<div class="ag-step"><span class="ag-number">5</span><div><h3>Add and test the behavior</h3><p>Use JavaScript to update the interface. Test with a mouse, keyboard, and narrow viewport. Confirm that the state and message match what actually happened.</p></div></div>
<div class="ag-step"><span class="ag-number">6</span><div><h3>Have a classmate test it</h3><p>Give them a goal but do not explain how to use the interaction. Record one point of hesitation and make one improvement.</p></div></div>
</div>
<h3>Deliverables</h3>
<ul>
<li>A working interactive component or prototype.</li>
<li>A short description of the user need and interaction states.</li>
<li>HTML, CSS, and JavaScript used for the behavior, where applicable.</li>
<li>Evidence of keyboard and responsive testing.</li>
<li>A brief reflection describing tester feedback and one revision.</li>
</ul>
<div class="ag-callout amber"><strong>Scope:</strong> one well-designed interaction is enough. The goal is to demonstrate that you can plan the behavior, build it, test it, and explain how it improves the experience.</div>
</section>
<section class="ag-section">
<h2>08 / Interaction planning worksheet</h2>
<div class="ag-table-wrap">MADTINKERBLOCKTOKEN2END</div>
</section>
<section class="ag-section">
<h2>09 / Final self-check</h2>
<ul>
<li>The interaction solves a real user need rather than adding decoration alone.</li>
<li>The action and resulting state are clear.</li>
<li>Buttons and links are used for their appropriate purposes.</li>
<li>Keyboard focus is visible and the interaction is keyboard operable.</li>
<li>State changes are communicated through more than color alone.</li>
<li>Responsive behavior has been checked.</li>
<li>JavaScript does not show a success state when an action has failed.</li>
<li>A classmate tested the interaction without being coached through it.</li>
<li>The reflection identifies one observed issue and one improvement.</li>
</ul>
</section>
<section class="ag-section" id="instructor-layout-code">
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;margin-bottom:18px;">
<p style="margin:0 0 6px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h2 style="margin:0 0 8px;">Instructor Layout Code — Step by Step</h2>
<p style="margin:0;">Model the design process by building an interaction in stages. First demonstrate the state change with one component, then explain the logic, and finally show how to handle multiple components safely. The examples are teaching samples; test them in a local page or CodePen before presenting.</p>
</div>
<div class="ag-steps">
<div class="ag-step"><span class="ag-number">1</span><div><h3>Describe the before and after states</h3><p>Ask students to sketch the collapsed state and the expanded state. Decide what the button says in each state and how keyboard users will know it changed.</p></div></div>
<div class="ag-step"><span class="ag-number">2</span><div><h3>Build the semantic HTML</h3><p>Use a button for the action, a unique ID for the content, and aria-expanded to communicate whether it is open or closed.</p></div></div>
<div class="ag-step"><span class="ag-number">3</span><div><h3>Read the JavaScript line by line</h3><p>Identify the elements, attach an event listener, inspect the current state, and update both the content and the accessible state.</p></div></div>
<div class="ag-step"><span class="ag-number">4</span><div><h3>Scale from one component to many</h3><p>Use a loop and a relationship between each button and its own panel. Avoid duplicate IDs and avoid assuming the first matching element is always the correct one.</p></div></div>
<div class="ag-step"><span class="ag-number">5</span><div><h3>Demonstrate a filter</h3><p>Use data attributes to categorize items, compare each item to the selected filter, update visibility, and announce the number of matching results.</p></div></div>
<div class="ag-step"><span class="ag-number">6</span><div><h3>Test and debug</h3><p>Test the default state, repeated activation, keyboard operation, no-match states, and mobile layout. Ask students to predict and then explain any unexpected result.</p></div></div>
</div>
<div class="ag-callout amber"><strong>Teaching note:</strong> keep the distinction clear between a visual prototype and a working interaction. If the interface looks clickable but does nothing, it is not a completed interactive behavior. Likewise, do not display confirmation text unless the action has actually succeeded.</div>
<section class="ag-section">
<h3>Instructor example A — One disclosure component</h3>
<p>Use this example to introduce DOM selection, event listeners, attributes, and the hidden property. Type it in small sections and test after each step.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">disclosure.html</span></div><pre class="ag-code"><code><span class="tok-tag">&lt;button</span> <span class="tok-attr">id</span>=<span class="tok-string">"details-button"</span>
  <span class="tok-attr">type</span>=<span class="tok-string">"button"</span>
  <span class="tok-attr">aria-expanded</span>=<span class="tok-string">"false"</span>
  <span class="tok-attr">aria-controls</span>=<span class="tok-string">"details-panel"</span><span class="tok-tag">&gt;</span>
  Show details
<span class="tok-tag">&lt;/button&gt;</span>

<span class="tok-tag">&lt;div</span> <span class="tok-attr">id</span>=<span class="tok-string">"details-panel"</span> <span class="tok-attr">hidden</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;p&gt;</span>Additional information appears here.<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;/div&gt;</span></code></pre></div>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">disclosure.js</span></div><pre class="ag-code"><code><span class="tok-key">const</span> button = document.querySelector(<span class="tok-string">'#details-button'</span>);
<span class="tok-key">const</span> panel = document.querySelector(<span class="tok-string">'#details-panel'</span>);

button.addEventListener(<span class="tok-string">'click'</span>, () <span class="tok-punct">=&gt;</span> <span class="tok-punct">{</span>
  <span class="tok-key">const</span> expanded = button.getAttribute(<span class="tok-string">'aria-expanded'</span>) === <span class="tok-string">'true'</span>;
  button.setAttribute(<span class="tok-string">'aria-expanded'</span>, String(!expanded));
  panel.hidden = expanded;
  button.textContent = expanded ? <span class="tok-string">'Show details'</span> : <span class="tok-string">'Hide details'</span>;
<span class="tok-punct">}</span>);</code></pre></div>
<p><strong>Explain each line:</strong> <code class="ag-inline">querySelector()</code> finds the element, <code class="ag-inline">addEventListener()</code> waits for a click, <code class="ag-inline">getAttribute()</code> reads the current state, and the final statements update the state, panel, and label together.</p>
</section>
<section class="ag-section">
<h3>Instructor example B — Multiple independent disclosure cards</h3>
<p>When a page has multiple cards, each button must control its own panel. This pattern avoids duplicate IDs by using a button inside each component and finding the related panel within that component.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">multiple-disclosures.html</span></div><pre class="ag-code"><code><span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"project-card"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;h2&gt;</span>Project A<span class="tok-tag">&lt;/h2&gt;</span>
  <span class="tok-tag">&lt;button</span> <span class="tok-attr">class</span>=<span class="tok-string">"details-toggle"</span>
    <span class="tok-attr">type</span>=<span class="tok-string">"button"</span>
    <span class="tok-attr">aria-expanded</span>=<span class="tok-string">"false"</span><span class="tok-tag">&gt;</span>Show details<span class="tok-tag">&lt;/button&gt;</span>
  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-string">"details-panel"</span> <span class="tok-attr">hidden</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;p&gt;</span>Details for Project A.<span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;/div&gt;</span>
<span class="tok-tag">&lt;/article&gt;</span>

<span class="tok-tag">&lt;article</span> <span class="tok-attr">class</span>=<span class="tok-string">"project-card"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;h2&gt;</span>Project B<span class="tok-tag">&lt;/h2&gt;</span>
  <span class="tok-tag">&lt;button</span> <span class="tok-attr">class</span>=<span class="tok-string">"details-toggle"</span>
    <span class="tok-attr">type</span>=<span class="tok-string">"button"</span>
    <span class="tok-attr">aria-expanded</span>=<span class="tok-string">"false"</span><span class="tok-tag">&gt;</span>Show details<span class="tok-tag">&lt;/button&gt;</span>
  <span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-string">"details-panel"</span> <span class="tok-attr">hidden</span><span class="tok-tag">&gt;</span>
    <span class="tok-tag">&lt;p&gt;</span>Details for Project B.<span class="tok-tag">&lt;/p&gt;</span>
  <span class="tok-tag">&lt;/div&gt;</span>
<span class="tok-tag">&lt;/article&gt;</span></code></pre></div>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">multiple-disclosures.js</span></div><pre class="ag-code"><code>document.querySelectorAll(<span class="tok-string">'.project-card'</span>).forEach((card) <span class="tok-punct">=&gt;</span> <span class="tok-punct">{</span>
  <span class="tok-key">const</span> button = card.querySelector(<span class="tok-string">'.details-toggle'</span>);
  <span class="tok-key">const</span> panel = card.querySelector(<span class="tok-string">'.details-panel'</span>);

  button.addEventListener(<span class="tok-string">'click'</span>, () <span class="tok-punct">=&gt;</span> <span class="tok-punct">{</span>
    <span class="tok-key">const</span> expanded = button.getAttribute(<span class="tok-string">'aria-expanded'</span>) === <span class="tok-string">'true'</span>;
    button.setAttribute(<span class="tok-string">'aria-expanded'</span>, String(!expanded));
    panel.hidden = expanded;
    button.textContent = expanded ? <span class="tok-string">'Show details'</span> : <span class="tok-string">'Hide details'</span>;
  });
});</code></pre></div>
<p>Explain that <code class="ag-inline">card.querySelector()</code> searches within the current card. Each click handler therefore updates the correct button and panel rather than the first panel on the page.</p>
</section>
<section class="ag-section">
<h3>Instructor example C — A simple category filter</h3>
<p>Have students identify the data relationship: a filter button has a category, and each project item has a category. The script compares those values to decide which items to show.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">filter-demo.js</span></div><pre class="ag-code"><code><span class="tok-key">const</span> buttons = document.querySelectorAll(<span class="tok-string">'[data-filter]'</span>);
<span class="tok-key">const</span> items = document.querySelectorAll(<span class="tok-string">'[data-category]'</span>);

buttons.forEach((button) <span class="tok-punct">=&gt;</span> <span class="tok-punct">{</span>
  button.addEventListener(<span class="tok-string">'click'</span>, () <span class="tok-punct">=&gt;</span> <span class="tok-punct">{</span>
    <span class="tok-key">const</span> selected = button.dataset.filter;

    items.forEach((item) <span class="tok-punct">=&gt;</span> <span class="tok-punct">{</span>
      <span class="tok-key">const</span> showAll = selected === <span class="tok-string">'all'</span>;
      <span class="tok-key">const</span> matches = item.dataset.category === selected;
      item.hidden = !(showAll || matches);
    });
  });
});</code></pre></div>
<p>Test all categories and the All button. Ask what should happen if there are zero matching items. A more complete version should display a helpful no-results message and communicate which filter is selected.</p>
</section>
<section class="ag-section">
<h3>Instructor example D — Make the no-results state explicit</h3>
<p>A filter can technically work while still leaving the visitor unsure whether the page is empty, broken, or loading. Use a status message to explain the result.</p>
<div class="ag-editor"><div class="ag-editor-head"><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-dot"></span><span class="ag-editor-title">empty-state.html</span></div><pre class="ag-code"><code><span class="tok-tag">&lt;p</span> <span class="tok-attr">id</span>=<span class="tok-string">"results-status"</span> <span class="tok-attr">role</span>=<span class="tok-string">"status"</span><span class="tok-tag">&gt;</span>
  Showing all projects.
<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;p</span> <span class="tok-attr">id</span>=<span class="tok-string">"no-results"</span> <span class="tok-attr">hidden</span><span class="tok-tag">&gt;</span>
  No projects match this filter. Choose another category.
<span class="tok-tag">&lt;/p&gt;</span></code></pre></div>
<p>Explain that the status text should be updated by the filtering logic based on the actual number of visible items. Do not show “No projects match” when results are present.</p>
</section>
<section class="ag-section">
<h3>Instructor example E — A quick debugging sequence</h3>
<ol>
<li><strong>Check the selector.</strong> Does the class or ID in JavaScript match the HTML exactly?</li>
<li><strong>Check the console.</strong> Is there an error that stops the script from running?</li>
<li><strong>Check timing.</strong> Does the script run after the relevant HTML elements exist?</li>
<li><strong>Check the event.</strong> Is the listener attached to the element the user actually activates?</li>
<li><strong>Check state synchronization.</strong> Do the visible content, button label, and accessible state all agree?</li>
<li><strong>Test repeat use.</strong> Can the user activate and reverse the behavior more than once?</li>
</ol>
<div class="ag-card">
<p><strong>Common mistake:</strong> the button label changes to “Hide details,” but the panel stays hidden.</p>
<p><strong>Debugging question:</strong> Is the script selecting the correct panel? Is another CSS rule overriding the display? Is the <code class="ag-inline">hidden</code> property being set from the current state correctly?</p>
</div>
</section>
<section class="ag-section">
<h3>Instructor facilitation checklist</h3>
<ul>
<li>Ask students to describe the interaction in plain language before coding.</li>
<li>Demonstrate the default state before showing JavaScript.</li>
<li>Explain each selector and event listener in ordinary language.</li>
<li>Keep the visual design simple enough that behavior remains the focus.</li>
<li>Test keyboard operation, repeat activation, and responsive behavior.</li>
<li>Ask students to explain what happens when something goes wrong.</li>
<li>Require a short user test and one revision based on observation.</li>
</ul>
</section>
</section>
<footer class="ag-footer"><p><strong>AMDE 355 · Advanced Web Design</strong> — Week 10</p><p>Interactive Web Experiences · Plan the behavior, communicate the state, and test the response.</p></footer>
</div>
{:/nomarkdown}
