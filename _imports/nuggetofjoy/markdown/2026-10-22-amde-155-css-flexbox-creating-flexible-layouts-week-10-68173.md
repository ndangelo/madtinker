---
title: 'AMDE 155 CSS Flexbox: Creating Flexible Layouts (Week 10)'
slug: amde-155-css-flexbox-creating-flexible-layouts-week-10
date: '2026-10-22'
modified: '2026-10-23'
status: published
wordpress_id: 68173
source_url: https://nuggetofjoy.com/amde-155-css-flexbox-creating-flexible-layouts-week-10/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
- Projects
tags: []
migration:
  format: hybrid-markdown
  original_html: original-html/68173.html
  post_css: styles/posts/68173.css
  needs_review: true
---

<div class="amde-grid-lesson">
<header class="ag-hero">
<div class="ag-eyebrow">AMDE 155 · Introduction to Web Design · Week 10</div>
<h1>CSS Flexbox:<br/>Creating Flexible Layouts</h1>
<p>Learn how to arrange content in rows and columns, align items, distribute space, and create cleaner webpage layouts. Flexbox gives you more control over how elements fit together without relying on awkward spacing or outdated layout techniques.</p>
<div class="ag-chips">
<span class="ag-chip">CSS Layout</span>
<span class="ag-chip">Flexbox</span>
<span class="ag-chip">Alignment</span>
<span class="ag-chip">Creative Web Design</span>
</div>
</header>
<section class="ag-section">
<h2>01 / Why Do We Need Flexbox?</h2>
<p>Think about the last website you visited. You probably saw navigation links arranged in a row, cards displayed next to each other, or an image placed beside a block of text. These are layout decisions.</p>
<p>Until now, you have mostly focused on the content of a webpage and the basic CSS properties that control its appearance. Flexbox introduces a more systematic way to arrange elements inside a container.</p>
<div class="ag-callout">
<strong>The big idea:</strong> Flexbox lets you control the arrangement, alignment, and spacing of elements inside a container. You define the layout rules, and the browser positions the items for you.
    </div>
<p>Flexbox is especially useful for navigation bars, rows of cards, profile layouts, buttons, and sections where text and images sit beside each other.</p>
</section>
<section class="ag-section">
<h2>02 / Understanding the Flex Container</h2>
<p>Flexbox starts with a parent element and its child elements. The parent becomes the <strong>flex container</strong>, and its direct children become <strong>flex items</strong>.</p>
<div class="ag-grid">
<div class="ag-card">
<div class="ag-number">01</div>
<h3>The Container</h3>
<p>The parent element receives <span class="ag-inline">display: flex;</span>. This activates Flexbox for its direct children.</p>
<div class="ag-code">
<pre><span class="ag-css-prop">.container </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
}</pre>
</div>
</div>
<div class="ag-card">
<div class="ag-number">02</div>
<h3>The Items</h3>
<p>The children are arranged according to the container's Flexbox rules. They do not each need their own <span class="ag-inline">display: flex;</span>.</p>
<div class="ag-code">
<pre><span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"container"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;div&gt;</span><span class="ag-text">One</span><span class="ag-tag">&lt;/div&gt;</span>
  <span class="ag-tag">&lt;div&gt;</span><span class="ag-text">Two</span><span class="ag-tag">&lt;/div&gt;</span>
  <span class="ag-tag">&lt;div&gt;</span><span class="ag-text">Three</span><span class="ag-tag">&lt;/div&gt;</span>
<span class="ag-tag">&lt;/div&gt;</span></pre>
</div>
</div>
</div>
<p>By default, Flexbox arranges items in a row. That one CSS declaration can immediately change how your page is organized.</p>
</section>
<section class="ag-section">
<h2>03 / Your First Flexbox Layout</h2>
<p>Let's create a simple row of three boxes. You can use this example to see how the container affects the elements inside it.</p>
<h3>HTML</h3>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Three flex items</span>
<pre><span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"flex-container"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"box"</span><span class="ag-tag">&gt;</span><span class="ag-text">One</span><span class="ag-tag">&lt;/div&gt;</span>
  <span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"box"</span><span class="ag-tag">&gt;</span><span class="ag-text">Two</span><span class="ag-tag">&lt;/div&gt;</span>
  <span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"box"</span><span class="ag-tag">&gt;</span><span class="ag-text">Three</span><span class="ag-tag">&lt;/div&gt;</span>
