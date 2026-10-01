---
layout: default
title: Beaconed Demo Product
bg: bg-white
---

<div class="mx-auto max-w-5xl px-6 py-20">

  <!-- Breadcrumb -->
  <p class="mb-12 text-sm text-neutral-400">Feif / Belts / Natural Leather</p>

  <div class="grid gap-16 lg:grid-cols-2">

    <!-- Product Images -->
    <div>
      <img
        src="/images/belt-buckle.jpg"
        alt="Natural vegetable-tanned leather belt with brass buckle and copper rivets, handmade in Tennessee"
        class="w-full"
        id="main-image"
      >
      <div class="mt-4 flex gap-3">
        <img src="/images/belt-buckle.jpg" alt="Belt buckle detail" class="h-20 w-20 cursor-pointer border-2 border-neutral-900 object-cover" onclick="document.getElementById('main-image').src='/images/belt-buckle.jpg'">
        <img src="/images/belt-detail.jpg" alt="Copper rivet detail" class="h-20 w-20 cursor-pointer border-2 border-transparent object-cover hover:border-neutral-300" onclick="document.getElementById('main-image').src='/images/belt-detail.jpg'">
        <img src="/images/belt-full.jpg" alt="Full belt view" class="h-20 w-20 cursor-pointer border-2 border-transparent object-cover hover:border-neutral-300" onclick="document.getElementById('main-image').src='/images/belt-full.jpg'">
      </div>
    </div>

    <!-- Product Details -->
    <div>
      <p class="text-sm tracking-wide text-neutral-500 uppercase">Feif</p>
      <h1 class="mt-2 text-3xl font-normal tracking-tight text-neutral-900" id="product-name">
        The 4-Rivet Leather Belt
      </h1>
      <p class="mt-1 text-lg text-neutral-500">Natural Leather</p>

      <div class="mt-8">
        <span class="text-3xl text-neutral-900" id="product-price">$90</span>
      </div>

      <p class="mt-8 leading-relaxed text-neutral-600" id="product-description">
        Natural vegetable-tanned leather belt with strong brass hardware. Heavyweight leather. Oiled.
      </p>

      <p class="mt-4 leading-relaxed text-neutral-600">
        I've had my original 4-Rivet Belt from 11 years ago. This belt will last you a long time.
      </p>

      <div class="mt-10 border-t border-neutral-200 pt-10">
        <p class="mb-4 text-xs tracking-widest text-neutral-400 uppercase">Details</p>
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
        <button class="w-full bg-neutral-900 py-4 text-sm tracking-wide text-white transition-colors hover:bg-neutral-800">
          Add to Cart
        </button>
        <p class="mt-4 text-center text-sm text-neutral-500">
          Free shipping · 14-day returns
        </p>
      </div>

    </div>
  </div>
</div>

<!-- Schema Debug -->
<div class="border-t border-neutral-200">
  <div class="mx-auto max-w-5xl px-6 py-16">

    <div class="mb-8 flex items-center gap-6">
      <p class="text-xs tracking-widest text-neutral-400 uppercase">Schema.org Debug</p>
      <div class="h-px flex-1 bg-neutral-200"></div>
    </div>

    <div class="grid gap-8 lg:grid-cols-3">

      <div class="lg:col-span-2">
        <p class="mb-4 text-sm text-neutral-500">
          The JSON-LD below was injected via JavaScript on page load.
          It does not exist in the HTML source.
        </p>
        <pre id="schema-debug" class="overflow-x-auto rounded border border-neutral-200 bg-neutral-50 p-6 font-mono text-xs text-neutral-700"></pre>
      </div>

      <div class="space-y-4">
        <a href="https://search.google.com/test/rich-results" target="_blank"
           class="block rounded border border-neutral-200 px-5 py-4 transition-colors hover:border-neutral-400">
          <p class="text-xs tracking-wide text-neutral-400 uppercase">Test with</p>
          <p class="mt-1 text-neutral-900">Google Rich Results</p>
        </a>
        <a href="https://validator.schema.org/" target="_blank"
           class="block rounded border border-neutral-200 px-5 py-4 transition-colors hover:border-neutral-400">
          <p class="text-xs tracking-wide text-neutral-400 uppercase">Validate at</p>
          <p class="mt-1 text-neutral-900">Schema.org Validator</p>
        </a>
        <div class="rounded border border-neutral-200 px-5 py-4">
          <p class="text-xs tracking-wide text-neutral-400 uppercase">View Source</p>
          <p class="mt-1 text-neutral-400">No JSON-LD in HTML</p>
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
