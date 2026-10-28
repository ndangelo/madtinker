---
layout: teaching-post
title: AMDE 155 - Accessibility, Forms &amp; Web Best Practices (Week 13)
slug: amde-155-accessibility-forms-web-best-practices-week-13
date: '2026-10-22'
modified: '2026-10-23'
status: published
wordpress_id: 68179
source_url: https://nuggetofjoy.com/amde-155-accessibility-forms-web-best-practices-week-13/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
tags: []
---

{::nomarkdown}
<div class="amde-grid-lesson">
<header class="ag-hero">
<div class="ag-eyebrow">AMDE 155 · Introduction to Web Design · Week 13</div>
<h1>Accessibility, Forms &amp; Web Best Practices</h1>
<p>Good web design is about more than appearance. A website should be understandable, readable, and usable by as many people as possible. This week, you will learn practical ways to improve accessibility and build a simple, well-structured contact form using HTML and CSS.</p>
<div class="ag-chips">
<span class="ag-chip">Accessible design</span>
<span class="ag-chip">HTML forms</span>
<span class="ag-chip">Color contrast</span>
<span class="ag-chip">Usability</span>
</div>
</header>
<section class="ag-section">
<h2>01 / What You Will Learn</h2>
<p>Over the past several weeks, you have learned to structure content with HTML, style it with CSS, and make layouts responsive. Now you will consider how people experience your website in different ways.</p>
<div class="ag-grid">
<div class="ag-card">
<div class="ag-number">01</div>
<h3>Design for accessibility</h3>
<p>Learn how structure, text, color, and navigation affect the experience of different users.</p>
</div>
<div class="ag-card">
<div class="ag-number">02</div>
<h3>Write meaningful HTML</h3>
<p>Use headings, landmarks, descriptive links, and image alternatives to communicate meaning.</p>
</div>
<div class="ag-card">
<div class="ag-number">03</div>
<h3>Build an HTML form</h3>
<p>Create labeled fields, a dropdown menu, a message area, and a submit button.</p>
</div>
<div class="ag-card">
<div class="ag-number">04</div>
<h3>Test usability</h3>
<p>Check keyboard navigation, readability, contrast, and the overall user experience.</p>
</div>
</div>
<div class="ag-callout">
<strong>The big idea:</strong> Accessibility is part of the design process, not an extra feature to add at the end. Accessible choices often improve usability for everyone.
    </div>
</section>
<section class="ag-section">
<h2>02 / What Is Web Accessibility?</h2>
<p>Web accessibility means designing and developing websites so people with different abilities can perceive, understand, navigate, and interact with the content.</p>
<p>Some people navigate with a keyboard rather than a mouse. Some use screen readers that announce page content aloud. Others may have low vision, color-vision differences, hearing disabilities, or difficulty using small interactive controls.</p>
<div class="ag-grid">
<div class="ag-card">
<h3>Visual access</h3>
<p>Use readable text, sufficient contrast, useful alternative text, and a clear heading structure.</p>
</div>
<div class="ag-card">
<h3>Keyboard access</h3>
<p>Make sure people can reach and use interactive elements without relying on a mouse.</p>
</div>
<div class="ag-card">
<h3>Clear communication</h3>
<p>Write meaningful link text, provide instructions, and explain form fields and errors clearly.</p>
</div>
</div>
<p>Accessibility is not achieved by one CSS property or a single testing tool. It comes from a series of thoughtful design and development decisions.</p>
</section>
<section class="ag-section">
<h2>03 / Use HTML to Communicate Meaning</h2>
<p>HTML elements provide structure and meaning. Choosing the correct element helps browsers and assistive technologies interpret the page.</p>
<div class="ag-code-label">A meaningful page structure</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;header&gt;</span>
  <span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">My Design Portfolio</span><span class="ag-tag">&lt;/h1&gt;</span>
<span class="ag-tag">&lt;/header&gt;</span>

<span class="ag-tag">&lt;nav aria-label="Main navigation"&gt;</span>
  <span class="ag-tag">&lt;a href="#work"&gt;</span><span class="ag-text">View my work</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a href="#about"&gt;</span><span class="ag-text">About me</span><span class="ag-tag">&lt;/a&gt;</span>
  <span class="ag-tag">&lt;a href="#contact"&gt;</span><span class="ag-text">Contact</span><span class="ag-tag">&lt;/a&gt;</span>
