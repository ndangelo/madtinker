---
layout: teaching-post
title: 'AMDE 155 CSS Grid: Designing with Rows and Columns (Week 11)'
slug: amde-155-css-grid-designing-with-rows-and-columns-week-11
date: '2026-10-22'
modified: '2026-10-23'
status: published
wordpress_id: 68175
source_url: https://nuggetofjoy.com/amde-155-css-grid-designing-with-rows-and-columns-week-11/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
tags: []
---

{::nomarkdown}
<div class="amde-grid-lesson">
<header class="ag-hero">
<div class="ag-eyebrow">AMDE 155 · Introduction to Web Design · Week 11</div>
<h1>CSS Grid:<br/>Designing with Rows and Columns</h1>
<p>Learn how to create structured page layouts using CSS Grid. You will organize content into rows and columns, control the size of layout areas, and build flexible galleries and editorial designs that adapt to different screen sizes.</p>
<div class="ag-chips">
<span class="ag-chip">CSS Grid</span>
<span class="ag-chip">Rows and Columns</span>
<span class="ag-chip">Portfolio Layouts</span>
<span class="ag-chip">Responsive Design</span>
</div>
</header>
<section class="ag-section">
<h2>01 / What Is CSS Grid?</h2>
<p>Last week, you learned how Flexbox arranges elements along a row or column. CSS Grid builds on those ideas by allowing you to organize a layout across both rows and columns at the same time.</p>
<p>Think about a photography portfolio, an online magazine, or a gallery of student projects. These designs often use carefully arranged rows and columns to organize many different pieces of content.</p>
<div class="ag-callout">
<strong>The big idea:</strong> Flexbox is especially useful for arranging items along one main direction. Grid is especially useful when you want to control a layout in two dimensions: rows and columns. They work well together.
    </div>
</section>
<section class="ag-section">
<h2>02 / Grid Container and Grid Items</h2>
<p>Like Flexbox, Grid starts with a parent element. You turn that parent into a grid container, and its direct children become grid items.</p>
<div class="ag-grid">
<div class="ag-card">
<div class="ag-number">01</div>
<h3>Grid Container</h3>
<p>The parent element receives <span class="ag-inline">display: grid;</span>. You then define the columns, rows, and gaps.</p>
<div class="ag-code">
<pre><span class="ag-css-prop">.grid-container </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">grid</span>;
  <span class="ag-css-prop">grid-template-columns</span>:
    <span class="ag-css-value">1fr 1fr 1fr</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">16px</span>;
}</pre>
</div>
</div>
<div class="ag-card">
<div class="ag-number">02</div>
<h3>Grid Items</h3>
<p>The direct children are placed into the grid. You can let the browser place them automatically or position selected items across particular rows and columns.</p>
<div class="ag-code">
<pre><span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"grid-container"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;div&gt;</span><span class="ag-text">One</span><span class="ag-tag">&lt;/div&gt;</span>
  <span class="ag-tag">&lt;div&gt;</span><span class="ag-text">Two</span><span class="ag-tag">&lt;/div&gt;</span>
  <span class="ag-tag">&lt;div&gt;</span><span class="ag-text">Three</span><span class="ag-tag">&lt;/div&gt;</span>
<span class="ag-tag">&lt;/div&gt;</span></pre>
</div>
</div>
</div>
</section>
<section class="ag-section">
<h2>03 / Create Your First Grid</h2>
<p>Let's start with a simple three-column layout. The <span class="ag-inline">grid-template-columns</span> property tells the browser how many columns to create and how much space each column should receive.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Three grid items</span>
<pre><span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"gallery"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"tile"</span><span class="ag-tag">&gt;</span><span class="ag-text">Project One</span><span class="ag-tag">&lt;/div&gt;</span>
  <span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"tile"</span><span class="ag-tag">&gt;</span><span class="ag-text">Project Two</span><span class="ag-tag">&lt;/div&gt;</span>
  <span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"tile"</span><span class="ag-tag">&gt;</span><span class="ag-text">Project Three</span><span class="ag-tag">&lt;/div&gt;</span>
  <span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"tile"</span><span class="ag-tag">&gt;</span><span class="ag-text">Project Four</span><span class="ag-tag">&lt;/div&gt;</span>
  <span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"tile"</span><span class="ag-tag">&gt;</span><span class="ag-text">Project Five</span><span class="ag-tag">&lt;/div&gt;</span>
  <span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"tile"</span><span class="ag-tag">&gt;</span><span class="ag-text">Project Six</span><span class="ag-tag">&lt;/div&gt;</span>
