---
title: 'Flexbox: Advanced Web Design'
slug: flexbox-advanced-web-design
date: '2023-04-05'
modified: '2025-09-16'
status: published
wordpress_id: 62567
source_url: https://nuggetofjoy.com/flexbox-advanced-web-design/
author: admin
categories:
- Projects
tags: []
migration:
  format: hybrid-markdown
  original_html: original-html/62567.html
  post_css: null
  needs_review: true
---

## Basics and terminology


[Download Flexbox Poster Here!](https://www.dropbox.com/s/8b0erizn0rmociw/css-flexbox-poster.png?dl=1)


Since flexbox is a whole module and not a single property, it involves a lot of things including its whole set of properties. Some of them are meant to be set on the container (parent element, known as “flex container”) whereas the others are meant to be set on the children (said “flex items”).


If “regular” layout is based on both block and inline flow directions, the flex layout is based on “flex-flow directions”. Please have a look at this figure from the specification, explaining the main idea behind the flex layout.


![](http://nuggetofjoy.com/wp-content/uploads/image-45-1024x463.png)


Items will be laid out following either the `main axis` (from `main-start` to `main-end`) or the cross axis (from `cross-start` to `cross-end`).


- **main axis** – The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the `flex-direction` property (see below).
- **main-start | main-end** – The flex items are placed within the container starting from main-start and going to main-end.
- **main size** – A flex item’s width or height, whichever is in the main dimension, is the item’s main size. The flex item’s main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.
- **cross axis** – The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.
- **cross-start | cross-end** – Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.
- **cross size** – The width or height of a flex item, whichever is in the cross dimension, is the item’s cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.


## Flexbox properties


![Flexbox properties](http://nuggetofjoy.com/wp-content/uploads/image-44-1024x439.png)


## Properties for the Parent (flex container)


#### display


This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.


```
.container {
  display: flex; /* or inline-flex */
}
```


Note that CSS columns have no effect on a flex container.


#### flex-direction


![](http://nuggetofjoy.com/wp-content/uploads/image-43-1024x484.png)


This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.


```
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```


- `row` (default): left to right in `ltr`; right to left in `rtl`
- `row-reverse`: right to left in `ltr`; left to right in `rtl`
- `column`: same as `row` but top to bottom
- `column-reverse`: same as `row-reverse` but bottom to top


#### flex-wrap


![](http://nuggetofjoy.com/wp-content/uploads/image-42-1024x473.png)


By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.


```
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```


- `nowrap` (default): all flex items will be on one line
- `wrap`: flex items will wrap onto multiple lines, from top to bottom.
- `wrap-reverse`: flex items will wrap onto multiple lines from bottom to top.


There are some [visual demos of `flex-wrap` here](https://css-tricks.com/almanac/properties/f/flex-wrap/).


### flex-flow


This is a shorthand for the `flex-direction` and `flex-wrap` properties, which together define the flex container’s main and cross axes. The default value is `row nowrap`.


```
.container {
  flex-flow: column wrap;
}
```


### justify-content


![Flex-flow](http://nuggetofjoy.com/wp-content/uploads/image-41-677x1024.png)


This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.


```
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}
```


- `flex-start` (default): items are packed toward the start of the flex-direction.
- `flex-end`: items are packed toward the end of the flex-direction.
- `start`: items are packed toward the start of the `writing-mode` direction.
- `end`: items are packed toward the end of the `writing-mode` direction.
- `left`: items are packed toward left edge of the container, unless that doesn’t make sense with the `flex-direction`, then it behaves like `start`.
- `right`: items are packed toward right edge of the container, unless that doesn’t make sense with the `flex-direction`, then it behaves like `end`.
- `center`: items are centered along the line
- `space-between`: items are evenly distributed in the line; first item is on the start line, last item on the end line
- `space-around`: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
- `space-evenly`: items are distributed so that the spacing between any two items (and the space to the edges) is equal.


Note that that browser support for these values is nuanced. For example, `space-between` never got support from some versions of Edge, and start/end/left/right aren’t in Chrome yet. MDN [has detailed charts](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content). The safest values are `flex-start`, `flex-end`, and `center`.


There are also two additional keywords you can pair with these values: `safe` and `unsafe`. Using `safe` ensures that however you do this type of positioning, you can’t push an element such that it renders off-screen (e.g. off the top) in such a way the content can’t be scrolled too (called “data loss”).


#### align-items


![](http://nuggetofjoy.com/wp-content/uploads/image-46-852x1024.png)


This defines the default behavior for how flex items are laid out along the **cross axis** on the current line. Think of it as the `justify-content` version for the cross-axis (perpendicular to the main-axis).


```
.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}
```


- `stretch` (default): stretch to fill the container (still respect min-width/max-width)
- `flex-start` / `start` / `self-start`: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the `flex-direction` rules or the `writing-mode` rules.
- `flex-end` / `end` / `self-end`: items are placed at the end of the cross axis. The difference again is subtle and is about respecting `flex-direction` rules vs. `writing-mode` rules.
- `center`: items are centered in the cross-axis
- `baseline`: items are aligned such as their baselines align


The `safe` and `unsafe` modifier keywords can be used in conjunction with all the rest of these keywords (although note browser support), and deal with helping you prevent aligning elements such that the content becomes inaccessible.


#### align-content


![](http://nuggetofjoy.com/wp-content/uploads/image-47-830x1024.png)


This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how `justify-content` aligns individual items within the main-axis.


> **Note:** This property only takes effect on multi-line flexible containers, where `flex-wrap` is set to either `wrap` or `wrap-reverse`). A single-line flexible container (i.e. where `flex-wrap` is set to its default value, `no-wrap`) will not reflect `align-content`.


```
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}
```


- `normal` (default): items are packed in their default position as if no value was set.
- `flex-start` / `start`: items packed to the start of the container. The (more supported) `flex-start` honors the `flex-direction` while `start` honors the `writing-mode` direction.
- `flex-end` / `end`: items packed to the end of the container. The (more support) `flex-end` honors the `flex-direction` while end honors the `writing-mode` direction.
- `center`: items centered in the container
- `space-between`: items evenly distributed; the first line is at the start of the container while the last one is at the end
- `space-around`: items evenly distributed with equal space around each line
- `space-evenly`: items are evenly distributed with equal space around them
- `stretch`: lines stretch to take up the remaining space


The `safe` and `unsafe` modifier keywords can be used in conjunction with all the rest of these keywords (although note [browser support](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)), and deal with helping you prevent aligning elements such that the content becomes inaccessible.


#### gap, row-gap, column-gap


![](http://nuggetofjoy.com/wp-content/uploads/image-48-922x1024.png)


[The `gap` property](https://css-tricks.com/almanac/properties/g/gap/) explicitly controls the space between flex items. It applies that spacing *only between items* not on the outer edges.


```
.container {
  display: flex;
  ...
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}
```


The behavior could be thought of as a *minimum* gutter, as if the gutter is bigger somehow (because of something like `justify-content: space-between;`) then the gap will only take effect if that space would end up smaller.


It is not exclusively for flexbox, `gap` works in grid and multi-column layout as well.


### Prefixing Flexbox


Flexbox requires some vendor prefixing to support the most browsers possible. It doesn’t just include prepending properties with the vendor prefix, but there are actually entirely different property and value names. This is because the Flexbox spec has changed over time, creating an [“old”, “tweener”, and “new”](https://css-tricks.com/old-flexbox-and-new-flexbox/) versions.


Perhaps the best way to handle this is to write in the new (and final) syntax and run your CSS through [Autoprefixer](https://css-tricks.com/autoprefixer/), which handles the fallbacks very well.


Alternatively, here’s a Sass `@mixin` to help with some of the prefixing, which also gives you an idea of what kind of things need to be done:


```
@mixin flexbox() {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

@mixin flex($values) {
  -webkit-box-flex: $values;
  -moz-box-flex:  $values;
  -webkit-flex:  $values;
  -ms-flex:  $values;
  flex:  $values;
}

@mixin order($val) {
  -webkit-box-ordinal-group: $val;  
  -moz-box-ordinal-group: $val;     
  -ms-flex-order: $val;     
  -webkit-order: $val;  
  order: $val;
}

.wrapper {
  @include flexbox();
}

.item {
  @include flex(1 200px);
  @include order(2);
}
```


### Examples


Let’s start with a very very simple example, solving an almost daily problem: perfect centering. It couldn’t be any simpler if you use flexbox.


```
.parent {
  display: flex;
  height: 300px; /* Or whatever */
}

.child {
  width: 100px;  /* Or whatever */
  height: 100px; /* Or whatever */
  margin: auto;  /* Magic! */
}
```


This relies on the fact a margin set to `auto` in a flex container absorb extra space. So setting a margin of `auto` will make the item perfectly centered in both axes.


Now let’s use some more properties. Consider a list of 6 items, all with fixed dimensions, but can be auto-sized. We want them to be evenly distributed on the horizontal axis so that when we resize the browser, everything scales nicely, and without media queries.


```
.flex-container {
  /* We first create a flex layout context */
  display: flex;

  /* Then we define the flow direction 
     and if we allow the items to wrap 
   * Remember this is the same as:
   * flex-direction: row;
   * flex-wrap: wrap;
   */
  flex-flow: row wrap;

  /* Then we define how is distributed the remaining space */
  justify-content: space-around;
}
```


Done. Everything else is just some styling concern. Below is a pen featuring this example. Be sure to go to CodePen and try resizing your windows to see what happens.


[codepen\_embed height="300" default\_tab="html,result" slug\_hash="EKEYob" user="css-tricks"]See the Pen [Demo Flexbox 1](https://codepen.io/team/css-tricks/pen/EKEYob) by CSS-Tricks ([@css-tricks](https://codepen.io/team/css-tricks))
on [CodePen](https://codepen.io).[/codepen\_embed]


Let’s try something else. Imagine we have a right-aligned navigation element on the very top of our website, but we want it to be centered on medium-sized screens and single-columned on small devices. Easy enough.


```
/* Large */
.navigation {
  display: flex;
  flex-flow: row wrap;
  /* This aligns items to the end line on main-axis */
  justify-content: flex-end;
}

/* Medium screens */
@media all and (max-width: 800px) {
  .navigation {
    /* When on medium sized screens, we center it by evenly distributing empty space around items */
    justify-content: space-around;
  }
}

/* Small screens */
@media all and (max-width: 500px) {
  .navigation {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}
```


[codepen\_embed height="300" default\_tab="html,result" slug\_hash="YqaKYR" user="css-tricks"]See the Pen [Demo Flexbox 2](https://codepen.io/team/css-tricks/pen/YqaKYR) by CSS-Tricks ([@css-tricks](https://codepen.io/team/css-tricks))
on [CodePen](https://codepen.io).[/codepen\_embed]


Let’s try something even better by playing with flex items flexibility! What about a mobile-first 3-columns layout with full-width header and footer. And independent from source order.


```
.wrapper {
  display: flex;
  flex-flow: row wrap;
}

/* We tell all items to be 100% width, via flex-basis */
.wrapper > * {
  flex: 1 100%;
}

/* We rely on source order for mobile-first approach
 * in this case:
 * 1. header
 * 2. article
 * 3. aside 1
 * 4. aside 2
 * 5. footer
 */

/* Medium screens */
@media all and (min-width: 600px) {
  /* We tell both sidebars to share a row */
  .aside { flex: 1 auto; }
}

/* Large screens */
@media all and (min-width: 800px) {
  /* We invert order of first sidebar and main
   * And tell the main element to take twice as much width as the other two sidebars 
   */
  .main { flex: 3 0px; }
  .aside-1 { order: 1; }
  .main    { order: 2; }
  .aside-2 { order: 3; }
  .footer  { order: 4; }
}
```


[codepen\_embed height="300" default\_tab="html,result" slug\_hash="vWEMWw" user="chriscoyier"]See the Pen [Demo Flexbox 3](https://codepen.io/chriscoyier/pen/vWEMWw) by Chris Coyier ([@chriscoyier](https://codepen.io/chriscoyier))
on [CodePen](https://codepen.io).[/codepen\_embed]

[codepen\_embed height="300" default\_tab="html,result" slug\_hash="NWLWMeR" user="ndangelo"]See the Pen [FlexBox Basics](https://codepen.io/ndangelo/pen/NWLWMeR) by Nicholas D'Angelo ([@ndangelo](https://codepen.io/ndangelo))
on [CodePen](https://codepen.io).[/codepen\_embed]

[codepen\_embed height="300" default\_tab="html,result" slug\_hash="Vwoezmd" pen\_title="Justify Content" user="ndangelo"]See the Pen [Justify Content](https://codepen.io/ndangelo/pen/Vwoezmd) by Nicholas D'Angelo ([@ndangelo](https://codepen.io/ndangelo))
on [CodePen](https://codepen.io).[/codepen\_embed]
