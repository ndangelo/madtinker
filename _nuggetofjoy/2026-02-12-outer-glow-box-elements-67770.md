---
layout: post
title: Outer Glow (Box Elements)
slug: outer-glow-box-elements
date: '2026-02-12'
modified: '2026-02-12'
status: published
wordpress_id: 67770
source_url: https://nuggetofjoy.com/outer-glow-box-elements/
author: admin
categories:
- Projects
tags: []
---

In CSS, you can create both inner and outer glow effects using the **`box-shadow`** and **`text-shadow`** properties. The key to creating a glow (rather than a sharp shadow) is using a large blur radius with zero offsets.


Outer Glow (Box Elements)


Use the `box-shadow` property without the `inset` keyword. Multiple shadows can be stacked for a more intense or multi-color effect.


- **Syntax**: `box-shadow: [horizontal-offset] [vertical-offset] [blur-radius] [spread-radius] [color];`
- For an even glow around all sides, set the horizontal and vertical offsets to `0`.


**Example (Outer Glow):**


css


```
.outer-glow {
  /* 0 0 means no x or y offset, 15px is the blur, 5px is the spread, #ff00ff is the color */
  box-shadow: 0 0 15px 5px #ff00ff;
  /* Stacking multiple shadows for a stronger glow */
  box-shadow: 0 0 10px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
}
```


Inner Glow (Box Elements)


Use the `box-shadow` property with the `inset` keyword. This makes the shadow appear inside the element's border.


- **Syntax**: `box-shadow: inset [horizontal-offset] [vertical-offset] [blur-radius] [spread-radius] [color];`


**Example (Inner Glow):**


css


```
.inner-glow {
  /* Inset creates an inner shadow */
  box-shadow: inset 0 0 15px 5px #00ffff;
  background-color: #333; /* A dark background helps the glow stand out */
}
```


Outer Glow (Text)


Use the `text-shadow` property to apply a glow effect to text.


- **Syntax**: `text-shadow: [horizontal-offset] [vertical-offset] [blur-radius] [color];`
- Like `box-shadow`, set offsets to `0` for an even glow.


**Example (Text Glow):**


css


```
.text-glow {
  color: white;
  /* Multiple shadows can be used here too */
  text-shadow: 0 0 5px #fff, 0 0 10px #0fa, 0 0 15px #0fa;
}
```


Inner Glow (Text)


An inner glow effect for text is trickier to achieve purely with simple CSS properties. A common method involves a combination of `text-stroke` (using the `-webkit-text-stroke` prefix for compatibility) and `text-shadow`.


**Example (Inner Text Border/Glow effect):**


css


```
.inner-text-glow {
  color: purple; /* The inner color of the text */
  -webkit-text-stroke: 1px white; /* The "inner glow" border */
  text-shadow: 0 0 10px red; /* The outer glow */
}
```


You can experiment with different values and combinations of these properties to achieve the desired visual effects, and use tools like a [Box Shadow CSS Generator](https://html-css-js.com/css/generator/box-shadow/) to assist in generating the CSS code.
