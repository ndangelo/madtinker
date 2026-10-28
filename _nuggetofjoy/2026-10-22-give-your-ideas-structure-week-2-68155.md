---
layout: teaching-post
title: Give Your Ideas Structure (Week 2)
slug: give-your-ideas-structure-week-2
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68155
source_url: https://nuggetofjoy.com/give-your-ideas-structure-week-2/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
tags: []
---

{::nomarkdown}
<div class="amde-grid-lesson">
<header class="ag-hero">
<p class="ag-eyebrow">AMDE 155 · INTRODUCTION TO WEB DESIGN · WEEK 02</p>
<h1>Give Your Ideas Structure</h1>
<p>Good web design is more than putting words on a screen. It is about organizing information so people can understand it, navigate it, and know what matters most.</p>
<div class="ag-chips">
<span class="ag-chip">HTML Foundations</span>
<span class="ag-chip">Headings &amp; Paragraphs</span>
<span class="ag-chip">Content Hierarchy</span>
<span class="ag-chip">CodePen</span>
</div>
</header>
<section class="ag-section">
<p class="ag-eyebrow">01 / THE BIG IDEA</p>
<h2>Make content easier to read</h2>
<p>Imagine opening a website and finding one enormous paragraph with no title, no sections, and no clear starting point. Even if the writing is interesting, it would be difficult to read.</p>
<p>HTML helps us organize information into meaningful pieces. Headings identify topics, paragraphs hold related ideas, and emphasis helps draw attention to important words or phrases.</p>
<div class="ag-grid">
<article class="ag-card">
<span class="ag-number">01</span>
<h3>Structure</h3>
<p>Use headings and paragraphs to give content a clear order.</p>
</article>
<article class="ag-card">
<span class="ag-number">02</span>
<h3>Hierarchy</h3>
<p>Show readers which ideas are most important and how sections relate.</p>
</article>
<article class="ag-card">
<span class="ag-number">03</span>
<h3>Meaning</h3>
<p>Use HTML elements according to what the content means, not just how you want it to look.</p>
</article>
</div>
<div class="ag-callout ag-green">
<strong>Today's goal:</strong> Turn a simple block of text into a structured web page using HTML. You do not need to memorize every tag. Follow the examples, experiment, and pay attention to what changes.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">02 / MEET THE ELEMENTS</p>
<h2>Headings, paragraphs, and emphasis</h2>
<p>HTML uses elements to describe different kinds of content. Most elements have an opening tag, content, and a closing tag.</p>
<div class="ag-code-label ag-html-label">HTML ELEMENTS</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My Website</span><span class="ag-tag">&lt;/h1&gt;</span>

<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">This is a paragraph.</span><span class="ag-tag">&lt;/p&gt;</span>

<span class="ag-tag">&lt;strong&gt;</span><span class="ag-text">This text is important.</span><span class="ag-tag">&lt;/strong&gt;</span>

<span class="ag-tag">&lt;em&gt;</span><span class="ag-text">This text has emphasis.</span><span class="ag-tag">&lt;/em&gt;</span></code></pre>
<h3>What do these tags do?</h3>
<ul>
<li><code>&lt;h1&gt;</code> identifies the main heading of the page.</li>
<li><code>&lt;h2&gt;</code> identifies a major section.</li>
<li><code>&lt;h3&gt;</code> identifies a subsection within a larger section.</li>
<li><code>&lt;p&gt;</code> identifies a paragraph.</li>
<li><code>&lt;strong&gt;</code> marks text as important.</li>
<li><code>&lt;em&gt;</code> adds emphasis to a word or phrase.</li>
</ul>
<div class="ag-callout">
<strong>Remember:</strong> The tag names describe the content's role. We will learn how to control the visual appearance of these elements with CSS in later lessons.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">03 / HEADING HIERARCHY</p>
<h2>Not every heading is the same</h2>
<p>HTML provides six heading levels, from <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>. Think of them as an outline for your page.</p>
<div class="ag-code-label ag-html-label">A SIMPLE CONTENT OUTLINE</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My Creative Practice</span><span class="ag-tag">&lt;/h1&gt;</span>

<span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Photography</span><span class="ag-tag">&lt;/h2&gt;</span>
<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I use photography to explore movement and memory.</span><span class="ag-tag">&lt;/p&gt;</span>

<span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Drawing</span><span class="ag-tag">&lt;/h2&gt;</span>
<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">My drawings begin with observations of everyday life.</span><span class="ag-tag">&lt;/p&gt;</span>

