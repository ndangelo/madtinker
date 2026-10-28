---
layout: teaching-post
title: AMDE 355 Critique &amp; Final Project Planning (Week 13)
slug: amde-355-critique-final-project-planning-week-13
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68221
source_url: https://nuggetofjoy.com/amde-355-critique-final-project-planning-week-13/
author: admin
categories:
- AMDE 355 ADVANCED WEB DESIGN
tags: []
---

<div class="amde-grid-lesson">

<header class="hero">
<p class="eyebrow">AMDE 355 · Advanced Web Design · Week 13</p>
<h1>Project 2 Critique &amp; Final Project Planning</h1>
<p class="hero-intro">Use critique as a design tool: explain what your interface is trying to do, test whether its structure communicates clearly, and turn feedback into a focused plan for your final project.</p>
<div class="hero-meta">
<span>Studio critique</span><span>Revision strategy</span><span>Final project brief</span>
</div>
</header>
<section class="lesson-card">
<p class="section-kicker">This week</p>
<h2>From feedback to a stronger design</h2>
<p>Good critique is not simply deciding whether a design looks good. It is a structured conversation about goals, audience, hierarchy, navigation, interaction, accessibility, and the evidence that helps us decide what to revise.</p>
<div class="callout">
<strong>Your goal:</strong> leave class with a clear understanding of what is working, what is confusing, and which changes will make the biggest difference in your final project.
    </div>
</section>
<section class="lesson-card">
<p class="section-kicker">Learning outcomes</p>
<h2>By the end of this lesson, you should be able to:</h2>
<ul>
<li>Present a web design concept by explaining its purpose, intended audience, and main user task.</li>
<li>Give specific, constructive feedback based on observable design choices rather than personal taste alone.</li>
<li>Evaluate hierarchy, layout, navigation, interaction, accessibility, and consistency.</li>
<li>Separate high-priority usability problems from lower-priority visual refinements.</li>
<li>Translate critique notes into a realistic revision plan for the final project.</li>
<li>Describe how testing and iteration can improve an interface.</li>
</ul>
</section>
<section class="lesson-card">
<p class="section-kicker">Before critique</p>
<h2>Prepare a short design presentation</h2>
<p>Bring your current prototype, wireframes, or working page. You do not need to pretend the design is finished. The purpose of critique is to identify opportunities to improve it.</p>
<ol>
<li><strong>State the purpose.</strong> What is this site or interface meant to help someone do?</li>
<li><strong>Name the audience.</strong> Who is most likely to use it, and what might they need?</li>
<li><strong>Identify the main task.</strong> What is the most important thing a visitor should be able to accomplish?</li>
<li><strong>Show the structure.</strong> Walk through the page hierarchy, navigation, and key content areas.</li>
<li><strong>Point out one question.</strong> Tell the group what you are unsure about or what you want feedback on.</li>
</ol>
<div class="callout">
<strong>Presentation tip:</strong> describe the design decision and the reason behind it. For example, “I made the primary action the brightest element because it is the most important next step.”
    </div>
