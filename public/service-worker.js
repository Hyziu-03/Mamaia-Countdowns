const addResourcesToCache = async (resources) => {
  const cache = await caches.open('cache');
  await cache.addAll(resources);
};

// eslint-disable-next-line no-unused-vars
const self = this;

this.addEventListener("install", (event) => event.waitUntil(addResourcesToCache([])));

this.addEventListener('fetch', (event) => {
  event.respondWith(async function () {
    try {
      const response = await fetch(event.request);
      const cache = await caches.open('cache');
      cache.put(event.request.url, response.clone());
      return response;
    } catch (error) {
      return caches.match(event.request);
    }
  }());
});
