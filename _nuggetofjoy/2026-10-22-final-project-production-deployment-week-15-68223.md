---
layout: post
title: Final Project Production &amp; Deployment (Week 14)
slug: final-project-production-deployment-week-15
date: '2026-10-22'
modified: '2026-10-23'
status: published
wordpress_id: 68223
source_url: https://nuggetofjoy.com/final-project-production-deployment-week-15/
author: admin
categories:
- AMDE 355 ADVANCED WEB DESIGN
tags: []
---

<div class="amde-grid-lesson">

<header class="hero">
<p class="eyebrow">AMDE 355 · Advanced Web Design · Week 14</p>
<h1>Final Project Production &amp; Deployment</h1>
<p class="hero-intro">Turn your approved plan into a working web experience. This week is about building, testing, refining, and preparing your project so another person can use it—not just look at it.</p>
<div class="hero-meta">
<span>Production studio</span><span>Responsive QA</span><span>Launch readiness</span>
</div>
</header>
<section class="lesson-card">
<p class="section-kicker">This week</p>
<h2>Build with purpose, test as you go</h2>
<p>Last week, critique helped you identify what to improve and establish a final project plan. This week, use that plan to make the most important design and functional decisions real. Work in short cycles: build a small part, preview it, test it, and revise it before moving on.</p>
<div class="callout">
<strong>Your goal:</strong> leave class with a working, testable version of your final project, a short list of remaining issues, and a clear path to completion.
    </div>
</section>
<section class="lesson-card">
<p class="section-kicker">Learning outcomes</p>
<h2>By the end of this lesson, you should be able to:</h2>
<ul>
<li>Translate a project brief and critique notes into a practical production checklist.</li>
<li>Build and refine a consistent interface using reusable styles and components.</li>
<li>Test layouts at desktop, tablet, and mobile widths.</li>
<li>Check links, images, forms or controls, and interactive behaviors.</li>
<li>Use browser developer tools and a repeatable process to locate basic errors.</li>
<li>Apply core accessibility checks, including keyboard use, visible focus, readable contrast, and meaningful image text alternatives.</li>
<li>Prepare project files and content for a reliable presentation or deployment.</li>
</ul>
</section>
<section class="lesson-card">
<p class="section-kicker">Production workflow</p>
<h2>Build in manageable passes</h2>
<ol>
<li><strong>Pass 1 — Structure:</strong> make sure the main sections, page hierarchy, navigation, and content are in place.</li>
<li><strong>Pass 2 — Visual system:</strong> apply typography, color, spacing, image treatment, and reusable patterns consistently.</li>
<li><strong>Pass 3 — Responsive layout:</strong> adjust the design for smaller screens and prevent horizontal overflow.</li>
<li><strong>Pass 4 — Interaction:</strong> test buttons, menus, links, toggles, forms, and any JavaScript behavior.</li>
<li><strong>Pass 5 — Accessibility:</strong> check keyboard navigation, focus states, headings, labels, contrast, and image alternatives.</li>
<li><strong>Pass 6 — Quality assurance:</strong> check broken links, missing assets, spelling, console errors, and the final presentation.</li>
</ol>
<div class="callout">
<strong>Important:</strong> do not spend all your time polishing a small visual detail while a primary task is broken. Fix structure and usability problems before decorative refinements.
    </div>
