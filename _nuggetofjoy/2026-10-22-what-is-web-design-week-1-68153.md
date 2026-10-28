---
layout: post
title: AMDE 155 Welcome to the Web (Week 1)
slug: what-is-web-design-week-1
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68153
source_url: https://nuggetofjoy.com/what-is-web-design-week-1/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
tags: []
---

<div class="amde-grid-lesson">
<header class="ag-hero">
<div class="ag-eyebrow">AMDE 155 · Introduction to Web Design · Week 01</div>
<h1>Welcome to<br/>the Web.</h1>
<p>Your first step into HTML, web design, and creative coding. No previous coding experience is required. We'll start small, work with examples, and build something of your own.</p>
<div class="ag-chips">
<span class="ag-chip">HTML Basics</span>
<span class="ag-chip">CodePen</span>
<span class="ag-chip">Creative Practice</span>
<span class="ag-chip">Beginner Friendly</span>
</div>
</header>
<section class="ag-section">
<h2>01 / The big idea</h2>
<p>Every website begins with an idea. Maybe it's a portfolio, a digital magazine, an exhibition, a music page, or a place to share something you're passionate about. Before we explore color, typography, and layout, we need to understand how a web page is put together.</p>
<div class="ag-callout ag-green">
<strong>This week's goal:</strong> Create a simple web page by changing a few lines of HTML. You do not need to memorize code or understand every line. Learn one thing, try it, and see what happens.
  </div>
<div class="ag-grid">
<div class="ag-card">
<div class="ag-number">01</div>
<h3>Content</h3>
<p>What are you communicating? Text, images, and other information give a page its purpose.</p>
</div>
<div class="ag-card">
<div class="ag-number">02</div>
<h3>Structure</h3>
<p>How is the information organized? HTML identifies headings, paragraphs, links, and other content.</p>
</div>
<div class="ag-card">
<div class="ag-number">03</div>
<h3>Appearance</h3>
<p>How does the page look? CSS controls color, typography, spacing, and layout.</p>
</div>
</div>
</section>
<section class="ag-section">
<h2>02 / What is web design?</h2>
<p>Web design combines communication, visual organization, and technology. A successful page does more than look attractive. It helps people understand information and figure out what to do next.</p>
<p>Think about the design decisions you already make in art and design courses. You choose what to emphasize, where to place things, which colors work together, and how someone will experience your work. Those decisions are part of web design, too.</p>
<h3>Where you might see web design</h3>
<ul class="ag-steps">
<li>An artist's online portfolio.</li>
<li>A website promoting an exhibition or concert.</li>
<li>A page introducing a clothing brand or creative business.</li>
<li>An online publication about film, music, fashion, or culture.</li>
<li>A personal site about a hobby, collection, or interest.</li>
</ul>
<p>Throughout this course, you will use HTML and CSS to make pages that reflect your own interests. There is room for experimentation. The important thing is learning how to make intentional design choices.</p>
</section>
<section class="ag-section">
<h2>03 / How does a website work?</h2>
<p>When you open a website, your browser requests files from a web server. The browser reads the information it receives and displays the page on your screen.</p>
<div class="ag-grid">
<div class="ag-card">
<h3>Your browser</h3>
<p>Chrome, Firefox, Safari, and Edge are applications that display web pages.</p>
</div>
<div class="ag-card">
<h3>The web server</h3>
<p>A server stores or provides website files when a browser requests them.</p>
</div>
<div class="ag-card">
<h3>The web page</h3>
<p>The browser interprets the page's code and displays its content and design.</p>
</div>
</div>
<div class="ag-callout">
<strong>A useful comparison:</strong> Think of HTML as the structure of a publication and CSS as its visual design. HTML identifies the title and paragraphs. CSS can change their color, size, spacing, and position.
  </div>
</section>
<section class="ag-section">
<h2>04 / Meet HTML</h2>
<p>HTML stands for <strong>HyperText Markup Language</strong>. It uses elements to identify different kinds of content on a page.</p>
<p>Let's begin with a heading. You do not need to understand the whole document yet. Just look at the opening tag, the text, and the closing tag.</p>
<div class="ag-code-label ag-html-label">HTML / Example 01</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">Hello, Web!</span><span class="ag-tag">&lt;/h1&gt;</span></code></pre>
<p>Here's what you're seeing:</p>
<ul>
<li><code class="ag-inline">&lt;h1&gt;</code> begins a main heading.</li>
<li><code class="ag-inline">Hello, Web!</code> is the text visitors will see.</li>
<li><code class="ag-inline">&lt;/h1&gt;</code> closes the heading. Notice the slash.</li>
</ul>
<p>The tags tell the browser what kind of content it is displaying. The browser usually makes an <code class="ag-inline">h1</code> heading larger than ordinary paragraph text.</p>
<div class="ag-callout ag-yellow">
<strong>Remember this pattern:</strong> Opening tag + content + closing tag. Many HTML elements follow this pattern.
  </div>
