---
layout: teaching-post
title: 'AMDE 155 - Midterm Project: Build Your Own Website (Week 8)'
slug: midterm-project-build-your-own-website
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68168
source_url: https://nuggetofjoy.com/midterm-project-build-your-own-website/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
- Projects
tags: []
---

<div class="amde-grid-lesson">
<header class="ag-hero">
<div class="ag-eyebrow">AMDE 155 · Introduction to Web Design · Week 08</div>
<h1>Midterm Project:<br/>Build Your Own Website</h1>
<p>You have learned the building blocks of HTML and CSS. Now it is time to bring them together. For your midterm, you will independently design and build a complete, single-page website based on a subject that interests you.</p>
<div class="ag-chips">
<span class="ag-chip">Midterm Assessment</span>
<span class="ag-chip">HTML + CSS</span>
<span class="ag-chip">Single-Page Website</span>
<span class="ag-chip">Independent Project</span>
</div>
</header>
<section class="ag-section">
<h2>01 / The Challenge</h2>
<p>Throughout the first seven weeks, we have practiced writing HTML, organizing content, creating links and lists, adding images, choosing colors, styling typography, and controlling spacing. Your midterm is an opportunity to demonstrate that you can use these skills together to communicate an idea visually.</p>
<p>You are not expected to be a professional web designer yet. I am looking for a thoughtful, organized, functional page that shows your understanding of the techniques we have covered and your willingness to make design decisions independently.</p>
<div class="ag-callout">
<strong>Your mission:</strong> Design and code one polished, single-page website about a subject you care about. You may use your existing notes and examples from class, but the final design, content, and code should be your own.
    </div>
</section>
<section class="ag-section">
<h2>02 / Choose Your Topic</h2>
<p>Your website can focus on almost any subject that gives you something interesting to communicate. Choose a topic that makes it easier to develop a clear visual identity and meaningful content.</p>
<div class="ag-grid">
<div class="ag-card">
<div class="ag-number">01</div>
<h3>Artist or Designer</h3>
<p>Create a profile of an artist, illustrator, photographer, filmmaker, or designer. Include a short biography, selected work, and links to related resources.</p>
</div>
<div class="ag-card">
<div class="ag-number">02</div>
<h3>Music or Pop Culture</h3>
<p>Build a fan page about a musician, album, film, game, or cultural movement. Use imagery, text, and color to reflect its personality.</p>
</div>
<div class="ag-card">
<div class="ag-number">03</div>
<h3>A Personal Interest</h3>
<p>Showcase photography, fashion, skateboarding, food, travel, collecting, nature, or another subject that matters to you.</p>
</div>
<div class="ag-card">
<div class="ag-number">04</div>
<h3>A Creative Concept</h3>
<p>Invent a small brand, event, exhibition, creative studio, or community project. Give it a name, visual identity, and a clear message.</p>
</div>
</div>
<p><strong>Tip:</strong> Keep the subject manageable. One strong page with clear sections is better than a huge idea with unfinished content.</p>
</section>
<section class="ag-section">
<h2>03 / Required Website Elements</h2>
<p>Your finished page must include all of the following. Use this list to plan your work before you start coding.</p>
<ul class="ag-checklist">
<li><strong>A clear title and introduction.</strong> Use one main heading and a short introduction that tells visitors what the page is about.</li>
<li><strong>At least three content sections.</strong> Organize the page into distinct areas with meaningful headings.</li>
<li><strong>Working navigation links.</strong> Include at least three links that move visitors to sections of your own page using in-page anchors.</li>
<li><strong>At least two relevant images.</strong> Use images that support your topic, and provide descriptive alt text.</li>
<li><strong>Lists or organized information.</strong> Include at least one ordered or unordered list where it makes sense.</li>
<li><strong>External links.</strong> Include at least two useful links to outside websites or resources.</li>
<li><strong>A consistent color palette.</strong> Choose a small set of colors that work together and support your subject.</li>
<li><strong>Intentional typography.</strong> Establish a readable relationship between headings, body text, and any supporting text.</li>
<li><strong>Thoughtful spacing.</strong> Use margins, padding, and borders where appropriate to create separation and visual hierarchy.</li>
<li><strong>A footer.</strong> Finish the page with a closing detail, such as a credit, short note, or copyright line.</li>
</ul>
</section>
<section class="ag-section">
<h2>04 / Plan Before You Code</h2>
<p>Do not begin by randomly adding code. Take a little time to decide what your page needs to communicate and how a visitor will move through it.</p>
<ol class="ag-steps">
<li><strong>Write down your idea.</strong><br/>In two or three sentences, explain the subject of your page, who might visit it, and what you want them to learn or experience.</li>
<li><strong>Sketch a simple wireframe.</strong><br/>Draw the page as a series of rectangles: title area, navigation, content sections, images, and footer. Your sketch does not need to be beautiful; it needs to show the order of information.</li>
<li><strong>Choose your visual direction.</strong><br/>Select two or three main colors and one or two typefaces. Decide whether your page should feel playful, editorial, minimal, energetic, elegant, or something else.</li>
<li><strong>Gather your content.</strong><br/>Prepare your headings, paragraphs, links, and images before you build. Make sure you have permission to use the images and provide credit when appropriate.</li>
<li><strong>Build the HTML first.</strong><br/>Create the content and page sections. Check that the headings, links, lists, and images make sense before concentrating on visual styling.</li>
<li><strong>Apply your CSS.</strong><br/>Style your colors, typography, widths, margins, padding, and borders. Make deliberate changes and preview them as you work.</li>
<li><strong>Test and refine.</strong><br/>Click every link, check every image, correct mistakes, and review the page at different browser widths.</li>
</ol>
</section>
<section class="ag-section">
<h2>05 / A Simple Starting Structure</h2>
<p>This example is a starting point, not a finished design. Adapt the structure to your own topic, replace the sample text, and write the CSS that expresses your visual direction.</p>
<div class="ag-code">
<span class="ag-code-label ag-html-label">HTML · Basic page structure</span>
<pre><span class="ag-tag">&lt;header&gt;</span>
  <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">Your Website Title</span><span class="ag-tag">&lt;/h1&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A short introduction to your topic.</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/header&gt;</span>

