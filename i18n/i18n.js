// Language + region helper for the configurator pages.
//
// Two independent settings:
//   lang   — which text the page shows: 'zh-TW' (the source text in parts.js
//            and app.html), 'en' or 'ja';
//   region — which market the viewer shops in: tw jp us au eu uk. It picks the
//            display currency, the vehicle's market name, whether the
//            mechanical-parking advice applies, and which parts are buyable.
// A region implies a default language, but the viewer can override either.
//
// The catalogue translations are large, so they are split per language and
// loaded on demand: call `await setLang('ja')` before rendering Japanese text.
// zh-TW needs no load (it is the text already in parts.js).

import { STRINGS, LANGS } from './strings.js?v=202609291026';
import { REGIONS, REGION_IDS, FX, convert, SYMBOL, AVAIL } from './markets.js?v=202609291026';

export { LANGS, REGIONS, REGION_IDS, FX };

const LS_REGION = 'jimny.region';
const LS_LANG = 'jimny.lang';

let curLang = 'zh-TW';
const cat = { 'zh-TW': null, en: null, ja: null };   // loaded catalogue per lang

// ---- storage (private windows and previews throw; never let that break a page)
function lsGet(k, storage) {
  try { return (storage ?? globalThis.localStorage)?.getItem(k) ?? null; } catch { return null; }
}
function lsSet(k, v, storage) {
  try {
    const s = storage ?? globalThis.localStorage;
    if (v == null) s?.removeItem(k); else s?.setItem(k, v);
  } catch { /* ignore */ }
}

// ---- language ---------------------------------------------------------------

export const getLang = () => curLang;

/** Make `lang` current, loading its catalogue text first. Returns the lang. */
export async function setLang(lang, { persist = false, storage } = {}) {
  if (!LANGS.includes(lang)) lang = 'zh-TW';
  if (lang !== 'zh-TW' && !cat[lang]) {
    // carry this module's own ?v= build stamp, so a new build never pairs a
    // fresh page with a cached catalogue
    const v = new URL(import.meta.url).search;
    const m = await import(`./catalogue.${lang === 'en' ? 'en' : 'ja'}.js${v}`);
    cat[lang] = m.default;
  }
  curLang = lang;
  if (persist) lsSet(LS_LANG, lang, storage);
  return lang;
}

/** Inject catalogue text directly (tests, or a page that bundles it). */
export function useCatalogue(lang, data) { cat[lang] = data; }

/** Language to start with: stored override, else the region's default. */
export function detectLang(region, { storage } = {}) {
  const saved = lsGet(LS_LANG, storage);
  if (saved && LANGS.includes(saved)) return saved;
  return REGIONS[region]?.lang ?? 'zh-TW';
}

/**
 * UI string. `vars` fill {name} placeholders. Falls back to zh-TW, then to the
 * key itself so a missing string is visible instead of blank.
 */
export function t(key, vars, lang = curLang) {
  const e = STRINGS[key];
  let s = e ? (e[lang] ?? e['zh-TW']) : key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? String(vars[k]) : m));
  return s;
}

/** The catalogue key of an entry: id, else COLORS' code, else ARB_RACK_ACC's key. */
export const itemKey = (item) => item?.id ?? item?.code ?? item?.key;

/**
 * Catalogue text. `field` is 'label', 'note', 'desc', 'demoNote', 'name',
 * 'kind', 'brand', ... or a path into a sub-map: 'finishes.<finishId>' for a
 * wheel finish name, 'options.<optionId>' for a SIMPLE option label.
 * For SIMPLE, pass the SIMPLE key as the item: tx('SIMPLE', 'snorkel', 'label').
 * Falls back to the zh-TW text in the item itself.
 */
export function tx(listName, item, field, lang = curLang) {
  const key = typeof item === 'string' ? item : itemKey(item);
  const zh = typeof item === 'string' ? undefined : zhField(item, field);
  if (lang === 'zh-TW') return zh;
  const e = cat[lang]?.[listName]?.[key];
  if (!e) return zh;
  const [f, sub] = field.split('.');
  const v = sub ? e[f]?.[sub] : e[f];
  return v ?? zh;
}
function zhField(item, field) {
  const [f, sub] = field.split('.');
  if (!sub) return item?.[f];
  const arr = item?.[f];
  return Array.isArray(arr) ? arr.find((x) => x.id === sub)?.[f === 'finishes' ? 'name' : 'label'] : undefined;
}

