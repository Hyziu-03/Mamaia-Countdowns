/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'mamaia-cache';

self.addEventListener('fetch', event => {
    try {
        const reqestIsFromExtension = 
            event.request.url.startsWith("chrome-extension") || 
            event.request.url.includes("extension");
        const requestUsesHttp = 
            !(event.request.url.indexOf("http") === 0);
        if (reqestIsFromExtension || requestUsesHttp) return;
    } catch (error) {
        console.error("Error processing request");
    }
    
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
                console.error("Error fetching cache");
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(
        caches
        .keys()
            .then(cacheNames =>
            Promise.all(
                // eslint-disable-next-line array-callback-return
                cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName))
                    return caches.delete(cacheName);
                })
            ))
            .catch((error) => console.error("Error activating cachce"))
    );
});
