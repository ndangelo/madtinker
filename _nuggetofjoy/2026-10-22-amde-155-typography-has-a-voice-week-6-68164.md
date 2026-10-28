---
layout: post
title: 'AMDE 155: Typography Has a Voice (Week 6)'
slug: amde-155-typography-has-a-voice-week-6
date: '2026-10-22'
modified: '2026-10-23'
status: published
wordpress_id: 68164
source_url: https://nuggetofjoy.com/amde-155-typography-has-a-voice-week-6/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
tags: []
---

<div class="amde-grid-lesson">
<header class="ag-hero">
<p class="ag-eyebrow">AMDE 155 · INTRODUCTION TO WEB DESIGN · WEEK 06</p>
<h1>Typography Has a Voice</h1>
<p>Typography does more than make words look interesting. It creates hierarchy, establishes personality, and determines how comfortable a page is to read. This week, we will use CSS to make thoughtful decisions about typefaces, size, spacing, and alignment.</p>
<div class="ag-chips">
<span class="ag-chip">Typography</span>
<span class="ag-chip">Font Families</span>
<span class="ag-chip">Text Hierarchy</span>
<span class="ag-chip">Readability</span>
</div>
</header>
<section class="ag-section">
<p class="ag-eyebrow">01 / THE BIG IDEA</p>
<h2>Words have a visual personality</h2>
<p>Imagine a luxury fashion website using a playful handwritten font for every heading, or a children's activity page using tiny, tightly spaced text. The content might be perfectly good, but the typography would make the experience feel confusing.</p>
<p>Typography helps establish a visual tone while making information easier to understand. As designers, we need to consider both expression and readability.</p>
<div class="ag-grid">
<article class="ag-card">
<span class="ag-number">01</span>
<h3>Personality</h3>
<p>Typefaces can feel formal, playful, technical, expressive, traditional, or contemporary.</p>
</article>
<article class="ag-card">
<span class="ag-number">02</span>
<h3>Hierarchy</h3>
<p>Size and weight help visitors distinguish page titles, section headings, and body text.</p>
</article>
<article class="ag-card">
<span class="ag-number">03</span>
<h3>Readability</h3>
<p>Line spacing, text size, and line length affect how easily visitors can read your content.</p>
</article>
</div>
<div class="ag-callout ag-green">
<strong>Today's goal:</strong> Use CSS to establish a typographic system with a heading style, a readable body font, and comfortable spacing.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">02 / FONT FAMILIES</p>
<h2>Choose a typeface that fits the project</h2>
<p>CSS uses the <code class="ag-inline">font-family</code> property to specify which typeface should display text. Different font families have different visual characteristics.</p>
<div class="ag-type-sample">
<p class="ag-type-label">Sans serif · Clean and contemporary</p>
<p style="font-family:Arial,sans-serif;font-size:1.5rem;margin:0;">Design is a way of seeing.</p>
</div>
<div class="ag-type-sample">
<p class="ag-type-label">Serif · Traditional and editorial</p>
<p style="font-family:Georgia,serif;font-size:1.5rem;margin:0;">Design is a way of seeing.</p>
</div>
<div class="ag-type-sample">
<p class="ag-type-label">Monospace · Technical and structured</p>
<p style="font-family:monospace;font-size:1.3rem;margin:0;">Design is a way of seeing.</p>
</div>
<p>These are examples of common font categories. None is automatically better than the others. The right choice depends on the content, audience, and intended mood.</p>
<div class="ag-code-label ag-css-label">TRY THESE FONT FAMILIES</div>
<pre class="ag-code"><code><span class="ag-tag">body</span> {
  <span class="ag-css-prop">font-family</span>: <span class="ag-css-value">Arial, sans-serif</span>;
}

