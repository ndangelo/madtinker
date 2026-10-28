---
title: Box-sizing and @ Media Screen
slug: box-sizing-and-media-screen
date: '2026-10-20'
modified: '2026-10-20'
status: published
wordpress_id: 68147
source_url: https://nuggetofjoy.com/box-sizing-and-media-screen/
author: admin
categories:
- Projects
tags: []
migration:
  format: hybrid-markdown
  original_html: original-html/68147.html
  post_css: styles/posts/68147.css
  needs_review: true
---

<div class="amde155-box-lesson">
<main class="page">
<header class="hero">
<div class="eyebrow">AMDE 155 · Introduction to Web Design</div>
<h1>Box-Sizing +<br/>Responsive CSS</h1>
<p>Learn why boxes sometimes become wider than expected, how <code>box-sizing: border-box</code> makes dimensions easier to control, and how <code>@media screen</code> rules help a page adapt to different screen sizes.</p>
<div class="chips">
<span class="chip">HTML + CSS</span><span class="chip">Box model</span><span class="chip">Media queries</span><span class="chip">CodePen lab</span>
</div>
</header>
<section class="section">
<h2>Start here / Your roadmap</h2>
<div class="grid">
<article class="card"><div class="number">1</div><h3>Understand the box</h3><p>Learn how content, padding, borders, and margins affect an element.</p></article>
<article class="card"><div class="number">2</div><h3>Fix the sizing</h3><p>Use <code>box-sizing: border-box</code> to make widths more predictable.</p></article>
<article class="card"><div class="number">3</div><h3>Adapt to screens</h3><p>Use <code>@media screen</code> to change styles at a chosen viewport width.</p></article>
<article class="card"><div class="number">4</div><h3>Build and test</h3><p>Use one HTML panel in CodePen, then resize the preview to test your work.</p></article>
</div>
<div class="callout orange"><strong>Today's goal:</strong> Create a simple card layout that fits neatly on a large screen and remains readable on a phone.</div>
</section>
<section class="section">
<h2>01 / What is the CSS box model?</h2>
<p>Browsers treat each HTML element as a box. That box is made up of content, padding, border, and margin.</p>
<div class="grid">
<article class="card"><h3>Content</h3><p>The text, image, or other material inside an element. By default, <code>width</code> and <code>height</code> refer to this area.</p></article>
<article class="card"><h3>Padding</h3><p>The space between the content and its border. Padding is inside the border.</p></article>
<article class="card"><h3>Border</h3><p>The visible edge around the content and padding.</p></article>
<article class="card"><h3>Margin</h3><p>The space outside the border that separates this element from others.</p></article>
</div>
<div class="callout"><strong>Remember:</strong> With the default <code>content-box</code> model, padding and borders are added to the declared width. This can make an element wider than you planned.</div>
</section>
<section class="section">
<h2>02 / Why box-sizing matters</h2>
<p>Imagine you set an element's width to 300 pixels, add 20 pixels of padding on each side, and add a 5-pixel border on each side.</p>
<div class="compare">
<div class="compare-panel">
<h3>Default: content-box</h3><p>Declared width: 300px</p>
<div class="measure content">300px content<br/>+ padding + borders</div>
<p><strong>Total outside width: 350px</strong></p><p class="muted">300 + 40 padding + 10 border = 350px.</p>
</div>
<div class="compare-panel">
<h3>With border-box</h3><p>Declared width: 300px</p>
<div class="measure border">300px total width<br/>includes padding + borders</div>
<p><strong>Total outside width: 300px</strong></p><p class="muted">The content area shrinks to make room inside the 300px total.</p>
</div>
</div>
<p class="muted">These are illustrations of the two sizing models. The important difference is what the declared width includes.</p>
</section>
<section class="section">
<h2>03 / The one-line fix</h2>
<p>A common best practice is to apply <code>box-sizing: border-box</code> to every element, including pseudo-elements.</p>
<pre class="code"><code><span class="o">*,</span>
<span class="o">*</span><span class="p">::</span><span class="nd">before</span><span class="o">,</span>
<span class="o">*</span><span class="p">::</span><span class="nd">after</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="k">box-sizing</span><span class="p">:</span><span class="w"> </span><span class="kc">border-box</span><span class="p">;</span>
<span class="p">}</span>
</code></pre>
<p>The <code>*</code> selector means “all elements.” The pseudo-element selectors help ensure generated content follows the same sizing rule.</p>
<div class="callout orange"><strong>Why use it?</strong> If you set an element to 300px wide, its padding and border fit within those 300 pixels. That makes cards and columns easier to size.</div>
</section>
<section class="section">
<h2>04 / What is @media screen?</h2>
<p>A media query lets you apply CSS only when a condition matches. The <code>screen</code> media type targets screen-based devices and displays. A <code>max-width</code> condition can apply different styles when the viewport becomes narrow.</p>
<pre class="code"><code><span class="c">/* Default: three columns on a wider screen */</span>
<span class="p">.</span><span class="nc">card-grid</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="k">display</span><span class="p">:</span><span class="w"> </span><span class="k">grid</span><span class="p">;</span>
<span class="w">  </span><span class="k">grid-template-columns</span><span class="p">:</span><span class="w"> </span><span class="nf">repeat</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span><span class="w"> </span><span class="nf">minmax</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="w"> </span><span class="mi">1</span><span class="n">fr</span><span class="p">));</span>
<span class="w">  </span><span class="k">gap</span><span class="p">:</span><span class="w"> </span><span class="mi">20</span><span class="kt">px</span><span class="p">;</span>
<span class="p">}</span>