<span class="ag-tag">&lt;h3&gt;</span><span class="ag-text">Current Projects</span><span class="ag-tag">&lt;/h3&gt;</span>
<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I am developing a series of small sketchbooks.</span><span class="ag-tag">&lt;/p&gt;</span></code></pre>
<p>The <code>&lt;h1&gt;</code> introduces the overall topic. Each <code>&lt;h2&gt;</code> introduces a major section. The <code>&lt;h3&gt;</code> introduces a smaller topic within a section.</p>
<div class="ag-callout ag-yellow">
<strong>A common mistake:</strong> Do not choose a heading level only because you like its default size. Use the level that makes sense for the content. We can change its appearance with CSS later.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">04 / YOUR FIRST CONTENT PAGE</p>
<h2>Build a complete HTML document</h2>
<p>Let's put the pieces together. This example introduces a few parts of a complete HTML page that we will use throughout the semester.</p>
<div class="ag-code-label ag-html-label">COPY INTO CODEPEN'S HTML PANEL</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;!DOCTYPE html&gt;</span>
<span class="ag-tag">&lt;html lang="en"&gt;</span>
<span class="ag-tag">&lt;head&gt;</span>
  <span class="ag-tag">&lt;meta charset="UTF-8"&gt;</span>
  <span class="ag-tag">&lt;meta name="viewport"</span> <span class="ag-attr">content</span>=<span class="ag-value">"width=device-width, initial-scale=1.0"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;title&gt;</span><span class="ag-text">My Creative Page</span><span class="ag-tag">&lt;/title&gt;</span>
<span class="ag-tag">&lt;/head&gt;</span>
<span class="ag-tag">&lt;body&gt;</span>

  <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My Creative Page</span><span class="ag-tag">&lt;/h1&gt;</span>

  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Welcome to my corner of the web. I am interested in art, design, and the things that inspire me.</span><span class="ag-tag">&lt;/p&gt;</span>

  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Things I Like</span><span class="ag-tag">&lt;/h2&gt;</span>

  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I enjoy discovering new music, visiting galleries, and experimenting with creative projects.</span><span class="ag-tag">&lt;/p&gt;</span>

  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">A Current Goal</span><span class="ag-tag">&lt;/h2&gt;</span>

  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">This semester, I want to learn how to build a website that reflects my personality.</span><span class="ag-tag">&lt;/p&gt;</span>

<span class="ag-tag">&lt;/body&gt;</span>
<span class="ag-tag">&lt;/html&gt;</span></code></pre>
<h3>What are the new parts?</h3>
<ul>
<li><code>&lt;!DOCTYPE html&gt;</code> tells the browser to interpret the page using modern HTML.</li>
<li><code>&lt;html lang="en"&gt;</code> identifies the document language.</li>
<li><code>&lt;head&gt;</code> contains information about the page.</li>
<li><code>&lt;meta charset="UTF-8"&gt;</code> specifies the character encoding.</li>
<li>The viewport <code>&lt;meta&gt;</code> element helps the page display appropriately on mobile devices.</li>
<li><code>&lt;title&gt;</code> sets the title shown in the browser tab.</li>
<li><code>&lt;body&gt;</code> contains the content visitors see on the page.</li>
</ul>
<div class="ag-callout ag-green">
<strong>Try it:</strong> Paste the example into the HTML panel in CodePen. Change the title, paragraphs, and section headings to make the page your own. Watch the preview update as you work.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">05 / ORGANIZING INFORMATION</p>
<h2>Use lists when content belongs together</h2>
<p>Lists are useful for collections of related items, such as interests, materials, favorite artists, or project goals.</p>
<div class="ag-code-label ag-html-label">UNORDERED LIST</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">My Creative Interests</span><span class="ag-tag">&lt;/h2&gt;</span>

<span class="ag-tag">&lt;ul&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Photography</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Graphic design</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Music</span><span class="ag-tag">&lt;/li&gt;</span>
<span class="ag-tag">&lt;/ul&gt;</span></code></pre>
<p>An unordered list uses <code>&lt;ul&gt;</code>, while each item uses <code>&lt;li&gt;</code>. The browser displays the items with bullets by default.</p>
<div class="ag-code-label ag-html-label">ORDERED LIST</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">My Design Process</span><span class="ag-tag">&lt;/h2&gt;</span>

