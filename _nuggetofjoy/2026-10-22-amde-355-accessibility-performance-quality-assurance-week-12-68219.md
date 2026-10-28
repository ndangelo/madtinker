---
layout: post
title: AMDE 355 - Accessibility, Performance &amp; Quality Assurance (Week 12)
slug: amde-355-accessibility-performance-quality-assurance-week-12
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68219
source_url: https://nuggetofjoy.com/amde-355-accessibility-performance-quality-assurance-week-12/
author: admin
categories:
- AMDE 355 ADVANCED WEB DESIGN
tags: []
---

<div class="amde-grid-lesson">

<div class="amde-grid-lesson">
<header class="hero">
<p class="eyebrow">AMDE 355 · Advanced Web Design · Week 12</p>
<h1>Accessibility, Performance &amp; Quality Assurance</h1>
<p class="hero-deck">Make the experience work for more people, load efficiently, and behave reliably across devices.</p>
<div class="hero-meta">
<span>Inclusive design</span>
<span>Performance basics</span>
<span>Testing + debugging</span>
</div>
</header>
<section class="lesson-card">
<p class="eyebrow">This week</p>
<h2>A finished design is more than how it looks</h2>
<p>A web experience can look polished in one browser on one computer and still be difficult to use elsewhere. Text may be hard to read, controls may be impossible to reach with a keyboard, images may take too long to load, or an interaction may fail when a visitor uses a phone.</p>
<p>This week focuses on three connected responsibilities:</p>
<ul>
<li><strong>Accessibility:</strong> Can people with different abilities, devices, and input methods understand and use the experience?</li>
<li><strong>Performance:</strong> Does the page load and respond without unnecessary delay or oversized media?</li>
<li><strong>Quality assurance (QA):</strong> Have you tested the experience systematically rather than assuming it works?</li>
</ul>
<p>These are design concerns, not last-minute technical chores. An interface is not successful if its most important content is unreadable, its controls cannot be operated, or it fails on the screen where someone needs it.</p>
</section>
<section class="lesson-card">
<p class="eyebrow">Learning objectives</p>
<h2>By the end of this lesson, you should be able to:</h2>
<ul>
<li>Identify common accessibility problems involving contrast, text alternatives, headings, labels, keyboard use, and motion.</li>
<li>Use semantic HTML elements for buttons, links, forms, and page structure.</li>
<li>Describe how oversized images, video, fonts, and scripts can affect page performance.</li>
<li>Apply a few practical performance improvements to images and JavaScript loading.</li>
<li>Use browser developer tools to inspect errors and test responsive layouts.</li>
<li>Write and complete a repeatable QA checklist.</li>
<li>Explain beginner JavaScript using the pattern <strong>find → listen → respond</strong> and debug a simple interaction systematically.</li>
</ul>
</section>
<section class="lesson-card">
<p class="eyebrow">Part 1 · Accessibility</p>
<h2>Accessibility begins with clear structure</h2>
<p>Accessible design helps people access and understand the information on a page, including people who use screen readers, keyboard navigation, magnification, voice control, or device settings such as reduced motion. It also helps people using a small screen, a trackpad, a slow connection, or a bright outdoor environment.</p>
<h3>Use meaningful HTML</h3>
<p>Choose HTML elements based on what they mean, not just how they look. A heading should introduce a section. A link should take someone somewhere. A button should perform an action.</p>
<div class="code-panel">
<div class="code-label">Prefer meaningful elements</div>
<pre><code><span class="tok-comment">&lt;!-- Better: a link takes the visitor to another page --&gt;</span>
<span class="tok-tag">&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"projects.html"</span><span class="tok-tag">&gt;</span>View projects<span class="tok-tag">&lt;/a&gt;</span>

<span class="tok-comment">&lt;!-- Better: a button performs an action on this page --&gt;</span>
<span class="tok-tag">&lt;button</span> <span class="tok-attr">type</span>=<span class="tok-string">"button"</span> <span class="tok-attr">id</span>=<span class="tok-string">"details-button"</span><span class="tok-tag">&gt;</span>
  Show project details
