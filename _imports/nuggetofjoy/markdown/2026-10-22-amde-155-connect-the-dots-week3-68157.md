---
title: 'AMDE 155: Connect the Dots (Week3)'
slug: amde-155-connect-the-dots-week3
date: '2026-10-22'
modified: '2026-10-23'
status: published
wordpress_id: 68157
source_url: https://nuggetofjoy.com/amde-155-connect-the-dots-week3/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
tags: []
migration:
  format: hybrid-markdown
  original_html: original-html/68157.html
  post_css: styles/posts/68157.css
  needs_review: true
---

<div class="amde-grid-lesson">
<header class="ag-hero">
<p class="ag-eyebrow">AMDE 155 · INTRODUCTION TO WEB DESIGN · WEEK 03</p>
<h1>Connect the Dots</h1>
<p>A website is more than a collection of pages. Links connect information, lists organize ideas, and navigation helps people find their way. This week, we start making the web feel connected.</p>
<div class="ag-chips">
<span class="ag-chip">HTML Lists</span>
<span class="ag-chip">Hyperlinks</span>
<span class="ag-chip">Navigation</span>
<span class="ag-chip">CodePen</span>
</div>
</header>
<section class="ag-section">
<p class="ag-eyebrow">01 / THE BIG IDEA</p>
<h2>A website is a connected experience</h2>
<p>Think about a website you visit regularly. Maybe it belongs to a musician, a museum, a clothing brand, a game, or an artist. How do you move from the homepage to the information you want?</p>
<p>You probably click links. You might use a menu, select a project, read an article, or follow a link to another website. These simple interactions help turn separate pieces of information into a useful experience.</p>
<div class="ag-grid">
<article class="ag-card">
<span class="ag-number">01</span>
<h3>Lists</h3>
<p>Group related information into clear, organized collections.</p>
</article>
<article class="ag-card">
<span class="ag-number">02</span>
<h3>Links</h3>
<p>Connect a word, phrase, image, or other element to a destination.</p>
</article>
<article class="ag-card">
<span class="ag-number">03</span>
<h3>Navigation</h3>
<p>Help visitors understand where they are and where they can go next.</p>
</article>
</div>
<div class="ag-callout ag-green">
<strong>Today's goal:</strong> Build a simple page with lists and working links, then create a small navigation menu that connects sections of the same page.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">02 / ORGANIZE YOUR CONTENT</p>
<h2>Lists make information easier to scan</h2>
<p>Last week, we introduced ordered and unordered lists. Today, we will use them to organize information that belongs together.</p>
<div class="ag-code-label ag-html-label">UNORDERED LIST</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Favorite Artists</span><span class="ag-tag">&lt;/h2&gt;</span>

<span class="ag-tag">&lt;ul&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Yayoi Kusama</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Jean-Michel Basquiat</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Kara Walker</span><span class="ag-tag">&lt;/li&gt;</span>
<span class="ag-tag">&lt;/ul&gt;</span></code></pre>
<p>An unordered list uses <code class="ag-inline">&lt;ul&gt;</code> and displays items with bullets by default. Each item belongs inside an <code class="ag-inline">&lt;li&gt;</code> element.</p>
<div class="ag-code-label ag-html-label">ORDERED LIST</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">My Creative Process</span><span class="ag-tag">&lt;/h2&gt;</span>

<span class="ag-tag">&lt;ol&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Collect inspiration</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Sketch ideas</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Create a first draft</span><span class="ag-tag">&lt;/li&gt;</span>
<span class="ag-tag">&lt;/ol&gt;</span></code></pre>
<p>An ordered list uses <code class="ag-inline">&lt;ol&gt;</code> when the sequence matters. The browser numbers the items automatically.</p>
<div class="ag-callout">
<strong>Design tip:</strong> Lists are useful for navigation menus, project descriptions, schedules, collections, instructions, and much more. You will see them all over the web.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">03 / HYPERLINKS</p>
<h2>Make words clickable</h2>
<p>HTML uses the anchor element, <code class="ag-inline">&lt;a&gt;</code>, to create a link. The <code class="ag-inline">href</code> attribute tells the browser where the link should go.</p>
<div class="ag-code-label ag-html-label">YOUR FIRST LINK</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;p&gt;</span>
  <span class="ag-text">Explore the </span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"https://www.moma.org/"</span><span class="ag-tag">&gt;</span><span class="ag-text">Museum of Modern Art</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-text"> website.</span>
