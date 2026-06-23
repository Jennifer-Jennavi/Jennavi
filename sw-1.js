/* ============================================================
   Jennavi Service Worker v1.1
   Caches all core pages, assets and fonts for offline use
   and instant repeat visits.
   ============================================================ */

const CACHE_NAME = 'jennavi-v2';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/hire-linkedin-ghostwriter.html',
  '/book.html',
  '/why-jennavi.html',
  '/founder.html',
  '/linkedin-health-check.html',
  '/linkedin-post-audit.html',
  '/linkedin-profile-audit.html',
  '/linkedin-roi-calculator-4.html',
  '/linkedin-tools.html',
  '/free-client.html',
  '/free-crickets.html',
  '/404.html',
  '/manifest.json',
  '/jennavi-favicon.svg',
  '/jennavi-logo.svg',
  '/launchericon-48x48.png',
  '/launchericon-72x72.png',
  '/launchericon-96x96.png',
  '/launchericon-144x144.png',
  '/launchericon-192x192.png',
  '/launchericon-512x512.png',
  '/IMG-20260405-WA0008.jpg',
  '/IMG-20260405-WA0009.jpg',
  '/IMG-20260406-WA0015.jpg',
  '/IMG-20260407-WA0006.jpg',
  '/jennifer-omaliko-founder-1.jpg',
  '/jennifer-omaliko-founder-2.jpg',
  '/jennifer-omaliko-founder-3.jpg',
  '/jennifer-omaliko-founder-4.jpg',
  '/jennifer-omaliko-founder-5.jpg',
  '/jennifer-omaliko-founder-6.jpg',
  '/jennifer-omaliko-founder-7.jpg',
  '/jennifer-omaliko-founder-8.jpg',
  '/jennifer-omaliko-founder-9.jpg',
  '/jennifer-omaliko-founder-10.jpg',
  '/jennifer-omaliko-linkedin-ghostwriter-founder.webp',
  '/jennifer-linkedin-analytics-873.png.jpg',
  '/jennifer-linkedin-connection-message.png.jpg',
  '/jennifer-linkedin-featured-section.png.jpg',
  '/jennifer-linkedin-inbound-dm.png.jpg',
  '/jennifer-linkedin-profile-6k.png (1).jpg',
  '/jennifer-newsletter-subscribers.png.jpg',
  '/jennifer-calendly-discovery-calls.png (1).jpg',
  '/jennifer-whatsapp-vip-inquiry.png.jpg',
  '/Jennavi-Inbound-LinkedIn-DM-RateCardRequest.jpg',
  '/Jennavi-Inbound-LinkedIn-DM-JobInquiry.jpg',
  '/Jennavi-Inbound-Email-ContractInquiry.jpg'
];

/* ── INSTALL: cache all core assets ── */
self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CORE_ASSETS.map(function(url) {
        return new Request(url, { cache: 'reload' });
      })).catch(function(err) {
        console.warn('[SW] Some assets failed to cache:', err);
      });
    })
  );
});

/* ── ACTIVATE: clean up old caches ── */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

/* ── FETCH: network first, cache fallback ── */
self.addEventListener('fetch', function(event) {
  /* Only handle GET requests on same origin */
  if (event.request.method !== 'GET') return;
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        /* Clone and store fresh copy in cache */
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(function() {
        /* Network failed — serve from cache */
        return caches.match(event.request).then(function(cached) {
          if (cached) return cached;
          /* Fallback for HTML navigation requests */
          if (event.request.headers.get('accept') &&
              event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
          }
        });
      })
  );
});
