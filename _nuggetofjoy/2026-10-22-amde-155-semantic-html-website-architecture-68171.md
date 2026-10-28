---
layout: post
title: AMDE 155 Semantic HTML &amp; Website Architecture (Week 9)
slug: amde-155-semantic-html-website-architecture
date: '2026-10-22'
modified: '2026-10-23'
status: published
wordpress_id: 68171
source_url: https://nuggetofjoy.com/amde-155-semantic-html-website-architecture/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
tags: []
---

<div class="amde-grid-lesson">
<header class="ag-hero">
<div class="ag-eyebrow">AMDE 155 · Introduction to Web Design · Week 09</div>
<h1>Semantic HTML &amp;<br/>Website Architecture</h1>
<p>Good websites are more than collections of styled boxes. They have structure, meaning, and a clear organization. This week, you will learn how semantic HTML helps browsers, visitors, and assistive technologies understand the content of a webpage.</p>
<div class="ag-chips">
<span class="ag-chip">HTML Structure</span>
<span class="ag-chip">Semantic Elements</span>
<span class="ag-chip">Accessibility</span>
<span class="ag-chip">Code Organization</span>
</div>
</header>
<section class="ag-section">
<h2>01 / Why Structure Matters</h2>
<p>Imagine designing a poster with a title, subtitle, main image, supporting information, and a footer. Each part has a purpose. A website works in a similar way, except that HTML gives each part a structure that a browser can interpret.</p>
<p>In our earlier lessons, you used headings, paragraphs, lists, links, and images. This week, we will look at how those elements fit into a larger page structure.</p>
<div class="ag-callout">
<strong>The big idea:</strong> HTML describes what content is and how it is organized. CSS controls how that content looks. Keeping these responsibilities clear makes websites easier to build, maintain, and understand.
    </div>
</section>
<section class="ag-section">
<h2>02 / What Is Semantic HTML?</h2>
<p>Semantic HTML means choosing elements that describe the meaning or purpose of the content they contain. Instead of using a generic container for everything, you choose elements that explain what each part of the page does.</p>
<div class="ag-grid">
<div class="ag-card">
<div class="ag-number">01</div>
<h3>Non-semantic element</h3>
<p>A generic container such as <span class="ag-inline">&lt;div&gt;</span> groups content but does not tell us what that content represents.</p>
<div class="ag-code">
<pre><span class="ag-tag">&lt;div&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About the Artist</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Biography goes here.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/div&gt;</span></pre>
</div>
</div>
<div class="ag-card">
<div class="ag-number">02</div>
<h3>Semantic element</h3>
<p>An element such as <span class="ag-inline">&lt;section&gt;</span> indicates that the content forms a distinct section of the page.</p>
<div class="ag-code">
<pre><span class="ag-tag">&lt;section&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About the Artist</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Biography goes here.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></pre>
</div>
</div>
</div>
<p>Both examples can display the same content. The difference is that the semantic version communicates more about the role of the content within the document.</p>
</section>
<section class="ag-section">
<h2>03 / Meet the Main Semantic Elements</h2>
<p>These elements are commonly used to organize a webpage. You do not need to memorize every HTML element. Focus on understanding what these elements are for and when they make sense.</p>
<div class="ag-grid">
<div class="ag-card">
<h3><span class="ag-inline">&lt;header&gt;</span></h3>
<p>Introduces a page or a section. It might contain a site title, logo, heading, or introductory information.</p>
</div>
<div class="ag-card">
<h3><span class="ag-inline">&lt;nav&gt;</span></h3>
<p>Contains a group of important navigation links that help visitors move through a website or page.</p>
</div>
<div class="ag-card">
<h3><span class="ag-inline">&lt;main&gt;</span></h3>
<p>Contains the primary content of the page. A typical page should have one main content area.</p>
</div>
<div class="ag-card">
<h3><span class="ag-inline">&lt;section&gt;</span></h3>
<p>Groups related content into a distinct thematic section, usually with its own heading.</p>
</div>
<div class="ag-card">
<h3><span class="ag-inline">&lt;article&gt;</span></h3>
<p>Contains a self-contained piece of content, such as a news story, blog post, or independent feature.</p>
</div>
<div class="ag-card">
<h3><span class="ag-inline">&lt;aside&gt;</span></h3>
<p>Contains related supporting information, such as a sidebar, related links, or a short supplemental note.</p>
</div>
<div class="ag-card">
<h3><span class="ag-inline">&lt;footer&gt;</span></h3>
<p>Contains closing information for a page or section, such as credits, contact information, or copyright details.</p>
</div>
<div class="ag-card">
<h3><span class="ag-inline">&lt;figure&gt;</span> and <span class="ag-inline">&lt;figcaption&gt;</span></h3>
<p>Group an image or other illustrative content with an optional caption that explains or credits it.</p>
</div>
</div>
<div class="ag-callout">
<strong>Remember:</strong> Semantic elements do not automatically create a visual layout. You will still use CSS to style their appearance and position them on the page.
    </div>
