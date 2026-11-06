const CACHE="nexo-v2";
const FILES=["./","./index.html","./config.js","./manifest.webmanifest"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>{
  if(e.request.url.includes("supabase.co")||e.request.url.includes("jsdelivr.net"))return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