<span class="ag-tag">&lt;/nav&gt;</span>

<span class="ag-tag">&lt;main&gt;</span>
  <span class="ag-tag">&lt;section id="work"&gt;</span>
    <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Selected Work</span><span class="ag-tag">&lt;/h2&gt;</span>
    <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">A collection of recent projects.</span><span class="ag-tag">&lt;/p&gt;</span>
  <span class="ag-tag">&lt;/section&gt;</span>
<span class="ag-tag">&lt;/main&gt;</span>

<span class="ag-tag">&lt;footer&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">© 2026 My Portfolio</span><span class="ag-tag">&lt;/p&gt;</span>
<span class="ag-tag">&lt;/footer&gt;</span></code></pre>
<p>These elements describe the roles of different page areas:</p>
<ul>
<li><span class="ag-inline">&lt;header&gt;</span> introduces a page or section.</li>
<li><span class="ag-inline">&lt;nav&gt;</span> identifies a navigation area.</li>
<li><span class="ag-inline">&lt;main&gt;</span> contains the page's primary content.</li>
<li><span class="ag-inline">&lt;section&gt;</span> groups related content.</li>
<li><span class="ag-inline">&lt;footer&gt;</span> contains closing or supplementary information.</li>
</ul>
<div class="ag-callout">
<strong>Remember:</strong> Use headings to create a logical hierarchy. An <span class="ag-inline">&lt;h1&gt;</span> is generally the main page heading, and <span class="ag-inline">&lt;h2&gt;</span> elements introduce major sections. Choose heading levels based on structure, not simply on the size you want the text to appear.
    </div>
</section>
<section class="ag-section">
<h2>04 / Images and Alternative Text</h2>
<p>Alternative text, often called <em>alt text</em>, communicates the purpose or meaningful content of an image to people who may not be able to see it. It can also appear when an image fails to load.</p>
<div class="ag-code-label">Example: descriptive alt text</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;img src="abstract-painting.jpg"</span>
     <span class="ag-attr">alt</span>=<span class="ag-value">"Abstract painting with layered red and blue brushstrokes"</span><span class="ag-tag">&gt;</span></code></pre>
<p>Write alt text that communicates the image's relevant content in context. You do not need to begin with "Image of" or "Picture of."</p>
<div class="ag-code-label">Example: decorative image</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;img src="decorative-line.png"</span>
     <span class="ag-attr">alt</span>=<span class="ag-value">""</span><span class="ag-tag">&gt;</span></code></pre>
<p>If an image is purely decorative and does not add information, an empty alt attribute tells assistive technology it can be skipped. Do not omit the alt attribute entirely.</p>
<h3>Practice: improve the description</h3>
<div class="ag-grid">
<div class="ag-card">
<h3>Too vague</h3>
<p>"Photo"</p>
<p>This does not communicate what the image shows.</p>
</div>
<div class="ag-card">
<h3>More useful</h3>
<p>"Black-and-white photograph of a person walking through a crowded city street."</p>
<p>This describes meaningful visual information.</p>
</div>
</div>
<p>For artwork, consider what a person needs to understand about the image. Describe important subjects, actions, and visual details without turning the alt text into an unnecessarily long artist statement.</p>
</section>
<section class="ag-section">
<h2>05 / Color Contrast and Readability</h2>
<p>Color helps establish a visual identity, but text must remain readable against its background. Pale text on a pale background or dark text on a dark background can make a page difficult to use.</p>
<div class="ag-grid">
<div class="ag-card">
<div style="background:#ffffff;color:#172033;border:1px solid #dce2ec;border-radius:8px;padding:18px;margin-bottom:12px;">
<strong>Readable example</strong>
<p style="margin:6px 0 0;">Dark text on a light background.</p>
</div>
<h3>Strong contrast</h3>
<p>Text and its background are easy to distinguish.</p>
</div>
<div class="ag-card">
<div style="background:#e8eaf0;color:#a8acb8;border:1px solid #dce2ec;border-radius:8px;padding:18px;margin-bottom:12px;">
<strong>Harder to read</strong>
<p style="margin:6px 0 0;">Light text on a light background.</p>
</div>
<h3>Weak contrast</h3>
<p>Some readers may struggle to distinguish the text.</p>
</div>
</div>
<p>As a general WCAG guideline, normal-sized text should have a contrast ratio of at least 4.5:1 against its background. Large text has a lower minimum of 3:1. These are useful starting points for evaluating your color choices.</p>
<div class="ag-code-label">CSS example</div>
<pre class="ag-code"><code><span class="ag-tag">body</span> {
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#ffffff</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#172033</span>;
}

