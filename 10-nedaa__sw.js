var C="nedaa-v15",F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","favicon.png","q.js","img/p1.jpg","img/p2.jpg","img/p3.jpg","img/p4.jpg","img/p5.jpg","img/p6.jpg","img/p7.jpg"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C&&x.indexOf("nedaa-v")===0}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){
  var r=e.request,u=new URL(r.url);
  if(r.method!=="GET"||u.origin!==location.origin)return;
  e.respondWith(fetch(r).then(function(x){if(x.status===200){var c=x.clone();caches.open(C).then(function(k){k.put(r,c)})}return x}).catch(function(){return caches.match(r,{ignoreSearch:true})}));
});
