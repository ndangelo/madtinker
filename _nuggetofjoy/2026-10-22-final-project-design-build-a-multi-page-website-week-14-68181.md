---
layout: teaching-post
title: 'Final Project: Design &amp; Build a Multi-Page Website (Week 14)'
slug: final-project-design-build-a-multi-page-website-week-14
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68181
source_url: https://nuggetofjoy.com/final-project-design-build-a-multi-page-website-week-14/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
tags: []
---

{::nomarkdown}
<div class="amde-grid-lesson">
<header class="ag-hero">
<div class="ag-eyebrow">AMDE 155 · Introduction to Web Design · Week 14</div>
<h1>Final Project: Design &amp; Build a Multi-Page Website</h1>
<p>It's time to bring your semester's work together. You will plan, design, and build a small website around a subject that interests you. Apply your HTML, CSS, layout, responsive design, and accessibility skills to create a cohesive web experience.</p>
<div class="ag-chips">
<span class="ag-chip">Final project</span>
<span class="ag-chip">Multi-page design</span>
<span class="ag-chip">HTML + CSS</span>
<span class="ag-chip">Responsive layout</span>
</div>
</header>
<section class="ag-section">
<h2>01 / Project Overview</h2>
<p>For your final project, you will create a small multi-page website. Unlike earlier weekly exercises, this project asks you to make more of the design and content decisions independently.</p>
<p>Your website should have a clear purpose, a consistent visual identity, working navigation, and content organized across multiple pages. It should also adapt to different screen sizes and follow basic accessibility and usability practices.</p>
<div class="ag-grid">
<div class="ag-card">
<div class="ag-number">01</div>
<h3>Plan</h3>
<p>Choose a subject, identify your audience, and outline the pages and content your website needs.</p>
</div>
<div class="ag-card">
<div class="ag-number">02</div>
<h3>Design</h3>
<p>Establish a visual identity with typography, colors, spacing, and a consistent layout.</p>
</div>
<div class="ag-card">
<div class="ag-number">03</div>
<h3>Build</h3>
<p>Create connected HTML pages and style them with CSS using the techniques from the semester.</p>
</div>
<div class="ag-card">
<div class="ag-number">04</div>
<h3>Test</h3>
<p>Check links, layout, readability, accessibility, and responsive behavior before submission.</p>
</div>
</div>
<div class="ag-callout">
<strong>Your goal:</strong> Create a small but complete website. A thoughtful, well-organized three-page site is better than a large site with broken links or unfinished content.
    </div>
</section>
<section class="ag-section">
<h2>02 / Choose Your Website Topic</h2>
<p>Choose a subject that genuinely interests you. Your website can be personal, creative, informational, or connected to a hobby. You do not need to create a real business or use a topic related to computer programming.</p>
<div class="ag-grid">
<div class="ag-card">
<h3>Creative portfolio</h3>
<p>Showcase illustration, photography, painting, graphic design, or other creative work.</p>
</div>
<div class="ag-card">
<h3>Music or film</h3>
<p>Introduce a favorite artist, genre, filmmaker, album, or collection of films.</p>
</div>
<div class="ag-card">
<h3>Hobby or interest</h3>
<p>Build a site about gaming, fashion, sports, travel, cooking, or collecting.</p>
</div>
<div class="ag-card">
<h3>Organization or event</h3>
<p>Create a fictional club, student organization, exhibition, festival, or community event.</p>
</div>
</div>
<h3>Before you begin, answer these questions</h3>
<ul>
<li>What is the subject of your website?</li>
<li>Who is the intended audience?</li>
<li>What should visitors learn, see, or do?</li>
<li>What kind of visual style best fits the subject?</li>
</ul>
</section>
<section class="ag-section">
<h2>03 / Required Website Structure</h2>
<p>Your website must contain at least three connected pages. Use the following structure as a starting point, adapting the page names and content to your topic.</p>
<div class="ag-grid">
<div class="ag-card">
<div class="ag-number">01</div>
<h3>Home</h3>
<p>Introduce the topic, establish the visual identity, and give visitors a clear starting point.</p>
<p><strong>Suggested content:</strong> Main heading, introduction, image, and links to other pages.</p>
</div>
<div class="ag-card">
<div class="ag-number">02</div>
<h3>About</h3>
<p>Explain the subject, introduce the creator, or provide background information.</p>
<p><strong>Suggested content:</strong> Headings, paragraphs, supporting images, and descriptive links.</p>
</div>
<div class="ag-card">
<div class="ag-number">03</div>
<h3>Gallery / Projects / Topics</h3>
<p>Present the main content visitors came to explore.</p>
<p><strong>Suggested content:</strong> Images, project cards, descriptions, or organized information.</p>
</div>
</div>
<div class="ag-callout">
<strong>Navigation matters:</strong> Visitors should be able to move between all three pages without getting stuck. Use consistent navigation on each page and provide a clear link back to the home page.
    </div>