<span class="ag-tag">.primary-button</span> {
  <span class="ag-css-prop">background-color</span>: <span class="ag-css-value">#183b91</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#ffffff</span>;
}</code></pre>
<p>Use a contrast checker to evaluate your chosen foreground and background colors. Do not rely on color alone to communicate meaning: pair color with text, labels, icons, or other visual cues.</p>
</section>
<section class="ag-section">
<h2>06 / Links, Buttons, and Keyboard Navigation</h2>
<p>Interactive elements should communicate what they do and be usable without a mouse.</p>
<div class="ag-code-label">Write descriptive link text</div>
<pre class="ag-code"><code><span class="ag-text">&lt;!-- Less descriptive --&gt;</span>
<span class="ag-tag">&lt;a href="portfolio.html"&gt;</span><span class="ag-text">Click here</span><span class="ag-tag">&lt;/a&gt;</span>

<span class="ag-text">&lt;!-- More descriptive --&gt;</span>
<span class="ag-tag">&lt;a href="portfolio.html"&gt;</span><span class="ag-text">View my design portfolio</span><span class="ag-tag">&lt;/a&gt;</span></code></pre>
<p>Descriptive links make it easier for people to understand where a link leads, especially when they encounter links outside the surrounding paragraph.</p>
<div class="ag-code-label">Use the right interactive element</div>
<pre class="ag-code"><code><span class="ag-text">&lt;!-- Use a link to navigate to another page --&gt;</span>
<span class="ag-tag">&lt;a href="about.html"&gt;</span><span class="ag-text">About me</span><span class="ag-tag">&lt;/a&gt;</span>

<span class="ag-text">&lt;!-- Use a button to perform an action --&gt;</span>
<span class="ag-tag">&lt;button type="button"&gt;</span><span class="ag-text">Show details</span><span class="ag-tag">&lt;/button&gt;</span></code></pre>
<p>Browsers provide built-in keyboard behavior for links, buttons, and standard form controls. Avoid removing the visible focus outline unless you replace it with an equally clear indicator.</p>
<h3>Keyboard test</h3>
<ol class="ag-steps">
<li>Click the preview, then press <span class="ag-inline">Tab</span> to move between interactive elements.</li>
<li>Look for a visible focus indicator showing which element is selected.</li>
<li>Press <span class="ag-inline">Shift + Tab</span> to move backward.</li>
<li>Use <span class="ag-inline">Enter</span> or <span class="ag-inline">Space</span> as appropriate to activate the focused link or button.</li>
</ol>
</section>
<section class="ag-section">
<h2>07 / Introduction to HTML Forms</h2>
<p>Forms allow visitors to enter information. You see them on contact pages, event registrations, feedback pages, surveys, and many other websites.</p>
<p>A basic form can use several HTML elements:</p>
<div class="ag-grid">
<div class="ag-card">
<h3><span class="ag-inline">&lt;form&gt;</span></h3>
<p>Groups the controls that collect user input.</p>
</div>
<div class="ag-card">
<h3><span class="ag-inline">&lt;label&gt;</span></h3>
<p>Identifies a field so users understand what information belongs there.</p>
</div>
<div class="ag-card">
<h3><span class="ag-inline">&lt;input&gt;</span></h3>
<p>Collects short information such as a name or email address.</p>
</div>
<div class="ag-card">
<h3><span class="ag-inline">&lt;textarea&gt;</span></h3>
<p>Provides space for a longer message.</p>
</div>
</div>
<h3>Connect labels to fields</h3>
<p>A label's <span class="ag-inline">for</span> attribute should match the field's <span class="ag-inline">id</span>. This relationship helps users, including people using screen readers, identify each field.</p>
<div class="ag-code-label">Example</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;label for="name"&gt;</span><span class="ag-text">Your name</span><span class="ag-tag">&lt;/label&gt;</span>
<span class="ag-tag">&lt;input type="text" id="name" name="name"&gt;</span></code></pre>
<p>Notice that both the label and the input use the same identifier, <span class="ag-inline">name</span>. If the identifiers do not match, the label may not be correctly associated with its field.</p>
<div class="ag-callout">
<strong>Important:</strong> Placeholder text is not a replacement for a label. Placeholder text disappears when someone begins typing, while a visible label continues to identify the field.
    </div>
