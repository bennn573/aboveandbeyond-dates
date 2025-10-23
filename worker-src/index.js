// This file will be bundled by esbuild into dist/worker.js

import { getAssetFromKV, serveStatic } from '@cloudflare/kv-asset-handler';

// Listen for fetch events
addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    // Attempt to serve a static asset from KV
    return await getAssetFromKV(event, {
      mapRequestToAsset: serveStatic,
    });
  } catch (e) {
    // If a static asset is not found (e.g., for client-side routes like /artist)
    // Fallback to serving index.html for SPA routing
    try {
      const asset = await getAssetFromKV(event, {
        mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req),
      });
      return new Response(asset.body, asset);
    } catch (e) {
      // If index.html also fails, return a 404 response
      return new Response('Not Found', { status: 404 });
    }
  }
}
