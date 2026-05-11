---
layout: default
title: Mad Tinker
---

<section class="hero">

  <h1>Mad Tinker</h1>

  <p class="hero-text">
    Experiments in art, design, code, sound, and visual systems.
  </p>

</section>

<section class="featured-section">

  <h2>Selected Work</h2>

  <div class="gallery">

    {% assign featured = site.posts | where_exp: "post", "post.featured == true" %}

    {% for post in featured limit:6 %}

      <a href="{{ post.url | relative_url }}" class="gallery-item">

        {% if post.image %}
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
        {% endif %}

        <div class="gallery-overlay">
          <div class="gallery-title">
            {{ post.title }}
          </div>
        </div>

      </a>

    {% endfor %}

  </div>

</section>

<section class="recent-section">

  <h2>Recent Posts</h2>

  <div class="post-feed">

    {% for post in site.posts limit:8 %}

      <article class="feed-item">

        <a href="{{ post.url | relative_url }}">

          <h3>{{ post.title }}</h3>

        </a>

        <div class="feed-date">
          {{ post.date | date: "%B %d, %Y" }}
        </div>

      </article>

    {% endfor %}

  </div>

</section>