/**
 * Put the current language's catalogue text into the catalogue objects
 * themselves, so every `.label` / `.note` / `.name` a page reads is already in
 * that language (the page builds its markup from those fields in many places;
 * one pass here is tx() for all of them). The zh-TW originals are kept aside
 * and come back with lang 'zh-TW'; read them with zhOf() wherever the page
 * matches on the Chinese text itself. `lists` is the parts.js module namespace
 * (or any { LIST_NAME: [...] }); SIMPLE is keyed by its object keys.
 */
const TEXT_FIELDS = ['label', 'note', 'desc', 'demoNote', 'name', 'kind', 'inch', 'brand', 'brands', 'part'];
const ZH = new WeakMap();
export function localizeCatalogue(lists, lang = curLang) {
  const rows = [];
  for (const [name, v] of Object.entries(lists)) {
    if (name === 'SIMPLE' && v && typeof v === 'object') { for (const [k, it] of Object.entries(v)) rows.push([name, k, it]); continue; }
    if (!Array.isArray(v) || !v.length || typeof v[0] !== 'object' || v[0] === null) continue;
    for (const it of v) rows.push([name, itemKey(it), it]);
  }
  // record every original first: some sub-objects (finishes) may be shared
  for (const [, , it] of rows) {
    if (ZH.has(it)) continue;
    const z = {};
    for (const f of TEXT_FIELDS) if (typeof it[f] === 'string') z[f] = it[f];
    if (Array.isArray(it.finishes)) z.finishes = it.finishes.map((x) => x.name);
    if (Array.isArray(it.options)) z.options = it.options.map((x) => x.label);
    ZH.set(it, z);
  }
  for (const [list, key, it] of rows) {
    const z = ZH.get(it), e = lang === 'zh-TW' ? null : cat[lang]?.[list]?.[key];
    for (const f of TEXT_FIELDS) if (f in z) it[f] = e?.[f] ?? z[f];
    it.finishes?.forEach((x, i) => { x.name = e?.finishes?.[x.id] ?? z.finishes[i]; });
    it.options?.forEach((x, i) => { x.label = e?.options?.[x.id] ?? z.options[i]; });
  }
}
/** The zh-TW text of a catalogue field, whatever language is showing. */
export const zhOf = (item, field) => { const z = ZH.get(item); return z && field in z ? z[field] : item?.[field]; };

// ---- region -----------------------------------------------------------------