</section>
<section class="ag-section">
<h2>08 / Build an Accessible Contact Form</h2>
<p>In this guided example, you will create a contact form for a personal portfolio. It includes a name field, an email field, a reason for contacting you, a message area, and a submit button.</p>
<div class="ag-code-label">HTML: contact form</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;section class="contact-section" id="contact"&gt;</span>
  <span class="ag-tag">&lt;h2&gt;</span><span class="ag-text">Get in Touch</span><span class="ag-tag">&lt;/h2&gt;</span>
  <span class="ag-tag">&lt;p&gt;</span><span class="ag-text">Have a question or project idea? Send me a message.</span><span class="ag-tag">&lt;/p&gt;</span>

  <span class="ag-tag">&lt;form action="#" method="post"&gt;</span>
    <span class="ag-tag">&lt;div class="form-field"&gt;</span>
      <span class="ag-tag">&lt;label for="contact-name"&gt;</span><span class="ag-text">Your name</span><span class="ag-tag">&lt;/label&gt;</span>
      <span class="ag-tag">&lt;input type="text" id="contact-name"</span>
             <span class="ag-attr">name</span>=<span class="ag-value">"name"</span> <span class="ag-attr">autocomplete</span>=<span class="ag-value">"name"</span> <span class="ag-attr">required</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;/div&gt;</span>

    <span class="ag-tag">&lt;div class="form-field"&gt;</span>
      <span class="ag-tag">&lt;label for="contact-email"&gt;</span><span class="ag-text">Email address</span><span class="ag-tag">&lt;/label&gt;</span>
      <span class="ag-tag">&lt;input type="email" id="contact-email"</span>
             <span class="ag-attr">name</span>=<span class="ag-value">"email"</span> <span class="ag-attr">autocomplete</span>=<span class="ag-value">"email"</span> <span class="ag-attr">required</span><span class="ag-tag">&gt;</span>
    <span class="ag-tag">&lt;/div&gt;</span>

    <span class="ag-tag">&lt;div class="form-field"&gt;</span>
      <span class="ag-tag">&lt;label for="contact-reason"&gt;</span><span class="ag-text">Reason for contacting me</span><span class="ag-tag">&lt;/label&gt;</span>
      <span class="ag-tag">&lt;select id="contact-reason" name="reason"&gt;</span>
        <span class="ag-tag">&lt;option value=""&gt;</span><span class="ag-text">Choose an option</span><span class="ag-tag">&lt;/option&gt;</span>
        <span class="ag-tag">&lt;option value="project"&gt;</span><span class="ag-text">Project inquiry</span><span class="ag-tag">&lt;/option&gt;</span>
        <span class="ag-tag">&lt;option value="collaboration"&gt;</span><span class="ag-text">Collaboration</span><span class="ag-tag">&lt;/option&gt;</span>
        <span class="ag-tag">&lt;option value="other"&gt;</span><span class="ag-text">Other</span><span class="ag-tag">&lt;/option&gt;</span>
      <span class="ag-tag">&lt;/select&gt;</span>
    <span class="ag-tag">&lt;/div&gt;</span>

    <span class="ag-tag">&lt;div class="form-field"&gt;</span>
      <span class="ag-tag">&lt;label for="contact-message"&gt;</span><span class="ag-text">Your message</span><span class="ag-tag">&lt;/label&gt;</span>
      <span class="ag-tag">&lt;textarea id="contact-message" name="message"</span>
                <span class="ag-attr">rows</span>=<span class="ag-value">"5"</span> <span class="ag-attr">required</span><span class="ag-tag">&gt;&lt;/textarea&gt;</span>
    <span class="ag-tag">&lt;/div&gt;</span>

    <span class="ag-tag">&lt;button type="submit"&gt;</span><span class="ag-text">Send Message</span><span class="ag-tag">&lt;/button&gt;</span>
  <span class="ag-tag">&lt;/form&gt;</span>