</section>
<section class="ag-section">
<h2>04 / Plan Before You Code</h2>
<p>Before opening CodePen, sketch a simple plan for your website. You can use paper, a digital drawing tool, or a basic wireframe. The goal is to make decisions about content and layout before writing code.</p>
<h3>Step 1: Create a simple sitemap</h3>
<pre class="ag-code"><code><span class="ag-text">HOME</span>
  |
  |---- ABOUT
  |
  |---- GALLERY / PROJECTS</code></pre>
<p>A sitemap shows which pages belong to your website and how they relate to one another.</p>
<h3>Step 2: Sketch each page</h3>
<p>Use simple boxes to indicate the header, navigation, main content, images, and footer. You do not need to design every detail yet.</p>
<h3>Step 3: Choose your visual direction</h3>
<ul>
<li>Choose a small, coordinated color palette.</li>
<li>Select readable typefaces and establish heading sizes.</li>
<li>Decide how images will be displayed.</li>
<li>Plan spacing and alignment.</li>
<li>Keep the visual style consistent across all pages.</li>
</ul>
</section>
<section class="ag-section">
<h2>05 / Set Up Your Project Files</h2>
<p>For this project, create a separate HTML file for each page and one shared CSS file. This makes it easier to maintain consistent styling across your site.</p>
<div class="ag-code-label">Suggested file structure</div>
<pre class="ag-code"><code>my-website/
|
|-- index.html
|-- about.html
|-- gallery.html
|
|-- css/
|   |-- style.css
|
|-- images/
    |-- project-one.jpg
    |-- project-two.jpg
    |-- project-three.jpg</code></pre>
<p><span class="ag-inline">index.html</span> is the home page. The other HTML files contain the additional pages, while <span class="ag-inline">style.css</span> contains the shared design rules. The images folder keeps your visual assets organized.</p>
<div class="ag-callout">
<strong>Working in CodePen:</strong> If you use CodePen for your project, you can practice the HTML and CSS there. Because separate HTML pages are part of the final project, make sure your final delivery also demonstrates the connected multi-page structure. If your CodePen setup does not host separate pages as a navigable site, use an appropriate multi-file workflow or submit the individual HTML files together with the CSS file.
    </div>
</section>
<section class="ag-section">
<h2>06 / HTML Starter Template</h2>
<p>Use this basic structure for each page. Change the title, heading, and main content to match the page you are creating.</p>
<div class="ag-code-label">HTML: home page starter</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;!DOCTYPE html&gt;</span>
<span class="ag-tag">&lt;html lang="en"&gt;</span>
<span class="ag-tag">&lt;head&gt;</span>
  <span class="ag-tag">&lt;meta charset="UTF-8"&gt;</span>
  <span class="ag-tag">&lt;meta name="viewport"</span>
        <span class="ag-attr">content</span>=<span class="ag-value">"width=device-width, initial-scale=1.0"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;title&gt;</span><span class="ag-text">My Website | Home</span><span class="ag-tag">&lt;/title&gt;</span>
  <span class="ag-tag">&lt;link rel="stylesheet" href="css/style.css"&gt;</span>
<span class="ag-tag">&lt;/head&gt;</span>

