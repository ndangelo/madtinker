---
layout: teaching-post
title: AMDE 355 - Multimedia &amp; Experimental Interfaces (Week 11)
slug: amde-355-multimedia-experimental-interfaces-week-11
date: '2026-10-22'
modified: '2026-10-22'
status: published
wordpress_id: 68217
source_url: https://nuggetofjoy.com/amde-355-multimedia-experimental-interfaces-week-11/
author: admin
categories:
- AMDE 355 ADVANCED WEB DESIGN
tags: []
---

<div class="amde-grid-lesson">

<div class="amde-grid-lesson">
<header class="hero">
<p class="eyebrow">AMDE 355 · Advanced Web Design · Week 11</p>
<h1>Multimedia &amp; Experimental Interfaces</h1>
<p class="hero-deck">Designing web experiences that use images, sound, motion, video, and interaction with intention.</p>
<div class="hero-meta">
<span>Lesson + studio practice</span>
<span>Creative coding for designers</span>
<span>Beginner-friendly JavaScript</span>
</div>
</header>
<section class="lesson-card">
<p class="eyebrow">This week</p>
<h2>From a web page to an experience</h2>
<p>So far, we have worked with structure, layout, typography, responsive design, reusable components, navigation, and simple interactions. This week brings those ideas together through multimedia and experimentation.</p>
<p>A multimedia interface is not simply a page with lots of media. It is a designed experience in which images, type, sound, video, movement, and interaction work together to communicate an idea. A strong experience might use one large image, a quiet transition, and a clear interaction. More effects do not automatically make a better design.</p>
<p>We will also continue learning JavaScript in small, understandable steps. The goal is not to become a programmer overnight. The goal is to understand how to make a design respond to a visitor, and to be able to explain what the code is doing.</p>
</section>
<section class="lesson-card">
<p class="eyebrow">Learning objectives</p>
<h2>By the end of this lesson, you should be able to:</h2>
<ul>
<li>Explain how images, audio, video, animation, and interaction can support a design concept.</li>
<li>Choose media formats and behaviors that suit the content and the visitor's context.</li>
<li>Use HTML to place media and CSS to control its presentation.</li>
<li>Use a small amount of JavaScript to respond to a user action.</li>
<li>Explain the JavaScript pattern <strong>find → listen → respond</strong> in your own words.</li>
<li>Make a multimedia interface that remains understandable on mobile devices and usable without a mouse.</li>
<li>Test the experience for readability, accessibility, loading behavior, and unnecessary motion.</li>
</ul>
</section>
<section class="lesson-card">
<p class="eyebrow">Part 1 · Design thinking</p>
<h2>Multimedia should have a purpose</h2>
<p>Before adding an effect, ask what it contributes. Does it reveal information? Establish mood? Help the visitor understand a process? Create a useful sense of feedback? If the answer is simply “it looks cool,” test whether the effect helps the project or distracts from it.</p>
<div class="table-wrap">
MADTINKERBLOCKTOKEN0END
</div>
<p><strong>Design principle:</strong> Make the experience intentional, not merely busy. Every media element should have a reason to be present, and every control should make its result understandable.</p>
</section>
<section class="lesson-card">
<p class="eyebrow">Part 2 · HTML media</p>
<h2>Start with HTML before adding JavaScript</h2>
<p>HTML provides the actual media element. CSS determines its appearance and placement. JavaScript is only needed when the page must respond to a custom action or update something dynamically.</p>
<h3>Example A: A responsive image</h3>
<div class="code-panel">
<div class="code-label">HTML</div>
<pre><code><span class="tok-tag">&lt;figure</span> <span class="tok-attr">class</span>=<span class="tok-string">"feature-image"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;img</span>
    <span class="tok-attr">src</span>=<span class="tok-string">"images/studio-process.jpg"</span>
    <span class="tok-attr">alt</span>=<span class="tok-string">"A close view of a photographic work in progress"</span>
    <span class="tok-attr">loading</span>=<span class="tok-string">"lazy"</span>
  <span class="tok-tag">/&gt;</span>
  <span class="tok-tag">&lt;figcaption&gt;</span>Studio process, 2026<span class="tok-tag">&lt;/figcaption&gt;</span>
