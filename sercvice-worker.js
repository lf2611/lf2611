self.addEventListener('install', event => {
  console.log('Service Worker installado');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  console.log('Service Worker activado');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  console.log('Interceptado el fetch:', event.request.url);
  event.respondWith(fetch(event.request));
});
