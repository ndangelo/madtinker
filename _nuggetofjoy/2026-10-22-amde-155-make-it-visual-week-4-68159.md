---
layout: teaching-post
title: AMDE 155 Make It Visual (Week 4)
slug: amde-155-make-it-visual-week-4
date: '2026-10-22'
modified: '2026-10-23'
status: published
wordpress_id: 68159
source_url: https://nuggetofjoy.com/amde-155-make-it-visual-week-4/
author: admin
categories:
- 'AMDE 155 GN: Introduction to Web Design'
- Projects
tags: []
---

{::nomarkdown}
<div class="amde-grid-lesson">
<header class="ag-hero">
<p class="ag-eyebrow">AMDE 155 · INTRODUCTION TO WEB DESIGN · WEEK 04</p>
<h1>Make It Visual</h1>
<p>Images can communicate ideas, establish a mood, tell a story, and give a website its personality. This week, we will learn how to bring visual content into our pages while making thoughtful choices about accessibility, captions, and image quality.</p>
<div class="ag-chips">
<span class="ag-chip">HTML Images</span>
<span class="ag-chip">Alternative Text</span>
<span class="ag-chip">Captions</span>
<span class="ag-chip">Digital Media</span>
</div>
</header>
<section class="ag-section">
<p class="ag-eyebrow">01 / THE BIG IDEA</p>
<h2>Images are part of the message</h2>
<p>Think about the last website that caught your attention. Was it the photography, the illustrations, the colors, or the way images were arranged? Visual content can influence how we understand a subject before we read a single paragraph.</p>
<p>As designers, we need to consider more than whether an image looks good. We also need to think about its purpose, quality, file size, accessibility, and relationship to the surrounding content.</p>
<div class="ag-grid">
<article class="ag-card">
<span class="ag-number">01</span>
<h3>Communicate</h3>
<p>Use images to explain an idea, document a process, or tell a story.</p>
</article>
<article class="ag-card">
<span class="ag-number">02</span>
<h3>Support</h3>
<p>Choose visuals that connect meaningfully to the content rather than adding decoration without purpose.</p>
</article>
<article class="ag-card">
<span class="ag-number">03</span>
<h3>Include</h3>
<p>Provide appropriate alternative text and captions so visitors can understand the visual content.</p>
</article>
</div>
<div class="ag-callout ag-green">
<strong>Today's goal:</strong> Add images to an HTML page, write meaningful alternative text, create captions, and use images responsibly.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">02 / YOUR FIRST IMAGE</p>
<h2>Meet the image element</h2>
<p>HTML uses the <code class="ag-inline">&lt;img&gt;</code> element to display an image. Unlike a paragraph or heading, it does not have a separate closing tag.</p>
<div class="ag-code-label ag-html-label">BASIC IMAGE HTML</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;img</span>
  <span class="ag-attr">src</span>=<span class="ag-value">"https://example.com/my-image.jpg"</span>
  <span class="ag-attr">alt</span>=<span class="ag-value">"A red bicycle leaning against a brick wall"</span>
<span class="ag-tag">&gt;</span></code></pre>
<p>Two attributes are especially important:</p>
<ul>
<li><code class="ag-inline">src</code> specifies the image source—the location of the image file.</li>
<li><code class="ag-inline">alt</code> provides a text alternative describing the image's relevant content or purpose.</li>
</ul>
<div class="ag-callout ag-yellow">
<strong>Important:</strong> The example URL above is a placeholder, not a real image. Replace it with a working image URL when testing the code.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">03 / TRY IT IN CODEPEN</p>
<h2>Add a real image to your page</h2>
<p>For this activity, you can use an image hosted online or upload an image through CodePen's supported asset features. Make sure you have permission to use the image and that the source is accessible.</p>
<div class="ag-code-label ag-html-label">COPY AND MODIFY</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;h1&gt;</span><span class="ag-text">A Place That Inspires Me</span><span class="ag-tag">&lt;/h1&gt;</span>

<span class="ag-tag">&lt;p&gt;</span><span class="ag-text">This place inspires my creative work.</span><span class="ag-tag">&lt;/p&gt;</span>

<span class="ag-tag">&lt;img</span>
  <span class="ag-attr">src</span>=<span class="ag-value">"PASTE-YOUR-IMAGE-URL-HERE"</span>
  <span class="ag-attr">alt</span>=<span class="ag-value">"Describe the important details of your image"</span>