</section>
<section class="ag-section">
<h2>04 / See How a Page Fits Together</h2>
<p>Here is a simplified structure for an artist portfolio. Notice how the elements are nested to show the relationships between the page, its navigation, and its content.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Semantic page structure</span>
<pre><span class="ag-tag">&lt;header&gt;</span>
  <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">Jordan Lee — Artist</span><span class="ag-tag">&lt;/h1&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Photography, drawing, and mixed media.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/header&gt;</span>

<span class="ag-tag">&lt;nav&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#about"</span><span class="ag-tag">&gt;</span><span class="ag-text">About</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#work"</span><span class="ag-tag">&gt;</span><span class="ag-text">Work</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#contact"</span><span class="ag-tag">&gt;</span><span class="ag-text">Contact</span><span class="ag-tag">&lt;/a&gt;</span>
<span class="ag-tag">&lt;/nav&gt;</span>

<span class="ag-tag">&lt;main&gt;</span>
  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id=</span><span class="ag-value">"about"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A short artist biography.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>

  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id=</span><span class="ag-value">"work"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Selected Work</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;figure&gt;</span>
      <span class="ag-tag">&lt;img</span> <span class="ag-attr">src=</span><span class="ag-value">"artwork.jpg"</span>
           <span class="ag-attr">alt=</span><span class="ag-value">"Abstract artwork in blue and orange"</span><span class="ag-tag">&gt;</span>
      <span class="ag-tag">&lt;figcaption&gt;</span><span class="ag-text">Artwork title, 2026.</span><span class="ag-tag">&lt;/figcaption&gt;</span>
    <span class="ag-tag">&lt;/figure&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>

  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id=</span><span class="ag-value">"contact"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Contact</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Get in touch to learn more.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>
<span class="ag-tag">&lt;/main&gt;</span>

<span class="ag-tag">&lt;footer&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">© 2026 Jordan Lee</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/footer&gt;</span></pre>
</div>
<p>Notice that the navigation links use <span class="ag-inline">href="#about"</span>, <span class="ag-inline">href="#work"</span>, and <span class="ag-inline">href="#contact"</span>. Each one matches the corresponding section's <span class="ag-inline">id</span>.</p>
</section>
<section class="ag-section">
<h2>05 / The Difference Between Section and Article</h2>
<p>Two elements that beginners sometimes confuse are <span class="ag-inline">&lt;section&gt;</span> and <span class="ag-inline">&lt;article&gt;</span>. They can both group content, but they serve different purposes.</p>
<div class="ag-grid">
<div class="ag-card">
<h3>Use a section when…</h3>
<p>You are grouping related material into a thematic part of a larger page.</p>
<div class="ag-code">
<pre><span class="ag-tag">&lt;section&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Exhibition Information</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Dates, location, and details.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></pre>
</div>
</div>
<div class="ag-card">
<h3>Use an article when…</h3>
<p>The content makes sense as a self-contained item, even outside the page around it.</p>
<div class="ag-code">
<pre><span class="ag-tag">&lt;article&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Artist Interview</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">An independent interview story.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/article&gt;</span></pre>
</div>
</div>
</div>
<p>There is no need to force every element into your page. Choose the element that best describes the content you actually have.</p>
</section>
<section class="ag-section">
<h2>06 / Headings Create a Content Hierarchy</h2>
<p>Headings do more than change the size of text. They organize information into levels, helping visitors understand how ideas relate to one another.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · A logical heading structure</span>
<pre><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">A Guide to Street Photography</span><span class="ag-tag">&lt;/h1&gt;</span>

