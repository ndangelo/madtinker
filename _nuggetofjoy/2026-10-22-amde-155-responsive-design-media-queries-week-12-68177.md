---
layout: teaching-post
title: AMDE 155 - Responsive Design &amp; Media Queries (Week 12)
slug: amde-155-responsive-design-media-queries-week-12
date: '2026-10-22'
modified: '2026-10-23'
status: published
wordpress_id: 68177
source_url: https://nuggetofjoy.com/amde-155-responsive-design-media-queries-week-12/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
tags: []
---

{::nomarkdown}
<div class="amde-grid-lesson">
<header class="ag-hero">
<div class="ag-eyebrow">AMDE 155 · Introduction to Web Design · Week 12</div>
<h1>Responsive Design &amp; Media Queries</h1>
<p>A website should work whether someone is viewing it on a large desktop monitor, a tablet, or a phone. This week, you will learn how to adapt a layout to different screen sizes using CSS media queries and flexible design techniques.</p>
<div class="ag-chips">
<span class="ag-chip">HTML + CSS</span>
<span class="ag-chip">Mobile-first design</span>
<span class="ag-chip">Media queries</span>
<span class="ag-chip">Desktop / Tablet / Mobile</span>
</div>
</header>
<section class="ag-section">
<h2>01 / What You Will Learn</h2>
<p>Last week, you used CSS Grid to organize content into rows and columns. Now you will make that layout respond to the space available on the screen.</p>
<div class="ag-grid">
<div class="ag-card">
<div class="ag-number">01</div>
<h3>Understand responsive design</h3>
<p>Learn why a layout that looks good on a desktop may not work well on a phone.</p>
</div>
<div class="ag-card">
<div class="ag-number">02</div>
<h3>Write media queries</h3>
<p>Use CSS rules that apply only when the screen meets a specified condition.</p>
</div>
<div class="ag-card">
<div class="ag-number">03</div>
<h3>Use flexible sizing</h3>
<p>Make images, text, spacing, and page sections adapt to available space.</p>
</div>
<div class="ag-card">
<div class="ag-number">04</div>
<h3>Test different screens</h3>
<p>Preview and improve your design at desktop, tablet, and mobile widths.</p>
</div>
</div>
<div class="ag-callout">
<strong>The big idea:</strong> Responsive design is not about making three separate websites. It is about building one website that adapts to different screen sizes.
    </div>
</section>
<section class="ag-section">
<h2>02 / What Is Responsive Design?</h2>
<p>Imagine designing an online portfolio with three columns of artwork. On a desktop, the images may have plenty of room. On a phone, those same three columns could become so narrow that the images and captions are difficult to see.</p>
<p>Responsive design lets you change the layout when the available space changes.</p>
<div class="ag-grid">
<div class="ag-card">
<h3>Desktop</h3>
<p>More room for multiple columns, larger images, and side-by-side content.</p>
</div>
<div class="ag-card">
<h3>Tablet</h3>
<p>Fewer columns, adjusted spacing, and layouts that use the available width efficiently.</p>
</div>
<div class="ag-card">
<h3>Mobile</h3>
<p>Usually a single column, readable text, comfortable spacing, and easy-to-use links.</p>
</div>
</div>
<div class="ag-callout">
<strong>Important:</strong> These are common patterns, not strict rules. Choose layout changes based on your content. A design should change when it needs to, not simply because a device has a particular name.
    </div>