<span class="tok-tag">&lt;/figure&gt;</span></code></pre>
</div>
<p><strong>What each part does:</strong> <code>figure</code> groups the image and its caption. <code>img</code> loads the image file. <code>src</code> points to the file. <code>alt</code> provides a text alternative for people who cannot see the image or use a screen reader. <code>loading="lazy"</code> lets the browser delay loading an image until it is closer to the visible area.</p>
<p>Write alt text according to the image's purpose. If the image communicates important content, describe that content briefly. If it is purely decorative and adds no information, an empty alt attribute (<code>alt=""</code>) may be appropriate.</p>
<h3>Example B: A video with controls</h3>
<div class="code-panel">
<div class="code-label">HTML</div>
<pre><code><span class="tok-tag">&lt;video</span>
  <span class="tok-attr">controls</span>
  <span class="tok-attr">playsinline</span>
  <span class="tok-attr">poster</span>=<span class="tok-string">"images/video-poster.jpg"</span>
<span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;source</span> <span class="tok-attr">src</span>=<span class="tok-string">"media/studio-film.mp4"</span> <span class="tok-attr">type</span>=<span class="tok-string">"video/mp4"</span> <span class="tok-tag">/&gt;</span>
  Your browser does not support this video.
<span class="tok-tag">&lt;/video&gt;</span></code></pre>
</div>
<p>The <code>controls</code> attribute gives the visitor playback controls. <code>playsinline</code> helps the video play within the page on supported mobile browsers. <code>poster</code> supplies an image to display before playback. The <code>source</code> element identifies the video file and its format.</p>
<p>Do not force visitors to watch a video before they can use the page. Avoid autoplay with sound. If a video contains meaningful speech or sound, provide captions or an appropriate text alternative.</p>
<h3>Example C: Optional audio</h3>
<div class="code-panel">
<div class="code-label">HTML</div>
<pre><code><span class="tok-tag">&lt;audio</span> <span class="tok-attr">controls</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;source</span> <span class="tok-attr">src</span>=<span class="tok-string">"media/field-recording.mp3"</span> <span class="tok-attr">type</span>=<span class="tok-string">"audio/mpeg"</span> <span class="tok-tag">/&gt;</span>
  Your browser does not support this audio.
<span class="tok-tag">&lt;/audio&gt;</span></code></pre>
</div>
<p>The built-in audio player is often the simplest and most reliable solution. You do not need JavaScript just to play an audio file. Use JavaScript only if you have a clear design reason for a custom control or a changing interface.</p>
</section>
<section class="lesson-card">
<p class="eyebrow">Part 3 · CSS presentation</p>
<h2>Make media fit the layout</h2>
<p>Images and videos often arrive in different sizes. CSS helps them behave consistently within a designed composition.</p>
<div class="code-panel">
<div class="code-label">CSS</div>
<pre><code><span class="tok-selector">.feature-image img</span> {
  <span class="tok-prop">display</span>: <span class="tok-value">block</span>;
  <span class="tok-prop">width</span>: <span class="tok-num">100%</span>;
  <span class="tok-prop">aspect-ratio</span>: <span class="tok-num">16</span> / <span class="tok-num">9</span>;
  <span class="tok-prop">object-fit</span>: <span class="tok-value">cover</span>;
  <span class="tok-prop">border-radius</span>: <span class="tok-num">12px</span>;
}

<span class="tok-selector">.feature-image figcaption</span> {
  <span class="tok-prop">margin-top</span>: <span class="tok-num">0.75rem</span>;
  <span class="tok-prop">font-size</span>: <span class="tok-num">0.9rem</span>;
  <span class="tok-prop">color</span>: <span class="tok-value">#64748b</span>;
}</code></pre>
</div>
<p><strong>In plain English:</strong> Select the image inside the feature figure. Make it a block, fill the available width, reserve a 16:9 shape, and crop the image to fill that shape. Then style the caption separately.</p>
<ul>
<li><code>width: 100%</code> means “use the full width of the parent container.”</li>
<li><code>aspect-ratio: 16 / 9</code> creates a widescreen-shaped area.</li>
<li><code>object-fit: cover</code> fills the area without stretching the image, cropping some edges if needed.</li>
<li>If you need to show the entire image, try <code>object-fit: contain</code> instead. This may leave empty space around it.</li>
</ul>
<p>For a portrait, artwork, or experimental photograph, do not automatically force a widescreen crop. Choose an aspect ratio that supports the work. The code is a starting point, not a rule that every image must follow.</p>
</section>
<section class="lesson-card">
<p class="eyebrow">Part 4 · JavaScript, step by step</p>
<h2>JavaScript gives the interface a response</h2>
<p>JavaScript is a language that can read and change the page while someone is using it. For this lesson, we will work with a very small set of ideas. You can understand these ideas without learning every part of the language.</p>
<div class="callout">
<strong>Remember the three steps:</strong><br/>
      1. <strong>Find</strong> the element you want to work with.<br/>
      2. <strong>Listen</strong> for an action, such as a click.<br/>
      3. <strong>Respond</strong> by changing text, showing content, or changing a class.
    </div>