<span class="ag-tag">&lt;section&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Getting Started</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Introduction to the subject.</span><span class="ag-tag">&lt;/p&gt;</span>

  <span class="ag-tag">&lt;h3&gt;</span><span class="ag-text">Choosing a Camera</span><span class="ag-tag">&lt;/h3&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Information about camera choices.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span>

<span class="ag-tag">&lt;section&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Ethics and Respect</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Information about photographing people.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></pre>
</div>
<div class="ag-callout">
<strong>Design note:</strong> Use CSS to change how headings look. Do not choose an HTML heading level just because its default font size looks right. Keep the content hierarchy logical, then style it.
    </div>
</section>
<section class="ag-section">
<h2>07 / Basic CSS Still Does the Styling</h2>
<p>Semantic elements work with the CSS skills you already know. You can select an element by its name and style it just as you have done with headings, paragraphs, and other HTML elements.</p>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Styling semantic elements</span>
<pre><span class="ag-css-prop">body </span>{
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0</span>;
  <span class="ag-css-prop">font-family</span>: <span class="ag-css-value">Arial, sans-serif</span>;
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.6</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#202638</span>;
}

<span class="ag-css-prop">header </span>{
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">40px 24px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#111b35</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">white</span>;
}

<span class="ag-css-prop">nav </span>{
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">16px 24px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#d7ff64</span>;
}

<span class="ag-css-prop">nav a </span>{
  <span class="ag-css-prop">margin-right</span>: <span class="ag-css-value">16px</span>;
}

<span class="ag-css-prop">main </span>{
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">900px</span>;
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0 auto</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
}

<span class="ag-css-prop">section </span>{
  <span class="ag-css-prop">margin-bottom</span>: <span class="ag-css-value">32px</span>;
}

<span class="ag-css-prop">footer </span>{
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#f3f5fa</span>;
}</pre>
</div>
<p>This is a basic example. You can use your own colors, type choices, and spacing. The important point is that HTML defines the content structure while CSS gives that structure its visual identity.</p>
</section>
<section class="ag-section">
<h2>08 / Accessibility Starts with Structure</h2>
<p>Semantic HTML can make a page easier to navigate and understand, including for people who use screen readers or other assistive technologies. Good structure also helps people who scan a page quickly.</p>
<ul class="ag-checklist">
<li>Use headings in a meaningful order.</li>
<li>Use <span class="ag-inline">&lt;nav&gt;</span> for important navigation groups.</li>
<li>Place the primary page content inside <span class="ag-inline">&lt;main&gt;</span>.</li>
<li>Write descriptive link text that explains where a link goes.</li>
<li>Give meaningful images appropriate alt text.</li>
<li>Use an empty alt attribute, <span class="ag-inline">alt=""</span>, for purely decorative images that do not convey information.</li>
<li>Choose semantic elements for their purpose rather than their default appearance.</li>
</ul>
<div class="ag-callout">
<strong>Example:</strong> A link labeled “View the exhibition schedule” tells a visitor more than a link labeled “Click here.” Small writing choices can improve the experience for everyone.
    </div>
