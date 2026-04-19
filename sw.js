const CACHE_NAME = 'wedding-invitation-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './Gemini_Generated_Image_lfdb57lfdb57lfdb.png',
    './Gattivaadavani pattithini cheyyi🫶👀.mp3'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});