<h3>What is an element?</h3>
<p>An element is a piece of the page described by HTML: a button, paragraph, image, video, heading, or container. JavaScript can find an element and then interact with it.</p>
<h3>What is a selector?</h3>
<p>A selector is a way to identify an element. If the HTML says <code>id="sound-button"</code>, JavaScript can find it with <code>document.querySelector("#sound-button")</code>. The hash symbol <code>#</code> means an ID. A dot, as in <code>".media-card"</code>, means a class.</p>
<h3>Example 1: Click a button to change a caption</h3>
<div class="code-panel">
<div class="code-label">HTML — the parts on the page</div>
<pre><code><span class="tok-tag">&lt;p</span> <span class="tok-attr">id</span>=<span class="tok-string">"media-caption"</span><span class="tok-tag">&gt;</span>
  This work explores movement and memory.
<span class="tok-tag">&lt;/p&gt;</span>

<span class="tok-tag">&lt;button</span> <span class="tok-attr">id</span>=<span class="tok-string">"caption-button"</span><span class="tok-tag">&gt;</span>
  Reveal another note
<span class="tok-tag">&lt;/button&gt;</span></code></pre>
</div>
<div class="code-panel">
<div class="code-label">JavaScript — what happens after the click</div>
<pre><code><span class="tok-key">const</span> captionButton = document.querySelector(<span class="tok-string">"#caption-button"</span>);
<span class="tok-key">const</span> caption = document.querySelector(<span class="tok-string">"#media-caption"</span>);

captionButton.addEventListener(<span class="tok-string">"click"</span>, function () {
  caption.textContent = <span class="tok-string">"The image was made using a slow shutter speed."</span>;
});</code></pre>
</div>
<p><strong>Read each line:</strong></p>
<ol>
<li><code>const captionButton = ...</code> finds the button and gives it the name <code>captionButton</code>. <code>const</code> creates a named variable we can refer to later.</li>
<li><code>document.querySelector("#caption-button")</code> means “look through this web page and find the element with this ID.”</li>
<li>The second <code>const</code> finds the paragraph and names it <code>caption</code>.</li>
<li><code>captionButton.addEventListener("click", ...)</code> tells the browser to wait for a click on the button.</li>
<li><code>function () { ... }</code> contains the instructions that should run after the click.</li>
<li><code>caption.textContent = ...</code> replaces the paragraph's text with the new sentence.</li>
</ol>
<p>Notice that the selector names match the IDs in the HTML exactly. If the HTML ID is <code>caption-button</code> but the JavaScript searches for <code>#caption-btn</code>, the browser will not find the button.</p>
<h3>Example 2: Toggle a media note open and closed</h3>
<p>Sometimes a visitor should be able to choose whether to see more information. A toggle is an interaction that switches between two states: open and closed.</p>
<div class="code-panel">
<div class="code-label">HTML</div>
<pre><code><span class="tok-tag">&lt;button</span>
  <span class="tok-attr">id</span>=<span class="tok-string">"note-toggle"</span>
  <span class="tok-attr">aria-expanded</span>=<span class="tok-string">"false"</span>
  <span class="tok-attr">aria-controls</span>=<span class="tok-string">"media-note"</span>
<span class="tok-tag">&gt;</span>
  Show the artist's note
<span class="tok-tag">&lt;/button&gt;</span>

<span class="tok-tag">&lt;div</span> <span class="tok-attr">id</span>=<span class="tok-string">"media-note"</span> hidden<span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;p&gt;</span>
    This sequence combines still photographs with movement studies.
  <span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;/div&gt;</span></code></pre>
</div>
<div class="code-panel">
<div class="code-label">JavaScript</div>
<pre><code><span class="tok-key">const</span> noteButton = document.querySelector(<span class="tok-string">"#note-toggle"</span>);
<span class="tok-key">const</span> mediaNote = document.querySelector(<span class="tok-string">"#media-note"</span>);