<span class="ag-tag">&lt;/section&gt;</span></code></pre>
<h3>What the attributes do</h3>
<ul>
<li><span class="ag-inline">type="text"</span> creates a field for short text.</li>
<li><span class="ag-inline">type="email"</span> provides a field intended for an email address and enables basic browser validation.</li>
<li><span class="ag-inline">required</span> asks the browser to prevent submission when a required field is empty.</li>
<li><span class="ag-inline">autocomplete</span> helps browsers recognize common information fields.</li>
<li><span class="ag-inline">rows="5"</span> gives the message area an initial height of five text rows.</li>
<li><span class="ag-inline">type="submit"</span> makes the button submit the form.</li>
</ul>
<div class="ag-callout">
<strong>CodePen note:</strong> This is a front-end demonstration. The <span class="ag-inline">action="#"</span> placeholder does not provide a real message-processing destination. A working contact form requires an appropriate backend or form service, plus appropriate handling of submitted information.
    </div>
</section>
<section class="ag-section">
<h2>09 / Style the Form with CSS</h2>
<p>Accessible forms can still have a strong visual identity. Use clear spacing, readable text, visible field boundaries, and a distinct button. The following CSS creates a simple layout that can adapt to narrower screens.</p>
<div class="ag-code-label">CSS: contact form styles</div>
<pre class="ag-code"><code><span class="ag-tag">.contact-section</span> {
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">700px</span>;
  <span class="ag-css-prop">margin</span>: <span class="ag-css-value">40px auto</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">24px</span>;
  <span class="ag-css-prop">background</span>: <span class="ag-css-value">#f4f6fa</span>;
  <span class="ag-css-prop">border-radius</span>: <span class="ag-css-value">12px</span>;
}

<span class="ag-tag">.form-field</span> {
  <span class="ag-css-prop">margin-bottom</span>: <span class="ag-css-value">20px</span>;
}

<span class="ag-tag">.form-field label</span> {
  <span class="ag-css-prop">display</span>: <span class="ag-css-value">block</span>;
  <span class="ag-css-prop">font-weight</span>: <span class="ag-css-value">700</span>;
  <span class="ag-css-prop">margin-bottom</span>: <span class="ag-css-value">6px</span>;
}

<span class="ag-tag">.form-field input,</span>
<span class="ag-tag">.form-field select,</span>
<span class="ag-tag">.form-field textarea</span> {
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">100%</span>;
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">12px</span>;
  <span class="ag-css-prop">font</span>: <span class="ag-css-value">inherit</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#172033</span>;
  <span class="ag-css-prop">background</span>: <span class="ag-css-value">#ffffff</span>;
  <span class="ag-css-prop">border</span>: <span class="ag-css-value">1px solid #68748a</span>;
  <span class="ag-css-prop">border-radius</span>: <span class="ag-css-value">6px</span>;
}

<span class="ag-tag">.form-field textarea</span> {
  <span class="ag-css-prop">resize</span>: <span class="ag-css-value">vertical</span>;
}

<span class="ag-tag">.contact-section button</span> {
  <span class="ag-css-prop">padding</span>: <span class="ag-css-value">12px 20px</span>;
  <span class="ag-css-prop">border</span>: <span class="ag-css-value">0</span>;
  <span class="ag-css-prop">border-radius</span>: <span class="ag-css-value">6px</span>;
  <span class="ag-css-prop">background</span>: <span class="ag-css-value">#183b91</span>;
  <span class="ag-css-prop">color</span>: <span class="ag-css-value">#ffffff</span>;
  <span class="ag-css-prop">font</span>: <span class="ag-css-value">inherit</span>;
  <span class="ag-css-prop">font-weight</span>: <span class="ag-css-value">700</span>;
  <span class="ag-css-prop">cursor</span>: <span class="ag-css-value">pointer</span>;
}

<span class="ag-tag">.contact-section button:hover</span> {
  <span class="ag-css-prop">background</span>: <span class="ag-css-value">#10285f</span>;
}

<span class="ag-tag">.contact-section button:focus-visible</span> {
  <span class="ag-css-prop">outline</span>: <span class="ag-css-value">3px solid #2855d9</span>;
  <span class="ag-css-prop">outline-offset</span>: <span class="ag-css-value">3px</span>;
}

