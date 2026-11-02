---
layout: page
title: News
permalink: /news/
description: Papers, talks, courses and milestones, most recent first.
nav: false
---

{% assign news = site.news | sort: 'date' | reverse %}
{% assign year = '' %}
<div class="newsfull">
{% for item in news %}
{% assign y = item.date | date: '%Y' %}
{% if y != year %}{% unless forloop.first %}</ul>{% endunless %}
<h2 class="nf-y">{{ y }}</h2>
<ul class="nf">
{% assign year = y %}{% endif %}
{% if item.paper %}
<li class="hl"><time datetime="{{ item.date | date: '%Y-%m' }}">{{ item.date | date: '%b' }}</time><span><em class="tag">Paper</em><a class="pt" href="{{ item.paper.url }}">{{ item.paper.title }}</a><span class="pa">{{ item.paper.authors }}</span><span class="pv">{{ item.paper.venue }}</span></span></li>
{% else %}
<li><time datetime="{{ item.date | date: '%Y-%m' }}">{{ item.date | date: '%b' }}</time><span>{% if item.tag %}<em class="tag">{{ item.tag }}</em>{% endif %}{{ item.content | remove: '<p>' | remove: '</p>' | strip }}</span></li>
{% endif %}
{% endfor %}
</ul>
</div>
