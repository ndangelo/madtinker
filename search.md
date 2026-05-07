---
layout: post
title: Search Results
---

<ul id="search-results"></ul>

<script>
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": {{ post.title | jsonify }},
        "author": {{ post.author | jsonify }},
        "category": {{ post.categories | join: ", " | jsonify }},
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": {{ post.url | relative_url | jsonify }}
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>

<!-- Lunr -->
<script src="https://unpkg.com/lunr/lunr.js"></script>

<!-- FIX: use relative_url -->
<script src="{{ '/js/search.js' | relative_url }}"></script>