</section>
<section class="lesson-card">
<p class="section-kicker">Critique method</p>
<h2>Describe → Interpret → Question → Suggest</h2>
<p>Use this four-part sequence to keep feedback useful and respectful.</p>
<div class="table-wrap">
MADTINKERBLOCKTOKEN0END
</div>
<p><strong>Avoid:</strong> “I don't like it,” “This is wrong,” or “You should just…” These statements do not explain the problem or help the designer decide what to do next.</p>
<p><strong>Try instead:</strong> “I had trouble finding the menu because it blends into the background. Could spacing or contrast help it read more clearly?”</p>
</section>
<section class="lesson-card">
<p class="section-kicker">What to evaluate</p>
<h2>Use a consistent critique checklist</h2>
<div class="table-wrap">
MADTINKERBLOCKTOKEN1END
</div>
</section>
<section class="lesson-card">
<p class="section-kicker">Prioritize revisions</p>
<h2>Fix the biggest problem first</h2>
<p>Critique can generate a long list of suggestions. You do not have to implement every suggestion. Look for repeated observations, issues that prevent users from completing a task, and changes that support the project goal.</p>
<div class="table-wrap">
MADTINKERBLOCKTOKEN2END
</div>
<p>When you choose a revision, write down the observation behind it. “Make it better” is not an actionable task. “Increase the heading contrast so the sections are easier to scan” is actionable.</p>
</section>
<section class="lesson-card">
<p class="section-kicker">Final project planning</p>
<h2>Turn your critique into a project brief</h2>
<p>Your final project should demonstrate intentional design decisions, not just additional content or decoration. Use the brief below to define what you will build and how you will evaluate it.</p>
<ol>
<li><strong>Project concept:</strong> In one or two sentences, describe the site or interactive experience.</li>
<li><strong>Audience:</strong> Identify the primary audience and a need or goal they have.</li>
<li><strong>Primary user task:</strong> State the most important action a visitor should complete.</li>
<li><strong>Content and structure:</strong> List the key sections or pages and how users will move between them.</li>
<li><strong>Visual direction:</strong> Identify your intended tone, typography, color approach, image style, and layout strategy.</li>
<li><strong>Interaction:</strong> Name any meaningful interactions and explain what each one helps the user do.</li>
<li><strong>Responsive plan:</strong> Describe how the design will adapt to smaller screens.</li>
<li><strong>Accessibility and quality:</strong> Identify checks for readable contrast, keyboard access, visible focus, image descriptions, links, and performance.</li>
<li><strong>Revision goals:</strong> Select three critique findings you intend to address, ranked by priority.</li>
<li><strong>Success criteria:</strong> Explain how you will know the final design is clear, usable, and complete.</li>
</ol>
</section>
<section class="lesson-card">
<p class="section-kicker">Small JavaScript connection</p>
<h2>Interaction should help the user</h2>
<p>If your final project includes JavaScript, start with a simple question: what user problem does this interaction solve? An interaction should make a task clearer or easier, not exist only because it is technically possible.</p>
<p>This beginner example makes a button reveal a short explanation. It follows the pattern <strong>find → listen → respond</strong>:</p>
<div class="code-panel">
<div class="code-label">HTML — the content and button</div>
<pre><code><span class="tok-tag">&lt;button</span> <span class="tok-attr">id</span>=<span class="tok-string">"show-tip"</span><span class="tok-tag">&gt;</span>Show design tip<span class="tok-tag">&lt;/button&gt;</span>
<span class="tok-tag">&lt;p</span> <span class="tok-attr">id</span>=<span class="tok-string">"design-tip"</span> <span class="tok-attr">hidden</span><span class="tok-tag">&gt;</span>
  Make the primary action easy to find.
<span class="tok-tag">&lt;/p&gt;</span></code></pre>
</div>
<div class="code-panel">
<div class="code-label">JavaScript — make the button work</div>
<pre><code><span class="tok-key">const</span> button = document.<span class="tok-key">querySelector</span>(<span class="tok-string">"#show-tip"</span>);
<span class="tok-key">const</span> tip = document.<span class="tok-key">querySelector</span>(<span class="tok-string">"#design-tip"</span>);

button.<span class="tok-key">addEventListener</span>(<span class="tok-string">"click"</span>, <span class="tok-key">function</span> () {
  tip.hidden = <span class="tok-key">false</span>;
});</code></pre>
</div>
<h3>Line-by-line explanation</h3>
<ol>
<li><code>const button = ...</code> creates a named reference called <code>button</code>. Think of it as a label that lets the script refer to the button in the HTML.</li>
<li><code>document</code> represents the web page currently open in the browser.</li>
<li><code>querySelector("#show-tip")</code> searches the page for the element whose ID is <code>show-tip</code>. The <code>#</code> means “find an ID.” The ID in JavaScript must match the ID in HTML exactly.</li>
<li>The next line finds the paragraph with the ID <code>design-tip</code> and stores a reference to it in the name <code>tip</code>.</li>
<li><code>addEventListener("click", ...)</code> tells the browser to wait for a click on the button. An event is something that happens, such as a click, key press, or form submission.</li>
<li><code>function () { ... }</code> contains the instructions to run when that click happens. The curly braces mark the start and end of those instructions.</li>
<li><code>tip.hidden = false;</code> changes the paragraph's hidden setting to false, so the paragraph becomes visible. In JavaScript, <code>false</code> is a Boolean value meaning “no” or “not enabled.”</li>
<li>The semicolon ends a statement. JavaScript can sometimes insert these automatically, but using them consistently can make beginner code easier to read.</li>
</ol>
<div class="callout">
<strong>Debugging tip:</strong> if the button does nothing, check the spelling of both IDs first. Then confirm the script runs after the HTML elements exist. Open the browser developer tools and look at the Console for errors.
    </div>
