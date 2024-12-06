---
layout: default
title:  "Art"
categories: [Art]
tags: art
---

<ul>
  {% for post in site.categories.Art %}
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
   <span> Posted on: {{ post.date | date: "%b %d, %Y" }}</span>
  {{ post.date | date_to_string }} 
      <!-- <span> {{ post.excerpt }}</span>-->
    <br><br>
  {% endfor %}
</ul>
