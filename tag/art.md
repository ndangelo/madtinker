---
layout: default
title:  "Art"
categories: [Art]

---


<ul>
  {% for post in site.categories.Art %}
  {% if post.tags.size > 0 %}
Tag{% if post.tags.size > 1 %}s{% endif %}:
{{ post.tags | sort | join: ", " }}
{% endif %}
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
    <span>{{ post.date | date_to_string }}</span>
     <span style="font-size: 1.3em"> {{ post.excerpt }}</span>
 
  {% endfor %}
</ul>

---