<span class="ag-tag">&lt;/div&gt;</span></pre>
</div>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Create three equal columns</span>
<pre><span class="ag-css-prop">.gallery </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">grid</span>;
  <span class="ag-css-prop">grid-template-columns</span>:
    <span class="ag-css-value">1fr 1fr 1fr</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">16px</span>;
}

<span class="ag-css-prop">.tile </span>{
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">30px 15px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#edf2ff</span>;
  <span class="ag-css-prop">text-align</span>: <span class="ag-css-value">center</span>;
  <span class="ag-css-prop">border</span>: <span class="ag-css-value">1px solid #dfe4ee</span>;
}</pre>
</div>
<p>The result is a grid with three equal columns. Since there are six items, the browser places three in the first row and three in the second row.</p>
</section>
<section class="ag-section">
<h2>04 / Understanding the fr Unit</h2>
<p>You will often see <span class="ag-inline">fr</span> used in CSS Grid. It stands for a fraction of the available space in the grid container, after fixed sizes and gaps are accounted for.</p>
<div class="ag-card">
<h3>Three equal columns</h3>
<div class="ag-code">
<pre><span class="ag-css-prop">grid-template-columns</span>:
  <span class="ag-css-value">1fr 1fr 1fr</span>;</pre>
</div>
<p>Each column receives an equal share of the available space.</p>
</div>
<div class="ag-card">
<h3>A wider main column</h3>
<div class="ag-code">
<pre><span class="ag-css-prop">grid-template-columns</span>:
  <span class="ag-css-value">2fr 1fr</span>;</pre>
</div>
<p>The first column receives twice the fractional share of the second column. This is useful for a main content area with a narrower sidebar.</p>
</div>
<div class="ag-card">
<h3>A sidebar with a fixed width</h3>
<div class="ag-code">
<pre><span class="ag-css-prop">grid-template-columns</span>:
  <span class="ag-css-value">1fr 260px</span>;</pre>
</div>
<p>The first column uses the remaining available space, while the second is set to 260 pixels, subject to the available room in the container.</p>
</div>
<div class="ag-callout">
<strong>Design tip:</strong> Think of <span class="ag-inline">fr</span> as a way to share available space proportionally. It is especially useful when you want a layout to adapt without calculating every column's width yourself.
    </div>
</section>
<section class="ag-section">
<h2>05 / Control Spacing with gap</h2>
<p>Grid uses the <span class="ag-inline">gap</span> property to control the space between columns and rows. This is often cleaner than adding margins to each individual item.</p>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Equal row and column gaps</span>
<pre><span class="ag-css-prop">.gallery </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">grid</span>;
  <span class="ag-css-prop">grid-template-columns</span>:
    <span class="ag-css-value">repeat(3, 1fr)</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">24px</span>;
}</pre>
</div>
<p>The <span class="ag-inline">repeat(3, 1fr)</span> expression is a shortcut for creating three equal columns. It does the same job as <span class="ag-inline">1fr 1fr 1fr</span>.</p>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Different row and column gaps</span>
<pre><span class="ag-css-prop">.gallery </span>{
  <span class="ag-css-prop">row-gap</span>: <span class="ag-css-value">32px</span>;
  <span class="ag-css-prop">column-gap</span>: <span class="ag-css-value">16px</span>;
}</pre>
</div>
<p>Use a larger row gap when you want more separation between rows than between columns.</p>
</section>
<section class="ag-section">
<h2>06 / Create a Responsive Grid</h2>
<p>A fixed three-column grid may become cramped on a phone. One way to improve it is to use a media query to reduce the number of columns at narrower widths.</p>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Change the number of columns</span>
<pre><span class="ag-css-prop">.gallery </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">grid</span>;
  <span class="ag-css-prop">grid-template-columns</span>:
    <span class="ag-css-value">repeat(3, 1fr)</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">20px</span>;
}

