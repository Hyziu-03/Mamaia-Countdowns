/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'mamaia-cache';

self.addEventListener('fetch', event => {
    if (!(event.request.url.indexOf('http') === 0)) return;
    event.respondWith(
        fetch(event.request)
        .then(result => {
            const resultClone = result.clone();
            caches
                .open(CACHE_NAME)
                .then(cache => cache.put(event.request, resultClone));
            return result;
        }).catch(error => {
            caches
                .match(event.request)
                .then(result => result);
        })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(
        caches.keys()
        .then(cacheNames => Promise.all(
            // eslint-disable-next-line array-callback-return
            cacheNames.map(cacheName => {
                if (!cacheWhitelist.includes(cacheName))
                    return caches.delete(cacheName);
            })
        ))
        .catch(error => console.error(error))
    );
});
