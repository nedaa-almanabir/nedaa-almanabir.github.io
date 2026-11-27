var C="nedaa-v12",F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","q.js"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C&&x.indexOf("nedaa-v")===0}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){
  var r=e.request,u=new URL(r.url);
  if(r.method!=="GET"||u.origin!==location.origin)return;
  e.respondWith(fetch(r).then(function(x){if(x.status===200){var c=x.clone();caches.open(C).then(function(k){k.put(r,c)})}return x}).catch(function(){return caches.match(r,{ignoreSearch:true})}));
});