<span class="ag-tag">&lt;body&gt;</span>
  <span class="ag-tag">&lt;header class="site-header"&gt;</span>
    <span class="ag-tag">&lt;p class="site-name"&gt;</span><span class="ag-text">My Website</span><span class="ag-tag">&lt;/p&gt;</span>

    <span class="ag-tag">&lt;nav aria-label="Main navigation"&gt;</span>
      <span class="ag-tag">&lt;a href="index.html"&gt;</span><span class="ag-text">Home</span><span class="ag-tag">&lt;/a&gt;</span>
      <span class="ag-tag">&lt;a href="about.html"&gt;</span><span class="ag-text">About</span><span class="ag-tag">&lt;/a&gt;</span>
      <span class="ag-tag">&lt;a href="gallery.html"&gt;</span><span class="ag-text">Gallery</span><span class="ag-tag">&lt;/a&gt;</span>
    <span class="ag-tag">&lt;/nav&gt;</span>
  <span class="ag-tag">&lt;/header&gt;</span>

  <span class="ag-tag">&lt;main class="page-container"&gt;</span>
    <span class="ag-tag">&lt;section class="intro"&gt;</span>
      <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">Welcome to My Website</span><span class="ag-tag">&lt;/h1&gt;</span>
      <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Introduce your topic in a few sentences.</span><span class="ag-tag">&lt;/p&gt;</span>
    <span class="ag-tag">&lt;/section&gt;</span>

    <span class="ag-tag">&lt;section class="featured"&gt;</span>
      <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Featured Content</span><span class="ag-tag">&lt;/h2&gt;</span>
      <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Add content that helps visitors explore your topic.</span><span class="ag-tag">&lt;/p&gt;</span>
      <span class="ag-tag">&lt;a href="gallery.html"&gt;</span><span class="ag-text">Explore the gallery</span><span class="ag-tag">&lt;/a&gt;</span>
    <span class="ag-tag">&lt;/section&gt;</span>
  <span class="ag-tag">&lt;/main&gt;</span>

  <span class="ag-tag">&lt;footer&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">© 2026 My Website</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/footer&gt;</span>
<span class="ag-tag">&lt;/body&gt;</span>
<span class="ag-tag">&lt;/html&gt;</span></code></pre>
<p>For the About and Gallery pages, reuse the header, navigation, stylesheet link, and footer. Change the page title and main content. Reusing a consistent structure helps the site feel like one connected experience.</p>
</section>
<section class="ag-section">
<h2>07 / Shared CSS Starter</h2>
<p>This starter stylesheet gives you a clean foundation. Customize the colors, type, spacing, and layout to fit your topic. Use the same stylesheet for all three pages.</p>
<div class="ag-code-label">CSS: style.css</div>
<pre class="ag-code"><code><span class="ag-text">/* 1. Base styles */</span>
<span class="ag-tag">*</span> {
  <span class="ag-css-prop">box-sizing</span>: <span class="ag-css-value">border-box</span>;
}

<span class="ag-tag">body</span> {
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0</span>;
  <span class="ag-css-prop">font-family</span>: <span class="ag-css-value">Arial, sans-serif</span>;
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.6</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#172033</span>;
  <span class="ag-css-prop">background</span>: <span class="ag-css-value">#f5f7fb</span>;
}

<span class="ag-tag">img</span> {
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">100%</span>;
  <span class="ag-css-prop">height</span>: <span class="ag-css-value">auto</span>;
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">block</span>;
}

<span class="ag-text">/* 2. Header and navigation */</span>
<span class="ag-tag">.site-header</span> {
  <span class="ag-css-prop">background</span>: <span class="ag-css-value">#101b36</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#ffffff</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">20px 5%</span>;
}

<span class="ag-tag">.site-name</span> {
  <span class="ag-css-prop">font-size</span>: <span class="ag-css-value">1.4rem</span>;
  <span class="ag-css-prop">font-weight</span>: <span class="ag-css-value">700</span>;
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0 0 12px</span>;
}

<span class="ag-tag">nav</span> {
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
  <span class="ag-css-prop">flex-wrap</span>: <span class="ag-css-value">wrap</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">16px</span>;
}

<span class="ag-tag">nav a</span> {
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#ffffff</span>;
  <span class="ag-css-prop">text-decoration</span>: <span class="ag-css-value">none</span>;
  <span class="ag-css-prop">font-weight</span>: <span class="ag-css-value">700</span>;
}