</section>
<section class="ag-section">
<h2>03 / Start with Mobile-First Design</h2>
<p>Mobile-first design means writing your basic CSS for a narrow screen first. You then add styles for larger screens using media queries.</p>
<p>This approach encourages you to prioritize the content, keep layouts simple, and avoid squeezing a complicated desktop design into a phone.</p>
<div class="ag-code-label">Example: basic mobile-first layout</div>
<pre class="ag-code"><code><span class="ag-tag">.portfolio</span> {
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">grid</span>;
  <span class="ag-css-prop">grid-template-columns</span>: <span class="ag-css-value">1fr</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">16px</span>;
}</code></pre>
<p>With this starting point, the portfolio has one column. The value <span class="ag-inline">1fr</span> gives the column a flexible share of the available space.</p>
<p>Next, use a media query to introduce two columns when the screen has more room.</p>
<div class="ag-code-label">Add a tablet-size layout</div>
<pre class="ag-code"><code><span class="ag-tag">@media</span> (min-width: <span class="ag-css-value">600px</span>) {
  <span class="ag-tag">.portfolio</span> {
    <span class="ag-css-prop">grid-template-columns</span>: <span class="ag-css-value">repeat(2, 1fr)</span>;
  }
}</code></pre>
<p>Then introduce three columns on a wider screen.</p>
<div class="ag-code-label">Add a wider-screen layout</div>
<pre class="ag-code"><code><span class="ag-tag">@media</span> (min-width: <span class="ag-css-value">900px</span>) {
  <span class="ag-tag">.portfolio</span> {
    <span class="ag-css-prop">grid-template-columns</span>: <span class="ag-css-value">repeat(3, 1fr)</span>;
  }
}</code></pre>
<div class="ag-callout">
<strong>Notice the pattern:</strong> The default layout is one column. At 600 pixels and wider, it becomes two columns. At 900 pixels and wider, it becomes three columns. The media queries add changes as more space becomes available.
    </div>
</section>
<section class="ag-section">
<h2>04 / Understanding Media Queries</h2>
<p>A media query lets you apply a CSS rule only when a condition is met. In this lesson, the condition will usually be the width of the browser viewport.</p>
<p>The viewport is the area of the browser window where the webpage is displayed.</p>
<div class="ag-code-label">The basic pattern</div>
<pre class="ag-code"><code><span class="ag-tag">@media</span> (max-width: <span class="ag-css-value">600px</span>) {
  <span class="ag-tag">h1</span> {
    <span class="ag-css-prop">font-size</span>: <span class="ag-css-value">28px</span>;
  }
}</code></pre>
<p>Let's break it down:</p>
<ul>
<li><span class="ag-inline">@media</span> starts the media query.</li>
<li><span class="ag-inline">max-width: 600px</span> means the rule applies when the viewport is 600 pixels wide or narrower.</li>
<li><span class="ag-inline">h1</span> selects the main heading.</li>
<li><span class="ag-inline">font-size: 28px</span> changes the heading size within that condition.</li>
<li>The braces group the CSS rules that belong to the media query.</li>
</ul>
<div class="ag-code-label">Max-width versus min-width</div>
<pre class="ag-code"><code><span class="ag-text">/* Applies at 600px wide or narrower */</span>
<span class="ag-tag">@media</span> (max-width: <span class="ag-css-value">600px</span>) {
  <span class="ag-tag">.intro</span> {
    <span class="ag-css-prop">padding</span>: <span class="ag-css-value">16px</span>;
  }
}

<span class="ag-text">/* Applies at 600px wide or wider */</span>
<span class="ag-tag">@media</span> (min-width: <span class="ag-css-value">600px</span>) {
  <span class="ag-tag">.intro</span> {
    <span class="ag-css-prop">padding</span>: <span class="ag-css-value">32px</span>;
  }
}</code></pre>
<p>For this week's project, use the mobile-first pattern with <span class="ag-inline">min-width</span>. Start with the small-screen layout, then add adjustments for wider screens.</p>
</section>
<section class="ag-section">
<h2>05 / Make Images Flexible</h2>
<p>A responsive layout can still break if an image is wider than its container. One of the most useful CSS rules for images is:</p>
<pre class="ag-code"><code><span class="ag-tag">img</span> {
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">100%</span>;
  <span class="ag-css-prop">height</span>: <span class="ag-css-value">auto</span>;
  <span class="ag-tag">display</span>: <span class="ag-css-value">block</span>;
}</code></pre>
<p>This allows an image to shrink to fit its container while maintaining its proportions. It does not force every image to fill the entire screen.</p>
<div class="ag-code-label">Add this to your stylesheet</div>
<pre class="ag-code"><code><span class="ag-tag">img</span> {
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">100%</span>;
  <span class="ag-css-prop">height</span>: <span class="ag-css-value">auto</span>;
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">block</span>;
}

