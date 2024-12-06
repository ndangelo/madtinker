---
layout: default
title: "Design"
categories: [Design]
tags: design
---

<ul>
  {% for post in site.categories.Design %}
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
    <span>{{ post.date | date_to_string }}</span>
           <!-- <span> {{ post.excerpt }}</span>-->
    <br><br>
 
  {% endfor %}
</ul>