<span class="ag-tag">nav a:hover</span> {
  <span class="ag-css-prop">text-decoration</span>: <span class="ag-css-value">underline</span>;
  <span class="ag-css-prop">text-underline-offset</span>: <span class="ag-css-value">4px</span>;
}

<span class="ag-text">/* 3. Main content */</span>
<span class="ag-tag">.page-container</span> {
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">90%</span>;
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">1100px</span>;
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0 auto</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">32px 0</span>;
}

<span class="ag-tag">.intro</span> {
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">28px</span>;
  <span class="ag-css-prop">background</span>: <span class="ag-css-value">#ffffff</span>;
  <span class="ag-css-prop">border-radius</span>: <span class="ag-css-value">12px</span>;
  <span class="ag-css-prop">margin-bottom</span>: <span class="ag-css-value">24px</span>;
}

<span class="ag-tag">h1, h2</span> {
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.2</span>;
}

<span class="ag-tag">a</span> {
  <span class="ag-css-prop">text-underline-offset</span>: <span class="ag-css-value">3px</span>;
}

<span class="ag-tag">a:focus-visible</span> {
  <span class="ag-css-prop">outline</span>: <span class="ag-css-value">3px solid #2855d9</span>;
  <span class="ag-css-prop">outline-offset</span>: <span class="ag-css-value">3px</span>;
}

<span class="ag-text">/* 4. Responsive layout */</span>
<span class="ag-tag">@media (min-width: 700px)</span> {
  <span class="ag-tag">.site-header</span> {
    <span class="ag-css-prop">display</span>: <span class="ag-css-value">flex</span>;
    <span class="ag-css-prop">justify-content</span>: <span class="ag-css-value">space-between</span>;
    <span class="ag-css-prop">align-items</span>: <span class="ag-css-value">center</span>;
  }

  <span class="ag-tag">.site-name</span> {
    <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0</span>;
  }
}

<span class="ag-text">/* 5. Footer */</span>
<span class="ag-tag">footer</span> {
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px 5%</span>;
  <span class="ag-css-prop">background</span>: <span class="ag-css-value">#e5eaf3</span>;
  <span class="ag-css-prop">text-align</span>: <span class="ag-css-value">center</span>;
}

<span class="ag-tag">@media (max-width: 500px)</span> {
  <span class="ag-tag">.intro</span> {
    <span class="ag-css-prop">padding</span>: <span class="ag-css-value">18px</span>;
  }

  <span class="ag-tag">.page-container</span> {
    <span class="ag-css-prop">padding</span>: <span class="ag-css-value">20px 0</span>;
  }
}</code></pre>
<p>This is a foundation, not a finished design. Add the CSS Grid or Flexbox layouts your content needs, and make sure your chosen colors, typography, and spacing support the subject of your website.</p>
</section>
<section class="ag-section">
<h2>08 / Build a Gallery with CSS Grid</h2>
<p>If your site includes projects, artwork, products, or other collections, CSS Grid can help organize them. Here is a simple example you can adapt for your Gallery page.</p>
<div class="ag-code-label">HTML: gallery content</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;section class="gallery"&gt;</span>
  <span class="ag-tag">&lt;article class="project-card"&gt;</span>
    <span class="ag-tag">&lt;img src="images/project-one.jpg"</span>
         <span class="ag-attr">alt</span>=<span class="ag-value">"Describe your first project"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Project One</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A brief description of the project.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/article&gt;</span>

  <span class="ag-tag">&lt;article class="project-card"&gt;</span>
    <span class="ag-tag">&lt;img src="images/project-two.jpg"</span>
         <span class="ag-attr">alt</span>=<span class="ag-value">"Describe your second project"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Project Two</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A brief description of the project.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/article&gt;</span>

  <span class="ag-tag">&lt;article class="project-card"&gt;</span>
    <span class="ag-tag">&lt;img src="images/project-three.jpg"</span>
         <span class="ag-attr">alt</span>=<span class="ag-value">"Describe your third project"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Project Three</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A brief description of the project.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/article&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></code></pre>