<span class="ag-tag">&lt;/p&gt;</span></code></pre>
<p>The link appears as part of the sentence. Clicking the words “Museum of Modern Art” takes the visitor to that website.</p>
<h3>Try a few destinations</h3>
<p>These are examples of external links. Click one to see how a hyperlink works.</p>
<p>
<a class="ag-demo-link" href="https://www.moma.org/" rel="noopener noreferrer" target="_blank">MoMA</a>
<a class="ag-demo-link" href="https://www.metmuseum.org/" rel="noopener noreferrer" target="_blank">The Met</a>
<a class="ag-demo-link" href="https://www.si.edu/" rel="noopener noreferrer" target="_blank">Smithsonian</a>
</p>
<div class="ag-callout ag-yellow">
<strong>Important:</strong> A link needs a meaningful destination. Check that the URL is correct, and use link text that tells visitors what to expect. “View the exhibition” is more informative than “click here.”
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">04 / LINK TO ANOTHER PAGE</p>
<h2>Connect pages within a website</h2>
<p>A multi-page website often has a homepage, an about page, a portfolio, and a contact page. If those files are in the same project folder, you can link to them using their filenames.</p>
<div class="ag-code-label ag-html-label">EXAMPLE: A SIMPLE SITE MENU</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;nav&gt;</span>
  <span class="ag-tag">&lt;ul&gt;</span>
    <span class="ag-tag">&lt;li&gt;&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"index.html"</span><span class="ag-tag">&gt;</span><span class="ag-text">Home</span><span class="ag-tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="ag-tag">&lt;li&gt;&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"about.html"</span><span class="ag-tag">&gt;</span><span class="ag-text">About</span><span class="ag-tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="ag-tag">&lt;li&gt;&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"portfolio.html"</span><span class="ag-tag">&gt;</span><span class="ag-text">Portfolio</span><span class="ag-tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="ag-tag">&lt;li&gt;&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"contact.html"</span><span class="ag-tag">&gt;</span><span class="ag-text">Contact</span><span class="ag-tag">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="ag-tag">&lt;/ul&gt;</span>
<span class="ag-tag">&lt;/nav&gt;</span></code></pre>
<p>The <code class="ag-inline">&lt;nav&gt;</code> element identifies a section containing important navigation links. Each link points to a separate HTML file.</p>
<div class="ag-callout ag-green">
<strong>CodePen note:</strong> This example demonstrates how navigation works in a multi-page site. Because our current CodePen projects are usually single-page exercises, these filenames will not automatically create working pages. We will use in-page links for our hands-on activity.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">05 / LINK TO A SECTION</p>
<h2>Navigate within the same page</h2>
<p>You can also create links that jump to a particular section of the current page. This is useful for long pages, portfolios, and landing pages.</p>
<p>First, give the destination element a unique <code class="ag-inline">id</code>. Then use that ID after a hash symbol in the link's <code class="ag-inline">href</code>.</p>
<div class="ag-code-label ag-html-label">IN-PAGE NAVIGATION</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;nav&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"#about"</span><span class="ag-tag">&gt;</span><span class="ag-text">About</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"#interests"</span><span class="ag-tag">&gt;</span><span class="ag-text">Interests</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"#goals"</span><span class="ag-tag">&gt;</span><span class="ag-text">Goals</span><span class="ag-tag">&lt;/a&gt;</span>
<span class="ag-tag">&lt;/nav&gt;</span>

<span class="ag-tag">&lt;section</span> <span class="ag-attr">id</span>=<span class="ag-value">"about"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About Me</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A little introduction.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span>