</section>
<section class="ag-section">
<h2>09 / In-Class Assignment: Rebuild the Structure</h2>
<p>For this exercise, you will create a simple webpage for a fictional creative studio. Focus on meaningful HTML structure first. Keep the visual design simple; we will work with more advanced layout techniques in upcoming weeks.</p>
<h3>Your page must include:</h3>
<ul>
<li>A header containing a studio name and short introduction.</li>
<li>A navigation area with three in-page links.</li>
<li>A main content area with at least three sections.</li>
<li>An article describing one featured project.</li>
<li>An image with descriptive alt text and a caption.</li>
<li>An aside containing a short related note or studio fact.</li>
<li>A footer with a credit or contact detail.</li>
</ul>
<div class="ag-callout">
<strong>Keep the design simple.</strong> You can use a white background, dark text, one accent color, and basic spacing. Your main goal is to show that you understand how semantic elements organize a page.
    </div>
<h3>Starter code</h3>
<p>Paste this into the HTML panel in CodePen. Replace the sample text and add your own content. Then write CSS to style the page.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Starter template</span>
<pre><span class="ag-tag">&lt;header&gt;</span>
  <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">Northstar Creative Studio</span><span class="ag-tag">&lt;/h1&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Ideas made visible.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/header&gt;</span>

<span class="ag-tag">&lt;nav&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#studio"</span><span class="ag-tag">&gt;</span><span class="ag-text">Studio</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#project"</span><span class="ag-tag">&gt;</span><span class="ag-text">Featured Project</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#contact"</span><span class="ag-tag">&gt;</span><span class="ag-text">Contact</span><span class="ag-tag">&lt;/a&gt;</span>
<span class="ag-tag">&lt;/nav&gt;</span>

<span class="ag-tag">&lt;main&gt;</span>
  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id=</span><span class="ag-value">"studio"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About the Studio</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Describe your creative studio.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>

  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id=</span><span class="ag-value">"project"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Featured Project</span><span class="ag-tag">&lt;/h2&gt;</span>

    <span class="ag-tag">&lt;article&gt;</span>
      <span class="ag-tag">&lt;h3&gt;</span><span class="ag-text">Project Title</span><span class="ag-tag">&lt;/h3&gt;</span>
      <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Explain the project here.</span><span class="ag-tag">&lt;/p&gt;</span>

      <span class="ag-tag">&lt;figure&gt;</span>
        <span class="ag-tag">&lt;img</span>
          <span class="ag-attr">src=</span><span class="ag-value">"project.jpg"</span>
          <span class="ag-attr">alt=</span><span class="ag-value">"Describe your project image"</span><span class="ag-tag">&gt;</span>
        <span class="ag-tag">&lt;figcaption&gt;</span><span class="ag-text">Project image caption.</span><span class="ag-tag">&lt;/figcaption&gt;</span>
      <span class="ag-tag">&lt;/figure&gt;</span>
    <span class="ag-tag">&lt;/article&gt;</span>

    <span class="ag-tag">&lt;aside&gt;</span>
      <span class="ag-tag">&lt;h3&gt;</span><span class="ag-text">Studio Note</span><span class="ag-tag">&lt;/h3&gt;</span>
      <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Add an interesting related fact.</span><span class="ag-tag">&lt;/p&gt;</span>
    <span class="ag-tag">&lt;/aside&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>

  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id=</span><span class="ag-value">"contact"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Contact</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Add contact information here.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>
<span class="ag-tag">&lt;/main&gt;</span>

