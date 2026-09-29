// Unit + coverage tests for the i18n data and helper.  Run: node jimny/i18n/test.mjs
import assert from 'node:assert/strict';
import * as P from '../parts.js';
import { STRINGS, LANGS } from './strings.js';
import { REGIONS, FX, PER_USD, RATES_TWD, convert, AVAIL } from './markets.js';
import * as I from './i18n.js';

let pass = 0, fail = 0;
const test = async (name, fn) => {
  try { await fn(); pass++; } catch (e) { fail++; console.log('FAIL', name, '\n  ', e.message.split('\n').slice(0, 6).join('\n   ')); }
};

const CJK = /[぀-ヿ㐀-鿿＀-￯]/;
const TEXT = ['label', 'note', 'desc', 'demoNote', 'name', 'kind', 'inch', 'brand', 'brands', 'part'];
const keyOf = (it) => it.id ?? it.code ?? it.key;
// Every catalogue list in parts.js, SIMPLE included (keyed by its object keys).
function catalogueLists() {
  const out = {};
  for (const [name, v] of Object.entries(P)) {
    if (Array.isArray(v) && v.length && typeof v[0] === 'object') out[name] = v.map((it) => [keyOf(it), it]);
    else if (name === 'SIMPLE') out[name] = Object.entries(v);
  }
  return out;
}
// The zh text fields an entry has, as tx() field paths.
function zhFields(it) {
  const f = TEXT.filter((k) => typeof it[k] === 'string' && CJK.test(it[k]));
  for (const x of it.finishes ?? []) if (CJK.test(x.name ?? '')) f.push('finishes.' + x.id);
  for (const x of it.options ?? []) if (CJK.test(x.label ?? '')) f.push('options.' + x.id);
  return f;
}
const LISTS = catalogueLists();
const en = (await import('./catalogue.en.js')).default;
const ja = (await import('./catalogue.ja.js')).default;

// ---------------------------------------------------------------- coverage
let entries = 0, fields = 0;
await test('catalogue: every entry has en + ja for every zh text field', () => {
  const miss = [];
  for (const [list, items] of Object.entries(LISTS)) for (const [k, it] of items) {
    entries++;
    for (const f of zhFields(it)) {
      fields++;
      const [a, b] = f.split('.');
      for (const [lang, d] of [['en', en], ['ja', ja]]) {
        const v = b ? d[list]?.[k]?.[a]?.[b] : d[list]?.[k]?.[a];
        if (typeof v !== 'string' || !v.trim()) miss.push(`${lang} ${list}:${k}.${f}`);
        else if (lang === 'en' && /[぀-ヿ一-鿿]/.test(v)) miss.push(`en has CJK ${list}:${k}.${f}`);
      }
    }
  }
  assert.equal(miss.length, 0, miss.slice(0, 20).join('\n'));
});

await test('catalogue: digits in zh survive translation', () => {
  const digits = (s) => (s.match(/\d+(?:[.,]\d+)*/g) ?? []).map((d) => d.replace(/,/g, ''));
  const bad = [];
  for (const [list, items] of Object.entries(LISTS)) for (const [k, it] of items) for (const f of zhFields(it)) {
    const zh = I.tx(list, it, f, 'zh-TW');
    for (const [lang, d] of [['en', en], ['ja', ja]]) {
      const [a, b] = f.split('.');
      const v = (b ? d[list]?.[k]?.[a]?.[b] : d[list]?.[k]?.[a]) ?? '';
      const have = new Set(digits(v));
      const m = digits(zh).filter((x) => !have.has(x));
      if (m.length) bad.push(`${lang} ${list}:${k}.${f} ${m.join(',')}`);
    }
  }
  assert.equal(bad.length, 0, bad.slice(0, 20).join('\n'));
});

await test('availability: every catalogue entry has a valid record', () => {
  const REG = new Set(Object.keys(REGIONS));
  const bad = [];
  for (const [list, items] of Object.entries(LISTS)) for (const [k] of items) {
    const a = AVAIL[list]?.[k];
    if (!a) bad.push(`${list}:${k} missing`);
    else if (!(a.r === 'any' || a.r === 'unknown' || (Array.isArray(a.r) && a.r.length && a.r.every((r) => REG.has(r))))) bad.push(`${list}:${k} bad r`);
    else if (!a.why) bad.push(`${list}:${k} no why`);
  }
  assert.equal(bad.length, 0, bad.slice(0, 20).join('\n'));
});

// ---------------------------------------------------------------- strings
// lang.* name each language in its own script (the language picker), so they may hold CJK in en.
await test('strings: all three languages, same placeholders, no CJK in en', () => {
  const ph = (s) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join();
  const bad = [];
  for (const [k, e] of Object.entries(STRINGS)) {
    for (const l of LANGS) if (typeof e[l] !== 'string' || !e[l].length) bad.push(`${k} ${l} missing`);
    if (e.en && !k.startsWith('lang.') && /[぀-ヿ一-鿿]/.test(e.en)) bad.push(`${k} en has CJK`);
    if (e.en != null && ph(e.en) !== ph(e['zh-TW'])) bad.push(`${k} en placeholders`);
    if (e.ja != null && ph(e.ja) !== ph(e['zh-TW'])) bad.push(`${k} ja placeholders`);
  }
  for (const k of ['price.stock', 'price.ask', 'price.approx', 'price.rateNote']) if (!STRINGS[k]) bad.push(`required ${k} missing`);
  assert.equal(bad.length, 0, bad.slice(0, 20).join('\n'));
});