<span class="tok-tag">&lt;/button&gt;</span></code></pre>
</div>
<p>A link and a button may look similar, but they have different jobs. Do not use a clickable <code>div</code> when a real button would do. Native elements already provide important keyboard and assistive-technology behavior.</p>
<h3>Write useful image alternatives</h3>
<div class="code-panel">
<div class="code-label">HTML</div>
<pre><code><span class="tok-comment">&lt;!-- Describe the important visual information --&gt;</span>
<span class="tok-tag">&lt;img</span>
  <span class="tok-attr">src</span>=<span class="tok-string">"images/installation-view.jpg"</span>
  <span class="tok-attr">alt</span>=<span class="tok-string">"Three large prints arranged in a row on a gallery wall"</span>
<span class="tok-tag">/&gt;</span>

<span class="tok-comment">&lt;!-- If an image is purely decorative, use an empty alt value --&gt;</span>
<span class="tok-tag">&lt;img</span> <span class="tok-attr">src</span>=<span class="tok-string">"images/decorative-texture.png"</span> <span class="tok-attr">alt</span>=<span class="tok-string">""</span> <span class="tok-tag">/&gt;</span></code></pre>
</div>
<p>Alt text should communicate the useful content or purpose of the image. Avoid writing “image of” unless it adds something necessary. For artwork, describe the relevant visual information in context; do not try to write a complete art criticism in the alt attribute. If the image is decorative and conveys no information, an empty alt value prevents unnecessary announcements.</p>
<h3>Check color contrast</h3>
<p>Text needs enough contrast against its background to remain readable. Do not communicate a status using color alone. For example, if an error message is red, it should also include words or another clear indicator.</p>
<ul>
<li>Check small text and text placed over photographs.</li>
<li>Do not rely on a pale color just because it matches the visual identity.</li>
<li>Test links and buttons in normal, hover, focus, and disabled states.</li>
<li>Use a contrast checker during design and again after the page is built.</li>
</ul>
<h3>Give controls clear names</h3>
<p>“Click here” or an icon with no accessible name may not explain what a control does. Prefer labels such as “Play interview audio,” “Show project details,” or “Filter photography.” The label should match the result the visitor can expect.</p>
</section>
<section class="lesson-card">
<p class="eyebrow">Part 2 · Keyboard and focus</p>
<h2>Test the page without a mouse</h2>
<p>Some visitors navigate using the keyboard, switch devices, or other input tools. A quick keyboard test is one of the easiest ways to discover interaction problems.</p>
<ul>
<li>Press <strong>Tab</strong> to move through interactive controls.</li>
<li>Press <strong>Shift + Tab</strong> to move backward.</li>
<li>Use <strong>Enter</strong> to activate links and buttons; use <strong>Space</strong> for buttons when supported by the browser.</li>
<li>Check that the current control has a visible focus indicator.</li>
<li>Make sure focus does not disappear behind a fixed header or become trapped in a component.</li>
</ul>
<div class="code-panel">
<div class="code-label">CSS — keep keyboard focus visible</div>
<pre><code><span class="tok-selector">a:focus-visible</span>,
<span class="tok-selector">button:focus-visible</span>,
<span class="tok-selector">input:focus-visible</span>,
<span class="tok-selector">select:focus-visible</span>,
<span class="tok-selector">textarea:focus-visible</span> {
  <span class="tok-prop">outline</span>: <span class="tok-num">3px</span> <span class="tok-value">solid</span> <span class="tok-value">#4d7c0f</span>;
  <span class="tok-prop">outline-offset</span>: <span class="tok-num">3px</span>;
}</code></pre>
</div>
<p><code>:focus-visible</code> lets you style the focus indicator when the browser determines it should be shown, commonly during keyboard navigation. Avoid removing the outline unless you replace it with an equally clear indicator.</p>
</section>
<section class="lesson-card">
<p class="eyebrow">Part 3 · Performance</p>
<h2>Make media efficient without sacrificing the work</h2>
<p>Photography, video, animation, and web fonts can make a page visually rich, but large assets can slow loading. Performance is not just a developer concern: it affects whether a visitor can reach and enjoy the content.</p>
<h3>Use images at sensible dimensions</h3>
<ul>
<li>Export images close to the size they will actually appear on the page.</li>
<li>Use an appropriate compressed format, such as WebP or AVIF when supported by your workflow.</li>
<li>Keep a high-quality original separately; the website does not always need the full-resolution master.</li>
<li>Use lazy loading for images farther down the page, but do not automatically lazy-load the main image visible immediately on arrival.</li>
<li>Give images explicit width and height attributes when possible so the browser can reserve space and reduce layout shifts.</li>
</ul>
<div class="code-panel">
<div class="code-label">HTML — a more performance-aware image</div>
<pre><code><span class="tok-tag">&lt;img</span>
  <span class="tok-attr">src</span>=<span class="tok-string">"images/process-detail.webp"</span>
  <span class="tok-attr">alt</span>=<span class="tok-string">"Close detail of layered photographic marks"</span>
  <span class="tok-attr">width</span>=<span class="tok-string">"1200"</span>
  <span class="tok-attr">height</span>=<span class="tok-string">"800"</span>
  <span class="tok-attr">loading</span>=<span class="tok-string">"lazy"</span>
  <span class="tok-attr">decoding</span>=<span class="tok-string">"async"</span>
