---
layout: post
title: How to Create a Video Background with CSS [Step-by-Step]
slug: how-to-create-a-video-background-with-css-step-by-step
date: '2024-10-09'
modified: '2024-10-10'
status: published
wordpress_id: 66735
source_url: https://nuggetofjoy.com/how-to-create-a-video-background-with-css-step-by-step/
author: admin
categories:
- Projects
tags: []
---

**To use a video background,** we have to use the **HTML 5 `<video>` element with position `absolute` inside a container wrapper.**


Videos are increasingly common on websites nowadays and a great way to create a modern website. With just a bit of CSS you can add a video background to your site in minutes. However, note that this technique works only for `<video>` elements. This means the video will have to be hosted somewhere. You can also [use CSS to create a Youtube video background](https://alvarotrigo.com/blog/how-to-create-a-youtube-video-background-with-css/), but that’s not what this tutorial is about.


## Finding a background video


If you don’t have a video yet, the easiest way to find one for your site is to use video stock galleries like [Pixabay](https://pixabay.com/videos/) or [Pexel](https://www.pexels.com/videos/).


![Pixabay Free Video Stock](https://alvarotrigo.com/blog/assets/imgs/2021-10-27/pixabay-video-stock-free.jpeg)


Once you find the one you want to use, you’ll have to download it and upload it to your server (or CDN services like [Cloudinary](https://cloudinary.com/)).


Once uploaded we have the URL of the video and we can use it in our `<video>` element.


## Adding the HTML for the video


For the video, we’ll use the [HTML 5 video element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video). It expects at least a video source file and can be configured to pass multiple HTML attributes.


For our example, we’ll be using this:


```
<video playsinline autoplay muted loop poster="cake.jpg">
    <source src="my-video-url.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
Code language: HTML, XML (xml)
```


We’ll talk more about the [background video configuration](https://alvarotrigo.com/blog/background-video-css/#configuring-the-video) and [formats](https://alvarotrigo.com/blog/background-video-css/#video-formats-and-browser-compatibility).


## Placing the video in the background with CSS


Usually, in CSS we set the background image by using the `background` property or the `background-image` one.


```
background: url(imgs/my-background-image.png);
background-size: cover;
Code language: CSS (css)
```


However, the [background property](https://developer.mozilla.org/en-US/docs/Web/CSS/background) only works for images and colors. Not with videos.


Now we have a standard video element, so, how do we convert it into a background? We’ll be using a little trick here. Using the CSS `position: absolute` we will simulate a background element.


```
video {
  position: absolute;
  top: 0;
  left: 0;
}
Code language: CSS (css)
```


This will place our video outside the document's normal flow and relative to the element we choose within its parents.


So, time to add our video container! We’ll be using a `div` element as the container for our video. We called it `video-wrapper`.


```
<div class="video-wrapper">
  <video playsinline autoplay muted loop poster="cake.jpg">
    <source src="my-css-video-background.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>
</div>
Code language: HTML, XML (xml)
```


And here’s where the magic happens:


```
.video-wrapper {
  /* Telling our absolute positioned video to 
  be relative to this element */
  position: relative;

  width: 400px;
  height: 200px;

  /* Will not allow the video to overflow the 
  container */
  overflow: hidden;

  /* Centering the container's content vertically 
  and horizontally */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
Code language: CSS (css)
```


I added comments on the CSS code so you can see what each of the properties is for.


## Making the background video cover the whole container


It’s common for backgrounds to cover the whole container. We usually do this with CSS by using the style `background-size: cover` directly on the background image. But because in this case, our video is not actually a CSS background, we’ll be using another little trick by using `object-fit: cover` together with `height: 100%` and `width: 100%` on our `video` element.


```
video {
  /** Simulationg background-size: cover */
  object-fit: cover;
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
}
Code language: CSS (css)
```


To illustrate this better, here’s an example of a video background not covering the whole container:


[codepen\_embed height="300" default\_tab="html,result" slug\_hash="gOxWyYw" pen\_title="Video background CSS - not background cover" user="alvarotrigo"]See the Pen [Video background CSS - not background cover](https://codepen.io/alvarotrigo/pen/gOxWyYw) by Álvaro ([@alvarotrigo](https://codepen.io/alvarotrigo))
on [CodePen](https://codepen.io).[/codepen\_embed]


And here’s the same video background covering the whole container:


[codepen\_embed height="300" default\_tab="html,result" slug\_hash="QWMvPya" pen\_title="Video background CSS - not background cover" user="alvarotrigo"]See the Pen [Video background CSS - not background cover](https://codepen.io/alvarotrigo/pen/QWMvPya) by Álvaro ([@alvarotrigo](https://codepen.io/alvarotrigo))
on [CodePen](https://codepen.io).[/codepen\_embed]


## Adding elements on top of the video background


Right now there’s nothing special we have to do in order to add content on top of our video. And that’s because we added the property `position: relative` to the video container when setting the video as a background (which is absolute positioned).


Anything that you add after the video element will be positioned on top of it.


```
<div class="video-wrapper">
  <video playsinline autoplay muted loop poster="cake.jpg">
    <source src="my-css-video-background.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>

  <!-- This will be positioned on top of our video background -->
  <div class="header">
    <h1>Blueberry Cheesecake</h1>
    <button>Recipe here</button>
  </div>
</div>
Code language: HTML, XML (xml)
```


Here’s the final result:


[codepen\_embed height="300" default\_tab="html,result" slug\_hash="GRvmzMX" pen\_title="Video background CSS" user="alvarotrigo"]See the Pen [Video background CSS](https://codepen.io/alvarotrigo/pen/GRvmzMX) by Álvaro ([@alvarotrigo](https://codepen.io/alvarotrigo))
on [CodePen](https://codepen.io).[/codepen\_embed]


## Configuring the video


If you noticed, in our HTML code we’ve added quite a few things on the `video` element. The most important ones are `loop`, `muted` and `autoplay`.


```
<video playsinline autoplay muted loop poster="cake.jpg">
    <source src="my-css-video-background.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
Code language: HTML, XML (xml)
```


Videos won’t be able to autoplay unless we mute them first. And if you are using a video background using the `loop` option is quite common too, so the video will play endlessly.


The `poster` is the image we want to show while the video still loading and can’t yet autoplay.


## Video formats and browser compatibility


The [HTML 5 video element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) allows the use of multiple source files. This means we can provide our video in different formats for browser compatibility.


```
<video playsinline autoplay muted loop poster="my-static-image.jpg">
    <source src="my-video-url.webm" type="video/webm">
    <source src="my-video-url.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
Code language: HTML, XML (xml)
```


In this example, we first try to load the `webm` video, and if the browser can’t play it, it will fall back to the `mp4` version of it.


Not all browsers can play all kinds of video formats, see [the compatibility table for each video format](https://caniuse.com/?search=video%20format).


[![AVI Format Browser Compatibility](https://alvarotrigo.com/blog/assets/imgs/2021-10-27/video-formats-compatiblity.jpeg)](https://caniuse.com/?search=video%20format)


The `mp4` most modern browsers widely accept format, but using alternatives like `webm` can come in handy to save bandwidth too. So, adding both can be a good combination.


If you wonder how to convert from one format to another, you can use any of the online converters. Just Google “mp4 to webm” or “webm to mp4” and you’ll find plenty of converters online.


## Conclusion


There’s no excuse to use videos nowadays. Videos in websites are a very powerful design tool that can provide your website a modern look. They are easy to implement, ligther that GIF animations and high quality.


As you could see, you only need a few lines of CSS to set any video as a background. And, if you want to go one step further, you can go full-screen by using components like [fullPage.js](https://alvarotrigo.com/fullPage/). Check out the [video example here](https://alvarotrigo.com/fullPage/examples/videoBackground.html).