<span class="ag-css-prop">@media (max-width: 700px) </span>{
  <span class="ag-css-prop">.gallery </span>{
    <span class="ag-css-prop">grid-template-columns</span>:
      <span class="ag-css-value">repeat(2, 1fr)</span>;
  }
}

<span class="ag-css-prop">@media (max-width: 450px) </span>{
  <span class="ag-css-prop">.gallery </span>{
    <span class="ag-css-prop">grid-template-columns</span>:
      <span class="ag-css-value">1fr</span>;
  }
}</pre>
</div>
<p>This layout starts with three columns, changes to two columns below 700 pixels, and becomes one column below 450 pixels.</p>
<div class="ag-callout">
<strong>Remember:</strong> Media queries let you change layout rules at specific viewport widths. Test the design at several sizes rather than assuming that a single breakpoint will work perfectly for every kind of content.
    </div>
</section>
<section class="ag-section">
<h2>07 / A More Flexible Grid with minmax()</h2>
<p>CSS Grid can also create flexible columns without requiring you to specify every breakpoint. The combination of <span class="ag-inline">repeat()</span>, <span class="ag-inline">auto-fit</span>, and <span class="ag-inline">minmax()</span> is especially useful for image galleries and project cards.</p>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · An adaptable card grid</span>
<pre><span class="ag-css-prop">.project-grid </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">grid</span>;
  <span class="ag-css-prop">grid-template-columns</span>:
    <span class="ag-css-value">repeat(auto-fit, minmax(220px, 1fr))</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">20px</span>;
}</pre>
</div>
<p>Here is what each part means:</p>
<ul>
<li><span class="ag-inline">repeat()</span> repeats a column pattern.</li>
<li><span class="ag-inline">auto-fit</span> fits as many columns as the available space allows.</li>
<li><span class="ag-inline">minmax(220px, 1fr)</span> gives each column a preferred minimum of 220 pixels and allows it to grow into available space.</li>
</ul>
<p>This is a useful technique for galleries because the browser can change the number of columns as the container gets wider or narrower. The actual number of columns depends on the available width and the gap.</p>
</section>
<section class="ag-section">
<h2>08 / Grid Can Control the Whole Page</h2>
<p>Grid is not limited to galleries. It can also organize larger page areas, such as a main content column beside a sidebar.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Page with a main area and sidebar</span>
<pre><span class="ag-tag">&lt;div</span> <span class="ag-attr">class=</span><span class="ag-value">"page-layout"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;main</span> <span class="ag-attr">class=</span><span class="ag-value">"main-content"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">Creative Journal</span><span class="ag-tag">&lt;/h1&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">The main story or article goes here.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/main&gt;</span>

  <span class="ag-tag">&lt;aside</span> <span class="ag-attr">class=</span><span class="ag-value">"sidebar"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Related Links</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Supporting information goes here.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/aside&gt;</span>
<span class="ag-tag">&lt;/div&gt;</span></pre>
</div>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Two-column page layout</span>
<pre><span class="ag-css-prop">.page-layout </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">grid</span>;
  <span class="ag-css-prop">grid-template-columns</span>:
    <span class="ag-css-value">2fr 1fr</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">1000px</span>;
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0 auto</span>;
}

<span class="ag-css-prop">.main-content, .sidebar </span>{
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#f3f5fa</span>;
}

<span class="ag-css-prop">@media (max-width: 650px) </span>{
  <span class="ag-css-prop">.page-layout </span>{
    <span class="ag-css-prop">grid-template-columns</span>:
      <span class="ag-css-value">1fr</span>;
  }
}</pre>
</div>
<p>The main content gets a larger share of the space, while the sidebar gets a smaller share. On a narrow screen, the media query stacks the two areas into one column.</p>
</section>
<section class="ag-section">
<h2>09 / Grid or Flexbox?</h2>
<p>Both tools are useful. You do not need to choose one for your entire website. You can use Grid for the overall content layout and Flexbox for navigation or for aligning items inside individual components.</p>
<div class="ag-grid">
<div class="ag-card">
<div class="ag-number">G</div>
<h3>Choose Grid when…</h3>
<ul>
<li>You need rows and columns.</li>
<li>You are building a portfolio gallery.</li>
<li>You want a main content area and sidebar.</li>
<li>You need control over the overall page structure.</li>
</ul>
</div>
<div class="ag-card">
<div class="ag-number">F</div>
<h3>Choose Flexbox when…</h3>
<ul>
<li>You are arranging items in one main direction.</li>
<li>You are building a navigation bar.</li>
<li>You want to align a button or a group of links.</li>
<li>You need flexible spacing between items in a row or column.</li>
</ul>
</div>
</div>
<div class="ag-callout">
<strong>Design principle:</strong> Choose the layout tool that makes the structure easiest to understand and maintain. Grid and Flexbox are complementary tools, not competing methods.
    </div>