<span class="ag-tag">&lt;section</span> <span class="ag-attr">id</span>=<span class="ag-value">"interests"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">My Interests</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Things I enjoy exploring.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span>

<span class="ag-tag">&lt;section</span> <span class="ag-attr">id</span>=<span class="ag-value">"goals"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">My Goals</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">What I hope to accomplish.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></code></pre>
<h3>How it works</h3>
<ul>
<li><code class="ag-inline">href="#about"</code> points to the element whose ID is <code class="ag-inline">about</code>.</li>
<li><code class="ag-inline">id="about"</code> marks the destination section.</li>
<li>The ID and the hash link must match exactly.</li>
<li>Each ID should be unique within the page.</li>
</ul>
</section>
<section class="ag-section">
<p class="ag-eyebrow">06 / SYNCHRONOUS CLASS ACTIVITY</p>
<h2>Build a mini navigation page</h2>
<p>During our live session, we will build a small page that introduces a creative subject and allows visitors to jump between sections.</p>
<div class="ag-code-label ag-html-label">STARTER CODE — COPY INTO CODEPEN</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My Creative World</span><span class="ag-tag">&lt;/h1&gt;</span>

<span class="ag-tag">&lt;nav&gt;</span>
  <span class="ag-tag">&lt;ul&gt;</span>
    <span class="ag-tag">&lt;li&gt;&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"#about"</span><span class="ag-tag">&gt;</span><span class="ag-text">About</span><span class="ag-tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="ag-tag">&lt;li&gt;&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"#favorites"</span><span class="ag-tag">&gt;</span><span class="ag-text">Favorites</span><span class="ag-tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="ag-tag">&lt;li&gt;&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"#goals"</span><span class="ag-tag">&gt;</span><span class="ag-text">Goals</span><span class="ag-tag">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="ag-tag">&lt;/ul&gt;</span>
<span class="ag-tag">&lt;/nav&gt;</span>

<span class="ag-tag">&lt;section</span> <span class="ag-attr">id</span>=<span class="ag-value">"about"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Introduce your topic here.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span>

<span class="ag-tag">&lt;section</span> <span class="ag-attr">id</span>=<span class="ag-value">"favorites"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Favorites</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;ul&gt;</span>
    <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Favorite one</span><span class="ag-tag">&lt;/li&gt;</span>
    <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Favorite two</span><span class="ag-tag">&lt;/li&gt;</span>
    <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Favorite three</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;/ul&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span>