<span class="ag-tag">&lt;/div&gt;</span></pre>
</div>
<h3>CSS</h3>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Activate Flexbox</span>
<pre><span class="ag-css-prop">.flex-container </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">16px</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">20px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#edf2ff</span>;
}

<span class="ag-css-prop">.box </span>{
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#2457d6</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">white</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">text-align</span>: <span class="ag-css-value">center</span>;
}</pre>
</div>
<p>Notice that <span class="ag-inline">display: flex;</span> belongs to the container, while the background color and padding belong to the boxes themselves.</p>
</section>
<section class="ag-section">
<h2>04 / The Main Flexbox Properties</h2>
<p>You do not need to learn every Flexbox property at once. Start with these five. They cover many of the layout situations you will encounter in an introductory web design project.</p>
<div class="ag-card">
<h3>1. flex-direction</h3>
<p>Controls the direction in which the items are arranged.</p>
<div class="ag-code">
<pre><span class="ag-css-prop">.container </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">flex-direction</span>: <span class="ag-css-value">row</span>;
}</pre>
</div>
<p><span class="ag-inline">row</span> arranges items horizontally. <span class="ag-inline">column</span> stacks them vertically. There are also reverse variations, but begin with row and column.</p>
</div>
<div class="ag-card">
<h3>2. justify-content</h3>
<p>Controls how items are distributed along the main axis—the direction in which the flex items flow.</p>
<div class="ag-code">
<pre><span class="ag-css-prop">.container </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">justify-content</span>: <span class="ag-css-value">space-between</span>;
}</pre>
</div>
<p>Common values include <span class="ag-inline">flex-start</span>, <span class="ag-inline">center</span>, <span class="ag-inline">flex-end</span>, <span class="ag-inline">space-between</span>, and <span class="ag-inline">space-around</span>.</p>
</div>
<div class="ag-card">
<h3>3. align-items</h3>
<p>Controls how items align across the cross axis, which is perpendicular to the main axis.</p>
<div class="ag-code">
<pre><span class="ag-css-prop">.container </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">align-items</span>: <span class="ag-css-value">center</span>;
}</pre>
</div>
<p>Common values include <span class="ag-inline">stretch</span>, <span class="ag-inline">center</span>, <span class="ag-inline">flex-start</span>, and <span class="ag-inline">flex-end</span>.</p>
</div>
<div class="ag-card">
<h3>4. gap</h3>
<p>Adds consistent space between flex items without needing to add margins to each item.</p>
<div class="ag-code">
<pre><span class="ag-css-prop">.container </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">20px</span>;
}</pre>
</div>
<p>Change the number to increase or decrease the space between items. You can also use different row and column gaps when needed.</p>
</div>
<div class="ag-card">
<h3>5. flex-wrap</h3>
<p>Controls whether items stay on one line or can move onto additional lines when space is limited.</p>
<div class="ag-code">
<pre><span class="ag-css-prop">.container </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">flex-wrap</span>: <span class="ag-css-value">wrap</span>;
}</pre>
</div>
<p>Use <span class="ag-inline">wrap</span> when items should move to another line instead of becoming squeezed into a narrow space.</p>
</div>
</section>
<section class="ag-section">
<h2>05 / Understand the Axes</h2>
<p>Two Flexbox properties become much easier to understand when you think about the direction of the layout.</p>
<div class="ag-grid">
<div class="ag-card">
<h3>Main axis</h3>
<p>The main axis follows the direction set by <span class="ag-inline">flex-direction</span>. With a row, it runs horizontally. With a column, it runs vertically.</p>
<p><strong>Property:</strong> <span class="ag-inline">justify-content</span></p>
</div>
<div class="ag-card">
<h3>Cross axis</h3>
<p>The cross axis runs perpendicular to the main axis. With a row, it runs vertically. With a column, it runs horizontally.</p>
<p><strong>Property:</strong> <span class="ag-inline">align-items</span></p>
</div>
</div>
<div class="ag-callout">
<strong>A useful memory trick:</strong> <span class="ag-inline">justify-content</span> distributes items along the direction they flow. <span class="ag-inline">align-items</span> aligns items across that direction. If you change <span class="ag-inline">flex-direction</span>, the axes change too.
    </div>
