---
layout: home
bg: "bg-taupe-50"
title: "Full-Stack Developer & Designer in Knoxville"
projects:
  - name: Beaconed
    url: https://beaconed.ai
    event: beaconed
    icon: /images/icons/beaconed.svg
    description: an app for Shopify and WooCommerce stores with more products than time. It finds incomplete listings and drafts better ones in the store’s own voice, and nothing goes live until the merchant approves it.
  - name: Clementine
    url: https://clementinecsa.com
    event: clementine
    icon: /images/icons/clementine.svg
    bare: true
    description: "a CSA platform for small farms: a members list, weekly recurring card charges, and a shareable signup page, all in one place."
  - name: Hearsay
    url: https://checkhearsay.com
    event: hearsay
    icon: /images/icons/hearsay.png
    description: a tool that shows Shopify merchants what Shopify’s catalog tells AI shopping agents about their products, flagging claims they never made and products the agents can’t find.
  - name: Dinner Letter
    url: https://dinnerletter.com
    event: dinner-letter
    icon: /images/icons/dinner-letter.svg
    description: a weekly meal-planning service that builds a personalized dinner plan around each household’s tastes and schedule. A project of Sola Co.
  - name: Saints Church
    url: https://saintschurchknox.com
    event: saints-church
    icon: /images/icons/saints-church.svg
    description: a fast little Jekyll site for my church here in Knoxville.
  - name: Knoxville Restaurants
    url: /knoxville-restaurants/
    event: knoxville-restaurants
    vols: true
    description: a parochial index that I built and maintain to filter Knoxville restaurants for date nights.
---

<h2 class="mt-6 mb-0 font-normal sm:mt-8 text-[clamp(19px,2.9vw,22px)]/[1.5] tracking-[-.011em] text-pretty text-taupe-900 dark:text-taupe-50">Hello there, my name is Josh. I’m a full-stack developer, engineer, and designer in <span class="vols text-rocky-top">Knoxville</span>, Tennessee. I have over a decade of experience building highly performant websites for multiple disciplines.</h2>

<h4 class="mt-12 mb-4 font-semibold tracking-[.08em] uppercase sm:mt-14 text-[13px]/5 text-taupe-500 dark:text-taupe-400">Lately, I’ve been building</h4>

<ul class="grid gap-4 p-0 m-0 list-none">
  {%- for project in page.projects %}
  <li class="grid grid-cols-[20px_minmax(0,1fr)] gap-x-3 text-pretty">
    {%- if project.vols %}
    <span class="block mt-1 size-5 drop-shadow-[0_0_.5px_rgb(0_0_0/.3)]" aria-hidden="true"><span class="block size-5 squircle vols-checker"></span></span>
    {%- elsif project.bare %}
    <img class="block object-contain mt-1 size-5" src="{{ project.icon }}" alt="" aria-hidden="true">
    {%- else %}
    <img class="block object-cover mt-1 size-5 squircle" src="{{ project.icon }}" alt="" aria-hidden="true">
    {%- endif %}
    <span><a class="font-[650] no-underline text-taupe-900 plausible-event-name=Outbound+Link plausible-event-destination={{ project.event }} dark:text-taupe-50 hover:text-olive-700 dark:hover:text-olive-300" href="{% if project.url contains '://' %}{{ project.url }}{% else %}{{ site.url }}{{ project.url }}{% endif %}" target="_blank" rel="noopener">{{ project.name }}</a><span class="text-taupe-400 dark:text-taupe-600"> —</span> {{ project.description }}</span>
  </li>
  {%- endfor %}
</ul>

<p class="mt-10 mb-8 text-pretty">I also head up engineering at <a class="font-[650] text-olive-700 dark:text-olive-300 hover:text-olive-900 dark:hover:text-olive-200" href="https://alttext.ai" target="_blank" rel="noopener">AltText.AI</a>, where we make the web more accessible with AI-generated image descriptions.</p>

<a href="{{site.url}}/resume" class="jre-button">Read My Resume</a>
