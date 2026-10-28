---
layout: teaching-post
title: 'AMDE 155: The CSS Box Model &amp; Spacing (Week 7)'
slug: amde-155-the-css-box-model-spacing-week-7
date: '2026-10-22'
modified: '2026-10-23'
status: published
wordpress_id: 68166
source_url: https://nuggetofjoy.com/amde-155-the-css-box-model-spacing-week-7/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
- Projects
tags: []
---

{::nomarkdown}
<div class="amde-grid-lesson">
<header class="ag-hero">
<p class="ag-eyebrow">AMDE 155 · INTRODUCTION TO WEB DESIGN · WEEK 07</p>
<h1>Give Everything Some Space</h1>
<p>Why do some websites feel organized and comfortable while others feel crowded or chaotic? Often, the answer is spacing. This week, we will explore the CSS Box Model and learn how margins, padding, borders, and dimensions help organize a page.</p>
<div class="ag-chips">
<span class="ag-chip">CSS Box Model</span>
<span class="ag-chip">Margin</span>
<span class="ag-chip">Padding</span>
<span class="ag-chip">Borders &amp; Width</span>
</div>
</header>
<section class="ag-section">
<p class="ag-eyebrow">01 / THE BIG IDEA</p>
<h2>Every element takes up space</h2>
<p>Think about a poster, magazine spread, or gallery wall. The placement of each element matters, but so does the empty space around it. Space helps separate information, create emphasis, and make a composition easier to understand.</p>
<p>Web pages work in a similar way. CSS lets us control the space inside and outside elements so the page feels intentional rather than crowded.</p>
<div class="ag-grid">
<article class="ag-card">
<span class="ag-number">01</span>
<h3>Content</h3>
<p>The actual text, image, or other information inside an element.</p>
</article>
<article class="ag-card">
<span class="ag-number">02</span>
<h3>Padding</h3>
<p>The space between the content and its border.</p>
</article>
<article class="ag-card">
<span class="ag-number">03</span>
<h3>Margin</h3>
<p>The space outside an element that separates it from other elements.</p>
</article>
</div>
<div class="ag-callout ag-green">
<strong>Today's goal:</strong> Use the Box Model to create comfortable spacing around headings, paragraphs, images, and content panels.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">02 / THE BOX MODEL</p>
<h2>Understand the parts of a box</h2>
<p>In CSS, every element can be understood as a rectangular box. The Box Model describes the layers that determine how much space that element occupies.</p>
<div class="ag-box-demo">
<span class="ag-box-label">OUTSIDE THE ELEMENT</span>
<div class="ag-box-inner">
<span class="ag-box-label">CONTENT AREA</span>
        Your content goes here
      </div>