<span class="ag-tag">@media (max-width: 500px)</span> {
  <span class="ag-tag">.contact-section</span> {
    <span class="ag-css-prop">padding</span>: <span class="ag-css-value">16px</span>;
    <span class="ag-css-prop">margin</span>: <span class="ag-css-value">20px auto</span>;
  }
}</code></pre>
<p>Try changing the background color, button color, border radius, and spacing. Keep enough contrast between text and its background, and make sure keyboard focus remains visible.</p>
</section>
<section class="ag-section">
<h2>10 / In-Class Assignment: Accessible Contact Page</h2>
<p>Create a single-page contact page for a creative portfolio, student organization, fictional studio, or project of your choice. The goal is to combine the HTML structure you have learned with thoughtful usability and accessible form design.</p>
<div class="ag-grid">
<div class="ag-card">
<div class="ag-number">A</div>
<h3>Page structure</h3>
<p>Add a header, a main section, a descriptive heading, and a brief introduction to the contact page.</p>
</div>
<div class="ag-card">
<div class="ag-number">B</div>
<h3>Contact form</h3>
<p>Include a name field, email field, reason dropdown, message area, and submit button.</p>
</div>
<div class="ag-card">
<div class="ag-number">C</div>
<h3>Visual design</h3>
<p>Style the form using CSS. Establish a clear hierarchy with readable type, spacing, and contrast.</p>
</div>
</div>
<h3>Required elements</h3>
<div class="ag-checklist">
<ul>
<li>Use semantic HTML to organize the page.</li>
<li>Give each form field a visible label connected through matching <span class="ag-inline">for</span> and <span class="ag-inline">id</span> values.</li>
<li>Use appropriate input types and include required fields where needed.</li>
<li>Include descriptive alt text if you add informative images.</li>
<li>Use readable color contrast.</li>
<li>Include a visible keyboard focus indicator.</li>
<li>Make the layout responsive on mobile and desktop.</li>
<li>Test the form controls using your keyboard.</li>
</ul>
</div>
<h3>Suggested workflow</h3>
<ol class="ag-steps">
<li><strong>Plan the page.</strong> Decide who the page is for and what information visitors need to provide.</li>
<li><strong>Build the HTML.</strong> Start with the page structure and labeled form fields before adding decorative styles.</li>
<li><strong>Apply CSS.</strong> Use consistent spacing, typography, borders, and colors to create a clear visual hierarchy.</li>
<li><strong>Check accessibility.</strong> Test labels, contrast, heading order, link descriptions, and keyboard focus.</li>
<li><strong>Test responsiveness.</strong> Preview the page at narrow and wide screen sizes and correct any overflow.</li>
<li><strong>Revise the design.</strong> Improve any confusing labels, cramped spacing, or unclear instructions.</li>
</ol>
</section>
<section class="ag-section">
<h2>11 / Independent Practice</h2>
<p>Expand your contact page into a small, more complete website experience. You can adapt the page to fit a personal portfolio, creative business, exhibition, student club, or fictional brand.</p>
<p>Choose at least two improvements beyond the basic requirements:</p>
<ul>
<li>Add a short FAQ section using semantic headings.</li>
<li>Add a project inquiry category that makes sense for your subject.</li>
<li>Improve the visual hierarchy with a consistent type scale and spacing system.</li>
<li>Check your chosen text and background colors with a contrast checker.</li>
<li>Add a descriptive link back to your portfolio or home page.</li>
<li>Improve the page's mobile layout and test the keyboard focus order.</li>
</ul>
<div class="ag-callout">
<strong>Keep the scope manageable:</strong> You do not need JavaScript or a backend for this exercise. Concentrate on the HTML structure, CSS presentation, accessibility, and usability of the page.
    </div>