const TZ_REGION = [
  [/^Asia\/Taipei$/, 'tw'],
  [/^Asia\/Tokyo$/, 'jp'],
  [/^Australia\//, 'au'],
  [/^Europe\/(London|Belfast)$/, 'uk'],
  [/^Europe\//, 'eu'],
  [/^(America\/|US\/|Pacific\/Honolulu$)/, 'us'],
];
const EU_LANGS = /^(de|fr|es|it|nl|pt|pl|sv|fi|da|cs|sk|sl|hu|ro|bg|hr|el|et|lv|lt|ga|mt)\b/;

/**
 * The viewer's region: localStorage override, else time zone, else the
 * browser language, else Taiwan (the site's home market). Pass `env` to test.
 */
export function detectRegion(env = {}) {
  const saved = lsGet(LS_REGION, env.storage);
  if (saved && REGIONS[saved]) return saved;
  let tz = env.timeZone;
  if (tz === undefined) { try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch { tz = ''; } }
  for (const [re, r] of TZ_REGION) if (re.test(tz ?? '')) return r;
  const langs = env.languages ?? (env.language ? [env.language]
    : (globalThis.navigator?.languages ?? [globalThis.navigator?.language ?? '']));
  for (const l0 of langs) {
    const l = String(l0 ?? '').toLowerCase();
    if (/^zh-(tw|hant)/.test(l)) return 'tw';
    if (/^ja\b/.test(l)) return 'jp';
    if (l === 'en-au') return 'au';
    if (l === 'en-gb') return 'uk';
    if (l === 'en-us' || l === 'en') return 'us';
    if (EU_LANGS.test(l)) return 'eu';
  }
  return 'tw';
}

/** Store (or with null clear) the viewer's region choice. */
export const setRegion = (r, { storage } = {}) => lsSet(LS_REGION, r && REGIONS[r] ? r : null, storage);

/** Vehicle name for the region, e.g. 'Jimny Sierra' / 'ジムニーシエラ'. */
export const marketName = (region, lang = curLang) => {
  const m = REGIONS[region]?.marketName;
  return (m && (m[lang] ?? m.en)) ?? 'Jimny';
};

export const parkingApplies = (region) => !!REGIONS[region]?.parking;

// ---- price ------------------------------------------------------------------

/** "¥38,500" / "NT$8,100": symbol + locale-grouped integer. */
export function money(amount, cur, region) {
  const loc = REGIONS[region]?.locale ?? 'en-US';
  return (SYMBOL[cur] ?? cur + ' ') + Math.round(amount).toLocaleString(loc);
}

// Converted figures are approximate; don't print false precision.
export function roundApprox(v, cur) {
  const coarse = cur === 'TWD' || cur === 'JPY' ? 100 : 10;
  if (v <= 0) return 0;
  const sig2 = 10 ** Math.max(0, Math.floor(Math.log10(v)) - 1);   // keep >= 2 significant digits
  const step = Math.min(coarse, sig2);
  return Math.round(v / step) * step;
}

/**
 * Price of a catalogue entry for a region.
 *   kind 'stock'  — price 0: factory part (text 原廠 / Stock / 純正)
 *   kind 'ask'    — no price published (洽詢 / On request / 要問合せ)
 *   kind 'price'  — a figure. When the item's currency is not the region's,
 *                   `approx` is true, `text` carries the approx marker, and
 *                   `original` keeps the maker's own figure for display.
 * opts.amount overrides item.price (e.g. a wheel finish's own price).
 * Items without `cur` are NT$, matching fx.js.
 */
export function price(item, region, { lang = curLang, amount } = {}) {
  const p = amount ?? item?.price;
  if (p === 0) return { kind: 'stock', text: t('price.stock', null, lang), approx: false };
  if (p == null) return { kind: 'ask', text: t('price.ask', null, lang), approx: false };
  const from = item.cur ?? 'TWD';
  const to = REGIONS[region]?.currency ?? 'TWD';
  const original = { amount: p, cur: from, text: money(p, from, region) };
  if (from === to) return { kind: 'price', amount: p, cur: to, text: original.text, approx: false, original };
  const v = convert(p, from, to);
  if (v == null) return { kind: 'price', amount: p, cur: from, text: original.text, approx: false, original, unconverted: true };
  const amt = roundApprox(v, to);
  return {
    kind: 'price', amount: amt, cur: to, approx: true, original,
    text: t('price.approx', { price: money(amt, to, region) }, lang),
    rateNote: t('price.rateNote', { date: FX.date, source: FX.sourceShort }, lang),
  };
}

export const currencyOf = (region) => REGIONS[region]?.currency ?? 'TWD';

/** `amount` in `cur` (default NT$, as in fx.js) as the region's currency,
 *  unrounded; null when unpriced or the currency is unknown. */
export function toRegion(amount, cur, region) {
  if (amount == null) return null;
  const from = cur ?? 'TWD', to = currencyOf(region);
  return from === to ? amount : convert(amount, from, to);
}

/**
 * A total in the region's currency, compact enough for the gauge strip:
 * NT$ in 萬 for zh-TW (as the page always did), yen in 万 for Japanese,
 * grouped digits otherwise. `approx` adds the language's approx marker.
 */
export function formatTotal(amount, region, { lang = curLang, approx = false } = {}) {
  const cur = currencyOf(region);
  const wan = (n) => (n / 10000).toFixed(n >= 100000 ? 0 : 1).replace(/\.0$/, '');
  let s;
  if (cur === 'TWD' && lang === 'zh-TW' && amount >= 10000) s = `NT$${wan(amount)} 萬`;
  else if (cur === 'JPY' && lang === 'ja' && amount >= 10000) s = `¥${wan(amount)}万`;
  else s = money(approx ? roundApprox(amount, cur) : amount, cur, region);
  return approx ? t('price.approx', { price: s }, lang) : s;
}

// ---- availability -----------------------------------------------------------

/**
 * Can this entry realistically be bought in `region`?
 *   true / false, or null when unknown.
 * Pass the list name ('WHEELS', 'KITS', ...): ids repeat across lists (a
 * kit's bumper and its grille share the kit's id). Without it, the id is
 * looked up in every list and only a unanimous answer is returned.
 */
export function available(item, region, listName) {
  const key = typeof item === 'string' ? item : itemKey(item);
  const one = (a) => (a == null || a.r === 'unknown' ? null : a.r === 'any' ? true : a.r.includes(region));
  if (listName) return one(AVAIL[listName]?.[key]);
  const hits = Object.values(AVAIL).map((l) => l[key]).filter(Boolean).map(one);
  if (!hits.length) return null;
  return hits.every((h) => h === hits[0]) ? hits[0] : null;
}

/** The recorded reason behind an availability call, for a tooltip. */
export const availWhy = (item, listName) => AVAIL[listName]?.[typeof item === 'string' ? item : itemKey(item)]?.why ?? null;