</section>
<section class="ag-section">
<h2>10 / In-Class Assignment: Design a Portfolio Grid</h2>
<p>Create a simple portfolio page for an artist, photographer, illustrator, designer, or fictional creative studio. Your page should display a collection of projects in a clean grid.</p>
<h3>Your page must include:</h3>
<ul class="ag-checklist">
<li>A page title and short introduction.</li>
<li>A semantic main content area.</li>
<li>A gallery containing at least six project items.</li>
<li>A CSS Grid layout with at least three columns on a wide screen.</li>
<li>Consistent gaps between cards.</li>
<li>A heading or caption for each project.</li>
<li>A responsive layout that adjusts to narrower screens.</li>
<li>A footer with a credit or contact link.</li>
</ul>
<p>You may use placeholder images while testing your layout. If you use real images, make sure they are appropriate to use and include descriptive alt text.</p>
<h3>Starter HTML</h3>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Portfolio gallery</span>
<pre><span class="ag-tag">&lt;header&gt;</span>
  <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">Selected Work</span><span class="ag-tag">&lt;/h1&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A collection of creative projects.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/header&gt;</span>

<span class="ag-tag">&lt;main&gt;</span>
  <span class="ag-tag">&lt;section</span> <span class="ag-attr">class=</span><span class="ag-value">"project-grid"</span><span class="ag-tag">&gt;</span>

    <span class="ag-tag">&lt;article</span> <span class="ag-attr">class=</span><span class="ag-value">"project-card"</span><span class="ag-tag">&gt;</span>
      <span class="ag-tag">&lt;img</span>
        <span class="ag-attr">src=</span><span class="ag-value">"https://placehold.co/600x400"</span>
        <span class="ag-attr">alt=</span><span class="ag-value">"Placeholder for project one"</span><span class="ag-tag">&gt;</span>
      <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Project One</span><span class="ag-tag">&lt;/h2&gt;</span>
      <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A short project description.</span><span class="ag-tag">&lt;/p&gt;</span>
    <span class="ag-tag">&lt;/article&gt;</span>

    <span class="ag-tag">&lt;article</span> <span class="ag-attr">class=</span><span class="ag-value">"project-card"</span><span class="ag-tag">&gt;</span>
      <span class="ag-tag">&lt;img</span>
        <span class="ag-attr">src=</span><span class="ag-value">"https://placehold.co/600x400"</span>
        <span class="ag-attr">alt=</span><span class="ag-value">"Placeholder for project two"</span><span class="ag-tag">&gt;</span>
      <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Project Two</span><span class="ag-tag">&lt;/h2&gt;</span>
      <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A short project description.</span><span class="ag-tag">&lt;/p&gt;</span>
    <span class="ag-tag">&lt;/article&gt;</span>

    <span class="ag-tag">&lt;article</span> <span class="ag-attr">class=</span><span class="ag-value">"project-card"</span><span class="ag-tag">&gt;</span>
      <span class="ag-tag">&lt;img</span>
        <span class="ag-attr">src=</span><span class="ag-value">"https://placehold.co/600x400"</span>
        <span class="ag-attr">alt=</span><span class="ag-value">"Placeholder for project three"</span><span class="ag-tag">&gt;</span>
      <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Project Three</span><span class="ag-tag">&lt;/h2&gt;</span>
      <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A short project description.</span><span class="ag-tag">&lt;/p&gt;</span>
    <span class="ag-tag">&lt;/article&gt;</span>

    <span class="ag-tag">&lt;!-- Add at least three more project cards. --&gt;</span>

  <span class="ag-tag">&lt;/section&gt;</span>
<span class="ag-tag">&lt;/main&gt;</span>