<span class="ag-tag">&lt;nav&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#about"</span><span class="ag-tag">&gt;</span><span class="ag-text">About</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#gallery"</span><span class="ag-tag">&gt;</span><span class="ag-text">Gallery</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a</span> <span class="ag-attr">href=</span><span class="ag-value">"#resources"</span><span class="ag-tag">&gt;</span><span class="ag-text">Resources</span><span class="ag-tag">&lt;/a&gt;</span>
<span class="ag-tag">&lt;/nav&gt;</span>

<span class="ag-tag">&lt;main&gt;</span>
  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id=</span><span class="ag-value">"about"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">About the Subject</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Introduce your subject here.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>

  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id=</span><span class="ag-value">"gallery"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Selected Images</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;img</span> <span class="ag-attr">src=</span><span class="ag-value">"image.jpg"</span>
         <span class="ag-attr">alt=</span><span class="ag-value">"Describe what the image shows"</span><span class="ag-tag">&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>

  <span class="ag-tag">&lt;section</span> <span class="ag-attr">id=</span><span class="ag-value">"resources"</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Learn More</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Add links and useful resources here.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>
<span class="ag-tag">&lt;/main&gt;</span>

<span class="ag-tag">&lt;footer&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Created by Your Name</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/footer&gt;</span></pre>
</div>
<div class="ag-callout">
<strong>Important:</strong> The example uses in-page links. The value in an anchor's <span class="ag-inline">href</span> must match the <span class="ag-inline">id</span> of the section it should open. For example, <span class="ag-inline">href="#about"</span> connects to <span class="ag-inline">id="about"</span>. Spelling matters.
    </div>
<div class="ag-code">
<span class="ag-code-label ag-css-label">CSS · Starting point for your visual style</span>
<pre><span class="ag-css-prop">* </span>{
  <span class="ag-css-prop">box-sizing</span>: <span class="ag-css-value">border-box</span>;
}

<span class="ag-css-prop">body </span>{
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0</span>;
  <span class="ag-css-prop">font-family</span>: <span class="ag-css-value">Arial, sans-serif</span>;
  <span class="ag-css-prop">line-height</span>: <span class="ag-css-value">1.6</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#f3f1eb</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#202638</span>;
}

<span class="ag-css-prop">header, main, footer </span>{
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">900px</span>;
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">0 auto</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
}

<span class="ag-css-prop">nav </span>{
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">16px 24px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#202638</span>;
}

<span class="ag-css-prop">nav a </span>{
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">white</span>;
  <span class="ag-css-prop">margin-right</span>: <span class="ag-css-value">16px</span>;
}

<span class="ag-css-prop">section </span>{
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">24px 0</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">white</span>;
  <span class="ag-css-prop">border-radius</span>: <span class="ag-css-value">12px</span>;
}