<p><strong>Design question:</strong> does revealing this tip help someone complete a task, or is it only decorative? Use that question to judge interactions in your final project.</p>
</section>
<section class="lesson-card">
<p class="section-kicker">In-class activity</p>
<h2>Critique, prioritize, plan</h2>
<p>Work in small groups. Each student will present their current design and receive feedback. Keep the discussion focused on the interface and the user’s experience.</p>
<ol>
<li><strong>Present — 2 minutes:</strong> explain the concept, audience, main task, and one question you have.</li>
<li><strong>Silent review — 2 minutes:</strong> reviewers explore the design without immediately offering solutions. Note where you look first, what you understand, and where you hesitate.</li>
<li><strong>Feedback — 5 minutes:</strong> use Describe → Interpret → Question → Suggest. Include one strength and one opportunity to improve.</li>
<li><strong>Designer reflection — 2 minutes:</strong> the designer summarizes what they heard and asks for clarification. The designer does not need to defend every decision.</li>
<li><strong>Prioritize — 3 minutes:</strong> select the three most useful revisions and rank them high, medium, or low.</li>
<li><strong>Plan — 5 minutes:</strong> complete the final project brief and identify the next concrete step.</li>
</ol>
<h3>Submit before leaving class</h3>
<ul>
<li>A concise project concept and intended audience.</li>
<li>The primary user task and proposed site structure.</li>
<li>Three prioritized revisions based on critique.</li>
<li>At least two success criteria you can use to evaluate the final project.</li>
<li>One question or risk you still need to resolve.</li>
</ul>
</section>
<section class="lesson-card">
<p class="section-kicker">Reflection</p>
<h2>Before next class</h2>
<p>Write a short reflection answering these questions:</p>
<ul>
<li>What feedback did you hear more than once?</li>
<li>Which suggestion will make the biggest difference for your audience, and why?</li>
<li>Which suggestion will you not use? Explain your reasoning respectfully.</li>
<li>What is the first revision you will make, and how will you check whether it worked?</li>
</ul>
<div class="callout">
<strong>Remember:</strong> critique is not a vote on whether a design is good or bad. It is a way to gather observations, question assumptions, and make more intentional decisions.
    </div>
</section>
<!-- INSTRUCTOR-ONLY SECTION: REMOVE BEFORE PUBLISHING TO STUDENTS -->
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;margin-bottom:18px;">
<p style="margin:0 0 6px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h2 style="margin:0 0 8px;color:#78350f;">Instructor Layout Code — Step by Step</h2>
<p style="color:#78350f;">Use this section as a facilitation guide. It explains how to model the critique process, help students turn observations into revisions, and introduce the small JavaScript example without assuming programming expertise.</p>
<h3 style="color:#78350f;">1. Set expectations before the first presentation</h3>
<p style="color:#78350f;">Explain that critique is about the design and the experience it creates, not the designer’s worth or talent. Ask students to describe what they see before they suggest a solution. Invite designers to listen, take notes, and ask clarifying questions rather than respond defensively.</p>
<h3 style="color:#78350f;">2. Model the four critique steps aloud</h3>
<div class="code-panel">
<div class="code-label">Instructor demonstration — sample feedback</div>
<pre><code><span class="tok-comment">/* DESCRIBE */</span>
<span class="tok-punct">“</span>The heading and the body text are almost the same size.<span class="tok-punct">”</span>

<span class="tok-comment">/* INTERPRET */</span>
<span class="tok-punct">“</span>I had to slow down to figure out where the next section begins.<span class="tok-punct">”</span>

<span class="tok-comment">/* QUESTION */</span>
<span class="tok-punct">“</span>Which content do you want people to notice first?<span class="tok-punct">”</span>