<span class="ag-tag">&lt;ol&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Gather inspiration</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Sketch ideas</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Create a first draft</span><span class="ag-tag">&lt;/li&gt;</span>
<span class="ag-tag">&lt;/ol&gt;</span></code></pre>
<p>An ordered list uses <code>&lt;ol&gt;</code> and is useful when sequence matters. Browsers number the items automatically.</p>
</section>
<section class="ag-section">
<p class="ag-eyebrow">06 / SYNCHRONOUS CLASS ACTIVITY</p>
<h2>Rescue the messy page</h2>
<p>In our live session, we will start with a page that contains unorganized text. Together, we will transform it into a clear content outline.</p>
<div class="ag-card">
<h3>Starting content</h3>
<p>I like street photography. My favorite photographers experiment with light and movement. I also enjoy drawing and collecting old magazines. This semester I want to create a portfolio that shows my interests and helps people understand my work.</p>
</div>
<h3>Your task</h3>
<ol class="ag-steps">
<li>Create one main heading that introduces the page.</li>
<li>Break the text into at least two meaningful sections.</li>
<li>Give each section an <code>&lt;h2&gt;</code> heading.</li>
<li>Separate related ideas into paragraphs.</li>
<li>Add an unordered list of three interests.</li>
<li>Change the content so it reflects your own interests.</li>
</ol>
<div class="ag-callout">
<strong>Think like a designer:</strong> Before worrying about color or decoration, ask yourself whether the content is easy to scan and understand. Structure comes first.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">07 / INDEPENDENT PROJECT</p>
<h2>Build a page about something you care about</h2>
<p>For this week's individual assignment, create a simple HTML page around a subject that interests you. It could be a musician, an artist, a film, a sport, a hobby, a personal goal, a game, a collection, or anything else you want to explore.</p>
<div class="ag-grid">
<article class="ag-card">
<span class="ag-number">01</span>
<h3>Choose a topic</h3>
<p>Pick something you can explain in a few paragraphs. Your topic should be your own.</p>
</article>
<article class="ag-card">
<span class="ag-number">02</span>
<h3>Plan the hierarchy</h3>
<p>Write a main heading, at least two section headings, and a few supporting paragraphs.</p>
</article>
<article class="ag-card">
<span class="ag-number">03</span>
<h3>Build in HTML</h3>
<p>Use the tags from this lesson to organize the information into a readable page.</p>
</article>
</div>
<h3>Requirements</h3>
<ul class="ag-checklist">
<li>A complete HTML document with a title and viewport metadata.</li>
<li>One <code>&lt;h1&gt;</code> that introduces the page.</li>
<li>At least two <code>&lt;h2&gt;</code> section headings.</li>
<li>At least three paragraphs written in your own words.</li>
<li>At least one unordered or ordered list with three or more items.</li>
<li>Use of <code>&lt;strong&gt;</code> or <code>&lt;em&gt;</code> where appropriate.</li>
<li>Clear, logical organization that makes the content easy to follow.</li>
<li>A working CodePen link submitted through the course's D2L assignment area.</li>
</ul>
<div class="ag-callout ag-green">
<strong>Keep it simple:</strong> This is a content and structure assignment, not a visual-design competition. Do not worry about making the page look polished yet. We will use CSS to develop the visual design in upcoming weeks.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">08 / REFLECTION &amp; SUBMISSION</p>
<h2>Show your work</h2>
<p>Submit the link to your CodePen project in D2L. Before submitting, make sure your page works in the preview and that your content is your own.</p>
<h3>Include a short reflection</h3>
<p>Answer these questions in a few sentences:</p>
<ol>
<li>How did headings and paragraphs help you organize your content?</li>
<li>What part of writing or organizing HTML felt easiest?</li>
<li>What is one thing you would like to learn to change about your page's appearance?</li>
</ol>
</section>
<section class="ag-section">
<p class="ag-eyebrow">09 / QUICK REFERENCE</p>
<h2>HTML tags from this week</h2>
<div class="ag-grid">
<article class="ag-card">
<h3><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code></h3>
<p>Organize headings from the main page title to smaller subsections.</p>
</article>
<article class="ag-card">
<h3><code>&lt;p&gt;</code></h3>
<p>Creates a paragraph of text.</p>
</article>
<article class="ag-card">
<h3><code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code></h3>
<p>Identify important text and add emphasis.</p>
</article>
<article class="ag-card">
<h3><code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code></h3>
<p>Create unordered and ordered lists.</p>
</article>
<article class="ag-card">
<h3><code>&lt;li&gt;</code></h3>
<p>Defines an individual list item.</p>
</article>
<article class="ag-card">
<h3><code>&lt;head&gt;</code> and <code>&lt;body&gt;</code></h3>
<p>Separate page information from visible page content.</p>
</article>
</div>
</section>
<!-- INSTRUCTOR-ONLY MATERIAL: REMOVE THIS SECTION BEFORE PUBLISHING TO STUDENTS -->
<section class="ag-section ag-instructor-only">
<p class="ag-eyebrow">INSTRUCTOR-ONLY MATERIAL · REMOVE BEFORE PUBLISHING</p>
<h2>Instructor Demonstration — Build the Page Step by Step</h2>
<p>Use this demonstration during the synchronous class activity. Model each step in CodePen, explain what the browser is doing, and pause so students can predict the result before you type.</p>
<div class="ag-callout ag-yellow">
<strong>Teaching sequence:</strong> Start with the content, add a main heading, organize the sections, then add a list. Keep the focus on HTML structure rather than visual styling.
    </div>