<span class="ag-css-prop">img </span>{
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">100%</span>;
  <span class="ag-css-prop">height</span>: <span class="ag-css-value">auto</span>;
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">block</span>;
}</pre>
</div>
<p>Use the starter structure as a reference while you work. You are encouraged to change the layout, colors, type, and spacing to match your own concept. You do not need to copy this example exactly.</p>
</section>
<section class="ag-section">
<h2>06 / What You Should Demonstrate</h2>
<div class="ag-grid">
<div class="ag-card">
<h3>HTML: Structure and Meaning</h3>
<p>Use headings in a logical order, paragraphs for text, lists for grouped information, links for navigation, and image elements with useful alt text. Keep your code organized and correctly nested.</p>
</div>
<div class="ag-card">
<h3>CSS: Visual Communication</h3>
<p>Use color, typography, borders, margins, and padding to establish hierarchy. Your choices should work together instead of competing for attention.</p>
</div>
<div class="ag-card">
<h3>Navigation and Content</h3>
<p>Help visitors understand where they are and what the page contains. Navigation links should work, and each section should have a clear purpose.</p>
</div>
<div class="ag-card">
<h3>Care and Craft</h3>
<p>Proofread your text, check your links and images, and make sure your page is readable. A simple, complete design is better than an ambitious but unfinished one.</p>
</div>
</div>
</section>
<section class="ag-section">
<h2>07 / Midterm Schedule and Milestones</h2>
<p>Use these milestones to manage your time. You do not need to complete everything in one sitting.</p>
<ol class="ag-steps">
<li><strong>Milestone 1 — Concept and wireframe</strong><br/>Choose your topic, identify your intended audience, sketch the page layout, and select your images.</li>
<li><strong>Milestone 2 — HTML content</strong><br/>Build the page structure and add your headings, paragraphs, lists, images, navigation, and links. Test the navigation before moving on.</li>
<li><strong>Milestone 3 — CSS design</strong><br/>Apply your color palette, typography, spacing, borders, and other styling. Refine the page until it feels cohesive.</li>
<li><strong>Milestone 4 — Quality check and submission</strong><br/>Test the entire page, review the requirements checklist, capture a screenshot of the finished page, and submit your work with a brief reflection.</li>
</ol>
<div class="ag-callout">
<strong>Keep a backup.</strong> Save your work in CodePen and keep a copy of your code somewhere safe. Before submitting, make sure the link you share opens the correct project and that your work is accessible to your instructor.
    </div>
</section>
<section class="ag-section">
<h2>08 / How Your Midterm Will Be Graded</h2>
<p>Your midterm is worth <strong>20% of your final course grade</strong>. The project itself will be evaluated using the following rubric.</p>
MADTINKERBLOCKTOKEN0END
</section>
<section class="ag-section">
<h2>09 / Final Quality Check</h2>
<p>Before submitting, go through the checklist below. Treat it like a preflight check before sending a design to a client.</p>
<ul class="ag-checklist">
<li>My website has a clear title and introduction.</li>
<li>I have at least three distinct content sections.</li>
<li>My navigation links lead to the correct sections.</li>
<li>I have at least two relevant images with descriptive alt text.</li>
<li>I included at least one list and two external links.</li>
<li>My color palette and typography are consistent.</li>
<li>I used margins and padding to create intentional spacing.</li>
<li>My text is readable, and I corrected spelling and grammar errors.</li>
<li>I tested my links and checked that my images load.</li>
<li>I previewed the page at a narrower browser width and corrected obvious layout problems.</li>
<li>I saved my work, copied the correct project link, and captured a screenshot.</li>
<li>I completed my written reflection.</li>
</ul>
</section>
<section class="ag-section">
<h2>10 / Your Reflection</h2>
<p>Along with your website, submit a short reflection of approximately 150–250 words. Use the questions below to guide your response.</p>
<ul>
<li>What is the subject of your website, and who did you design it for?</li>
<li>What choices did you make with color, typography, imagery, and spacing? Why?</li>
<li>Which HTML or CSS technique did you use most successfully?</li>
<li>What was the most challenging part of building the page, and how did you address it?</li>
<li>If you had another day to work on the project, what would you improve?</li>
</ul>
<div class="ag-callout">
<strong>Be honest about your process.</strong> The reflection is not about claiming that everything went perfectly. It is an opportunity to identify what you learned, explain your decisions, and recognize what you would do differently next time.
    </div>
</section>
<section class="ag-section">
<h2>11 / Submission Instructions</h2>
<p>Submit the following items through the course's designated submission area in D2L:</p>
<ul>
<li><strong>Your CodePen project link:</strong> Make sure it opens the finished midterm website.</li>
<li><strong>A screenshot:</strong> Capture the finished page so your overall layout and visual design are visible.</li>
<li><strong>Your reflection:</strong> Submit your 150–250-word response as text or in the requested document format.</li>
</ul>
<p>Before you submit, check that your project is saved and that your shared link is accessible. If you are unsure how to share your CodePen correctly, revisit the instructions provided in class.</p>
</section>
<footer class="ag-footer">
<h2>You've Got This.</h2>
<p>This is your chance to show what you can do with the fundamentals. You do not need complicated effects or advanced code to create a successful website. Focus on clear content, intentional design, working links, and careful execution.</p>
<p><strong>Design with purpose. Build with care. Test before you submit.</strong></p>
</footer>
</div>