<span class="tok-tag">/&gt;</span></code></pre>
</div>
<p><code>width</code> and <code>height</code> tell the browser the image's intended dimensions, helping it reserve the right amount of space. <code>loading="lazy"</code> can delay loading until the image is close to the viewport. <code>decoding="async"</code> allows image decoding to happen asynchronously where supported. These attributes do not make an enormous file small, so export optimization still matters.</p>
<h3>Be thoughtful with video and audio</h3>
<p>Video files can be much larger than images. Use a poster image, offer controls, and avoid autoplay with sound. If the video is decorative, ask whether a still image would communicate the idea with less loading cost. If the video is central to the work, preserve the intended experience while making the file as efficient as practical.</p>
<h3>Load JavaScript carefully</h3>
<p>Scripts can affect when a page becomes usable. If you use a separate JavaScript file, the <code>defer</code> attribute tells the browser to download the script while parsing the HTML and run it after the document has been parsed.</p>
<div class="code-panel">
<div class="code-label">HTML — loading an external script</div>
<pre><code><span class="tok-tag">&lt;script</span> <span class="tok-attr">src</span>=<span class="tok-string">"js/interactions.js"</span> <span class="tok-attr">defer</span><span class="tok-tag">&gt;&lt;/script&gt;</span></code></pre>
</div>
<p>This is useful when the script needs to find buttons or other elements in the HTML. It helps avoid the common beginner problem where JavaScript runs before the button exists. Do not add extra scripts or libraries unless the project actually needs them.</p>
</section>
<section class="lesson-card">
<p class="eyebrow">Part 4 · JavaScript quality checks</p>
<h2>Debug interactions using three questions</h2>
<p>JavaScript is easier to troubleshoot when you do not treat it as one mysterious block of code. Break it into three jobs:</p>
<div class="callout">
<strong>FIND:</strong> Did the script find the right element?<br/>
<strong>LISTEN:</strong> Is the event listener waiting for the right action?<br/>
<strong>RESPOND:</strong> Does the code make the expected change?
    </div>
<h3>Example: an accessible show/hide control</h3>
<div class="code-panel">
<div class="code-label">HTML</div>
<pre><code><span class="tok-tag">&lt;button</span>
  <span class="tok-attr">id</span>=<span class="tok-string">"qa-details-button"</span>
  <span class="tok-attr">aria-expanded</span>=<span class="tok-string">"false"</span>
  <span class="tok-attr">aria-controls</span>=<span class="tok-string">"qa-details"</span>
<span class="tok-tag">&gt;</span>
  Show details
<span class="tok-tag">&lt;/button&gt;</span>