<h3>Step 1 — Start with a heading and paragraph</h3>
<p>Explain that the heading names the page's main topic and the paragraph introduces it.</p>
<div class="ag-code-label ag-html-label">HTML · STEP 1</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My Creative Interests</span><span class="ag-tag">&lt;/h1&gt;</span>
<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I enjoy photography, music, and exploring new places.</span><span class="ag-tag">&lt;/p&gt;</span></code></pre>
<h3>Step 2 — Add a section heading and supporting paragraph</h3>
<p>Show how an <code>&lt;h2&gt;</code> introduces a section within the page. Ask students how this differs from using another <code>&lt;h1&gt;</code>.</p>
<div class="ag-code-label ag-html-label">HTML · STEP 2</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My Creative Interests</span><span class="ag-tag">&lt;/h1&gt;</span>
<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I enjoy photography, music, and exploring new places.</span><span class="ag-tag">&lt;/p&gt;</span>

<span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Photography</span><span class="ag-tag">&lt;/h2&gt;</span>
<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">I like photographs that capture movement and tell a story.</span><span class="ag-tag">&lt;/p&gt;</span></code></pre>
<h3>Step 3 — Add another section and a list</h3>
<p>Explain that list items belong inside a list container. Use <code>&lt;ul&gt;</code> when the order does not matter and <code>&lt;ol&gt;</code> when sequence matters.</p>
<div class="ag-code-label ag-html-label">HTML · STEP 3</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Other Interests</span><span class="ag-tag">&lt;/h2&gt;</span>
<span class="ag-tag">&lt;ul&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Listening to music</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Visiting galleries</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Drawing</span><span class="ag-tag">&lt;/li&gt;</span>
<span class="ag-tag">&lt;/ul&gt;</span></code></pre>
<h3>Step 4 — Intentionally make a mistake</h3>
<p>Demonstrate an opening tag without a matching closing tag, or place list items outside the list. Ask students to identify the problem before correcting it.</p>
<div class="ag-code-label ag-html-label">COMMON MISTAKE</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;ul&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Photography</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Music</span>
<span class="ag-tag">&lt;/ul&gt;</span></code></pre>
<div class="ag-code-label ag-html-label">CORRECTED VERSION</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;ul&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Photography</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Music</span><span class="ag-tag">&lt;/li&gt;</span>
<span class="ag-tag">&lt;/ul&gt;</span></code></pre>
<h3>Questions to ask while demonstrating</h3>
<ul>
<li>What changes in the preview when we add an <code>&lt;h2&gt;</code>?</li>
<li>Why should we use headings in a logical order?</li>
<li>What is the difference between <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>?</li>
<li>How does semantic structure help someone scan a page or use assistive technology?</li>
</ul>
<div class="ag-callout ag-green">
<strong>Transition to student practice:</strong> Ask students to use the same process with their own topic. Have them build the structure first and then check that every opening tag has a matching closing tag where required.
    </div>
</section>
<!-- END INSTRUCTOR-ONLY MATERIAL -->
<section class="ag-section">
<p class="ag-eyebrow">10 / BEFORE YOU GO</p>
<h2>Design starts with decisions</h2>
<p>Every website communicates through choices: what appears first, how information is grouped, and what the visitor is expected to notice. HTML gives us the structure that makes those decisions possible.</p>
<p>Next week, we will use lists and links to connect information and begin thinking about how visitors move through a website.</p>
</section>
<footer class="ag-footer">
<strong>AMDE 155 · Introduction to Web Design</strong><br/>
    Week 02 — HTML Text and Content Structure<br/>
<span class="ag-muted">Build the structure first. Design the experience next.</span>
</footer>
</div>
{:/nomarkdown}