<span class="ag-tag">h1</span> {
  <span class="ag-css-prop">font-family</span>: <span class="ag-css-value">Georgia, serif</span>;
}</code></pre>
<p>This example uses a sans-serif typeface for body text and a serif typeface for the main heading. Try switching the two families to see how the page changes.</p>
<div class="ag-callout">
<strong>What does the second font name mean?</strong> In <code class="ag-inline">Arial, sans-serif</code>, Arial is the preferred font. The generic family <code class="ag-inline">sans-serif</code> gives the browser a fallback if Arial is unavailable.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">03 / FONT SIZE</p>
<h2>Build a clear hierarchy</h2>
<p>Not every piece of text should have the same visual weight. A page title should generally stand out from the body text, while smaller headings help organize sections.</p>
<div class="ag-type-sample">
<p class="ag-type-label">Example type hierarchy</p>
<p style="font-size:2.5rem;font-weight:800;line-height:1.1;margin:0 0 12px;">Main Heading</p>
<p style="font-size:1.65rem;font-weight:700;line-height:1.2;margin:0 0 12px;">Section Heading</p>
<p style="font-size:1.1rem;font-weight:600;line-height:1.4;margin:0 0 12px;">Supporting Heading</p>
<p style="font-size:1rem;line-height:1.7;margin:0;">Body text is designed for comfortable reading over several lines. It should be clear without competing with the main heading.</p>
</div>
<div class="ag-code-label ag-css-label">CONTROL TEXT SIZE</div>
<pre class="ag-code"><code><span class="ag-tag">h1</span> {
  <span class="ag-css-prop">font-size</span>: <span class="ag-css-value">2.5rem</span>;
}

<span class="ag-tag">h2</span> {
  <span class="ag-css-prop">font-size</span>: <span class="ag-css-value">1.75rem</span>;
}

<span class="ag-tag">p</span> {
  <span class="ag-css-prop">font-size</span>: <span class="ag-css-value">1rem</span>;
}</code></pre>
<p>The <code class="ag-inline">font-size</code> property changes the size of the text. These values use <code class="ag-inline">rem</code>, a relative unit that scales with the document's root font size.</p>
<div class="ag-callout ag-yellow">
<strong>Beginner tip:</strong> You will see both <code class="ag-inline">px</code> and <code class="ag-inline">rem</code> in web examples. For this course, start by experimenting with the supplied values and comparing the results. You do not need to memorize a perfect size for every heading.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">04 / LINE HEIGHT</p>
<h2>Give your text room to breathe</h2>
<p>Line height controls the vertical space between lines of text. If lines are too close together, paragraphs can feel crowded. If they are too far apart, the text can feel disconnected.</p>
<div class="ag-type-sample">
<p class="ag-type-label">Tight line spacing · 1.1</p>
<p style="font-size:1rem;line-height:1.1;margin:0;">Good typography helps visitors follow an idea. Comfortable spacing gives each line room to breathe and makes longer passages easier to read.</p>
</div>
<div class="ag-type-sample">
<p class="ag-type-label">Comfortable line spacing · 1.7</p>
<p style="font-size:1rem;line-height:1.7;margin:0;">Good typography helps visitors follow an idea. Comfortable spacing gives each line room to breathe and makes longer passages easier to read.</p>
</div>
<div class="ag-code-label ag-css-label">CHANGE LINE HEIGHT</div>
<pre class="ag-code"><code><span class="ag-tag">p</span> {
  <span class="ag-css-prop">font-size</span>: <span class="ag-css-value">1rem</span>;
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.7</span>;
}</code></pre>
<p>Try changing <code class="ag-inline">1.7</code> to <code class="ag-inline">1.2</code>, then to <code class="ag-inline">2</code>. Observe how the paragraph changes. For many body-text designs, a line height around 1.5–1.8 is a useful starting point.</p>
</section>
<section class="ag-section">
<p class="ag-eyebrow">05 / FONT WEIGHT &amp; STYLE</p>
<h2>Use emphasis with intention</h2>
<p>Font weight controls how thick or bold the characters appear. Font style can make text italic. These properties help establish emphasis without changing the actual content.</p>
<div class="ag-code-label ag-css-label">FONT WEIGHT AND STYLE</div>
<pre class="ag-code"><code><span class="ag-tag">h1</span> {
  <span class="ag-css-prop">font-weight</span>: <span class="ag-css-value">700</span>;
}

<span class="ag-tag">.intro</span> {
  <span class="ag-css-prop">font-weight</span>: <span class="ag-css-value">600</span>;
  <span class="ag-css-prop">font-style</span>: <span class="ag-css-value">italic</span>;
}</code></pre>
<p>To apply the second rule, add the class to a paragraph in your HTML:</p>
<div class="ag-code-label ag-html-label">HTML</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;p</span> <span class="ag-attr">class</span>=<span class="ag-value">"intro"</span><span class="ag-tag">&gt;</span>
  <span class="ag-text">A short introduction to my project.</span>