<span class="ag-tag">.artwork img</span> {
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">100%</span>;
  <span class="ag-css-prop">aspect-ratio</span>: <span class="ag-css-value">4 / 3</span>;
  <span class="ag-css-prop">object-fit</span>: <span class="ag-css-value">cover</span>;
}</code></pre>
<p>The second rule gives artwork images a consistent display ratio. <span class="ag-inline">object-fit: cover</span> fills the image area while cropping excess edges if necessary. Use it thoughtfully so important parts of an image are not lost.</p>
</section>
<section class="ag-section">
<h2>06 / Flexible Widths and Spacing</h2>
<p>Responsive design is not only about media queries. Flexible sizing can help your layout work across many screen sizes without adding a separate rule for every device.</p>
<div class="ag-grid">
<div class="ag-card">
<h3>Percentages</h3>
<p>Use a percentage when an element should take up part of its parent container.</p>
<p><span class="ag-inline">width: 100%;</span></p>
</div>
<div class="ag-card">
<h3>Max-width</h3>
<p>Prevent a text area from becoming excessively wide on a large monitor.</p>
<p><span class="ag-inline">max-width: 900px;</span></p>
</div>
<div class="ag-card">
<h3>Flexible units</h3>
<p>Use <span class="ag-inline">fr</span> in CSS Grid to divide available space into flexible portions.</p>
<p><span class="ag-inline">grid-template-columns: 1fr 1fr;</span></p>
</div>
</div>
<div class="ag-code-label">A simple responsive page container</div>
<pre class="ag-code"><code><span class="ag-tag">.page-container</span> {
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">90%</span>;
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">1100px</span>;
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0 auto</span>;
}</code></pre>
<p>This container uses 90% of the available width while leaving a little room at the sides. On large screens, it stops growing at 1100 pixels. The <span class="ag-inline">margin: 0 auto</span> rule centers it horizontally.</p>
</section>
<section class="ag-section">
<h2>07 / Guided Practice: Build a Responsive Portfolio</h2>
<p>Now you will put these ideas together. The example below is intentionally simple. It uses basic HTML, CSS Grid, flexible images, and two media queries.</p>
<p>You can use your own artwork, photography, graphic design, or other creative interests. The sample artwork uses placeholder image links so you can focus on the layout first.</p>
<div class="ag-callout">
<strong>Before you begin:</strong> Open CodePen and create a new Pen. Place the HTML in the HTML panel and the CSS in the CSS panel. You do not need JavaScript for this assignment.
    </div>
<div class="ag-code-label">HTML starter code</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;!DOCTYPE html&gt;</span>
<span class="ag-tag">&lt;html lang="en"&gt;</span>
<span class="ag-tag">&lt;head&gt;</span>
  <span class="ag-tag">&lt;meta charset="UTF-8"&gt;</span>
  <span class="ag-tag">&lt;meta name="viewport"</span>
        <span class="ag-attr">content</span>=<span class="ag-value">"width=device-width, initial-scale=1.0"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;title&gt;</span><span class="ag-text">Responsive Portfolio</span><span class="ag-tag">&lt;/title&gt;</span>
