---
layout: default
title:  "Art"
categories: [Art]
tags: art
---

<ul>
  {% for post in site.categories.Art %}
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
    <span>{{ post.date | date_to_string }}</span>
     <span style="font-size: 1.3em"> {{ post.excerpt }}</span>
     </ul>
    
  {% endfor %}

