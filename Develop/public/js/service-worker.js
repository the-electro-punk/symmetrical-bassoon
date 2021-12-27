importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js')
// const workBox = require('workbox')

// workBox.routing.registerRoute(
//     ({request}) => request.destination === 'image',
//     new workBox.strategies.CacheFirst()
// )
workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workBox.strategies.NetworkFirst()
)

// cachefirst for non-changing files and networkfirst for changing files (like internet)