</section>
<section class="ag-section">
<h2>06 / Build a Navigation Bar</h2>
<p>Navigation is one of the easiest ways to see Flexbox in action. Let's arrange a site name on one side and navigation links on the other.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Navigation structure</span>
<pre><span class="ag-tag">&lt;header</span> <span class="ag-attr">class=</span><span class="ag-value">"site-header"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">class=</span><span class="ag-value">"site-name"</span> <span class="ag-attr">href=</span><span class="ag-value">"#home"</span><span class="ag-tag">&gt;</span>
    <span class="ag-text">STUDIO NORTH</span>
  <span class="ag-tag">&lt;/a&gt;</span>

  <span class="ag-tag">&lt;nav</span> <span class="ag-attr">class=</span><span class="ag-value">"site-nav"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#work"</span><span class="ag-tag">&gt;</span><span class="ag-text">Work</span><span class="ag-tag">&lt;/a&gt;</span>
    <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#about"</span><span class="ag-tag">&gt;</span><span class="ag-text">About</span><span class="ag-tag">&lt;/a&gt;</span>
    <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#contact"</span><span class="ag-tag">&gt;</span><span class="ag-text">Contact</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;/nav&gt;</span>
<span class="ag-tag">&lt;/header&gt;</span></pre>
</div>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Align the site name and links</span>
<pre><span class="ag-css-prop">.site-header </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">justify-content</span>: <span class="ag-css-value">space-between</span>;
  <span class="ag-css-prop">align-items</span>: <span class="ag-css-value">center</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#111b35</span>;
}

<span class="ag-css-prop">.site-name </span>{
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#d7ff64</span>;
  <span class="ag-css-prop">font-weight</span>: <span class="ag-css-value">bold</span>;
  <span class="ag-css-prop">text-decoration</span>: <span class="ag-css-value">none</span>;
}

<span class="ag-css-prop">.site-nav </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">20px</span>;
}

<span class="ag-css-prop">.site-nav a </span>{
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">white</span>;
  <span class="ag-css-prop">text-decoration</span>: <span class="ag-css-value">none</span>;
}</pre>
</div>
<p>The outer header uses Flexbox to separate the site name from the navigation. The navigation uses its own Flexbox container to arrange the links. This is an example of using Flexbox at more than one level.</p>
</section>
<section class="ag-section">
<h2>07 / Create a Row of Design Cards</h2>
<p>Flexbox is also useful for displaying related content. Imagine a portfolio with three project cards. The cards can sit next to each other when space allows and wrap onto another line when necessary.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Portfolio cards</span>
<pre><span class="ag-tag">&lt;section</span> <span class="ag-attr">class=</span><span class="ag-value">"project-list"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;article</span> <span class="ag-attr">class=</span><span class="ag-value">"project-card"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Poster Design</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A visual identity experiment.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/article&gt;</span>

  <span class="ag-tag">&lt;article</span> <span class="ag-attr">class=</span><span class="ag-value">"project-card"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Photo Series</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">An exploration of light.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/article&gt;</span>

  <span class="ag-tag">&lt;article</span> <span class="ag-attr">class=</span><span class="ag-value">"project-card"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Editorial Layout</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A study in type and space.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/article&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></pre>
</div>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Flexible card layout</span>
<pre><span class="ag-css-prop">.project-list </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">flex-wrap</span>: <span class="ag-css-value">wrap</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">20px</span>;
}

