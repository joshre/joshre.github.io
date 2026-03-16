---
layout: default
title: Beaconed Demo Product
bg: bg-white
---

<div class="py-20 px-6 mx-auto max-w-5xl">

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
      <div class="flex gap-3 mt-4">
        <img src="/images/belt-buckle.jpg" alt="Belt buckle detail" class="object-cover w-20 h-20 border-2 cursor-pointer border-neutral-900" onclick="document.getElementById('main-image').src='/images/belt-buckle.jpg'">
        <img src="/images/belt-detail.jpg" alt="Copper rivet detail" class="object-cover w-20 h-20 border-2 border-transparent cursor-pointer hover:border-neutral-300" onclick="document.getElementById('main-image').src='/images/belt-detail.jpg'">
        <img src="/images/belt-full.jpg" alt="Full belt view" class="object-cover w-20 h-20 border-2 border-transparent cursor-pointer hover:border-neutral-300" onclick="document.getElementById('main-image').src='/images/belt-full.jpg'">
      </div>
    </div>

    <!-- Product Details -->
    <div>
      <p class="text-sm tracking-wide uppercase text-neutral-500">Feif</p>
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

      <div class="pt-10 mt-10 border-t border-neutral-200">
        <p class="mb-4 text-xs tracking-widest uppercase text-neutral-400">Details</p>
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
        <button class="py-4 w-full text-sm tracking-wide text-white transition-colors bg-neutral-900 hover:bg-neutral-800">
          Add to Cart
        </button>
        <p class="mt-4 text-sm text-center text-neutral-500">
          Free shipping · 14-day returns
        </p>
      </div>

    </div>
  </div>
</div>

<!-- Schema Debug -->
<div class="border-t border-neutral-200">
  <div class="py-16 px-6 mx-auto max-w-5xl">

    <div class="flex gap-6 items-center mb-8">
      <p class="text-xs tracking-widest uppercase text-neutral-400">Schema.org Debug</p>
      <div class="flex-1 h-px bg-neutral-200"></div>
    </div>

    <div class="grid gap-8 lg:grid-cols-3">

      <div class="lg:col-span-2">
        <p class="mb-4 text-sm text-neutral-500">
          The JSON-LD below was injected via JavaScript on page load.
          It does not exist in the HTML source.
        </p>
        <pre id="schema-debug" class="overflow-x-auto p-6 font-mono text-xs rounded border bg-neutral-50 border-neutral-200 text-neutral-700"></pre>
      </div>

      <div class="space-y-4">
        <a href="https://search.google.com/test/rich-results" target="_blank"
           class="block py-4 px-5 rounded border transition-colors border-neutral-200 hover:border-neutral-400">
          <p class="text-xs tracking-wide uppercase text-neutral-400">Test with</p>
          <p class="mt-1 text-neutral-900">Google Rich Results</p>
        </a>
        <a href="https://validator.schema.org/" target="_blank"
           class="block py-4 px-5 rounded border transition-colors border-neutral-200 hover:border-neutral-400">
          <p class="text-xs tracking-wide uppercase text-neutral-400">Validate at</p>
          <p class="mt-1 text-neutral-900">Schema.org Validator</p>
        </a>
        <div class="py-4 px-5 rounded border border-neutral-200">
          <p class="text-xs tracking-wide uppercase text-neutral-400">View Source</p>
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