<span class="ag-tag">&gt;</span></code></pre>
<h3>Follow these steps</h3>
<ol class="ag-steps">
<li>Choose an image related to your page topic.</li>
<li>Find a usable image URL or use an image asset feature available to you.</li>
<li>Replace the placeholder in the <code class="ag-inline">src</code> attribute.</li>
<li>Replace the sample alt text with an accurate description of your image.</li>
<li>Check the CodePen preview to confirm that the image appears.</li>
</ol>
<div class="ag-callout">
<strong>Troubleshooting:</strong> If the image does not appear, check that the URL points directly to an image file or a valid image resource. A link to a webpage containing an image is not always the same as a direct image URL. Also check for missing quotation marks.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">04 / ALTERNATIVE TEXT</p>
<h2>Write useful alt text</h2>
<p>Alternative text helps people who use screen readers understand an image's relevant information. It can also appear when an image cannot load.</p>
<p>The best alt text depends on the image's purpose and context. Describe what matters to the surrounding content instead of listing every visible detail.</p>
<div class="ag-grid">
<article class="ag-card">
<h3>Too vague</h3>
<p><code class="ag-inline">alt="picture"</code></p>
<p class="ag-muted">This does not tell the visitor anything useful.</p>
</article>
<article class="ag-card">
<h3>More informative</h3>
<p><code class="ag-inline">alt="A cyclist riding along a coastal road"</code></p>
<p class="ag-muted">This communicates the main subject and action.</p>
</article>
<article class="ag-card">
<h3>Consider the context</h3>
<p>If the image documents a particular artwork or event, include the relevant identifying information when it helps explain the content.</p>
</article>
</div>
<h3>Practice: Improve the alt text</h3>
<p>Imagine your page features a photograph of a person painting a large blue mural on a brick wall.</p>
<div class="ag-code-label ag-html-label">WEAK DESCRIPTION</div>
<pre class="ag-code"><code><span class="ag-attr">alt</span>=<span class="ag-value">"photo"</span></code></pre>
<div class="ag-code-label ag-html-label">A MORE USEFUL DESCRIPTION</div>
<pre class="ag-code"><code><span class="ag-attr">alt</span>=<span class="ag-value">"An artist painting a blue mural on a brick wall"</span></code></pre>
<div class="ag-callout ag-green">
<strong>One more thing:</strong> Avoid starting every description with “image of” or “picture of.” Screen readers generally already identify the element as an image. Focus on the information the visitor needs.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">05 / IMAGES WITH CAPTIONS</p>
<h2>Give the image context</h2>
<p>A caption is visible text that appears alongside an image. It can identify the artist, explain what is happening, provide a date, or add context that is not included in the image itself.</p>
<p>HTML provides <code class="ag-inline">&lt;figure&gt;</code> and <code class="ag-inline">&lt;figcaption&gt;</code> to group an image with its caption.</p>
<div class="ag-code-label ag-html-label">IMAGE AND CAPTION</div>
<pre class="ag-code"><code><span class="ag-tag">&lt;figure&gt;</span>
  <span class="ag-tag">&lt;img</span>
    <span class="ag-attr">src</span>=<span class="ag-value">"artwork.jpg"</span>
    <span class="ag-attr">alt</span>=<span class="ag-value">"A layered abstract painting in blue and orange"</span>
  <span class="ag-tag">&gt;</span>

  <span class="ag-tag">&lt;figcaption&gt;</span>
    <span class="ag-text">Abstract study, acrylic and mixed media, 2025.</span>
  <span class="ag-tag">&lt;/figcaption&gt;</span>