<span class="ag-css-prop">.project-card </span>{
  <span class="ag-css-prop">flex</span>: <span class="ag-css-value">1 1 220px</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#f3f5fa</span>;
  <span class="ag-css-prop">border</span>: <span class="ag-css-value">1px solid #dfe4ee</span>;
  <span class="ag-css-prop">border-radius</span>: <span class="ag-css-value">12px</span>;
}</pre>
</div>
<p>The declaration <span class="ag-inline">flex: 1 1 220px;</span> allows a card to grow when there is room, shrink when needed, and start with a preferred basis of about 220 pixels. With wrapping enabled, cards can move to additional rows when the available width is too small.</p>
</section>
<section class="ag-section">
<h2>08 / Flexbox and Responsive Layouts</h2>
<p>Flexbox can help a layout adapt to different screen widths. You can allow items to wrap or change the direction of the layout at a particular viewport width.</p>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Switch direction on smaller screens</span>
<pre><span class="ag-css-prop">.feature </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">align-items</span>: <span class="ag-css-value">center</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">24px</span>;
}

<span class="ag-css-prop">.feature img </span>{
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">45%</span>;
  <span class="ag-css-prop">height</span>: <span class="ag-css-value">auto</span>;
}

<span class="ag-css-prop">@media (max-width: 600px) </span>{
  <span class="ag-css-prop">.feature </span>{
    <span class="ag-css-prop">flex-direction</span>: <span class="ag-css-value">column</span>;
    <span class="ag-css-prop">align-items</span>: <span class="ag-css-value">stretch</span>;
  }

  <span class="ag-css-prop">.feature img </span>{
    <span class="ag-css-prop">width</span>: <span class="ag-css-value">100%</span>;
  }
}</pre>
</div>
<p>On wider screens, the image and text can sit side by side. Below 600 pixels, the media query stacks them vertically and allows the image to fill the available width.</p>
<div class="ag-callout">
<strong>Keep in mind:</strong> Flexbox does not automatically make every design responsive. You still need to consider item widths, wrapping, text length, image sizing, and when a layout should change direction.
    </div>
</section>
<section class="ag-section">
<h2>09 / In-Class Assignment: Creative Studio Layout</h2>
<p>Design a simple homepage for a fictional creative studio, artist collective, or small design agency. The goal is to practice Flexbox through a layout that could realistically appear on a portfolio website.</p>
<h3>Your page must include:</h3>
<ul class="ag-checklist">
<li>A header with a studio name and navigation links arranged using Flexbox.</li>
<li>A feature area with an image and a block of introductory text.</li>
<li>A row of three project cards using Flexbox.</li>
<li>Consistent gaps between layout items.</li>
<li>A footer with a short closing message or contact link.</li>
<li>A media query that adjusts at least one layout for a narrow screen.</li>
</ul>
<p>Keep the visual design simple. Use placeholder colors, basic borders, and a small amount of text. Your focus should be on how the elements are arranged rather than on creating a finished brand identity.</p>
<h3>Starter HTML</h3>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Build your studio page</span>
<pre><span class="ag-tag">&lt;header</span> <span class="ag-attr">class=</span><span class="ag-value">"site-header"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">class=</span><span class="ag-value">"site-name"</span> <span class="ag-attr">href=</span><span class="ag-value">"#home"</span><span class="ag-tag">&gt;</span><span class="ag-text">Studio North</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;nav&gt;</span>
    <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#work"</span><span class="ag-tag">&gt;</span><span class="ag-text">Work</span><span class="ag-tag">&lt;/a&gt;</span>
    <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#about"</span><span class="ag-tag">&gt;</span><span class="ag-text">About</span><span class="ag-tag">&lt;/a&gt;</span>
    <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#contact"</span><span class="ag-tag">&gt;</span><span class="ag-text">Contact</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;/nav&gt;</span>
<span class="ag-tag">&lt;/header&gt;</span>

