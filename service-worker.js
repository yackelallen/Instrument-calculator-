const CACHE_NAME = "yit-cache-v3-0-10";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-512.PNG",
  "./version.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