<span class="ag-tag">&lt;/head&gt;</span>
<span class="ag-tag">&lt;body&gt;</span>

  <span class="ag-tag">&lt;header class="site-header"&gt;</span>
    <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My Creative Portfolio</span><span class="ag-tag">&lt;/h1&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A collection of work and ideas.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/header&gt;</span>

  <span class="ag-tag">&lt;main class="page-container"&gt;</span>
    <span class="ag-tag">&lt;section class="portfolio"&gt;</span>

      <span class="ag-tag">&lt;article class="artwork"&gt;</span>
        <span class="ag-tag">&lt;img src="https://placehold.co/600x400"</span>
             <span class="ag-attr">alt</span>=<span class="ag-value">"Placeholder for artwork one"</span><span class="ag-tag">&gt;</span>
        <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Project One</span><span class="ag-tag">&lt;/h2&gt;</span>
        <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A short project description.</span><span class="ag-tag">&lt;/p&gt;</span>
      <span class="ag-tag">&lt;/article&gt;</span>

      <span class="ag-tag">&lt;article class="artwork"&gt;</span>
        <span class="ag-tag">&lt;img src="https://placehold.co/600x400"</span>
             <span class="ag-attr">alt</span>=<span class="ag-value">"Placeholder for artwork two"</span><span class="ag-tag">&gt;</span>
        <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Project Two</span><span class="ag-tag">&lt;/h2&gt;</span>
        <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A short project description.</span><span class="ag-tag">&lt;/p&gt;</span>
      <span class="ag-tag">&lt;/article&gt;</span>

      <span class="ag-tag">&lt;article class="artwork"&gt;</span>
        <span class="ag-tag">&lt;img src="https://placehold.co/600x400"</span>
             <span class="ag-attr">alt</span>=<span class="ag-value">"Placeholder for artwork three"</span><span class="ag-tag">&gt;</span>
        <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Project Three</span><span class="ag-tag">&lt;/h2&gt;</span>
        <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A short project description.</span><span class="ag-tag">&lt;/p&gt;</span>
      <span class="ag-tag">&lt;/article&gt;</span>

    <span class="ag-tag">&lt;/section&gt;</span>
  <span class="ag-tag">&lt;/main&gt;</span>

<span class="ag-tag">&lt;/body&gt;</span>
<span class="ag-tag">&lt;/html&gt;</span></code></pre>
<div class="ag-code-label">CSS starter code</div>
<pre class="ag-code"><code><span class="ag-text">/* 1. Basic page styles */</span>
<span class="ag-tag">* </span>{
  <span class="ag-css-prop">box-sizing</span>: <span class="ag-css-value">border-box</span>;
}

<span class="ag-tag">body</span> {
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0</span>;
  <span class="ag-css-prop">font-family</span>: <span class="ag-css-value">Arial, sans-serif</span>;
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.6</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#222222</span>;
  <span class="ag-css-prop">background</span>: <span class="ag-css-value">#f4f4f4</span>;
}

<span class="ag-tag">.site-header</span> {
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">text-align</span>: <span class="ag-css-value">center</span>;
  <span class="ag-css-prop">background</span>: <span class="ag-css-value">#182849</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">white</span>;
}

<span class="ag-tag">.page-container</span> {
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">90%</span>;
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">1100px</span>;
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0 auto</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px 0</span>;
}

<span class="ag-text">/* 2. Responsive images */</span>
<span class="ag-tag">img</span> {
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">block</span>;
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">100%</span>;
  <span class="ag-css-prop">height</span>: <span class="ag-css-value">auto</span>;
}

<span class="ag-text">/* 3. Mobile-first: one column */</span>
<span class="ag-tag">.portfolio</span> {
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">grid</span>;
  <span class="ag-css-prop">grid-template-columns</span>: <span class="ag-css-value">1fr</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">20px</span>;
}

<span class="ag-tag">.artwork</span> {
  <span class="ag-css-prop">background</span>: <span class="ag-css-value">white</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">14px</span>;
  <span class="ag-css-prop">border-radius</span>: <span class="ag-css-value">8px</span>;
}

<span class="ag-tag">.artwork h2</span> {
  <span class="ag-css-prop">font-size</span>: <span class="ag-css-value">1.2rem</span>;
}

