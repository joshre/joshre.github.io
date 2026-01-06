---
layout: default
title: Hand-Stitched Leather Wallet | Natural - Feif
bg: bg-white
---

<div class="max-w-6xl mx-auto px-6 py-16">

  <nav class="mb-12">
    <a href="/feif" class="text-sm text-neutral-400 hover:text-neutral-600 transition-colors">← Back</a>
  </nav>

  <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">

    <div>
      <div class="aspect-square bg-neutral-50 mb-4">
        <img src="/images/feif/nw_1.jpg" alt="Natural vegetable-tanned leather wallet with hand stitching" class="w-full h-full object-cover" id="main-image">
      </div>
      <div class="grid grid-cols-4 gap-3">
        <button class="aspect-square bg-neutral-50 ring-2 ring-neutral-900 ring-offset-2" onclick="document.getElementById('main-image').src='/images/feif/nw_1.jpg'; updateThumbs(this)">
          <img src="/images/feif/nw_1.jpg" alt="Open view" class="w-full h-full object-cover">
        </button>
        <button class="aspect-square bg-neutral-50" onclick="document.getElementById('main-image').src='/images/feif/nw_2.jpg'; updateThumbs(this)">
          <img src="/images/feif/nw_2.jpg" alt="Closed" class="w-full h-full object-cover">
        </button>
        <button class="aspect-square bg-neutral-50" onclick="document.getElementById('main-image').src='/images/feif/nw_3.jpg'; updateThumbs(this)">
          <img src="/images/feif/nw_3.jpg" alt="Stitching" class="w-full h-full object-cover">
        </button>
        <button class="aspect-square bg-neutral-50" onclick="document.getElementById('main-image').src='/images/feif/nw_4.jpg'; updateThumbs(this)">
          <img src="/images/feif/nw_4.jpg" alt="Interior" class="w-full h-full object-cover">
        </button>
      </div>
    </div>

    <div class="lg:py-8">
      <p class="text-sm text-neutral-400 uppercase tracking-widest">Feif</p>
      <h1 class="text-3xl font-normal text-neutral-900 mt-3">Hand-Stitched Wallet</h1>
      <p class="text-neutral-500 mt-1">Natural Leather</p>

      <p class="text-2xl text-neutral-900 mt-8">$55</p>

      <p class="text-neutral-600 leading-relaxed mt-8">
        Hand-stitched leather wallet using natural vegetable-tanned leather and strong waxed cotton thread.
      </p>

      <dl class="grid grid-cols-2 gap-4 mt-10 pt-10 border-t border-neutral-100 text-sm">
        <dt class="text-neutral-400">Material</dt>
        <dd class="text-neutral-900">Vegetable-tanned leather</dd>
        <dt class="text-neutral-400">Stitching</dt>
        <dd class="text-neutral-900">Waxed cotton thread</dd>
        <dt class="text-neutral-400">Style</dt>
        <dd class="text-neutral-900">Minimalist bifold</dd>
        <dt class="text-neutral-400">Made in</dt>
        <dd class="text-neutral-900">Knoxville, TN</dd>
      </dl>

      <button class="w-full bg-neutral-900 text-white py-4 mt-10 text-sm tracking-wide hover:bg-neutral-800 transition-colors">
        Add to Cart
      </button>

      <p class="text-center text-xs text-neutral-400 mt-4">
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
  el.className = 'aspect-square bg-neutral-50 ring-2 ring-neutral-900 ring-offset-2';
}
</script>
