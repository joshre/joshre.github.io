---
layout: default
---

Hey there, I'm Josh. I get a kick out of making stuff. From ties, belts, food, to the web I make, break, and fix things. I'm a web developer currently working at [Bamboo Creative](http://bamboocreative.com) in Sacramento, CA. Most places on the internet you can find me as `joshre`. lets be friends there.
{: .lead-paragraph}

- **Twitter** - [@jawshre](http://twitter.com/jawshre)
- **Github** - [joshre](http://github.com/joshre)
- **Instagram** - [joshre](http://instagram.com/joshre)

#### Some Of My Work:

- [Resume](/resume)
- [Veggies](http://veggies.casa)

#### A Few Of My Most Recent Posts:

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>