<span class="ag-tag">&lt;/figure&gt;</span></code></pre>
<p>This structure is especially useful for art portfolios, photography projects, editorial layouts, and visual research pages.</p>
<div class="ag-callout">
<strong>Remember the difference:</strong> Alt text provides a text alternative for people who may not be able to see the image. A caption is visible to everyone and provides context. They can complement each other, but they do different jobs.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">06 / CONTROL IMAGE SIZE</p>
<h2>Let CSS handle presentation</h2>
<p>HTML describes the content. CSS controls how that content is displayed. For now, we can use a small CSS rule to help images fit their containers.</p>
<div class="ag-code-label ag-css-label">COPY INTO CODEPEN'S CSS PANEL</div>
<pre class="ag-code"><code><span class="ag-tag">img</span> {
  <span class="ag-css-prop">max-width</span>: <span class="ag-css-value">100%</span>;
  <span class="ag-css-prop">height</span>: <span class="ag-css-value">auto</span>;
}</code></pre>
<p>This rule prevents an image from becoming wider than its available container while allowing its height to scale proportionally.</p>
<h3>Try changing the image width</h3>
<p>Once the image is working, try this additional rule:</p>
<div class="ag-code-label ag-css-label">OPTIONAL CSS EXPERIMENT</div>
<pre class="ag-code"><code><span class="ag-tag">img</span> {
  <span class="ag-css-prop">width</span>: <span class="ag-css-value">70%</span>;
  <span class="ag-css-prop">height</span>: <span class="ag-css-value">auto</span>;
}</code></pre>
<p>Change <code class="ag-inline">70%</code> to <code class="ag-inline">50%</code> and then <code class="ag-inline">100%</code>. Observe how the image changes size. We will explore more precise control over layout and spacing in future lessons.</p>
<div class="ag-callout ag-yellow">
<strong>Watch out:</strong> Do not set an arbitrary width and height that distort the image. Keeping <code class="ag-inline">height: auto</code> preserves its proportions in this example.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">07 / IMAGE QUALITY &amp; RESPONSIBLE USE</p>
<h2>Choose images thoughtfully</h2>
<p>Large images can slow down a page. Small images can look blurry when enlarged. The goal is to select an appropriate image and prepare it for the way it will be displayed.</p>
<div class="ag-grid">
<article class="ag-card">
<span class="ag-number">01</span>
<h3>Resolution</h3>
<p>Choose an image with enough detail for its intended display size. Avoid enlarging tiny thumbnails.</p>
</article>
<article class="ag-card">
<span class="ag-number">02</span>
<h3>File size</h3>
<p>Resize oversized images and use appropriate formats to help pages load efficiently.</p>
</article>
<article class="ag-card">
<span class="ag-number">03</span>
<h3>Permissions</h3>
<p>Use your own work, properly licensed images, or resources you have permission to use. Provide attribution when required.</p>
</article>
</div>
<div class="ag-callout ag-green">
<strong>Designer habit:</strong> Keep track of where your images came from. A professional portfolio should respect the rights of photographers, artists, and other creators.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">08 / SYNCHRONOUS CLASS ACTIVITY</p>
<h2>Build a visual story</h2>
<p>During our live session, we will turn a simple text page into a small visual story. You will choose a subject, add an image, write alt text, and create a caption.</p>
<h3>In class</h3>
<ol class="ag-steps">
<li>Open your existing CodePen project from Week 3 or start a new pen.</li>
<li>Choose an image related to your subject.</li>
<li>Add the image using <code class="ag-inline">&lt;img&gt;</code>, including both <code class="ag-inline">src</code> and <code class="ag-inline">alt</code>.</li>
<li>Wrap the image in a <code class="ag-inline">&lt;figure&gt;</code> element.</li>
<li>Add a caption using <code class="ag-inline">&lt;figcaption&gt;</code>.</li>
<li>Add the responsive image CSS rule.</li>
<li>Test the image and check the page at different browser widths.</li>
</ol>
<div class="ag-callout">
<strong>Discussion question:</strong> Does the image help communicate the topic, or is it simply decoration? What would a visitor need to know about the image if they could not see it?
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">09 / INDEPENDENT PROJECT</p>
<h2>Turn your mini-site into a visual experience</h2>
<p>Continue developing the page you started in Week 3. Add visual content that supports your subject and gives visitors more information about your chosen topic.</p>
<div class="ag-grid">
<article class="ag-card">
<span class="ag-number">01</span>
<h3>Select your images</h3>
<p>Choose at least two relevant images that support the subject of your page.</p>
</article>
<article class="ag-card">
<span class="ag-number">02</span>
<h3>Add context</h3>
<p>Write meaningful alt text and add at least one visible caption.</p>
</article>
<article class="ag-card">
<span class="ag-number">03</span>
<h3>Test the page</h3>
<p>Check image loading, proportions, links, and content organization.</p>
</article>
</div>
<h3>Project requirements</h3>
<ul class="ag-checklist">
<li>Continue using the HTML page from Week 3.</li>
<li>Include at least two relevant images.</li>
<li>Provide appropriate alt text for each meaningful image.</li>
<li>Include at least one image with a caption using <code class="ag-inline">&lt;figure&gt;</code> and <code class="ag-inline">&lt;figcaption&gt;</code>.</li>
<li>Keep your existing headings, sections, and navigation links working.</li>
<li>Use the responsive image CSS rule provided in the lesson.</li>
<li>Use images responsibly and follow any applicable licensing or attribution requirements.</li>
<li>Submit your working CodePen link through D2L.</li>
</ul>
<div class="ag-callout ag-yellow">
<strong>Keep it manageable:</strong> You do not need to build a complicated gallery or use advanced CSS. Two well-chosen images with thoughtful descriptions are better than a large collection of images that do not support your content.
    </div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">10 / SUBMISSION &amp; REFLECTION</p>