<span class="ag-text">/* 4. Tablet: two columns */</span>
<span class="ag-tag">@media</span> (min-width: <span class="ag-css-value">600px</span>) {
  <span class="ag-tag">.portfolio</span> {
    <span class="ag-css-prop">grid-template-columns</span>: <span class="ag-css-value">repeat(2, 1fr)</span>;
  }

  <span class="ag-tag">.site-header</span> {
    <span class="ag-css-prop">padding</span>: <span class="ag-css-value">36px</span>;
  }
}

<span class="ag-text">/* 5. Desktop: three columns */</span>
<span class="ag-tag">@media</span> (min-width: <span class="ag-css-value">900px</span>) {
  <span class="ag-tag">.portfolio</span> {
    <span class="ag-css-prop">grid-template-columns</span>: <span class="ag-css-value">repeat(3, 1fr)</span>;
  }

  <span class="ag-tag">.page-container</span> {
    <span class="ag-css-prop">padding</span>: <span class="ag-css-value">40px 0</span>;
  }
}</code></pre>
<h3>Follow these steps</h3>
<ol class="ag-steps">
<li><strong>Run the starter code.</strong> Confirm that the page displays a header and three project cards.</li>
<li><strong>Check the mobile layout.</strong> Use the CodePen preview at a narrow width. The cards should appear in one column.</li>
<li><strong>Add the tablet media query.</strong> At 600 pixels and wider, the cards should appear in two columns.</li>
<li><strong>Add the desktop media query.</strong> At 900 pixels and wider, the cards should appear in three columns.</li>
<li><strong>Customize the design.</strong> Change the background, typography, card spacing, and headings to fit your creative identity.</li>
<li><strong>Test and revise.</strong> Resize the preview and look for overflow, awkward spacing, or text that becomes difficult to read.</li>
</ol>
</section>
<section class="ag-section">
<h2>08 / In-Class Assignment: One Portfolio, Three Views</h2>
<p>For this assignment, design a simple, single-page portfolio that adapts to desktop, tablet, and mobile. This is an introductory wireframe-style exercise, so concentrate on the layout and how it changes rather than creating a complicated visual design.</p>
<div class="ag-grid">
<div class="ag-card">
<div class="ag-number">A</div>
<h3>Header</h3>
<p>Include your name or portfolio title and a short introductory sentence.</p>
</div>
<div class="ag-card">
<div class="ag-number">B</div>
<h3>Project gallery</h3>
<p>Include at least six project cards. Each should have an image or placeholder, a title, and a brief description.</p>
</div>
<div class="ag-card">
<div class="ag-number">C</div>
<h3>Responsive layout</h3>
<p>Use media queries to adjust the gallery from one column to two and then three columns.</p>
</div>
</div>
<h3>Required layout behavior</h3>
<div class="ag-checklist">
<ul>
<li>Mobile: one column of project cards.</li>
<li>Tablet: two columns of project cards.</li>
<li>Desktop: three columns of project cards.</li>
<li>Images resize without stretching beyond their containers.</li>
<li>Text remains readable at all three sizes.</li>
<li>The page has no unwanted horizontal scrolling.</li>
<li>Colors, typography, and spacing are consistent.</li>
</ul>
</div>
<h3>Design direction</h3>
<p>Choose a subject that interests you: art, photography, illustration, music, fashion, gaming, film, sports, or another creative field. The content is up to you, but the layout must demonstrate responsive behavior.</p>
<p>Keep the design simple. You are being assessed on how well the layout adapts, not on how many effects you can add.</p>
</section>
<section class="ag-section">
<h2>09 / Independent Practice</h2>
<p>After completing the in-class assignment, create a second responsive layout based on your own interests. You may use a different subject or adapt the portfolio into a gallery, collection, event page, or small project showcase.</p>
<p>Your independent version should include:</p>
<ul>
<li>A clear heading and short introduction.</li>
<li>At least six content items.</li>
<li>A mobile-first CSS Grid layout.</li>
<li>At least two media queries that meaningfully change the layout.</li>
<li>Responsive images and readable text.</li>
<li>Your own choices for color, typography, spacing, and visual hierarchy.</li>
</ul>
<div class="ag-callout">
<strong>Try this:</strong> Once your layout works, experiment with the breakpoints. If the columns become too narrow before the layout changes, adjust the media query. Choose breakpoints that suit your content rather than trying to match a specific device model.
    </div>
