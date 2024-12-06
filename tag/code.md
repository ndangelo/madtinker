---
layout: default
title:  "Code Snippet Samples"
categories: [Code]
tags: code
---

<ul>
  {% for post in site.categories.Code %}
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
    <span>{{ post.date | date_to_string }}</span>
          <!-- <span> {{ post.excerpt }}</span>-->
    <br><br>
    
  {% endfor %}
</ul>