<span class="ag-tag">&lt;footer&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">© 2026 Northstar Creative Studio</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/footer&gt;</span></pre>
</div>
</section>
<section class="ag-section">
<h2>10 / Independent Practice</h2>
<p>After completing the starter exercise, review your Week 8 midterm website. You do not need to redesign the entire page. Instead, improve its underlying HTML structure.</p>
<ol class="ag-steps">
<li><strong>Review your existing code.</strong><br/>Identify generic containers and determine whether any would be better represented by semantic elements.</li>
<li><strong>Organize your page.</strong><br/>Where appropriate, group the page using header, nav, main, section, article, aside, and footer elements.</li>
<li><strong>Review your headings.</strong><br/>Make sure your main title and section headings create a logical hierarchy.</li>
<li><strong>Check your images and links.</strong><br/>Verify that your alt text is useful, your captions are meaningful, and your link text explains its destination.</li>
<li><strong>Preview the result.</strong><br/>Check that your changes have not broken your CSS or navigation. Semantic elements can be styled, but changing the HTML may affect selectors in your existing CSS.</li>
</ol>
</section>
<section class="ag-section">
<h2>11 / What to Submit</h2>
<p>Submit the following through the designated D2L assignment area:</p>
<ul class="ag-checklist">
<li>A link to your completed in-class CodePen project.</li>
<li>A screenshot showing the finished webpage.</li>
<li>A short reflection of approximately 100–150 words explaining how semantic HTML improved the organization of your page.</li>
</ul>
<h3>Reflection questions</h3>
<ul>
<li>Which semantic elements did you use, and what purpose did they serve?</li>
<li>What is the difference between a generic <span class="ag-inline">&lt;div&gt;</span> and a semantic element such as <span class="ag-inline">&lt;section&gt;</span>?</li>
<li>How can meaningful HTML structure help visitors understand and navigate a website?</li>
</ul>
</section>
<section class="ag-section">
<h2>12 / Final Checklist</h2>
<ul class="ag-checklist">
<li>My page has a clear header, navigation, main content, and footer.</li>
<li>My content is organized into meaningful sections.</li>
<li>I used article and aside only where they make sense.</li>
<li>My headings follow a logical hierarchy.</li>
<li>My in-page navigation links work.</li>
<li>My images have appropriate alt text and captions where needed.</li>
<li>My CSS still works after I updated the HTML.</li>
<li>I submitted my CodePen link, screenshot, and reflection.</li>
</ul>
</section>
<!-- INSTRUCTOR-ONLY SECTION: REMOVE THIS ENTIRE SECTION BEFORE PUBLISHING -->
<section class="ag-section ag-instructor-only" style="border:2px dashed #9b5c20;background:#fff8ec;padding:24px;border-radius:14px;">
<div class="ag-eyebrow" style="color:#874714;">INSTRUCTOR ONLY / REMOVE BEFORE PUBLISHING</div>
<h2>Instructor walkthrough: Structure Before Style</h2>
<p>Use this walkthrough during the live CodePen demonstration. Build the page in small steps, preview after each change, and ask students to predict what each element communicates. Keep the focus on HTML structure rather than advanced visual styling.</p>
<p style="background:#f8e8d0;border-radius:8px;padding:12px 14px;font-weight:700;">Remove this entire instructor-only section, including the comments, before publishing the student-facing lesson.</p>
<h3>Step 1 — Start with a generic container</h3>
<p>Show a basic block of content using a <code class="ag-inline">div</code>. Explain that it groups content but does not tell us what the content represents.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Generic container</span>
<pre><span class="ag-tag">&lt;div&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About the Studio</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">We create visual experiences.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/div&gt;</span></pre>
</div>
<p><strong>Ask:</strong> What can we tell from this markup? What information does the element name itself give us?</p>
<h3>Step 2 — Choose an element that describes the content</h3>
<p>Replace the <code class="ag-inline">div</code> with a <code class="ag-inline">section</code> and point out that the content now has a clearer purpose. Mention that a section is most useful when it groups a distinct topic, usually with a heading.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Semantic section</span>
<pre><span class="ag-tag">&lt;section&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About the Studio</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">We create visual experiences.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></pre>
</div>
<p><strong>Ask:</strong> Does this change necessarily make the content look different? If not, what has improved?</p>
<h3>Step 3 — Assemble the page structure</h3>
<p>Build the page using the major semantic elements. Explain each part as you add it: <code class="ag-inline">header</code> introduces the site, <code class="ag-inline">nav</code> groups navigation links, <code class="ag-inline">main</code> contains the primary content, and <code class="ag-inline">footer</code> provides closing information.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Page outline</span>
<pre><span class="ag-tag">&lt;header&gt;</span>
  <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">Northstar Creative Studio</span><span class="ag-tag">&lt;/h1&gt;</span>
<span class="ag-tag">&lt;/header&gt;</span>