<span class="ag-tag">&lt;/p&gt;</span></code></pre>
<p>Remember that the class selector begins with a period in CSS, but the HTML class value does not include the period.</p>
<div class="ag-callout">
<strong>Design tip:</strong> Use bold and italic styles to clarify meaning and hierarchy. If every element is bold, oversized, or italic, nothing feels particularly important.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">06 / TEXT ALIGNMENT &amp; LINE LENGTH</p>
<h2>Think about how people read</h2>
<p>Text alignment changes how content sits within its available space. Left-aligned text is a reliable default for many English-language paragraphs because each line begins at a consistent position.</p>
<div class="ag-code-label ag-css-label">ALIGNMENT EXAMPLES</div>
<pre class="ag-code"><code><span class="ag-tag">h1</span> {
  <span class="ag-css-prop">text-align</span>: <span class="ag-css-value">center</span>;
}

<span class="ag-tag">p</span> {
  <span class="ag-css-prop">text-align</span>: <span class="ag-css-value">left</span>;
}</code></pre>
<p>Other possible values include <code class="ag-inline">right</code> and <code class="ag-inline">center</code>. Use alignment to support the content rather than applying the same treatment to everything.</p>
<h3>Why line length matters</h3>
<p>Very long lines can be difficult to track from one line to the next. Limiting the width of a text container can make longer passages more comfortable to read.</p>
<div class="ag-code-label ag-css-label">LIMIT THE WIDTH OF BODY TEXT</div>
<pre class="ag-code"><code><span class="ag-tag">p</span> {
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">65ch</span>;
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.7</span>;
}</code></pre>
<p>The <code class="ag-inline">ch</code> unit is based on the width of the character “0” in the current font. It can be useful when setting a comfortable line length. This is an introduction; we will explore layout and spacing more thoroughly in Week 7.</p>
<div class="ag-callout ag-green">
<strong>Accessibility check:</strong> Make sure your text remains readable when the browser window is narrow or when a visitor zooms in. Avoid relying on tiny text to fit everything on the page.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">07 / SYNCHRONOUS CLASS ACTIVITY</p>
<h2>Give the same page three typographic personalities</h2>
<p>During our live session, we will use one simple HTML page and explore how typography changes its visual identity. You will experiment with font family, size, weight, and line spacing.</p>
<div class="ag-grid">
<article class="ag-card">
<span class="ag-number">A</span>
<h3>Editorial</h3>
<p>Try a serif heading, restrained color, and comfortable body-text spacing.</p>
</article>
<article class="ag-card">
<span class="ag-number">B</span>
<h3>Contemporary</h3>
<p>Try a sans-serif family, a bold heading, and a clear size hierarchy.</p>
</article>
<article class="ag-card">
<span class="ag-number">C</span>
<h3>Expressive</h3>
<p>Try a more dramatic heading size while keeping paragraphs easy to read.</p>
</article>
</div>
<h3>Guided exercise</h3>
<ol class="ag-steps">
<li>Open your Week 5 project in CodePen.</li>
<li>Choose a font family for the body text.</li>
<li>Choose a different font family for the main heading.</li>
<li>Set the size and weight of the main heading.</li>
<li>Set the body-text line height to approximately 1.7.</li>
<li>Experiment with left-aligned and centered headings.</li>
<li>Compare the different versions and explain which best fits your topic.</li>
</ol>
<div class="ag-callout">
<strong>Discussion question:</strong> How can typography make a page feel distinctive without making the content harder to read?
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">08 / INDEPENDENT PROJECT</p>
<h2>Develop a typographic system</h2>
<p>Continue working on your personal-interest website. This week, refine its typography so the title, section headings, and body text work together as a consistent system.</p>
<div class="ag-grid">
<article class="ag-card">
<span class="ag-number">01</span>
<h3>Choose your typefaces</h3>
<p>Select a body font and, if appropriate, a different font for your headings.</p>
</article>
<article class="ag-card">
<span class="ag-number">02</span>
<h3>Establish hierarchy</h3>
<p>Use size and weight to distinguish the main title, section headings, and paragraphs.</p>
</article>
<article class="ag-card">
<span class="ag-number">03</span>
<h3>Improve readability</h3>
<p>Adjust line height, alignment, and text width to make the content comfortable to read.</p>
</article>
</div>
<h3>Project requirements</h3>
<ul class="ag-checklist">
<li>Continue using your existing HTML and CSS project.</li>
<li>Set a font family for the body text.</li>
<li>Style the main heading and section headings.</li>
<li>Establish a clear difference between headings and body text.</li>
<li>Adjust paragraph line height for readability.</li>
<li>Use font weight or style to create emphasis where appropriate.</li>
<li>Make thoughtful decisions about text alignment.</li>
<li>Check that the text remains readable in the CodePen preview.</li>
<li>Submit your working CodePen link through D2L.</li>
</ul>
<div class="ag-callout ag-yellow">
<strong>Keep it manageable:</strong> You do not need to use an external font service or create a complex typographic system. Start with the fonts available on your computer and the CSS properties in this lesson.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">09 / SUBMISSION &amp; REFLECTION</p>
<h2>Explain your typography choices</h2>
<p>Submit your CodePen link through the Week 6 assignment area in D2L. Check that your text is readable, your headings are easy to distinguish, and your existing page content and links still work.</p>
<h3>Reflection questions</h3>
<ol>
<li>What personality did you want your typography to communicate?</li>
<li>Which change made the biggest difference to the readability of your page?</li>
<li>How did you decide which text should receive the most visual attention?</li>
</ol>
</section>
<section class="ag-section">
<p class="ag-eyebrow">10 / QUICK REFERENCE</p>
<h2>Typography properties from this week</h2>
<div class="ag-grid">
<article class="ag-card">
<h3><code>font-family</code></h3>
<p>Specifies the typeface or font stack.</p>
</article>
<article class="ag-card">
<h3><code>font-size</code></h3>
<p>Controls the size of text.</p>
</article>
<article class="ag-card">
<h3><code>font-weight</code></h3>
<p>Controls how light or bold text appears.</p>
</article>
<article class="ag-card">
<h3><code>font-style</code></h3>
<p>Can apply styles such as italic.</p>
</article>
<article class="ag-card">
<h3><code>line-height</code></h3>
<p>Controls the vertical spacing between lines.</p>
</article>
<article class="ag-card">
<h3><code>text-align</code></h3>
<p>Aligns text left, right, or center.</p>
</article>
<article class="ag-card">
<h3><code>max-width</code></h3>
<p>Limits the maximum width of an element.</p>
</article>
</div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">11 / LOOKING AHEAD</p>
<h2>Next week: The CSS Box Model &amp; Spacing</h2>
<p>We have established a visual identity and improved the typography. Next week, we will explore how CSS controls the space around and inside elements using margins, padding, borders, and dimensions.</p>
<p>As you browse websites this week, pay attention to how headings guide your attention, how paragraphs are spaced, and how typefaces contribute to the overall experience.</p>
</section>
<!-- INSTRUCTOR-ONLY SECTION: REMOVE THIS ENTIRE SECTION BEFORE PUBLISHING -->
<section class="ag-section ag-instructor-only">
<p class="ag-eyebrow">INSTRUCTOR ONLY / REMOVE BEFORE PUBLISHING</p>
<h2>Instructor walkthrough: Build a typographic system one decision at a time</h2>
<p>This is a live demonstration guide. Keep the student-facing lesson above intact, and use the steps below while sharing your screen in CodePen. Ask students to predict what each CSS change will do before you make it.</p>
<p class="ag-instructor-note">Before publishing the lesson to students, delete this complete section, including the opening and closing instructor-only comments.</p>
<h3>Step 1 — Start with a simple HTML page</h3>
<p>Open the Week 5 project in CodePen. In the HTML panel, identify the page title, a section heading, and a paragraph. If students do not have a suitable page, use this small example:</p>
<div class="ag-code-label ag-html-label">HTML · STARTER PAGE</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;main&gt;</span>
  <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">A Website About My Interests</span><span class="ag-tag">&lt;/h1&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Why This Matters to Me</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p</span> <span class="ag-attr">class</span>=<span class="ag-value">"intro"</span><span class="ag-tag">&gt;</span>
    <span class="ag-text">This website explores a subject I care about.</span>
  <span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I want visitors to understand the topic and keep exploring.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/main&gt;</span></code></pre>