<span class="tok-tag">&lt;div</span> <span class="tok-attr">id</span>=<span class="tok-string">"qa-details"</span> hidden<span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;p&gt;</span>Additional information about the project.<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;/div&gt;</span></code></pre>
</div>
<div class="code-panel">
<div class="code-label">JavaScript — step-by-step</div>
<pre><code><span class="tok-comment">// FIND: locate the button and the panel.</span>
<span class="tok-key">const</span> qaButton = document.querySelector(<span class="tok-string">"#qa-details-button"</span>);
<span class="tok-key">const</span> qaDetails = document.querySelector(<span class="tok-string">"#qa-details"</span>);

<span class="tok-comment">// LISTEN: wait for a click on the button.</span>
qaButton.addEventListener(<span class="tok-string">"click"</span>, function () {

  <span class="tok-comment">// RESPOND: check the current state.</span>
  <span class="tok-key">const</span> willOpen = qaDetails.hidden;

  <span class="tok-comment">// If willOpen is true, hidden becomes false (the panel opens).</span>
  qaDetails.hidden = !willOpen;

  <span class="tok-comment">// Keep the accessible state and visible label in sync.</span>
  qaButton.setAttribute(<span class="tok-string">"aria-expanded"</span>, willOpen);
  qaButton.textContent = willOpen ? <span class="tok-string">"Hide details"</span> : <span class="tok-string">"Show details"</span>;
});</code></pre>
</div>
<p><strong>Plain-English walkthrough:</strong> The first two lines find the button and panel. The event listener waits for a click. When clicked, the code checks whether the panel is hidden. The <code>!</code> symbol means “not,” so <code>!willOpen</code> sets the hidden property to the opposite of the state we want. Finally, the code updates the accessible state and the button text so they describe what is happening.</p>
<p>The short expression <code>condition ? valueA : valueB</code> is called a conditional expression. Here it means: “If <code>willOpen</code> is true, use ‘Hide details’; otherwise use ‘Show details.’” If this feels too compressed for your class, use a regular <code>if / else</code> statement instead:</p>
<div class="code-panel">
<div class="code-label">Same label change, written more explicitly</div>
<pre><code><span class="tok-key">if</span> (willOpen) {
  qaButton.textContent = <span class="tok-string">"Hide details"</span>;
} <span class="tok-key">else</span> {
  qaButton.textContent = <span class="tok-string">"Show details"</span>;
}</code></pre>
</div>
<p>Both approaches work. For beginners, the longer version may be easier to read because it spells out the decision. The best code for this class is code you can explain and maintain.</p>
<h3>Common errors and what they often mean</h3>
<ul>
<li><strong>Nothing happens:</strong> Check the selector, script placement, and whether the event listener is attached.</li>
<li><strong>“Cannot read properties of null”:</strong> The selector probably did not find an element. Compare the HTML ID and JavaScript selector letter by letter.</li>
<li><strong>The panel opens but will not close:</strong> Check whether you are updating the hidden state on every click, not only setting it to false.</li>
<li><strong>The label does not match the state:</strong> Update the label in the same click handler that updates the panel.</li>
<li><strong>There is a syntax error:</strong> Check parentheses, quotation marks, braces, and the closing <code>});</code>.</li>
</ul>
</section>
<section class="lesson-card">
<p class="eyebrow">Part 5 · Quality assurance</p>
<h2>Test the actual experience, not just the code</h2>
<p>Quality assurance is a repeatable process for checking that a page works as intended. Testing should include more than opening the page once and deciding that it looks good.</p>
<h3>A practical test sequence</h3>
<ol>
<li>Open the page in a desktop browser and check the main layout.</li>
<li>Resize the browser to a narrow mobile width. Look for overflow, tiny text, and awkward image crops.</li>
<li>Use Tab and Shift + Tab to test keyboard order and visible focus.</li>
<li>Activate every button, link, menu, filter, and show/hide control.</li>
<li>Reload the page and test again from its initial state.</li>
<li>Check images, video, audio, captions, and alternative text.</li>
<li>Open the developer console and look for errors.</li>
<li>Check for horizontal scrolling that is not intentional.</li>
<li>Ask another person to complete a simple task without coaching them.</li>
<li>Record issues and make a second pass after changes.</li>
</ol>
<h3>Quick checklist</h3>
<ul>
<li>Headings describe the page structure.</li>
<li>Links and buttons have clear labels and appropriate purposes.</li>
<li>Images have appropriate alt text.</li>
<li>Text and controls have sufficient contrast.</li>
<li>Keyboard focus is visible and in a logical order.</li>
<li>Media controls are usable and do not unexpectedly play sound.</li>
<li>Motion is purposeful and reduced-motion preferences are considered.</li>
<li>Images are sized and exported appropriately.</li>
<li>JavaScript interactions work repeatedly and communicate their state.</li>
<li>The page has been checked at mobile and desktop widths.</li>
<li>The console has been checked for errors.</li>
</ul>
</section>
<section class="lesson-card">
<p class="eyebrow">In-class assignment</p>
<h2>Accessibility, performance, and QA audit</h2>
<p>Choose one of your existing project pages or the multimedia experiment from Week 11. Conduct a short audit, fix the most important issues you find, and document the changes.</p>
<h3>Required deliverables</h3>
<ul>
<li>A brief audit list containing at least five observations.</li>
<li>At least three implemented improvements. Aim to address more than one category, such as accessibility, performance, and interaction reliability.</li>
<li>A working keyboard test of all key controls.</li>
<li>A mobile-width check with at least one screenshot before or after revision, as directed by the instructor.</li>
<li>A short note describing one JavaScript interaction and how you verified it.</li>
</ul>
<h3>Suggested work order</h3>
<ol>
<li>Test before changing anything so you have a clear starting point.</li>
<li>Record the problems you can reproduce.</li>
<li>Prioritize issues that block content or prevent someone from using a key control.</li>
<li>Make small, targeted changes.</li>
<li>Repeat the same tests to check that the changes worked and did not introduce new problems.</li>
</ol>
<p><strong>Reflection prompt:</strong> Which issue had the greatest effect on the visitor's experience? What did you learn by testing with a keyboard or narrow viewport instead of relying on appearance alone?</p>
</section>
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;margin:24px 0;">
<p style="margin:0 0 6px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h2 style="margin:0 0 8px;color:#78350f;">Instructor Layout Code — Step by Step</h2>
<p><strong>Teaching emphasis:</strong> Frame accessibility, performance, and QA as parts of visual and interaction design. Students should leave with a repeatable process they can use on every project, not a list of rules they only consult at the end. For JavaScript, keep the focus on identifying the element, identifying the event, and explaining the response in plain language.</p>
<h3>Suggested demonstration A: Keyboard test</h3>
<ol>
<li>Open a student example or a prepared project page.</li>
<li>Put the mouse aside and press Tab several times.</li>
<li>Ask students to name which element currently has focus.</li>
<li>Look for a clear outline or other visible focus indicator.</li>
<li>Activate a button with the keyboard and verify that it performs the same essential action as a pointer click.</li>
<li>Discuss any confusing focus order or control that cannot be reached.</li>
</ol>
<h3>Suggested demonstration B: Performance-aware image markup</h3>
<p>Compare an oversized source image with an exported web-sized version. Explain that changing the CSS display size does not necessarily reduce the bytes downloaded. The goal is to deliver a suitable asset and then use CSS to lay it out.</p>
<div class="code-panel">
<div class="code-label">Instructor example</div>
<pre><code><span class="tok-tag">&lt;img</span>
  <span class="tok-attr">src</span>=<span class="tok-string">"images/work-detail.webp"</span>
  <span class="tok-attr">alt</span>=<span class="tok-string">"Detail of a layered print showing blurred movement"</span>
  <span class="tok-attr">width</span>=<span class="tok-string">"1200"</span>
  <span class="tok-attr">height</span>=<span class="tok-string">"800"</span>
  <span class="tok-attr">loading</span>=<span class="tok-string">"lazy"</span>