<span class="ag-tag">&lt;footer&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Created by Your Name</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/footer&gt;</span></pre>
</div>
<h3>Starter CSS</h3>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Responsive portfolio grid</span>
<pre><span class="ag-css-prop">* </span>{
  <span class="ag-css-prop">box-sizing</span>: <span class="ag-css-value">border-box</span>;
}

<span class="ag-css-prop">body </span>{
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0</span>;
  <span class="ag-css-prop">font-family</span>: <span class="ag-css-value">Arial, sans-serif</span>;
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.6</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#202638</span>;
}

<span class="ag-css-prop">header, main, footer </span>{
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">1100px</span>;
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0 auto</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
}

<span class="ag-css-prop">.project-grid </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">grid</span>;
  <span class="ag-css-prop">grid-template-columns</span>:
    <span class="ag-css-value">repeat(3, 1fr)</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">20px</span>;
}

<span class="ag-css-prop">.project-card </span>{
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">16px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#f3f5fa</span>;
  <span class="ag-css-prop">border</span>: <span class="ag-css-value">1px solid #dfe4ee</span>;
  <span class="ag-css-prop">border-radius</span>: <span class="ag-css-value">10px</span>;
}

<span class="ag-css-prop">.project-card img </span>{
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">block</span>;
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">100%</span>;
  <span class="ag-css-prop">height</span>: <span class="ag-css-value">auto</span>;
}

<span class="ag-css-prop">@media (max-width: 700px) </span>{
  <span class="ag-css-prop">.project-grid </span>{
    <span class="ag-css-prop">grid-template-columns</span>:
      <span class="ag-css-value">repeat(2, 1fr)</span>;
  }
}

<span class="ag-css-prop">@media (max-width: 450px) </span>{
  <span class="ag-css-prop">.project-grid </span>{
    <span class="ag-css-prop">grid-template-columns</span>:
      <span class="ag-css-value">1fr</span>;
  }
}</pre>
</div>
<p>Complete the HTML by adding at least three more project cards. Then customize the visual design using your own colors, typography, borders, and spacing.</p>
</section>
<section class="ag-section">
<h2>11 / Independent Practice</h2>
<p>After finishing the guided gallery, create a second layout using CSS Grid. Choose a subject that interests you and design a page that benefits from rows and columns.</p>
<ol class="ag-steps">
<li><strong>Choose a concept.</strong><br/>Consider an artist portfolio, music collection, editorial page, image archive, or product gallery.</li>
<li><strong>Sketch your layout.</strong><br/>Decide how many columns you need and which content belongs in each area.</li>
<li><strong>Build your HTML.</strong><br/>Use semantic elements to organize your content into meaningful sections or cards.</li>
<li><strong>Create your grid.</strong><br/>Use <span class="ag-inline">display: grid;</span>, <span class="ag-inline">grid-template-columns</span>, and <span class="ag-inline">gap</span> to build the layout.</li>
<li><strong>Make it responsive.</strong><br/>Use media queries or experiment with <span class="ag-inline">repeat(auto-fit, minmax(...))</span> to adapt the number of columns.</li>
<li><strong>Refine and test.</strong><br/>Check the page at different widths and correct any cramped text, overflowing images, or awkward spacing.</li>
</ol>
</section>
<section class="ag-section">
<h2>12 / What to Submit</h2>
<p>Submit the following through the designated D2L assignment area:</p>
<ul class="ag-checklist">
<li>A link to your completed CodePen project.</li>
<li>A screenshot of your finished grid layout.</li>
<li>A short reflection of approximately 100–150 words.</li>
</ul>
<h3>Reflection questions</h3>
<ul>
<li>How many columns did you create, and why did you choose that layout?</li>
<li>How did you use <span class="ag-inline">fr</span>, <span class="ag-inline">repeat()</span>, or <span class="ag-inline">gap</span>?</li>
<li>What changes did you make for smaller screens?</li>
<li>When might you choose Grid instead of Flexbox for a future project?</li>
</ul>
</section>
<section class="ag-section">
<h2>13 / Final Checklist</h2>
<ul class="ag-checklist">
<li>I understand the difference between a grid container and grid items.</li>
<li>I used <span class="ag-inline">display: grid;</span> on the correct parent element.</li>
<li>I created columns using <span class="ag-inline">grid-template-columns</span>.</li>
<li>I used <span class="ag-inline">fr</span> or <span class="ag-inline">repeat()</span> to define column sizes.</li>
<li>I used <span class="ag-inline">gap</span> to create consistent spacing.</li>
<li>My gallery contains at least six project items.</li>
<li>My images resize within their cards.</li>
<li>My layout adapts to smaller screens.</li>
<li>I tested my page and submitted the project link, screenshot, and reflection.</li>
</ul>
</section>
<!-- INSTRUCTOR ONLY: REMOVE THIS SECTION BEFORE PUBLISHING -->
<section class="ag-section ag-instructor-only">
<div class="ag-instructor-banner">
<span class="ag-instructor-label">INSTRUCTOR ONLY · REMOVE BEFORE PUBLISHING</span>
<h2>Instructor Walkthrough: Building a CSS Grid</h2>
<p>Use this walkthrough to demonstrate how a parent grid controls the rows and columns of its direct children. Keep the examples small and ask students to predict the result before changing each property.</p>
</div>
<ol class="ag-steps">
<li>
<strong>Start with the grid container.</strong>
        Display the HTML in Section 03 and ask students which element contains all six tiles. Add <code>display: grid;</code> to <code>.gallery</code>, then add <code>grid-template-columns: 1fr 1fr 1fr;</code>. Point out that the parent controls the layout of its direct children.
      </li>