</section>
<section class="ag-section">
<h2>12 / Testing Checklist</h2>
<p>Before you submit, test the page from the perspective of someone visiting it for the first time.</p>
<div class="ag-checklist">
<ul>
<li>Can visitors quickly understand the purpose of the page?</li>
<li>Does the page have a clear heading structure?</li>
<li>Can every form field be identified without relying on placeholder text?</li>
<li>Can you move between controls using the keyboard?</li>
<li>Is the current keyboard focus clearly visible?</li>
<li>Are text and background colors easy to distinguish?</li>
<li>Do informative images have appropriate alternative text?</li>
<li>Are link descriptions meaningful outside their surrounding paragraphs?</li>
<li>Does the layout work on both mobile and desktop screens?</li>
<li>Have you avoided suggesting that the form sends a message when it has no working submission service?</li>
</ul>
</div>
</section>
<section class="ag-section">
<h2>13 / What to Submit</h2>
<p>Submit the following through the course's designated submission area:</p>
<div class="ag-checklist">
<ul>
<li>Your CodePen URL.</li>
<li>A screenshot of your completed contact page.</li>
<li>A screenshot showing the page at a narrow/mobile width.</li>
<li>A short reflection of approximately 100–150 words describing two accessibility decisions you made and one change you made after testing.</li>
</ul>
</div>
<h3>How your work will be evaluated</h3>
<ul>
<li><strong>HTML structure:</strong> Appropriate semantic elements and logical headings.</li>
<li><strong>Form usability:</strong> Clear labels, suitable field types, and understandable instructions.</li>
<li><strong>Accessibility:</strong> Attention to contrast, keyboard access, image alternatives, and meaningful links.</li>
<li><strong>CSS design:</strong> Consistent typography, spacing, and visual hierarchy.</li>
<li><strong>Responsive behavior:</strong> A layout that remains usable at different screen widths.</li>
<li><strong>Reflection:</strong> An explanation of your design choices and testing process.</li>
</ul>
</section>
<section class="ag-section">
<h2>14 / Key Terms</h2>
<div class="ag-grid">
<div class="ag-card">
<h3>Accessibility</h3>
<p>Designing and developing content so people with different abilities can use it.</p>
</div>
<div class="ag-card">
<h3>Semantic HTML</h3>
<p>HTML elements that communicate the meaning and role of the content they contain.</p>
</div>
<div class="ag-card">
<h3>Alt text</h3>
<p>A text alternative that communicates the relevant content or purpose of an image.</p>
</div>
<div class="ag-card">
<h3>Color contrast</h3>
<p>The difference in brightness between foreground content and its background.</p>
</div>
<div class="ag-card">
<h3>Form label</h3>
<p>Text that identifies a form control and helps explain what information belongs in it.</p>
</div>
<div class="ag-card">
<h3>Keyboard focus</h3>
<p>The current interactive element selected when navigating with a keyboard.</p>
</div>
</div>
</section>
<section class="ag-section">
<h2>15 / Online Resources</h2>
<p>Use these resources to review the concepts and explore examples from established web standards organizations.</p>
<div class="ag-card">
<h3>W3C Web Accessibility Initiative</h3>
<p>Practical tutorials covering page structure, images, navigation, forms, and accessible interactions.</p>
<p><a href="https://www.w3.org/WAI/tutorials/" rel="noopener noreferrer" target="_blank">Explore W3C accessibility tutorials ↗</a></p>
</div>
<div class="ag-card">
<h3>W3C: Developing for Web Accessibility</h3>
<p>A beginner-friendly overview of accessible images, labels, semantic markup, and keyboard access.</p>
<p><a href="https://www.w3.org/WAI/tips/developing/" rel="noopener noreferrer" target="_blank">Read accessibility development tips ↗</a></p>
</div>
<div class="ag-card">
<h3>MDN: How to Structure a Web Form</h3>
<p>Learn how form elements, labels, fieldsets, and legends help make forms more usable and accessible.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form" rel="noopener noreferrer" target="_blank">Read the MDN form guide ↗</a></p>
</div>
</section>
<footer class="ag-footer">
<div class="ag-eyebrow">Week 13 · Wrap-Up</div>
<h2>Good design includes everyone.</h2>
<p>Accessibility begins with small, practical choices: meaningful HTML, clear labels, readable contrast, descriptive links, useful image alternatives, and keyboard-friendly interactions. These choices help make a website easier to use and understand.</p>
<p><strong>Coming next:</strong> Week 14 — Final Project: Design and Build a Multi-Page Website.</p>
</footer>
<!-- INSTRUCTOR ONLY: REMOVE THIS ENTIRE SECTION BEFORE PUBLISHING TO STUDENTS -->
<section aria-label="Instructor-only teaching notes" class="ag-instructor">
<header class="ag-instructor-banner">
<div class="ag-eyebrow">Instructor Only · Remove Before Publishing</div>
<h2>Teaching Walkthrough: Accessibility &amp; Forms</h2>
<p>Suggested live demonstration, discussion prompts, and a deliberate code error for students to diagnose.</p>
</header>
<div class="ag-instructor-body">
<div class="ag-instructor-note">
<strong>Suggested timing:</strong> 10–15 minutes for the demonstration, followed by student work time. Keep the focus on small, observable improvements rather than trying to cover every accessibility topic at once.
      </div>