<h3>Your first edit</h3>
<p>Copy this example into CodePen's HTML panel. Change the words between the tags, but leave the tags themselves in place.</p>
<div class="ag-code-label ag-html-label">HTML / Example 02 — Change the text</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My First Website</span><span class="ag-tag">&lt;/h1&gt;</span></code></pre>
<p>Try a different title: “My Favorite Films,” “Design Experiments,” “Music I Love,” or anything else that interests you.</p>
</section>
<section class="ag-section">
<h2>05 / Add a paragraph</h2>
<p>Headings introduce ideas. Paragraphs provide more information. A paragraph uses the <code class="ag-inline">&lt;p&gt;</code> element.</p>
<div class="ag-code-label ag-html-label">HTML / Example 03</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My First Website</span><span class="ag-tag">&lt;/h1&gt;</span>

<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I am learning how to make websites.</span><span class="ag-tag">&lt;/p&gt;</span></code></pre>
<p>Now the page contains two elements: a heading and a paragraph.</p>
<h3>Add another paragraph</h3>
<p>Each paragraph gets its own opening and closing tags. Try copying this example and changing the sentences.</p>
<div class="ag-code-label ag-html-label">HTML / Example 04</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My First Website</span><span class="ag-tag">&lt;/h1&gt;</span>

<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I am learning how to make websites.</span><span class="ag-tag">&lt;/p&gt;</span>

<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I want to use web design to share my ideas.</span><span class="ag-tag">&lt;/p&gt;</span></code></pre>
<div class="ag-callout">
<strong>Small but important distinction:</strong> Pressing Return in your code editor does not automatically create a new paragraph on the page. The paragraph tags tell the browser where each paragraph begins and ends.
  </div>
</section>
<section class="ag-section">
<h2>06 / Your first complete HTML document</h2>
<p>HTML documents usually contain some setup information in addition to the visible content. You will see this structure throughout the course.</p>
<div class="ag-code-label ag-html-label">HTML / Example 05 — Complete document</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;!DOCTYPE html&gt;</span>
<span class="ag-tag">&lt;html lang="en"&gt;</span>
<span class="ag-tag">&lt;head&gt;</span>
  <span class="ag-tag">&lt;meta charset="UTF-8"&gt;</span>
  <span class="ag-tag">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</span>
  <span class="ag-tag">&lt;title&gt;</span><span class="ag-text">My First Website</span><span class="ag-tag">&lt;/title&gt;</span>
<span class="ag-tag">&lt;/head&gt;</span>
<span class="ag-tag">&lt;body&gt;</span>
  <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">Hello, Web!</span><span class="ag-tag">&lt;/h1&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">This is my first web page.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/body&gt;</span>
<span class="ag-tag">&lt;/html&gt;</span></code></pre>
<h3>What do the extra lines do?</h3>
<ul>
<li><code class="ag-inline">&lt;!DOCTYPE html&gt;</code> tells the browser to use modern HTML document rules.</li>
<li><code class="ag-inline">&lt;html lang="en"&gt;</code> identifies the document and its primary language.</li>
<li><code class="ag-inline">&lt;head&gt;</code> contains setup information about the page.</li>
<li><code class="ag-inline">&lt;meta charset="UTF-8"&gt;</code> sets the character encoding.</li>
<li>The viewport setting helps the page fit the width of mobile screens.</li>
<li><code class="ag-inline">&lt;title&gt;</code> sets the title shown in the browser tab.</li>
<li><code class="ag-inline">&lt;body&gt;</code> contains the page's main visible content.</li>
</ul>
<div class="ag-callout ag-green">
<strong>Don't memorize this yet.</strong> In CodePen, you can start with just the heading and paragraph examples. CodePen provides the surrounding document structure for you.
  </div>