<span class="ag-tag">&lt;main</span> <span class="ag-attr">id=</span><span class="ag-value">"home"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;section</span> <span class="ag-attr">class=</span><span class="ag-value">"feature"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;img</span> <span class="ag-attr">src=</span><span class="ag-value">"https://placehold.co/600x400"</span>
         <span class="ag-attr">alt=</span><span class="ag-value">"Placeholder image for the featured studio project"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;div&gt;</span>
      <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">Ideas into Images</span><span class="ag-tag">&lt;/h1&gt;</span>
      <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A short introduction to your studio.</span><span class="ag-tag">&lt;/p&gt;</span>
    <span class="ag-tag">&lt;/div&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>

  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id=</span><span class="ag-value">"work"</span> <span class="ag-attr">class=</span><span class="ag-value">"project-list"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;article</span> <span class="ag-attr">class=</span><span class="ag-value">"project-card"</span><span class="ag-tag">&gt;</span>
      <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Project One</span><span class="ag-tag">&lt;/h2&gt;</span>
      <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Describe the project.</span><span class="ag-tag">&lt;/p&gt;</span>
    <span class="ag-tag">&lt;/article&gt;</span>
    <span class="ag-tag">&lt;article</span> <span class="ag-attr">class=</span><span class="ag-value">"project-card"</span><span class="ag-tag">&gt;</span>
      <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Project Two</span><span class="ag-tag">&lt;/h2&gt;</span>
      <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Describe the project.</span><span class="ag-tag">&lt;/p&gt;</span>
    <span class="ag-tag">&lt;/article&gt;</span>
    <span class="ag-tag">&lt;article</span> <span class="ag-attr">class=</span><span class="ag-value">"project-card"</span><span class="ag-tag">&gt;</span>
      <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Project Three</span><span class="ag-tag">&lt;/h2&gt;</span>
      <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Describe the project.</span><span class="ag-tag">&lt;/p&gt;</span>
    <span class="ag-tag">&lt;/article&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>

  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id=</span><span class="ag-value">"about"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About the Studio</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Add a short studio description.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>

  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id=</span><span class="ag-value">"contact"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Contact</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Add contact information.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>
<span class="ag-tag">&lt;/main&gt;</span>

<span class="ag-tag">&lt;footer&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">© 2026 Studio North</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/footer&gt;</span></pre>
</div>
<h3>Starter CSS</h3>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Create the layout</span>
<pre><span class="ag-css-prop">* </span>{
  <span class="ag-css-prop">box-sizing</span>: <span class="ag-css-value">border-box</span>;
}

<span class="ag-css-prop">body </span>{
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0</span>;
  <span class="ag-css-prop">font-family</span>: <span class="ag-css-value">Arial, sans-serif</span>;
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.6</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#202638</span>;
}

<span class="ag-css-prop">.site-header </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">justify-content</span>: <span class="ag-css-value">space-between</span>;
  <span class="ag-css-prop">align-items</span>: <span class="ag-css-value">center</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">20px</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#111b35</span>;
}

<span class="ag-css-prop">.site-name </span>{
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#d7ff64</span>;
  <span class="ag-css-prop">font-weight</span>: <span class="ag-css-value">bold</span>;
  <span class="ag-css-prop">text-decoration</span>: <span class="ag-css-value">none</span>;
}

<span class="ag-css-prop">.site-header nav </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">16px</span>;
}

<span class="ag-css-prop">.site-header nav a </span>{
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">white</span>;
  <span class="ag-css-prop">text-decoration</span>: <span class="ag-css-value">none</span>;
}

<span class="ag-css-prop">main </span>{
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">1000px</span>;
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0 auto</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
}

<span class="ag-css-prop">.feature </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">align-items</span>: <span class="ag-css-value">center</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">margin-bottom</span>: <span class="ag-css-value">36px</span>;
}

<span class="ag-css-prop">.feature img </span>{
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">45%</span>;
  <span class="ag-css-prop">height</span>: <span class="ag-css-value">auto</span>;
}

<span class="ag-css-prop">.project-list </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">flex-wrap</span>: <span class="ag-css-value">wrap</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">20px</span>;
}