<span class="ag-box-label">The dashed outline represents the surrounding area in this illustration.</span>
</div>
<p>Imagine the layers from the center outward:</p>
<ol>
<li><strong>Content:</strong> Your text, image, or other material.</li>
<li><strong>Padding:</strong> Space between the content and the border.</li>
<li><strong>Border:</strong> The visible edge around the element.</li>
<li><strong>Margin:</strong> Space outside the border.</li>
</ol>
<div class="ag-callout">
<strong>Think of a framed photograph:</strong> The photograph is the content, the mat around it is like padding, the frame is like a border, and the space between that frame and the next object is like margin.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">03 / PADDING</p>
<h2>Create space inside an element</h2>
<p>Padding controls the space between an element's content and its border. Increasing padding can make a box feel more comfortable and less cramped.</p>
<div class="ag-code-label ag-css-label">ADD PADDING</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#edf3ff</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">20px</span>;
}</code></pre>
<p>This rule gives every side of the element 20 pixels of space between the content and its edge.</p>
<h3>Experiment with padding</h3>
<div class="ag-code-label ag-css-label">TRY THESE VALUES</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">5px</span>;
}</code></pre>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">30px</span>;
}</code></pre>
<p>Compare the two versions. The larger value creates more room inside the element without changing the wording.</p>
<div class="ag-callout ag-green">
<strong>Design tip:</strong> Padding is especially useful for buttons, cards, callout boxes, and sections where text needs breathing room.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">04 / MARGIN</p>
<h2>Create space between elements</h2>
<p>Margin controls the space outside an element's border. Use it to separate sections, create distance between headings and paragraphs, or prevent content blocks from feeling crowded.</p>
<div class="ag-code-label ag-css-label">ADD MARGIN</div>
<pre class="ag-code"><code><span class="ag-tag">h2</span> {
  <span class="ag-css-prop">margin-bottom</span>: <span class="ag-css-value">20px</span>;
}</code></pre>
<p>This adds space below every level-two heading targeted by the rule.</p>
<h3>Four margin properties</h3>
<div class="ag-code-label ag-css-label">CONTROL EACH SIDE</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">margin-top</span>: <span class="ag-css-value">10px</span>;
  <span class="ag-css-prop">margin-right</span>: <span class="ag-css-value">15px</span>;
  <span class="ag-css-prop">margin-bottom</span>: <span class="ag-css-value">20px</span>;
  <span class="ag-css-prop">margin-left</span>: <span class="ag-css-value">15px</span>;
}</code></pre>
<p>You can also use the shorthand property to set all four sides at once:</p>
<div class="ag-code-label ag-css-label">SHORTHAND</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">20px</span>;
}</code></pre>
<div class="ag-callout ag-yellow">
<strong>Easy way to remember:</strong> Padding is inside the border. Margin is outside the border. Try changing each one separately so you can see the difference.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">05 / BORDERS</p>
<h2>Define the edge of an element</h2>
<p>A border creates a visible boundary around an element. Borders can be subtle, bold, solid, dashed, or rounded. They can help organize a layout without adding more content.</p>
<div class="ag-code-label ag-css-label">A SIMPLE BORDER</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">border</span>: <span class="ag-css-value">2px solid #2855d9</span>;
}</code></pre>
<p>The shorthand combines three values:</p>
<ul>
<li><code class="ag-inline">2px</code> is the border thickness.</li>
<li><code class="ag-inline">solid</code> is the border style.</li>
<li><code class="ag-inline">#2855d9</code> is the border color.</li>
</ul>
<div class="ag-code-label ag-css-label">ROUND THE CORNERS</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">border</span>: <span class="ag-css-value">1px solid #dce3ed</span>;
  <span class="ag-css-prop">border-radius</span>: <span class="ag-css-value">12px</span>;
}</code></pre>
<p>The <code class="ag-inline">border-radius</code> property rounds the corners. Larger values create a more rounded appearance.</p>
<div class="ag-callout">
<strong>Design tip:</strong> Borders can separate content without requiring a different background color. Use them when they help clarify the organization of the page.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">06 / WIDTH &amp; HEIGHT</p>
<h2>Control the size of a box</h2>
<p>CSS can control an element's width and height. Fixed values can be useful for specific components, but flexible values often work better when a page needs to adapt to different screen sizes.</p>
<div class="ag-code-label ag-css-label">A FIXED WIDTH</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">300px</span>;
}</code></pre>
<p>This asks the browser to make the content box 300 pixels wide under the default content-box sizing model.</p>
<div class="ag-code-label ag-css-label">A FLEXIBLE WIDTH</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">100%</span>;
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">600px</span>;
}</code></pre>
<p>This lets the element fill the available width up to 600 pixels. It is often more adaptable than specifying a large fixed width.</p>
<div class="ag-callout ag-yellow">
<strong>Be careful with height:</strong> Avoid forcing long text into a small fixed-height box. Content may overflow or become difficult to read. Let the element grow naturally unless you have a specific design reason to constrain it.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">07 / BOX-SIZING</p>
<h2>Make dimensions easier to predict</h2>
<p>By default, CSS calculates an element's declared width using its content box. Padding and borders are then added outside that width. This can make an element larger than expected.</p>
<div class="ag-code-label ag-css-label">THE DEFAULT CONTENT-BOX MODEL</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">300px</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">20px</span>;
  <span class="ag-css-prop">border</span>: <span class="ag-css-value">5px solid #2855d9</span>;
}</code></pre>
<p>With the default sizing model, the total width is 300 pixels of content, plus 40 pixels of horizontal padding, plus 10 pixels of borders: 350 pixels altogether.</p>
<div class="ag-code-label ag-css-label">A COMMON MODERN DEFAULT</div>
<pre class="ag-code"><code><span class="ag-tag">*</span> {
  <span class="ag-css-prop">box-sizing</span>: <span class="ag-css-value">border-box</span>;
}</code></pre>
<p>With <code class="ag-inline">border-box</code>, the declared width includes the content, padding, and border. In this example, the total width remains 300 pixels, and the content area becomes smaller to make room for padding and borders.</p>
<div class="ag-callout ag-green">
<strong>Why use it?</strong> The <code class="ag-inline">box-sizing: border-box;</code> rule makes dimensions easier to reason about, especially when you start building columns and more complex layouts. We will use this rule in later lessons.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">08 / SYNCHRONOUS CLASS ACTIVITY</p>
<h2>Turn a crowded page into a clean layout</h2>
<p>During our live session, we will take a simple page with headings, paragraphs, and a list. We will use spacing and borders to create a more organized design.</p>
<div class="ag-code-label ag-html-label">STARTER HTML</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My Creative Practice</span><span class="ag-tag">&lt;/h1&gt;</span>

