// Bolt-on accessories.
//
// Every part is a real mesh built by blender/build_parts.py to the dimensions
// of a named product (Front Runner Slimline II rack, Safari-style snorkel,
// Front Runner ladder, ARB sliders and awning, IPF light bar, Suzuki hard
// spare cover), shaped against a raycast sample of this car's body, and
// exported already positioned in the car frame. The page only clones the node
// it needs. An earlier version generated boxes in code and did not look like
// accessories at all.
//
// Each part (and each wheel face, `rim_<style>`) is its own small draco file,
// model/parts/<name>.glb, listed with its size in model/parts/index.json;
// tools/split_parts.mjs makes them from Blender's two libraries. A first
// visit fetches only what the car on screen wears, instead of the whole
// 19.5 MB library it used to wait for. A part asked for before it has arrived
// is noted (takeMissing) so the page can fetch it and draw again.
//
// To change a part: edit build_parts.py and run ./build.sh.

let PARTS = {};
let INDEX = null;                 // name -> bytes, from index.json
let CTX = null;                   // { loader, THREE, base, build, finishes }
const LOADING = new Map();        // name -> promise
const FAILED = new Set();         // failed once: not asked for again this visit
/** How many part files are on their way right now (the boot screen counts them down). */
export const partsInFlight = () => LOADING.size;
const MISSING = new Set();        // asked for while not loaded yet
const MATS = new Map();           // one material per name across all the files

/**
 * Read the part list. `finishes` is rig.js's loadFinishes (passed in, so this
 * module does not import a second, unversioned copy of rig.js).
 */
export function initParts({ loader, THREE, base = 'model/parts/', build = '', finishes = null }) {
  CTX = { loader, THREE, base, build, finishes };
  const get = (t) => fetch(`${base}index.json?v=${build}`).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .catch(e => (t ? get(t - 1) : Promise.reject(e)));
  return get(2).then(j => { INDEX = j; return j; }, () => { INDEX = {}; return INDEX; });
}

/** Every part name in the library, whether or not it has been fetched. */
export const partNames = () => Object.keys(INDEX ?? {});

function loadOne(name) {
  const { loader, THREE, base, build, finishes } = CTX;
  const p = new Promise((resolve) => loader.load(`${base}${name}.glb?v=${build}`, (g) => {
    // Real surface finishes (Poly Haven, CC0): normal + roughness maps for
    // powder coat / textured plastic (leather grain reads right at this
    // scale), rubber, canvas and PVC. Parts carry box-projected UVs at one
    // repeat per 100 mm; `mm` is the texture's real size so grain stays true.
    const finish = finishes && finishes(THREE);
    g.scene.traverse((o) => {
      const m = o.material;
      if (!m || Array.isArray(m)) return;
      // Materials used to be shared by every part in the one big file; keep
      // them shared across the small ones, so a finish or a warmed shader
      // applies once, not once per file.
      const key = `${m.type}|${m.name}|${m.vertexColors}|${m.flatShading}`;
      const had = MATS.get(key);
      if (had) { if (had !== m) { o.material = had; m.dispose(); } return; }
      MATS.set(key, m);
      if (!finish) return;
      const f = /TextureBlack|PowderBlack|LugNut|RimBarrel/.test(m.name) ? finish.powder
        : /Rubber/.test(m.name) ? finish.rubber
        : /Canvas|Webbing/.test(m.name) ? finish.canvas
        : /AwningPVC/.test(m.name) ? finish.pvc : null;
      // fabric roughness maps read as gloss under the HDR and turned the bags white; keep those matte
      if (f) { m.normalMap = f.nor; if (f !== finish.canvas && f !== finish.pvc) m.roughnessMap = f.rough; m.normalScale.set(f.k, f.k); m.needsUpdate = true; }
    });
    // one part per file, filed under the name the file is listed by
    const kids = [...g.scene.children];
    if (kids.length === 1) PARTS[name] = kids[0];
    else for (const o of kids) PARTS[o.name] = o;
    if (!PARTS[name]) FAILED.add(name);      // never ask for it again, or update() would loop
    LOADING.delete(name);
    resolve(true);
  }, undefined, () => { LOADING.delete(name); FAILED.add(name); resolve(false); }));
  LOADING.set(name, p);
  return p;
}

/** Fetch these parts now (those that exist and are not in yet). */
export function ensureParts(names) {
  const todo = [];
  for (const n of new Set(names)) {
    if (PARTS[n] || INDEX?.[n] == null || FAILED.has(n)) continue;
    todo.push(LOADING.get(n) ?? loadOne(n));
  }
  return Promise.all(todo);
}

// Background fetching: a queue worked a couple of files at a time, so it
// never crowds out a part somebody just picked (those go through ensureParts
// straight away). `front` jumps the queue -- a tray that has just opened.
const QUEUE = [];
let running = 0, drained = null, drainedRes = null;
const PREFETCH_AT_ONCE = 2;
export function prefetchParts(names, { front = false } = {}) {
  const add = names.filter(n => INDEX?.[n] != null && !PARTS[n] && !FAILED.has(n));
  if (front) QUEUE.unshift(...add); else QUEUE.push(...add);
  const p = drained ??= new Promise(r => { drainedRes = r; });
  pump();
  return p;
}
function pump() {
  while (running < PREFETCH_AT_ONCE && QUEUE.length) {
    const n = QUEUE.shift();
    if (PARTS[n] || FAILED.has(n)) continue;
    running++;
    (LOADING.get(n) ?? loadOne(n)).then(() => { running--; pump(); });
  }
  if (!running && !QUEUE.length && drainedRes) { const r = drainedRes; drained = drainedRes = null; r(); }
}

/** Names asked for since the last call that exist but had not arrived. */
export function takeMissing() {
  const out = [...MISSING];
  MISSING.clear();
  return out;
}

// Parts painted body colour (KLC's ivory bumper and grille) carry a material
// named BodyPaint; it is swapped for the car's own paint so the swatch applies.
export function getPart(name) {
  const n = PARTS[name];
  if (!n && INDEX?.[name] != null && !FAILED.has(name)) MISSING.add(name);
  return n ?? null;
}
/** Every loaded part, for warming up their shaders before anyone picks one. */
export const allParts = () => Object.values(PARTS);

export function buildAccessory(kind, variant, paintMat) {
  const node = getPart(variant ? `${kind}_${variant}` : kind);
  if (!node) return null;
  const n = node.clone(true);
  n.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = true; o.receiveShadow = true;
    if (paintMat && o.material?.name === 'BodyPaint') o.material = paintMat;
  });
  return n;
}