noteButton.addEventListener(<span class="tok-string">"click"</span>, function () {
  <span class="tok-key">const</span> shouldOpen = mediaNote.hidden;

  mediaNote.hidden = !shouldOpen;
  noteButton.setAttribute(<span class="tok-string">"aria-expanded"</span>, shouldOpen);

  <span class="tok-key">if</span> (shouldOpen) {
    noteButton.textContent = <span class="tok-string">"Hide the artist's note"</span>;
  } <span class="tok-key">else</span> {
    noteButton.textContent = <span class="tok-string">"Show the artist's note"</span>;
  }
});</code></pre>
</div>
<p><strong>How the toggle works:</strong></p>
<ol>
<li>The button and note panel are found by their IDs.</li>
<li>When the button is clicked, the code checks whether the panel is hidden.</li>
<li><code>shouldOpen</code> is a name for the answer to that question: should the panel open now?</li>
<li><code>mediaNote.hidden = !shouldOpen</code> sets the panel's hidden state to the opposite of <code>shouldOpen</code>. If it should open, <code>hidden</code> becomes false. If it should close, <code>hidden</code> becomes true.</li>
<li><code>setAttribute()</code> updates <code>aria-expanded</code>, which communicates the state to assistive technology.</li>
<li>The <code>if</code> statement chooses the correct button label. If the note opened, the button now offers to hide it. Otherwise, it offers to show it.</li>
</ol>
<p><strong>What does <code>if</code> mean?</strong> It means “if this condition is true, do this.” The <code>else</code> part means “otherwise, do this other thing.” You will see this pattern in many interactions.</p>
<h3>Example 3: Add a visual state with a CSS class</h3>
<p>Sometimes the content does not need to appear or disappear. You may want a button to change a visual state, such as switching a media panel into a focused presentation. CSS defines the look; JavaScript switches the class on or off.</p>
<div class="code-panel">
<div class="code-label">HTML</div>
<pre><code><span class="tok-tag">&lt;section</span> <span class="tok-attr">id</span>=<span class="tok-string">"focus-panel"</span> <span class="tok-attr">class</span>=<span class="tok-string">"media-panel"</span><span class="tok-tag">&gt;</span>
  <span class="tok-tag">&lt;h2&gt;</span>Movement Study<span class="tok-tag">&lt;/h2&gt;</span>
  <span class="tok-tag">&lt;p&gt;</span>Explore the relationship between blur and gesture.<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;/section&gt;</span>

<span class="tok-tag">&lt;button</span> <span class="tok-attr">id</span>=<span class="tok-string">"focus-button"</span><span class="tok-tag">&gt;</span>
  Toggle focus mode
<span class="tok-tag">&lt;/button&gt;</span></code></pre>
</div>
<div class="code-panel">
<div class="code-label">CSS</div>
<pre><code><span class="tok-selector">.media-panel</span> {
  <span class="tok-prop">padding</span>: <span class="tok-num">1.5rem</span>;
  <span class="tok-prop">background</span>: <span class="tok-value">#f3f4f6</span>;
  <span class="tok-prop">transition</span>: <span class="tok-value">background-color 180ms ease</span>;
}

<span class="tok-selector">.media-panel.is-focused</span> {
  <span class="tok-prop">background</span>: <span class="tok-value">#ecfccb</span>;
  <span class="tok-prop">outline</span>: <span class="tok-num">2px</span> <span class="tok-value">solid</span> <span class="tok-value">#4d7c0f</span>;
}</code></pre>
</div>
<div class="code-panel">
<div class="code-label">JavaScript</div>
<pre><code><span class="tok-key">const</span> focusButton = document.querySelector(<span class="tok-string">"#focus-button"</span>);
<span class="tok-key">const</span> focusPanel = document.querySelector(<span class="tok-string">"#focus-panel"</span>);