</section>
<section class="ag-section">
<h2>07 / Meet CodePen</h2>
<p>CodePen is our online coding workspace. You can write HTML, see a live preview, and experiment without installing a development environment.</p>
<ol class="ag-steps">
<li>Visit <a href="https://codepen.io/" rel="noopener noreferrer" target="_blank">CodePen.io</a> and sign in.</li>
<li>Create a new Pen.</li>
<li>Find the HTML editor and the preview area.</li>
<li>Paste the next example into the HTML panel.</li>
<li>Change the text and watch the preview update.</li>
<li>Save your Pen and find its shareable URL.</li>
</ol>
<div class="ag-callout">
<strong>Course requirement:</strong> The course materials specify a CodePen Pro subscription. Review the current course instructions and your account details before purchasing or upgrading.
  </div>
<h3>Start here</h3>
<div class="ag-code-label ag-html-label">HTML / Example 06 — Paste into CodePen</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">Hello, Web!</span><span class="ag-tag">&lt;/h1&gt;</span>

<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I made this page in CodePen.</span><span class="ag-tag">&lt;/p&gt;</span></code></pre>
<p>For this exercise, do not paste the complete document from Example 05 into the HTML panel. CodePen supplies the document wrapper, so you only need to enter the content that belongs inside the body.</p>
</section>
<section class="ag-section">
<h2>08 / Guided class activity</h2>
<p>We'll work through this together during our synchronous class. Follow each step, check the preview, and make the content your own.</p>
<div class="ag-card">
<h3>Step 1 — Add a heading</h3>
<div class="ag-code-label ag-html-label">HTML</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">About Me</span><span class="ag-tag">&lt;/h1&gt;</span></code></pre>
<h3>Step 2 — Add a paragraph</h3>
<div class="ag-code-label ag-html-label">HTML</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">About Me</span><span class="ag-tag">&lt;/h1&gt;</span>

<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I am a student who enjoys exploring new ideas.</span><span class="ag-tag">&lt;/p&gt;</span></code></pre>
<h3>Step 3 — Introduce another topic</h3>
<div class="ag-code-label ag-html-label">HTML</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">About Me</span><span class="ag-tag">&lt;/h1&gt;</span>

<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I am a student who enjoys exploring new ideas.</span><span class="ag-tag">&lt;/p&gt;</span>

<span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">My Interests</span><span class="ag-tag">&lt;/h2&gt;</span>

<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I enjoy music, art, games, and discovering new things.</span><span class="ag-tag">&lt;/p&gt;</span></code></pre>
<h3>Step 4 — Customize it</h3>
<p>Change the title and paragraphs to reflect your own interests. You can replace the text without changing the tags.</p>
</div>
<div class="ag-callout ag-yellow">
<strong>Class check-in:</strong> What happened when you changed the text? What happened when a tag was missing? Which part was easier than you expected?
  </div>
</section>
<section class="ag-section">
<h2>09 / Independent project</h2>
<p>Now you'll make a simple page independently. You may reuse the examples from this lesson. The goal is to practice the basic structure, not to write code from memory.</p>
<div class="ag-card">
<h3>Assignment / My Digital Introduction</h3>
<p>Create a small page introducing yourself or a subject you care about. Your page can focus on art, music, film, fashion, gaming, sports, a hobby, or another personal interest.</p>
<h3>Your page must include</h3>
<ul class="ag-checklist">
<li>One main heading using <code class="ag-inline">&lt;h1&gt;</code>.</li>
<li>At least two section headings using <code class="ag-inline">&lt;h2&gt;</code>.</li>
<li>At least three paragraphs using <code class="ag-inline">&lt;p&gt;</code>.</li>
<li>A list of at least three related items.</li>
<li>One link to a relevant external website.</li>
</ul>
<h3>Copyable list starter</h3>
<div class="ag-code-label ag-html-label">HTML</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;ul&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">First interest</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Second interest</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Third interest</span><span class="ag-tag">&lt;/li&gt;</span>
<span class="ag-tag">&lt;/ul&gt;</span></code></pre>
<h3>Copyable link starter</h3>
<div class="ag-code-label ag-html-label">HTML</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;a href="https://example.com"&gt;</span><span class="ag-text">Visit this website</span><span class="ag-tag">&lt;/a&gt;</span></code></pre>
<p>Replace the example URL with a real website address and change the link text to describe the destination.</p>
<div class="ag-callout ag-green">
<strong>Keep it manageable:</strong> Start by copying the working example from class. Add one section at a time. If something breaks, compare your code with the starter and look for a missing tag.
    </div>