<span class="ag-tag">&lt;section</span> <span class="ag-attr">id</span>=<span class="ag-value">"goals"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Goals</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Describe something you want to learn or create.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></code></pre>
<h3>During class</h3>
<ol class="ag-steps">
<li>Paste the starter code into the HTML panel in CodePen.</li>
<li>Click each navigation link and check whether it jumps to the correct section.</li>
<li>Change the page title and the content to reflect a subject you enjoy.</li>
<li>Add one more section and create a matching navigation link.</li>
<li>Add a link to an external website related to your topic.</li>
<li>Test every link. Fix any mismatched IDs or incorrect URLs.</li>
</ol>
<div class="ag-callout ag-green">
<strong>Remember:</strong> You do not have to write everything from memory. Copy the starter code, identify the parts that make the links work, and then modify it. Understanding and adapting code is an important part of learning web design.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">07 / INDEPENDENT PROJECT</p>
<h2>Create a linked mini-site</h2>
<p>Build on the ideas from Weeks 1 and 2. Create a single-page website about a subject that interests you, and give visitors a way to navigate the information.</p>
<div class="ag-grid">
<article class="ag-card">
<span class="ag-number">01</span>
<h3>Choose your subject</h3>
<p>It could be a musician, artist, film, game, sport, hobby, collection, or personal interest.</p>
</article>
<article class="ag-card">
<span class="ag-number">02</span>
<h3>Organize the page</h3>
<p>Create a main heading, a navigation menu, and at least three sections.</p>
</article>
<article class="ag-card">
<span class="ag-number">03</span>
<h3>Connect everything</h3>
<p>Use in-page links, lists, and at least one external link to create a connected experience.</p>
</article>
</div>
<h3>Project requirements</h3>
<ul class="ag-checklist">
<li>A clear main heading and meaningful page content.</li>
<li>A navigation menu with at least three in-page links.</li>
<li>At least three content sections with unique IDs.</li>
<li>At least one unordered or ordered list.</li>
<li>At least one external hyperlink with descriptive link text.</li>
<li>Navigation links that lead to the correct sections.</li>
<li>Content that is written or thoughtfully adapted by you.</li>
<li>A working CodePen link submitted through D2L.</li>
</ul>
<div class="ag-callout ag-yellow">
<strong>Keep the focus on HTML:</strong> You may add simple CSS if you already feel comfortable, but styling is not required for this assignment. We will begin developing the visual appearance of our websites in the upcoming CSS lessons.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">08 / ACCESSIBILITY &amp; GOOD PRACTICE</p>
<h2>Make links useful to everyone</h2>
<p>Navigation is part of the user experience. A page can have working links and still be confusing if those links do not clearly communicate their purpose.</p>
<div class="ag-grid">
<article class="ag-card">
<h3>Use descriptive text</h3>
<p>Prefer “Explore the artist's portfolio” over “Click here.”</p>
</article>
<article class="ag-card">
<h3>Check every destination</h3>
<p>Make sure the URL or in-page ID is correct and the link goes where expected.</p>
</article>
<article class="ag-card">
<h3>Keep navigation predictable</h3>
<p>Use labels that make sense and organize related links together.</p>
</article>
</div>
<div class="ag-callout">
<strong>Design principle:</strong> Visitors should not have to guess what a link does. Clear labels and consistent organization make a website easier to use.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">09 / SUBMISSION &amp; REFLECTION</p>
<h2>Test it, then turn it in</h2>
<p>Submit your CodePen link through the Week 3 assignment area in D2L. Before you submit, test each navigation link and make sure your page has no missing sections.</p>
<h3>Reflection questions</h3>
<ol>
<li>How does navigation help someone use a website?</li>
<li>What was the trickiest part of connecting your links to their destinations?</li>
<li>If you expanded this project into a full website, what additional pages or sections would you include?</li>
</ol>
</section>
<section class="ag-section">
<p class="ag-eyebrow">10 / QUICK REFERENCE</p>
<h2>Tags and attributes from this week</h2>
<div class="ag-grid">
<article class="ag-card">
<h3><code>&lt;a&gt;</code></h3>
<p>Creates a hyperlink.</p>
</article>
<article class="ag-card">
<h3><code>href</code></h3>
<p>Specifies the link's destination.</p>
</article>
<article class="ag-card">
<h3><code>&lt;nav&gt;</code></h3>
<p>Identifies a section containing navigation links.</p>
</article>
<article class="ag-card">
<h3><code>&lt;ul&gt;</code> / <code>&lt;ol&gt;</code></h3>
<p>Create unordered and ordered lists.</p>
</article>
<article class="ag-card">
<h3><code>&lt;li&gt;</code></h3>
<p>Defines an item within a list.</p>
</article>
<article class="ag-card">
<h3><code>id</code></h3>
<p>Gives an element a unique identifier that can be used as an in-page link destination.</p>
</article>
</div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">11 / LOOKING AHEAD</p>
<h2>Next week: Images and digital media</h2>
<p>We have learned how to structure content, organize information, and connect destinations. Next, we will bring visual content into our pages using images, alternative text, and captions.</p>
<p>As you browse websites this week, notice how menus, lists, and links help you move through the experience. Good navigation often feels effortless because someone designed it carefully.</p>
</section>
<!-- INSTRUCTOR-ONLY SECTION: REMOVE THIS ENTIRE SECTION BEFORE PUBLISHING -->
<section class="ag-section ag-instructor-only">
<p class="ag-eyebrow">INSTRUCTOR ONLY · REMOVE BEFORE PUBLISHING</p>
<h2>Live demonstration: build, break, and repair a link</h2>
<p><strong>Purpose:</strong> Model the process of reading HTML, predicting what a link will do, testing it, and debugging a small mistake. Keep this section visible while teaching; delete it before students see the published lesson.</p>
<h3>Step 1 — Start with a simple list</h3>
<p>Ask students what each tag contributes before you explain it. Point out that <code>&lt;ul&gt;</code> creates the list, while each <code>&lt;li&gt;</code> creates one list item.</p>
<pre class="ag-code"><code><span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Places I Want to Visit</span><span class="ag-tag">&lt;/h2&gt;</span>
<span class="ag-tag">&lt;ul&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">MoMA</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">The Met</span><span class="ag-tag">&lt;/li&gt;</span>
  <span class="ag-tag">&lt;li&gt;</span><span class="ag-text">Smithsonian</span><span class="ag-tag">&lt;/li&gt;</span>
