---
layout: default
title:  "Audio"
categories: [Audio]
tags: audio
---

<ul>
  {% for post in site.categories.Audio %}
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
    <span>{{ post.date | date_to_string }}</span>
        <!-- <span> {{ post.excerpt }}</span>-->
    <br><br>
    
  {% endfor %}
</ul>