<span class="tok-comment">/* SUGGEST */</span>
<span class="tok-punct">“</span>You might try a stronger size difference between the heading and body text.<span class="tok-punct">”</span></code></pre>
</div>
<p style="color:#78350f;">Point out that the suggestion comes after an observation and a question. The designer still decides whether the suggestion fits the project goals.</p>
<h3 style="color:#78350f;">3. Help students rank feedback</h3>
<ul style="color:#78350f;">
<li>Ask: “Can a visitor complete the main task?” If not, treat that as a high-priority issue.</li>
<li>Ask: “Does the page communicate its structure clearly?” If not, prioritize hierarchy and navigation before decorative polish.</li>
<li>Ask: “Is this change required for clarity, usability, accessibility, or project goals?” This helps distinguish functional needs from personal taste.</li>
<li>Ask students to support a revision with a reason: “I will change X because the critique showed Y.”</li>
</ul>
<h3 style="color:#78350f;">4. JavaScript walkthrough: find → listen → respond</h3>
<p style="color:#78350f;">This is intentionally a very small interaction. Keep the focus on how JavaScript connects a user action to a visible response. Students do not need to memorize the code in one sitting.</p>
<div class="code-panel">
<div class="code-label">Step A — find the button in the page</div>
<pre><code><span class="tok-key">const</span> button = document.<span class="tok-key">querySelector</span>(<span class="tok-string">"#show-tip"</span>);</code></pre>
</div>
<p style="color:#78350f;"><strong>Explain:</strong> <code>const</code> creates a name; <code>button</code> is the name; <code>document</code> is the page; <code>querySelector</code> looks for a matching element; <code>#show-tip</code> means the element with that ID. If the ID is spelled differently in HTML, the lookup will not find the intended element.</p>
<div class="code-panel">
<div class="code-label">Step B — find the paragraph too</div>
<pre><code><span class="tok-key">const</span> tip = document.<span class="tok-key">querySelector</span>(<span class="tok-string">"#design-tip"</span>);</code></pre>
</div>
<p style="color:#78350f;"><strong>Explain:</strong> the script now has a name for the paragraph it needs to reveal. The name <code>tip</code> is not a special JavaScript word; it is a label chosen by the programmer.</p>
<div class="code-panel">
<div class="code-label">Step C — listen for a click</div>
<pre><code>button.<span class="tok-key">addEventListener</span>(<span class="tok-string">"click"</span>, <span class="tok-key">function</span> () {
  <span class="tok-comment">// The code inside runs after a click.</span>
});</code></pre>
</div>
<p style="color:#78350f;"><strong>Explain:</strong> an event listener waits for an event. The word <code>"click"</code> is in quotation marks because it is text naming the event. The function contains the instructions that run when the event occurs. The parentheses and braces are part of JavaScript’s syntax; explain their role rather than expecting students to memorize them immediately.</p>
<div class="code-panel">
<div class="code-label">Step D — respond to the click</div>
<pre><code>button.<span class="tok-key">addEventListener</span>(<span class="tok-string">"click"</span>, <span class="tok-key">function</span> () {
  tip.hidden = <span class="tok-key">false</span>;
});</code></pre>
</div>
<p style="color:#78350f;"><strong>Explain:</strong> the statement changes the paragraph’s <code>hidden</code> property to <code>false</code>. The paragraph was initially hidden in the HTML. The click changes that state so the browser displays it. <code>false</code> is not inside quotation marks because it is a Boolean value, not a text string.</p>
<h3 style="color:#78350f;">5. Common errors and how to coach debugging</h3>
<ul style="color:#78350f;">
<li><strong>Nothing happens:</strong> compare the IDs in the HTML and JavaScript letter by letter.</li>
<li><strong>Console says it cannot read a property:</strong> the selector may not have found the element, or the script may be running before the HTML exists.</li>
<li><strong>The button is visible but the tip never appears:</strong> check whether the paragraph has the <code>hidden</code> attribute and whether the click handler contains <code>tip.hidden = false;</code>.</li>
<li><strong>Code appears as text:</strong> confirm JavaScript is inside a <code>&lt;script&gt;</code> element in the HTML document or in a correctly linked JavaScript file.</li>
<li><strong>Syntax error:</strong> look for missing quotation marks, parentheses, braces, or a misspelled method name.</li>
</ul>
<p style="color:#78350f;">Use the debugging sequence: reproduce the issue, read the exact error, locate the named line or selector, make one change, and test again. Avoid changing several things at once because students will not know which change fixed the problem.</p>
<h3 style="color:#78350f;">6. Suggested class pacing (approximately 75 minutes)</h3>
<ul style="color:#78350f;">
<li>0–8 min: explain critique norms and the Describe → Interpret → Question → Suggest method.</li>
<li>8–15 min: instructor models a short critique using a sample screen or student volunteer.</li>
<li>15–50 min: small-group presentations and feedback rounds.</li>
<li>50–60 min: students rank findings and write their three revision goals.</li>
<li>60–68 min: walk through the final project brief and success criteria.</li>
<li>68–73 min: explain the small JavaScript example and the find → listen → respond pattern.</li>
<li>73–75 min: collect the planning deliverable and clarify the next milestone.</li>
</ul>
<h3 style="color:#78350f;">7. Quick assessment check</h3>
<p style="color:#78350f;">Before students leave, verify that each planning brief identifies a clear audience, a primary user task, a workable structure, three prioritized revisions, and at least two success criteria. If a brief only lists visual changes, ask the student to identify one usability or content goal as well.</p>
</div>
</div>