<span class="ag-tag">&lt;section</span> <span class="ag-attr">class</span>=<span class="ag-value">"card"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">What I Do</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I enjoy exploring ideas through art and design.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span>

<span class="ag-tag">&lt;section</span> <span class="ag-attr">class</span>=<span class="ag-value">"card"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">My Interests</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;ul&gt;</span>
    <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Photography</span><span class="ag-tag">&lt;/li&gt;</span>
    <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Drawing</span><span class="ag-tag">&lt;/li&gt;</span>
    <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Graphic design</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;/ul&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></code></pre>
<div class="ag-code-label ag-css-label">STARTER CSS</div>
<pre class="ag-code"><code><span class="ag-tag">body</span> {
  <span class="ag-css-prop">font-family</span>: <span class="ag-css-value">Arial, sans-serif</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#f2f4f8</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#182033</span>;
}

<span class="ag-tag">.card</span> {
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#ffffff</span>;
  <span class="ag-css-prop">border</span>: <span class="ag-css-value">1px solid #dce3ed</span>;
}</code></pre>
<h3>Guided exercise</h3>
<ol class="ag-steps">
<li>Open a new CodePen or your existing project.</li>
<li>Add the starter HTML to the HTML panel and the starter CSS to the CSS panel.</li>
<li>Add <code class="ag-inline">padding: 20px;</code> to the card rule.</li>
<li>Add <code class="ag-inline">margin-bottom: 20px;</code> to create space between the cards.</li>
<li>Add <code class="ag-inline">border-radius: 12px;</code> to round the card corners.</li>
<li>Change the padding and margin values to compare the results.</li>
<li>Add <code class="ag-inline">box-sizing: border-box;</code> to the universal selector.</li>
</ol>
<div class="ag-callout">
<strong>Discussion question:</strong> Which change made the page feel more organized: padding, margin, the border, or the rounded corners? Explain what each property contributed.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">09 / INDEPENDENT PROJECT</p>
<h2>Design a page with intentional spacing</h2>
<p>Continue working on your personal-interest website. This week, focus on spacing and the way content blocks relate to one another. Your goal is to make the page feel organized and comfortable to explore.</p>
<div class="ag-grid">
<article class="ag-card">
<span class="ag-number">01</span>
<h3>Identify the boxes</h3>
<p>Choose at least two sections or content areas that could benefit from clearer separation.</p>
</article>
<article class="ag-card">
<span class="ag-number">02</span>
<h3>Adjust the spacing</h3>
<p>Use padding inside content areas and margin to separate them from surrounding elements.</p>
</article>
<article class="ag-card">
<span class="ag-number">03</span>
<h3>Refine the edges</h3>
<p>Experiment with borders, corner radius, and flexible width.</p>
</article>
</div>
<h3>Project requirements</h3>
<ul class="ag-checklist">
<li>Continue using your existing HTML and CSS project.</li>
<li>Use padding to add space inside at least two content areas.</li>
<li>Use margin to separate sections or elements.</li>
<li>Apply at least one border or border-radius rule.</li>
<li>Use width or max-width to control the size of a content area.</li>
<li>Include <code class="ag-inline">box-sizing: border-box;</code> in your CSS.</li>
<li>Keep the text readable and the existing links functional.</li>
<li>Submit your working CodePen link through D2L.</li>
</ul>
<div class="ag-callout ag-yellow">
<strong>Keep it manageable:</strong> You do not need to create a complicated layout yet. Focus on understanding the difference between padding and margin and use those properties to make the page more comfortable to read.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">10 / SUBMISSION &amp; REFLECTION</p>
<h2>Explain how spacing changed your page</h2>
<p>Submit your CodePen link through the Week 7 assignment area in D2L. Before submitting, check that the sections have enough breathing room and that the page still works at a narrower browser width.</p>
<h3>Reflection questions</h3>
<ol>
<li>In your own words, what is the difference between margin and padding?</li>
<li>Which spacing change made the biggest improvement to your page?</li>
<li>What did you discover about the way width, padding, and borders affect an element's size?</li>
</ol>
</section>
<section class="ag-section">
<p class="ag-eyebrow">11 / QUICK REFERENCE</p>
<h2>CSS properties from this week</h2>
<div class="ag-grid">
<article class="ag-card">
<h3><code>padding</code></h3>
<p>Controls space inside an element's border.</p>
</article>
<article class="ag-card">
<h3><code>margin</code></h3>
<p>Controls space outside an element's border.</p>
</article>
<article class="ag-card">
<h3><code>border</code></h3>
<p>Creates a visible edge around an element.</p>
</article>
<article class="ag-card">
<h3><code>border-radius</code></h3>
<p>Rounds an element's corners.</p>
</article>
<article class="ag-card">
<h3><code>width</code></h3>
<p>Sets an element's width.</p>
</article>
<article class="ag-card">
<h3><code>max-width</code></h3>
<p>Sets the maximum width an element can reach.</p>
</article>
<article class="ag-card">
<h3><code>box-sizing</code></h3>
<p>Controls how an element's dimensions are calculated.</p>
</article>
</div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">12 / LOOKING AHEAD</p>
<h2>Next week: Midterm website project</h2>
<p>In Week 8, you will bring together the HTML and CSS skills developed so far. Your midterm project will give you an opportunity to organize content, create navigation, use images, develop a visual identity, establish typography, and control spacing.</p>
<p>Before the midterm, review your previous assignments and make sure you understand the basic purpose of each property. You can reuse and adapt code examples from earlier lessons as you build your project.</p>
</section>
<!-- INSTRUCTOR-ONLY SECTION: REMOVE THIS ENTIRE SECTION BEFORE PUBLISHING -->
<section class="ag-section ag-instructor-only">
<p class="ag-eyebrow">INSTRUCTOR ONLY / REMOVE BEFORE PUBLISHING</p>
<h2>Instructor walkthrough: Make spacing visible</h2>
<p>Use this sequence during the live CodePen demonstration. Build the styles in small steps, preview after each change, and ask students to predict what will happen before you type.</p>
<p class="ag-instructor-note">Remove this entire section, including the instructor-only comments, before publishing the student-facing lesson.</p>
<h3>Step 1 — Start with the HTML</h3>
<p>Paste the starter markup into the HTML panel. Point out that both content areas use the same <code class="ag-inline">card</code> class, so one CSS rule can style both.</p>
<div class="ag-code-label ag-html-label">HTML · STARTER</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My Creative Practice</span><span class="ag-tag">&lt;/h1&gt;</span>
<span class="ag-tag">&lt;section</span> <span class="ag-attr">class</span>=<span class="ag-value">"card"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">What I Do</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I enjoy exploring ideas through art and design.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span>
<span class="ag-tag">&lt;section</span> <span class="ag-attr">class</span>=<span class="ag-value">"card"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">My Interests</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;ul&gt;</span>
    <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Photography</span><span class="ag-tag">&lt;/li&gt;</span>
    <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Drawing</span><span class="ag-tag">&lt;/li&gt;</span>
    <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Graphic design</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;/ul&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></code></pre>