<div class="ag-code-label">CSS: responsive gallery</div>
<pre class="ag-code"><code><span class="ag-tag">.gallery</span> {
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">grid</span>;
  <span class="ag-css-prop">grid-template-columns</span>: <span class="ag-css-value">1fr</span>;
  <span class="ag-css-prop">gap</span>: <span class="ag-css-value">20px</span>;
}

<span class="ag-tag">.project-card</span> {
  <span class="ag-css-prop">background</span>: <span class="ag-css-value">#ffffff</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">16px</span>;
  <span class="ag-css-prop">border-radius</span>: <span class="ag-css-value">10px</span>;
}

<span class="ag-tag">.project-card img</span> {
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">100%</span>;
  <span class="ag-css-prop">aspect-ratio</span>: <span class="ag-css-value">4 / 3</span>;
  <span class="ag-css-prop">object-fit</span>: <span class="ag-css-value">cover</span>;
}

<span class="ag-tag">@media (min-width: 600px)</span> {
  <span class="ag-tag">.gallery</span> {
    <span class="ag-css-prop">grid-template-columns</span>: <span class="ag-css-value">repeat(2, 1fr)</span>;
  }
}

<span class="ag-tag">@media (min-width: 900px)</span> {
  <span class="ag-tag">.gallery</span> {
    <span class="ag-css-prop">grid-template-columns</span>: <span class="ag-css-value">repeat(3, 1fr)</span>;
  }
}</code></pre>
<p>Add enough project cards to make the page feel complete. Keep image proportions and card spacing consistent, and check that the layout adapts to narrow screens.</p>
</section>
<section class="ag-section">
<h2>09 / Navigation and Page Links</h2>
<p>Each page should use the same navigation labels and point to the correct file. If a link works from the home page but fails on another page, check the file path and spelling.</p>
<div class="ag-code-label">Navigation to reuse on all pages</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;nav aria-label="Main navigation"&gt;</span>
  <span class="ag-tag">&lt;a href="index.html"&gt;</span><span class="ag-text">Home</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a href="about.html"&gt;</span><span class="ag-text">About</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a href="gallery.html"&gt;</span><span class="ag-text">Gallery</span><span class="ag-tag">&lt;/a&gt;</span>
<span class="ag-tag">&lt;/nav&gt;</span></code></pre>
<p>These are relative links: they refer to files in the same website. If you put a page inside a folder, you will need to update its path accordingly.</p>
<div class="ag-callout">
<strong>Test every link.</strong> Visit each page and click each navigation item. A link should lead to the intended page, not to a missing file or an unrelated destination.
    </div>
</section>
<section class="ag-section">
<h2>10 / Responsive Design and Accessibility</h2>
<p>Your final website should be usable on more than one screen size. It should also follow the accessibility practices introduced in Week 13.</p>
<div class="ag-grid">
<div class="ag-card">
<h3>Desktop</h3>
<p>Use the extra space thoughtfully. Check the alignment of the main content and avoid text lines that become excessively wide.</p>
</div>
<div class="ag-card">
<h3>Tablet</h3>
<p>Check how navigation, columns, and images adapt to a medium-width viewport.</p>
</div>
<div class="ag-card">
<h3>Mobile</h3>
<p>Check readability, touch-friendly controls, comfortable spacing, and horizontal overflow.</p>
</div>
</div>
<h3>Accessibility checklist</h3>
<div class="ag-checklist">
<ul>
<li>Use a logical heading hierarchy.</li>
<li>Add useful alt text to informative images.</li>
<li>Use descriptive navigation and link text.</li>
<li>Maintain readable color contrast.</li>
<li>Make keyboard focus visible.</li>
<li>Use semantic HTML elements where appropriate.</li>
<li>Ensure the page works without horizontal scrolling at common narrow widths.</li>
</ul>
</div>
</section>
<section class="ag-section">
<h2>11 / Week 14 Work Session</h2>
<p>Use this class session to make real progress on the final website. You should leave with a clear plan and a working foundation for all three pages.</p>
<ol class="ag-steps">
<li><strong>Confirm your topic.</strong> Decide what your website is about and who will use it.</li>
<li><strong>Complete your sitemap.</strong> Identify the three required pages and the content each page will contain.</li>
<li><strong>Build the shared structure.</strong> Create the header, navigation, main content area, and footer.</li>
<li><strong>Connect the pages.</strong> Make sure the navigation works from every page.</li>
<li><strong>Apply your visual design.</strong> Add your colors, typography, spacing, and layout styles in the shared stylesheet.</li>
<li><strong>Develop the content.</strong> Add images, text, project cards, or other material appropriate to your topic.</li>
<li><strong>Test and revise.</strong> Check responsive behavior, accessibility, and links before moving into final polishing.</li>
</ol>
<div class="ag-callout">
<strong>Priority for this week:</strong> Get all pages connected and structurally complete before spending too much time on decorative details. You can refine the visual design after the main content and navigation work.
    </div>
