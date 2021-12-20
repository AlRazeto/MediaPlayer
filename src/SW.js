self.addEventListener("install", event => event.waitUntil( precache() ) )
const Version = "v1"

async function precache(){
    const cache = await caches.open(Version)
    return cache.addAll([ 
    './',
    './index.html',
    './assets/index.js',
    './assets/MediaPlayer.js',
    './assets/vid.mp4'])
}

self.addEventListener("fetch", event=>
{
    const request = event.request
    if (request.method !== "GET")
    {return}
    event.respondWith( cachedResponse(request))
    event.waitUntil(cacheUpdate())
})
async function cachedResponse (request)
{
    const cache = await caches.open(Version)
    const response = await cache.match(request)
    return response || fetch(response)

}
async function cacheUpdate (request)
{
    const cache = await caches.open(Version)
    const response = await fetch(request)
    return cache.put(request, response)

}
