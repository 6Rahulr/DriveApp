'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "16e1ea122c28868f16e3d96060a381b9",
"assets/AssetManifest.bin.json": "b4092d455e7da928b3d8aae6286dc147",
"assets/AssetManifest.json": "2090703c323fcb920c705d9d771769d6",
"assets/assets/app_logo.jpg": "94108bc3970e1f42d9a3dfc3b94584a9",
"assets/assets/folder%25202.jpg": "2eb3ad7f60eaed717534acf03ad7a6d3",
"assets/assets/folder%25203.jpg": "39df2eadff0d7bd9cf51a60264f4085e",
"assets/assets/folder%25204.png": "c1c6134483ae8d07fd3fc74cc1c8bf9a",
"assets/assets/folder%25205.png": "9207e82e3c6fc46ab0034c3839a424bd",
"assets/assets/folder%25206.png": "fde57d6385b3785e45b2cd35cf83b6fb",
"assets/assets/folder1.jpg": "d59991b920683000b66384be38cd0d48",
"assets/assets/folder_4.png": "a36365289c812db8b51aa71a240e8678",
"assets/assets/Fonts/OpenSans-Bold.ttf": "5112859ee40a5dfa527b3b4068ccd74d",
"assets/assets/Fonts/OpenSans_Italic_VariableFont.ttf": "793c619ecea6766c729382b635a9480b",
"assets/assets/Fonts/OpenSans_VariableFont.ttf": "95393d9faf957406807a05d8fba3f4fc",
"assets/assets/google-cloud-logo-r.png": "119f892448f566dc537a57b73ac70f7a",
"assets/assets/google-cloud-logo.png": "4c0ee5e17c667bc1ddd858a94d029042",
"assets/assets/google.png": "a343e13eee5ddcac9eb154cea0bcf575",
"assets/assets/image1.png": "47e5f71b7d432eb0fa714d6452f47b2d",
"assets/assets/image2.png": "dd0371e4d75a172b619d8e0d07322f54",
"assets/assets/image3.jpg": "89675dfae424f7632b7a3cf3fd63f63a",
"assets/assets/logo_2.jpg": "a37bc8f9c5348c74ed5dcd959ae5e7d8",
"assets/assets/OFL.txt": "e7c2c279ba11190cbb7a6876d800e821",
"assets/assets/OpenSans-Italic-VariableFont_wdth,wght.ttf": "793c619ecea6766c729382b635a9480b",
"assets/assets/OpenSans-VariableFont_wdth,wght.ttf": "95393d9faf957406807a05d8fba3f4fc",
"assets/assets/Open_Sans.zip": "cdf0ed94ee2904d701a1b779dcd4b21c",
"assets/assets/pdf1.png": "baff5128079602e90085717c4f9a4b72",
"assets/assets/pdf2.png": "9b9a4c6104d68125af9869af908cd09f",
"assets/assets/playstore.png": "1f8c2e10cfdaf1d0a7420a4d6f9af899",
"assets/assets/README.txt": "4123cfebf6f2c0305cf0867e383d0ae8",
"assets/assets/trail1.png": "af665a87c12461b7c59c1ce5f380cdf6",
"assets/assets/video1.png": "c58ea9fed8b1a17e017078e153393be3",
"assets/assets/video2-.png": "847b4b66052ee4ec4dbcd7e84638a224",
"assets/assets/video2.png": "1defa74355d9956f6f62381f46d720e3",
"assets/assets/video3.jpg": "1ac18b01073a8af4d0b9f02d3242521a",
"assets/assets/video4.png": "28d9766266ccfb61d07d9b40077e6aa8",
"assets/assets/WhatsApp%2520Image.jpeg": "76237659a8909fbb867a55ef7b4661c6",
"assets/assets/zip.png": "9755f3df56ccea3192b4492725d6db2f",
"assets/assets/zip1.png": "f258d141951e59298f61c9c0f2470822",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f9e4790b705bdbcf1c394830d85f45cd",
"assets/NOTICES": "3daa5c972ee892e2ef65ca76141818d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c2716c0888c37a8398f61cdb972c43e2",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.js.symbols": "34eb740000df15c03210028f34bc9cf5",
"canvaskit/canvaskit.wasm": "2778fe4a13eac805b37df04590085ba3",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.js.symbols": "afe994e4d3d6d23db1d643573c9839ce",
"canvaskit/chromium/canvaskit.wasm": "1ec8ac7ed8ea5906c2e03fc14cb2c22a",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "36607a151127e3736083d241f6e7356b",
"canvaskit/skwasm.wasm": "045364c77c9eedecbd12d2c77fe8fa0a",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "4a4d11531bb12bd7f9ca2bfddf84bdb8",
"flutter.js": "5aee128657b91f4e3e1eeec85c7ee066",
"icons/Icon-192.png": "cc8db80ad442e19680c39185d6162a69",
"icons/Icon-512.png": "d2c97cf437e8c5740f59a01dcec16378",
"icons/Icon-maskable-192.png": "cc8db80ad442e19680c39185d6162a69",
"icons/Icon-maskable-512.png": "d2c97cf437e8c5740f59a01dcec16378",
"index.html": "3b09dc5c78a7bcadef224559bf060578",
"/": "3b09dc5c78a7bcadef224559bf060578",
"main.dart.js": "74f00a1e32426d539a9997d016dd21fe",
"manifest.json": "b6488d6c6b5c5cd515a1d9417397cb39",
"version.json": "90d77a50b5a427a254e3234c23656b13"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
