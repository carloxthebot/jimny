// Service worker: a returning visitor's car comes out of this cache instead
// of over the network. Registered by app.html (and parts.html) once the page
// is up; its scope is the folder it sits in (/jimny/ on Pages).
//
// Everything the pages load from here carries the build stamp, ?v=<BUILD>
// (stamp.sh writes it into app.html, i18n.js and this file). The rules:
//   - ?v=<this BUILD>       cache-first, in this build's cache
//   - ?v=<any other build>  straight to the network, never cached: a page of
//                           another build (a new deploy this worker has not
//                           caught up with yet, or an old open tab) gets
//                           exactly the files it asked for
//   - vendor/three-<ver>/   cache-first, kept across builds (the path is the
//     and jsDelivr three@   version; nothing there ever changes in place)
//   - pages (navigations)   network-first; cached only when the page is this
//                           build (its `const BUILD`), and served from the
//                           cache only when the network fails
//   - anything else         untouched (other hosts: fonts, analytics)
// A deploy changes BUILD here, so the browser installs the new worker on the
// next visit; it takes over at once and drops every other build's cache.
// A page's HTML and its scripts therefore always come from the same build:
// the cache only ever holds one build, and it only answers for that build.
const BUILD = '202609300441';
const CACHE = `jimny-${BUILD}`;
const VENDOR = 'jimny-vendor';
const SCOPE = new URL('./', self.location).href;

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('jimny-') && k !== CACHE && k !== VENDOR).map(k => caches.delete(k))))));

const isVendor = (u) => (u.href.startsWith(SCOPE + 'vendor/three-'))
  || (u.origin === 'https://cdn.jsdelivr.net' && u.pathname.startsWith('/npm/three@'));
const pageKey = (u) => { const k = new URL(u); k.search = ''; k.hash = ''; return k.href; };

async function cacheFirst(req, name) {
  const c = await caches.open(name);
  const hit = await c.match(req, { ignoreVary: true });
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok && (res.type === 'basic' || res.type === 'cors')) c.put(req, res.clone()).catch(() => {});
  return res;
}
async function page(e) {
  const req = e.request;
  try {
    // always asked of the server (a 304 when nothing changed), so a deploy is
    // on screen at the next visit rather than after Pages' ten minutes
    const res = await fetch(req, { cache: 'no-cache' });
    if (res.ok && res.type === 'basic') {
      const copy = res.clone();
      e.waitUntil(copy.text().then(async (html) => {
        if (html.match(/const BUILD\s*=\s*'([^']*)'/)?.[1] !== BUILD) return;
        const c = await caches.open(CACHE);
        await c.put(pageKey(req.url), new Response(html, { headers: { 'content-type': res.headers.get('content-type') ?? 'text/html' } }));
      }).catch(() => {}));
    }
    return res;
  } catch (err) {
    const c = await caches.open(CACHE);
    const hit = await c.match(pageKey(req.url)) ?? await c.match(SCOPE) ?? await c.match(SCOPE + 'app.html');
    if (hit) return hit;
    throw err;
  }
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (isVendor(u)) { e.respondWith(cacheFirst(req, VENDOR)); return; }
  if (!u.href.startsWith(SCOPE)) return;
  if (req.mode === 'navigate') { e.respondWith(page(e)); return; }
  if (u.searchParams.get('v') === BUILD && !u.searchParams.has('retry')) e.respondWith(cacheFirst(req, CACHE));
});

// The page, once its car is up, lists what it loaded; most of it went past
// before this worker was in control (a first visit), so fetch those now --
// from the HTTP cache, as a rule -- and a second visit starts from here.
self.addEventListener('message', (e) => {
  const urls = Array.isArray(e.data?.cache) ? e.data.cache : [];
  e.waitUntil((async () => {
    for (const s of urls) {
      let u; try { u = new URL(s); } catch { continue; }
      const name = isVendor(u) ? VENDOR : u.href.startsWith(SCOPE) && u.searchParams.get('v') === BUILD ? CACHE : null;
      if (!name) continue;
      const c = await caches.open(name);
      if (await c.match(u.href, { ignoreVary: true })) continue;
      try {
        const res = await fetch(u.href, { mode: u.origin === self.location.origin ? 'same-origin' : 'cors', credentials: 'omit' });
        if (res.ok) await c.put(u.href, res);
      } catch {}
    }
  })());
});
