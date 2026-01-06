// Beaconed - JS-injected Schema.org
// This script reads product data from the page and injects JSON-LD

(function() {
  const el = document.querySelector('[data-schema]');
  if (!el) return;

  try {
    const data = JSON.parse(el.getAttribute('data-schema'));
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  } catch (e) {
    console.error('Beaconed: Failed to inject schema', e);
  }
})();
