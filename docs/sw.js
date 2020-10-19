var debug = false;

function fetchFromCache(e) {
	if (debug) console.log('ServiceWorker.fetchFromCache()');

	return caches.match(e.request.url.split('/').pop()).then(function(response) {
		if (!response) {
			throw Error('ServiceWorker: ' + e.request.url.split('/').pop() + ' not found in cache');
		}

		if (debug) console.log('ServiceWorker: ' + e.request.url.split('/').pop() + ' was loaded from cache');

		return response;
	});
}

function addToCache(request, response) {
	if (debug) console.log('ServiceWorker.addToCache()');

	if (response.ok) {
		var copy = response.clone();
		var filename = response.url.split('/').pop()

		caches.match(filename).then(function(exists) {
			if (!exists) {
				if (debug) console.log('ServiceWorker: ' + filename + ' was added to cache');
				caches.open(location.hostname).then(function(cache) {
					// noinspection JSIgnoredPromiseFromCall
					cache.put(filename, copy);
				});
			}
		})
	}

	return response;
}

self.addEventListener('install', function() {
	if (debug) console.log('ServiceWorker Installed!');
});

self.addEventListener('activate', function() {
	if (debug) console.log('ServiceWorker Activated!');
});

self.addEventListener('message', function(e) {
	if (debug) console.log('ServiceWorker: Handling message event: ', e);
});

self.addEventListener('fetch', function(e) {
	if (e.request.url.endsWith('.db')) {
		if (debug) console.log('ServiceWorker: Handling fetch event for: ', e.request.url);

		var request = e.request;

		e.respondWith(fetchFromCache(e).catch(function(e) {
			if (debug) console.log(e.message);
			return fetch(request);
		}).then(function(response) {
			return addToCache(request, response);
		}));
	}
});