<span class="c">/* At 600px wide or narrower, use one column */</span>
<span class="p">@</span><span class="k">media</span><span class="w"> </span><span class="nt">screen</span><span class="w"> </span><span class="nt">and</span><span class="w"> </span><span class="o">(</span><span class="nt">max-width</span><span class="o">:</span><span class="w"> </span><span class="nt">600px</span><span class="o">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="p">.</span><span class="nc">card-grid</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="k">grid-template-columns</span><span class="p">:</span><span class="w"> </span><span class="mi">1</span><span class="n">fr</span><span class="p">;</span>
<span class="w">  </span><span class="p">}</span>
<span class="p">}</span>
</code></pre>
<div class="grid">
<article class="card"><h3>Default rules</h3><p>The styles outside the media query apply unless a matching rule overrides them.</p></article>
<article class="card"><h3><code>max-width: 600px</code></h3><p>The styles inside apply when the viewport is 600 pixels wide or narrower.</p></article>
<article class="card"><h3><code>1fr</code></h3><p>The cards become one column, giving each card the available width.</p></article>
</div>
<div class="callout"><strong>Key idea:</strong> Responsive design is not just shrinking everything. Decide what should rearrange, resize, or stack on a smaller screen.</div>
</section>
<section class="section">
<h2>05 / See a responsive layout</h2>
<p>This sample layout starts with three cards. At tablet size it changes to two columns, and on a phone it becomes one column.</p>
<div class="demo-grid">
<div class="demo-card">Card 01<br/>Featured project</div>
<div class="demo-card">Card 02<br/>Project notes</div>
<div class="demo-card">Card 03<br/>More details</div>
</div>
<p class="muted">Resize your browser window to see this lesson page's cards reflow. The example above is a visual reference for the assignment you will build in CodePen.</p>
</section>
<section class="section">
<h2>06 / Your CodePen activity</h2>
<div class="card">
<h3>Build a responsive three-card page</h3>
<p>Work entirely in CodePen. Use the HTML editor only for this exercise: put your page structure inside the HTML panel and place CSS inside a <code>&lt;style&gt;</code> element in the same panel.</p>
<ol class="steps">
<li>Open CodePen and create a new Pen.</li>
<li>In the HTML panel, paste the starter code below.</li>
<li>Change the page title, heading, card titles, and descriptions to make the page your own.</li>
<li>Keep the universal <code>box-sizing</code> rule and the two media queries.</li>
<li>Resize the preview and check the layout at wide, medium, and narrow widths.</li>
<li>Fix any overflow, cramped text, or uneven spacing before submitting.</li>
</ol>
</div>
<h3>Starter code / paste everything into CodePen's HTML panel</h3>
<pre class="code"><code><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="p">&lt;</span><span class="nt">html</span> <span class="na">lang</span><span class="o">=</span><span class="s">"en"</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">head</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">charset</span><span class="o">=</span><span class="s">"UTF-8"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">"viewport"</span> <span class="na">content</span><span class="o">=</span><span class="s">"width=device-width, initial-scale=1.0"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">title</span><span class="p">&gt;</span>My Responsive Cards<span class="p">&lt;/</span><span class="nt">title</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">style</span><span class="p">&gt;</span>
<span class="w">    </span><span class="o">*,</span>
<span class="w">    </span><span class="o">*</span><span class="p">::</span><span class="nd">before</span><span class="o">,</span>
<span class="w">    </span><span class="o">*</span><span class="p">::</span><span class="nd">after</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="k">box-sizing</span><span class="p">:</span><span class="w"> </span><span class="kc">border-box</span><span class="p">;</span>
<span class="w">    </span><span class="p">}</span>