</section>
<section class="ag-section">
<h2>10 / Testing Your Design</h2>
<p>Responsive design requires testing. A page that looks correct at one width may still have problems at another.</p>
<ol class="ag-steps">
<li><strong>Test a narrow screen.</strong> Check the preview at approximately 375 pixels wide.</li>
<li><strong>Test a tablet-size screen.</strong> Check around 768 pixels wide.</li>
<li><strong>Test a desktop-size screen.</strong> Check around 1200 pixels wide.</li>
<li><strong>Resize gradually.</strong> Do not check only those three widths. Slowly widen and narrow the preview to find awkward transitions.</li>
<li><strong>Check the details.</strong> Look for text wrapping, images overflowing, uneven card widths, and cramped spacing.</li>
<li><strong>Make improvements.</strong> Adjust your CSS and test again.</li>
</ol>
<p>These widths are testing examples, not universal standards. A responsive website should work across a range of sizes, including widths between your chosen breakpoints.</p>
</section>
<section class="ag-section">
<h2>11 / Common Problems to Avoid</h2>
<div class="ag-grid">
<div class="ag-card">
<h3>Forgetting the viewport meta tag</h3>
<p>Include the viewport tag in the HTML head so mobile browsers use the expected viewport width.</p>
</div>
<div class="ag-card">
<h3>Using fixed widths everywhere</h3>
<p>A large fixed width can cause horizontal scrolling on smaller screens. Use flexible sizing and max-width where appropriate.</p>
</div>
<div class="ag-card">
<h3>Missing closing braces</h3>
<p>Every media query needs its opening and closing braces. Check your CSS if a rule fails to work.</p>
</div>
<div class="ag-card">
<h3>Only testing desktop</h3>
<p>Always preview narrow and wide layouts. Responsive problems can be easy to miss on a large monitor.</p>
</div>
</div>
</section>
<section class="ag-section">
<h2>12 / What to Submit</h2>
<p>Submit your work through the course's designated submission area.</p>
<div class="ag-checklist">
<ul>
<li>Your CodePen URL.</li>
<li>A screenshot of your mobile layout.</li>
<li>A screenshot of your tablet layout.</li>
<li>A screenshot of your desktop layout.</li>
<li>A short reflection of approximately 100–150 words explaining how your design changes across screen sizes, which CSS rules you used, and one challenge you addressed.</li>
</ul>
</div>
<h3>How your work will be evaluated</h3>
<ul>
<li><strong>Responsive behavior:</strong> The layout changes appropriately at different widths.</li>
<li><strong>HTML and CSS:</strong> The structure and styling are organized and functional.</li>
<li><strong>Usability:</strong> Content remains readable, images fit, and the page avoids unwanted horizontal scrolling.</li>
<li><strong>Visual consistency:</strong> Typography, colors, and spacing support the design.</li>
<li><strong>Reflection:</strong> You can explain your decisions and identify an improvement.</li>
</ul>
</section>
<section class="ag-section">
<h2>13 / Key Terms</h2>
<div class="ag-grid">
<div class="ag-card">
<h3>Responsive design</h3>
<p>A design approach that adapts a website to different viewport sizes and viewing conditions.</p>
</div>
<div class="ag-card">
<h3>Viewport</h3>
<p>The visible area in the browser where the webpage is displayed.</p>
</div>
<div class="ag-card">
<h3>Media query</h3>
<p>A CSS condition that applies rules when specified criteria, such as viewport width, are met.</p>
</div>
<div class="ag-card">
<h3>Breakpoint</h3>
<p>A width at which a layout changes to better fit the available space.</p>
</div>
<div class="ag-card">
<h3>Mobile-first</h3>
<p>A workflow that starts with the small-screen layout and adds enhancements for larger screens.</p>
</div>
<div class="ag-card">
<h3>Flexible image</h3>
<p>An image styled to fit its container without exceeding the available width or distorting its proportions.</p>
</div>
</div>
</section>
<!-- INSTRUCTOR ONLY: REMOVE THIS SECTION BEFORE PUBLISHING -->
<section class="ag-section ag-instructor-only">
<div class="ag-instructor-banner">
<span class="ag-instructor-label">INSTRUCTOR ONLY · REMOVE BEFORE PUBLISHING</span>
<h2>Instructor Walkthrough: One Layout, Three Screen Sizes</h2>
<p>Demonstrate responsive design by changing one CSS rule at a time. Ask students to predict the result before refreshing or resizing the preview.</p>
</div>
<ol class="ag-steps">
<li>
<strong>Begin with the mobile layout.</strong>
        In Section 07, run the starter code in CodePen. Point out that <code>.portfolio</code> starts with <code>grid-template-columns: 1fr;</code>, so the cards appear in one column by default. Ask why a simple layout is a useful starting point on a narrow screen.
      </li>
