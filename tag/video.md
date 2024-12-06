---
layout: default
title:  "Video Archives"
categories: [Video]
tags: video
---

<ul>

  {% for post in site.categories.Video %}
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
    <span>{{ post.date | date_to_string }}</span>
        <!-- <span> {{ post.excerpt }}</span>-->
    <br><br>
    
  {% endfor %}

</ul>