<span class="ag-css-prop">.project-card </span>{
  <span class="ag-css-prop">flex</span>: <span class="ag-css-value">1 1 220px</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">20px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#f3f5fa</span>;
  <span class="ag-css-prop">border</span>: <span class="ag-css-value">1px solid #dfe4ee</span>;
}

<span class="ag-css-prop">main section </span>{
  <span class="ag-css-prop">margin-bottom</span>: <span class="ag-css-value">32px</span>;
}

<span class="ag-css-prop">footer </span>{
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#f3f5fa</span>;
}

<span class="ag-css-prop">@media (max-width: 600px) </span>{
  <span class="ag-css-prop">.site-header </span>{
    <span class="ag-css-prop">flex-direction</span>: <span class="ag-css-value">column</span>;
    <span class="ag-css-prop">align-items</span>: <span class="ag-css-value">flex-start</span>;
  }

  <span class="ag-css-prop">.site-header nav </span>{
    <span class="ag-css-prop">flex-wrap</span>: <span class="ag-css-value">wrap</span>;
  }

  <span class="ag-css-prop">.feature </span>{
    <span class="ag-css-prop">flex-direction</span>: <span class="ag-css-value">column</span>;
    <span class="ag-css-prop">align-items</span>: <span class="ag-css-value">stretch</span>;
  }

  <span class="ag-css-prop">.feature img </span>{
    <span class="ag-css-prop">width</span>: <span class="ag-css-value">100%</span>;
  }
}</pre>
</div>
</section>
<section class="ag-section">
<h2>10 / Independent Practice</h2>
<p>After completing the in-class studio layout, create a second Flexbox layout based on a subject that interests you. This could be a music page, a photography portfolio, a collection of illustrations, a fashion page, or a small creative brand.</p>
<ol class="ag-steps">
<li><strong>Choose your content.</strong><br/>Decide what the page will communicate and identify three or four items that could be displayed together.</li>
<li><strong>Build your HTML.</strong><br/>Use semantic elements to organize the content before you begin styling the layout.</li>
<li><strong>Activate Flexbox.</strong><br/>Apply <span class="ag-inline">display: flex;</span> to a parent container and observe how its direct children are arranged.</li>
<li><strong>Experiment with alignment.</strong><br/>Try different values for <span class="ag-inline">justify-content</span>, <span class="ag-inline">align-items</span>, and <span class="ag-inline">gap</span>.</li>
<li><strong>Test the layout.</strong><br/>Resize the browser and decide whether the items should wrap, change direction, or adjust their widths.</li>
</ol>
</section>
<section class="ag-section">
<h2>11 / What to Submit</h2>
<p>Submit the following through the designated D2L assignment area:</p>
<ul class="ag-checklist">
<li>A link to your completed CodePen project.</li>
<li>A screenshot of your creative studio layout.</li>
<li>A short reflection of approximately 100–150 words.</li>
</ul>
<h3>Reflection questions</h3>
<ul>
<li>Which elements did you place inside a flex container?</li>
<li>How did you use <span class="ag-inline">justify-content</span> and <span class="ag-inline">align-items</span>?</li>
<li>What changed when you added <span class="ag-inline">flex-wrap</span>?</li>
<li>What did you change to make your layout work on a narrow screen?</li>
</ul>
</section>
<section class="ag-section">
<h2>12 / Final Checklist</h2>
<ul class="ag-checklist">
<li>I understand the difference between a flex container and flex items.</li>
<li>I used <span class="ag-inline">display: flex;</span> on the correct parent elements.</li>
<li>I experimented with <span class="ag-inline">flex-direction</span>.</li>
<li>I used <span class="ag-inline">justify-content</span> and/or <span class="ag-inline">align-items</span>.</li>
<li>I used <span class="ag-inline">gap</span> to control spacing.</li>
<li>I tried <span class="ag-inline">flex-wrap</span> or a flexible item basis.</li>
<li>I tested the layout at a narrower browser width.</li>
<li>I submitted the project link, screenshot, and reflection.</li>
</ul>
</section>
<!-- INSTRUCTOR ONLY: REMOVE THIS SECTION BEFORE PUBLISHING -->
<section class="ag-section ag-instructor-only" style="border: 2px dashed #2457d6; border-radius: 14px; padding: 24px; background: #f8faff;">
<div class="ag-eyebrow" style="color:#2457d6;">Instructor-only teaching notes · Remove before publishing</div>
<h2>Instructor Walkthrough: Flexbox in Action</h2>
<p><strong>Purpose:</strong> Demonstrate how Flexbox changes the relationship between a parent container and its direct children. Keep the first example small, then connect each property to the creative studio layout students will build.</p>
<ol class="ag-steps">
<li>
<strong>Start with the container.</strong>
        Show the three-box HTML example in Section 03. Ask: “Which element contains all three boxes?” Point out that <code>display: flex;</code> belongs on the parent, <code>.flex-container</code>, not on each child box.
      </li>
