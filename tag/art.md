---
layout: default
title:  "Art"
categories: [Art]
tags: art
---

<span>
  {% for tag in page.tags %}
    {% capture tag_name %}{{ tag }}{% endcapture %}
   tag: <a href="/tag/{{ tag_name }}"><code class="highligher-rouge" >&nbsp;<nobr>{{ tag_name }}</nobr></code>&nbsp;</a>
  {% endfor %}
</span>

  {% for post in site.categories.Art %}
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
    <span>{{ post.date | date_to_string }}</span>
     <span style="font-size: 1.3em"> {{ post.excerpt }}</span>
    
  {% endfor %}