await test('t(): lookup, placeholders, fallbacks', () => {
  assert.equal(I.t('price.stock', null, 'zh-TW'), STRINGS['price.stock']['zh-TW']);
  assert.equal(I.t('price.approx', { price: 'A$10' }, 'en'), STRINGS['price.approx'].en.replace('{price}', 'A$10'));
  assert.equal(I.t('no.such.key'), 'no.such.key');
  assert.equal(I.t('price.stock', null, 'xx'), STRINGS['price.stock']['zh-TW']);
});

// ---------------------------------------------------------------- tx()
await test('tx(): zh from the item, en/ja from the catalogue, fallback to zh', async () => {
  const w = P.WHEELS.find((x) => x.id === 'te37xt');
  assert.equal(I.tx('WHEELS', w, 'label', 'zh-TW'), w.label);
  assert.equal(I.tx('WHEELS', w, 'label', 'en'), w.label, 'en not loaded yet -> zh fallback');
  await I.setLang('en');
  assert.equal(I.getLang(), 'en');
  assert.equal(I.tx('WHEELS', w, 'label'), en.WHEELS.te37xt.label);
  assert.equal(I.tx('WHEELS', w, 'finishes.BC'), en.WHEELS.te37xt.finishes.BC);
  assert.equal(I.tx('WHEELS', w, 'url'), w.url, 'non-text field falls back to the item');
  assert.equal(I.tx('WHEELS', { id: 'nope', label: '甲' }, 'label'), '甲');
  assert.equal(I.tx('SIMPLE', 'snorkel', 'label'), en.SIMPLE.snorkel.label);
  const c = P.COLORS.find((x) => x.code === 'ZJ3');
  assert.equal(I.tx('COLORS', c, 'name', 'ja') , c.name, 'ja not loaded -> zh');
  await I.setLang('ja');
  assert.equal(I.tx('COLORS', c, 'name'), ja.COLORS.ZJ3.name);
  await I.setLang('zh-TW');
  assert.equal(I.tx('COLORS', c, 'name'), c.name);
});