focusButton.addEventListener(<span class="tok-string">"click"</span>, function () {
  focusPanel.classList.toggle(<span class="tok-string">"is-focused"</span>);
});</code></pre>
</div>
<p><strong>What does <code>classList.toggle()</code> do?</strong> It checks for the named class. If the class is missing, it adds it. If the class is already there, it removes it. In this example, CSS notices the class and changes the panel's appearance.</p>
<p>Think of it this way: JavaScript does not need to know what the color should be. JavaScript only adds or removes the class. CSS is responsible for the visual design. Keeping those jobs separate makes the code easier to change and maintain.</p>
</section>
<section class="lesson-card">
<p class="eyebrow">Part 5 · Motion with care</p>
<h2>Animation should communicate, not compete</h2>
<p>Motion can direct attention, suggest a change, or give an interface a sense of rhythm. But constant movement can distract visitors, make text harder to follow, and cause discomfort for people who are sensitive to motion.</p>
<div class="code-panel">
<div class="code-label">CSS — a small, purposeful transition</div>
<pre><code><span class="tok-selector">.media-card</span> {
  <span class="tok-prop">transform</span>: <span class="tok-value">translateY(0)</span>;
  <span class="tok-prop">transition</span>: <span class="tok-value">transform 180ms ease, box-shadow 180ms ease</span>;
}

<span class="tok-selector">.media-card:hover</span> {
  <span class="tok-prop">transform</span>: <span class="tok-value">translateY(-3px)</span>;
}

<span class="tok-key">@media</span> (<span class="tok-prop">prefers-reduced-motion</span>: <span class="tok-value">reduce</span>) {
  <span class="tok-selector">.media-card</span> {
    <span class="tok-prop">transition</span>: <span class="tok-value">none</span>;
  }
}</code></pre>
</div>
<p>This example gives a card a small lift when a mouse pointer hovers over it. The reduced-motion media query removes the transition for visitors who have asked their device to reduce motion.</p>
<p>Do not rely on hover alone. Touchscreen users do not hover in the same way, and keyboard users need visible focus states. If an effect communicates important information, make that information available in another way too.</p>
<p><strong>JavaScript note:</strong> You do not need JavaScript for every animation. CSS is often the simplest tool for visual transitions. Use JavaScript when the page needs to respond to an action or manage a state that CSS alone cannot conveniently handle.</p>
</section>
<section class="lesson-card">
<p class="eyebrow">Part 6 · Troubleshooting</p>
<h2>When your JavaScript does not work</h2>
<ol>
<li><strong>Check the IDs.</strong> The HTML <code>id</code> and the JavaScript selector must match exactly, including hyphens and spelling.</li>
<li><strong>Check the selector symbol.</strong> Use <code>#name</code> for an ID and <code>.name</code> for a class.</li>
<li><strong>Check script placement.</strong> If the script runs before the HTML element exists, JavaScript may not find it. Put the script near the end of the body, or load an external script with <code>defer</code>.</li>
<li><strong>Check the browser console.</strong> Right-click the page, choose Inspect, and select Console. Red error messages can point to a spelling mistake or a missing element.</li>
<li><strong>Check for missing punctuation.</strong> Parentheses, quotation marks, curly braces, and semicolons must be in the right places. JavaScript examples are sensitive to syntax.</li>
<li><strong>Test one small step at a time.</strong> First confirm the button appears. Then confirm the selector matches. Then add the click listener. Finally add the response.</li>
</ol>
<div class="callout">
<strong>Useful debugging question:</strong> “Which of the three steps is failing — find, listen, or respond?” If the element cannot be found, the event will not work. If the event is not attached, clicking does nothing. If the event runs but the result is wrong, inspect the response code.
    </div>
