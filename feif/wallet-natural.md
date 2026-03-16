---
layout: default
title: Hand-Stitched Leather Wallet | Natural - Feif
bg: bg-white
---

<div class="py-16 px-6 mx-auto max-w-6xl">

  <nav class="mb-12">
    <a href="/feif" class="text-sm transition-colors text-neutral-400 hover:text-neutral-600">← Back</a>
  </nav>

  <div class="grid gap-12 lg:grid-cols-2 lg:gap-20">

    <div>
      <div class="mb-4 aspect-square bg-neutral-50">
        <img src="/images/feif/nw_1.jpg" alt="Natural vegetable-tanned leather wallet with hand stitching" class="object-cover w-full h-full" id="main-image">
      </div>
      <div class="grid grid-cols-4 gap-3">
        <button class="ring-2 ring-offset-2 aspect-square bg-neutral-50 ring-neutral-900" onclick="document.getElementById('main-image').src='/images/feif/nw_1.jpg'; updateThumbs(this)">
          <img src="/images/feif/nw_1.jpg" alt="Open view" class="object-cover w-full h-full">
        </button>
        <button class="aspect-square bg-neutral-50" onclick="document.getElementById('main-image').src='/images/feif/nw_2.jpg'; updateThumbs(this)">
          <img src="/images/feif/nw_2.jpg" alt="Closed" class="object-cover w-full h-full">
        </button>
        <button class="aspect-square bg-neutral-50" onclick="document.getElementById('main-image').src='/images/feif/nw_3.jpg'; updateThumbs(this)">
          <img src="/images/feif/nw_3.jpg" alt="Stitching" class="object-cover w-full h-full">
        </button>
        <button class="aspect-square bg-neutral-50" onclick="document.getElementById('main-image').src='/images/feif/nw_4.jpg'; updateThumbs(this)">
          <img src="/images/feif/nw_4.jpg" alt="Interior" class="object-cover w-full h-full">
        </button>
      </div>
    </div>

    <div class="lg:py-8">
      <p class="text-sm tracking-widest uppercase text-neutral-400">Feif</p>
      <h1 class="mt-3 text-3xl font-normal text-neutral-900">Hand-Stitched Wallet</h1>
      <p class="mt-1 text-neutral-500">Natural Leather</p>

      <p class="mt-8 text-2xl text-neutral-900">$55</p>

      <p class="mt-8 leading-relaxed text-neutral-600">
        Hand-stitched leather wallet using natural vegetable-tanned leather and strong waxed cotton thread.
      </p>

      <dl class="grid grid-cols-2 gap-4 pt-10 mt-10 text-sm border-t border-neutral-100">
        <dt class="text-neutral-400">Material</dt>
        <dd class="text-neutral-900">Vegetable-tanned leather</dd>
        <dt class="text-neutral-400">Stitching</dt>
        <dd class="text-neutral-900">Waxed cotton thread</dd>
        <dt class="text-neutral-400">Style</dt>
        <dd class="text-neutral-900">Minimalist bifold</dd>
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

<div hidden data-schema='{"@context":"https://schema.org","@type":"Product","name":"Hand-Stitched Leather Wallet | Natural","description":"Hand-stitched leather wallet using natural vegetable-tanned leather and strong waxed cotton thread.","image":["https://joshre.com/images/feif/nw_1.jpg","https://joshre.com/images/feif/nw_2.jpg","https://joshre.com/images/feif/nw_3.jpg","https://joshre.com/images/feif/nw_4.jpg"],"sku":"LW-01-N","brand":{"@type":"Brand","name":"Feif"},"material":"Vegetable-tanned leather","color":"Natural","offers":{"@type":"Offer","url":"https://joshre.com/feif/wallet-natural","priceCurrency":"USD","price":"55.00","availability":"https://schema.org/InStock"}}'></div>
<script src="/js/beaconed.js"></script>
<script>
function updateThumbs(el) {
  document.querySelectorAll('[onclick*="updateThumbs"]').forEach(b => b.className = 'aspect-square bg-neutral-50');
  el.className = 'ring-2 ring-offset-2 aspect-square bg-neutral-50 ring-neutral-900';
}
</script>