<p><strong>Ask:</strong> What looks crowded? Which parts need space inside the box, and which need space between boxes?</p>
<h3>Step 2 — Add padding (inside space)</h3>
<p>Add the padding declaration and preview the page. Explain that padding moves content away from the border without changing the text itself.</p>
<div class="ag-code-label ag-css-label">CSS · PADDING</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#ffffff</span>;
  <span class="ag-css-prop">border</span>: <span class="ag-css-value">1px solid #dce3ed</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">20px</span>;
}</code></pre>
<p>Change <code class="ag-inline">20px</code> to <code class="ag-inline">5px</code>, then <code class="ag-inline">30px</code>. Ask students which version is easiest to read and why.</p>
<h3>Step 3 — Add margin (outside space)</h3>
<p>Add margin below each card to create a visible gap between the sections.</p>
<div class="ag-code-label ag-css-label">CSS · MARGIN</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">margin-bottom</span>: <span class="ag-css-value">20px</span>;
}</code></pre>
<p><strong>Ask:</strong> What changes when you increase margin instead of padding? Point to the border to help students distinguish inside from outside space.</p>
<h3>Step 4 — Add a deliberate mistake</h3>
<p>Temporarily type <code class="ag-inline">pading</code> instead of <code class="ag-inline">padding</code>. Ask students why the spacing does not change. Explain that the browser ignores a declaration when the property name is invalid.</p>
<div class="ag-code-label ag-css-label">CSS · INTENTIONAL ERROR</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">pading</span>: <span class="ag-css-value">20px</span>;
}</code></pre>
<p>Correct the property and check the preview:</p>
<div class="ag-code-label ag-css-label">CSS · CORRECTED</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">20px</span>;
}</code></pre>
<p><strong>Ask:</strong> When a style seems not to work, what should you check first: the selector, the property spelling, or the value?</p>
<h3>Step 5 — Add border and rounded corners</h3>
<div class="ag-code-label ag-css-label">CSS · EDGES</div>
<pre class="ag-code"><code><span class="ag-tag">.card</span> {
  <span class="ag-css-prop">border</span>: <span class="ag-css-value">1px solid #dce3ed</span>;
  <span class="ag-css-prop">border-radius</span>: <span class="ag-css-value">12px</span>;
}</code></pre>
<p>Compare a sharp corner with a rounded corner. Ask students whether the border helps separate content or is merely decorative in this example.</p>
<h3>Step 6 — Demonstrate box sizing</h3>
<p>Explain the arithmetic in the lesson: with <code class="ag-inline">width: 300px</code>, <code class="ag-inline">padding: 20px</code> on both horizontal sides, and a 5px border on each side, the default content-box total is 350px.</p>
<div class="ag-code-label ag-css-label">CSS · PREDICTABLE SIZING</div>
<pre class="ag-code"><code><span class="ag-tag">*</span> {
  <span class="ag-css-prop">box-sizing</span>: <span class="ag-css-value">border-box</span>;
}</code></pre>
<p>Ask students what they expect to happen to the total width when this rule is added. Emphasize that the declared width now includes padding and borders.</p>
<h3>Step 7 — Quick student check</h3>
<ul class="ag-checklist">
<li>Students can explain the difference between padding and margin.</li>
<li>Students can identify what a border and border radius do.</li>
<li>Students can explain why a fixed width can cause problems on a narrow screen.</li>
<li>Students can describe how <code class="ag-inline">box-sizing: border-box;</code> changes width calculations.</li>
<li>Students can find and correct the deliberate spelling error.</li>
</ul>
</section>
<!-- END INSTRUCTOR-ONLY SECTION -->
<footer class="ag-footer">
<strong>AMDE 155 · Introduction to Web Design</strong><br/>
    Week 07 — The CSS Box Model &amp; Spacing<br/>
<span class="ag-muted">Good design gives every element room to work.</span>
</footer>
</div>
{:/nomarkdown}
