const CACHE_NAME = 'buzzify-cache-v1';

// Archivos a cachear
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/manifest.webmanifest',
];

// Evento de instalación
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Archivos cacheados correctamente');
      return cache.addAll(urlsToCache);
    })
  );
});

// Evento de activación: limpia cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Borrando caché antigua:', cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Evento de fetch: servir desde caché o red
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