<li>
<strong>Change the number of columns.</strong>
        Change the declaration to <code>grid-template-columns: 1fr 1fr;</code>, then try <code>repeat(3, 1fr)</code>. Ask students to explain what changes and what the browser does with the remaining items.
      </li>
<li>
<strong>Demonstrate the fr unit.</strong>
        Use <code>grid-template-columns: 2fr 1fr;</code>. Explain that the columns share available space proportionally; the first gets twice the fractional share of the second, assuming no other sizing constraints interfere.
      </li>
<li>
<strong>Adjust the gap.</strong>
        Change <code>gap: 16px;</code> to <code>gap: 32px;</code>. Ask whether the gap is inside each tile or between the grid items. Then demonstrate separate <code>row-gap</code> and <code>column-gap</code> values.
      </li>
<li>
<strong>Compare Grid and Flexbox.</strong>
        Connect this lesson to Week 10. Ask students when they might use Flexbox for a navigation bar and Grid for a portfolio gallery. Emphasize that the tools can be combined on the same page.
      </li>
<li>
<strong>Test responsive behavior.</strong>
        Preview the gallery at desktop, tablet, and mobile widths. Show how the media queries change three columns to two and then one. If time allows, compare that approach with <code>repeat(auto-fit, minmax(220px, 1fr))</code>.
      </li>
</ol>
<div class="ag-instructor-error">
<strong>Deliberate error to demonstrate:</strong> In the starter CSS, change <code>display: grid;</code> to <code>display: grdi;</code> on <code>.project-grid</code>. Ask students to identify why the cards no longer form a grid. Explain that CSS does not recognize the misspelled value, so the intended grid layout is not activated. Correct it to <code>display: grid;</code> and preview again.
    </div>
<h3>Questions to check understanding</h3>
<ul>
<li>What is the difference between a grid container and a grid item?</li>
<li>What does <code>1fr</code> mean in a column definition?</li>
<li>How does <code>repeat(3, 1fr)</code> compare with <code>1fr 1fr 1fr</code>?</li>
<li>Why might a layout use Grid and Flexbox together?</li>
<li>What should you inspect when a grid becomes cramped on a phone?</li>
</ul>
<p><strong>Teaching reminder:</strong> Ask students to predict the effect of one CSS change, make the change, and describe what happened. This keeps the demonstration focused on understanding layout behavior rather than copying code.</p>
</section>
<!-- END INSTRUCTOR ONLY -->
<footer class="ag-footer">
<h2>Think in Rows and Columns.</h2>
<p>CSS Grid gives you a powerful way to organize visual content. Start with a simple structure, build a clear set of columns, and adjust the layout until it supports your design. As with every tool we have learned, the goal is not to use the most complicated code. The goal is to make thoughtful design decisions.</p>
<p><strong>Next week:</strong> Responsive Design and Media Queries — adapting your website for desktop, tablet, and mobile screens.</p>
</footer>
</div>
{:/nomarkdown}
