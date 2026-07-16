const CACHE_NAME = "kisan-calculator-v1";

const urlsToCache = [
  "./",
  "./index.html",

  "./css/style.css",
  "./css/responsive.css",
  "./css/variables.css",

  "./js/app.js",
  "./js/calculator.js",
  "./js/convert.js",
  "./js/storage.js",

  "./js/data/crops.js",

  "./js/modules/area.js",
  "./js/modules/farm.js",
  "./js/modules/fertilizer.js",
  "./js/modules/gps.js",
  "./js/modules/irrigation.js",
  "./js/modules/planner.js",
  "./js/modules/profit.js",
  "./js/modules/seed.js",

  "./js/utils/convert.js",
  "./js/utils/helper.js",

  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});