</div>
</section>
<section class="ag-section">
<h2>10 / Submission and reflection</h2>
<h3>What to submit</h3>
<ol class="ag-steps">
<li>Save your CodePen.</li>
<li>Copy the shareable URL for your Pen.</li>
<li>Submit the URL in D2L.</li>
<li>Include a short reflection with your submission.</li>
</ol>
<h3>Reflection questions</h3>
<ul>
<li>What topic did you choose for your page, and why?</li>
<li>What did you learn about HTML?</li>
<li>What was confusing or challenging?</li>
<li>What would you like to change about the page's appearance?</li>
</ul>
<h3>How your work will be evaluated</h3>
<div class="ag-grid">
<div class="ag-card">
<h3>HTML practice</h3>
<p>Headings, paragraphs, lists, and the link are structured appropriately.</p>
</div>
<div class="ag-card">
<h3>Organization</h3>
<p>The content is understandable and divided into sections.</p>
</div>
<div class="ag-card">
<h3>Personalization</h3>
<p>The page reflects your chosen subject and ideas.</p>
</div>
<div class="ag-card">
<h3>Completion</h3>
<p>The submitted link works and the reflection is included.</p>
</div>
</div>
<p>You are not expected to create a polished professional website in the first week. This is a starting point for the skills you'll build throughout the semester.</p>
</section>
<section class="ag-section">
<h2>11 / Troubleshooting</h2>
<div class="ag-card">
<h3>My heading isn't appearing correctly.</h3>
<p>Check that you have both an opening and a closing tag, such as <code class="ag-inline">&lt;h1&gt;</code> and <code class="ag-inline">&lt;/h1&gt;</code>.</p>
<h3>My text appears, but the formatting looks strange.</h3>
<p>Compare your code with the example. Look for a missing angle bracket, slash, or closing tag.</p>
<h3>I pasted the entire document into CodePen.</h3>
<p>For these exercises, remove the document wrapper and use only the content that belongs inside the body. CodePen provides the surrounding document structure.</p>
<h3>I accidentally deleted something.</h3>
<p>Use Undo, or paste the starter example back into the HTML panel. Experimenting is part of learning.</p>
<h3>I don't understand every line.</h3>
<p>That's okay. For now, focus on recognizing the heading and paragraph tags. The rest will become familiar as we reuse the same structure.</p>
</div>
</section>
<section class="ag-section">
<h2>12 / Your first HTML cheat sheet</h2>
<p>Keep these examples nearby. You can copy and reuse them while you practice.</p>
<div class="ag-code-label ag-html-label">HTML / Quick reference</div>
<pre class="ag-code"><code><span class="ag-comment">&lt;!-- Main heading --&gt;</span>
<span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">Page Title</span><span class="ag-tag">&lt;/h1&gt;</span>

<span class="ag-comment">&lt;!-- Section heading --&gt;</span>
<span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Section Title</span><span class="ag-tag">&lt;/h2&gt;</span>

<span class="ag-comment">&lt;!-- Paragraph --&gt;</span>
<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Your text goes here.</span><span class="ag-tag">&lt;/p&gt;</span>

<span class="ag-comment">&lt;!-- Unordered list --&gt;</span>
<span class="ag-tag">&lt;ul&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">First item</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Second item</span><span class="ag-tag">&lt;/li&gt;</span>
<span class="ag-tag">&lt;/ul&gt;</span>

<span class="ag-comment">&lt;!-- Link --&gt;</span>
<span class="ag-tag">&lt;a href="https://example.com"&gt;</span><span class="ag-text">Visit this website</span><span class="ag-tag">&lt;/a&gt;</span></code></pre>
</section>
<section class="ag-section" id="instructor-html-demonstration">
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;">
<p style="margin:0 0 8px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h2 style="margin:0;color:#78350f;">Instructor Demonstration — Step by Step</h2>
<p style="margin:10px 0 0;color:#78350f;">Use this live-coding scaffold during the synchronous class. Build the example in CodePen in small stages, narrate your decisions, and check the preview after each change.</p>
</div>
<h3>Demo goal</h3>
<p>Demonstrate how headings, paragraphs, section headings, lists, and links create a simple, organized page. Students should see that HTML describes the meaning and structure of content.</p>
<h3>Step 1 — Start with one heading</h3>
<p>Open a new CodePen and enter only the heading. Ask students to predict what the browser will display before you show the preview.</p>
<div class="ag-code-label ag-html-label">index.html · instructor demo</div>
<pre class="ag-code"><code>&lt;h1&gt;My Creative World&lt;/h1&gt;</code></pre>
<p><strong>Explain:</strong> The opening tag identifies the beginning of the heading, the text is the content, and the closing tag marks its end. Change the words inside the tags to show that content can change without changing the element.</p>
<h3>Step 2 — Add a paragraph</h3>
<p>Add one sentence below the heading. Pause and compare the code with the preview.</p>
<div class="ag-code-label ag-html-label">HTML · heading + paragraph</div>
<pre class="ag-code"><code>&lt;h1&gt;My Creative World&lt;/h1&gt;