</section>
<section class="ag-section">
<h2>12 / Final Project Requirements</h2>
<div class="ag-checklist">
<ul>
<li>At least three connected HTML pages.</li>
<li>A consistent header and navigation system.</li>
<li>A shared external CSS stylesheet.</li>
<li>A clear visual identity using color, typography, spacing, and layout.</li>
<li>Relevant content and images appropriate to the selected topic.</li>
<li>CSS Grid, Flexbox, or other suitable layout techniques.</li>
<li>Responsive behavior for desktop, tablet, and mobile screens.</li>
<li>Semantic HTML, descriptive links, and useful image alt text.</li>
<li>Working internal navigation and no obvious broken links.</li>
<li>Testing and revisions based on usability and visual consistency.</li>
</ul>
</div>
</section>
<section class="ag-section">
<h2>13 / What to Submit for Week 14</h2>
<p>This week's submission is a progress checkpoint, not necessarily the finished final project. Show that your site is planned, structured, and actively being developed.</p>
<div class="ag-card">
<h3>Progress checkpoint</h3>
<ul>
<li>Your website topic and intended audience.</li>
<li>A simple sitemap or wireframe.</li>
<li>Your current project link or working files.</li>
<li>Evidence that all three pages have been started and the navigation is being connected.</li>
<li>A short progress note identifying what is complete and what you plan to finish before the final critique.</li>
</ul>
</div>
<h3>Self-assessment</h3>
<p>Before you finish the work session, ask yourself:</p>
<ul>
<li>Can a visitor understand what my website is about?</li>
<li>Does each page have a clear purpose?</li>
<li>Can visitors navigate between pages?</li>
<li>Does the visual style feel consistent?</li>
<li>What still needs improvement before the final submission?</li>
</ul>
</section>
<section class="ag-section">
<h2>14 / Key Terms</h2>
<div class="ag-grid">
<div class="ag-card">
<h3>Sitemap</h3>
<p>A plan showing the pages in a website and how they relate to each other.</p>
</div>
<div class="ag-card">
<h3>Navigation</h3>
<p>The links and controls that help visitors move through a website.</p>
</div>
<div class="ag-card">
<h3>External stylesheet</h3>
<p>A separate CSS file used to style one or more HTML pages.</p>
</div>
<div class="ag-card">
<h3>Relative link</h3>
<p>A link that points to another file or location using a path relative to the current page.</p>
</div>
<div class="ag-card">
<h3>Visual consistency</h3>
<p>The use of related typography, colors, spacing, and layout patterns throughout a site.</p>
</div>
<div class="ag-card">
<h3>Quality assurance</h3>
<p>The process of checking a website for functional, visual, accessibility, and usability problems.</p>
</div>
</div>
</section>
<footer class="ag-footer">
<div class="ag-eyebrow">Week 14 · Final Project Work Session</div>
<h2>Make it clear. Make it connected. Make it yours.</h2>
<p>Your final website is an opportunity to demonstrate what you have learned about HTML, CSS, responsive layouts, and visual communication. Start with a clear purpose, build a strong structure, and use testing to make the experience better.</p>
<p><strong>Coming next:</strong> Week 15 — Final Critique, Revisions, and Website Submission.</p>
</footer>
</div>
{:/nomarkdown}