// ---------------------------------------------------------------- markets / FX
await test('FX: one dated source, cross rates via USD', () => {
  assert.match(FX.date, /^\d{4}-\d{2}-\d{2}$/);
  assert.match(FX.url, /^https:\/\/www\.federalreserve\.gov\//);
  assert.equal(convert(157.18, 'JPY', 'USD'), 1);
  assert.ok(Math.abs(convert(1, 'EUR', 'USD') - 1.14) < 1e-12);
  assert.ok(Math.abs(convert(100, 'USD', 'TWD') - 3182) < 1e-9);
  assert.equal(convert(1, 'XXX', 'TWD'), null);
  for (const c of ['TWD', 'JPY', 'AUD', 'GBP', 'USD', 'EUR', 'NZD']) assert.ok(RATES_TWD[c] > 0, c);
  assert.ok(Math.abs(RATES_TWD.JPY - 31.82 / 157.18) < 1e-4);
  assert.equal(Object.keys(PER_USD).length, 7);
});

await test('regions: currency, default language, market name, parking', () => {
  assert.deepEqual(Object.keys(REGIONS), ['tw', 'jp', 'us', 'au', 'eu', 'uk']);
  assert.equal(REGIONS.jp.currency, 'JPY'); assert.equal(REGIONS.jp.lang, 'ja');
  assert.equal(REGIONS.tw.lang, 'zh-TW'); assert.equal(REGIONS.uk.lang, 'en');
  assert.equal(I.marketName('jp', 'ja'), 'ジムニー シエラ');
  assert.equal(I.marketName('au', 'en'), 'Jimny');
  assert.ok(I.parkingApplies('tw') && I.parkingApplies('jp'));
  assert.ok(!I.parkingApplies('au') && !I.parkingApplies('us') && !I.parkingApplies('eu') && !I.parkingApplies('uk'));
});

// ---------------------------------------------------------------- price()
await test('price(): same currency is exact, others approximate with the original kept', () => {
  const jp = { price: 38500, cur: 'JPY' };
  const a = I.price(jp, 'jp', { lang: 'ja' });
  assert.equal(a.approx, false); assert.equal(a.text, '¥38,500'); assert.equal(a.amount, 38500);
  const b = I.price(jp, 'tw', { lang: 'zh-TW' });
  assert.equal(b.approx, true); assert.equal(b.cur, 'TWD');
  assert.equal(b.amount, Math.round(38500 * 31.82 / 157.18 / 100) * 100);
  assert.equal(b.original.text, '¥38,500'); assert.equal(b.original.cur, 'JPY');
  assert.ok(b.text.includes('NT$7,800') && b.text !== 'NT$7,800', b.text);
  const c = I.price(jp, 'au', { lang: 'en' });
  assert.ok(c.text.startsWith(STRINGS['price.approx'].en.split('{price}')[0]) && c.text.includes('A$'), c.text);
  assert.ok(c.rateNote.includes(FX.date));
  const tw = I.price({ price: 30900 }, 'tw');          // no cur -> TWD
  assert.equal(tw.approx, false); assert.equal(tw.text, 'NT$30,900');
  const usd = I.price({ price: 134, cur: 'USD' }, 'uk', { lang: 'en' });
  assert.equal(usd.amount, 100);   // 134 / 1.325 = 101.1 -> step 10 for non-yen/NT$ currencies
  assert.equal(I.price({ price: 0 }, 'us', { lang: 'en' }).kind, 'stock');
  assert.equal(I.price({ price: null }, 'us', { lang: 'ja' }).text, STRINGS['price.ask'].ja);
  assert.equal(I.price({ price: 1000, cur: 'CHF' }, 'tw').unconverted, true);
  assert.equal(I.price({ price: 83600, cur: 'JPY' }, 'jp', { amount: 88000 }).amount, 88000);
});

// ---------------------------------------------------------------- available()
await test('available(): list-scoped, any/unknown, ambiguous ids', () => {
  const stock = P.LIFTS.find((x) => x.id === 'stock');
  assert.equal(I.available(stock, 'us', 'LIFTS'), AVAIL.LIFTS.stock.r === 'any' ? true : AVAIL.LIFTS.stock.r.includes('us'));
  const te = P.WHEELS.find((x) => x.id === 'te37xt');
  const r = AVAIL.WHEELS.te37xt.r;
  assert.equal(I.available(te, 'jp', 'WHEELS'), r === 'unknown' ? null : r === 'any' || r.includes('jp'));
  assert.equal(I.available({ id: 'no_such' }, 'jp', 'WHEELS'), null);
  // An unknown record reads null.
  const unk = Object.entries(AVAIL).flatMap(([l, m]) => Object.entries(m).filter(([, a]) => a.r === 'unknown').map(([k]) => [l, k]))[0];
  if (unk) assert.equal(I.available(unk[1], 'tw', unk[0]), null);
  assert.equal(typeof I.availWhy(te, 'WHEELS'), 'string');
});

// ---------------------------------------------------------------- detectRegion()
await test('detectRegion(): override > time zone > language > tw', () => {
  const mem = (init = {}) => { const s = { ...init }; return { getItem: (k) => s[k] ?? null, setItem: (k, v) => { s[k] = v; }, removeItem: (k) => { delete s[k]; } }; };
  const empty = mem();
  assert.equal(I.detectRegion({ storage: empty, timeZone: 'Asia/Tokyo', language: 'en-US' }), 'jp');
  assert.equal(I.detectRegion({ storage: empty, timeZone: 'Australia/Sydney' }), 'au');
  assert.equal(I.detectRegion({ storage: empty, timeZone: 'Europe/London' }), 'uk');
  assert.equal(I.detectRegion({ storage: empty, timeZone: 'Europe/Berlin' }), 'eu');
  assert.equal(I.detectRegion({ storage: empty, timeZone: 'America/Denver' }), 'us');
  assert.equal(I.detectRegion({ storage: empty, timeZone: 'Asia/Taipei' }), 'tw');
  assert.equal(I.detectRegion({ storage: empty, timeZone: 'UTC', language: 'ja-JP' }), 'jp');
  assert.equal(I.detectRegion({ storage: empty, timeZone: 'UTC', languages: ['fr-FR'] }), 'eu');
  assert.equal(I.detectRegion({ storage: empty, timeZone: 'UTC', language: 'en-GB' }), 'uk');
  assert.equal(I.detectRegion({ storage: empty, timeZone: 'UTC', language: 'zh-Hant-TW' }), 'tw');
  assert.equal(I.detectRegion({ storage: empty, timeZone: 'Asia/Seoul', language: 'ko' }), 'tw');
  const s = mem();
  I.setRegion('uk', { storage: s });
  assert.equal(I.detectRegion({ storage: s, timeZone: 'Asia/Tokyo' }), 'uk');
  I.setRegion('zz', { storage: s });   // invalid clears the override
  assert.equal(I.detectRegion({ storage: s, timeZone: 'Asia/Tokyo' }), 'jp');
  const throwing = { getItem() { throw new Error('denied'); }, setItem() { throw new Error('denied'); } };
  assert.equal(I.detectRegion({ storage: throwing, timeZone: 'Asia/Tokyo' }), 'jp');
  I.setRegion('jp', { storage: throwing });   // must not throw
  assert.equal(I.detectLang('jp', { storage: empty }), 'ja');
  assert.equal(I.detectLang('au', { storage: mem({ 'jimny.lang': 'ja' }) }), 'ja');
});

console.log(`catalogue: ${entries} entries, ${fields} zh text fields checked; strings: ${Object.keys(STRINGS).length} keys`);
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