<span class="ag-tag">&lt;nav&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"#studio"</span><span class="ag-tag">&gt;</span><span class="ag-text">Studio</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"#contact"</span><span class="ag-tag">&gt;</span><span class="ag-text">Contact</span><span class="ag-tag">&lt;/a&gt;</span>
<span class="ag-tag">&lt;/nav&gt;</span>

<span class="ag-tag">&lt;main&gt;</span>
  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id</span>=<span class="ag-value">"studio"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About the Studio</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>
  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id</span>=<span class="ag-value">"contact"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Contact</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>
<span class="ag-tag">&lt;/main&gt;</span>

<span class="ag-tag">&lt;footer&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">© 2026 Northstar Creative Studio</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/footer&gt;</span></pre>
</div>
<p><strong>Ask:</strong> Why does <code class="ag-inline">main</code> contain the primary page content, rather than the navigation or footer?</p>
<h3>Step 4 — Demonstrate how in-page links work</h3>
<p>Show that the value in an anchor's <code class="ag-inline">href</code> must match an element's <code class="ag-inline">id</code>. Then introduce a deliberate mismatch so the link stops reaching the intended section.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Intentional mismatch</span>
<pre><span class="ag-tag">&lt;a</span> <span class="ag-attr">href</span>=<span class="ag-value">"#studoi"</span><span class="ag-tag">&gt;</span><span class="ag-text">Studio</span><span class="ag-tag">&lt;/a&gt;</span>

<span class="ag-tag">&lt;section</span> <span class="ag-attr">id</span>=<span class="ag-value">"studio"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About the Studio</span><span class="ag-tag">&lt;/h2&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></pre>
</div>
<p>Ask students to spot the spelling difference, then correct <code class="ag-inline">href="#studoi"</code> to <code class="ag-inline">href="#studio"</code>.</p>
<p><strong>Ask:</strong> What other things could make a navigation link appear not to work?</p>
<h3>Step 5 — Distinguish section from article</h3>
<p>Use a portfolio example. A section groups the broader “Featured Work” topic; an article can contain one self-contained project description. Reinforce that element choice depends on the content, not on which element is easiest to style.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Related but different purposes</span>
<pre><span class="ag-tag">&lt;section&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Featured Work</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;article&gt;</span>
    <span class="ag-tag">&lt;h3&gt;</span><span class="ag-text">Project One</span><span class="ag-tag">&lt;/h3&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A self-contained project description.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/article&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></pre>
</div>
<h3>Step 6 — Add CSS without confusing structure and appearance</h3>
<p>Demonstrate that semantic elements can be styled with the same CSS skills students already know. Keep the CSS simple and explain that a semantic tag is not a layout system by itself.</p>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Simple styling</span>
<pre><span class="ag-css-prop">body</span> {
  <span class="ag-css-prop">font-family</span>: <span class="ag-css-value">Arial, sans-serif</span>;
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.6</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#202638</span>;
}

<span class="ag-css-prop">header</span> {
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#111b35</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">white</span>;
}</pre>
</div>
<p><strong>Ask:</strong> Which part of this example determines what the content means, and which part determines how it looks?</p>
<h3>Step 7 — Quick student check</h3>
<ul class="ag-checklist">
<li>Students can explain why semantic HTML communicates more than a generic container.</li>
<li>Students can identify the purpose of header, nav, main, section, article, aside, and footer.</li>
<li>Students can explain how an in-page link matches an element ID.</li>
<li>Students can distinguish a logical heading hierarchy from visual heading size.</li>
<li>Students can describe one way semantic structure supports accessibility.</li>
</ul>
</section>
<!-- END INSTRUCTOR-ONLY SECTION -->
<footer class="ag-footer">
<h2>Structure Before Style.</h2>
<p>A well-designed website starts with a clear plan for its content. Semantic HTML gives your pages a meaningful foundation, making them easier to navigate, maintain, and expand.</p>
<p><strong>Next week:</strong> CSS Flexbox — using layout rules to arrange elements in rows and columns.</p>
</footer>
</div>