<p><strong>Ask:</strong> Without changing the HTML content, what parts of the page should attract the most attention?</p>
<h3>Step 2 — Choose a body font first</h3>
<p>In the CSS panel, add a simple body rule. Explain that a font stack lists the preferred typeface first and a generic fallback second.</p>
<div class="ag-code-label ag-css-label">CSS · BODY FONT</div>
<pre class="ag-code"><code><span class="ag-tag">body</span> {
  <span class="ag-css-prop">font-family</span>: <span class="ag-css-value">Arial, sans-serif</span>;
  <span class="ag-css-prop">font-size</span>: <span class="ag-css-value">1rem</span>;
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.7</span>;
}</code></pre>
<p><strong>Ask:</strong> What changes when you switch <code class="ag-inline">Arial, sans-serif</code> to <code class="ag-inline">Georgia, serif</code>? Which seems to fit this site's subject?</p>
<h3>Step 3 — Establish the heading hierarchy</h3>
<p>Add styles for the main heading and section heading. Demonstrate one property at a time, checking the preview after each change.</p>
<div class="ag-code-label ag-css-label">CSS · HEADING STYLES</div>
<pre class="ag-code"><code><span class="ag-tag">h1</span> {
  <span class="ag-css-prop">font-family</span>: <span class="ag-css-value">Georgia, serif</span>;
  <span class="ag-css-prop">font-size</span>: <span class="ag-css-value">2.5rem</span>;
  <span class="ag-css-prop">font-weight</span>: <span class="ag-css-value">700</span>;
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.1</span>;
}