<span class="w">    </span><span class="nt">body</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="k">margin</span><span class="p">:</span><span class="w"> </span><span class="mi">0</span><span class="p">;</span>
<span class="w">      </span><span class="k">padding</span><span class="p">:</span><span class="w"> </span><span class="mi">24</span><span class="kt">px</span><span class="p">;</span>
<span class="w">      </span><span class="k">font-family</span><span class="p">:</span><span class="w"> </span><span class="n">Arial</span><span class="p">,</span><span class="w"> </span><span class="kc">sans-serif</span><span class="p">;</span>
<span class="w">      </span><span class="k">background</span><span class="p">:</span><span class="w"> </span><span class="mh">#f4f1eb</span><span class="p">;</span>
<span class="w">      </span><span class="k">color</span><span class="p">:</span><span class="w"> </span><span class="mh">#182033</span><span class="p">;</span>
<span class="w">    </span><span class="p">}</span>

<span class="w">    </span><span class="p">.</span><span class="nc">page</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="k">max-width</span><span class="p">:</span><span class="w"> </span><span class="mi">1000</span><span class="kt">px</span><span class="p">;</span>
<span class="w">      </span><span class="k">margin</span><span class="p">:</span><span class="w"> </span><span class="mi">0</span><span class="w"> </span><span class="kc">auto</span><span class="p">;</span>
<span class="w">    </span><span class="p">}</span>

<span class="w">    </span><span class="nt">h1</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="k">font-size</span><span class="p">:</span><span class="w"> </span><span class="nf">clamp</span><span class="p">(</span><span class="mi">2</span><span class="kt">rem</span><span class="p">,</span><span class="w"> </span><span class="mi">5</span><span class="kt">vw</span><span class="p">,</span><span class="w"> </span><span class="mf">3.5</span><span class="kt">rem</span><span class="p">);</span>
<span class="w">      </span><span class="k">line-height</span><span class="p">:</span><span class="w"> </span><span class="mf">1.05</span><span class="p">;</span>
<span class="w">    </span><span class="p">}</span>

<span class="w">    </span><span class="p">.</span><span class="nc">card-grid</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="k">display</span><span class="p">:</span><span class="w"> </span><span class="k">grid</span><span class="p">;</span>
<span class="w">      </span><span class="k">grid-template-columns</span><span class="p">:</span><span class="w"> </span><span class="nf">repeat</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span><span class="w"> </span><span class="nf">minmax</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="w"> </span><span class="mi">1</span><span class="n">fr</span><span class="p">));</span>
<span class="w">      </span><span class="k">gap</span><span class="p">:</span><span class="w"> </span><span class="mi">18</span><span class="kt">px</span><span class="p">;</span>
<span class="w">    </span><span class="p">}</span>

<span class="w">    </span><span class="p">.</span><span class="nc">card</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="k">padding</span><span class="p">:</span><span class="w"> </span><span class="mi">22</span><span class="kt">px</span><span class="p">;</span>
<span class="w">      </span><span class="k">border</span><span class="p">:</span><span class="w"> </span><span class="mi">2</span><span class="kt">px</span><span class="w"> </span><span class="kc">solid</span><span class="w"> </span><span class="mh">#182033</span><span class="p">;</span>
<span class="w">      </span><span class="k">background</span><span class="p">:</span><span class="w"> </span><span class="kc">white</span><span class="p">;</span>
<span class="w">      </span><span class="k">min-width</span><span class="p">:</span><span class="w"> </span><span class="mi">0</span><span class="p">;</span>
<span class="w">    </span><span class="p">}</span>

<span class="w">    </span><span class="p">.</span><span class="nc">card</span><span class="w"> </span><span class="nt">h2</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="k">margin-top</span><span class="p">:</span><span class="w"> </span><span class="mi">0</span><span class="p">;</span>
<span class="w">    </span><span class="p">}</span>

<span class="w">    </span><span class="c">/* Medium screens: two columns */</span>
<span class="w">    </span><span class="p">@</span><span class="k">media</span><span class="w"> </span><span class="nt">screen</span><span class="w"> </span><span class="nt">and</span><span class="w"> </span><span class="o">(</span><span class="nt">max-width</span><span class="o">:</span><span class="w"> </span><span class="nt">800px</span><span class="o">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="p">.</span><span class="nc">card-grid</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="k">grid-template-columns</span><span class="p">:</span><span class="w"> </span><span class="nf">repeat</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span><span class="w"> </span><span class="nf">minmax</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="w"> </span><span class="mi">1</span><span class="n">fr</span><span class="p">));</span>
<span class="w">      </span><span class="p">}</span>
<span class="w">    </span><span class="p">}</span>

