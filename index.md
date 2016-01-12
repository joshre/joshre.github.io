---
layout: default
---

Hey, I'm Josh. I get a kick out of making stuff. From ties, belts, food, to the web: I make, break, and fix things.
{: .lead-paragraph}


I'm a web developer currently working at [Bamboo Creative](http://bamboocreative.com) in Sacramento, CA. Most places on the internet you can generally find me as `joshre`. lets be friends there. If you're into **Twitter** my username is [@jawshre](http://twitter.com/jawshre), on **Github** you can find me under [joshre](http://github.com/joshre), and if you like pictures I'm [joshre](http://instagram.com/joshre) on **Instagram**.

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