</section>
<section class="lesson-card">
<p class="eyebrow">Studio assignment</p>
<h2>Build a multimedia experiment</h2>
<p>Create a single-page multimedia experience based on one visual idea, mood, process, or theme. You may use photography, illustration, video, audio, typography, or a combination of media. Keep the layout intentional and the interaction easy to understand.</p>
<h3>Required components</h3>
<ul>
<li>A clear title and a short introduction that establish the concept.</li>
<li>At least two media elements, such as images, a video, or an audio player.</li>
<li>Captions or supporting text where they help explain the work.</li>
<li>One purposeful interaction built with JavaScript: for example, reveal a note, change a caption, or toggle a visual state.</li>
<li>Responsive layout behavior for desktop and mobile.</li>
<li>Controls with clear labels and a usable keyboard focus state.</li>
<li>A short explanation of why the media and interaction support the concept.</li>
</ul>
<h3>Suggested workflow</h3>
<ol>
<li>Write one sentence describing the idea of your experience.</li>
<li>Select media that supports the idea; avoid adding assets just to meet a count.</li>
<li>Sketch the layout before writing code.</li>
<li>Build the HTML structure and confirm that the media loads.</li>
<li>Style the layout with CSS and check it at a narrow viewport.</li>
<li>Add one small JavaScript interaction using find → listen → respond.</li>
<li>Test the interaction, keyboard access, captions, image alternatives, and reduced-motion behavior.</li>
<li>Ask a classmate to use the page without verbal instructions. Watch where they hesitate.</li>
<li>Make at least one revision based on the test.</li>
</ol>
</section>
<section class="lesson-card">
<p class="eyebrow">Reflection + submission checklist</p>
<h2>Before you submit</h2>
<ul>
<li>The design communicates one clear idea.</li>
<li>Media choices feel intentional and do not overwhelm the content.</li>
<li>Images have appropriate alt text; meaningful video has captions or an equivalent alternative.</li>
<li>Video and audio do not unexpectedly start with sound.</li>
<li>The page works at desktop and mobile widths.</li>
<li>The JavaScript interaction works more than once and can be understood from its label.</li>
<li>The button or control can be reached and used with a keyboard.</li>
<li>Motion is restrained and reduced-motion preferences are considered.</li>
<li>The browser console has been checked for errors.</li>
<li>You can explain what each line of your JavaScript example does in plain English.</li>
</ul>
<p><strong>Reflection prompt:</strong> What did multimedia allow you to communicate that a static layout could not? What did you remove or simplify during testing, and why?</p>
</section>
<div style="border:2px dashed #d97706;border-radius:16px;padding:20px;background:#fffbeb;margin:24px 0;">
<p style="margin:0 0 6px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:900;color:#92400e;">Instructor-only material · Remove before publishing to students</p>
<h2 style="margin:0 0 8px;color:#78350f;">Instructor Layout Code — Step by Step</h2>
<p><strong>Teaching priority:</strong> Keep the JavaScript instruction slow, explicit, and concrete. Students should understand the behavior they are building before they copy code. Do not introduce multiple new concepts at once. Begin with the caption-change example, narrate the find → listen → respond pattern, and then move to the toggle only when the class can explain the first example.</p>
<h3>Instructor demonstration 1: Establish the HTML target</h3>
<p>Ask students to point to the element that should change. In this example it is the paragraph. Then ask how the script will identify it. The answer is the paragraph's ID, <code>media-caption</code>. Explain that the hash in <code>#media-caption</code> tells <code>querySelector()</code> to find an ID.</p>
<div class="code-panel">
<div class="code-label">HTML to display in class</div>
<pre><code><span class="tok-tag">&lt;p</span> <span class="tok-attr">id</span>=<span class="tok-string">"media-caption"</span><span class="tok-tag">&gt;</span>
  This work explores movement and memory.
<span class="tok-tag">&lt;/p&gt;</span>
<span class="tok-tag">&lt;button</span> <span class="tok-attr">id</span>=<span class="tok-string">"caption-button"</span><span class="tok-tag">&gt;</span>
  Reveal another note
<span class="tok-tag">&lt;/button&gt;</span></code></pre>
</div>
<h3>Instructor demonstration 2: Explain each JavaScript line out loud</h3>
<div class="code-panel">
<div class="code-label">Annotated instructor version</div>
<pre><code><span class="tok-comment">// FIND: store a reference to the button.</span>
<span class="tok-key">const</span> captionButton = document.querySelector(<span class="tok-string">"#caption-button"</span>);

<span class="tok-comment">// FIND: store a reference to the paragraph.</span>
<span class="tok-key">const</span> caption = document.querySelector(<span class="tok-string">"#media-caption"</span>);