<span class="w">    </span><span class="c">/* Small screens: one column */</span>
<span class="w">    </span><span class="p">@</span><span class="k">media</span><span class="w"> </span><span class="nt">screen</span><span class="w"> </span><span class="nt">and</span><span class="w"> </span><span class="o">(</span><span class="nt">max-width</span><span class="o">:</span><span class="w"> </span><span class="nt">600px</span><span class="o">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="nt">body</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="k">padding</span><span class="p">:</span><span class="w"> </span><span class="mi">14</span><span class="kt">px</span><span class="p">;</span>
<span class="w">      </span><span class="p">}</span>

<span class="w">      </span><span class="p">.</span><span class="nc">card-grid</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="k">grid-template-columns</span><span class="p">:</span><span class="w"> </span><span class="mi">1</span><span class="n">fr</span><span class="p">;</span>
<span class="w">      </span><span class="p">}</span>

<span class="w">      </span><span class="p">.</span><span class="nc">card</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="k">padding</span><span class="p">:</span><span class="w"> </span><span class="mi">18</span><span class="kt">px</span><span class="p">;</span>
<span class="w">      </span><span class="p">}</span>
<span class="w">    </span><span class="p">}</span>
<span class="w">  </span><span class="p">&lt;/</span><span class="nt">style</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">head</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">body</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">main</span> <span class="na">class</span><span class="o">=</span><span class="s">"page"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>AMDE 155 / Responsive layout practice<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">h1</span><span class="p">&gt;</span>A Collection of Ideas<span class="p">&lt;/</span><span class="nt">h1</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>A short introduction to your collection. Replace this text with your own topic.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>

    <span class="p">&lt;</span><span class="nt">section</span> <span class="na">class</span><span class="o">=</span><span class="s">"card-grid"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">article</span> <span class="na">class</span><span class="o">=</span><span class="s">"card"</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">h2</span><span class="p">&gt;</span>Idea One<span class="p">&lt;/</span><span class="nt">h2</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>Describe the first item in your collection.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
      <span class="p">&lt;/</span><span class="nt">article</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">article</span> <span class="na">class</span><span class="o">=</span><span class="s">"card"</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">h2</span><span class="p">&gt;</span>Idea Two<span class="p">&lt;/</span><span class="nt">h2</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>Describe the second item in your collection.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
      <span class="p">&lt;/</span><span class="nt">article</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">article</span> <span class="na">class</span><span class="o">=</span><span class="s">"card"</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">h2</span><span class="p">&gt;</span>Idea Three<span class="p">&lt;/</span><span class="nt">h2</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>Describe the third item in your collection.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
      <span class="p">&lt;/</span><span class="nt">article</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">section</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">main</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">body</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">html</span><span class="p">&gt;</span>
</code></pre>
<div class="callout orange"><strong>CodePen tip:</strong> This is a complete HTML document for the HTML panel. Because the CSS is inside the <code>&lt;style&gt;</code> element, you do not need to use CodePen's separate CSS panel for this activity.</div>
</section>
<section class="section">
<h2>07 / Your checklist</h2>
<ul class="checklist">
<li>The entire activity is completed in one CodePen HTML panel.</li>
<li>The page includes a heading, introduction, and at least three cards.</li>
<li>The universal <code>box-sizing: border-box</code> rule is included.</li>
<li>The cards use CSS Grid on wider screens.</li>
<li>At least two <code>@media screen</code> rules change the layout at different widths.</li>
<li>The page changes to two columns at medium width and one column on a small screen.</li>
<li>Text remains readable and elements do not overflow the viewport.</li>
<li>You customize the content and at least some visual styling.</li>
<li>You save your Pen and submit its share URL as instructed in class.</li>
</ul>
<div class="callout"><strong>Quick reflection:</strong> What changed when you added <code>box-sizing: border-box</code>? What does each media query change? At what width did your layout need the biggest adjustment?</div>
</section>
<section class="section">
<h2>Quick reference</h2>
<div class="table-wrap">MADTINKERBLOCKTOKEN0END</div>
</section>
<footer class="footer">
<div class="eyebrow">AMDE 155 · Introduction to Web Design</div>
<h2>Build for the box. Design for the screen.</h2>
<p>Good responsive pages begin with predictable sizing and thoughtful changes at different screen widths. Test often, make intentional choices, and keep the content easy to use.</p>
</footer>
</main>
</div>