<h2>Look at your page from a visitor's perspective</h2>
<p>Before submitting, check that your images load, your links still work, and your captions make sense. Then consider the experience of someone visiting your page for the first time.</p>
<h3>Reflection questions</h3>
<ol>
<li>How did your image choices change the way your page communicates its subject?</li>
<li>What is the difference between alt text and a visible caption?</li>
<li>What did you learn about choosing and displaying images on the web?</li>
</ol>
</section>
<section class="ag-section">
<p class="ag-eyebrow">11 / QUICK REFERENCE</p>
<h2>Tags and CSS from this week</h2>
<div class="ag-grid">
<article class="ag-card">
<h3><code>&lt;img&gt;</code></h3>
<p>Embeds an image in the page.</p>
</article>
<article class="ag-card">
<h3><code>src</code></h3>
<p>Specifies the image source.</p>
</article>
<article class="ag-card">
<h3><code>alt</code></h3>
<p>Provides a text alternative for the image.</p>
</article>
<article class="ag-card">
<h3><code>&lt;figure&gt;</code></h3>
<p>Groups an image or other self-contained visual content.</p>
</article>
<article class="ag-card">
<h3><code>&lt;figcaption&gt;</code></h3>
<p>Provides a caption for a figure.</p>
</article>
<article class="ag-card">
<h3><code>max-width: 100%</code></h3>
<p>Helps an image fit within its available container.</p>
</article>
</div>
</section>
<section class="ag-section">
<p class="ag-eyebrow">12 / LOOKING AHEAD</p>
<h2>Next week: Color, CSS &amp; visual identity</h2>
<p>We have built structure, connected sections, and introduced images. Next week, we will begin exploring CSS as a design tool, using color and basic styling to establish a visual identity.</p>
<p>As you browse websites this week, notice how images are cropped, positioned, captioned, and combined with text. Consider what those choices communicate about the brand, artist, or organization behind the site.</p>
</section>
<!-- INSTRUCTOR-ONLY SECTION: REMOVE THIS ENTIRE SECTION BEFORE PUBLISHING -->
<section class="ag-section ag-instructor-only" style="border:2px dashed #c58b19;background:#fffbeb;">
<p class="ag-eyebrow" style="color:#92400e;">Instructor-only material · Remove before publishing</p>
<h2>Instructor demonstration — build the image step by step</h2>
<p>Use the lesson's own image example. Pause after each step and ask students to predict what the browser will display.</p>
<ol class="ag-steps">
<li><strong>Start with the content.</strong> Add the heading and paragraph from Section 03. Ask: what information does the page communicate before an image is added?</li>
<li><strong>Add the image element.</strong> Enter <code class="ag-inline">&lt;img src="..." alt="..."&gt;</code>. Explain that <code class="ag-inline">src</code> locates the image and <code class="ag-inline">alt</code> provides its text alternative.</li>
<li><strong>Test a deliberate mistake.</strong> Remove the closing quotation mark after the image URL or replace the URL with a placeholder. Ask students to diagnose why the image is missing, then restore the quote or paste a working image URL.</li>
<li><strong>Add meaning and context.</strong> Wrap the image in <code class="ag-inline">&lt;figure&gt;</code> and add <code class="ag-inline">&lt;figcaption&gt;</code>. Ask students how the caption differs from alt text.</li>
<li><strong>Apply the CSS.</strong> Add <code class="ag-inline">max-width: 100%; height: auto;</code>. Change the browser width and explain how the image responds.</li>
</ol>
<div class="ag-callout ag-yellow"><strong>Questions to ask:</strong> What happens if <code class="ag-inline">alt</code> is missing? When might an image be decorative? Why should we avoid stretching an image? Does every image need the same kind of caption?</div>
</section>
<!-- END INSTRUCTOR-ONLY SECTION -->
<footer class="ag-footer">
<strong>AMDE 155 · Introduction to Web Design</strong><br/>
    Week 04 — Images &amp; Digital Media<br/>
<span class="ag-muted">Choose images with purpose. Design for every visitor.</span>
</footer>
</div>
{:/nomarkdown}
