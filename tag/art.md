---
layout: default
title:  "Art"
categories: [Art]
tags: art
---

<div class="correction">

  {% for post in site.categories.Art %}

    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
    <span>{{ post.date | date_to_string }}</span>
     <span> {{ post.excerpt }}</span>
     </ul>
    
  {% endfor %}

</div>