<h3>1. Begin with the user experience</h3>
<ol class="ag-steps">
<li>Open a simple portfolio or contact page. Ask students to identify what the page is asking a visitor to do.</li>
<li>Use the keyboard only. Press <span class="ag-inline">Tab</span> repeatedly and ask students to watch where focus moves.</li>
<li>Point out whether the focus indicator is visible and whether the order of controls makes sense.</li>
<li>Ask students to imagine using a screen reader. Explain that meaningful headings, labels, and link text help communicate the page structure.</li>
</ol>
<h3>2. Demonstrate a label-to-field connection</h3>
<ol class="ag-steps">
<li>In CodePen, create a label and input with matching identifiers.</li>
<li>Click the label and show that the associated field receives focus.</li>
<li>Change the input's <span class="ag-inline">id</span> so it no longer matches the label's <span class="ag-inline">for</span> value.</li>
<li>Ask students what changed, then restore the matching values.</li>
</ol>
<pre class="ag-code"><code>&lt;label for="contact-email"&gt;Email address&lt;/label&gt;
&lt;input type="email" id="contact-email" name="email"&gt;</code></pre>
<h3>3. Build the form in small steps</h3>
<ol class="ag-steps">
<li>Add the heading and short introduction before the form.</li>
<li>Add the name and email fields, including visible labels.</li>
<li>Add the reason dropdown and message textarea.</li>
<li>Include <span class="ag-inline">required</span> on fields that must be completed and use <span class="ag-inline">type="email"</span> for the email field.</li>
<li>Add CSS for field spacing, width, borders, and button styling.</li>
<li>Test the form at a narrow screen width and navigate all controls using the keyboard.</li>
</ol>
<div class="ag-instructor-note">
<strong>Clarify the limit:</strong> The lesson's <span class="ag-inline">action="#"</span> is a placeholder. The form can demonstrate front-end structure and browser validation, but it will not send a real message without a configured processing destination.
      </div>
<h3>4. Ask the class</h3>
<ul>
<li>Why should a visible label remain even when placeholder text is present?</li>
<li>What is the difference between a link and a button?</li>
<li>Why is it a problem if keyboard focus is invisible?</li>
<li>When should an image have descriptive alt text, and when can its alt attribute be empty?</li>
<li>Why should color not be the only way a page communicates a status or instruction?</li>
<li>What does a contrast checker help you evaluate?</li>
</ul>
<h3>5. Deliberate error: find and fix the broken label</h3>
<p>Show students this snippet and ask them to diagnose why the label is not properly connected to the field. Do not reveal the fix immediately.</p>
<div class="ag-instructor-error">
<strong>Student debugging challenge</strong>
<pre class="ag-code"><code>&lt;label for="contact-email"&gt;Email address&lt;/label&gt;
&lt;input type="email" id="email-address" name="email"&gt;</code></pre>
<p><strong>Prompt:</strong> Compare the label's <span class="ag-inline">for</span> value with the input's <span class="ag-inline">id</span>. Which values need to match?</p>
</div>
<p><strong>Instructor answer:</strong> Change either value so they match. For example, set the input's <span class="ag-inline">id</span> to <span class="ag-inline">contact-email</span>. The label's <span class="ag-inline">for</span> attribute must match the associated control's <span class="ag-inline">id</span>.</p>
<h3>6. Quick formative check</h3>
<p>Before students work independently, ask each student to point to one accessibility decision they will make in their contact page and explain why it helps a visitor. Look for a specific choice—such as matching labels and IDs, adding meaningful alt text, improving contrast, or retaining a visible focus outline—rather than a general statement that the page will be accessible.</p>
<h3>7. Instructor review before submission</h3>
<ul class="ag-checklist">
<li>Check that each form control has a visible, associated label.</li>
<li>Check that headings create a sensible content hierarchy.</li>
<li>Check text/background contrast and visible keyboard focus.</li>
<li>Ask students to test at desktop and mobile widths.</li>
<li>Remind students to submit the CodePen URL, screenshots, and 100–150-word reflection listed in the lesson.</li>
</ul>
</div>
</section>
<!-- END INSTRUCTOR ONLY SECTION -->
</div>
{:/nomarkdown}