<li>
<strong>Introduce the viewport meta tag.</strong>
        Show the <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> line in the HTML. Explain that it helps mobile browsers use the device's viewport width as expected.
      </li>
<li>
<strong>Add the tablet breakpoint.</strong>
        Find <code>@media (min-width: 600px)</code> and change the grid to <code>repeat(2, 1fr)</code>. Resize the preview to either side of 600 pixels and ask students when the second column appears.
      </li>
<li>
<strong>Add the desktop breakpoint.</strong>
        Demonstrate <code>@media (min-width: 900px)</code> with <code>repeat(3, 1fr)</code>. Emphasize that media queries add rules when the condition is met, while the base CSS continues to apply unless overridden.
      </li>
<li>
<strong>Test flexible images.</strong>
        Temporarily remove <code>max-width: 100%;</code> from the image rule, then preview a narrow layout. Ask students to look for overflow. Restore the rule and explain how <code>height: auto;</code> preserves the image proportions.
      </li>
<li>
<strong>Inspect the transition, not just three devices.</strong>
        Slowly resize the preview between the mobile, tablet, and desktop examples. Ask students to identify the width at which the content begins to feel cramped. Reinforce that breakpoints should respond to the design and content, not just a named device.
      </li>
</ol>
<div class="ag-instructor-error">
<strong>Deliberate error to demonstrate:</strong> Change <code>grid-template-columns: repeat(2, 1fr);</code> in the tablet media query to <code>grid-template-column: repeat(2, 1fr);</code> (remove the final “s” from <code>columns</code>). Ask students why the layout stays in one column at tablet width. Explain that the browser ignores the unrecognized property name. Correct it to <code>grid-template-columns</code> and test again.
    </div>
<h3>Questions to check understanding</h3>
<ul>
<li>What is the viewport?</li>
<li>What does <code>min-width: 600px</code> mean?</li>
<li>Why does the mobile-first example start with one column?</li>
<li>What does <code>max-width: 100%</code> help prevent on images?</li>
<li>Why should a design be tested between breakpoints as well as at example device widths?</li>
</ul>
<p><strong>Teaching reminder:</strong> Keep the exercise focused on cause and effect: predict the layout, change one rule, observe the result, and explain what changed.</p>
</section>
<!-- END INSTRUCTOR ONLY -->
<footer class="ag-footer">
<div class="ag-eyebrow">Week 12 · Wrap-Up</div>
<h2>Design for the screen, not just the desktop.</h2>
<p>Responsive design helps your work reach people wherever they view it. Start with a clear layout, use flexible CSS, introduce media queries when the design needs them, and test your page at multiple widths.</p>
<p><strong>Coming next:</strong> Week 13 — Accessibility, Forms, and Web Best Practices.</p>
</footer>
</div>
{:/nomarkdown}