<span class="ag-tag">h2</span> {
  <span class="ag-css-prop">font-size</span>: <span class="ag-css-value">1.75rem</span>;
  <span class="ag-css-prop">font-weight</span>: <span class="ag-css-value">700</span>;
}</code></pre>
<p><strong>Ask:</strong> Is the difference between the main heading and section heading clear? What happens if both headings are the same size?</p>
<h3>Step 4 — Introduce a deliberate mistake</h3>
<p>Temporarily misspell the CSS property <code class="ag-inline">font-size</code> as <code class="ag-inline">font-szie</code>. Ask students to identify the problem from the code and preview. Explain that browsers generally ignore an unrecognized CSS declaration rather than displaying an error message in the page.</p>
<div class="ag-code-label ag-css-label">CSS · INTENTIONAL ERROR</div>
<pre class="ag-code"><code><span class="ag-tag">h1</span> {
  <span class="ag-css-prop">font-szie</span>: <span class="ag-css-value">2.5rem</span>;
}</code></pre>
<p>Correct the spelling and check the preview again:</p>
<div class="ag-code-label ag-css-label">CSS · CORRECTED</div>
<pre class="ag-code"><code><span class="ag-tag">h1</span> {
  <span class="ag-css-prop">font-size</span>: <span class="ag-css-value">2.5rem</span>;
}</code></pre>
<p><strong>Ask:</strong> How can you tell whether a CSS rule is working? What should you check when a change has no visible effect?</p>
<h3>Step 5 — Improve paragraph readability</h3>
<p>Use the paragraph rule to demonstrate line height and line length. Explain that <code class="ag-inline">max-width</code> limits the paragraph width and <code class="ag-inline">ch</code> is a character-relative unit.</p>
<div class="ag-code-label ag-css-label">CSS · READABLE BODY TEXT</div>
<pre class="ag-code"><code><span class="ag-tag">p</span> {
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">65ch</span>;
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.7</span>;
}</code></pre>
<p>Change the line height to <code class="ag-inline">1.2</code> and then <code class="ag-inline">2</code>. Have students compare the results. Note that this rule applies to all paragraphs; if that is too broad for a project, target a class or a specific content area instead.</p>
<h3>Step 6 — Apply a class selector</h3>
<p>Show how the <code class="ag-inline">.intro</code> selector connects to the <code class="ag-inline">class="intro"</code> attribute in the HTML. Emphasize that the period belongs in the CSS selector, not in the HTML class value.</p>
<div class="ag-code-label ag-css-label">CSS · INTRO PARAGRAPH</div>
<pre class="ag-code"><code><span class="ag-tag">.intro</span> {
  <span class="ag-css-prop">font-weight</span>: <span class="ag-css-value">600</span>;
  <span class="ag-css-prop">font-style</span>: <span class="ag-css-value">italic</span>;
}</code></pre>
<p><strong>Ask:</strong> Which text should receive emphasis? How can we make that text stand out without making everything bold or italic?</p>
<h3>Step 7 — Quick student check</h3>
<ul class="ag-checklist">
<li>Students can identify the body font and heading font.</li>
<li>Students can point to the CSS property that controls size.</li>
<li>Students can explain what line height changes.</li>
<li>Students can explain the difference between <code class="ag-inline">.intro</code> in CSS and <code class="ag-inline">class="intro"</code> in HTML.</li>
<li>Students can describe one typographic choice that supports the topic and one that improves readability.</li>
</ul>
</section>
<!-- END INSTRUCTOR-ONLY SECTION -->
<footer class="ag-footer">
<strong>AMDE 155 · Introduction to Web Design</strong><br/>
    Week 06 — Typography &amp; Readability<br/>
<span class="ag-muted">Make it expressive. Make it readable.</span>
</footer>
</div>
