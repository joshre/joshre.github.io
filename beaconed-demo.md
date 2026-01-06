---
layout: default
title: Beaconed Demo Product
bg: bg-white
---

<div class="max-w-5xl mx-auto px-6 py-20">

  <!-- Breadcrumb -->
  <p class="text-sm text-neutral-400 mb-12">Feif / Belts / Natural Leather</p>

  <div class="grid lg:grid-cols-2 gap-16">

    <!-- Product Images -->
    <div>
      <img
        src="/images/belt-buckle.jpg"
        alt="Natural vegetable-tanned leather belt with brass buckle and copper rivets, handmade in Tennessee"
        class="w-full"
        id="main-image"
      >
      <div class="flex gap-3 mt-4">
        <img src="/images/belt-buckle.jpg" alt="Belt buckle detail" class="w-20 h-20 object-cover cursor-pointer border-2 border-neutral-900" onclick="document.getElementById('main-image').src='/images/belt-buckle.jpg'">
        <img src="/images/belt-detail.jpg" alt="Copper rivet detail" class="w-20 h-20 object-cover cursor-pointer border-2 border-transparent hover:border-neutral-300" onclick="document.getElementById('main-image').src='/images/belt-detail.jpg'">
        <img src="/images/belt-full.jpg" alt="Full belt view" class="w-20 h-20 object-cover cursor-pointer border-2 border-transparent hover:border-neutral-300" onclick="document.getElementById('main-image').src='/images/belt-full.jpg'">
      </div>
    </div>

    <!-- Product Details -->
    <div>
      <p class="text-sm text-neutral-500 uppercase tracking-wide">Feif</p>
      <h1 class="text-3xl font-normal tracking-tight text-neutral-900 mt-2" id="product-name">
        The 4-Rivet Leather Belt
      </h1>
      <p class="text-lg text-neutral-500 mt-1">Natural Leather</p>

      <div class="mt-8">
        <span class="text-3xl text-neutral-900" id="product-price">$90</span>
      </div>

      <p class="mt-8 text-neutral-600 leading-relaxed" id="product-description">
        Natural vegetable-tanned leather belt with strong brass hardware. Heavyweight leather. Oiled.
      </p>

      <p class="mt-4 text-neutral-600 leading-relaxed">
        I've had my original 4-Rivet Belt from 11 years ago. This belt will last you a long time.
      </p>

      <div class="border-t border-neutral-200 mt-10 pt-10">
        <p class="text-xs text-neutral-400 uppercase tracking-widest mb-4">Details</p>
        <dl class="grid grid-cols-2 gap-y-4 text-sm">
          <dt class="text-neutral-500">Material</dt>
          <dd class="text-neutral-900">Vegetable-tanned leather</dd>
          <dt class="text-neutral-500">Hardware</dt>
          <dd class="text-neutral-900">Solid brass buckle</dd>
          <dt class="text-neutral-500">Rivets</dt>
          <dd class="text-neutral-900">Copper</dd>
          <dt class="text-neutral-500">Made in</dt>
          <dd class="text-neutral-900">Knoxville, Tennessee</dd>
        </dl>
      </div>

      <div class="mt-10">
        <button class="w-full bg-neutral-900 text-white py-4 text-sm tracking-wide hover:bg-neutral-800 transition-colors">
          Add to Cart
        </button>
        <p class="text-center text-sm text-neutral-500 mt-4">
          Free shipping · 14-day returns
        </p>
      </div>

    </div>
  </div>
</div>

<!-- Schema Debug -->
<div class="border-t border-neutral-200">
  <div class="max-w-5xl mx-auto px-6 py-16">

    <div class="flex items-center gap-6 mb-8">
      <p class="text-xs text-neutral-400 uppercase tracking-widest">Schema.org Debug</p>
      <div class="h-px flex-1 bg-neutral-200"></div>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">

      <div class="lg:col-span-2">
        <p class="text-sm text-neutral-500 mb-4">
          The JSON-LD below was injected via JavaScript on page load.
          It does not exist in the HTML source.
        </p>
        <pre id="schema-debug" class="bg-neutral-50 border border-neutral-200 p-6 text-xs font-mono text-neutral-700 overflow-x-auto rounded"></pre>
      </div>

      <div class="space-y-4">
        <a href="https://search.google.com/test/rich-results" target="_blank"
           class="block border border-neutral-200 px-5 py-4 hover:border-neutral-400 transition-colors rounded">
          <p class="text-xs text-neutral-400 uppercase tracking-wide">Test with</p>
          <p class="text-neutral-900 mt-1">Google Rich Results</p>
        </a>
        <a href="https://validator.schema.org/" target="_blank"
           class="block border border-neutral-200 px-5 py-4 hover:border-neutral-400 transition-colors rounded">
          <p class="text-xs text-neutral-400 uppercase tracking-wide">Validate at</p>
          <p class="text-neutral-900 mt-1">Schema.org Validator</p>
        </a>
        <div class="border border-neutral-200 px-5 py-4 rounded">
          <p class="text-xs text-neutral-400 uppercase tracking-wide">View Source</p>
          <p class="text-neutral-400 mt-1">No JSON-LD in HTML</p>
        </div>
      </div>

    </div>
  </div>
</div>

<script>
(function() {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "The 4-Rivet Leather Belt | Natural Leather",
    "description": "Natural vegetable-tanned leather belt with strong brass hardware. Heavyweight leather. Oiled. I've had my original 4-Rivet Belt from 11 years ago. This belt will last you a long time.",
    "image": [
      "https://joshre.com/images/belt-buckle.jpg",
      "https://joshre.com/images/belt-detail.jpg",
      "https://joshre.com/images/belt-full.jpg"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Feif"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Feif",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Knoxville",
        "addressRegion": "TN",
        "addressCountry": "US"
      }
    },
    "material": "Vegetable-tanned leather",
    "offers": {
      "@type": "Offer",
      "url": "https://www.etsy.com/listing/1299237180/the-4-rivet-leather-belt-natural-leather",
      "priceCurrency": "USD",
      "price": "90.00",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14,
        "returnMethod": "https://schema.org/ReturnByMail"
      }
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(productData, null, 2);
  document.head.appendChild(script);

  document.getElementById('schema-debug').textContent = JSON.stringify(productData, null, 2);
})();
</script>