</section>
<section class="lesson-card">
<p class="section-kicker">Work from the critique</p>
<h2>Use your three priority revisions</h2>
<p>Return to the three revision goals you selected during Week 13. Keep them visible while you work. For each one, write a small action that can be completed and checked.</p>
<div class="table-wrap">
MADTINKERBLOCKTOKEN0END
</div>
<p>These are examples. Use the findings from your own critique rather than copying these tasks if they do not fit your project.</p>
</section>
<section class="lesson-card">
<p class="section-kicker">Responsive testing</p>
<h2>Check more than one screen size</h2>
<p>A responsive design is not simply a smaller desktop page. Content may need to stack, spacing may need to change, and navigation or controls must remain usable.</p>
<div class="table-wrap">
MADTINKERBLOCKTOKEN1END
</div>
<p>In your browser’s developer tools, enable device emulation or resize the browser window. Test the page at several widths, not only at one preset device size.</p>
<div class="code-panel">
<div class="code-label">CSS example — stack two columns on smaller screens</div>
<pre><code><span class="tok-selector">.project-layout</span> <span class="tok-punct">{</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">grid</span><span class="tok-punct">;</span>
  <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">2fr 1fr</span><span class="tok-punct">;</span>
  <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">2</span><span class="tok-value">rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-key">@media</span> <span class="tok-punct">(</span><span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">700</span><span class="tok-value">px</span><span class="tok-punct">)</span> <span class="tok-punct">{</span>
  <span class="tok-selector">.project-layout</span> <span class="tok-punct">{</span>
    <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">1fr</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
<span class="tok-punct">}</span></code></pre>
</div>
<h3>How to read this CSS</h3>
<ul>
<li><code>.project-layout</code> selects an HTML element with the class <code>project-layout</code>.</li>
<li><code>display: grid;</code> turns that element into a grid layout.</li>
<li><code>grid-template-columns: 2fr 1fr;</code> creates two columns. The first gets twice the available space of the second.</li>
<li><code>gap: 2rem;</code> adds space between the columns.</li>
<li><code>@media (max-width: 700px)</code> applies the rules inside it when the viewport is 700 pixels wide or narrower.</li>
<li>Inside the media query, <code>grid-template-columns: 1fr;</code> changes the layout to one column, so the content stacks.</li>
</ul>
</section>
<section class="lesson-card">
<p class="section-kicker">JavaScript, one step at a time</p>
<h2>Test one interaction from beginning to end</h2>
<p>For JavaScript, do not start by trying to understand an entire script at once. Identify one interaction and trace what happens when a person uses it. Use the pattern <strong>find → listen → respond</strong>.</p>
<p>This example makes a button switch a message between hidden and visible. It is a simple example of a control that responds to user input.</p>
<div class="code-panel">
<div class="code-label">HTML — button and message</div>
<pre><code><span class="tok-tag">&lt;button</span> <span class="tok-attr">id</span>=<span class="tok-string">"toggle-message"</span>
  <span class="tok-attr">type</span>=<span class="tok-string">"button"</span><span class="tok-tag">&gt;</span>
  Show project note
<span class="tok-tag">&lt;/button&gt;</span>

<span class="tok-tag">&lt;p</span> <span class="tok-attr">id</span>=<span class="tok-string">"project-message"</span> <span class="tok-attr">hidden</span><span class="tok-tag">&gt;</span>
  Remember to test this page on a small screen.
<span class="tok-tag">&lt;/p&gt;</span></code></pre>
</div>
<div class="code-panel">
<div class="code-label">JavaScript — respond to a click</div>
<pre><code><span class="tok-key">const</span> button = document.<span class="tok-key">querySelector</span>(<span class="tok-string">"#toggle-message"</span>);
<span class="tok-key">const</span> message = document.<span class="tok-key">querySelector</span>(<span class="tok-string">"#project-message"</span>);

button.<span class="tok-key">addEventListener</span>(<span class="tok-string">"click"</span>, <span class="tok-key">function</span> () {
  message.hidden = !message.hidden;
});</code></pre>
</div>
<h3>Line-by-line explanation</h3>
<ol>
<li><code>const button = ...</code> gives the button a name in the script. The name <code>button</code> is a variable: a label that stores a reference to something.</li>
<li><code>document</code> means the current web page.</li>
<li><code>querySelector("#toggle-message")</code> searches for an element whose ID is <code>toggle-message</code>. The <code>#</code> means “look for an ID.” The spelling must match the HTML exactly.</li>
<li>The next <code>const</code> finds the paragraph and stores its reference in the name <code>message</code>.</li>
<li><code>addEventListener("click", ...)</code> asks the browser to listen for a click on the button. An event is an action or occurrence, such as a click.</li>
<li><code>function () { ... }</code> holds the instructions to run when the click occurs. The braces mark the beginning and end of those instructions.</li>
<li><code>message.hidden</code> checks whether the message is currently hidden. The value is either <code>true</code> or <code>false</code>.</li>
<li>The exclamation mark <code>!</code> means “not” in this expression. It reverses the Boolean value: <code>!true</code> becomes <code>false</code>, and <code>!false</code> becomes <code>true</code>.</li>
<li><code>message.hidden = !message.hidden;</code> assigns the opposite of the current value. If the message is hidden, the click makes it visible. If it is visible, the click hides it again.</li>
<li>The semicolon ends the statement. The quotation marks around <code>"click"</code> indicate a text string, while <code>true</code> and <code>false</code> are Boolean values and do not need quotation marks.</li>
</ol>
<div class="callout">
<strong>Debugging routine:</strong> if nothing happens, check the IDs first. Then check whether the script loads after the HTML elements exist. Open the browser developer tools and read the Console. Fix one issue at a time and test again.
    </div>
<p><strong>Accessibility reminder:</strong> use a real <code>&lt;button&gt;</code> for an action. A real button can be operated with a keyboard and provides built-in behavior that a plain <code>&lt;div&gt;</code> does not.</p>
</section>
<section class="lesson-card">
<p class="section-kicker">Quality assurance</p>
<h2>Run a final project check</h2>
<p>Do not rely on memory. Use a checklist and test the project as if you were a first-time visitor.</p>
<ul>
<li>All required pages or sections are present and in a logical order.</li>
<li>Navigation links and calls to action lead to the correct destinations.</li>
<li>Images load correctly and have appropriate alternative text when needed.</li>
<li>Text is readable, headings are organized, and color contrast is sufficient.</li>
<li>Interactive controls work with a mouse and keyboard.</li>
<li>Keyboard focus is visible and moves in a sensible order.</li>
<li>Layouts work at desktop, tablet, and mobile widths without unintended horizontal scrolling.</li>
<li>No obvious placeholder text, broken images, or unfinished content remains.</li>
<li>The browser Console has been checked for errors.</li>
<li>Project files are named clearly and the correct final version is saved.</li>
</ul>
</section>
<section class="lesson-card">
<p class="section-kicker">Deployment and presentation</p>
<h2>Make it ready for someone else to use</h2>
<p>Deployment depends on the platform you are using. A project hosted through a service, published through a website builder, or presented locally may have different steps. Follow the process appropriate to your project, and make sure the final version can be accessed for critique.</p>
<ol>
<li><strong>Save and organize:</strong> keep the final files together and use clear names for pages, stylesheets, scripts, and image assets.</li>
<li><strong>Check paths:</strong> verify that image, CSS, JavaScript, and page links point to the correct locations.</li>
<li><strong>Preview the final version:</strong> do a complete walkthrough after your last edits, not just before them.</li>
<li><strong>Publish or prepare access:</strong> confirm that your instructor and classmates can open the project or that you can demonstrate it reliably.</li>
<li><strong>Prepare a short walkthrough:</strong> explain the project goal, audience, key design decisions, one meaningful interaction, and one revision made in response to critique.</li>
</ol>
<div class="callout">
<strong>Do not assume that “it works on my computer” means it is ready.</strong> Reopen the published or final version and test it in the way your audience will access it.
    </div>
</section>
<section class="lesson-card">
<p class="section-kicker">In-class studio</p>
<h2>Production sprint and peer test</h2>
<ol>
<li><strong>Plan — 5 minutes:</strong> choose the most important task from your Week 13 revision list.</li>
<li><strong>Build — 25 minutes:</strong> implement that change, then work through the next most important task if time allows.</li>
<li><strong>Responsive check — 10 minutes:</strong> test desktop, tablet, and mobile layouts.</li>
<li><strong>Peer test — 10 minutes:</strong> ask a classmate to complete one task without explaining how the interface works.</li>
<li><strong>Fix — 10 minutes:</strong> address one issue observed during the peer test.</li>
<li><strong>QA and wrap-up — 10 minutes:</strong> run through the checklist and record what remains.</li>
</ol>
<h3>Submit before leaving class</h3>
<ul>
<li>A working version of your final project or prototype.</li>
<li>A completed checklist for responsive behavior and core functionality.</li>
<li>One piece of feedback from a peer test and the change you made in response.</li>
<li>A short list of remaining tasks, ordered by priority.</li>
<li>A link or clear access method for the final critique.</li>
</ul>
</section>
<section class="lesson-card">
<p class="section-kicker">Reflection</p>
<h2>Before the final critique</h2>
<ul>
<li>Which revision improved the user experience the most?</li>
<li>What did you discover by testing at different screen sizes?</li>
<li>What did a peer do or misunderstand that you did not expect?</li>
<li>What is the biggest remaining risk, and how will you address it?</li>
<li>What design decision are you prepared to explain during the final critique?</li>
</ul>
<div class="callout">
<strong>Next week:</strong> present the finished project, explain your design decisions, reflect on feedback, and identify what you would improve with more time.
    </div>
</section>
<!-- INSTRUCTOR-ONLY SECTION: REMOVE BEFORE PUBLISHING TO STUDENTS -->
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;margin-bottom:18px;">
<p style="margin:0 0 6px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h2 style="margin:0 0 8px;color:#78350f;">Instructor Layout Code — Step by Step</h2>
<p style="color:#78350f;">This section supports the production sprint. It includes a facilitation sequence, an annotated responsive CSS example, a beginner JavaScript walkthrough, and troubleshooting prompts. Remove this entire dashed amber section before publishing the lesson to students.</p>
<h3 style="color:#78350f;">1. Open with the production priority</h3>
<p style="color:#78350f;">Ask students to show their Week 13 brief and name their top three revisions. Have them choose one change that most directly improves the primary user task. Remind them that completion is not the same as polish: a simple, coherent, working interface is stronger than an elaborate interface with broken navigation or unclear content.</p>
<h3 style="color:#78350f;">2. Model a responsive CSS change</h3>
<div class="code-panel">
<div class="code-label">Annotated example — two columns become one</div>
<pre><code><span class="tok-comment">/* Default layout for wider screens */</span>
<span class="tok-selector">.project-layout</span> <span class="tok-punct">{</span>
  <span class="tok-prop">display</span><span class="tok-punct">:</span> <span class="tok-value">grid</span><span class="tok-punct">;</span>
  <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">2fr 1fr</span><span class="tok-punct">;</span>
  <span class="tok-prop">gap</span><span class="tok-punct">:</span> <span class="tok-num">2</span><span class="tok-value">rem</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-comment">/* Override the columns on narrow screens */</span>
<span class="tok-key">@media</span> <span class="tok-punct">(</span><span class="tok-prop">max-width</span><span class="tok-punct">:</span> <span class="tok-num">700</span><span class="tok-value">px</span><span class="tok-punct">)</span> <span class="tok-punct">{</span>
  <span class="tok-selector">.project-layout</span> <span class="tok-punct">{</span>
    <span class="tok-prop">grid-template-columns</span><span class="tok-punct">:</span> <span class="tok-value">1fr</span><span class="tok-punct">;</span>
  <span class="tok-punct">}</span>
<span class="tok-punct">}</span></code></pre>
</div>
<p style="color:#78350f;"><strong>Walkthrough:</strong> the class selector targets an element with <code>class="project-layout"</code>. The first rule creates a two-column grid for wider screens. The media query is a condition: when the viewport is 700 pixels wide or narrower, the second rule changes the grid to one column. The mobile rule overrides the column setting but keeps the rest of the layout properties unless they are changed elsewhere.</p>
<p style="color:#78350f;"><strong>Ask students:</strong> What would happen if the class name in the HTML were <code>project-grid</code> instead? Why might the media query appear to do nothing? Reinforce that the CSS selector and HTML class must match.</p>
<h3 style="color:#78350f;">3. JavaScript walkthrough — explain every part</h3>
<p style="color:#78350f;">Start by reading the HTML IDs aloud and matching them to the selectors in the script. Keep the example visible while explaining each line.</p>
<div class="code-panel">
<div class="code-label">Step A — find the elements</div>
<pre><code><span class="tok-key">const</span> button = document.<span class="tok-key">querySelector</span>(<span class="tok-string">"#toggle-message"</span>);
<span class="tok-key">const</span> message = document.<span class="tok-key">querySelector</span>(<span class="tok-string">"#project-message"</span>);</code></pre>
</div>
<p style="color:#78350f;"><strong>Explain:</strong> <code>const</code> creates a variable name that refers to a value. <code>button</code> and <code>message</code> are names chosen by the programmer. <code>document</code> refers to the page. <code>querySelector</code> searches for the first element matching a CSS selector. The <code>#</code> means ID selector, and the text inside the quotation marks must exactly match the HTML ID.</p>
<div class="code-panel">
<div class="code-label">Step B — listen for the click</div>
<pre><code>button.<span class="tok-key">addEventListener</span>(<span class="tok-string">"click"</span>, <span class="tok-key">function</span> () {
  <span class="tok-comment">// The response goes inside these braces.</span>
});</code></pre>
</div>
<p style="color:#78350f;"><strong>Explain:</strong> <code>addEventListener</code> attaches a listener to the button. <code>"click"</code> names the event. <code>function ()</code> introduces instructions that run when the event occurs. The opening and closing braces define the block of instructions.</p>
<div class="code-panel">
<div class="code-label">Step C — switch the hidden state</div>
<pre><code>button.<span class="tok-key">addEventListener</span>(<span class="tok-string">"click"</span>, <span class="tok-key">function</span> () {
  message.hidden = !message.hidden;
});</code></pre>
</div>
<p style="color:#78350f;"><strong>Explain the exclamation mark:</strong> <code>message.hidden</code> is either <code>true</code> or <code>false</code>. The <code>!</code> operator means “not,” so it reverses that value. If the message is hidden, <code>!message.hidden</code> evaluates to <code>false</code>, making it visible. If it is visible, the expression evaluates to <code>true</code>, hiding it. This is a toggle: each click switches to the opposite state.</p>
<h3 style="color:#78350f;">4. Common problems and instructor prompts</h3>
<ul style="color:#78350f;">
<li><strong>Click does nothing:</strong> “Do the ID names match exactly? Is the script loaded after the button exists?”</li>
<li><strong>Console reports null:</strong> “What did <code>querySelector</code> find? Does the selected element exist at the time this code runs?”</li>
<li><strong>CSS does not change on mobile:</strong> “Is the viewport actually below the breakpoint? Is the class name correct? Is another CSS rule overriding this one?”</li>
<li><strong>Layout overflows:</strong> “Which element is wider than the viewport? Check fixed widths, long unbroken text, images, and grid columns.”</li>
<li><strong>Keyboard navigation is unclear:</strong> “Can you reach every interactive element with Tab? Can you see where focus is? Can you activate a button with the keyboard?”</li>
</ul>
<p style="color:#78350f;">Encourage a one-change-at-a-time workflow: reproduce the problem, inspect the error or element, change one thing, retest, and record the result. This helps students understand what solved the issue.</p>
<h3 style="color:#78350f;">5. Suggested class pacing (approximately 75 minutes)</h3>
<ul style="color:#78350f;">
<li>0–7 min: review project goals and the Week 13 revision priorities.</li>
<li>7–12 min: demonstrate the production passes and explain what “working” means.</li>
<li>12–42 min: individual production sprint with instructor check-ins.</li>
<li>42–52 min: responsive testing at desktop, tablet, and mobile widths.</li>
<li>52–62 min: peer test one primary task and note where the tester hesitates.</li>
<li>62–70 min: fix one issue and run the QA checklist.</li>
<li>70–75 min: collect project access details and remaining task lists.</li>
</ul>
<h3 style="color:#78350f;">6. Quick assessment check</h3>
<p style="color:#78350f;">Before students leave, verify that each student has a working version to test, has checked at least one core task, has reviewed the layout at multiple widths, and has recorded remaining issues by priority. If a project is not yet deployable, accept a reliable local or prototype demonstration for the studio check, but require a clear plan for how the final critique version will be accessed.</p>
</div>
</div>