<li>
<strong>Toggle Flexbox on and off.</strong>
        Temporarily remove <code>display: flex;</code> from <code>.flex-container</code>. Ask students to describe what changed. Restore it and identify the boxes as flex items.
      </li>
<li>
<strong>Change the direction.</strong>
        Replace <code>flex-direction: row;</code> with <code>flex-direction: column;</code>. Ask: “What happened to the main axis? What happened to the cross axis?” Reinforce that the axes change when the direction changes.
      </li>
<li>
<strong>Compare alignment properties.</strong>
        Demonstrate <code>justify-content: space-between;</code>, then <code>justify-content: center;</code>. Next, change <code>align-items</code>. Have students predict each result before you refresh or preview.
      </li>
<li>
<strong>Introduce wrapping and gap.</strong>
        Reduce the preview width and toggle <code>flex-wrap: wrap;</code>. Change <code>gap: 20px;</code> to a smaller and larger value. Ask which change affects spacing and which allows items to move onto another line.
      </li>
<li>
<strong>Trace the navigation layout.</strong>
        In Section 06, point out that <code>.site-header</code> is one flex container and <code>.site-nav</code> is another. Ask: “Why does the navigation need its own <code>display: flex;</code>?” Explain that each declaration controls the direct children of its own container.
      </li>
<li>
<strong>Walk through responsive behavior.</strong>
        In Section 08 or the starter CSS, preview the page at a wide width, then narrow the browser below 600px. Identify the media query and show how <code>flex-direction: column;</code> stacks the feature content and allows the image to fill the available width.
      </li>
</ol>
<div class="ag-callout">
<strong>Deliberate error to demonstrate:</strong> In the starter CSS, change <code>display: flex;</code> to <code>display: flexbox;</code> on <code>.project-list</code>. Ask students to diagnose why the cards no longer arrange as intended. Explain that <code>flexbox</code> is the name of the layout model, but the valid CSS value is <code>flex</code>. Correct it and preview again.
    </div>
<h3>Quick questions to check understanding</h3>
<ul>
<li>Which element receives <code>display: flex;</code>?</li>
<li>When <code>flex-direction</code> is <code>row</code>, which direction is the main axis?</li>
<li>What is the difference between <code>justify-content</code> and <code>align-items</code>?</li>
<li>What does <code>flex-wrap: wrap;</code> allow the browser to do?</li>
<li>Why should we preview the layout at a narrow screen width?</li>
</ul>
<p><strong>Teaching reminder:</strong> Keep the focus on cause and effect. Ask students to predict what a single CSS change will do before changing it, then have them explain the result in their own words.</p>
</section>
<!-- END INSTRUCTOR ONLY -->
<footer class="ag-footer">
<h2>Arrange with Intention.</h2>
<p>Flexbox gives you a practical way to control how content fits together. Start with a clear structure, experiment with the layout properties, and test your design at different widths. You do not need complicated code to create a thoughtful, effective layout.</p>
<p><strong>Next week:</strong> CSS Grid — creating layouts with rows and columns for more complex page structures.</p>
</footer>
</div>