<span class="tok-comment">// LISTEN: wait until the button is clicked.</span>
captionButton.addEventListener(<span class="tok-string">"click"</span>, function () {

  <span class="tok-comment">// RESPOND: replace the paragraph's text.</span>
  caption.textContent = <span class="tok-string">"The image was made using a slow shutter speed."</span>;

});</code></pre>
</div>
<p>Explain that <code>const</code> is not a special action; it creates a name for something the code will use. <code>document</code> refers to the current page. <code>querySelector()</code> searches for an element. <code>addEventListener()</code> waits for an event. The word <code>click</code> names the event. The function holds the instructions that should run when the click happens. <code>textContent</code> changes the text inside the paragraph.</p>
<p>Use a three-column board or slide: <strong>FIND</strong> (the two selectors), <strong>LISTEN</strong> (the click event), and <strong>RESPOND</strong> (the text change). Ask students to identify which line belongs in each column. This checks comprehension without asking them to memorize terms in isolation.</p>
<h3>Instructor demonstration 3: Add a simple condition</h3>
<p>Before showing the toggle code, explain that the panel has two states: hidden and visible. A condition lets the code choose which action to take. The browser's built-in <code>hidden</code> property can be true or false. True means the element is hidden; false means it is shown.</p>
<div class="code-panel">
<div class="code-label">Toggle code with teaching comments</div>
<pre><code><span class="tok-key">const</span> noteButton = document.querySelector(<span class="tok-string">"#note-toggle"</span>);
<span class="tok-key">const</span> mediaNote = document.querySelector(<span class="tok-string">"#media-note"</span>);

noteButton.addEventListener(<span class="tok-string">"click"</span>, function () {

  <span class="tok-comment">// If the note is hidden now, shouldOpen will be true.</span>
  <span class="tok-key">const</span> shouldOpen = mediaNote.hidden;

  <span class="tok-comment">// Set hidden to the opposite of shouldOpen.</span>
  mediaNote.hidden = !shouldOpen;

  <span class="tok-comment">// Tell assistive technology the current open/closed state.</span>
  noteButton.setAttribute(<span class="tok-string">"aria-expanded"</span>, shouldOpen);

  <span class="tok-comment">// Choose a button label based on the new state.</span>
  <span class="tok-key">if</span> (shouldOpen) {
    noteButton.textContent = <span class="tok-string">"Hide the artist's note"</span>;
  } <span class="tok-key">else</span> {
    noteButton.textContent = <span class="tok-string">"Show the artist's note"</span>;
  }
});</code></pre>
</div>
<p>Walk through one click at a time. Initially, the panel has the HTML attribute <code>hidden</code>, so <code>mediaNote.hidden</code> is true. That makes <code>shouldOpen</code> true. The line <code>mediaNote.hidden = !shouldOpen</code> assigns false, so the browser displays the panel. The button label changes to “Hide the artist's note.” On the next click, the panel is visible, so <code>shouldOpen</code> becomes false. The same lines reverse the state.</p>
<p>Students often find <code>!</code> confusing. Say “not.” The expression <code>!true</code> is false, and <code>!false</code> is true. Do not introduce more complex Boolean logic unless it is necessary for the assignment.</p>
<h3>Instructor troubleshooting routine</h3>
<ol>
<li>Ask the student to show the HTML ID.</li>
<li>Ask the student to locate the corresponding JavaScript selector.</li>
<li>Compare the two character by character.</li>
<li>Check whether the script runs after the HTML has loaded.</li>
<li>Open the browser console and read the first error, not just the last one.</li>
<li>Temporarily reduce the script to one selector and one event listener, then rebuild it step by step.</li>
</ol>
<p>A common error is trying to call <code>addEventListener()</code> on <code>null</code>. This usually means the selector did not find an element. It does not necessarily mean the event listener syntax itself is wrong. Check spelling, IDs, and script placement first.</p>
<h3>Instructor discussion prompts</h3>
<ul>
<li>What purpose does the media serve in the concept?</li>
<li>Could the visitor understand the content if the video or audio failed to load?</li>
<li>Does the interaction reveal useful information or merely add a decorative step?</li>
<li>Can the interaction be used with a keyboard?</li>
<li>What does the visitor expect the button to do, based on its label?</li>
<li>Can the student explain each JavaScript line without saying only “it makes it work”?</li>
</ul>
<h3>Suggested class pacing</h3>
<ul>
<li><strong>10 minutes:</strong> Review media examples and discuss intentional use of sound, image, and motion.</li>
<li><strong>15 minutes:</strong> Demonstrate semantic HTML for image, video, and audio; discuss alt text, captions, and controls.</li>
<li><strong>15 minutes:</strong> Walk through the caption-change JavaScript example line by line.</li>
<li><strong>10 minutes:</strong> Demonstrate the open/close toggle and explain true/false in context.</li>
<li><strong>Studio time:</strong> Students sketch, build, test, and revise their multimedia experiment.</li>
<li><strong>Closing:</strong> Ask students to explain their interaction using find → listen → respond and name one revision made after testing.</li>
</ul>
</div>
</div></div>
