---
layout: default
title: The 4-Rivet Leather Belt | Dark - Feif
bg: bg-white
---

<div class="py-16 px-6 mx-auto max-w-6xl">

  <nav class="mb-12">
    <a href="/feif" class="text-sm transition-colors text-neutral-400 hover:text-neutral-600">← Back</a>
  </nav>

  <div class="grid gap-12 lg:grid-cols-2 lg:gap-20">

    <div>
      <div class="mb-4 aspect-square bg-neutral-50">
        <img src="/images/feif/db_1.jpg" alt="Dark vegetable-tanned leather belt with nickel buckle" class="object-cover w-full h-full" id="main-image">
      </div>
      <div class="grid grid-cols-2 gap-4">
        <button class="ring-2 ring-offset-2 aspect-square bg-neutral-50 ring-neutral-900" onclick="document.getElementById('main-image').src='/images/feif/db_1.jpg'; updateThumbs(this)">
          <img src="/images/feif/db_1.jpg" alt="Full belt" class="object-cover w-full h-full">
        </button>
        <button class="aspect-square bg-neutral-50" onclick="document.getElementById('main-image').src='/images/feif/db_2.jpg'; updateThumbs(this)">
          <img src="/images/feif/db_2.jpg" alt="Buckle detail" class="object-cover w-full h-full">
        </button>
      </div>
    </div>

    <div class="lg:py-8">
      <p class="text-sm tracking-widest uppercase text-neutral-400">Feif</p>
      <h1 class="mt-3 text-3xl font-normal text-neutral-900">The 4-Rivet Leather Belt</h1>
      <p class="mt-1 text-neutral-500">Dark Leather</p>

      <p class="mt-8 text-2xl text-neutral-900">$90</p>

      <p class="mt-8 leading-relaxed text-neutral-600">
        Natural vegetable-tanned leather belt with strong nickel hardware. Heavyweight leather. Oiled.
      </p>
      <p class="mt-4 text-sm text-neutral-500">
        I've had my original 4-Rivet Belt from 11 years ago. This belt will last you a long time.
      </p>

      <dl class="grid grid-cols-2 gap-4 pt-10 mt-10 text-sm border-t border-neutral-100">
        <dt class="text-neutral-400">Material</dt>
        <dd class="text-neutral-900">Vegetable-tanned leather</dd>
        <dt class="text-neutral-400">Hardware</dt>
        <dd class="text-neutral-900">Solid nickel</dd>
        <dt class="text-neutral-400">Rivets</dt>
        <dd class="text-neutral-900">Nickel</dd>
        <dt class="text-neutral-400">Made in</dt>
        <dd class="text-neutral-900">Knoxville, TN</dd>
      </dl>

      <button class="py-4 mt-10 w-full text-sm tracking-wide text-white transition-colors bg-neutral-900 hover:bg-neutral-800">
        Add to Cart
      </button>

      <p class="mt-4 text-xs text-center text-neutral-400">
        Free shipping · 14-day returns
      </p>
    </div>
  </div>
</div>

<div hidden data-schema='{"@context":"https://schema.org","@type":"Product","name":"The 4-Rivet Leather Belt | Dark","description":"Natural vegetable-tanned leather belt with strong nickel hardware. Heavyweight leather. Oiled.","image":["https://joshre.com/images/feif/db_1.jpg","https://joshre.com/images/feif/db_2.jpg"],"sku":"LB-01-D","brand":{"@type":"Brand","name":"Feif"},"material":"Vegetable-tanned leather","color":"Dark Brown","offers":{"@type":"Offer","url":"https://joshre.com/feif/belt-dark","priceCurrency":"USD","price":"90.00","availability":"https://schema.org/InStock"}}'></div>
<script src="/js/beaconed.js"></script>
<script>
function updateThumbs(el) {
  document.querySelectorAll('[onclick*="updateThumbs"]').forEach(b => b.className = 'aspect-square bg-neutral-50');
  el.className = 'ring-2 ring-offset-2 aspect-square bg-neutral-50 ring-neutral-900';
}
</script>