&lt;p&gt;This page is about the things that inspire me.&lt;/p&gt;</code></pre>
<p><strong>Explain:</strong> The <code class="ag-inline">&lt;p&gt;</code> element marks a paragraph. Pressing Return in the editor is not what creates the paragraph; the tags define the content structure.</p>
<h3>Step 3 — Add a section heading and more content</h3>
<p>Introduce a second topic. Explain the difference between the main heading and the section heading.</p>
<div class="ag-code-label ag-html-label">HTML · organized content</div>
<pre class="ag-code"><code>&lt;h1&gt;My Creative World&lt;/h1&gt;

&lt;p&gt;This page is about the things that inspire me.&lt;/p&gt;

&lt;h2&gt;Things I Enjoy&lt;/h2&gt;

&lt;p&gt;I enjoy art, music, film, and learning new skills.&lt;/p&gt;</code></pre>
<p><strong>Explain:</strong> Use one main <code class="ag-inline">&lt;h1&gt;</code> to introduce the page and <code class="ag-inline">&lt;h2&gt;</code> for a section within it. Heading levels communicate the organization of the content.</p>
<h3>Step 4 — Add a list</h3>
<p>Show how related items can be grouped into an unordered list.</p>
<div class="ag-code-label ag-html-label">HTML · unordered list</div>
<pre class="ag-code"><code>&lt;h2&gt;Favorite Things&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;Photography&lt;/li&gt;
  &lt;li&gt;Music&lt;/li&gt;
  &lt;li&gt;Film&lt;/li&gt;
&lt;/ul&gt;</code></pre>
<p><strong>Explain:</strong> The <code class="ag-inline">&lt;ul&gt;</code> element contains the list, and each <code class="ag-inline">&lt;li&gt;</code> element represents one item. The list items belong inside the list element.</p>
<h3>Step 5 — Add a link</h3>
<p>Demonstrate the <code class="ag-inline">href</code> attribute and explain that it tells the browser where the link should go.</p>
<div class="ag-code-label ag-html-label">HTML · link</div>
<pre class="ag-code"><code>&lt;p&gt;
  One website I enjoy is
  &lt;a href="https://www.moma.org/"&gt;MoMA&lt;/a&gt;.
&lt;/p&gt;</code></pre>
<p><strong>Explain:</strong> The URL goes inside the quotation marks after <code class="ag-inline">href=</code>. The words between the opening and closing anchor tags become the clickable link text.</p>
<h3>Step 6 — Intentionally make and fix a mistake</h3>
<p>Temporarily remove a closing tag or its angle bracket. Ask students to identify what looks wrong, then restore the code. Keep this low-pressure: the goal is to practice reading code and troubleshooting.</p>
<div class="ag-callout ag-yellow"><strong>Think aloud:</strong> “I want this to be a section heading, so I’ll use an <code class="ag-inline">&lt;h2&gt;</code>. Now I’ll check that the opening and closing tags match, and then I’ll look at the preview.”</div>
<h3>Questions to ask during the demonstration</h3>
<ul class="ag-steps">
<li>What changed in the preview when I changed the text?</li>
<li>How can you recognize an opening tag and a closing tag?</li>
<li>Why do we use a heading instead of making ordinary text look large?</li>
<li>What information does the <code class="ag-inline">href</code> attribute provide?</li>
<li>What would you check first if the result does not look right?</li>
</ul>
<div class="ag-callout ag-green"><strong>Transition to student practice:</strong> Ask students to recreate the same basic structure using a subject of their own. Encourage them to copy the working pattern first, then change the content one element at a time.</div>
</section>
<footer class="ag-footer">
<div class="ag-eyebrow">Next up / Week 02</div>
<h2>Give your ideas structure.</h2>
<p>Next week, we'll build on the same foundation by organizing information with headings, paragraphs, and lists. We'll take one small step at a time.</p>
<p><strong>For now:</strong> Copy an example, change something, and see what happens. You have already started building for the web.</p>
</footer>
</div>