<span class="ag-tag">&lt;/ul&gt;</span></code></pre>
<p><strong>Ask:</strong> What would change if we used <code>&lt;ol&gt;</code> instead of <code>&lt;ul&gt;</code>? When might numbered order matter?</p>
<h3>Step 2 — Turn one phrase into a link</h3>
<p>Add an anchor around the text. Identify the three pieces: the opening tag, the <code>href</code> destination, and the visible link text.</p>
<pre class="ag-code"><code><span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Visit </span><span class="ag-tag">&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"https://www.moma.org/"</span><span class="ag-tag">&gt;</span><span class="ag-text">MoMA's website</span><span class="ag-tag">&lt;/a&gt;</span><span class="ag-text"> for more information.</span><span class="ag-tag">&lt;/p&gt;</span></code></pre>
<p><strong>Ask:</strong> Which part appears on the page? Which part tells the browser where to go?</p>
<h3>Step 3 — Introduce a deliberate mistake</h3>
<p>Change the destination so the attribute is misspelled. Ask students to predict what will happen, then test the link.</p>
<pre class="ag-code"><code><span class="ag-tag">&lt;a</span> <span class="ag-attr">herf</span>=<span class="ag-value">"https://www.moma.org/"</span><span class="ag-tag">&gt;</span><span class="ag-text">MoMA's website</span><span class="ag-tag">&lt;/a&gt;</span></code></pre>
<p class="ag-callout ag-yellow"><strong>Debugging point:</strong> The browser may still display the words, but the link will not work as intended because <code>herf</code> is not the correct attribute. Correct it to <code>href</code>, then test again.</p>
<h3>Step 4 — Connect a navigation link to a section</h3>
<p>Show that the value after <code>href="#about"</code> must match the destination's <code>id="about"</code>. Change one value temporarily to demonstrate a broken jump, then restore the matching values.</p>
<pre class="ag-code"><code><span class="ag-tag">&lt;nav&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"#about"</span><span class="ag-tag">&gt;</span><span class="ag-text">About</span><span class="ag-tag">&lt;/a&gt;</span>
<span class="ag-tag">&lt;/nav&gt;</span>

<span class="ag-tag">&lt;section</span> <span class="ag-attr">id</span>=<span class="ag-value">"about"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About Me</span><span class="ag-tag">&lt;/h2&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></code></pre>
<p><strong>Ask:</strong> What two values must match? Why should every section ID be unique?</p>
<h3>Step 5 — Student check</h3>
<ol class="ag-steps">
<li>Have students point to one list tag, one link tag, and one attribute.</li>
<li>Ask them to explain the difference between an external URL and an in-page hash link.</li>
<li>Invite a student to introduce a small error and ask the class to diagnose it before fixing it.</li>
<li>Before moving on, have everyone test all three navigation links in their own CodePen.</li>
</ol>
</section>
<!-- END INSTRUCTOR-ONLY SECTION -->
<footer class="ag-footer">
<strong>AMDE 155 · Introduction to Web Design</strong><br/>
    Week 03 — Lists, Links &amp; Navigation<br/>
<span class="ag-muted">Organize the content. Connect the experience.</span>
</footer>
</div>
