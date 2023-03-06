---
layout: default
title:  "Project"
categories: [Project]
tags: project
---

<ul>
  {% for post in site.categories.Project %}
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
    <span>{{ post.date | date_to_string }}</span>
     <span style="font-size: 1.3em"> {{ post.excerpt }}</span>
    
  {% endfor %}
</ul>

  {% for post in site.categories.Code %}
  <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
 {% endfor %}
 
 {% for post in site.categories.Video %}
  <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
 {% endfor %}
 
 {% for post in site.categories.Audio %}
  <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
 {% endfor %}
 
 {% for post in site.categories.Art %}
  <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
 {% endfor %}
 
 {% for post in site.categories.Projects %}
  <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
 {% endfor %}
 
 {% for post in site.categories.Design %}
  <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
 {% endfor %}