<span class="tok-tag">/&gt;</span></code></pre>
</div>
<p>Explain each attribute in one sentence. Then ask students when lazy loading is appropriate. Emphasize that an image already visible at the top of the page may need to load immediately, while images further down can often be loaded later.</p>
<h3>Suggested demonstration C: Debug JavaScript in stages</h3>
<p>Show the complete code first, then temporarily remove pieces to model how a developer isolates a problem. Do not begin by making students read a long error message without context.</p>
<div class="code-panel">
<div class="code-label">Stage 1 — can JavaScript find the button?</div>
<pre><code><span class="tok-key">const</span> qaButton = document.querySelector(<span class="tok-string">"#qa-details-button"</span>);
console.log(qaButton);</code></pre>
</div>
<p>Explain that <code>console.log()</code> prints a value in the browser console so you can inspect it. If the output is the button element, the selector found it. If the output is <code>null</code>, the selector did not find a matching element. The most likely beginner causes are a mismatched ID or a script that ran before the HTML existed.</p>
<div class="code-panel">
<div class="code-label">Stage 2 — does the click event fire?</div>
<pre><code>qaButton.addEventListener(<span class="tok-string">"click"</span>, function () {
  console.log(<span class="tok-string">"The button was clicked."</span>);
});</code></pre>
</div>
<p>If the message appears after clicking, the element was found and the event listener is working. If not, check the element, the event name, and whether an earlier JavaScript error stopped the script.</p>
<div class="code-panel">
<div class="code-label">Stage 3 — make the response</div>
<pre><code>qaButton.addEventListener(<span class="tok-string">"click"</span>, function () {
  qaDetails.hidden = !qaDetails.hidden;
});</code></pre>
</div>
<p>This abbreviated version toggles the panel, but it does not update the button label or <code>aria-expanded</code>. Use it only to demonstrate the basic state change, then return to the complete accessible example so students see that an interaction should communicate its state consistently.</p>
<h3>Explain the JavaScript vocabulary in everyday terms</h3>
<ul>
<li><code>const</code>: create a name for a value or element reference.</li>
<li><code>document</code>: the current web page.</li>
<li><code>querySelector()</code>: find the first element that matches a CSS-style selector.</li>
<li><code>addEventListener()</code>: wait for an event, such as a click, and run instructions when it happens.</li>
<li><code>function () { ... }</code>: the group of instructions to run after the event.</li>
<li><code>hidden</code>: a built-in property that controls whether an element is hidden.</li>
<li><code>setAttribute()</code>: set an HTML attribute, such as <code>aria-expanded</code>.</li>
<li><code>textContent</code>: read or change the text inside an element.</li>
<li><code>!</code>: read this as “not”; it reverses a true/false value.</li>
<li><code>if / else</code>: choose between instructions based on a condition.</li>
<li><code>console.log()</code>: show a value in the browser console while testing.</li>
</ul>
<h3>Common teaching pitfalls</h3>
<ul>
<li>Do not imply that adding an alt attribute automatically makes every image accessible; the text still needs to be appropriate.</li>
<li>Do not ask students to fix every issue at once. Have them prioritize blockers, then retest.</li>
<li>Do not remove keyboard focus styling to make a design look cleaner.</li>
<li>Do not teach “make all images lazy” as a universal rule; the loading strategy depends on where the image appears and how important it is.</li>
<li>Do not introduce multiple JavaScript patterns at the same time. Use the same find → listen → respond sequence from earlier lessons.</li>
</ul>
<h3>Suggested class pacing</h3>
<ul>
<li><strong>10 minutes:</strong> Introduce accessibility as part of design quality.</li>
<li><strong>15 minutes:</strong> Demonstrate semantic elements, alt text, contrast, and keyboard focus.</li>
<li><strong>10 minutes:</strong> Discuss image sizes, loading behavior, and external script placement.</li>
<li><strong>15 minutes:</strong> Debug the show/hide interaction in three stages: find, listen, respond.</li>
<li><strong>Studio work:</strong> Students audit and revise a page, then repeat their tests.</li>
<li><strong>Closing:</strong> Have each student share one problem found, one change made, and one retest result.</li>
</ul>
</div>
</div>
<!-- /wp:html --></div>
