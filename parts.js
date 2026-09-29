// Real JB74 parts catalogue. Every entry is a product that exists; prices are
// approximate and in the currency the maker quotes. `uncertain: true` marks
// anything research could not pin down — shown in the UI rather than hidden,
// because a configurator that invents specs is worse than one that admits gaps.
//
// The geometry each option drives lives in `fit`: lift in mm, tyre outer
// diameter in mm, rim diameter in inches. Those three are what move the model.

// Taiwan sells one trim (JIMNY GLX) in eight colours. Suzuki Taiwan has never
// published a paint code for any of them, so the codes below are the Japanese
// equivalents matched against the official Taiwanese swatches and catalogue —
// docs/jb74-colors-tw.json records the sampled values behind each one.
//
// `hex` is a daylight albedo for the renderer, not a paint chip: Suzuki's own
// web chips for Chiffon Ivory (#f1e4af) and Medium Gray (#94989a) are far
// lighter than the real paint and were rejected. `name` leads with the name
// Taiwan actually sells the colour under.
//
// 黃色 and 藍色 reach Taiwan only as the black-roof two-tone, so switch the
// 雙色車頂 toggle on for them; 米黑色 is 米色 with the same toggle.
export const COLORS = [
  { code: 'ZJ3', name: '黑色（Bluish Black Pearl 3）',        hex: 0x16191c, twoTone: false, tw: true,
    note: '台灣 2022 年才加入；深藍調珍珠黑' },
  { code: 'ZVL', name: '灰色（Medium Gray）',                 hex: 0x63645f, twoTone: false, tw: true,
    note: '台灣自 2019 年連續供應的素色灰' },
  { code: 'ZVR', name: '白色（Pure White Pearl）',            hex: 0xf2f3f0, twoTone: false, tw: true,
    note: '台灣官方只寫「白色」未標代碼，珍珠白 ZVR 與素白 26U 兩者色相幾乎相同' },
  { code: 'ZZC', name: '軍綠色（Jungle Green）',              hex: 0x444a3a, twoTone: false, tw: true,
    note: '台灣自 2019 年連續供應' },
  { code: 'ZVG', name: '米色（Chiffon Ivory Metallic）',      hex: 0xc3b79c, twoTone: '2BW', tw: true,
    note: '2025 年才單獨上市；開雙色車頂即為台灣的「米黑色」' },
  { code: 'ZZB', name: '黃色（Kinetic Yellow）',              hex: 0xcbd232, twoTone: 'DG5', tw: '雙色',
    note: '台灣只進雙色的「黃黑色」，日規才有純黃' },
  { code: 'ZWY', name: '藍色（Brisk Blue Metallic）',         hex: 0x0f74a8, twoTone: 'CZW', tw: '雙色',
    note: '台灣只進雙色的「藍黑色」，2022–2024 曾停售' },
  { code: 'Z2S', name: '絲光銀（Silky Silver Metallic）',     hex: 0x8e9295, metal: 0.55,   // a metallic silver: the flat 0xc6c8c7 read as white in the bright studio twoTone: false, tw: false,
    note: '日規全期間都有，台灣從未導入' },
];
// Not a Suzuki colour. No JB74 has ever been sold in red -- Japan, Taiwan,
// Australia and the UK all checked; only the five-door JC74 gets "Sizzling
// Red" -- so the rally red is a wrap film, and says so.
COLORS.push(
  { code: '2080-G13', name: '紅色（3M 2080 Gloss Hot Rod Red 改色膜）', hex: 0xc81b22, twoTone: false, tw: false, wrap: true,
    note: '非原廠色。JB74 在日本、台灣、澳洲、英國都沒有原廠紅，只有五門的 JC74 有 Sizzling Red。這是 3M 改色膜 2080-G13；台灣包膜行的休旅車級距 3M 膜約 NT$115,000（不是 Jimny 專屬報價，車小可能更低）。顏色是照產品照片估的，3M 不公布色碼' });
// Also not a Suzuki colour: DAMD's little 5. demo car. DAMD publish no paint
// code or film for it; the albedo is sampled off their studio side view.
COLORS.push(
  { code: 'DAMD-L5', name: '紫藍（DAMD little 5. 示範車色，非原廠）', hex: 0x33388a, metal: 0.35, twoTone: false, tw: false, wrap: true,
    note: '非原廠色。DAMD 沒有公布色號，也沒寫是烤漆還是包膜；顏色是照 DAMD 官網棚拍側面照取樣的深紫藍（棚燈下偏紫）。JB74 原廠藍 Brisk Blue ZWY 是較淺的青藍，不是這個顏色' });
/**
 * The lower half of a split-paint car: everything below the line round the
 * car at the window sill (y 1000 mm), and the arch flares with it when they
 * are painted. None of this is a Suzuki option -- it is a respray or a wrap
 * of the lower body, which is how Beyond's demo cars are done -- so it says
 * so and carries no invented price.
 */
export const SPLIT_PAINTS = [
  { id: 'none', label: '單色（不分色）' },
  { id: 'orange', label: '復古橘', hex: 0xd0621f, note: 'Beyond CODE01 的上象牙下橘' },
  { id: 'purple', label: '紫（改色膜）', hex: 0x6a3a98, note: 'Beyond CODE20 的上灰下紫，紫色是改色膜' },
  { id: 'black', label: '黑（ZJ3 同色）', hex: 0x16191c, note: 'Beyond CODE32 的上灰下黑' },
  { id: 'cream', label: '奶油白', hex: 0xe8dfc6 },
  { id: 'brown', label: '深咖啡', hex: 0x5a3b27 },
  { id: 'green', label: '軍綠（ZZC 同色）', hex: 0x444a3a },
  { id: 'red', label: '磚紅', hex: 0x9a2a1e },
];
export const SPLIT_Y = 1000;          // mm: the window sill line, sampled belt 995

/** Covers over the stock round headlamps. Beyond's is a yellow acrylic
 *  overlay stuck on with tape -- the French-yellow look of their cream demo
 *  car (docs/jb74-beyond-styles.json). */
export const LAMP_COVERS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'beyond_yellow', url: 'https://shop.beyond-jpn.com/products/behlc', label: 'リベル 黃色大燈罩', price: 19800, cur: 'JPY', brand: 'Beyond Japan',
    part: 'behlc', tint: 0xf3c21c,
    note: '黃色壓克力貼片，附雙面膠直接貼在原廠大燈上，JB64／JB74／JC74 全等級通用。定價 ¥19,800 稅込（官網特價 ¥15,840）' },
];

/** Roof-rack paint. Every rack in the catalogue ships black or bare
 *  aluminium; a light rack is a respray (Beyond's own ivory Liberte rack,
 *  berr-iv at ¥99,000, is discontinued), so these carry no price. */
export const RACK_PAINTS = [
  { id: 'none', label: '原色（黑／鋁）' },
  { id: 'ivory', label: '象牙白烤漆', hex: 0xe9e1cc },
  { id: 'sand', label: '沙色烤漆', hex: 0xc7b28a },
  { id: 'olive', label: '橄欖綠烤漆', hex: 0x5b6345 },
];

export const ROOF_BLACK = 0x16191c;   // ZJ3 — the only two-tone roof Suzuki offers

// Suspension lifts, grouped by the inch class the trade uses. `lift` is the
// static height gain in mm that moves the model; `inch` is the class label.
// Beyond 50mm the front propshaft meets the stock crossmember, so every kit
// from 2" up needs a drop bracket; 3"+ needs caster correction; 4" is in
// practice 2–3" of suspension plus a body lift.
export const LIFTS = [
  { id: 'stock', label: '原廠', inch: '原廠', lift: 0, body: 0, price: 0, brand: 'SUZUKI',
    note: '原廠離地 210mm；原廠高度最大可裝 215/70R16' },
  // ---- 1 吋 (20–30mm)
  // The list ran from stock upwards only, which quietly made "modified" mean
  // "taller". Japan's street scene goes the other way and this is the spring
  // it uses.
  { id: 'klc_turtles', url: 'https://www.klc-div.com/heritage/product/suspension/superdownspringturtles/', label: 'SUPER DOWN SPRING TURTLES 降低彈簧', inch: '−2"', lift: -50, body: 0, price: 30800, cur: 'JPY',
    brand: 'KLC Heritage', refs: ['https://www.klc-div.com/heritage/all-brand/chrome/', 'https://www.klc-div.com/heritage/all-brand/mature/'],
    note: '只換彈簧的降低組，適用 JB64W／JB74W／JC74W，¥30,800 稅込。商品頁只寫 JB64 約降 40mm；KLC 自家兩台 JB74W 示範車頁寫了 JB74 的數字：CHROME「前後45ミリ～50ミリ」、MATURE「50～60ミリほどダウン」，這裡取 50mm' },
  { id: 'klc30', url: 'https://www.klc-div.com/heritage/product/suspension/lift-upspringtodoroki/', label: 'Heritage 轟 升高彈簧', inch: '1"', lift: 30, body: 0, price: 38500, cur: 'JPY',
    brand: 'KLC', note: 'KLC Heritage 商品頁：リフトアップサスペンション轟 ¥38,500 稅込，官方僅列「JB64W／JB74W シエラ／JC74W ノマド」共用適用，未單獨標示 JB74 的升高量；頁面上出現的「約 30mm」其實是 JB64 的數字。純彈簧套件，沿用原廠避震、在原廠行程內升高，官方稱免延長煞車油管、裝著狀態可通過車檢。JB74 實際升高量官網未公布，此處沿用 JB64 的數字估算。',
    uncertain: true },
  { id: 'sg25', url: 'https://www.showa-garage.shop/shopdetail/000000000529/', label: '1 吋升高彈簧', inch: '1"', lift: 25, body: 0, price: 40700, cur: 'JPY',
    brand: 'SHOWA GARAGE', part: 'S00350', note: '只換彈簧；建議加橫拉桿組（含拉桿 ¥90,200）' },
  { id: 'ms20', url: 'https://www.monster-sport.com/product/parts/sus/jb74w_hisusset/', label: '20mm 懸吊組', inch: '1"', lift: 20, body: 0, price: 99000, cur: 'JPY',
    brand: 'MONSTER SPORT', part: '510500-5600M', note: 'MONSTER SPORT 現行實際在售的 JB74W 專用品為「ハイトアップサスペンションセット」，品番 510500-5600M，¥99,000 稅込（¥90,000 稅抜），前後各升高約 20mm、14 段可調，彈簧常數前 2.3／後 2.5 kgf/mm，官方註明 JB74W 專用、不適用 JB64W。原目錄寫的 type-2（品番 510502-5600ML，¥94,600 稅込）官網仍標示「開発中」、為預定售價，尚未正式開賣，故換成現行實際在賣的品項。' },
  { id: 'apio20', url: 'https://www.apio.jp/parts/1028-1aa.html', label: '7420SA 懸吊組', inch: '1"', lift: 20, body: 0, price: 141900, cur: 'JPY', brand: 'APIO',
    part: '1028-1AA', note: 'アピオ官網現行定價 ¥141,900 稅込，品番 1028-1AA，JB74 專用，升高約 20mm。內容為 JB74 專用 20mm 彈簧、14 段減衰力可調避震器、LED 頭燈水平調整板與螺帽。官方註明為車檢對應品（免結構變更），安裝不需延長煞車油管。' },
  { id: 'es30', url: 'https://www.4x4es.co.jp/2021/02/19/', label: 'Country 30mm 懸吊組', inch: '1"', lift: 30, body: 0, price: 139700, cur: 'JPY',
    brand: '4x4 Engineering', part: '74743-31C', note: '4x4 Engineering 官方報價：JB74 30mm 基本款 74743-31C ¥127,000 稅抜（¥139,700 稅込），內容只有前後彈簧與 14 段可調避震器，不含橫拉桿或轉向阻尼器。同系列另有 74743-31LC（LED 頭燈水平支架版，¥142,560 稅込）、74743-32C（加橫拉桿，¥199,100 稅込）等規格。' },
  // ---- 1.5 吋 (40mm)
  { id: 'jaos40', url: 'https://www.jaos.co.jp/product/A734518Z/3218/', label: 'BATTLEZ VFS ver.A 40mm 全套組', inch: '1.5"', lift: 40, body: 0, price: 184800,
    cur: 'JPY', brand: 'JAOS', part: 'A734518Z', note: 'JAOS 官網定價 ¥184,800 稅込（¥168,000 稅抜），品番 A734518Z，適用 2018.07- JB74 系全等級，官方標示前後升高量為 35〜40mm（並非固定 40mm），產品淨重 24.54kg。內容含鈦合金彈簧、搭載 Harmoflex 的阻尼器、長煞車油管、前後橫拉桿、Assist Kit（前 Caster 襯套與定位治具）與 LED 頭燈車用水平調整長支架；長煞車油管確認是套件內容物之一，不是另購件。' },
  { id: 'apio40', url: 'https://www.apio.jp/parts/1034-1ae.html', label: '7440Ti 懸吊全套組', inch: '1.5"', lift: 40, body: 0, price: 276100, cur: 'JPY', brand: 'APIO',
    part: '1034-1AE', note: 'アピオ官網定價 ¥276,100 稅込，品番 1034-1AE，JB74 專用，升高約 40mm，車檢對應（免結構變更）。內容為 A2000Ti 含鈦彈簧一台份、長行程 14 段可調避震器、前後調整式強化橫拉桿、後緩衝塊墊片、Caster 偏心襯套、延長煞車油管、LED 頭燈水平調整板。官網全文未提及駕駛座方向限制，原本「⚠ 僅支援右駕」查無依據，已拿掉。' },
  { id: 'omr40', url: 'https://megajimny.com/products/arb-old-man-emu-40mm-lift-kit-2018-jimny', label: 'Old Man Emu 40mm 懸吊組', inch: '1.5"', lift: 40, body: 0, price: 2410, cur: 'AUD', brand: 'ARB',
    note: '含橫樑補強、Panhard 座、煞車油管延長、Caster 襯套；彈簧依保桿／絞盤重量選' },
  { id: 'dob40', url: 'https://megajimny.com/products/dobinsons-ims-monotube-40mm-lift-kit', label: 'IMS Monotube 40mm 懸吊組', inch: '1.5"', lift: 40, body: 0, price: 1949, cur: 'AUD',
    brand: 'Dobinsons' },
  { id: 'td40', url: 'https://www.toughdog.com.au/Products/SuzukiJimnyJB74.aspx', refs: ['https://www.directsuspensions.com.au/products/tough-dog-40mm-lift-kit-for-suzuki-jimny-jb74-3-door-2019-on'], label: 'Foam Cell 40mm 懸吊組', inch: '1.5"', lift: 40, body: 0, price: 1467, cur: 'AUD',
    brand: 'Tough Dog' },
  // ---- 2 吋 (50mm)
  { id: 'sg50', url: 'https://www.showa-garage.shop/shopbrand/I84526', label: 'SG Custom 50 Ennepetal 懸吊組', inch: '2"', lift: 50, body: 0, price: 323400,
    cur: 'JPY', brand: 'SHOWA GARAGE', part: 'S00853', note: 'BA 全套 ¥480,700（加長煞車油管＋橫拉桿）' },
  { id: 'cusco50', url: 'https://shop.nstparts.com/products/cusco-2-inch-lift-suspension-kit-suzuki-jimny-jb74', label: '2 吋懸吊組（50–75mm 可調）', inch: '2"', lift: 50, body: 0, price: 167200, cur: 'JPY',
    brand: 'CUSCO', part: '60N-6JS-U20', note: 'CUSCO 官網定價 ¥167,200 稅込（¥152,000 稅抜），JB74W 品番 60N-6JS-U20（JB64W 為另一品番 60M-6JS-U20，規格相同）。車高調整範圍 +50〜+75mm，前後 14 段減衰力可調。內容含避震器、彈簧、螺牙墊片、大容量緩衝塊各 4 件、延長煞車油管、ABS 線束與自由輪轂油管移位套件。升高 2 吋以上前傳動軸易與原廠橫樑干涉，建議另購下移支架；LED 頭燈自動水平車型需另購調整桿。' },
  { id: 'im50', url: 'https://ozjimny.com/products/ironman-4x4-50mm-suspension-lift-kit-constant-front-load-with-gas-shock-absorbers', label: 'Nitro Gas 50mm 懸吊組', inch: '2"', lift: 50, body: 0, price: 1757, cur: 'AUD',
    brand: 'Ironman 4x4', part: 'SUZ010BKG', note: '含延長煞車油管、橫樑下降座、2° Caster 襯套、延長緩衝塊' },
  // ---- 2.5 吋 (60mm)
  { id: 'tg60', url: 'https://www.ors-taniguchi.co.jp/parts-cat/jb_suspension/', label: 'SOLVE ACE60 懸吊組', inch: '2.5"', lift: 60, body: 0, price: 220220, cur: 'JPY',
    brand: 'TANIGUCHI', note: 'オフロードサービスタニグチ官網（2025.2.1 改價後）：SOLVE ACE60 サスペンションキット JB74 用 ¥220,220 稅込，升高約 60mm。內容含彈簧、專用避震器、延長煞車油管、キャスタードリーム、橫拉桿、後橫拉桿補正支架、偏置防傾桿墊片。原廠第三橫樑無法沿用，官方標示「裝著推奨」需另購 SOLVE クロスメンバー ¥29,700；1〜4 型原廠 LED 頭燈車另需調整式水平調整桿。' },
  { id: 'td60', url: 'https://www.toughdog.com.au/Products/SuzukiJimnyJB74.aspx', refs: ['https://ozjimny.com/products/tough-dog-4wd-suspension-60mm-suspension-lift-kit-with-braided-brake-lines-steel-bullbar-no-winch'], label: 'Foam Cell 60mm 懸吊組', inch: '2.5"', lift: 60, body: 0, price: null, cur: 'AUD',
    brand: 'Tough Dog', uncertain: true, note: '含編織煞車油管；報價制' },
  // ---- 3 吋 (75mm)
  { id: 'sg75', url: 'https://www.showa-garage.shop/shopbrand/I84527/', label: 'SG 彈簧 75 X-SHOCK 懸吊組', inch: '3"', lift: 75, body: 0, price: 234300, cur: 'JPY',
    brand: 'SHOWA GARAGE', part: 'S00373', note: 'JB74 適用 1〜5 型。標準組 ¥234,300（S00373）、B 組 ¥246,400（S00374）、BA 全套 ¥389,400（S00375），皆稅込；需另購 Caster 修正臂。原本記的 S00472／¥253,000／BA ¥394,900 三個數字都是五門 JC74 的' },
  { id: 'es70', url: 'https://www.4x4es.co.jp/2025/04/08/', label: 'Country 70mm 懸吊組', inch: '3"', lift: 70, body: 0, price: 217030, cur: 'JPY',
    brand: '4x4 Engineering', note: '4x4 Engineering 官方報價：JB74 70mm 基本款 74745-31B ¥197,300 稅抜（¥217,030 稅込），內容為前後彈簧、Harmoflex 14 段可調避震器、後避震墊片、橫樑下移支架、煞車油管、傳動軸墊片。要橫拉桿需升級 74745-32B（¥303,380 稅込），要轉向阻尼器＋橫拉桿的全配為 74745-32LSB（¥330,110 稅込）。原本標示的 ¥315,000 對不上官方任何一組報價，且套件內容也不屬於基本款。',
    part: '74745-31B' },
  { id: 'dob75', url: 'https://megajimny.com/products/dobinsons-ims-monotube-75mm-lift-kit', label: 'IMS 遠端氣瓶 75mm 懸吊組', inch: '3"', lift: 75, body: 0, price: 3699, cur: 'AUD',
    brand: 'Dobinsons', note: '含橫樑下降、前後可調橫拉桿、Caster 襯套、大燈水平支架、延長油管' },
  { id: 'br75', url: 'https://www.jimnybits.com/3-75mm-suzuki-jimny-black-raptor-full-suspension-lift-kit-2019-on.html', label: 'Black Raptor 3 吋懸吊全套', inch: '3"', lift: 75, body: 0, price: null, cur: 'GBP',
    brand: 'JimnyBits', uncertain: true, note: '含 Caster 修正拉桿臂＋可調 Panhard' },
  // ---- 4 吋 (100mm)
  { id: 'br100', url: 'https://www.jimnybits.com/4-100mm-suzuki-jimny-black-raptor-full-suspension-lift-kit-2019-on.html', label: 'Black Raptor 4 吋懸吊全套', inch: '4"', lift: 100, body: 0, price: 1586, cur: 'GBP',
    brand: 'JimnyBits', note: '彈簧、避震、4 支 Caster 修正臂、2 支可調 Panhard、編織油管、橫樑下降；左右駕彈簧不同' },
  { id: 'sg50bl', label: '50mm 懸吊＋25mm 車身舉升', inch: '3"', lift: 50, body: 25, price: null, cur: 'JPY',
    brand: 'SHOWA GARAGE / JimnyBits', uncertain: true, note: '2 吋懸吊加車身墊高，31 吋胎的常見組合' },
  { id: 'combo100', url: 'https://www.zookoffroad.com.au/product-page/jimny-4-100mm-black-raptor-full-suspension-lift-kit-jb', label: '2 吋懸吊＋2 吋車身舉升', inch: '4"', lift: 50, body: 50, price: null, cur: 'AUD',
    brand: 'Black Raptor / ZOOK', uncertain: true, note: '用車身舉升取代 Caster 修正臂與 Panhard 的組合路線' },
];


export const BODY_LIFTS = [
  { id: 'none', label: '不裝', body: 0, price: 0 },
  { id: 'bl25', label: '25mm 車身舉升組', body: 25, price: null, cur: 'GBP', brand: 'JimnyBits',
    note: '墊高車身本體，真正增加輪拱空間，免切割。31 吋的標準搭配' },
];

// ---- Wheels (re-researched 2026-09-27: docs/jb74-wheels-jp.json, docs/jb74-wheels-tw.json)
// Every entry is a JB74 (Sierra) row of the maker's own size table -- never
// the JB64 +20/+22 row. `finishes` are the colours that wheel is actually sold
// in for THAT size (maker's name verbatim), hex sampled from the maker's photo;
// `hex2` is the design's second colour (machined lip, contrast ring, bolt
// heads -- blender/rims.py says which surface per design). A finish `price`
// overrides the wheel's. `style` names the face in rims.glb; `mit` is true
// only where a Taiwan listing shows Made in Taiwan, 'unclear' where it does not.
const F = (id, name, hex, o = {}) => ({ id, name, hex, ...o });
// RAYS made-to-order colours (+¥3,300 / +¥4,400 / +¥7,700 on the standard price)
const RAYS_OPT = (base) => [
  ['DW', 'ダッシュホワイト（DW）', 0xf4f5f8, 3300, 'gloss'], ['MB', 'マットブラック（MB）', 0x0e0a0c, 3300],
  ['RE', 'レッド（RE）', 0x851a20, 3300, 'gloss'], ['DB', 'ダイヤモンドブラック（DB）', 0x201d21, 3300, 'metal'],
  ['BL', 'マグブルー（BL）', 0x121d3d, 3300, 'metal'], ['BK', 'ブラック（BK）', 0x242422, 3300, 'gloss'],
  ['MZ', 'マットガンブロンズ（MZ）', 0x977658, 3300], ['GB', 'マットブルーガンメタ（GB）', 0x21374f, 3300],
  ['GM', 'ガンメタ（GM）', 0x8e8f8b, 3300, 'metal'], ['GO', 'ゴールド（GO）', 0xafa677, 3300, 'metal'],
  ['DS', 'ダイヤモンドシルバー（DS）', 0xa7a7a4, 3300, 'metal'], ['DG', 'ダークガンメタ（DG）', 0x271f29, 3300, 'metal'],
  ['HL', 'ハイパーブルー（HL）', 0x1a337f, 4400, 'metal'], ['IG', 'レーシンググリーン（IG）', 0x033129, 4400, 'gloss'],
  ['MR', 'メタリックレッド（MR）', 0xbf5b5c, 4400, 'metal'], ['SI', 'シャイニングライトメタル（SI）', 0xbcbcbc, 7700, 'metal'],
  ['HM', 'シャイニングブラックメタリック（HM）', 0x5a5a58, 7700, 'metal'], ['SZ', 'シャイニングブロンズメタル（SZ）', 0xbca684, 7700, 'metal'],
].map(([id, name, hex, add, sheen]) => F(id, name + '・受注色', hex, { price: base + add, ...(sheen ? { sheen } : {}) }));

export const WHEELS = [
  // ---- 原廠
  { id: 'oem', kind: '原廠', label: '原廠鋁圈', rim: 15, width: 5.5, offset: 5, style: 'oem', price: 0, brand: 'SUZUKI',
    url: 'https://www.suzuki.co.jp/car/jimny_sierra/',
    note: 'JC 車型標配：五支 Y 字輻、每支在半徑中段分岔成 V 到輪緣，黑色 S 字小蓋、螺帽外露。原廠是深槍灰塗裝（不是亮銀），Suzuki 未公布色名；ET+5、中心孔 108 是業界通用值，官網也未公布',
    finishes: [F('GM', '深槍灰（原廠未公布色名）', 0x5f6064, { sheen: 'metal' })] },
  { id: 'oemsteel', kind: '原廠', label: '原廠鋼製輪框（JL）', rim: 15, width: 5.5, offset: 5, style: 'oemsteel', price: 0, brand: 'SUZUKI',
    url: 'https://www.suzuki.co.jp/car/jimny_sierra/',
    note: 'JL 車型標配、所有車型的備胎也是這顆：壓製鋼圈、一圈 10 個圓孔、黑色 S 字蓋。色名與 offset 官網未公布',
    finishes: [F('BK', '黑色塗裝（原廠未公布色名）', 0x353535, { sheen: 'satin' })] },
  { id: 'suzuki_acc15', kind: '原廠', label: '原廠選配鋁圈（Jimny 字樣）', rim: 15, width: 5.5, offset: 5, style: 'suzacc', price: 19800, cur: 'JPY', brand: 'SUZUKI 純正アクセサリー',
    url: 'https://www.suzuki.co.jp/accessory_car/jimny_sierra-accessory.html', uncertain: true,
    note: 'Suzuki 日本官網選配「アルミホイール（15インチ）切削加工＋ブラック Jimnyロゴ付」，¥19,800／本（メーカー希望小売価格・稅込），15×5 1/2J，不能當備胎。五支寬角輻、輪轂外一圈 15 個小通風孔、外圈切削亮面。offset 官網未公布，這裡照原廠 +5 畫',
    finishes: [F('BKM', '切削加工＋ブラック', 0x0e1011, { hex2: 0xd8dadc, sheen: 'gloss' })] },
  { id: 'suzuki_accsteel', kind: '原廠', label: '原廠選配鋼圈（消光黑）', rim: 15, width: 5.5, offset: 5, style: 'oemsteel', price: 16500, cur: 'JPY', brand: 'SUZUKI 純正アクセサリー',
    url: 'https://www.suzuki.co.jp/accessory_car/jimny_sierra-accessory.html', uncertain: true,
    note: 'Suzuki 選配「スチールホイールセット（15インチ）マットブラック」，¥16,500／本（稅込），同一圈 10 孔的鋼圈造型、不附中心蓋。是否與 JL 標配同一片壓製、offset 官網未寫',
    finishes: [F('MBK', 'マットブラック', 0x1c1f20)] },

  // ---- RAYS
  { id: 'te37xt', label: 'TE37XT for J 鍛造輪框', rim: 16, width: 5.5, offset: 0, style: 'te37xt', price: 83600, cur: 'JPY', brand: 'RAYS VOLK RACING',
    url: 'https://www.rayswheels.co.jp/products/brand/detail/132', part: '06456550015BC／06456550015BR',
    note: '鍛造一件式。深錐面圓盤開 6 個 D 形窗（不是六支輻條），平唇上一圈細亮邊。RAYS 表上標 JIMNY SIERRA 的是 16×5.5J ±0（本目錄）與 16×6.0J −5（BC ¥84,700／BR ¥89,100）；16×5.5J +20 是 JB64。中心孔 112、不是輪轂定心，原廠中心蓋裝不上。標準色 BC、BR，另有 18 色受注色（加 ¥3,300〜¥7,700）；PH 是另一個商品頁的 Black Shadow LTD. 限量款',
    finishes: [F('BC', 'ブラストブラック（BC）', 0x3a3a3c, { hex2: 0xd8d8d8, sheen: 'satin' }),
      F('BR', 'ブロンズ（アルマイト）（BR）', 0x7d6655, { hex2: 0xd8d8d8, price: 88000, sheen: 'metal' }),
      F('PH', 'マットトランスルーセントブラック（PH）・Black Shadow LTD.', 0x35353a, { price: 89100 }),
      ...RAYS_OPT(83600)] },
  { id: 'te37xt_ul', label: 'TE37XT for J UL 鍛造輪框', rim: 16, width: 6.0, offset: -6, style: 'te37xtul', price: 86900, cur: 'JPY', brand: 'RAYS VOLK RACING',
    url: 'https://www.rayswheels.co.jp/products/brand/detail/133', part: '06466606615MT',
    note: 'TE37XT for J 的輕量版（RAYS：輕約 350g），16×6.0J −6、中心孔 108.8，原廠中心蓋裝得上（僅後輪）。沒有亮邊，輻窗較大。標準色 MT，另有同一套受注色',
    finishes: [F('MT', 'マットガンブラック（MT）', 0x484746), ...RAYS_OPT(86900)] },
  { id: 'alapj', label: 'A・LAP-J 鍛造十輻輪框', rim: 16, width: 5.5, offset: 0, style: 'alapj', price: 63800, cur: 'JPY', brand: 'RAYS A・LAP', uncertain: true,
    url: 'https://www.rayswheels.co.jp/products/brand/detail/148', part: '10026550015BD／10026550015BR',
    note: '十支細直輻落在 55mm 深的 L 型輪唇裡，BD 的輪唇是鑽石切削亮面。RAYS 尺寸表不寫車型，官方文案說「シエラにも対応」，本目錄照 offset 採 16×5.5J ±0（JB64 是 +20 那列）。16×6.0J −5 只有 2324 LIMITED（PH）與 DESERT EDITION（MI）限量款，−6 只有 PRO（DW）',
    finishes: [F('BD', 'ブラック／リムDC（BD）', 0x242424, { hex2: 0xd6d7d6, sheen: 'gloss' }),
      F('BR', 'ブロンズ（アルマイト）（BR）', 0x7f6f5d, { price: 68200, sheen: 'metal' })] },
  { id: 'alap07x', label: 'A・LAP-07X 七輻鍛造輪框 16 吋', rim: 16, width: 6.0, offset: -5, style: 'alap07x', price: 72600, cur: 'JPY', brand: 'RAYS A・LAP', uncertain: true,
    url: 'https://www.rayswheels.co.jp/products/brand/detail/144', part: '10096606515BD／10096606515BR',
    note: '七支主輻在半徑一半處分岔、相鄰的臂交會成七個節點再各分兩支到輪緣（14 個端點）。RAYS 表不寫車型，16×6.0J −5（F3 面）照 offset 判定為 Sierra 列；16×5.5J +20 是 JB64',
    finishes: [F('BD', 'ブラック／リムDC（BD）', 0x18191a, { hex2: 0xdbdddf, sheen: 'gloss' }),
      F('BR', 'ブロンズ（アルマイト）（BR）', 0x8a7662, { price: 74800, sheen: 'metal' })] },
  { id: 'street18', label: 'A・LAP-07X 七輻鍛造輪框 18 吋', rim: 18, width: 7.0, offset: 8, style: 'alap07x', price: 97900, cur: 'JPY', brand: 'RAYS A・LAP', part: '10098700815BD',
    url: 'https://www.rayswheels.co.jp/products/brand/detail/144',
    note: '同上 A・LAP-07X 的 18 吋（F1 面、S 輪唇 32mm），5×139.7、中心孔 108.8。RAYS 的實車配置是 18×7.0J +8 配 225/60R18、原廠車高；另有 −2（10098706215）。RAYS 頁面沒有逐列寫車型與葉子板說明。WedsSport、MLJ、Bradley V 給 JB74 的都只到 16 吋，這是查到唯一的 JB74 18 吋日系現行款',
    finishes: [F('BD', 'ブラック／リムDC（BD）', 0x18191a, { hex2: 0xdbdddf, sheen: 'gloss' }),
      F('BR', 'ブロンズ（アルマイト）（BR）', 0x8a7662, { price: 100100, sheen: 'metal' })] },
  { id: 'gl57drx', label: 'gram LIGHTS 57DR-X 六輻輪框', rim: 16, width: 5.5, offset: 0, style: 'gl57drx', price: 48400, cur: 'JPY', brand: 'RAYS gram LIGHTS', uncertain: true,
    url: 'https://www.rayswheels.co.jp/products/brand/detail/42', part: '58146550015AXZ',
    note: '六支輻、根部寬往外收窄、中間一道稜線，D2 面（比 JB64 的 D1 深）。RAYS 表不寫車型，16×5.5J ±0 照 offset 判定；原廠中心蓋只能裝後輪。ジャングルグリーン是限量色',
    finishes: [F('AXZ', 'スーパーダークガンメタ（AXZ）', 0x3d3c3d, { sheen: 'metal' }), F('DXZ', 'ジャングルグリーン（DXZ）・限定', 0x43473a)] },
  { id: 'gl57xrx', label: 'gram LIGHTS 57XR-X 2×6 輪框', rim: 16, width: 6.0, offset: 5, style: 'gl57xrx', price: 53900, cur: 'JPY', brand: 'RAYS gram LIGHTS',
    url: 'https://www.rayswheels.co.jp/products/brand/detail/57', part: '58306600515Z2／58306600515B2',
    note: '六支主輻在 0.45R 分成 12 片尖刃直到輪緣，外圈一圈凸起的「Speed Brick」方塊。5H 只有 16×6.0J +5 這一列（原廠 offset），RAYS 圖庫有裝在 JB74 的照片；附 GL 中心蓋',
    finishes: [F('Z2', 'ダークブロンズ（Z2）', 0x6f5b4f, { sheen: 'metal' }), F('B2', 'ブラックグラファイト（B2）', 0x2e2f33, { sheen: 'metal' })] },
  { id: 'td_f6boost', label: 'TEAM DAYTONA F6 boost 仿珠圈輪框', rim: 16, width: 6.0, offset: -5, style: 'f6boost', price: 53900, cur: 'JPY', brand: 'RAYS TEAM DAYTONA',
    url: 'https://www.rayswheels.co.jp/products/brand/detail/162', part: '38066606515Z5／38066606515N1',
    note: '六支粗主輻各分成 Y 字，從深輪框裡立起，外圈是約 16 顆螺栓的仿珠圈環。Black Edition 表明寫 JIMNY／JIMNY SIERRA／JIMNY NOMADE 共用 16×6.0J −5（16×5.5J +20 只給 JB64）。Z5 ¥51,700、N1 與 BOJ（Black Edition）¥53,900',
    finishes: [F('Z5', 'ダークブロンズ（Z5）', 0x967f6b, { hex2: 0xe8e8e8, price: 51700, sheen: 'metal' }),
      F('N1', 'セミグロスブラック（N1）', 0x2a2c2d, { sheen: 'satin' }),
      F('BOJ', 'セミグロスブラック（BOJ）・Black Edition', 0x28292b, { hex2: 0xd0d0d0, sheen: 'satin' })] },
  { id: 'td_m9plus', label: 'TEAM DAYTONA M9+ 仿珠圈輪框', rim: 16, width: 6.0, offset: -5, style: 'm9plus', price: 55000, cur: 'JPY', brand: 'RAYS TEAM DAYTONA', uncertain: true,
    url: 'https://www.rayswheels.co.jp/products/brand/detail/175', part: '38126606515BOJ／38126606515BEL',
    note: '九節點網格：外圈 9 個大六角窗、內側 9 個小三角窗，外面是打孔加螺栓的仿珠圈環，附 LPS CAP V2。RAYS 表不寫車型，16×6.0J −5 照 offset 判定（+20 是 JB64）。BEL 是圓盤透明煙燻＋黑環，AOJ 是 SPEC-M',
    finishes: [F('BOJ', 'セミグロスブラック（BOJ）', 0x333537, { sheen: 'satin' }),
      F('BEL', 'ブラック／ディスククリアスモーク（BEL）', 0x7f8487, { hex2: 0x111213, price: 60500, sheen: 'gloss' }),
      F('AOJ', 'セミグロススーパーダークガンメタ（AOJ）・SPEC-M', 0x545456, { price: 53900, sheen: 'satin' })] },
  { id: 'td_fdxj', label: 'TEAM DAYTONA FDX-J 雙軌輻輪框', rim: 16, width: 5.5, offset: 0, style: 'fdxj', price: 50600, cur: 'JPY', brand: 'RAYS TEAM DAYTONA', uncertain: true,
    url: 'https://www.rayswheels.co.jp/products/brand/detail/171', part: '38846550015DW／38846550015BNN',
    note: '五支輻各是兩條平行軌、中間黑槽，到外圈張開成 V，外圈是黑板與亮面相間的分段仿珠圈。輪框深 67.8mm（RAYS）。表不寫車型，16×5.5J ±0 照 offset 判定（+20 是 JB64）',
    finishes: [F('DW', 'ブラック／ダイヤモンドカット（DW）', 0x111112, { hex2: 0xc9c9ca, sheen: 'gloss' }), F('BNN', 'ブラック（BNN）・FDX-J collection', 0x1a1b1b, { sheen: 'gloss' })] },
  { id: 'td_d108', label: 'TEAM DAYTONA D108 八輻輪框', rim: 16, width: 6.0, offset: -5, style: 'd108', price: 55000, cur: 'JPY', brand: 'RAYS TEAM DAYTONA',
    url: 'https://www.rayswheels.co.jp/products/brand/detail/5', part: '38106606515BPJ',
    note: '八支平寬輻（幾乎和窗一樣寬）、平面、深輪框、素面寬唇，附 LPS CAP V2。5H 只有這一列，RAYS 圖庫有 Jimny Sierra 實車照。只有消光黑（Dark Bronze 只出 6H 17/18 吋）',
    finishes: [F('BPJ', 'マットブラック（BPJ）', 0x3c3c3f)] },

  // ---- WORK
  { id: 'crag_tgrabic2', label: 'CRAG T-GRABIC II MC+ 仿珠圈輪框', rim: 16, width: 5.5, offset: 0, style: 'tgrabic', price: 49500, cur: 'JPY', brand: 'WORK CRAG', uncertain: true,
    url: 'https://www.work-wheels.co.jp/search/detail/179/', part: 'CGTG2K',
    note: '六支粗輻（中間銑一道溝）潛向下凹的輪轂，外面一圈 18 個方孔，再外面是加工亮面螺栓的圓弧仿珠圈。WORK 的 5H-139.7 非 JB64 列只有 16×5.5J ±0，但 WORK 的 JB74 對照表沒把它列進去，裝車前請向 WORK 確認。日本製',
    finishes: [F('BLKPM', 'ブラックピアスマシニング（BLKPM）', 0x151515, { hex2: 0xb0afaf, sheen: 'gloss' })] },
  { id: 'crag_galvatre2', label: 'CRAG GALVATRE 2 三片式輪框', rim: 16, width: 6.0, offset: 0, style: 'galvatre', price: 80300, cur: 'JPY', brand: 'WORK CRAG', uncertain: true,
    url: 'https://www.work-wheels.co.jp/search/detail/152/', part: 'CG2',
    note: '三片式：略帶旋向的五輻星沉在深階梯拋光輪唇裡，外圈約 40 顆鍍鉻穿透螺栓，無中心蓋。WORK 沒有標 JB74 的列，offset 由三片式組合決定（6.0J 可選 +26／+13／0／−12／−25），這裡取 ±0；MGM 5.5J ¥79,200、6.0J ¥80,300，MSP 貴 ¥2,200。另有半訂製色與鍍色螺栓選項。實車有 16×5.5J 裝 JB74 的示範車',
    finishes: [F('MGM', 'マットカーボン（MGM）', 0x696863, { hex2: 0xcdcfd1 }), F('MSP', 'カットクリア（MSP）', 0xb7b8b9, { hex2: 0xd8dadb, price: 82500, sheen: 'machined' })] },

  // ---- Weds
  { id: 'mv06', label: 'MUD VANCE 06 V 字雙輻輪框', rim: 16, width: 6.0, offset: -5, style: 'mv06', price: 41250, cur: 'JPY', brand: 'Weds ADVENTURE',
    url: 'https://www.weds.co.jp/weds_adventure/mudvance06/', part: '40228／40227',
    note: '五對 V 字雙輻從凸起的輪轂環張開到輪緣，外圈是多角形塊狀的護緣。Weds 表列 ジムニーシエラ（JB74・43）與 JC74：16×6.0J −5（本目錄）或 15×6.0J ±0（¥35,200〜¥36,300）。中心孔 110.5，5H-139.7 不附蓋',
    finishes: [F('FMB', 'フルマットブラック', 0x292b2d), F('MBP', 'マットブラックポリッシュ', 0x1a1b1d, { hex2: 0xb0b3b4 }),
      F('BPBC', 'ブラックポリッシュブロンズクリア', 0x0f1011, { hex2: 0x8a8886, price: 42350, sheen: 'gloss' })] },
  { id: 'mv07', label: 'MUD VANCE 07 剖溝星輻輪框', rim: 15, width: 6.0, offset: 0, style: 'mv07', price: 35200, cur: 'JPY', brand: 'Weds ADVENTURE',
    url: 'https://www.weds.co.jp/weds_adventure/mudvance07/', part: '40532／40544',
    note: '五支星輻各剖成兩條、中間長槽，面凸出輪緣 5mm（Weds：ディスク突出量 5㎜），外圈約 20 顆亮面假鉚釘。Sierra 只有 15×6.0J ±0',
    finishes: [F('FMB', 'フルマットブラック', 0x2c3038), F('FG', 'フリントグレイ', 0x62656b, { price: 36300 })] },
  { id: 'mv08', label: 'MUD VANCE 08 三叉輻輪框', rim: 16, width: 6.0, offset: -5, style: 'mv08', price: 40150, cur: 'JPY', brand: 'Weds ADVENTURE',
    url: 'https://www.weds.co.jp/weds_adventure/mudvance08/', part: '41127／41141',
    note: '五支主輻各分成三叉到輪緣，外圈約 15 顆亮面假鉚釘。JB74／JC74 16×6.0J −5；另有 15×6.0J ±0（¥36,300）',
    finishes: [F('FB', 'フリントブラック', 0x333336, { sheen: 'satin' }), F('MBR', 'マットブロンズ', 0x735743)] },
  { id: 'mvx_f', label: 'MUD VANCE X Type F 雙圈窗輪框', rim: 16, width: 6.0, offset: -5, style: 'mvxf', price: 39050, cur: 'JPY', brand: 'Weds ADVENTURE',
    url: 'https://www.weds.co.jp/weds_adventure/mudvancex_type_f/', part: '41547／41556',
    note: '平面拉力盤：外圈 20 個窗、內圈 10 個較小的窗。中心孔 108.25（輪轂定心），原廠後輪中心蓋可用。JB74／JC74 16×6.0J −5',
    finishes: [F('FMB', 'フルマットブラック', 0x2e3239), F('FBR', 'フリントブロンズ', 0x807062, { price: 40150, sheen: 'satin' })] },
  { id: 'mvx_m', label: 'MUD VANCE X Type M 網格輪框', rim: 16, width: 6.0, offset: -5, style: 'mvxm', price: 39050, cur: 'JPY', brand: 'Weds ADVENTURE',
    url: 'https://www.weds.co.jp/weds_adventure/mudvancex_type_m/', part: '41565／41579',
    note: 'X 系列外圈 20 窗，內圈是交叉網格（10 個菱形窗＋小三角）。JB74／JC74 16×6.0J −5，原廠後輪中心蓋可用',
    finishes: [F('FMB', 'フルマットブラック', 0x30343b), F('MGM', 'マットガンメタ', 0x5e626b, { price: 40150 })] },
  { id: 'mvx_s', label: 'MUD VANCE X Type S 寬槳輻輪框', rim: 16, width: 6.0, offset: -5, style: 'mvxs', price: 39050, cur: 'JPY', brand: 'Weds ADVENTURE',
    url: 'https://www.weds.co.jp/weds_adventure/mudvancex_type_s/', part: '41597／41612',
    note: 'X 系列外圈 20 窗，裡面是五支很寬的槳形輻。JB74／JC74 16×6.0J −5；另有 15×6.0J ±0（¥35,200〜¥36,300）',
    finishes: [F('FMB', 'フルマットブラック', 0x2f3339), F('FG', 'フリントグレイ', 0x565866, { price: 40150 })] },
  { id: 'keeler', label: 'KEELER TACTICS 六輻輪框', rim: 15, width: 6.0, offset: 0, style: 'keeler', price: 23650, cur: 'JPY', brand: 'Weds ADVENTURE',
    url: 'https://www.weds.co.jp/weds_adventure/keeler_tactics/', part: '39705／39722',
    note: '經典六輻 4×4 面，每支寬輻中間一道深溝，階梯唇。Weds 表：ジムニーシエラ（JB31・43・74）15×6.0J ±0；中心蓋另購。目錄裡最便宜的日系社外框',
    finishes: [F('HS', 'ハイパーシルバー', 0x8fa4ac, { sheen: 'metal' }), F('GB', 'グロスブラック', 0x1c1d20, { price: 24750, sheen: 'gloss' })] },

  // ---- MLJ
  { id: 'xj03', label: 'XTREME-J XJ03 八圓孔仿珠圈輪框', rim: 16, width: 6.0, offset: -5, style: 'xj03', price: 57200, cur: 'JPY', brand: 'MLJ XTREME-J',
    url: 'https://www.mljinc.co.jp/product/xtreme-j/xj03/',
    note: '深凹圓盤開八個兩段式大圓孔，外圍一圈煙燻色仿珠圈、約 20 顆黑螺栓。MLJ 表 *2：16×6.0J −5，適合「JB74ジムニーシエラ ＊純正キャップ対応」；16×5.5J +20 是 JB64。中心孔 108.5',
    finishes: [F('FBSF', 'フラットブラック／スモークフランジ', 0x2d2d2c, { hex2: 0x5e5e5e })] },
  { id: 'xtremej', label: 'XTREME-J XJ04 交叉網格仿珠圈輪框', rim: 16, width: 5.5, offset: -5, style: 'xj04', price: 59400, cur: 'JPY', brand: 'MLJ XTREME-J',
    url: 'https://www.mljinc.co.jp/product/xtreme-j/xj04/', part: 'XTREME-J XJ04',
    note: '粗壯的九重交叉網格（大六角窗＋輪緣小三角窗），外圈是不鏽鋼螺栓的仿珠圈（アウターフランジアンダーカット）。MLJ 表 *4：JB74 用 16×5.5J −5；16×5.5J +22 是 JB23／JB64。サテンブラック ¥59,400，另兩色 ¥62,700。中心孔未公布',
    finishes: [F('SB', 'サテンブラック', 0x2e2e2c, { sheen: 'satin' }),
      F('GBMS', 'グロスブラックマシーン／スモーククリア', 0x8a898e, { hex2: 0x1c1b1a, price: 62700, sheen: 'machined' }),
      F('MBBR', 'マットブロンズ／ブラックリム', 0xa07e62, { hex2: 0x1a1714, price: 62700 })] },
  { id: 'xj07', label: 'XTREME-J XJ07 梯形窗仿珠圈輪框', rim: 16, width: 6.0, offset: -5, style: 'xj07', price: 62700, cur: 'JPY', brand: 'MLJ XTREME-J',
    url: 'https://www.mljinc.co.jp/product/xtreme-j/xj07/',
    note: '八個梯形 D 窗，16×6.0J −5（*9，JB74ジムニーシエラ）是 ULTRA DEEP CONCAVE（全系列最深），外圈黑色仿珠圈約 24 顆螺栓——舊目錄寫「無假 beadlock」是錯的。孔徑 108.5。サテンブラック ¥62,700、マットブロンズ ブラックリム ¥67,100',
    finishes: [F('SB', 'サテンブラック', 0x26272a, { sheen: 'satin' }), F('MBBR', 'マットブロンズ ブラックリム', 0x8f6a4a, { hex2: 0x141110, price: 67100 })] },
  { id: 'xj08', label: 'XTREME-J XJ08 雙層齒輪輪框', rim: 16, width: 6.0, offset: -5, style: 'xj08', price: 62700, cur: 'JPY', brand: 'MLJ XTREME-J',
    url: 'https://www.mljinc.co.jp/product/xtreme-j/xj08/',
    note: '2025-09 新款：16 片鰭與 16 支副輻、內外兩圈窗錯開半格，像兩層齒輪，外圈是真穿孔加六角螺栓的仿珠圈。MLJ 表 *2：JB74 シエラ／JC74 ノマド 16×6.0J −5；+20 是 JB64',
    finishes: [F('SB', 'サテンブラック', 0x242424, { sheen: 'satin' }), F('GM', 'グロスマシンド', 0xc0c0c0, { price: 67100, sheen: 'machined' }),
      F('MBBR', 'マットブロンズ／ブラックリム', 0x9f7d5d, { hex2: 0x2a2a2c, price: 67100 })] },
  { id: 'daytona_ss', kind: '復古', label: 'DAYTONA SS 兩件式鋼圈', rim: 16, width: 6.0, offset: 0, style: 'daytonass', price: 29700, cur: 'JPY', brand: 'MLJ',
    url: 'https://www.mljinc.co.jp/product/daytona_ss/daytona_ss',
    note: '經典 Daytona 鋼圈：10 個淚滴通風孔、凸起的壓製輪轂、輪緣紅藍細線。MLJ 表 *9（JB74ジムニーシエラ）16×6.0J ±0 ¥29,700、15×6.0J ±0 ¥28,600，offset 兩個都有公布（舊目錄說未公布是錯的）。MLJ 禁用墊片與氣動扳手。16×5.5J +20 那列是 JB64',
    finishes: [F('BK', 'BLACK（レッド／ブルーライン）', 0x2b2a29, { hex2: 0xbd3f3f, sheen: 'gloss' })] },

  // ---- MARUKA SERVICE (MID)
  { id: 'nitro_h12', label: 'NITRO POWER H12 SHOTGUN 輪框', rim: 16, width: 6.0, offset: -5, style: 'h12', price: 53350, cur: 'JPY', brand: 'MARUKA SERVICE NITRO POWER',
    url: 'https://mid-wheels.com/products/brand/detail/222', part: 'L1726605D105030N（BBK）',
    note: '軍用感圓盤：12 個圓孔（孔壁有肋）、一圈 NITRO POWER 字環、外圈是黑色專用穿透螺栓加缺口的裝甲風邊。16×6.0J −5、中心孔 108.8，5H 不附蓋。原廠 JB74 色是 BBK／BKM／SSM 加 Tactical 三色——舊目錄的「霧古銅」不是原廠色。15×6.0J −5 BBK ¥46,750',
    finishes: [F('BBK', 'バレルブラック（BBK）', 0x45474c, { sheen: 'satin' }),
      F('BKM', 'ブラッククリア／マシニング（BKM）', 0xd0d3d2, { hex2: 0x0e0b0d, price: 55550, sheen: 'machined' }),
      F('SSM', 'セミグロススモーク／マシンドフェイス（SSM）', 0x6a6869, { hex2: 0x151515, price: 56100, sheen: 'machined' }),
      F('SOG', 'セミグロスODグリーン（SOG）・Tactical', 0x3f4641, { sheen: 'satin' }),
      F('SSB', 'セミグロスサンドベージュ（SSB）・Tactical', 0xbab3a6, { sheen: 'satin' }),
      F('SGK', 'セミグロスコンクリート（SGK）・Tactical', 0xa6adb5, { sheen: 'satin' })] },
  { id: 'nitro_m10', label: 'NITRO POWER M10 PERSHING 十輻輪框', rim: 16, width: 6.0, offset: -5, style: 'm10', price: 52800, cur: 'JPY', brand: 'MARUKA SERVICE NITRO POWER',
    url: 'https://mid-wheels.com/products/brand/detail/46', part: 'X1666605D105SB00（SBM）',
    note: '十支有折線的直輻、中等內凹，外圈是插銷式仿珠圈。16×6.0J −5、中心孔 108.8、載重 700kg；頁面沒寫車型，依尺寸判定 JB74',
    finishes: [F('SBM', 'セミグロスブラック／マシニング（SBM）', 0x1c1a1b, { hex2: 0x7a7d7f, sheen: 'satin' }),
      F('BMB', 'ブラック／DC＋マシニング／ブラッククリア（BMB）', 0x7f8c99, { hex2: 0x131013, price: 53900, sheen: 'machined' }),
      F('BBK', 'バレルブラック（BBK）', 0x465059, { sheen: 'satin' })] },
  { id: 'nitro_m29', label: 'NITRO POWER M29 STINGER 網格輪框', rim: 16, width: 6.0, offset: -5, style: 'm29', price: 55000, cur: 'JPY', brand: 'MARUKA SERVICE NITRO POWER',
    url: 'https://mid-wheels.com/products/brand/detail/218', part: 'X1936605D1050300（BBK）',
    note: '2×9 網格、交叉點有大平台，外圈同 H12 的裝甲穿透螺栓邊。HSM 照片標「jimny-size 16x6J-5」，中心孔 108.8',
    finishes: [F('BBK', 'バレルブラック（BBK）', 0x40464b, { sheen: 'satin' }), F('HSM', 'ハイパーシルバー／マシンドフェイス（HSM）', 0xcbcacd, { price: 59400, sheen: 'machined' }),
      F('SBC', 'セミグロスブラッククリア（SBC）', 0x7f8991, { hex2: 0x060205, price: 57200, sheen: 'satin' })] },
  { id: 'mudrider', label: 'ROADMAX MUD RIDER 八輻輪框', rim: 15, width: 5.5, offset: 5, style: 'mudrider', price: 25300, cur: 'JPY', brand: 'MARUKA SERVICE ROADMAX', uncertain: true,
    url: 'https://mid-wheels.com/products/brand/detail/155', part: 'V9855555D305MG0N',
    note: '樸實的八支粗輻加鑄造仿珠圈邊，只有一個灰色。15×5.5J +5 就是 JB74 原廠尺寸與 offset，但頁面沒寫車型；中心孔 108.8',
    finishes: [F('MGR', 'メタリックグレー（MGR）', 0x73777b, { sheen: 'metal' })] },

  // ---- KYOHO
  { id: 'ppx_mk6', label: 'PPX MK6 鏤空五輻輪框', rim: 16, width: 6.0, offset: 0, style: 'mk6', price: 47300, cur: 'JPY', brand: 'KYOHO PPX',
    url: 'https://www.kyoho-corp.jp/products/ppx-mk6/',
    note: '五支寬輻中間銑空只留外框（スポークも中央を削りリブ状に縁を残す），外圈是 20 個方形凹槽的仿珠圈（沒有螺栓）。16×6.0J ±0、中心孔 108.3，最大外凸 0.0mm；2025-12 推出，表上沒寫車名',
    finishes: [F('SGM', 'ステルスグレーメタリック', 0x515353, { sheen: 'satin' })] },

  // ---- 4x4 Engineering Service
  { id: 'bradley', label: 'BRADLEY V 五輻輪框', rim: 16, width: 5.5, offset: 0, style: 'bradleyv', price: 53900, cur: 'JPY', brand: '4x4 Engineering BRADLEY',
    url: 'https://4x4es.co.jp/products/wheel/bradley-v/',
    note: '五支很寬的槳形輻（不是六輻）、鯊魚鰭窗只在外側 55%，凸起的螺帽環。低壓鑄造、日本製、中心孔 110。JB74／JC74：16×5.5J ±0（FACE2 平面，本目錄）或 16×6.0J −6（FACE3，¥56,100，有 BSI 亮銀、沒有 MGM）',
    finishes: [F('GMT', 'ガンメタリック', 0x58585b, { sheen: 'metal' }), F('PWI', 'パールホワイト', 0xe2e0e0, { sheen: 'gloss' }), F('MBK', 'マットブラック', 0x363837),
      F('MBR', 'マットブロンズ', 0xad8b62), F('MGM', 'マットガンメタリック', 0x7f7d78)] },
  { id: 'bradley_evo', label: 'BRADLEY V EVOLUTION 輕量五輻輪框', rim: 16, width: 5.5, offset: 0, style: 'bradleyevo', price: 53350, cur: 'JPY', brand: '4x4 Engineering BRADLEY',
    url: 'https://4x4es.co.jp/products/wheel/bradley-v-evolution/',
    note: 'BRADLEY V 的輕量版（MAT 製法，6.4kg），輻條細約四分之一、窗更大。JB74／JC74 16×5.5J ±0；競技規格 SPEC-C 16×5.5J −20（6.1kg，另有四色 ¥55,550〜¥56,650）要加寬葉子板。中心孔 110.5',
    finishes: [F('SBK', 'スーパーブラック', 0x1f1f1e, { sheen: 'gloss' }), F('PWI', 'パールホワイト', 0xd6dae0, { sheen: 'gloss' }), F('MBK', 'マットブラック', 0x343330),
      F('MBR', 'マットブロンズ', 0x80694a)] },
  { id: 'bradley_takumi', label: 'BRADLEY FORGED 匠 鍛造五輻輪框', rim: 16, width: 6.5, offset: -5, style: 'takumi', price: 106700, cur: 'JPY', brand: '4x4 Engineering BRADLEY', uncertain: true,
    url: 'https://4x4es.co.jp/products/wheel/bradley-takumi/',
    note: '8,000 噸鍛造、全面 CNC：五支銳利直輻、三角鯊魚鰭窗尖端朝輪轂、L 中心內凹。JB74／JC74 16×6.5J −5 標「チューナーサイズ」、要加寬葉子板；商品頁 ¥97,000 稅抜（¥106,700 稅込），但 2026-09 價目表 PDF 沒列這個 5 孔尺寸。中心孔 110.3',
    finishes: [F('MDG', 'マットディープグレイ', 0x6c6b67), F('MSB', 'マットシャドーブラック', 0x323334), F('MTB', 'マットチタンブロンズ', 0x8a7658)] },
  { id: 'airg_massive', label: 'Air/G Massive 八橢圓孔輪框', rim: 16, width: 6.0, offset: 0, style: 'massive', price: 55550, cur: 'JPY', brand: '4x4 Engineering Air/G',
    url: 'https://4x4es.co.jp/products/wheel/airg-massive/',
    note: '深凹圓盤開八個放射向橢圓孔、孔緣是寬亮面倒角，外圈是城垛狀仿珠圈加 8 顆六角螺栓，附齒輪邊黑蓋。JB74／JC74 16×6.0J ±0（FACE5）',
    finishes: [F('MBK', 'マットブラック', 0x2a2b2f, { hex2: 0xb9b9b9 }), F('GHG', 'ゴーストエディション', 0x5a5250, { hex2: 0x2a2b2f, price: 57750, sheen: 'satin' })] },
  { id: 'airg_rocks', label: 'Air/G Rocks Y 字網格輪框', rim: 16, width: 6.0, offset: -5, style: 'rocks', price: 55550, cur: 'JPY', brand: '4x4 Engineering Air/G',
    url: 'https://4x4es.co.jp/products/wheel/airg-rocks/',
    note: '十支輻在 0.7R 分成 Y 字的密網格、深凹，外圈城垛仿珠圈加 8 顆黑螺栓、外緣鑽石切削。JB74／JC74 16×6.0J −5（FACE6）。SBB 是在庫限り',
    finishes: [F('MBK', 'マットブラック／リムDC', 0x2a2d2d, { hex2: 0xc8ccc4 }), F('SBB', 'ステルスブロンズブラッシュド／リムDC・在庫限り', 0xa86e34, { hex2: 0xc8ccc4, price: 62700, sheen: 'satin' }),
      F('GHG', 'ゴーストエディション', 0x474747, { hex2: 0x262626, price: 57750, sheen: 'satin' })] },
  { id: 'airg_vulcan', label: 'Air/G VULCAN 雙圈窗輪框', rim: 16, width: 6.0, offset: 0, style: 'vulcan', price: 55550, cur: 'JPY', brand: '4x4 Engineering Air/G',
    url: 'https://4x4es.co.jp/products/wheel/airg-vulcan/',
    note: '階梯內凹圓盤、內圈 12 個小淚滴窗＋外圈 16 個圓角方窗，外圍約 30 顆亮螺栓與凹槽相間的仿珠圈，附齒輪邊黑蓋。JB74／JC74 16×6.0J ±0（FACE-X）',
    finishes: [F('MGM', 'マットガンメタリック（MGM）', 0x535353, { hex2: 0xb4b4b0 }), F('MBR', 'マットブロンズ（MBR）', 0x94714f, { hex2: 0xb4b4b0 }),
      F('GHG', 'ゴーストエディション', 0x6d6761, { hex2: 0x1f1f22, price: 57750, sheen: 'satin' })] },

  // ---- APIO WILDBOAR
  { id: 'wildboar', label: 'WILDBOAR X 五輻星輪框', rim: 15, width: 6.0, offset: -5, style: 'wbx', price: 47300, cur: 'JPY', brand: 'APIO WILDBOAR',
    url: 'https://apio.jp/parts/7200-15.html', part: '7200-15R（レイドブラック）／7200-15G（ガンブラック）',
    note: '五支細長、中間有稜線的箭形輻（不是八輻），輻條收在輪框內、露出深唇，附同色平蓋。15×6.0J −5，¥47,300／本（稅込），約 7.35kg，JB74／JB43／JB33／JB32／JB31 用；APIO 示範 215/75R15 原廠車高不磨。中心孔未公布',
    finishes: [F('R', 'レイドブラック（艶有り黒）', 0x4a4a4c, { sheen: 'metal' }), F('G', 'ガンブラック（艶無し黒）', 0x2e3031)] },
  { id: 'wildboar_x2', label: 'WILDBOAR X2 五輻星輪框', rim: 16, width: 5.5, offset: -5, style: 'wbx2', price: 48400, cur: 'JPY', brand: 'APIO WILDBOAR',
    url: 'https://apio.jp/parts/7200-43.html', part: '7200-44R／7200-44B',
    note: 'X 的銳利版：全長稜線、輻尖到輪緣前側折，不附蓋、輪轂孔一圈亮面。JB74 用 16×5.5J −5（8.2kg）；16×6.0J ±0 是 Sierra 專用內凹面，但只剩アイアンブラック',
    finishes: [F('R', 'レイドブラック', 0x606165, { sheen: 'metal' }), F('B', 'アイアンブラック（艶消し）', 0x202125)] },
  { id: 'wildboar_sr', kind: '復古', label: 'WILDBOAR SR 四弧槽輪框', rim: 16, width: 6.0, offset: -5, style: 'arc4', price: 48400, cur: 'JPY', brand: 'APIO WILDBOAR',
    url: 'https://apio.jp/parts/7200-18.html', part: '7200-47B／7200-47W',
    note: '壓鋼圈造型：外圈平帶＋下凹中央盤，四道細長弧槽在 1:30／4:30／7:30／10:30。16×6.0J −5 只有アイアンブラック與コットンホワイト兩色，8kg，附專用蓋；APIO 註明配 205R16 的原廠保桿 JB74 約需 40mm 舉升',
    finishes: [F('B', 'アイアンブラック（艶消しブラック）', 0x3a3a3b), F('W', 'コットンホワイト（艶有りホワイト）', 0xe6e5da, { sheen: 'gloss' })] },
  { id: 'wildboar_sr15', kind: '復古', label: 'WILDBOAR SR 四弧槽輪框 15 吋', rim: 15, width: 6.0, offset: -5, style: 'arc4', price: 47300, cur: 'JPY', brand: 'APIO WILDBOAR',
    url: 'https://apio.jp/parts/7200-18.html', part: '7200-18B／7200-18H',
    note: '同款 SR 的 15×6.0J −5：三色，¥47,300／本（稅込），7.0kg，15 吋沒有中心蓋、螺帽外露。DAMD little D.／the ROOTS. 的示範車用這一款（little D. 黑、ROOTS 灰）',
    finishes: [F('B', 'アイアンブラック（艶消しブラック）', 0x3a3a3b), F('H', 'アイアングレー（艶有りグレー）', 0x8e8e8e, { sheen: 'gloss' }),
      F('W', 'コットンホワイト（艶有りホワイト）', 0xe6e5da, { sheen: 'gloss' })] },
  { id: 'wildboar_srplus', kind: '復古', label: 'WILDBOAR SR+ 壓鋼風輪框', rim: 16, width: 6.0, offset: -5, style: 'arc4plus', price: 48400, cur: 'JPY', brand: 'APIO WILDBOAR',
    url: 'https://apio.jp/parts/7200-40.html', part: '7200-49W／7200-49B',
    note: 'SR 的變化：弧槽更細更長、各自落在壓出的溝裡，輪轂是鋼圈式的隆起圓頂，多段輪緣；不附蓋，可選 APIO 鍍鉻大蓋。16×6.0J −5 8.8kg；15×6.0J −5 ¥47,300',
    finishes: [F('W', 'コットンホワイト', 0xe8e4da, { sheen: 'gloss' }), F('B', 'アイアンブラック', 0x3c3c3c)] },
  { id: 'wildboar_d', label: 'WILDBOAR D 蓮根紋輪框', rim: 16, width: 6.0, offset: -5, style: 'renkon', price: 48400, cur: 'JPY', brand: 'APIO WILDBOAR',
    url: 'https://apio.jp/parts/7200-60.html', part: '7200-62F',
    note: '碟面深置，單圈 16 個壓錐沉孔（蓮根紋），輪唇外帶是對比色。APIO 同一顆依塗裝分 offset：16×6.0J −5 只有セミグロスブラック／ウッドカッパー（7200-62F，2026-04-20 新色）；グロスブラック／スモーククリア是 16×6.0J ±0（7200-62B）。8.62kg，無中心蓋',
    finishes: [F('F', 'セミグロスブラック／ウッドカッパー（リム）', 0x38393b, { hex2: 0x6e4b3c, sheen: 'satin' })] },
  { id: 'wildboar_ventura', kind: '復古', label: 'WILDBOAR Ventura 十二槽鋼圈風輪框', rim: 15, width: 6.0, offset: -5, style: 'ventura', price: 48400, cur: 'JPY', brand: 'APIO WILDBOAR',
    url: 'https://apio.jp/parts/7200-30.html', part: '7200-31B／7200-31W',
    note: '經典 12 槽鋼圈：切向橢圓通風孔落在壓窩裡，外帶錐面→下凹輪轂盤→凸起螺帽台三層。Sierra／Nomade 15×6.0J −5 四色（クローム ¥72,600）；16×6.0J −5 只有黑色（9.7kg）',
    finishes: [F('B', 'アイアンブラック', 0x2a2a2a), F('W', 'ホワイト', 0xe4e4df, { sheen: 'gloss' }), F('S', 'ブライトシルバー', 0xbcbfc2, { sheen: 'metal' }),
      F('C', 'ブライトクローム（スパッタリング）', 0xd0d0d0, { price: 72600, sheen: 'chrome' })] },
  { id: 'wildboar_hr', kind: '復古', label: 'WILDBOAR HR 美式鍍鉻槽輪框', rim: 15, width: 6.0, offset: -5, style: 'hotrod', price: 72600, cur: 'JPY', brand: 'APIO WILDBOAR',
    url: 'https://apio.jp/parts/7200-32c.html', part: '7200-32C',
    note: '美西 hot-rod 鍍鉻槽輪：中央星形五支圓刃、輻間深井裝螺帽、外圈五道弧槽、深拋光碟壁，附前輪可用的小圓頂蓋。15×6.0J −5，8.0kg；APIO 註明 JC74 大卡鉗限制配重位置',
    finishes: [F('C', 'クローム（スパッタリング）', 0xcfcfcf, { sheen: 'chrome' })] },

  // ---- Crimson DEAN
  { id: 'dean_cross', kind: '復古', label: 'CROSS COUNTRY 五弧槽鋼圈臉', rim: 16, width: 6.0, offset: -5, style: 'deancc', price: 44000, cur: 'JPY', brand: 'Crimson DEAN',
    url: 'https://www.dean-wheels.com/cross-country/',
    note: '鋼圈式圓盤、兩道壓階，靠輪緣五道長弧槽，鍍鉻五窗中心板＋圓頂蓋蓋住螺帽（拆掉露出 5 個螺帽座）。DEAN 的 Jimny 對照表 JB74／JB33／JB43／JC74 列 16×6.0J −5，三色都是 ¥44,000／本（稅込）；舊目錄用台灣店價 NT$10,500，改成原廠日圓價。漏列的 Burnish Gray 補上（輪緣切削亮面）',
    finishes: [F('MBK', 'マットブラック', 0x17181a), F('MW', 'マーガレットホワイト', 0xbebcbb, { sheen: 'satin' }), F('BG', 'バーニッシュグレイ', 0x56555e, { hex2: 0xa3a2a8, sheen: 'satin' })] },
  { id: 'dean_california', kind: '復古', label: 'CALIFORNIA 渦輪面輪框', rim: 16, width: 6.0, offset: -5, style: 'california', price: 44000, cur: 'JPY', brand: 'Crimson DEAN',
    url: 'https://www.dean-wheels.com/california/',
    note: '24 道細長放射槽、實虛各半，中央鍍鉻大盤＋繩紋環＋子彈蓋蓋住螺帽，外帶是光滑的碗形輪緣。JB74／JC74 16×6.0J −5，中心孔 108.8。マットブラック ¥44,000、バーニッシュグレイ ¥46,200（舊目錄寫的 ¥46,200 是 BG 的價）',
    finishes: [F('MBK', 'マットブラック', 0x1c1a1d), F('BG', 'バーニッシュグレイ', 0x45444c, { hex2: 0xa8a9b0, price: 46200, sheen: 'satin' })] },
  { id: 'dean_colorado', kind: '復古', label: 'COLORADO 封閉盤輪框', rim: 15, width: 6.0, offset: -5, style: 'colorado', price: 39600, cur: 'JPY', brand: 'Crimson DEAN',
    url: 'https://www.dean-wheels.com/colorado/',
    note: '完全封閉的鋼圈式碟、三層階台，一圈 18 顆假六角螺栓，黑色中心板用 8 顆 Torx 固定＋黑圓頂蓋，蓋住螺帽。JB74 是 15×6.0J −5（¥39,600 稅込）——舊目錄的 16×5.5J +20 是 JB64 那列、價格也是台灣店價',
    finishes: [F('SG', 'スティールグレー', 0x6a6c6f, { sheen: 'satin' }), F('MCB', 'マットチャコールブラック', 0x353638)] },
  { id: 'dean_bjmex', kind: '復古', label: 'BJ MEXICAN 巴哈卡車輪框', rim: 16, width: 6.0, offset: -5, style: 'bjmex', price: 44000, cur: 'JPY', brand: 'Crimson DEAN', uncertain: true,
    url: 'https://www.dean-wheels.com/bj-mexican/',
    note: '復古巴哈卡車臉：五個梯形窗與五個各裝一顆大六角螺栓的封閉凹槽交替，噴砂質感，無中心蓋。DEAN 對照表的 JB74 列沒填尺寸，16×6.0J −5 是依 Sierra 規格推定；中心孔 108.8',
    finishes: [F('SCB', 'ショットチャコールブラック', 0x2b2b2d), F('SC', 'ショットクリア', 0x8a8987, { sheen: 'satin' })] },

  // ---- Hot Stuff
  { id: 'barkley_rogan', label: 'BARKLEY HARDROCK ROGAN 仿珠圈輪框', rim: 16, width: 6.0, offset: -5, style: 'rogan', price: 52800, cur: 'JPY', brand: 'Hot Stuff BARKLEY', uncertain: true,
    url: 'https://www.hotstuff-cp.co.jp/product/barkley-hard-rock-rogan/',
    note: 'W 形雙內凹的亮黑面、兩圈交錯的小方窗，外圈是拋光青銅透明的寬仿珠圈加黑色六角螺栓。※1 Jimny／Sierra 尺寸 16×6.0J −5；15×6.0J ±0 ¥48,400。價目表圖檔日期 2021/08，價格可能已調整',
    finishes: [F('BKBRC', 'ブラック＆リムポリッシュ＋ブロンズクリア', 0x161616, { hex2: 0x6f6757, sheen: 'gloss' })] },
  { id: 'barkley_rizard', label: 'BARKLEY HARDROCK RIZARD 十六窗輪框', rim: 16, width: 6.0, offset: -5, style: 'rizard', price: 50600, cur: 'JPY', brand: 'Hot Stuff BARKLEY',
    url: 'https://www.hotstuff-cp.co.jp/product/barkley-hardrock-rizard/',
    note: '圓盤獨立凸出輪框（原廠說明），一圈 16 個梯形窗圍著大平台，輪緣一圈齒狀凸塊。※1 Jimny 專用 16×6.0J −5，不附蓋（原廠後輪蓋可用）',
    finishes: [F('GB', 'セミグロスブラック（GB）', 0x1f1f21, { sheen: 'satin' })] },
  { id: 'barkley_huron', label: 'BARKLEY HARDROCK HURON 七點網格輪框', rim: 16, width: 6.0, offset: -5, style: 'huron', price: 53900, cur: 'JPY', brand: 'Hot Stuff BARKLEY',
    url: 'https://www.hotstuff-cp.co.jp/product/barkley-hardrock-huron/',
    note: '七交點網格：七個大圓角方窗（窗緣切削亮面）與七個小三角窗交替，捲邊輪緣上一圈切削小圓點。16×6.0J −5，中心孔 108.5',
    finishes: [F('GBM', 'グロスブラック・マシニング（GB/M）', 0x141416, { hex2: 0xb0b0b0, sheen: 'gloss' })] },
  { id: 'madcross_jb01', label: 'MAD CROSS JB-01 星形剖溝輪框', rim: 16, width: 6.0, offset: 0, style: 'jb01', price: 57200, cur: 'JPY', brand: 'Hot Stuff MAD CROSS',
    url: 'https://www.hotstuff-cp.co.jp/product/mad-cross-jb-01/',
    note: 'Sierra 專用設計：粗大的多面五角星輻、每支中間一道長溝，深輪框。16×6.0J ±0 7.58kg；15×6.0J ±0 ¥51,700〜¥53,900。價目表日期 2021/08',
    finishes: [F('GM', 'ガンメタ（GM）', 0x4b504e, { sheen: 'metal' }), F('AG', 'アッシュグレー＆リムポリッシュ（AG/リムP）', 0x535b60, { hex2: 0xb8b8b8, price: 59400, sheen: 'satin' })] },
  { id: 'madcross_recon', label: 'MAD CROSS RECON 八蛋形孔輪框', rim: 16, width: 6.0, offset: 0, style: 'recon', price: 58300, cur: 'JPY', brand: 'Hot Stuff MAD CROSS',
    url: 'https://www.hotstuff-cp.co.jp/product/mad-cross-recon/',
    note: '2026 新款：消光淺碟開八個蛋形孔，仿珠圈輪緣有切削缺口與軍規刻線。※5 Jimny／Sierra／Nomade 16×6.0J ±0；15×6.0J ±0 ¥52,800',
    finishes: [F('MBK', 'マットブラック（MBK）', 0x3f3f42)] },

  // ---- RS Watanabe / SHOWA GARAGE / DAMD / Beyond
  { id: 'watanabe_f8', kind: '復古', label: 'EIGHT SPOKE F8 八輻輪框', rim: 16, width: 5.5, offset: 0, style: 'f8', price: 49500, cur: 'JPY', brand: 'RS Watanabe',
    url: 'https://www.rs-watanabe.co.jp/jimny/',
    note: '1968 年的經典八支圓斷面骨頭輻，輪轂端細、輪緣端寬，小蓋、螺帽外露。對照表：シエラ JB74W 16×5.5J ±0（+22 是 JB64W）。官網 ¥45,000／本是業者用稅別，稅込約 ¥49,500；リム切削與其他色加 ¥3,000 稅別（約 ¥3,300）。中心孔 108.5，台灣無代理',
    finishes: [F('BK', 'ブラック（標準色）', 0x3c3d40, { sheen: 'satin' }), F('RimS', 'リム切削（リムシルバー）', 0x3c3d40, { hex2: 0xc8c8c8, price: 52800, sheen: 'satin' }),
      F('GOLD', 'ゴールドメタリック', 0xb89a4e, { price: 52800, sheen: 'metal' }), F('SILVER', 'シルバーメタリック', 0xb5b7ba, { price: 52800, sheen: 'metal' }),
      F('MATT', '艶消しブラック', 0x1e1e20, { price: 52800 }), F('GLOSS', '艶有りブラック', 0x121214, { price: 52800, sheen: 'gloss' }),
      F('MAG', 'マグ色', 0x6f6a5e, { price: 52800, sheen: 'satin' }), F('RED', 'レッド', 0xb3211e, { price: 52800, sheen: 'gloss' }),
      F('BLUE', 'ブルー', 0x1f4f9a, { price: 52800, sheen: 'gloss' }), F('YELLOW', 'イエロー', 0xe3b21c, { price: 52800, sheen: 'gloss' }),
      F('WH', 'ホワイト', 0xe8e8e4, { price: 52800, sheen: 'gloss' })] },
  { id: 'showa_eight', kind: '復古', label: 'IGNITION EIGHT 八柱輪框', rim: 16, width: 6.0, offset: 0, style: 'ignition8', price: 37400, cur: 'JPY', brand: 'SHOWA GARAGE',
    url: 'https://www.showa-garage.shop/shopdetail/000000000808/', part: 'W00235（マットブラック）／W00236（マットブロンズ）',
    note: '八支短平輻夾在寬輪轂環與輪緣之間，輪緣一圈八顆特大的削出式螺栓頭。¥37,400／本（稅込），8.8kg，ジムニーシエラ JB74／JB43／JC74 16×6.0J ±0；+20 的 W00230 是 JB64。漏列的マットブロンズ（W00236）補上',
    finishes: [F('W00235', 'マットブラック', 0x3a3b3f), F('W00236', 'マットブロンズ', 0x7a6656)] },
  { id: 'showa_r8', label: 'R8 八蛋形孔輪框', rim: 15, width: 6.0, offset: 0, style: 'r8', price: 33550, cur: 'JPY', brand: 'SHOWA GARAGE',
    url: 'https://www.showa-garage.shop/shopdetail/000000000423/', part: 'W00051／W00052',
    note: '乾淨的平碟、八個孔壁很陡的蛋形孔，螺帽圈裡一個八角黑小蓋（螺帽外露）。JB74／JB43 15×6.0J ±0，6.77kg；SHOWA 註明不適用 JC74',
    finishes: [F('W00051', 'マットブラック', 0x4a494e), F('W00052', 'グロスブラック', 0x1a1a1e, { sheen: 'gloss' })] },
  { id: 'showa_gunfield', label: 'GUNFIELD 軍用碟輪框', rim: 16, width: 6.0, offset: 0, style: 'gunfield', price: 37400, cur: 'JPY', brand: 'SHOWA GARAGE',
    url: 'https://www.showa-garage.shop/shopdetail/000000000855/', part: 'W00215／W00216',
    note: '內凹軍用碟、一圈 14 個小長孔、凸起的 GUNFIELD 字環（ブラックポリッシュ是切削亮面）、階梯輪緣有車紋。JB74／JB43／JC74 16×6.0J ±0；15×6.0J ±0（W00240／W00241）¥36,300〜¥37,400',
    finishes: [F('W00215', 'サンドブラック', 0x2a2a2e), F('W00216', 'ブラックポリッシュ', 0x0b0c10, { hex2: 0xc2c0c1, price: 38500, sheen: 'gloss' })] },
  { id: 'damd_cantabile', kind: '復古', label: 'Cantabile 渦輪面輪框', rim: 15, width: 6.0, offset: -5, style: 'cantabile', price: 35200, cur: 'JPY', brand: 'DAMD',
    url: 'https://www.damd.co.jp/wheels/cantabile/',
    note: '70 年代渦輪面：研缽形深凹錐面上 24 片銳利放射鰭（長短交錯），輪唇內側一圈 12 個小窗，小輪轂、螺帽外露。15×6.0J −5「JIMNY SIERRA（JB74）専用サイズ」，三色都是 ¥35,200／本（稅込），粗目塗裝。little G. TRADITIONAL 示範車裝金色',
    finishes: [F('SILVER', 'SILVER', 0xa8a9a9, { sheen: 'satin' }), F('BLACK', 'BLACK', 0x262425), F('GOLD', 'GOLD', 0xa08450, { sheen: 'satin' })] },
  { id: 'damd_little_g', label: 'little G. WHEEL Y 字網格輪框', rim: 16, width: 6.0, offset: -5, url: 'https://www.damd.co.jp/wheels/little-g/', style: 'littleg', price: 41800, cur: 'JPY', brand: 'DAMD',
    note: 'little G. 系列指定輪圈：七支多面 Y 字輻在 0.6R 分岔、臂與鄰輻在輪緣相接（14 個端點），SILVER 是切削亮面配深色凹面。16×6.0J −5「JIMNY SIERRA（JB74）専用サイズ」。SILVER ¥41,800、BLACK ¥42,900（稅込含運）；DAMD 註明不能沿用原廠胎',
    finishes: [F('SILVER', 'SILVER', 0xc4c8ca, { hex2: 0x5a5a58, sheen: 'machined' }), F('BLACK', 'BLACK', 0x28292c, { price: 42900, sheen: 'satin' })] },
  { id: 'oz_rally', kind: '復古', url: 'https://www.damd.co.jp/wheels/rallyracing/', label: 'Rally Racing 復刻 16 吋輪框', rim: 16, width: 6.0, offset: -5, style: 'oz20',
    price: 53900, cur: 'JPY', brand: 'OZ Racing × DAMD',
    note: '80–90 年代拉力賽 Rally Racing 的復刻，OZ 協力、旋壓製法：輪唇內一圈 20 個小窗、大片光滑碟面一路錐到輪轂，無中心蓋。16×6J −5、5×139.7、中心孔 108.3，單顆 8.584kg，JB74／JC74 用、DAMD 獨家。單顆 ¥53,900、五顆 ¥269,500，稅込。DAMD 官網未公布料號',
    finishes: [F('RW', 'レーシングホワイト（RW）', 0xe6e6e4, { sheen: 'gloss' }), F('MB', 'マットブラック（MB）', 0x262626), F('DG', 'ダークグラファイト（DG）', 0x5d5e60, { sheen: 'satin' }),
      F('MBR', 'マットブロンズ（MBR）', 0x7e6a55)] },
  { id: 'super_moon', kind: '復古', url: 'https://shop.beyond-jpn.com/products/bewl74-smch', label: 'SUPER MOON 月亮盤', rim: 16, width: 6.0, offset: -5, style: 'moon',
    price: 19800, cur: 'JPY', brand: 'Beyond Japan', part: 'bewl74-smch／bewl74-smbl',
    note: '鋼製、完全無孔的光滑碗：平外圈、錐面下沉、凸起的輪轂台只露 5 個螺帽。16×6.0J INSET −5、PCD 139.7，品名「スーパームーン【JB74W】」——JB74W／JC74 專用，JB64 是另一個品番。黑／白 ¥19,800、鍍鉻 ¥23,100（原價 ¥33,000／¥38,500，特價中），都是一顆的價（「単品販売」）',
    finishes: [F('smch', 'クローム', 0xc9cbce, { price: 23100, sheen: 'chrome' }), F('smbl', 'ブラック', 0x141416, { sheen: 'gloss' }), F('smwh', 'ホワイト', 0xe2e2e0, { sheen: 'gloss' })] },

  // ---- TOPY LANDFOOT
  { id: 'landfoot_swz', kind: '復古', label: 'LANDFOOT SWZ 十淚滴窗輪框', rim: 15, width: 5.5, offset: 5, style: 'lfswz', price: 36850, cur: 'JPY', brand: 'TOPY LANDFOOT',
    url: 'https://topyep-apdwheels.com/products/aluminum_wheels/landfoot/swz/', part: '3L966（GB/RP）／3L218（OD）',
    note: 'トピー実業：沖壓鋼圈感，十個淚滴窗各有凸起壓邊，外帶平、往內落一階到圓形輪轂台。Sierra 只有 15×5.5J +5（ジムニーシエラ JB43・JB74／ノマド JC74），原廠中心蓋可用，中心孔 108.5；CAFE 與 AF GRAY 只出 JB64 的 16 吋',
    finishes: [F('GBRP', 'GB/RP（グロスブラック／リムポリッシュ）', 0x1e2121, { hex2: 0xb0b6ba, sheen: 'gloss' }), F('OD', 'OD（オリーブドラブ）', 0x494d3f, { sheen: 'satin' })] },
  { id: 'landfoot_xfg', kind: '復古', label: 'LANDFOOT XFG 貨車鋼圈風輪框', rim: 16, width: 6.0, offset: 0, style: 'lfxfg', price: 38500, cur: 'JPY', brand: 'TOPY LANDFOOT',
    url: 'https://topyep-apdwheels.com/products/aluminum_wheels/landfoot/xfg/', part: '3Y722（SC/P）／3B668（WH）',
    note: '廂型車鋼圈風：靠輪緣四道長弧縫與四組雙橢圓孔交替（ディスクに4つの楕円スリットと2連ホール×4），同心壓環往輪轂升起。JB43・JB74／JC74 16×6.0J ±0，中心孔 108.5，原廠中心蓋可用；GB/P 只出 JB64 尺寸',
    finishes: [F('SCP', 'SC/P（スモーククリア／ポリッシュ）', 0x1c1b1b, { hex2: 0x5e5f62, sheen: 'gloss' }), F('WH', 'WH（ホワイト）', 0xd8dde3, { sheen: 'gloss' })] },
  { id: 'landfoot_gwd', kind: '復古', label: 'LANDFOOT GWD 方塊五輻輪框', rim: 16, width: 5.5, offset: 0, style: 'lfgwd', price: 38500, cur: 'JPY', brand: 'TOPY LANDFOOT',
    url: 'https://topyep-apdwheels.com/products/aluminum_wheels/landfoot/gwd/', part: '3M836（RB）',
    note: '五支粗復古輻、外半段各頂一塊凸起方墊，中央下沉，輻與輪緣間一道溝；粗顆粒黑塗裝。ジムニーシエラ JB43・JB74 16×5.5J ±0（這列沒寫 Nomade），中心孔 108.5；GRAY 與 MG 只出 JB64 尺寸',
    finishes: [F('RB', 'RB（ラギッドブラック）', 0x2a2b2e)] },

  // ---- 台灣（docs/jb74-wheels-tw.json）。有看到台灣製證據的才標 mit: true
  { id: 'maxx', photo: true, mit: true, label: 'MAXX JB74 旋壓十輻輪框', rim: 16, width: 6.0, offset: 0, style: 'maxx', price: 4400, cur: 'TWD', brand: 'MAXX（泓越，台灣製）',
    url: 'https://4wheels.com.tw/product/vsforged/680',
    note: '台灣製旋壓（超前輪業賣場寫「台灣製 MAXX 旋壓製程」）：十支平頂直輻、微凹到下沉的輪轂環，無中心蓋。16×6.0J ±0、中心孔 108、7.15kg，不需要爆龜。四個圈輪業牌價 NT$4,400／顆，露天各店 NT$3,800–4,200。車主實車配置',
    finishes: [F('FB', 'FB 平光黑', 0x2a2a29), F('FBR', 'FBR 平光古銅', 0x9e8a6c), F('FDG', 'FDG 平光鐵灰', 0x5a5b5b), F('MIB', 'MIB 亮黑拋光唇邊', 0x0c0c0c, { hex2: 0xd9d9d9, sheen: 'gloss' })] },
  { id: 'yaochi_h598', mit: true, label: 'LEADER H-598 十二孔鉚釘輪框', rim: 15, width: 7.0, offset: 0, style: 'h598', price: 4500, cur: 'TWD', brand: '耀麒 LEADER（台灣製）',
    url: 'https://www.ruten.com.tw/item/show?21932409266048',
    note: '模組式鋼圈／仿珠圈造型：深碟開 12 個圓孔，深唇內一圈約 24 顆暗鉻圓頭鉚釘（不是五槽）。15×7.0J ±0、中心孔 108.2、8.55kg；賣場照片可見輪背鑄「MADE IN TAIWAN」。7J ±0 比原廠外凸約 24mm。各店 NT$4,000–4,700／顆；舊資料的軍綠、奶油是特仕版，確實有賣場',
    finishes: [F('MB', '平光黑', 0x1c1d1a), F('GBL', '亮黑車邊', 0x1e1d22, { hex2: 0xd8d6d4, price: 4700, sheen: 'gloss' }),
      F('SL', '亮銀車邊', 0xc8c7c7, { hex2: 0xeeebe8, sheen: 'metal' }), F('OD', '特仕版 野戰軍綠（黑透車邊）', 0x4b5145, { hex2: 0x5e5f5c, price: 4700, sheen: 'gloss' }),
      F('CR', '特仕版 奶油米白（亮車邊）', 0xe8e1cd, { hex2: 0xd8d8d4, price: 4400, sheen: 'gloss' }), F('GG', '亮軍綠（車邊）', 0x41453e, { hex2: 0xbfc3c5, sheen: 'gloss' })] },
  { id: 'leader_h519', mit: true, label: 'LEADER H-519 旋向分岔輻輪框', rim: 15, width: 7.0, offset: 0, style: 'h519', price: 3500, cur: 'TWD', brand: '耀麒 LEADER（台灣製）',
    url: 'https://www.ruten.com.tw/item/show?21952141503586',
    note: '台灣製鑄造（多家賣場寫「台灣製」、ARTC 檢驗）：五支順時針旋向的輻各分成一寬一細兩片，輪緣共 10 支彎臂，寬片頂面切削亮面，高筒黑色城垛中心蓋。15×7.0J ±0、中心孔 108.2、約 8kg。各店 NT$3,300–3,600／顆；超前另列的 ET10 自己描述寫 6 孔，未採用',
    finishes: [F('PBK', '鋼琴黑車面', 0x101012, { hex2: 0xd2d0cc, sheen: 'gloss' })] },
  { id: 'mahom_mff37x', mit: 'unclear', label: 'MAHOM MFF-37x 旋壓六輻輪框', rim: 16, width: 6.0, offset: -25, style: 'mahom', price: 4500, cur: 'TWD', brand: 'MAHOM（產地未標）', uncertain: true,
    url: 'https://www.ruten.com.tw/item/show?22133518218613',
    note: 'TE37X 風格的六支平直輻、中等內凹、深階梯唇，旋壓 7.24kg。賣家說是耀麒的品牌、ARTC 檢測，但沒有任何賣場寫台灣製，輪唇印「DESIGN IN JAPAN」，產地不明。16×6.0J −25 外凸約 30mm，葉子板覆蓋賣家未說明；中心孔 110.2 要加定心環',
    finishes: [F('MB', '平光黑', 0x2a2b2d), F('MBR', '平光古銅', 0x5a4f41)] },
  { id: 'inforged_2336', mit: 'unclear', label: 'INFORGED 2336 仿珠圈輪框', rim: 16, width: 6.0, offset: -5, style: 'inforged', price: 4000, cur: 'TWD', brand: 'INFORGED 鍛熔社（產地未標）', uncertain: true,
    url: 'https://www.ruten.com.tw/item/show?22538938155113',
    note: '全消光黑仿珠圈碟：一圈約 16 個小圓孔，外環鑄出 16 顆六角螺栓頭與 V 形缺口，小紅標蓋。品牌公司在桃園中壢，但 2336 不在官網、賣場也沒寫台灣製。JB74 16×6.0J −5（另一列 +22 是 JB64）',
    finishes: [F('MB', '消光黑', 0x272727)] },
  { id: 'aidesignd_id7', mit: 'unclear', label: 'AI-DESIGN-D ID7 拉力盤輪框', rim: 16, width: 5.5, offset: -20, style: 'id7', price: 6000, cur: 'TWD', brand: 'AI-DESIGN-D（產地未標）', uncertain: true,
    url: 'https://4wheels.com.tw/product/egowheels/3932',
    note: '平面拉力盤、輪唇內一圈 20 個近方形小窗、下沉的輪轂口，旋壓。台灣品牌（和毅代理），但賣場沒寫產地。16×5.5J −20、中心孔 108.1、載重 620kg，外凸約 25mm。四個圈輪業一組四顆 NT$24,000',
    finishes: [F('GBK', '亮黑色', 0x131313, { sheen: 'gloss' })] },
  { id: 'mrk_retro15', kind: '復古', mit: 'unclear', label: 'MRK 復古鋁圈 15 吋', rim: 15, width: 6.0, offset: -5, style: 'retro5', price: 3980, cur: 'TWD', brand: 'MRK 4X4（產地未標）',
    url: 'https://www.mrk.com.tw/product_ii.html?ID=1085', part: 'D110-1560-JB74-BK／WH',
    note: '美式五弧槽鋼圈造型、鍍鉻大中心罩（五個黑窗＋圓頂）蓋住螺帽。15×6.0J −5、中心孔 108.1，NT$3,980／顆、安裝另計；MRK 頁面沒寫產地（舊目錄的「台製」查無出處）。2026-09-27 各尺寸都顯示缺貨',
    finishes: [F('BK', '亞光黑', 0x161616), F('WH', '陶瓷白', 0xd9d8cc, { sheen: 'gloss' }), F('SV', '銀色', 0xb9bec2, { sheen: 'metal' })] },
  { id: 'mrk_retro165', kind: '復古', mit: 'unclear', label: 'MRK 復古鋁圈 16×6.5J', rim: 16, width: 6.5, offset: -5, style: 'retro5', price: 6500, cur: 'TWD', brand: 'MRK 4X4（產地未標）',
    url: 'https://www.mrk.com.tw/product.html?c1=8&c2=113', part: 'D110-1665-5-JB74-BK／WH',
    note: '同款 16×6.5J −5，只有消光黑與陶瓷白（沒有銀）；16 吋的中心罩是尖錐頂。舊目錄另一顆 16×5.5J +20 是 JB64 offset，已刪除',
    finishes: [F('BK', '亞光黑', 0x161616), F('WH', '陶瓷白', 0xd9d8cc, { sheen: 'gloss' })] },
  { id: 'apio_ventura16', url: 'https://apio.jp/parts/7200-30.html', label: 'WILDBOAR Ventura 鐵圈風輪框 16×5.5J +20', rim: 16, width: 5.5, offset: 20, style: 'ventura',
    price: 48400, cur: 'JPY', brand: 'APIO', part: '7200-30W（ホワイト）',
    note: '鑄鋁做成壓製鐵圈的樣子：外圈一圈 12 個橢圓長槽、中央下沉碟、螺帽台凸起。ホワイト／アイアンブラック／ブライトシルバー單顆 ¥48,400、ブライトクローム ¥72,600，皆稅込，約 8.7kg。這是輕 Jimny（JB64）規格的 +20 offset，APIO 把它配在裝了自家窄版爆龜的 JB74 上（配原廠寬爆龜會內縮很多）；鍍鉻大輪蓋 7200-11A ¥5,500 稅込另購。輪面用 15 吋 Ventura 的十二槽畫法' ,
    finishes: [F('W', 'ホワイト', 0xe4e4df, { sheen: 'gloss' }), F('B', 'アイアンブラック', 0x2a2a2a), F('S', 'ブライトシルバー', 0xbcbfc2, { sheen: 'metal' }),
      F('C', 'ブライトクローム', 0xd0d0d0, { price: 72600, sheen: 'chrome' })] },
  { id: 'klc_daytonas_deep', url: 'https://www.klc-div.com/heritage/product/wheel/daytonasdeep/', label: "Daytona's Deep 深碟鐵圈 16×8.0J −20", rim: 16, width: 8.0, offset: -20, style: 'oemsteel', needsFlares: true,
    price: 29700, cur: 'JPY', brand: 'KLC Heritage',
    note: '鋼製（官方：本商品はスチール製です），シエラ／ノマド用 16×8.0J −20、PCD 5×139.7，¥29,700 稅込／顆，セミグロスブラック一色。碟面強烈內凹、一圈 10 個圓頂形孔、螺帽外露。KLC 自己寫不加工很難裝（カスタムなしで装着するのはちょっと難しい）；MATURE 示範車配 215/65R16，已超出該胎官方 6–7½J 的適用輪圈寬（KLC 刻意拉胎）。輪面借原廠鋼圈的十圓孔畫法' ,
    finishes: [F('SGB', 'セミグロスブラック', 0x1b1d1f, { sheen: 'satin' })] },
];
// How far the tyre's outer face moves out against the stock 15x5.5J +5:
// past ~12 mm it leaves the stock flare and needs wider arches.
for (const w of WHEELS) w.needsFlares = w.width * 12.7 - w.offset - 64.85 > 12;
export const wheelFinish = (w, id) => w.finishes.find(f => f.id === id) ?? w.finishes[0];
export const wheelPrice = (w, id) => wheelFinish(w, id).price ?? w.price;

export const TYRES = [
  { id: 't195', label: '195/80R15', dia: 693, width: 195, rim: 15, price: 0,
    needLift: 0, needBody: 0, legal: true, note: '原廠配置' },
  { id: 't215r15', label: '215/75R15', dia: 710, width: 215, rim: 15, needLift: 0, needBody: 0,
    legal: true, note: '+2.4%，原廠框可裝、免修改。最安全的升級' },
  { id: 't215r16', label: '215/70R16', dia: 707, width: 215, rim: 16, needLift: 0, needBody: 0,
    legal: true, note: '+2%，可能需輕微修內輪弧' },
  { id: 't225r70', label: 'LT225/70R16', dia: 721, width: 225, rim: 16, needLift: 25, needBody: 0,
    legal: true, note: '+4%。DAMD little G. AVENTURA 示範車裝 BFGoodrich KO2 LT225/70R16 102/99R 白字，官網註明原廠車高裝不下，示範車升高 1 吋（約 25mm），前保桿也有切' },
  { id: 't225r16', label: '225/75R16', dia: 744, width: 225, rim: 16, needLift: 40, needBody: 0,
    legal: true, note: '+7.4%，需 40–60mm 舉升與修內襯；車主實車配置（MAXX 16×7）' },
  // ---- narrow and tall: the Japanese skinny-tyre look (docs/jb74-narrow-tyres.json)
  { id: 't175r16', label: '175/80R16', dia: 686, width: 175, rim: 16, needLift: 0, needBody: 0,
    legal: true, note: '−1%，JB64 的原廠尺寸，比 JB74 原廠還瘦，免修改；GEOLANDAR M/T G003 官網有列（黑字）' },
  { id: 't185r16', label: '185/85R16', dia: 720, width: 185, rim: 16, needLift: 0, needBody: 0,
    legal: true, note: '+3.9%，日系窄高胎的經典尺寸。TOYO OPEN COUNTRY R/T（白字）、YOKOHAMA GEOLANDAR A/T G015／X-AT G016（部分白字）、M/T G003（黑字）官網都有；建議 4.5–6.0J（標準 5.0J）。浜松 URBAN OFF CRAFT 的 JB74 實車是原廠車高免舉升，但因窄胎直進穩定性變差另加了方向機穩定桿' },
  { id: 't195r16c', label: '195R16C', dia: 716, width: 198, rim: 16, needLift: 0, needBody: 0,
    legal: true, uncertain: true, note: '+3.3%，X-AT G016（白字）與 M/T G003（黑字）官網有列，建議 5.0–6.0J。查到的實車疑似是 JB43 不是 JB74，免舉升這點未確認' },
  { id: 't205r16c', label: '205R16C', dia: 736, width: 208, rim: 16, needLift: 20, needBody: 0,
    legal: true, uncertain: true, note: '+6.2%，LT 商用規格（M/T G003 官網，黑字），建議 5.5–6.5J；「205/80R16」官網查無。舉升量是照相鄰尺寸估的，沒有 JB74 實車聲明' },
  { id: 't650r16', label: '6.50R16', dia: 767, width: 182, rim: 16, needLift: 40, needBody: 0,
    legal: true, note: '+10.7%，吋制窄高胎，只有 M/T G003 官網有列（黑字、子午線胎），建議 4.5–6.0J。APIO 窄版爆龜商品頁寫他們的 JB74 是 40mm 升高＋16×5.5J inset 20＋6.50R16（或 205R16），舉升量照這個組合' },
  { id: 't700r16', label: '7.00R16', dia: 784, width: 194, rim: 16, needLift: 50, needBody: 0,
    legal: true, uncertain: true, note: '+13.1%，只有 M/T G003 官網有列（黑字），建議 5.0–6.5J；胎寬比 31×10.5 窄很多，舉升量是估的' },
  { id: 't225', label: '225/75R15', dia: 719, width: 225, rim: 15, needLift: 20, needBody: 0,
    legal: true, uncertain: true, note: '+3.7%，約需 20mm 舉升' },
  { id: 't235', label: '235/75R15', dia: 741, width: 235, rim: 15, needLift: 40, needBody: 0,
    legal: true, note: '+6.9%，需 40–50mm 舉升＋修內襯與保桿；滿舵與扭曲時會磨。澳洲法規上限' },
  { id: 't205r16', label: '205R16', dia: 741, width: 205, rim: 16, needLift: 40, needBody: 0,
    legal: true, note: '與 235/75R15 同外徑但較輕' },
  { id: 't215r18', label: '215/55R18', dia: 694, width: 215, rim: 18, needLift: 0, needBody: 0,
    legal: true, note: '外徑 694mm，跟原廠 195/80R15 幾乎一樣，所以不必動舉升；差別全在胎壁——55 系列的側面高度只有原廠的一半出頭，輪拱會被輪框而不是被胎填滿' },
  { id: 't225r55', label: '225/55R18', dia: 705, width: 225, rim: 18, needLift: 0, needBody: 0,
    legal: true, note: '+1.7%，比原廠只大一點；TOYO OPEN COUNTRY H/T Ⅱ 官方表有這個尺寸（98H，有白字）' },
  { id: 't215r65', label: '215/65R16', dia: 686, width: 221, rim: 16, needLift: 0, needBody: 0,
    legal: true, note: '−1%，比原廠 195/80R15 略矮、胎面寬 26mm。DAMD little 5.／Δ 示範車的尺寸（OZ Rally Racing 16×6J −5 配 BRIDGESTONE ALENZA 001）；外徑 686、總寬 221、標準輪圈 6½J 取自普利司通 ALENZA 001 官方尺寸表。TOYO OPEN COUNTRY R/T 的 LT 版 215/65R16 C 109/107Q 官網標白字；DAMD little G. STANDARD／ADVANCE 與 little B. 的示範車也用這個尺寸。YOKOHAMA RADIAL 360 STEEL 有 P215/65R16 96S 白邊胎（ホワイトリボン，KLC MATURE／CHROME 示範車用的就是它），本頁還畫不出白邊' },
  { id: 't225r18', label: '225/60R18', dia: 727, width: 225, rim: 18, needLift: 0, needBody: 0,
    legal: true, note: '+4.9%，RAYS A・LAP-07X 18×7.0J +8 的實車配置就是這個尺寸，原廠車高未動懸吊' },
  { id: 't30', label: '30×9.50R15', dia: 762, width: 241, rim: 15, needLift: 50, needBody: 0,
    legal: false, note: '+10%，需 50mm 舉升＋修改。超出澳洲法規' },
  { id: 't31', label: '31×10.50R15', dia: 787, width: 267, rim: 15, needLift: 50, needBody: 25,
    legal: false, note: '+13.5%，標準解是 50mm 懸吊＋25mm 車身舉升＋修改' },
  { id: 't33', label: '33 吋', dia: 838, width: 285, rim: 15, needLift: 100, needBody: 25,
    legal: false, severe: true,
    note: '+21%，需 4 吋舉升、−30 offset、大幅切割輪拱與保桿、17/87 減速齒輪' },
];

// Tread patterns drawn by wheels.js. `pattern` picks the procedural geometry
// (at / rt / mt); `mask` names a strip traced from the maker's tread photo
// (blender/trace_tread.py) that replaces it, `repeatMM` being the strip's
// length along the circumference; `owl` says whether the maker sells a white-letter sidewall in JB74
// sizes, so the toggle can be offered honestly.
export const TYRE_MODELS = [
  // highway / road patterns: continuous ribs and straight grooves, no blocks
  { id: 'bs_ht684', pattern: 'ht', url: 'https://tire.bridgestone.co.jp/dueler/equipment/', brand: 'BRIDGESTONE', model: 'DUELER H/T684Ⅱ', owl: false,
    label: 'DUELER H/T684Ⅱ 公路胎', note: 'JB74 Sierra 的原廠配胎：普利司通新車裝著一覽列 195/80R15 96S、品番 PSR16069、¥24,310 稅込。連續直溝加肩部連續肋，低噪音' },
  { id: 'bs_alenza001', pattern: 'ht', url: 'https://tire.bridgestone.co.jp/alenza/001/size.html', brand: 'BRIDGESTONE', model: 'ALENZA 001', owl: false,
    label: 'ALENZA 001 休旅公路胎', note: 'SUV 專用的公路運動胎（「SUV専用オンロード スポーツタイヤ」）。16 吋只有一個尺寸：215/65R16 98H，品番 PSR14900，¥33,220 稅込（普利司通官方尺寸表）。官方表沒有白字。DAMD little 5.／Δ 示範車配的就是這條' },
  { id: 'toyo_ht2', pattern: 'ht', url: 'https://www.toyotires.jp/product/opht2/', brand: 'TOYO TIRES', model: 'OPEN COUNTRY H/T Ⅱ', owl: true, owlSizes: ['t225r18', 't225r55'],
    label: 'OPEN COUNTRY H/T Ⅱ 公路胎', note: '官方尺寸表沒有 195/80R15 與 215/70R16；18 吋有 225/60R18、225/55R18、235/60R18，都有白字。肩部連續肋、直線縱溝的低噪音公路胎紋' },
  { id: 'toyo_at3', photo: true, pattern: 'at', brand: 'TOYO TIRES', model: 'OPEN COUNTRY A/T III', owl: true,
    owlSizes: ['t215r16', 't235', 't30', 't31'],
    mask: { file: 'toyo_at3.png', repeatMM: 184 },
    label: 'Open Country A/T III 全地形胎', note: '白字：日規 215/70R16、美規 235/75R15、30×9.5、31×10.5' },
  { id: 'bfg_ko2', pattern: 'at', brand: 'BFGoodrich', model: 'ALL-TERRAIN T/A KO2', owl: true, owlSizes: 'some',
    label: 'All-Terrain T/A KO2 全地形胎', note: '多數尺寸有白字（RWL）' },
  { id: 'yk_g015', pattern: 'at', brand: 'YOKOHAMA', model: 'GEOLANDAR A/T G015', owl: true, owlSizes: ['t185r16'],
    label: 'GEOLANDAR A/T G015 全地形胎', note: '**日規目錄沒有 195/80R15 也沒有 215/70R16**，實際可用的是 185/85R16（單面白字）；台灣不賣，已被 A/T4 G018 取代。部分尺寸白字' },
  { id: 'fk_at3w', pattern: 'at', brand: 'FALKEN', model: 'WILDPEAK A/T3W', owl: false,
    label: 'WILDPEAK A/T3W 全地形胎', note: '僅黑字' },
  { id: 'toyo_rt', photo: true, pattern: 'rt', brand: 'TOYO TIRES', model: 'OPEN COUNTRY R/T', owl: true, owlSizes: ['t185r16', 't215r65'],
    mask: { file: 'toyo_rt.png', repeatMM: 156 },
    label: 'Open Country R/T 複合越野胎', note: '白字**不在 JB74 主力尺寸**：官方表列 195/80R15 與 215/70R16 皆無 WL，白字在 185/85R16、LT225/70R16、235/70R16（零售 SKU 命名與官方表有衝突，待實車確認）；LT 類另有 215/65R16 C 109/107Q 標 WL（TOYO 官網，DAMD little B. 示範車就是這條）。日規單面白字' },
  { id: 'yk_xat', pattern: 'rt', brand: 'YOKOHAMA', model: 'GEOLANDAR X-AT G016', owl: true, owlSizes: ['t195', 't185r16', 't195r16c'],
    label: 'GEOLANDAR X-AT G016 複合越野胎', note: '白字的 JB74 尺寸是 **195/80R15（雙面白字）與 185/85R16**；LT215/70R16 是黑字。注意 195/80R15 是 **G016A**，兩面側壁設計與行銷照的 G016 不同。白字：195R16C、215/70R16' },
  { id: 'nt_ridge', unavailable: true, pattern: 'rt', brand: 'NITTO', model: 'RIDGE GRAPPLER', owl: false,
    label: 'Ridge Grappler 複合越野胎', note: '**JB74 裝不上**：最小 265/70R16、最小輪圈 7.0J，原廠 5.5J 不合規。全 Grappler 系列也都沒有白字。留著僅供參考。僅黑字；JB74 常用尺寸較少' },
  { id: 'kd_rt', pattern: 'rt', brand: 'KENDA', model: 'KLEVER R/T', owl: true, owlSizes: 'some',
    label: 'Klever R/T KR601 複合越野胎', note: '部分尺寸白字' },
  { id: 'toyo_mt', photo: true, pattern: 'mt', brand: 'TOYO TIRES', model: 'OPEN COUNTRY M/T', owl: true,
    owlSizes: ['t30', 't225r16'],
    mask: { file: 'toyo_mt.png', repeatMM: 246 },
    label: 'Open Country M/T 泥地胎', note: '白字依尺寸：**30×9.50R15 有、31×10.50R15 沒有**，美規全 BSW。JB74 可用尺寸全是 LT，都需要舉升。日規單面白字；LT 規格' },
  { id: 'bs_mt674', pattern: 'mt', url: 'https://tire.bridgestone.co.jp/dueler/mt674/size.html', brand: 'BRIDGESTONE', model: 'DUELER M/T 674', owl: true, owlSizes: ['t215r15'],
    label: 'DUELER M/T 674 泥地胎', note: '普利司通官網尺寸表 15 吋只有 LT215/75R15 100/97Q 與 LT235/75R15C，前者標「裏面アウトラインホワイトレター」（反面白字）。DAMD the ROOTS.／little G. TRADITIONAL 套件搭的就是這條' },
  { id: 'bfg_km3', pattern: 'mt', brand: 'BFGoodrich', model: 'MUD-TERRAIN T/A KM3', owl: false,
    label: 'Mud-Terrain T/A KM3 泥地胎', note: '僅黑字' },
  { id: 'yk_g003', pattern: 'mt', brand: 'YOKOHAMA', model: 'GEOLANDAR M/T G003', owl: false,
    label: 'GEOLANDAR M/T G003 泥地胎', note: '**無白字**：Yokohama 明載「G003は全サイズ、レイズドブラックレター、リムプロテクトバー付」——任何市場任何尺寸都沒有白字。日規 215/70R16 有白字' },
  { id: 'cp_stt', pattern: 'mt', brand: 'COOPER', model: 'DISCOVERER STT PRO', owl: true, owlSizes: ['t31'],
    label: 'Discoverer STT Pro 泥地胎', note: 'JB74 只有 31×10.50R15 一個尺寸可用。31×10.5R15 白字' },
];


// Front bumpers and grilles are modelled parts (blender/build_parts.py);
// `id` is the part name suffix in parts.glb. Choosing one hides the stock
// bumper (with its fog lamps) or the stock grille panel on the model.
export const FRONT_BUMPERS = [
  // ---- URNIETA 全車套件專用前保桿（urnieta.com）
  { id: 'urnieta_salado', url: 'https://urnieta.com/product/salado-front-bumper-for-jimny-jb74-jc74/', label: 'SALADO 絞盤前保桿', price: null, cur: 'TWD', brand: 'URNIETA', kit: 'urnieta_salado', uncertain: true,
    note: '工程圖 UN-JIMNY-FB-001：1426×670（含 U 型防撞桿）。42.8kg，內藏 8000lb 絞盤艙與導索器，兩端內嵌燈窩加鋼網護罩，U 桿與防撞桿可互換、下護板可拆。官網不標價' },
  // ---- DAMD 全車套件專用前保桿（damd.co.jp）
  { id: 'damd_little_d', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-d/', label: 'little D. 前保桿', price: 63800, cur: 'JPY', brand: 'DAMD', kit: 'little_d',
    note: '平直鋼板風橫樑，兩端 45° 切角包到輪弧、端板各兩顆外露螺栓；原廠圓霧燈沿用，中央黑網槽，下方槍灰護板下緣一排往下突的壓紋舌片。烤漆另加 ¥35,200，配色只有粗目消光黑（橫樑與端板）×槍灰（只有護板）。裝車要切輪拱內襯；5 型以後另購雷達／聲納套件 ¥17,380。saudade 套件用的也是這一支' },
  { id: 'damd_little_g_std', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g/', label: 'little G. STANDARD 前保桿', price: 75900, cur: 'JPY', brand: 'DAMD', kit: 'little_g_std',
    note: '車身色箱型保桿，兩支鍍鉻 U 型護角折過上緣，兩端黑網霧燈格沿用原廠圓霧燈（XG 等級要另購霧燈），中央黑網，下緣消光銀護板。烤漆另加 ¥31,900（車身色×消光銀）。只能與 type-1 爆龜＋鋁踏板一起裝；AVENTURA 套件也用這支。尺寸照官方照片估' },
  { id: 'damd_little_g_adv', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_advance/', label: 'little G. ADVANCE 前保桿（PIAA LED 霧燈）', price: 107800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_adv',
    note: '車身色箱型保桿，鍍鉻直護角，兩端魚鱗網霧燈格內附 PIAA LED 小圓霧燈，下緣消光槍灰護板一排小凹槽。烤漆另加 ¥30,800（車身色×消光黑×消光槍灰）；雷達／聲納套件 ¥26,400。尺寸照官方照片估' },
  { id: 'damd_little_g_trad', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_traditional/', label: 'little G. TRADITIONAL 前保桿', price: 96800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_trad',
    note: '三層鋼板保桿：最上一條鋼琴黑直肋帶、中間消光黑主橫樑（中央兩格網）、下層往後收的護板帶六道三角肋。附 Koito 鹵素方形黃霧燈，鍍鉻殼、站在主橫樑兩端上方（官網提醒鍍鉻會生鏽）；車牌偏駕駛座側。塗裝為消光黑×鋼琴黑' },
  { id: 'damd_roots', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_theroots/', label: 'JIMNY the ROOTS. 前保桿', price: 63800, cur: 'JPY', brand: 'DAMD', kit: 'roots',
    note: '雙層：上層鋼板橫樑兩排三欄長槽（示範車為コットンホワイト），下層消光黑裙板置中掛牌，兩側原廠圓霧燈。烤漆另加 ¥35,200，可選コットンホワイト／粗目銀／粗目黑×消光黑。與 little B. 共用' },
  { id: 'damd_little_b', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-b/', label: 'little B. 前保桿（粗目銀）', price: 63800, cur: 'JPY', brand: 'DAMD', kit: 'little_b',
    note: '就是 the ROOTS. 那一支（官網寫 the ROOTS／little B. 共用），這裡畫 little B. 示範車的粗目消光銀上梁×消光黑下裙。烤漆另加 ¥35,200' },
  { id: 'stock', label: '原廠', price: 0, brand: 'SUZUKI' },
  // ---- 台灣有售
  { id: 'tube_heritage', photo: true, url: 'https://www.klc-div.com/heritage/product/bumper/traditionalbumperfront_2_bk/', refs: ['https://www.klc-div.com/heritage/product/bumper/traditionalbumperfront_2_iv/', 'https://www.mrk.com.tw/product_ii.html?ID=561'], label: 'Traditional 雙管前保桿（黑）', price: 99000, cur: 'JPY', brand: 'KLC Heritage', part: '162070313', photo: true,
    note: '上下雙圓管、車牌跨兩管、Heritage 護板。全不鏽鋼製；無霧燈架 ¥99,000（162070313）、含霧燈架 ¥110,000（162070297），皆稅込。適用 JB74W シエラ 與 JC74W ノマド，シエラ 5 型與 ノマド 2 型不可裝。車主實車配置（霧燈改 KC FLEX ERA 4）' },
  { id: 'armando', photo: true, url: 'https://www.mrk.com.tw/product_ii.html?ID=1542', label: 'PRIME 鋼製前保桿', price: 29000, cur: 'TWD', brand: 'ARMANDO',
    part: 'AR-SU-FB-PRM', note: '全寬鋼板保桿、中央燈架、圓霧燈孔、下護板' },
  { id: 'urnieta_1970', photo: true, url: 'https://www.mrk.com.tw/product_ii.html?ID=2210', label: '1970 復古前保桿', price: 20600, cur: 'TWD', brand: 'URNIETA', part: 'UR010',
    note: '工程圖 UN-JIMNY-FB-027：1547×331，兩端上揚翼形角＋三道散熱縫，中央百葉面板配 URNIETA 與 1970 SERIES 銘牌，下方平板配兩顆拖車環。21kg。短版復古、兩側上折收窄，保留原廠霧燈與洗燈' },
  { id: 'beyond_liberte', photo: true, url: 'https://www.mrk.com.tw/product_ii.html?ID=2114', label: 'Liberte 復古前保桿', price: 28000, cur: 'TWD', brand: 'Beyond Japan',
    note: '不鏽鋼（黑色是塗裝），霧燈架＋下護板；MRK 代理價。Beyond 官方同款有鏡面／黑／象牙三種表面，前桿依霧燈架與護板分四種，¥69,300–¥107,800 稅込' },
  // the same bar in Beyond's other two finishes: same geometry (`node`), the
  // black powder coat swapped for the finish
  { id: 'beyond_liberte_mirror', node: 'beyond_liberte', finish: 'mirror', url: 'https://beyond-jpn.com/', label: 'Liberte 復古前保桿（鏡面不鏽鋼）', price: null, cur: 'JPY', brand: 'Beyond Japan', uncertain: true,
    note: 'Beyond 官方的鏡面拋光不鏽鋼版；官方前桿依規格 ¥69,300–¥107,800 稅込，鏡面這一款的單價官網沒有分開寫清楚' },
  { id: 'beyond_liberte_ivory', node: 'beyond_liberte', finish: 'ivory', url: 'https://beyond-jpn.com/', label: 'Liberte 復古前保桿（象牙白）', price: null, cur: 'JPY', brand: 'Beyond Japan', uncertain: true,
    note: 'Beyond 官方的象牙白塗裝版；官方前桿依規格 ¥69,300–¥107,800 稅込' },
  { id: 'maverick', photo: true, url: 'https://i-pickup.com.tw/product/df0001/', label: '短版金屬前保桿', price: 29000, cur: 'TWD', brand: 'Maverick',
    part: 'DF0001', note: '鍍鋅鋼 NT$29,000／鋁合金 NT$35,000，塗裝 +9,000' },
  { id: 'mrk_abs', photo: true, url: 'https://www.mrk.com.tw/product_ii.html?ID=1948', label: '短版 ABS 前保桿（消光黑）', price: 9500, cur: 'TWD', brand: 'MRK', part: 'JMY-FB-L',
    note: '原廠造型縮短版、ABS' },
  { id: 'wmd_winch', photo: true, url: 'https://www.ruten.com.tw/item/show?22105872751291', label: '絞盤短版前保桿', price: 18000, cur: 'TWD', brand: 'WMD（台灣）',
    note: '台製鋼板短版桿、中央絞盤座與上蓋板、兩側紅色 D 環座。賣場照片上沒有護弓，目錄原寫的「Ø50 護弓」已拿掉' },
  { id: 'jaos_cowl', photo: true, url: 'https://www.jaos.co.jp/product/B040518/2866', label: 'Front Sport Cowl 前下擾流', price: 18700, cur: 'TWD', brand: 'JAOS', part: 'B040518',
    note: 'JAOS 日本官網確認 ¥66,000 稅込／¥60,000 稅抜，品番 B040518，聚氨酯未塗裝黑本體配鋁網，單品 5.05kg。適合年式 2018 年 7 月〜2025 年 11 月、全等級皆可裝；全長 +10mm、下緣 −80mm，寬度在全寬內。官網目前顯示售完，預計 2026 年 11 月上中旬出貨。目錄中的 NT$18,700 是台灣售價，本次查證只找到 JAOS 日本官網資料，MRK 等台灣代理站上未查到這支前下巴的對應頁面，NT$ 數字暫無法對應到第一手來源，先標 uncertain。',
    uncertain: true },
  // ---- 日本
  { id: 'klc_short', photo: true, url: 'https://www.klc-div.com/heritage/product/bumper/frontshortbumper74/', photo: true, label: 'Front Short Bumper 74 前保桿', price: 102300, cur: 'JPY', brand: 'KLC Heritage',
    note: 'ABS 樹脂、原廠高度縮短版，中央鋁網開口（銀色）、保留原廠霧燈。塗裝色只有皺紋黑：塗裝完成品 ¥102,300、未塗裝素材 ¥69,300，皆稅込。適用 JB74W シエラ 與 JC74W ノマド，シエラ 5 型與 ノマド 2 型不可裝' },
  { id: 'apio_tactical_front', node: 'apio_tactical', url: 'https://apio.jp/parts/3032-61.html', label: 'Tactical 前保桿', price: 121000, cur: 'JPY', brand: 'APIO', part: '3032-61',
    note: '¥121,000 稅込（未塗裝），烤漆另加 ¥35,200。ABS 真空成形的方正保桿，兩端往上切，保留原廠圓霧燈與頭燈清洗器，中央開口附網，下方一片灰色護板。適用 JB74 1〜4 型（5 型因毫米波雷達不可裝），要切輪弧內襯。官網未公布尺寸，照 NARROW SIERRA 示範車正面照以車牌量' },
  { id: 'klc_trad', photo: true, url: 'https://www.klc-div.com/heritage/product/bumper/traditionalbumperfront_2_iv/', photo: true, label: 'Traditional 雙管前保桿（象牙白）', price: 99000, cur: 'JPY', brand: 'KLC Heritage',
    note: '與黑色同一支、象牙白塗裝。全不鏽鋼製，無霧燈架 ¥99,000、含霧燈架 ¥110,000，皆稅込。適用 JB74W シエラ 與 JC74W ノマド，シエラ 5 型與 ノマド 2 型不可裝。（原本連到的是 JB64 的頁面，¥104,500 是那台的價）' },
  { id: 'outclass_t2', photo: true, url: 'https://outclass.ocnk.net/product/1095', photo: true, label: 'TYPE2 絞盤鋼製前保桿', price: 140800, cur: 'JPY', brand: 'OUTCLASS',
    note: 'OUTCLASS 官網確認 ¥128,000 稅別／¥140,800 稅込（希望小售價 ¥180,000），品番 JB64JB74JC74-A-FB2UBTETU【260/160サイズ】，鋼製，適用 JB64／JB74／JC74。含絞盤床與四顆 LED（霧燈 ×2、工作燈 ×2），導索器、D 環與絞盤本體另購；官網目前顯示 Raptor 塗層選項「受付中止」，出廠僅提供未烤漆素材。原廠頭燈清洗器無法安裝，重量官網未標示。',
    part: 'JB64JB74JC74-A-FB2UBTETU' },
  { id: 'taniguchi_square', photo: true, url: 'https://www.ors-taniguchi.co.jp/parts-cat/jb_exterior_front/', label: '角形前保桿', price: 58300, cur: 'JPY', brand: 'TANIGUCHI',
    note: 'TANIGUCHI 官網確認鋼製粉體烤漆黑 ¥58,300 稅込、不鏽鋼 SUS304 #400 研磨版 ¥107,800 稅込（安裝支架仍為鋼製），適用 JB64・74／JC74，本體約 3kg。「2mm 方管」查無依據——2mm 是同廠後保桿角形版的規格，前保桿頁面只公布材質、塗裝與重量，官網未公布品番與角管尺寸壁厚。' },
  { id: 'taniguchi_double', photo: true, url: 'https://www.ors-taniguchi.co.jp/parts-cat/jb_exterior_front/', label: '雙管前保桿', price: 77000, cur: 'JPY', brand: 'TANIGUCHI',
    note: 'TANIGUCHI 官網確認 ¥77,000 稅込，鋼製粉體烤漆黑，管徑 48.6mm、壁厚 2.3mm，本體約 9kg，適用 JB64（XG 除外）／JB74／JC74。官網未公布品番。' },
  { id: 'toc_extreme', photo: true, url: 'https://tocbw.thebase.in/items/82110724', label: 'Extreme Bumper 74 前保桿', price: 54780, cur: 'JPY', brand: 'TOC BODYWORKS',
    note: 'TOC BODYWORKS 官方店確認「エクストリームバンパー74 フロント」¥54,780 稅込，適用 JB74 シエラ 與 JC74 ノマド，FRP 黑膠衣（ゲルコート）處理，出貨即需自行烤漆（官網另提供代烤漆加價選項）。官網明寫「LEDライトバー、スキッドプレートは含まれません」，且沒有內建 LED 燈條凹槽的說明。另有含 TOC スキッドプレート74 的兩件組 ¥82,280 與前後加護板的三件組 ¥137,060。目前為預購品，預計 2026 年 10 月 10 日起陸續出貨。' },
  // ---- 澳洲
  { id: 'arb_summit', photo: true, url: 'https://www.arb.com.au/product/3424050-arb-summit-bull-bar-with-textured-finish-suzuki-jimny',
    label: 'Summit 牛欄前保桿＋WARN 8000 絞盤', price: 4185, cur: 'AUD', brand: 'ARB', part: '3424050 + WARN M8000', uncertain: true,
    refs: ['https://www.arb.com.au/au/en/product-releases/new-range-for-mini-fourby'],
    note: 'ARB 做過最小的 Summit 牛欄（Project JBOX 新聞稿），鋼製粗紋黑粉體；翼板與底盤護板 3.0mm、外管與中央管 Ø47.6×2.6mm，含 ARB Fog Light MkII 霧燈座、LED 方向／示寬燈、兩個 Hi-Lift 頂車點、底護板、駕駛燈孔，通過 ADR 與氣囊認證，可裝最大 8000lb 絞盤（安裝說明書 3789938）。保桿 AUD 2,220＋WARN M8000 絞盤 AUD 1,965（JBOX 裝的是 Warn Magnum 8,000lb，ARB 現售同級是 M8000），絞盤安裝套件 3500720 另計；裝絞盤時車牌改用折疊式車牌架。整支的寬、高、深與重量 ARB 未公布，照 JBOX 官方照片以大燈間距為尺畫。保桿中央掛的紅色軟式拖車扣是照片所見，ARB 現售的 ARB2018 是橘色，型號未確認' },
];

export const REAR_BUMPERS = [
  // ---- URNIETA 全車套件專用後保桿（urnieta.com）
  { id: 'urnieta_salado_rear', url: 'https://urnieta.com/product/salado-rear-bumper-for-jimny-jb74-jc74/', label: 'SALADO 後保桿', price: 27000, cur: 'TWD', brand: 'URNIETA', kit: 'urnieta_salado', ownLamps: true,
    refs: ['https://shopee.tw/product/7996649/54712201643'],
    note: '工程圖 UN-JIMNY-FB-002：高 216mm、展開全長 1816。半高式、兩端包覆轉角，左右各一組燈窗（一側 Salado、一側 URNIETA 銘牌），下方兩片腳踏板。16.4kg。台灣蝦皮 NT$27,000' },
  // ---- DAMD 全車套件專用後保桿（damd.co.jp）
  { id: 'damd_delta_rear', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_littledelta/', label: 'little 5.／Δ 後保桿（DB 方形尾燈）', price: 74800, cur: 'JPY', brand: 'DAMD', kit: 'little_delta', ownLamps: true,
    note: '素地 ¥74,800 稅込（¥68,000 稅抜），ABS，little 5. 與 little Δ 共用；嵌 DB 社方形尾燈，由外往內是琥珀方向燈｜紅色尾燈（兩顆圓透鏡）｜透明倒車燈。外側兩塊凸起帶五道橫紋、橫紋繞過轉角到側面，下緣各一片深灰飾唇，中段內凹掛牌。這是 little Δ 紅色示範車的配色：保桿車身色、飾唇灰。尺寸照官方正後方照片以車牌量：寬約 1540、高約 285、尾燈約 217×68 在 ±550。2024 年 11 月以後生產的車官方建議加裝倒車顯影' },
  { id: 'damd_little5_rear', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little5/', label: 'little 5.／Δ 後保桿（灰色，little 5. 示範車配色）', price: 74800, cur: 'JPY', brand: 'DAMD', kit: 'little_5', ownLamps: true,
    note: '和上一項是同一件（¥74,800 稅込，素地出貨），這裡畫成 little 5. 紫藍示範車的配色：保桿石板灰、下緣飾唇深灰。官網文案說可選車身色或灰色等配色，但目前只列素地價，烤漆另計' },
  { id: 'damd_little_d_rear', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-d/', label: 'little D. 後保桿', price: 81400, cur: 'JPY', brand: 'DAMD', kit: 'little_d', ownLamps: true,
    note: '兩個獨立端盒（四角螺栓的平板）夾著一段下沉、內縮的中段，下方再一根較窄的橫樑。原廠尾燈整組拆除，改用套件附的凸圓燈：每側琥珀方向燈＋紅色尾燈，端盒外角下方三角支架上一顆透明倒車燈，下樑兩顆紅色圓反光片；附車牌底座。烤漆另加 ¥24,200（只有粗目消光黑）。DAMD 示範車加購 ¥10,780 車牌移設套件改掛後門；有倒車雷達要鑽孔、原廠車牌需重新封印。saudade 套件用的也是這一支' },
  { id: 'damd_little_g_trad_rear', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_traditional/', label: 'little G. TRADITIONAL 後保桿', price: 85800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_trad', ownLamps: true,
    note: '外露面粗目消光黑、凹陷處鋼琴黑，兩端包到爆龜的端蓋各兩顆螺栓，下緣一排鋼琴黑直齒。每側一顆長方形燈（官網寫 DB 社製鹵素角形尾燈，未公布料號與尺寸），鏡片分四格，由外而內琥珀方向燈／紅／紅／透明倒車燈。車牌置中' },
  { id: 'damd_little_g_adv_rear', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_advance/', label: 'little G. ADVANCE 後保桿（415COBRA LED 尾燈）', price: 162800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_adv', ownLamps: true,
    note: '車身色箱型保桿，下緣消光槍灰唇、兩支鍍鉻直護角，附 415COBRA LIGHT SABER PRISTIGE LED 尾燈（圓角長方紅燈、中央透明光條，序列式方向燈）。烤漆另加 ¥30,800；4／5 型倒車雷達對應套件各 ¥17,380。AVENTURA 套件也用這支' },
  { id: 'damd_oem_painted', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g/', label: '原廠後保桿烤車身色（little G. STANDARD 加購）', price: 118800, cur: 'JPY', brand: 'DAMD', paintStock: true,
    note: 'STANDARD 套件不含後保桿；示範車是把原廠後保桿磨掉咬花再烤車身色，原廠尾燈不動。單品區塊 ¥118,800，套件加購表另寫 ¥96,800（1–3 型）／¥107,800（4 型），兩處不一致照原文並列。2024/1 以後接單的倒車雷達車不適用' },
  { id: 'damd_roots_rear', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_theroots/', label: 'JIMNY the ROOTS. 後保桿＋延伸片', price: 96800, cur: 'JPY', brand: 'DAMD', kit: 'roots', ownLamps: true,
    note: '上段兩個端盒（コットンホワイト）各一顆琥珀＋一顆紅色圓燈，中段在備胎下方內縮；下段消光黑，置中掛牌、兩側方形紅反光片、車牌右側一顆圓形倒車燈。「延伸片」是 Sierra 專用的左右兩片輪拱尾端蓋板，從後爆龜末端接到保桿端，烤漆版一律消光黑。DAMD 示範車上段是車身綠，這個配色在官網 HTML 裡被註解掉。有倒車雷達要鑽孔' },
  { id: 'damd_little_b_rear', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-b/', label: 'little B. 後保桿＋延伸片（粗目銀）', price: 96800, cur: 'JPY', brand: 'DAMD', kit: 'little_b', ownLamps: true,
    note: '與 the ROOTS. 同一支，這裡畫 little B. 示範車的粗目消光銀上段；延伸片（輪拱尾端蓋板）一律消光黑' },
  { id: 'stock', label: '原廠', price: 0, brand: 'SUZUKI' },
  // ---- 台灣有售
  { id: 'tube', photo: true, label: '管狀後保桿（含尾燈座）', price: null, cur: 'TWD', brand: '多家', uncertain: true,
    note: 'Ø76 直管、方形封板、尾燈座板、右側排氣尾管、拖鉤' },
  { id: 'klc_heritage_rear', photo: true, url: 'https://www.klc-div.com/heritage/product/bumper/traditionalbumperrear_2_bk/', refs: ['https://www.mrk.com.tw/product_ii.html?ID=2059'], ownLamps: false, label: 'Traditional 雙管後保桿（黑）', price: 88000, cur: 'JPY', brand: 'KLC Heritage', photo: true,
    note: '粗直管＋兩端梯形尾燈座板、車牌下吊。全不鏽鋼製（不是粉體鋼），¥88,000 稅込，沿用原廠尾燈。裝的時候原廠備胎必須移位。適用 JB74W シエラ 與 JC74W ノマド，シエラ 5 型與 ノマド 2 型不可裝。車主實車配置' },
  { id: 'urnieta_1970_rear', photo: true, url: 'https://www.mrk.com.tw/product_ii.html?ID=2219', ownLamps: true, label: '1970 復古後保桿', price: 20400, cur: 'TWD', brand: 'URNIETA', part: 'UR015',
    note: '工程圖 UN-JIMNY-FB-028：1617×265，每側兩顆圓形尾燈（官方寫致敬 Nissan GT-R）＋方形凹窗，右側 URNIETA 燈條銘牌，車牌置中。8.4kg。半高、兩端上折、圓形尾燈，8.4kg' },
  { id: 'beyond_rear', photo: true, ownLamps: true, url: 'https://www.mrk.com.tw/product_ii.html?ID=2112', label: 'Liberte 復古後保桿', price: 21000, cur: 'TWD', brand: 'Beyond Japan',
    note: '不鏽鋼（黑色是塗裝）的精簡管桿；MRK 代理價。Beyond 官方同款鏡面／黑／象牙三種表面 ¥83,600–¥86,900 稅込' },
  { id: 'beyond_rear_mirror', node: 'beyond_rear', ownLamps: true, finish: 'mirror', url: 'https://beyond-jpn.com/', label: 'Liberte 復古後保桿（鏡面不鏽鋼）', price: null, cur: 'JPY', brand: 'Beyond Japan', uncertain: true,
    note: 'Beyond 官方鏡面版；官方後桿三種表面 ¥83,600–¥86,900 稅込，鏡面單價官網未分開標' },
  { id: 'beyond_rear_ivory', node: 'beyond_rear', ownLamps: true, finish: 'ivory', url: 'https://beyond-jpn.com/', label: 'Liberte 復古後保桿（象牙白）', price: null, cur: 'JPY', brand: 'Beyond Japan', uncertain: true,
    note: 'Beyond 官方象牙白版；官方後桿三種表面 ¥83,600–¥86,900 稅込' },
  { id: 'jaos_rear_cowl', photo: true, url: 'https://www.mrk.com.tw/product_ii.html?ID=1176', ownLamps: true, label: 'Rear Sport Cowl 後下擾流', price: 26500, cur: 'TWD', brand: 'JAOS', part: 'B042518',
    note: 'JAOS 台灣代理 MRK 定價 NT$26,500（未塗裝），日本官方 ¥92,400 稅込／¥84,000 稅抜，品番 B042518，聚氨酯未塗裝本體、不鏽鋼支架，單品 4.65kg。適合 JB74 系 1〜3 型（2018.07〜2024.04），4 型以後官網未列入適合表。四顆圓形 LED 尾燈通過 ECE 認證、可過原廠車檢；套件內附倒車攝影機支架（僅支架，不含攝影機本體）。' },
  // ---- 日本
  { id: 'wildgoose_crawler_rear', tgPlate: true, photo: true, ownLamps: true, url: 'https://www.rv4wildgoose.com/parts/jimny-64-74/rear_bumper_64/jm-1103.html', label: 'Crawler 圓管後保桿 JM-1103', price: 66000, cur: 'JPY', brand: 'RV4 Wild Goose',
    note: 'RV4 Wild Goose 官網確認品番 JM-1103，¥60,000 稅抜／¥66,000 稅込，重量 9.3kg。鋼製，管徑 76.3mm、壁厚 1.6mm，黑色半消光塗裝，尺寸 W1330×H200×D225mm；尾燈座板厚 4.5mm、鏡片內縮 10mm 防撞設計，拖車環 Ø50mm（附 Ø20mm 鎖點）。官網明寫本體不含尾燈，尾燈是另購的「コンビネーションランプ」需自行選配安裝，原廠尾燈不與本桿共用。適用 ジムニー JB64 與 ジムニーシエラ JB74（JB74 因原廠寬體輪拱，兩側略短）。裝車需移動車牌與備胎。' },
  { id: 'wildgoose_box_rear', tgPlate: true, photo: true, ownLamps: true, url: 'https://www.rv4wildgoose.com/parts/jimny-64-74/rear_bumper_64/jm-1101.html', label: '角管越野後保桿 JM-1101', price: 95700, cur: 'JPY', brand: 'RV4 Wild Goose',
    note: 'RV4 Wild Goose 官網確認品番 JM-1101，¥87,000 稅抜／¥95,700 稅込，重量 13.2kg。鋼製，本體斷面 W1410×H100×D100mm，含支架整體尺寸為 W1410×H200×D220mm；本體板厚 3.2mm、安裝托架 9.0mm、補強板 3.2mm，陽離子電著加黑色半消光塗裝。主打 ジムニー JB64，ジムニーシエラ JB74 亦可裝（因原廠寬體輪拱兩側略短）。官網明寫本體不含尾燈，需另購「コンビネーションランプ」自行安裝；裝車需移動車牌與備胎。' },
  { id: 'showa_iron_rear', tgPlate: true, photo: true, ownLamps: true, url: 'https://www.showa-garage.shop/shopdetail/000000000843/', refs: ['https://www.showa-garage.shop/shopbrand/ct343/'], label: 'Iron Bumper 鋼管後保桿', price: 62150, cur: 'JPY', brand: 'SHOWA GARAGE',
    part: 'E00930', note: 'Ø60 主管＋Ø42 尾燈管翼，消光黑。¥62,150 稅込。適用 JB74 1〜4 型（5 型不可裝）。附 LED 倒車燈的版本依型式分兩個品番：1〜3 型 E00951 ¥127,160、4 型與 JC74 1 型 E00952 ¥127,930' },
  { id: 'taniguchi_rear_pipe', tgPlate: true, photo: true, ownLamps: true, url: 'https://www.ors-taniguchi.co.jp/parts-cat/jb_exterior_rear/', label: '鋼管越野後保桿', price: 63800, cur: 'JPY', brand: 'TANIGUCHI',
    note: 'TANIGUCHI 官網確認鋼管版（オフロードリアバンパー）¥63,800 稅込、管徑 48.6mm、壁厚 2.3mm，適用 JB64・74／JC74；角形版（リア角バンパー）鋼製同為 ¥63,800（純屬巧合非筆誤）、本體約 4kg、板厚 2mm，另有不鏽鋼 SUS304 #400 研磨版 ¥121,000 稅込；拖車鉤版 ¥128,700 稅込、管徑 48.6mm、壁厚 3.5mm，本體約 15kg 加安裝托架約 5kg，僅適用 JB64・74（不含 JC74）。三款官網皆未公布品番。' },
  { id: 'apio_tactical_rear', tgPlate: true, photo: true, url: 'https://apio.jp/parts/3032-71.html', label: 'Tactical 後保桿', price: 140800, cur: 'JPY', brand: 'APIO', part: '3032-71',
    note: 'APIO 官網確認 ¥140,800 稅込、品番 3032-71 未塗裝，烤漆版（消光黑）加 ¥33,000 稅込，ジムニーシエラ JB74 專用件（非 JB64 共用），ABS 真空成形。內容含本體、左右寬版延伸片、尾煞車燈殼、方向燈殼、倒車燈殼與反光片；燈殼為專用外殼取代原廠尾燈總成，燈泡／插座／線組沿用原廠零件（倒車燈需接長線組）。1660×280×460mm 為出貨外箱尺寸，並非本體實際寸法，本體寸法與重量官網未公布；部分倒車雷達車型需鑽孔。',
    ownLamps: true },
  { id: 'apio_tactical_rear64', url: 'https://apio.jp/parts/3032-70.html', label: 'Tactical 後保桿（JB64 用，配窄版爆龜）', price: 95700, cur: 'JPY', brand: 'APIO', part: '3032-70',
    note: '¥95,700 稅込（未塗裝），消光黑烤漆 3032-70B 另加 ¥25,300。本來是 JB64 用，沒有 JB74 版的寬延伸片；APIO 窄版爆龜的商品頁寫明 JB74 裝窄爆龜時必須用這一支。燈殼、方向燈殼、倒車燈殼各兩組，沿用原廠燈泡，車牌移到尾門。模型照 JB74 版縮短兩端畫',
    ownLamps: true },
  { id: 'outclass_rear_abs', photo: true, url: 'https://outclass.ocnk.net/product/1094', ownLamps: true, label: 'TYPE2 ABS 後保桿', price: 45760, cur: 'JPY', brand: 'OUTCLASS',
    note: 'OUTCLASS 官網確認 ¥41,600 稅別／¥45,760 稅込（希望小售價 ¥83,200），品番 JB64JB74JC74-A-RB2ABS【200サイズ】，ABS 製，適用 JB64／JB74／JC74。標準品未塗裝且不含尾燈，尾燈（國產小型尾燈或 LED 燻黑版）、Raptor 黑塗裝、倒車雷達鑽孔皆為加價選配。',
    part: 'JB64JB74JC74-A-RB2ABS' },
  { id: 'hamer_mx208', tgPlate: true, receiver: [345, -1586], photo: true, url: 'https://www.hamer4x4.com/mx208-jimny-rear-bumper/', ownLamps: true, label: 'MX208 鋼製後保桿', price: 1590, cur: 'AUD', brand: 'Hamer 4x4',
    note: '1830×650×340 包覆式鋼板、角落踏板、燈條槽，50kg' },
];

export const GRILLES = [
  // ---- URNIETA 全車套件專用面板（urnieta.com，工程圖有標註尺寸）
  { id: 'urnieta_salado', url: 'https://urnieta.com/product/salado-grille-for-jimny-jb74-jc74/', label: 'SALADO 水箱護罩', price: null, cur: 'TWD', brand: 'URNIETA', kit: 'urnieta_salado', uncertain: true,
    note: '工程圖 UN-JIMNY-FB-004：1337×241，中央開口 592×126，橫向百葉＋URNIETA 立體字。ABS、1.2kg、45° 下傾進氣。官網不標價' },
  // ---- DAMD 全車套件專用面板（damd.co.jp）
  { id: 'damd_little_d', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-d/', label: 'little D. 水箱護罩（消光黑）', price: 52800, cur: 'JPY', brand: 'DAMD', kit: 'little_d',
    note: '致敬舊款 Land Rover Defender：凸出的黑框內 7 道細橫條＋2 道直條（3 欄 8 列）壓在黑網上，方形燈座包住原廠頭燈，外側上琥珀、下透明兩顆小圓燈（透明假燈，LED 點亮套件另購 ¥8,580）。消光黑 ¥52,800；原廠色×消光黑（只有中央外框車身色）¥75,900。綠色橢圓徽章另購 ¥3,080' },
  { id: 'damd_little_g_std', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g/', label: 'little G. STANDARD 水箱護罩', price: 63800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_std',
    note: '後期 W463 風：車身色面板＋方形燈座，中央另件式鍍鉻圓角外框、兩側各兩道鍍鉻橫條、dd 圓徽章，頭燈外側直立 LED 方向燈（皆附）。網一律黑色；烤漆另加 ¥23,100。AVENTURA 套件也用這片' },
  { id: 'damd_little_g_adv', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_advance/', label: 'little G. ADVANCE 水箱護罩（直瀑鍍鉻）', price: 52800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_adv',
    note: 'W463A／AMG 直瀑格柵風：跨過原廠分模線蓋到葉子板，黑底上一排直立鍍鉻鰭片、中央 dd 徽章。未塗裝，烤漆另加 ¥23,100（原廠色×消光黑）。必須與 little G. 引擎蓋罩一起裝' },
  { id: 'damd_little_g_trad', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_traditional/', label: 'little G. TRADITIONAL 水箱護罩', price: 75900, cur: 'JPY', brand: 'DAMD', kit: 'little_g_trad',
    note: '致敬初代 W460：一整片消光黑面板跨過分模線蓋到葉子板，兩端是很厚的方形燈座；中央直柱把百葉分成左右兩欄、每欄上 4 下 4 道開槽，中間實心橫帶承托消光黑 dd 徽章。沒有小圓燈。只有消光黑；必須與 little G. 引擎蓋罩一起裝' },
  { id: 'damd_roots', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_theroots/', label: 'JIMNY the ROOTS. 水箱護罩', price: 52800, cur: 'JPY', brand: 'DAMD', kit: 'roots',
    note: '與 APIO 共同開發，致敬初代 LJ10：車身色整片面板包住頭燈與圓形琥珀方向燈（附），開口是三排圓頭長槽——上一條長槽、SUZUKI 鍍鉻字（附原廠字標）、再一條長槽、最下兩條短槽中間斷開，長槽內各兩道直隔。烤漆另加 ¥17,600（ZVR／ZZC／ZJ3／ZVL／ZVG）' },
  { id: 'damd_little_b', url: 'https://apio.jp/', refs: ['https://www.damd.co.jp/products/suzuki/jimny_sierra_little-b/'], label: 'little B. APIO ヴィンテージアイアングリル（半艷黑）', price: null, cur: 'JPY', brand: 'APIO × DAMD', kit: 'little_b', uncertain: true,
    note: 'APIO 的鋼製水箱罩，DAMD 頁面價格欄空白、導向 APIO 購買（未查到單價）。整片包住頭燈與外角琥珀圓燈，上下兩組 3×6 圓頭壓製橫槽，中央平帶貼 DAMD 美式立體字（橘面銀邊，¥7,480）。現行色半艷黑；銀色在 5 點套件已停售；コットンホワイト是 WHITE EDITION 限定' },
  { id: 'damd_little_b_silver', url: 'https://apio.jp/', refs: ['https://www.damd.co.jp/products/suzuki/jimny_sierra_little-b/'], label: 'little B. APIO ヴィンテージアイアングリル（銀）', price: null, cur: 'JPY', brand: 'APIO × DAMD', kit: 'little_b', uncertain: true,
    note: 'little B. 示範車裝的銀色版；官網寫 5 點套件的銀色已經終了，完整套件（含輪圈）仍列可選。單價未公布' },
  { id: 'apio_vintage_iron', url: 'https://apio.jp/parts/3033-57.html', refs: ['https://apio.jp/completecar/delivery/ts3-58.html', 'https://www.suzuki.co.jp/accessory_car/jimny_sierra-accessory.html'],
    label: 'ヴィンテージアイアングリル＋草寫字標', price: 55000, cur: 'JPY', brand: 'APIO', part: '3033-57B（半艷黑）／3033-57L（淺古銅）', uncertain: true,
    note: '鋼製（スチール），約 2.8kg（含支架），原廠卡扣＋螺絲直上，JB64／JB74／JC74 通用，¥55,000 稅込；官網沒寫護罩本身尺寸。就是 little B. 用的那片罩：沖壓橫槽，中間一條平的橫肋可以貼字標或貼紙。草寫字標不附——APIO 寫明照片上的是「スズキ純正クラシックエンブレム（77860-84F51-ZG4）」，要向鈴木經銷店另購。TS3「湘南 Edition」交車頁寫「筆記体エンブレム付き」，沒寫字樣；鈴木 Sierra 原廠配件有一組仿舊款的「Jimny」字標（ハイボスカル，亮面仿鍍鉻，¥3,960），這裡畫成 Jimny 草寫鍍鉻字標，字樣與大小都是推定' },
  { id: 'damd_saudade', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_saudade/', label: 'saudade 水箱護罩（Koito 方形頭燈）', price: 129800, cur: 'JPY', brand: 'DAMD', kit: 'saudade', hideHeadlamps: true, uncertain: true,
    note: '法國車語彙：車身色厚框、黑色內區，把圓頭燈換成 Koito 鹵素方形雙燈，外側直立 LED 條、中央三排百葉、上緣三色菱形 DAMD 徽章。只有未塗裝素地。頭燈是否含在 ¥129,800 單件內官網沒寫清楚（套件內容把兩者分列）；頭燈清洗器不能照原廠用，附假蓋' },
  { id: 'stock', label: '原廠水箱護罩', price: 0, brand: 'SUZUKI', note: '5 道直立柵欄，中央 S 標' },
  // ---- 台灣有售
  { id: 'hbar_suzuki', photo: true, url: 'https://www.klc-div.com/heritage/product/grille/facegrillenostalgic/', refs: ['https://shopee.tw/product/47473069/5556354773'], label: 'Face Grille Nostalgic 水箱護罩', price: 93500, cur: 'JPY', brand: 'KLC Heritage', photo: true,
    note: 'ABS 烤漆 ¥93,500／ABS 素材 ¥60,500／FRP ¥55,000；方形大燈座、三道橫柵＋細網；車主實車配置。南國吉米有仿製品 NT$2,750' },
  { id: 'taishan_retro', photo: true, url: 'https://www.ruten.com.tw/item/show?22105865989825', label: '復古水箱護罩（黑／銀）', price: 17500, cur: 'TWD', brand: '泰山美研社（台灣）',
    note: 'KLC 風格樹脂復古罩' },
  { id: 'urnieta_1970', photo: true, url: 'https://www.heekis.com/products/urnieta-1970-jimny-jb74-jc74-grille', label: '1970 水箱護罩', price: 8400, cur: 'TWD', brand: 'URNIETA',
    note: '工程圖 UN-JIMNY-FB-026：1337×241，中央開口 592×126 細網＋URNIETA 立體字與 UNT 小徽。1.6kg。沖壓金屬網＋極簡框，1.6kg；Heekis 代理' },
  { id: 'mrk_angry', photo: true, url: 'https://www.mrk.com.tw/product_ii.html?ID=1670', label: '憤怒鳥款水箱護罩', price: 5500, cur: 'TWD', brand: 'MRK', part: 'JB089',
    note: 'JB74 專用，NT$5,500（安裝、運費、烤漆另計），對應原廠卡扣直上。材質官網沒寫（只寫「耐用材質」），尺寸也沒公布。消光黑一體式外框，上緣中間微微下凹；圓形大燈孔上方各有一道往中間斜下的「怒眉」，大燈外側一個小圓方向燈孔；中間七道圓底長槽像一排牙齒、越往外越短並往中間傾，後面襯銀色網。形狀照 MRK 商品照片畫' },
  { id: 'klc_sj', photo: true, url: 'https://www.klc-div.com/heritage/product/grille/facegrillesj.html', photo: true, label: 'Face Grille SJ 水箱護罩', price: 16000, cur: 'TWD', brand: 'KLC Heritage',
    note: 'FRP 素材 NT$16,000（藤井74）；日本 ABS 烤漆 ¥93,500。顯示為車身同色' },
  // ---- 日本
  { id: 'klc_ja', photo: true, url: 'https://www.klc-div.com/heritage/product/grille/facegrilleja/', label: 'Face Grille JA 水箱護罩', price: 93500, cur: 'JPY', brand: 'KLC Heritage',
    note: '大燈旁雙燈座、中央開放網；ABS 素材 ¥60,500／FRP ¥55,000' },
  { id: 'klc_nanaketsu', photo: true, url: 'https://www.klc-div.com/heritage/product/grille/facegrillnanaketsu/', label: 'Face Grille NANAKETSU 水箱護罩', price: 93500, cur: 'JPY', brand: 'KLC Heritage',
    note: '七個縱向長孔營造立體感（KLC 原文「縦穴7つ穴で立体感を出す」，並非圓角方孔）、圓形大燈以方形圓角框收邊；ABS 素材 ¥60,500／FRP 素材 ¥55,000（皆稅込）' },
  { id: 'klc_gd', url: 'https://www.klc-div.com/heritage/product/grille/facegrillgd/', label: '#GD 縱格水箱護罩（Grand Wagoneer 風）', price: 88000, cur: 'JPY', brand: 'KLC Heritage',
    note: '¥88,000 稅込，FRP 未塗裝，適用 JB64W／JB74W／JC74W。14 道細長縱格，圓頭燈被圓角方框框住，罩體很厚讓頭燈顯得內縮（官方：フェイスグリル自体にたっぷり厚みを持たせる）。KLC MATURE 示範車的配色：外框車身色、縱格與燈框槍灰' },
  { id: 'klc_forty', photo: true, url: 'https://www.klc-div.com/heritage/product/grille/facegrillforty/', label: 'Face Grille FORTY 水箱護罩', price: 93500, cur: 'JPY', brand: 'KLC Heritage',
    note: '大燈周圍肋條、中央網＋S 標' },
  { id: 'klc_forty_chrome', url: 'https://www.klc-div.com/heritage/product/grille/facegrillforty/', refs: ['https://heritage-jimny.com/?pid=177988196'], label: 'Face Grille FORTY 水箱護罩（燈圈鍍鉻）', price: 93500, cur: 'JPY', brand: 'KLC Heritage', uncertain: true,
    note: '同一片 FORTY（ABS 塗装済 ¥93,500），燈圈畫成鍍鉻。KLC 的塗裝選項內側只有白色或亮黑，沒有鍍鉻；鍍鉻燈圈是黑色鍍鉻西海岸這台的配色，要另外電鍍或貼鍍鉻膜，費用未知' },
  { id: 'apio_sj', photo: true, url: 'https://apio.jp/parts/3033-58g.html', label: 'SJ Grille 鋼板水箱護罩', price: 58300, cur: 'JPY', brand: 'APIO', part: '3033-58G',
    note: 'SJ30 直縫沖壓鋼板、槍灰、黑鋁網' },
  { id: 'apio_marker', photo: true, url: 'https://apio.jp/parts/3033-59.html', label: 'Marker Vintage Iron 水箱護罩', price: 75900, cur: 'JPY', brand: 'APIO', part: '3033-59B（半光黑）／3033-59L（淺古銅）',
    note: '鋼製橫柵＋4 顆 IPF 標誌燈，半光黑或淺古銅' },
  { id: 'showa_hex', photo: true, url: 'https://www.showa-garage.shop/shopdetail/000000000205/', photo: true, label: 'ABS 蜂巢水箱護罩', price: 16500, cur: 'JPY', brand: 'SHOWA GARAGE',
    part: 'E00500', note: 'ABS 素材黑，需自行烤漆（官網原文：ABS樹脂は対候性が良くないため紫外線による劣化が早いので塗装してお使いください）；同系列烤漆款分 E00501（槍灰）／E00502（シボブラック 皺紋黑）／E00504（ZJ3 藍黑珍珠），烤漆款稅込 ¥37,400，並非目錄原載的 ¥31,900；中央蜂巢網開口' },
  { id: 'outclass_g', photo: true, url: 'https://outclass.ocnk.net/product/1071', photo: true, label: 'Vintage G 水箱護罩', price: 57750, cur: 'JPY', brand: 'OUTCLASS',
    note: 'ASA 樹脂紋理黑；4 道橫柵＋中央直柱，後方細網。¥52,500 稅抜／¥57,750 稅込；廠徽另購、不附安裝說明書，缺貨時約需 3 週',
    part: 'JB6474-A-FG-ASA' },
  { id: 'taniguchi_washer', photo: true, url: 'https://www.ors-taniguchi.co.jp/parts-cat/jb_exterior_front/', label: 'FRP Washer 水箱護罩', price: 44000, cur: 'JPY', brand: 'TANIGUCHI',
    note: '原廠造型 FRP、中央網狀開口、洗燈噴嘴移入大燈' },
  { id: 'kpro_folksy', photo: true, url: 'http://www.k-products.shop/shopdetail/000000001706/', label: 'Folksy Style 橫鰭水箱護罩', price: 42493, cur: 'JPY', brand: 'K-PRODUCTS', uncertain: true,
    note: 'K-PRODUCTS 官方商店確認適合車種 JB64／JB74／JC74；FRP 材質、含網目件，品番 190604-1；白色只是膠衣底漆、不是完成色，廠方照片是烤黑的，官網標價 ¥42,493（稅別／稅込未標示），目前顯示 SOLD OUT。目錄原列 ¥30,000 是 4x4espoir 轉引的 JB64 舊稅別價，改用廠方頁面為準' },
  { id: 'prostaff_minig', photo: true, url: 'https://www.4x4espoir.com/jb64-frontgrill/', label: 'miniG 水箱護罩', price: 38000, cur: 'JPY', brand: 'Pro Staff', uncertain: true,
    note: '目前唯一可查到的資料來源（4x4espoir 轉載頁）寫適合車種是「新型ジムニーJB64W用」；另一篇同廠 miniG 保桿介紹（64swamp.com）也寫「こちらはJB64用」，兩份資料都指向 JB64 專用，沒有任何一份提到 JB74。プロスタッフ官網（4x4prostaff.com／www.4x4prostaff.com）本次查核仍連不上，無法直接核實。¥38,000（稅別）是 4x4espoir 轉引的舊價、非廠方現行價；JB74 適用性應標示為未確認，而不是目前隱含的「適用」' },
  { id: 'sixsense_explosion', photo: true, url: 'https://sixth-sense.shop-pro.jp/?pid=184181806', label: 'Explosion Classic 水箱護罩', price: 121000, cur: 'JPY', brand: 'Six Sense',
    note: 'シックスセンス 官方商店頁確認同時適用 JB64W 與 JB74W シエラ；材質 FRP 未塗裝需自行烤漆，開口部 240mm，品番 jimex108-nocl，價格 ¥110,000 稅抜（官網原文「110,000円(税抜)」，2026-09-26 再確認），稅込 ¥121,000。目錄原價 ¥80,000 是 4x4espoir 轉引的舊稅別價，已用廠方現價更新；可選 SUZUKI 標準標誌或原廠標誌裝法，另有前格柵蓋加 LED 百葉套件 ¥16,500 選配',
    part: 'jimex108-nocl' },
];


// Snorkel kits sold for the JB74; all mount on the right (1.5L airbox side).
export const SNORKELS = [
  { id: 'none', label: '不裝', price: 0 },
  // Corrected 2026-09-22 against every maker's own page (docs/jb74-snorkels.json).
  // Safari, ARB's own line, Rival, Dobinsons and APIO make NOTHING for a JB74 --
  // the part filed here under Safari is Ironman's. The airbox is on the right,
  // so every one of these runs the right A-pillar.
  { id: 'safari', photo: true, url: 'https://www.ironman4x4.com.au/products/4x4-snorkel-for-suzuki-jimny-jb74w',
    label: '圓管呼吸管 ISNORKEL070', price: 451, cur: 'AUD', brand: 'Ironman 4x4', part: 'ISNORKEL070',
    note: '前向六角網格 ram 進氣頭，束環固定可轉向。管徑與材質 Ironman 未公布（先前記的 Ø89／LLDPE／需切葉子板三項都沒有出處）。原本掛在 Safari 名下是錯的——Safari 從來沒做過 JB74' },
  { id: 'bravo', photo: true, url: 'https://bravosnorkel.com/en/suzuki/174-suzuki-jimny-jb74-2018-.html',
    label: 'SSJN 呼吸管', price: 18800, cur: 'TWD', brand: 'Bravo Snorkel', part: 'SSJN',
    note: '西班牙 Girona 製。頭部正圓 Ø89、前向彎頭用束環固定可 360° 轉向；要鑽孔也要切葉子板（原廠手冊印著 Drill／Cut，還要拆引擎蓋，附兩顆 M6 鉚帽）——「免鑽孔」是經銷商的說法不是廠方的。台灣 MRK／希琦 NT$18,800，歐洲 EUR 399' },
  { id: 'urnieta', url: 'https://urnieta.com/product/salado-snorkel-kit-for-jimny-jb74-jc74/', photo: true,
    label: 'SALADO 呼吸管', price: 14000, cur: 'TWD', brand: 'URNIETA', part: '0702021',
    refs: ['https://shopee.tw/product/7996649/29595052138'],
    note: '原廠圖 UN-JIMNY-FB-006：全長 1048×全高 675mm、2.3kg，JB64 不相容。這顆是整圈 360° 百葉的圓鼓頭；同一組套件附兩顆頭可互換（URNIETA 官網稱 Standard 與 Pre-Cleaner，沒有寫形狀）。取代原廠引擎蓋飾板。台灣蝦皮 NT$14,000' },
  { id: 'urnieta_ram', url: 'https://urnieta.com/product/salado-snorkel-kit-for-jimny-jb74-jc74/', photo: true,
    label: 'SALADO 呼吸管（前向進氣頭）', price: 14000, cur: 'TWD', brand: 'URNIETA', part: '0702021',
    refs: ['https://shopee.tw/product/7996649/29595052138'],
    note: '同一組 SALADO 套件換上方形頭：一顆往前伸的方盒，橫柵開口正對車頭，外側有 UNT 銘牌。進氣口離開車身側面、朝迎風面，灰塵與濺水的條件跟圓鼓頭不一樣。頭部形狀取自台灣賣家實照，URNIETA 官網未描述兩顆頭的外形' },
  { id: 'precleaner', photo: true, url: 'https://www.jimnybits.com/snorkel-air-pre-filter-pre-cleaner-head-for-3-snorkels-1.html',
    label: '旋風前濾頭（Ø180）', price: 20, cur: 'GBP', brand: 'jimnybits', part: 'PC35',
    note: 'Ø180 透明旋風碗，先把粉塵甩掉再進濾芯。配 3.5 吋（89mm）管口，不是 3 吋。PC35 是 jimnybits 的店內貨號，該商品頁沒有標廠牌——先前記成「Safari + PC35」是掛錯' },
  { id: 'sleek', photo: true, url: 'https://megajimny.com/products/supa-sleek-snorkel-system',
    label: 'Supa-Sleek V4 隱藏式', price: 649, cur: 'AUD', brand: 'Mega Jimny',
    note: '2 吋不鏽鋼管完全藏在黑色飾板裡看不到，進氣是 A 柱頂端朝「外」的百葉面板，不是朝後的進氣口。免鑽孔' },
  { id: 'tw_frp', label: 'FRP 呼吸管（巴西式樣）', price: 10000, cur: 'TWD', brand: '台灣店家自售', uncertain: true,
    note: '台灣多家店自售、沒有一家標示製造商：機油倉庫 NT$10,000（另加工資 3,500）、南國吉米 10,500、台中烏日 12,000–18,000。葉子板開孔約 83–110mm、A 柱另鑽四個 8mm 固定孔' },
  { id: 'tw_nodrill', label: '免鑽孔呼吸管', price: 8350, cur: 'TWD', brand: '台灣店家自售', uncertain: true,
    note: 'JIMNY74 風格選物；規格未公布' },
];

export const MIRRORS = [
  { id: 'stock', label: '原廠電動折疊後照鏡', price: 0, brand: 'SUZUKI' },
  { id: 'urnieta', url: 'https://urnieta.com/product/salado-side-mirror-kit-for-jimny-jb74-jc74/', photo: true, label: 'SALADO 後照鏡組', price: 17800, cur: 'TWD', brand: 'URNIETA', part: '0702022',
    refs: ['https://shopee.tw/product/7996649/53462197780'], note: '台灣蝦皮 GOAT Wild explorer NT$17,800。URNIETA 為中國東莞斯塔克工業品牌（中文名歐尼塔），非日系；只支援 JB74／JC74，JB64 官方列為不相容。官方工程圖 UN-JIMNY-FB-014：總高 411mm、總寬 237mm。圓角矩形鏡座 187×231，單支圓管由門框上前角的關節繞出、沿鏡座內側往下再回到下關節，鏡座以四螺栓夾塊固定在管上，外緣有 URNIETA 銘牌' },
  { id: 'damd', photo: true, url: 'http://www.damd.co.jp/products/suzuki/jimny_sierra_little-g', refs: ['https://easycars.jp/product/damd-truck-side-mirror-for-jimny-jb64-jb74/'], label: 'Truck Mirror 卡車式後照鏡', price: 75900, cur: 'JPY', brand: 'DAMD', photo: true,
    note: 'DAMD 日本官網建議售價：消光黑 ¥69,000 稅抜／¥75,900 稅込、鍍鉻 ¥74,000 稅抜／¥81,400 稅込；U 型管臂＋直式卡車鏡殼，含加熱但喪失電動收折與電動角度調整（官網原文：自動收折、收折開關、角度調整開關均無法使用）。僅適用 JB64／JB74，不可裝 JC74（NOMADE）' },
  { id: 'suzuki_chrome', cover: true, url: 'https://www.suzuki.co.jp/accessory_car/sierra/sierra.pdf', label: 'ドアミラーカバー（鍍鉻）', price: 24970, cur: 'JPY', brand: 'SUZUKI 原廠配件', part: '99122-77R00（JL，無方向燈鏡）／99122-77R11（JC，LED 側方向燈鏡）', uncertain: true,
    note: 'Sierra 原廠配件型錄（2025-07）：クロームメッキ左右一組，拆掉原廠外殼換上（標準装備品を取り外して装着します），所以形狀就是原廠鏡殼。JC 用 99122-77R11 ¥24,970（本體 ¥20,570＋參考工資 ¥4,400）；JL 用 99122-77R00 的價格在 PDF 裡欄位錯亂，看起來同價，未確認。材質型錄沒寫。JB64 用同樣兩個料號' },
];

// Roof racks, awnings, side steps and ladders are modelled parts named
// roofRack_<id>, awning_<id>_<left|right>, sideStep_<id>, ladder_<id>.
export const ROOF_RACKS = [
  { id: 'urnieta_salado', url: 'https://urnieta.com/product/salado-roof-rack-for-jimny-jb74-jc74/', label: 'SALADO 全頂行李架', price: 30900, cur: 'TWD', brand: 'URNIETA', part: '0702024',
    note: '1890×1366mm 平板式：7 根橫向 50mm 滑槽條（中段 220mm 間距）、中央縱向脊樑、外圍矮圓管框、前方鋁沖壓導風板。原廠雨槽每側一根長軌、每側 3 個腳座。尺寸取自原廠圖 UN-JIMNY-FB-012；離車頂高度原廠未公布' },
  { id: 'urnieta_salado_half', url: 'https://urnieta.com/product/salado-roof-rack-for-jimny-jb74-jc74/', label: 'SALADO 半頂行李架', price: 25200, cur: 'TWD', brand: 'URNIETA', part: '0702034', uncertain: true,
    note: '同款的短版，每側 2 個腳座。原廠沒有公布半頂的長度，模型長度為依照片推估' },
  { id: 'damd_solid', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_aventura/', label: 'ソリッドラック 車頂架（官網標示販売終了）', price: 217800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_aventura', uncertain: true,
    note: '日本製鋼製車頂架：黑色鋼管外框前後圓弧收邊、兩側鋼板側欄各四個開孔方盒支撐、前後兩端花紋鋼板、中段平板，積載約 20–30kg。¥217,800 稅込，但官網價格後面標「販売終了」，AVENTURA 套件內容卻仍列著它——單品應已停售，下單前要向 DAMD 確認。長 1503、離車頂 155mm 是照官方側面照片量的' },
  { id: 'wood', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_theroots/', label: 'trip basket 復古車頂架（半長）', price: 61600, cur: 'JPY', brand: 'DAMD', part: 'TB-HR1',
    refs: ['https://www.sunvigor.com.hk/onlineshop/tw/damd/2605-suzukijimny-jimnysierre-damd-roofrack-tripbacket-djbtbdrr1.html'],
    note: '1350×600×160mm、13.5kg。黑色鋼製鐵線籃，木料是紐西蘭輻射松乙醯化處理的高耐久「Accoya」，做成包覆前緣的弧形擋板與兩側木塊，不是木地板。裝在車頂前段的橫桿上。日本仍在售 ¥56,000 稅抜／¥61,600 稅込；＋TERZO 基座組 TB-HRKJB ¥74,000 稅抜（¥81,400 稅込），內含 JB64／JB74 專用 PIAA TERZO 腳座 4 個與主橫桿 2 根，另加約 5kg。' },
  { id: 'wood_full', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_theroots/', label: 'trip basket 復古車頂架（全長）', price: 19800, cur: 'TWD', brand: 'DAMD', part: 'TB-RR1',
    refs: ['https://www.damd.co.jp/products/suzuki/jimny_theroots/'],
    note: '1350×1000×160mm、16kg，與半長款同款式。日本 ¥59,000／¥64,900 稅込；＋TERZO 基座組 TB-RRKJB ¥77,000 稅抜（¥84,700 稅込），內含 JB64／JB74 專用 PIAA TERZO 腳座 4 個與主橫桿 2 根，另加約 5kg。台灣蝦皮「藤井74」NT$19,800' },
  { id: 'none', label: '不裝', price: 0 },
  // ---- 台灣有售
  { id: 'arb', photo: true, url: 'https://www.ruten.com.tw/item/show?22438729095708', photo: true, label: 'BASE Rack 車頂架 1545×1285', price: 45000, cur: 'TWD', brand: 'ARB', part: '1770020 + 17900020',
    note: '鋁擠型平台、燕尾槽側軌、4 支雨槽腳；平台單品 NT$15,000（MRK）；車主實車配置' },
  { id: 'yakima', photo: true, url: 'https://www.yakima.com.tw/products/locknload-platform', label: 'LockNLoad 平台車頂架 1520×1370', price: 23000, cur: 'TWD', brand: 'Yakima', part: '8005045',
    note: '橫向板條 T 槽、4 支雨槽腳（110／150／210mm）；Yakima 台灣售價' },
  { id: 'pioneer', photo: true, url: 'https://www.ruten.com.tw/item/show?22441909928235', label: 'Pioneer LT 平台車頂架', price: 58300, cur: 'TWD', brand: 'Rhino-Rack',
    part: 'ROLS1', note: '1453×1339、5 道縱向板條、Backbone 橫樑固定；黑四驅售價' },
  { id: 'ipf', photo: true, url: 'https://www.ipf.co.jp/ipfEc/products/detail/159', label: 'EXP Roof Rack type-A 車頂架', price: 32000, cur: 'TWD', brand: 'IPF', part: 'EXR-01',
    note: '1400×1250×38.8mm（不含腳座高度）、12.5kg，防鏽鋁合金。日本官網 ¥85,800 稅込只是貨架本體，腳座必須另購：ドリップモール用レッグ 低腳 EXR-01L2 ¥50,600、高腳 EXR-02L2 ¥30,800，裝車日本總價實為 ¥116,600〜¥136,400；IPF 官網也沒有公布耐荷重。以下 NT$32,000 為 MRK 台灣售價。' },
  { id: 'tw_generic', photo: true, url: 'https://tw.bid.yahoo.com/item/100868689053', label: '鋁合金平頂車頂架', price: 13000, cur: 'TWD', brand: '機油倉庫（台灣）',
    note: '1600×1260、6 支雨槽腳、前導流板；安裝 +NT$1,000' },
  // ---- 進口
  { id: 'platform', photo: true, url: 'https://www.dometic.com/en-au/product/suzuki-jimny-2018-current-slii', photo: true, label: 'Slimline II 全長車頂架', price: 1579, cur: 'AUD', brand: 'Front Runner', part: 'KRSJ003T',
    note: '1560×1345、6 支雨槽腳、前導流板，31kg' },
  { id: 'fr34', photo: true, url: 'https://www.dometic.com/en-au/product/suzuki-jimny-2018-curr-slii-3-4-roof-rack-kit', label: 'Slimline II 3/4 車頂架', price: 1451, cur: 'AUD', brand: 'Front Runner', part: 'KRSJ006T',
    note: '1156×1345、4 支腳' },
  { id: 'jaos', photo: true, url: 'https://www.jaos.co.jp/product/B411611NS/3848', label: 'Flat Rack type-B 車頂架', price: 140800, cur: 'JPY', brand: 'JAOS', part: 'B411611NS', uncertain: true,
    note: '1400×1250，鋁框厚 32mm、含四角護蓋 39mm，6 道 T 槽底桿、前導流板，16.4kg，¥140,800 稅込。**適用有疑義**：JAOS 自己的商品頁把適合車種寫成五門 JC74，車種檢索頁卻把它掛在 JB74 下，兩頁互相矛盾，下訂前務必跟 JAOS 確認。貨架自身荷重 50kg，但車頂動態載重仍是 30kg，扣掉 16.4kg 自重行駛中只剩約 13kg' },
  { id: 'apio', photo: true, url: 'https://apio.jp/parts/3630-50.html', label: 'Mighty Smart Rack 車頂架', price: 231000, cur: 'JPY', brand: 'APIO', part: '3630-50',
    note: '1420×1270、前軌前傾兼導流、船用鋁粉體配不鏽鋼零件。本體自重 21.3kg，APIO 官網明寫「積載可能重量：記載無し」不公布耐荷重；在 JB74 屋頂 30kg 動態載重上限下，扣掉自重後行駛中可用載重不到 9kg。' },
  { id: 'showa_foot', photo: true, url: 'https://www.showa-garage.shop/shopdetail/000000001017/I59728/', label: 'A-x Roof Rack 1512 車頂架', price: 92400, cur: 'JPY', brand: 'SHOWA GARAGE',
    part: 'E20080', note: '收納 1500×1250×40mm，展開 1520×1270×60mm，可在屋頂上直接收折、高度可調約 3cm。含腳座重 27kg，官方耐荷重 50kg，但已吃掉 JB74 屋頂 30kg 動態載重的九成，行駛中幾乎無法再加載，適合靜止露營時使用。固定支架 E20034 另購。' },
  { id: 'basket', photo: true, url: 'https://www.showa-garage.shop/shopdetail/000000000111/I59728/', label: 'A-x Half Rack M 籃式車頂架', price: 68200, cur: 'JPY', brand: 'SHOWA GARAGE',
    part: 'E20008', note: '官方正式名稱是「ハーフサイズ M型」（半頂），不是 Full size——SHOWA GARAGE 另有一款「フルサイズ M型」（E20009）¥57,200 稅込是不同商品，容易搞混。1400×1250mm、折疊高度約 130mm，布料配框架的半硬式構造（不是剛性金屬貨架），可分成兩半、單邊約 7kg，總重 11.4kg，官方耐荷重 30kg，恰好等於 JB74 屋頂動態上限，扣掉自重後行駛中可載約 18kg。' },
];

/**
 * The camping area. Roof tents carry their OPEN size, which is what camp.js
 * draws; `shape` picks the mechanism. JB74's roof is rated 30 kg including
 * the rack (Suzuki's own catalogue), and every roof tent on the market is
 * heavier than that -- docs/jb74-camping.json -- so validate() says so.
 */
export const TENTS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'kamado_j3', shape: 'wedge', noRack: true, weight: 48, open: { L: 2100, W: 1120, H: 970 },
    url: 'https://www.k-m-d.co.jp/news/detail.html?p=4280', label: 'Canotier J3 Jimny 專用硬頂帳', price: 880000, cur: 'JPY', brand: 'カマド（Kamado）',
    note: '唯一 Jimny 專用的車頂帳，照 3D 掃描直接鎖在車頂，不需要車頂架，裝著可以過日本車檢。¥880,000 稅込含安裝（只在御殿場店施工），48kg。展開 2100×1120×970mm，氣壓棒撐開、後段再往後延伸讓 180cm 的人躺平。開啟方向與延伸量官網沒寫，這裡照前端鉸鏈畫' , uncertain: true },
  { id: 'fr_tent031', shape: 'foldout', weight: 43, open: { L: 2400, W: 1300 },
    url: 'https://www.dometic.com/', label: 'Roof Top Tent 對折外翻帳', price: 1199, cur: 'USD', brand: 'Front Runner', part: 'TENT031',
    note: 'US$1,199，43kg，收合高 330mm，展開 2400×1300mm，往車側翻出、鋁梯兼支撐，2 人以上。裝在車頂架上；同廠 Slimline II 有 JB74 專用品番。翻出方向與展開高度官網未公布', uncertain: true },
  { id: 'autohome_columbus', shape: 'popup', weight: 44, open: { L: 2100, W: 1300 },
    url: 'https://www.autohome-official.com/en/products/comparing-all-roof-top-tents/', label: 'Columbus Small 升降硬殼帳', price: null, cur: 'EUR', brand: 'Autohome', part: 'CVC/01',
    note: '44kg，2100×1300mm，兩支氣壓彈簧加搖把讓頂殼垂直升起，完全不懸出車外；兩側各一門、前端一門。官網未公布價格與收合／展開高度', uncertain: true },
];

/** Tents and tarps that are not on the roof: off the tailgate or the side. */
export const CAMP_EXTRAS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'lxmode_jim817', shape: 'tailgate', url: 'https://www.custom-wagon.com/c/557/jim817', label: 'カーリビング 車尾彈開帳', price: 60500, cur: 'JPY', brand: 'LX-MODE', part: 'jim817',
    note: '¥60,500 稅込，JB74W 專用。立在車尾地面、跟車身連在一起，2000×2000mm、高 2250（中央 2450）mm，收納 Φ900×100mm、約 8kg。怎麼接 JB74 的側開尾門官網沒寫' },
  { id: 'suzuki_tarp', shape: 'tarp', url: 'https://www.suzuki.co.jp/accessory_car/jimny_nomade_jimny_sierra/jimny_nomade_jimny_sierra.pdf', label: '原廠 70 カータープ 車側天幕', price: 45100, cur: 'JPY', brand: 'SUZUKI（ogawa 製）', part: 'ACAZ（99243-77R02）',
    note: '¥45,100 稅込，約 250×250cm、高 220cm，2.5kg。一邊用兩個吸盤掛勾吸在車頂邊，另一邊兩支鋁桿撐起；不需要車頂架，使用時要熄火' },
];

/**
 * ARB BASE Rack accessories -- they clamp onto the dovetail of the `arb`
 * rack only, so the page offers them only while that rack is fitted.
 * `key` is the state flag, `part` the model node (arbAcc_<part>). ARB
 * publish prices but next to no sizes or weights
 * (docs/jb74-arb-rack-accessories.json, rechecked 2026-09-28 against the
 * fitting instructions); what they HOLD is not included -- cans, bottle,
 * boards, jack and shovel are extra. `group: 'rail'` entries are
 * alternatives: ARB sell no front 3/4 + trade rail combination, the full
 * surround is its own part (1780080).
 */
export const ARB_RACK_ACC = [
  { key: 'arbDeflector', part: 'deflector', label: '導風板 Universal 51 吋', price: 134, cur: 'USD', brand: 'ARB', pn: '17900090',
    url: 'https://store.arbusa.com/base-rack-universal-deflector-51-in-17900090/',
    note: '2.0mm 壓型鋁板粉體烤漆，吊在貨架前緣下方，用 M8 螺柱板鎖在前樑底下，減風切聲。ARB 安裝說明書把 17900090 列給 1770020 這個尺寸；舊資料寫的 17950020 是 Jeep JL 專用款，這裡已改正。美國官網未稅價' },
  { key: 'arbRailFront', part: 'railFront', group: 'rail', label: '前 3/4 護欄', price: 376, cur: 'USD', brand: 'ARB', pn: '1780040',
    url: 'https://store.arbusa.com/base-rack-front-3-4-rail-61-x-51in-1780040/', uncertain: true,
    note: '前橫欄加兩側到車長四分之三、後段開口（ARB：為後翻式車頂帳設計），鑄鋁轉角與立柱夾座卡在貨架外框燕尾槽、Torx M6／M8 鎖付。ARB 沒有公布護欄高度與斷面，照官方照片畫約離貨架面 130mm。美國官網未稅價' },
  { key: 'arbRailSide', part: 'railSide', group: 'rail', label: '側護欄（左右一對）', price: 584, cur: 'USD', brand: 'ARB', pn: '1780110 ×2',
    url: 'https://store.arbusa.com/base-rack-trade-rail-61in-long-1780110/', uncertain: true,
    note: 'Trade Rail 61 吋，一支 US$292，這裡算左右兩支；每支三個鑄鋁立柱夾座、兩端端蓋。ARB 沒有前 3/4 加側護欄的組合，要整圈就選全圍護欄。高度照片估' },
  { key: 'arbRailFull', part: 'railFull', group: 'rail', label: '全圍護欄 61×51 吋', price: 465, cur: 'USD', brand: 'ARB', pn: '1780080',
    url: 'https://store.arbusa.com/base-rack-full-rail-61-x-51in-1780080/', uncertain: true,
    note: '整圈護欄，鑄鋁四角、前後各兩支、左右各三支立柱夾座。這是 1545×1285 貨架用的全圍款（1780180 是 49 吋貨架用的）。有護欄時，車頂燈改鎖在護欄前橫欄上。高度照片估。美國官網未稅價' },
  { key: 'arbLights', part: 'lights', label: '貨架燈組（燈條＋三顆輔助燈）', price: 1349.75, cur: 'USD', brand: 'ARB', pn: '1780500K2',
    url: 'https://store.arbusa.com/base-rack-lighting-kit-1780500k2/',
    note: 'Slimline 燈條 954×34×67mm、3.07kg、130W（ARB 說明書），用套件附的支架夾在前樑燕尾槽、立在貨架前面；三顆 71×56mm 輔助燈夾在後樑當工作燈。含兩組線束與開關。美國官網未稅價' },
  { key: 'arbJerry', part: 'jerry', label: '雙油桶架（橫放）', price: 208, cur: 'AUD', brand: 'ARB', pn: '1780350',
    url: 'https://www.arb.com.au/product/1780350-arb-base-rack-double-horizontal-jerry-can-mount', uncertain: true,
    note: '粉體烤漆鋼架夾在兩根橫樑上（35mm 鋁夾座、鍛造吊環螺帽），兩個 20L 油桶一前一後平躺，棘輪帶從架子兩端的吊環跨過兩桶。架子外形尺寸官網未公布，油桶照 NATO 20L 常見尺寸 470×345×165mm 畫。價格只含架子（澳洲官網含 GST）；兩桶加滿約 40kg，已經超過 JB74 車頂 30kg 動態載重' },
  { key: 'arbGas', part: 'gas', label: '瓦斯桶架', price: 126, cur: 'AUD', brand: 'ARB', pn: '1780250',
    url: 'https://www.arb.com.au/product/1780250-arb-base-rack-gas-bottle-holder', uncertain: true,
    note: '可調不鏽鋼托架兩座、凸輪扣綁帶、35mm 夾座加鍛造吊環；ARB：最大 9kg 瓦斯桶、總重 20kg。桶子橫躺在貨架前段，直徑約 310mm 是 9kg 桶的常見尺寸、不是 ARB 數字。價格只含架子，桶另購' },
  { key: 'arbBoards', part: 'boards', label: '脫困板固定座＋兩片 MAXTRAX', price: 54, cur: 'USD', brand: 'ARB', pn: '1780310',
    url: 'https://store.arbusa.com/base-rack-recovery-board-mounting-bracket-1780310/',
    note: '四個 40mm 夾座加托板夾在橫樑上，脫困板用 MAXTRAX 自家的長版固定插銷（40mm 螺牙、轉 90 度鎖住、可穿掛鎖）壓住。MAXTRAX MKII 官方尺寸 1150×330×85mm、每片 3.4kg、兩片疊起來 95mm。價格只含固定座，MAXTRAX 與插銷另購' },
  { key: 'arbJack', part: 'jack', label: 'Hi-Lift 千斤頂架（高階款）', price: 155, cur: 'USD', brand: 'ARB', pn: '1780280',
    url: 'https://store.arbusa.com/base-rack-farm-jack-holder-1780280/',
    note: '搖籃加夾扣兩點固定、可上掛鎖，兩個 100mm 夾座。畫的是 Hi-Lift HL-485 48 吋（原廠：全長 1289、寬 127、深 245mm、12.77kg），前後向躺在貨架右側，手把收在桿子旁。價格只含架子，千斤頂另購' },
  { key: 'arbShovel', part: 'shovel', label: '鏟子架', price: 104, cur: 'AUD', brand: 'ARB', pn: '1780270',
    url: 'https://www.arb.com.au/product/1780270-arb-base-rack-shovel-holder',
    note: '兩支支架各用 60mm 夾座卡在貨架右側外緣燕尾槽，快開式握把夾（適用把手直徑 32–42mm）加不可拆的固定旋鈕、可上長鎖頭。鏟子掛在貨架外側、鏟面朝前。ARB 沒有指定鏟子，畫的是一般 D 型握把長柄鏟、另購。裝這個時，另一個「車頂架鏟子」選項不畫' },
];

export const AWNINGS = [
  { id: 'none', label: '不裝', price: 0 },
  // ---- 台灣有售
  { id: 'yakima_s', bagL: 2100, open: { kind: 'rect', along: 2000, projection: 2500 }, photo: true, url: 'https://www.yakima.com.tw/products/slimshady-%E8%BB%8A%E9%82%8A%E5%B8%B3-2-2-5m', photo: true, label: 'OverNOut S 車邊帳 2×2.5m', price: 8500, cur: 'TWD', brand: 'Yakima', part: 'KT8007508',
    note: '軟袋 2100 長、10kg（Yakima 台灣官網）；Yakima 台灣售價' },
  { id: 'yakima_l', bagL: 2600, open: { kind: 'rect', along: 2500, projection: 2500 }, photo: true, url: 'https://www.yakima.com.tw/products/overnout_l', label: 'OverNOut L 車邊帳 2.5×2.5m', price: 11700, cur: 'TWD', brand: 'Yakima', part: 'KTHB0019',
    note: '台灣官網寫 300×250cm、12kg，美國同條碼 8007446 是 8×8 ft、15.4kg，兩邊對不上；這裡照品名 2.5×2.5m 畫' },
  { id: 'yakima_270', bagL: 2286, open: { kind: 'fan', radius: 2286, arms: 4, freeArms: 2 }, photo: true, url: 'https://www.yakima.com.tw/products/overnout-270', label: 'OverNOut 270 蝙蝠車邊帳', price: 21600, cur: 'TWD', brand: 'Yakima', part: '8007462/3',
    note: '2286×216×254、後端旋轉、四支臂自撐；左＝駕駛側' },
  { id: 'yakima_270s', bagL: 1850, open: { kind: 'fan', radius: 1850, arms: 4, freeArms: 1 }, photo: true, url: 'https://www.yakima.com.tw/products/overnout-270', photo: true, label: 'OverNOut 270 蝙蝠車邊帳 1.8m', price: 19800, cur: 'TWD', brand: 'Yakima', part: '8007538/9',
    note: '短版 270°，收納約 1850×216×254；架在車頂架側緣上方（車主實車配置）' },
  { id: 'yakima_180', bagL: 2260, open: { kind: 'fan', radius: 1905, sweep: 180, arms: 3, freeArms: 1 }, photo: true, url: 'https://www.yakima.com.tw/products/overnout-180-%E5%81%B4%E9%82%8A%E5%B8%B3', label: 'OverNOut 180 車邊帳', price: 21600, cur: 'TWD', brand: 'Yakima', part: '8007516',
    note: '2260×229×178、8.7m²、三支臂' },
  { id: 'rhino_compact', bagL: 2000, open: { kind: 'fan', radius: 1900, arms: 4 }, photo: true, url: 'https://www.ruten.com.tw/item/22445161058255/', label: 'Batwing Compact 蝙蝠車邊帳', price: 33920, cur: 'TWD', brand: 'Rhino-Rack',
    part: '33120/33121', note: '2000 長、6m²、18kg；黑四驅售價' },
  { id: 'rhino_270', bagL: 2500, open: { kind: 'fan', radius: 2500, arms: 4 }, url: 'https://www.rhinorack.com/en-au/products/sport-awnings/awnings/awnings/batwing-compact-awning-left-_33120', label: 'Batwing 270 蝙蝠車邊帳', price: 38160, cur: 'TWD', brand: 'Rhino-Rack', part: '33118/33119',
    note: '2500 長、10m²、20.5kg' },
  { id: 'allblack_270', bagL: 2100, open: { kind: 'fan', radius: 2100, arms: 4, freeArms: 2 }, photo: true, url: 'https://www.ruten.com.tw/item/22245661385396/', label: 'ALL BLACK 270° 車邊帳 gen3', price: 18000, cur: 'TWD', brand: '黑四驅（台灣）',
    note: '2m／2.5m 兩種、左開／右開；含 LED 燈條' },
  // ---- 進口
  { id: 'arb_touring_2', bagL: 2200, open: { kind: 'rect', along: 2000, projection: 2500 }, photo: true, url: 'https://www.arb.com.au/product/814406-arb-touring-awning-2000mm-x-2500mm-with-led-light', label: 'Touring 車邊帳 2000×2500 LED', price: 419, cur: 'AUD', brand: 'ARB', part: '814406',
    note: 'PVC 軟袋約 2200 長，12.9kg；澳洲官網 AUD 419（含 GST）' },
  { id: 'arb_touring_25', bagL: 2700, open: { kind: 'rect', along: 2500, projection: 2500 }, room: true, photo: true, url: 'https://www.arb.com.au/product/814407-arb-touring-awning-with-light-2500mm-x-2500mm', label: 'Touring 車邊帳 2500×2500 LED', price: 440, cur: 'AUD', brand: 'ARB', part: '814407',
    note: '約 2700 長，14.3kg' },
  { id: 'arb_alu', bagL: 2650, open: { kind: 'rect', along: 2500, projection: 2500 }, room: true, photo: true, url: 'https://www.arb.com.au/product/814412-arb-awning-2500mm-x-2500mm-black-aluminium-housing-and-light', label: '鋁殼車邊帳 2500×2500', price: 734, cur: 'AUD', brand: 'ARB', part: '814412',
    note: '矩形鋁殼、外側掀蓋，17.8kg' },
  { id: 'darche_270', bagL: 2550, open: { kind: 'fan', radius: 2550, arms: 6 }, photo: true, url: 'https://darche.com.au/products/eclipse-270-g2-right-us-eu-p', label: 'Eclipse 270 G2 車邊帳', price: 1499, cur: 'AUD', brand: 'Darche', part: 'T050801743',
    note: '11.5m²、1000D PVC，後端鋁合金旋軸' },
  { id: 'darche_slim', bagL: 2550, open: { kind: 'rect', along: 2500, projection: 2500 }, photo: true, url: 'https://darche.com.au/products/eclipse-slimline-2-5m-x-2-5m', label: 'Eclipse Slimline 車邊帳', price: 579, cur: 'AUD', brand: 'Darche', part: 'T050801793',
    note: '820D 軟袋，14kg' },
  { id: 'ikamper', bagL: 2630, open: { kind: 'fan', radius: 2630, arms: 4, freeArms: 4 }, photo: true, url: 'https://ikamper.com/products/exoshell-270-awning', label: 'ExoShell 270 硬殼車邊帳', price: 1950, cur: 'USD', brand: 'iKamper', part: 'MB011-005（駕駛側）／MB011-002（副駕側）',
    note: '2630×180×184 硬殼鋁盒、11.2m²，30kg；展開沿車 4990、外伸 3900' },
];

export const SIDE_STEPS = [
  // ---- DAMD（damd.co.jp）
  { id: 'damd_little_g', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g/', label: 'little G. 鋁踏板（爆龜組附）', price: 0, cur: 'JPY', brand: 'DAMD', kit: 'little_g_std',
    note: '黑色鋁擠型、頂面三道亮條＋亮面外緣，從前輪弧接到後輪弧（約 1270mm，照官方照片估）。不單賣：是「オーバーフェンダー＆アルミステップ」type-1（¥140,800）與 type-2（¥162,800）的一部分，價格算在爆龜組裡；支架要在車身下方鑽孔' },
  // ---- URNIETA 全車套件專用（urnieta.com，工程圖有標註尺寸）
  { id: 'urnieta_salado', url: 'https://urnieta.com/product/salado-side-bar-kit-for-jimny-jb74-jc74/', label: 'SALADO 管狀側踏', price: null, cur: 'TWD', brand: 'URNIETA', kit: 'urnieta_salado', uncertain: true,
    note: '工程圖 UN-JIMNY-FB-009：三門 1270×460（五門 1687×460）。外側圓管兩端內收，內側鎖一片開槽踏板，每側兩支支架進大樑＋前方一支斜撐，中央一組夾具踏墊。27kg／組。官網不標價' },
  { id: 'urnieta_1970', url: 'https://urnieta.com/product/1970-side-skirt-kit-for-jimny-jb74-jc74/', label: '1970 側裙飾板', price: null, cur: 'TWD', brand: 'URNIETA', kit: 'urnieta_1970', uncertain: true,
    note: '工程圖 UN-JIMNY-FB-030：1433×176。一體成型側裙，沿長度一道凸起飾條、上緣三顆螺栓、兩端向上收尾接輪拱。4.6kg／組。官網不標價' },
  { id: 'damd_l5d', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_littledelta/', label: 'little 5.／Δ 側裙飾板（ｻｲﾄﾞｼﾙｶﾞｰﾆｯｼｭ）', price: null, cur: 'JPY', brand: 'DAMD', kit: 'little_delta', uncertain: true,
    note: '只出現在 little 5.／Δ 全車套件的內容清單裡，官網沒有單品價，也不在（隱藏的）輪框＋輪胎套裝清單中。ABS，車身色平面板蓋住原廠黑色門檻，從前鼓包尾端到後鼓包前緣。尺寸照官方側面照估：長約 1290、高約 65、比車門外板凸約 20–30' },
  { id: 'none', label: '不裝', price: 0 },
  // ---- 台灣
  { id: 'wlm', photo: true, url: 'https://www.mrk.com.tw/product_ii.html?ID=1905', photo: true, label: 'WLM001 側踏', price: 13800, cur: 'TWD', brand: 'WLM 4x4',
    note: 'Ø50 圓管貼門檻、兩片踏板、鍍鋅粉體黑；用原廠孔位免鑽孔' },
  { id: 'jst', photo: true, url: 'https://www.mrk.com.tw/product_ii.html?ID=1580', label: 'JB74001 側踏', price: 9000, cur: 'TWD', brand: 'JST 吉米工坊', photo: true,
    note: '直管＋兩片平踏板，兩端上翹；加強型／特仕版至 NT$11,700；車主實車配置' },
  { id: 'tjm', photo: true, url: 'https://www.mrk.com.tw/product_ii.html?ID=915', photo: true, label: '735STRSA57X 岩石滑桿', price: 18000, cur: 'TWD', brand: 'TJM',
    part: '735STRSA57X', note: 'Ø51 大樑固定、焊接踏板；支架另購 NT$3,000' },
  // ---- 日本
  { id: 'outclass', photo: true, url: 'https://outclass.ocnk.net/product/1124', label: '管架式側踏', price: 88000, cur: 'JPY', brand: 'OUTCLASS',
    note: 'OUTCLASS 官網 [220サイズ] 版 ¥80,000 稅別／¥88,000 稅込，鋼製左右一組，可選粉體消光黑或 Raptor 黑塗裝，對應車檢；重量欄官網直接寫「未計測」，品番與管徑皆未公布，說明書不附。同廠另售電動款「オートサイドステップ [240サイズ]」¥119,000 稅別／¥130,900 稅込，購買時勿混淆兩者。' },
  { id: 'apio_guard', photo: true, url: 'https://apio.jp/parts/3102-69.html', label: 'H.D 硬鋁門檻護甲', price: 132000, cur: 'JPY', brand: 'APIO', part: '3102-69',
    note: 'APIO 官網確認商品名為「JB74 H.Dサイドシルガード」，適合車種明寫ジムニーシエラ JB74，¥132,000 稅込、品番 3102-69。本體為 3.0mm 厚 A5052 杜拉鋁單層板、取付支架為鋼製，左右一組約 8kg（含包裝約 10kg）；1,350×185×210mm 是外箱尺寸，官網未公布本體實際寸法。官網明寫「ナローフェンダー装着車両用」且「純正オーバーフェンダー併用不可」——原廠標準寬體輪拱的 JB74 無法直接裝這件，必須先換裝窄型葉子板。' },
  { id: 'taniguchi_bar', photo: true, url: 'https://www.ors-taniguchi.co.jp/parts-cat/jb_exterior_side/', label: '長管側踏（高度可調）', price: 104500, cur: 'JPY', brand: 'TANIGUCHI',
    note: '報價原為單邊右用價，改標左右合計：右用 ¥53,900、左用 ¥50,600，皆稅込，左右都裝合計 ¥104,500 稅込（2025 年 10 月起表面改為シボ加工）。此為 JB74 シエラ 專用鋼管桿式側踏，管徑 42.7mm、壁厚 2.3mm、全長 1200mm、黑色粉體烤漆，踏面即為鋼管本體、並無另外的網狀踏板，高度可兩段調整（側裙下緣下方約 9cm／約 6cm），不超出原廠輪拱、車檢合格。' },
  { id: 'taniguchi_short', photo: true, url: 'https://www.ors-taniguchi.co.jp/parts-cat/jb_exterior_side/', label: '兩段可調短側踏', price: 77000, cur: 'JPY', brand: 'TANIGUCHI',
    note: '報價原為單邊右用價，改標左右合計：鋼製右 ¥41,250／左 ¥35,750，左右合計 ¥77,000 稅込；不鏽鋼版右 ¥59,400／左 ¥56,100，左右合計 ¥115,500 稅込（不鏽鋼版 2026.5.1 調價）。JB74 シエラ 專用、免鑽孔螺栓固定，踏面高度可兩段調整（側裙下緣下方約 9cm／約 6cm），不超出原廠輪拱、車檢合格。550×145 網狀踏板這組尺寸官網只標在 JB64 鋼製版頁面，JB74 頁面未公布踏板尺寸與管徑，全車系不公開品番。' },
  { id: 'showa', photo: true, url: 'https://store.shopping.yahoo.co.jp/showa-garage/e00173.html', label: '長版側踏＋側裙飾板套組（JB74）', price: 127050, cur: 'JPY', brand: 'SHOWA GARAGE',
    part: 'E00173 + E00207', note: '官網查無「Type2」這個型號名，E00173 正式商品名是「サイドステップ ロングタイプ 左右セット」，¥69,300 稅込、左右一組，鋼製皺紋黑烤漆，JB64／JB74 一至五型皆適用。JB74 因原廠側裙擋板無法直接拆除，官網明寫必須另購 E00207「AESサイドガーニッシュ JB74用」（左右一組 ¥57,750 稅込，JB74 專用，不可裝 JC74）取代原廠側裙，兩者合計 JB74 全套實際要價 ¥127,050 稅込。三型以後車款因地板隔音材干涉支架需修剪。' },
  { id: 'wildgoose_fold', photo: true, url: 'https://www.rv4wildgoose.com/parts/jimny-64-74/exterior_64/jm-2262l-jm-2262r.html', label: '折疊式側踏 JM-2262', price: 35200, cur: 'JPY', brand: 'RV4 Wild Goose',
    note: 'RV4 Wild Goose 官網確認單邊 ¥35,200 稅込（¥32,000 稅抜），左右分別為品番 JM-2262L／JM-2262R，左右都裝合計 ¥70,400 稅込；JB74W 專用，JB64 是另一品番 JM-2162，不通用。踏板鋼板 4.2mm、支架 6.0mm，單邊 5kg，可手動上翻收折；官方註明三型以後車款依安裝狀況可能產生接觸異音，需對策。' },
  { id: 'wildgoose_guard', photo: true, url: 'https://www.rv4wildgoose.com/parts/jimny-64-74/protection_64/jm-2409.html', label: '門檻護甲側踏 JM-2409', price: 110000, cur: 'JPY',
    brand: 'RV4 Wild Goose', note: 'RV4 Wild Goose 官網確認 ¥110,000 稅込（¥100,000 稅抜）為左右一組（一台份），不是單邊。材質為鍍鋅鋼板（ボンデ鋼板，鍍鋅＋鉻酸鹽雙層被膜）2.3mm 厚、聚氨酯烤漆黑，長 1292mm、外凸 55mm，JB74 專用品番 JM-2409；JB64 對應品是另一件「サイドシルガード3.2」JM-2408（¥44,000 稅込，非同款護甲踏板）。14.5kg 官網未註明是單邊還是一組。' },
  { id: 'customwagon', photo: true, url: 'https://www.custom-wagon.com/c/557/jim661', label: '出幅可調側踏', price: 57200, cur: 'JPY', brand: 'Custom Wagon',
    note: 'Custom Wagon 官網原文為「調整幅は約50センチあります」，即出幅可調約 50cm，不是目錄原本寫的 50mm——官網白紙黑字，以此為準更正十倍之差。¥57,200 稅込（店售價，非廠商建議售價），鋼管加緞面黑塗裝，JB74W 專用（AT／MT 共用），與 JB64 版支架不同不可混用，2022 年 7 月以後（三型）車輛需切除新增隔音材才能安裝。官網未公布品番、管徑、尺寸與重量。' },
  { id: 'spieler', photo: true, url: 'https://spieler.jp/products/jb64jb74sidestep7575', label: '7575 方管側踏', price: 88000, cur: 'JPY', brand: 'SPIELER',
    note: 'SPIELER 官網查無「75×75 方管」這個規格，商品頁只寫「角パイプ」＋「アルミ天板（バーリング加工滑り止め）」，75×75 只出現在網址代碼 jb64jb74sidestep7575，未經官方文字證實，應標為未確認。¥88,000 稅込（¥80,000 稅抜），JB64 與 JB74 共用本體、支架不同，利用既有車體固定孔免鑽孔，出幅可調、對應車檢。目前 JB64／JB74 兩款官網皆顯示售罄。',
    uncertain: true },
  // ---- 澳洲
  { id: 'arb', photo: true, url: 'https://www.arb.com.au/product/4424010-arb-rock-sliders-with-textured-black-finish-suzuki-jimny', label: 'Rock Slider 岩石滑桿', price: 891, cur: 'AUD', brand: 'ARB', part: '4424010',
    note: 'Ø60.3 主管、3 支支撐管接大樑、紋理黑，18kg' },
  { id: 'ironman', photo: true, url: 'https://doubleblackoffroad.com/products/ironman-suzuki-jimny-rock-sliders-2018', label: 'Rock Slider SS070 岩石滑桿', price: 699, cur: 'AUD', brand: 'Ironman 4x4',
    note: 'Ø50.8×2.6、1280mm、緞面黑' },
  { id: 'hamer', url: 'https://www.hamer4x4.com/product/sm104-rock-slider-for-suzuki-jimny-jb74-2018/', label: 'SM104 岩石滑桿', price: null, cur: 'AUD', brand: 'Hamer 4x4', uncertain: true,
    note: '圓管＋格柵踏板，25kg，報價制' },
];

export const LADDERS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'fr', xSpan: [-625, -385], photo: true, url: 'https://ozjimny.com/products/front-runner-ladder-jimny-models-2023-current-xl', label: '尾門後爬梯', price: null, cur: 'AUD', brand: 'Front Runner', part: 'LASJ004', uncertain: true,
    note: '4 階、鉸鏈側、勾尾門上緣' },
  { id: 'jst', xSpan: [-617, -347], photo: true, url: 'https://shopee.tw/search?keyword=JST%20%E5%B0%BE%E9%96%80%E6%A2%AF%20Jimny', label: '標準版尾門後爬梯', price: 5180, cur: 'TWD', brand: 'JST 吉米工坊',
    note: 'Ø25 圓管封閉橢圓環、內寬 27cm（窄版 22cm）、四階，兩座片鎖尾門鉸鏈側；台灣製' },
  { id: 'urnieta', xSpan: [-721, -342], url: 'https://urnieta.com/product/salado-rear-ladder-kit-for-jimny-jb74-jc74-jb64/', label: 'SALADO 後爬梯', price: 19500, cur: 'TWD', brand: 'URNIETA', part: '0702026',
    note: '1015×390mm、Ø34 主管＋Ø28 四階（離底 158／378／603／862mm，間距不等）。上端勾尾門上緣、下端夾尾門下鉸鍊，不動車頂。中段有 91mm 往外的 S 形偏移閃備胎，可上到 235/75。附旗桿座、天線座與兩個輔助燈點。尺寸取自原廠圖 UN-JIMNY-FB-013' },
  { id: 'tube', xSpan: [-626, -414], photo: true, label: '管狀環形後爬梯', price: null, cur: 'TWD', brand: '多家', uncertain: true,
    note: 'Ø32 管環、勾車頂架後緣、附滅火器座（車主實車配置）' },
];

export const SIMPLE = {
  snorkel:      { label: '呼吸管', brands: 'Safari / Ironman 4x4 / ARB / Rival',
                  note: '日系六大改裝廠（APIO、TANIGUCHI、JAOS、RV4 Wild Goose、MONSTER SPORT、SHOWA GARAGE）目前都沒有 JB74 用呼吸管，原本列的 APIO 是誤植；日本市場的涉水對策改走差速器／變速箱通氣管延長與碳罐移位（RV4 Wild Goose 前後差速器呼吸管組 JM-5016 ¥9,350 稅込、A/T 呼吸管 JM-5019 ¥3,300 稅込、碳罐移位套件 JM-5221 ¥19,800 稅込）。呼吸管本身仍以澳洲／南非等海外品牌為主，注意左右側別，部分需切葉子板', uncertain: true },
  roofRack:     { label: '車頂架', options: [
                    { id: 'none', label: '不裝' },
                    { id: 'platform', photo: true, url: 'https://www.dometic.com/en-au/product/suzuki-jimny-2018-current-slii', label: '平台式', brand: 'Rhino-Rack Pioneer / Front Runner Slimline II' },
                    { id: 'basket', photo: true, url: 'https://www.showa-garage.shop/shopdetail/000000000111/I59728/', label: '籃式', brand: 'APIO / JAOS / Ironman 4x4' }] },
  awning:       { label: '車邊帳', options: [
                    { id: 'none', label: '不裝' },
                    { id: 'left', label: '左側' },
                    { id: 'right', label: '右側' }],
                  brands: 'Rhino-Rack Batwing / ARB / Front Runner / Darche / 23Zero' },
  windowGuards: { label: '鐵窗', brands: 'APIO / SHOWA GARAGE / Bunker', uncertain: true },
  ladder:       { label: '後爬梯', brands: '多家', note: '可鎖車身或與備胎架整合', uncertain: true },
  rockSliders:  { label: '側踏／岩石滑桿', brands: 'APIO / SHOWA GARAGE / Ironman 4x4', uncertain: true },
  lightBar:     { label: '車頂燈條', brands: '多家' },
  spareBag:     { label: '備胎書包', brands: '多家', uncertain: true },
};

// Auxiliary lighting (docs/jb74-lighting.json, compiled 2026-09-21 from maker
// spec sheets). Sizes there are what the 3D parts are built to. Note STEDI
// makes no behind-the-grille bracket for a Jimny -- the Rally Bar sits in
// FRONT of the grille, and the true behind-the-grille bar is Bushranger's.
export const LIGHT_BARS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'ipf', url: 'https://www.ipf.co.jp/ipfEc/products/detail/122', label: '600 S-Series 40 吋燈條', brand: 'IPF',
    part: '642JM2', price: 118800, cur: 'JPY', note: '沒有車頂架時鎖在套件附的 A 柱支架上（IPF：「Ａピラー上部にボルトオン取付け」），有車頂架就改鎖在架子前緣。IPF 642JM2 是含燈條的整組套件：642SD 40 吋雙排燈條本體＋繼電器線組＋開關＋A 柱專用托架，適用 JB64／JB74（2018.07 以後，兩車共用同一料號）。官網 ¥118,800 稅込（¥108,000 稅抜）是整組總價；642SD 單體另售 ¥95,480 稅込（¥86,800 稅抜），若把兩者價格相加會重複計算燈條本體，本欄只計整組總價一次。642SD 規格：20,000 流明、273,000cd、210W、6000K、IP68、重 2,900g，白光。' },
  { id: 'stedi_st3k', url: 'https://www.stedi.com.au/', label: 'ST3K 51.5 吋（琥珀濾片）', brand: 'STEDI',
    price: 394, cur: 'AUD', note: '1300×51mm、50 顆；濾片可拆，裝上由 5700K 變 2500K 琥珀。4.25kg，是唯一不吃掉車頂 30kg 載重的全寬選項。沒有車頂架時用 MG-X 雨槽支架（Mega Jimny，夾在雨槽前端、為 52 吋燈條設計，AUD 129，尺寸未公布）；有車頂架鎖在架子前緣。台灣經銷 Jimny Plus' },
  { id: 'stedi_st4k', url: 'https://www.stedi.com.au/', label: 'ST4K 52 吋（琥珀濾片）', brand: 'STEDI',
    price: 519, cur: 'AUD', note: '1320×110×105mm、雙排 100 顆、6.62kg；加車頂架後接近 30kg 上限。沒有車頂架時用 MG-X 雨槽支架（為 52 吋燈條設計），有車頂架鎖在架子前緣' },
  { id: 'stedi_st1k', url: 'https://www.stedi.com.au/', label: 'ST1K 21.5 吋 黃光', brand: 'STEDI',
    price: 219, cur: 'AUD', note: '546×38×80mm、20 顆；原廠黏合黃色鏡片，熄燈也是黃的（全系列唯一原生上色）。沒有車頂架時畫在 A 柱支架上（STEDI 沒有 JB74 專用支架）' },
  { id: 'stedi_st2k', url: 'https://www.stedi.com.au/', label: 'ST2K TOUCH 40 吋 白／琥珀', brand: 'STEDI',
    price: 649, cur: 'AUD', note: '1016mm、16 段；白／琥珀雙色 DRL 觸控切換。斷面未公布。沒有車頂架時畫在 A 柱支架上（STEDI 沒有 JB74 專用支架）' },
];

// Round spot lights: clamped on the rack's front rail when there is a rack,
// otherwise on the maker's own body mount (IPF JS-001 grille stay for the 968
// pair). The KC "smiley" look is the black-and-yellow logo cover, not a
// different lamp.
export const ROOF_LIGHTS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'round', label: '968 圓燈（一對）', brand: 'IPF', price: 16940, uncertain: true, note: '有車頂架就用燈座夾在架子前緣；沒有車頂架時裝在 IPF 自家的 JB64／JB74 專用燈架 JS-001（水箱罩前方，IPF 寫明為 950SRL 與 968 專用設計，需裁切水箱護板與原廠前保桿一部分，¥16,720 稅込，燈架另計）。JS-001 官網沒有尺寸圖，燈架形狀照實車照片推估。目錄原寫「一般 7 吋圓燈一對」查無對應的日本一手商品：IPF 唯一成對出貨的圓燈是 968 系列，φ166×D75mm（約 6.5 吋）鹵素燈（H3 12V 55W），不是 7 吋也不是 LED。整組含燈體×2、燈罩×2、繼電器、線組、開關，S-9682（透明）¥16,940 稅込、S-9681（金）¥18,150 稅込。若要 LED，IPF 900XLS φ200mm（約 7.9 吋）、2,200 流明、30W，¥29,700 稅込，但官網註明單顆出貨，一對要買兩顆。',
    part: 'S-9682（透明燈罩）／S-9681（金色燈罩）',
    cur: 'JPY',
    url: 'https://www.ipf.co.jp/ipfEc/products/detail/116' },
  { id: 'kc_pro6', url: 'https://www.kchilites.com/', label: 'Pro6 六燈排燈（微笑燈罩）', brand: 'KC HiLiTES',
    part: '91307', price: 1615, cur: 'USD',
    note: '994×154×85mm、六顆 152.4mm、間距 156.6mm，附黑底黃 KC 燈罩。KC 只附通用腳座、沒有 JB74 專用支架：有車頂架就鎖在架子前緣，沒有車頂架要另購 A 柱支架（畫的是 IPF 642JM2 那種 A 柱上方鎖付的支架，KC 沒有這個產品）。11.34kg，加平盤車頂架已超過 JB74 車頂 30kg 動態載重。台灣 MRK 代理，燈罩單買 NT$600' },
];

// Nose lighting. Sits in front of, in, or behind the grille -- three quite
// different looks from the outside.
export const GRILLE_LIGHTS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'rally', url: 'https://www.stedi.com.au/', label: 'Rally Bar ＋ ST1K 黃光', brand: 'STEDI',
    part: 'ST-11-JMN-001', price: 544, cur: 'AUD',
    note: '63mm 白鐵管橫過水箱罩「前方」，燈條鎖在管上。STEDI 沒有 Jimny 的格柵內支架，這是他們唯一的 Jimny 車頭件（管 A$325 ＋ ST1K A$219）' },
  { id: 'lower', url: 'https://www.stedi.com.au/', label: 'ST1K 21.5 吋 下氣壩', brand: 'STEDI',
    price: 219, cur: 'AUD', note: '546mm 黃光條塞在下保桿開口，最常見的 DIY 解法' },
  { id: 'bushranger', label: 'Night Hawk 28 吋（格柵後）', brand: 'Bushranger', part: 'NHBGS450LB',
    price: 600, cur: 'AUD', note: '717mm 單排 21 顆 OSRAM；原廠文案明寫裝在下水箱罩「後方」，需修下護板' },
  { id: 'arb_ar21_red', needsBumper: 'arb_summit', photo: true, url: 'https://www.arb.com.au/product/ar21sv2-arb-intensity-v2-7-inch-round-21-led-spot-driving-light',
    label: 'Intensity V2 AR21 圓燈一對（紅色燈罩）', brand: 'ARB', part: 'AR21SV2 ×2', price: 1658, cur: 'AUD', uncertain: true,
    note: '7 吋圓形 21 顆 LED 遠投燈，184×208×117mm、2.5kg、12mm 鎖點（ARB），一顆 AUD 829、這裡算一對。鎖在 Summit 牛欄上方的駕駛燈孔，照 Project JBOX 照片配紅色燈罩：ARB 說 Intensity 燈罩有透明、琥珀、藍、紅、全黑五色，但澳洲官網目前只列透明 AR10TC（一對 AUD 116）、琥珀、全黑，紅色料號查不到，價格未含燈罩' },
];

// Tail pipes (docs/jb74-exhaust.json). What matters here is what shows from
// outside: JB74 exits on the RIGHT from the factory, and only a few systems
// change the silhouette at all.
export const EXHAUSTS = [
  { id: 'stock', label: '原廠', brand: 'SUZUKI', price: 0, note: '右側出，管口與保桿幾乎切齊，從外面幾乎看不到' },
  { id: 'tw_tip', label: '裝飾尾飾管（套接）', brand: '台灣市售', price: 675, cur: 'TWD',
    note: '套在原廠管上，往後多伸 50–80mm；底下完全不動。台灣 JB74 最常見的改法' },
  { id: 'fujitsubo_ak', url: 'https://www.fujitsubo.co.jp/', label: 'AUTHORIZE K', brand: 'FUJITSUBO', part: '750-81927',
    price: 72380, cur: 'JPY', note: 'φ70 斜切 21°、離地 320mm，原廠位置最斯文的一套；原廠土除需拆或裁。另有燒色尾管選項' },
  { id: 'monster_sp_x', url: 'https://www.monster-sport.com/', label: 'TYPE Sp-X', brand: 'MONSTER SPORT', part: '241590-5600M',
    price: 68200, cur: 'JPY', note: 'φ76.3 斜切捲邊、子彈型消音筒 3.6kg，右側原廠位置免修保桿' },
  { id: 'jaos_zs', url: 'https://www.jaos.co.jp/', label: 'BATTLEZ ZS', brand: 'JAOS', part: 'B702518B',
    price: 74800, cur: 'JPY', note: 'φ101 正圓管口（全表最大單出）＋BATTLEZ 壓字，需局部修保桿。適用 JB74 2018.07〜2025.11，2025.11 後的 5 型不可裝。台灣 MyRack 約 NT$22,000，是台灣最買得到的真系統' },
  { id: 'kakimoto_kr_lr', url: 'https://www.kakimotoracing.co.jp/products/list_carmodel.cgi?rid=266&serieskey=exhaust_class_kr', label: 'Class KR 左右出', brand: '柿本改', part: 'S71355S',
    price: 170500, cur: 'JPY', note: 'φ96 雙出、左右保桿下角各一，是車尾正面視角最搶眼的一套；沒有胖消音筒，取而代之是扁平共鳴箱' },
  { id: 'apio_yoshimura_ti', url: 'https://apio.jp/parts/2004-7.html', label: '突擊 R-77J 鈦砲管', brand: 'APIO × YOSHIMURA', part: '2004-7T',
    price: 363000, cur: 'JPY', note: '重點是消音筒本身：手工燒藍鈦合金消音筒，辨識度全表最高。APIO 官網規格為主管約 φ50.8mm（部分 φ42.7mm）、出口外徑約 φ68mm、重約 4.2kg；目錄原寫的「550×115mm」尺寸官網查無依據，已拿掉。適用 JB74 1〜4 型純正保桿車（MT／AT），5 型不適用。同規格鈦灰色 2004-7TX 便宜約 ¥14,300（¥348,700）' },
  { id: 'taniguchi_compe_r', url: 'https://www.ors-taniguchi.co.jp/', label: 'Compe Muffler R', brand: 'TANIGUCHI',
    price: 102300, cur: 'JPY', note: 'TANIGUCHI 官網價格公告確認稅込 ¥102,300（2026/2/2 起出貨分適用），但商品頁本身是 JS 動態載入、抓不到規格內文——「管口從右後角側向穿出、離地約 560mm」與「原廠保桿要開孔」這兩點在官網一手頁面上都查不到依據，暫標未證實，上架前建議先向店家索取規格表。',
    uncertain: true },
  { id: 'hks_legal', url: 'https://www.hks-power.co.jp/', label: 'LEGAL Muffler K-1', brand: 'HKS', part: '31013-AS017',
    price: 13800, cur: 'TWD',
    note: 'φ74.7 單出、拋光 SUS304、右側後出（與原廠同側同位置），伸出保桿約 45mm。消音鼓只有 4.0kg 藏在後軸上方，側面幾乎看不到；近接排氣音 83dB（原廠 81），免切保桿。台灣唯一有公司貨標價的 HKS 吉姆尼排氣，日本 ¥49,500。車主實車配置' },
  { id: 'hks_legal_ti', url: 'https://www.hks-power.co.jp/', label: 'LEGAL Muffler K-1（鈦燒色尾管）', brand: 'HKS', part: '31013-AS020',
    price: 16900, cur: 'TWD', note: '與 K-1 同一支，尾管換成鈦燒色；日本 ¥71,500' },
  { id: 'urnieta_salado', url: 'https://urnieta.com/product/salado-exhaust-kit-for-jimny-jb74-jc74/', label: 'SALADO 四出排氣', brand: 'URNIETA', part: '0702019',
    price: 44800, cur: 'TWD',
    note: '真的四根管：一顆中央消音器分兩路，每側兩根 Ø80 尾管（離中線 279／368mm，同側相距 89mm 幾乎相貼，共用一個方形外罩），全部朝後。電子閥門＋無線遙控，中尾段 cat-back，不需切保桿——SALADO 後保桿是半高的，本來就露出這一區。尺寸取自原廠圖 UN-JIMNY-FB-010' },
  { id: 'hks_trailmaster', url: 'https://www.hks-power.co.jp/', label: 'LEGAMAX TRAILMASTER', brand: 'HKS', part: '32018-AS006',
    price: 150700, cur: 'JPY',
    note: '側出雙管 φ75×2，後保桿完全不動；官網只寫「サイド出しデュアルマフラー」，沒有明載左右哪一側，也沒有明載尾管是鈦燒色，不應寫死。本體 S304 不鏽鋼、9.0kg，裝著時地上高 210mm，近接排氣音 88dB（原廠 81dB，全表最大聲）。JB74W 品番 32018-AS006，JB64W 是不同品番 31021-AS004，訂購時務必核對車型以免買錯。',
    uncertain: true },
];

// Where a fire extinguisher hangs. No maker sells a JB74 ladder bracket --
// the owner's car wears a pair of band clamps on the ladder rail, and the
// guard positions strap to the MOLLE panel (2-5 kg rated, so a 1 kg bottle).
export const EXTINGUISHERS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'ladder', label: '掛尾梯', brand: '雙環快拆', price: null, uncertain: true,
    note: '圓管專用雙環架；車主實車配置。市面沒有 JB74 尾梯專用架' },
  { id: 'left', label: '左鐵窗', brand: 'MOLLE 板', price: null, uncertain: true, note: '鐵窗板載重僅 2–5kg，只能綁 1kg 瓶並垂直固定' },
  { id: 'right', label: '右鐵窗', brand: 'MOLLE 板', price: null, uncertain: true, note: '同左側' },
];


// Extras that map to configurator toggles (`key`) rather than a select list
export const OTHERS = [
  { id: 'showa_skirt', url: 'https://www.heekis.com/products/showasidecover', refs: ['https://www.showa-garage.shop/'], label: 'AES 車門下側裙飾板', price: 14500, cur: 'TWD', brand: 'SHOWA GARAGE', photo: true, key: 'sideSkirt',
    note: '消光黑 AES 門檻下飾蓋，簡約腰線；Heekis 代理；車主實車配置' },
  { id: 'kc_flex4', url: 'https://www.mrk.com.tw/product_ii.html?ID=561', label: 'FLEX ERA 4 霧燈（一對）', price: 23500, cur: 'TWD', brand: 'KC HiLiTES', part: '0289', photo: true, key: 'frontBumper',
    note: '4 燈 LED 方燈、160W 混合光；裝在 KLC 前保桿下管兩端（車主實車配置，前保桿模型已含）' },
  { id: 'wlm_guard', photo: true, key: 'windowGuards', url: 'https://www.buerjitw.com/products/wlm-%E7%AA%97%E6%88%B6%E9%98%B2%E8%AD%B7%E7%B6%B2-jimny-jb74', label: '後側窗鐵窗', price: 5200, cur: 'TWD', brand: 'WLM 4x4', part: 'JB7408 / JB7409',
    note: '每片；795×533 雷射切割方孔板、雨槽夾固定，可掀式；配置器「鐵窗（WLM）」' },
  { id: 'fr_ladder', key: 'ladder', url: 'https://ozjimny.com/products/front-runner-ladder-jimny-models-2023-current-xl', label: 'Jimny 尾門後爬梯', price: null, cur: 'AUD', brand: 'Front Runner', part: 'LASJ004', uncertain: true,
    note: '4 階、鉸鏈側；配置器「後爬梯」' },
  { id: 'suzuki_cover', key: 'spareCover', url: 'https://www.suzuki.co.jp/accessory_car/jimny_sierra-accessory.html', label: '原廠硬式備胎蓋（Jimny SIERRA 字樣）', price: 52800, cur: 'JPY', brand: 'SUZUKI', part: null,
    note: '正面／側面樹脂硬質面板、背面易拆合成皮，鈴木原廠建議售價 ¥52,800（稅込），安裝參考工時 0.2h，須先拆原廠備胎半罩。另有犀牛髮絲紋款 ¥33,880（稅込），本目錄未建模。鈴木官方用品頁不公布品番；原目錄的 9923B-77R21-003 在零件目錄查無此號，且 77R 是 JB64 車系碼（JB74 是 78R），已移除' },
  { id: 'trasharoo', key: 'spareBag', url: 'https://agileoffroad.com/products/trasharoo-spare-tire-trash-bag', label: '備胎書包（Trasharoo）', price: null, cur: 'USD', brand: 'Trasharoo', uncertain: true,
    note: '配置器「備胎書包」' },
  { id: 'maxx', photo: true, url: null, key: 'wheel', label: 'MAXX JB74 旋壓十輻輪框 16×6.0J ±0', price: 4400, cur: 'TWD', brand: 'MAXX（台灣製）', note: 'FB 平光黑，配 TOYO Open Country M/T 225/75R16（車主實車配置）' },
];


/** Which warnings apply to a configuration. Pure function so the UI and any
 *  future export share one source of truth.
 *  `t` (optional) is i18n.js t(): each message then comes from its
 *  'validate.*' string in the page's language (the catalogue labels in it are
 *  whatever language the catalogue objects are in). Without it, the zh-TW
 *  text below, for node tools. */
export function validate(cfg, { tyre, lift, bodyLift, wheel }, t) {
  const out = [];
  const say = (key, vars, zh) => (t ? t('validate.' + key, vars) : zh);
  const sep = t ? t('validate.listSep') : '、';
  const totalLift = (lift?.lift ?? 0) + (bodyLift?.body ?? 0);
  // Lowering is not "insufficient lifting". A road tyre that needs no lift is
  // fine on a lowered car, so the comparison floors at stock height; a tyre
  // that genuinely needs clearance still fails, and gets told the real gap.
  if (tyre.needLift > Math.max(totalLift, 0)) {
    out.push({ level: 'error',
      msg: totalLift < 0 ? say('tyreNeedsLiftLowered', { tyre: tyre.label, need: tyre.needLift, low: -totalLift }, `${tyre.label} 需要約 ${tyre.needLift}mm 舉升，目前是降低 ${-totalLift}mm`)
        : say('tyreNeedsLift', { tyre: tyre.label, need: tyre.needLift, have: totalLift }, `${tyre.label} 需要約 ${tyre.needLift}mm 舉升，目前只有 ${totalLift}mm`) });
  }
  if (totalLift < 0 && tyre.dia > 700) {
    out.push({ level: 'warn',
      msg: say('loweredBigTyre', { low: -totalLift, tyre: tyre.label, dia: tyre.dia }, `降低 ${-totalLift}mm 配 ${tyre.label}（外徑 ${tyre.dia}mm）：車身壓低又用大外徑胎，滿載或過坑時輪拱內襯容易磨到`) });
  }
  if (tyre.needBody > (bodyLift?.body ?? 0)) {
    out.push({ level: 'error',
      msg: say('tyreNeedsBody', { tyre: tyre.label, need: tyre.needBody }, `${tyre.label} 實務上需要 ${tyre.needBody}mm 車身舉升才有足夠輪拱空間`) });
  }
  if (tyre.rim !== wheel.rim) {
    out.push({ level: 'error', msg: say('rimMismatch', { tyre: tyre.label, tyreRim: tyre.rim, wheelRim: wheel.rim }, `${tyre.label} 是 ${tyre.rim} 吋胎，但輪框是 ${wheel.rim} 吋`) });
  }
  if (tyre.legal === false) {
    out.push({ level: 'warn', msg: say('tyreIllegal', { tyre: tyre.label }, `${tyre.label} 超出澳洲法規上限（235/75R15）；各地法規請自行確認`) });
  }
  if (tyre.severe) {
    out.push({ level: 'warn', msg: say('tyreSevere', null, '33 吋需要減速齒輪（17/87），否則一檔起步與油耗會明顯惡化') });
  }
  if ((lift?.lift ?? 0) >= 75) {
    out.push({ level: 'info', msg: say('lift75', null, '75mm 以上需 Caster 修正、可調橫拉桿、延長煞車油管與緩衝塊') });
  }
  if ((lift?.lift ?? 0) > 0 && (lift?.lift ?? 0) <= 50 && tyre.needBody > 0) {
    out.push({ level: 'info', msg: say('liftStatic', null, '懸吊舉升只抬靜態高度，壓縮行程時輪拱空間不變 — 這是要加車身舉升的原因') });
  }
  if (wheel.offset <= -20) {
    out.push({ level: 'info', msg: say('offset', { offset: wheel.offset }, `offset ${wheel.offset} 會明顯外擴輪距，需確認輪拱覆蓋與法規`) });
  }
  if (cfg.extinguisher === 'ladder' && cfg.ladder === 'none') {
    out.push({ level: 'error', msg: say('extNoLadder', null, '滅火器掛在尾梯上，但目前沒有裝尾梯') });
  }
  if ((cfg.extinguisher === 'left' || cfg.extinguisher === 'right') && !cfg.windowGuards) {
    out.push({ level: 'error', msg: say('extNoGuards', null, '滅火器綁在鐵窗的 MOLLE 板上，但目前沒有裝鐵窗') });
  }
  // JB74 roof load is 30 kg dynamic. A tray is 14-18 kg on its own, so a
  // heavy light set on top of one is over the limit before anything is
  // strapped down.
  if (cfg.roofRack !== 'none' && (cfg.roofLights === 'kc_pro6' || cfg.lightBar === 'stedi_st4k')) {
    out.push({ level: 'warn',
      msg: say('roofLoadLights', null, 'JB74 車頂動態載重只有 30kg；平盤車頂架 14–18kg 加上這組燈（KC Pro6 11.3kg／ST4K 6.6kg）已經吃滿，不要再放行李') });
  }
  if (cfg.face && cfg.face !== 'none' && (cfg.frontBumper !== 'stock' || cfg.grille !== 'stock' || cfg.grilleLight !== 'none')) {
    out.push({ level: 'error', msg: say('faceConflict', null, '換臉套件已經包含水箱罩、頭燈與前保桿，前保桿、水箱護罩與車頭燈條請維持原廠') });
  }
  // IPF's 968 pair with no rack stands on the JS-001 grille stay, in front
  // of the stock grille over a cut stock bumper
  if (cfg.roofLights === 'round' && cfg.roofRack === 'none') {
    if ((cfg.face && cfg.face !== 'none') || cfg.grilleLight === 'rally')
      out.push({ level: 'error', msg: say('ipfNoRackConflict', null, '沒有車頂架時 IPF 968 圓燈裝在水箱罩前的 JS-001 燈架上，跟換臉套件或 STEDI Rally Bar 佔同一個位置；請加裝車頂架讓圓燈上架，或拿掉其中一樣') });
    else if (cfg.frontBumper !== 'stock')
      out.push({ level: 'warn', msg: say('ipfBumper', null, 'IPF JS-001 圓燈架是照原廠前保桿設計的（要裁切一部分）；換了社外前保桿能不能裝，要向店家確認') });
  }
  if (cfg.awning && cfg.awning !== 'none' && cfg.roofRack === 'none')
    out.push({ level: 'error', msg: say('awningNoRack', null, '車邊帳是鎖在車頂架側軌上的，目前沒有車頂架') });
  const gl = GRILLE_LIGHTS.find(g => g.id === cfg.grilleLight);
  if (gl?.needsBumper && (cfg.frontBumper !== gl.needsBumper || (cfg.face && cfg.face !== 'none')))
    out.push({ level: 'error', msg: say('grilleLightBumper', { light: gl.label, bumper: FRONT_BUMPERS.find(b => b.id === gl.needsBumper)?.label ?? gl.needsBumper }, `${gl.label}鎖在 ${FRONT_BUMPERS.find(b => b.id === gl.needsBumper)?.label ?? gl.needsBumper} 的燈孔上，目前沒有裝這支保桿`) });
  // ── ARB BASE Rack accessories (docs/jb74-arb-rack-accessories.json)
  if (cfg.roofRack === 'arb') {
    const rails = ARB_RACK_ACC.filter(a => a.group === 'rail' && cfg[a.key]);
    if (rails.length > 1)
      out.push({ level: 'error', msg: say('arbRails', { rails: rails.map(a => a.label).join(sep) }, `ARB 護欄只能選一種：${rails.map(a => a.label).join('、')}不能同時裝，要整圈就選全圍護欄 1780080`) });
    if (cfg.shovel && (cfg.arbJack || cfg.arbShovel))
      out.push({ level: 'warn', msg: cfg.arbShovel ? say('arbShovelDup', null, '已經裝了 ARB 鏟子架，另一個「車頂架鏟子」不重複畫')
        : say('arbShovelJack', null, '「車頂架鏟子」的位置被 Hi-Lift 千斤頂架佔走了，沒有畫；要帶鏟子請改用 ARB 鏟子架（1780270）') });
    // published weights only: the jack (Hi-Lift), two MAXTRAX (MAXTRAX), the Slimline bar (ARB)
    const kg = (cfg.arbJack ? 12.77 : 0) + (cfg.arbBoards ? 6.8 : 0) + (cfg.arbLights ? 3.07 : 0) + (cfg.arbJerry ? 40 : 0);
    if (kg > 12)
      out.push({ level: 'warn', msg: t
        ? t('validate.arbLoad', { items: [cfg.arbJack && 'jack', cfg.arbBoards && 'boards', cfg.arbLights && 'lights', cfg.arbJerry && 'jerry'].filter(Boolean).map(k => t('validate.arbLoad.' + k)).join(sep) })
        : `JB74 車頂動態載重 30kg（含車頂架）；貨架上${[cfg.arbJack && 'Hi-Lift 12.77kg', cfg.arbBoards && 'MAXTRAX 兩片 6.8kg', cfg.arbLights && '燈條 3.07kg', cfg.arbJerry && '兩桶油約 40kg'].filter(Boolean).join('、')}，還沒算架子本身（經銷商轉載約 17kg，ARB 未公布）` });
  }
  const tent = TENTS.find(t => t.id === cfg.tent);
  if (tent && tent.id !== 'none') {
    if (tent.noRack && cfg.roofRack !== 'none')
      out.push({ level: 'error', msg: say('tentNoRackConflict', { tent: tent.label }, `${tent.label}直接鎖在車頂、不用車頂架，兩者不能同時裝`) });
    if (!tent.noRack && cfg.roofRack === 'none')
      out.push({ level: 'error', msg: say('tentNeedsRack', { tent: tent.label }, `${tent.label}要裝在車頂架上，目前沒有車頂架`) });
    out.push({ level: 'warn', msg: say(tent.noRack ? 'tentLoad' : 'tentLoadRack', { kg: tent.weight }, `JB74 車頂載重 30kg（Suzuki 型錄，含車頂架自重）；這頂帳篷本身 ${tent.weight}kg，${tent.noRack ? '' : '還沒算車頂架，'}已經超過`) });
  }
  // ── spare delete and the bare tailgate (docs/jb74-spare-delete.json)
  const pick = (L, k) => (L.find(x => x.id === cfg[k]) ?? L[0]);
  const del = pick(SPARE_DELETES, 'spareDelete'), off = del.id !== 'none';
  const tg = [['tgPanel', TG_PANELS], ['tgBag', TG_BAGS], ['tgFrame', TG_FRAMES]].map(([k, L]) => pick(L, k)).filter(x => x.id !== 'none');
  const car = pick(CARRIERS, 'carrier'), hitch = pick(HITCHES, 'hitch');
  const rb = REAR_BUMPERS.find(x => x.id === cfg.rearBumper) ?? {};
  const lad = LADDERS.find(x => x.id === cfg.ladder);
  const carName = car.label?.split(/＋| \+ /)[0];
  if (!off && tg.length)
    out.push({ level: 'error', msg: say('tgNeedsDelete', { items: tg.map(x => x.label).join(sep) }, `${tg.map(x => x.label).join('、')}裝在拿掉備胎後的背門上，目前備胎還在`) });
  if (off && (cfg.spareBag || cfg.spareCover || (cfg.spareCoverKit && cfg.spareCoverKit !== 'none')))
    out.push({ level: 'error', msg: say('spareGone', null, '備胎已經拿掉，備胎書包／備胎蓋沒有地方裝') });
  if (del.centrePlate && tg.length)
    out.push({ level: 'error', msg: say('centrePlate', { del: del.label, items: tg.map(x => x.label).join(sep) }, `${del.label}把車牌裝在背門中央，跟${tg.map(x => x.label).join('、')}搶同一個位置`) });
  if (del.centrePlate && rb.tgPlate)
    out.push({ level: 'warn', msg: say('plateMoved', null, '這款後保桿已經把車牌移到背門左側，不需要再裝中央車牌移位套件') });
  const over = (a, b) => a && b && a[0] < b[1] && b[0] < a[1];
  for (const t0 of [del, ...tg]) {
    if (!t0.xSpan) continue;
    if (lad && lad.id !== 'none' && over(t0.xSpan, lad.xSpan))
      out.push({ level: t0.thin ? 'warn' : 'error', msg: say(t0.thin ? 'ladderOverlapThin' : 'ladderOverlap', { item: t0.label, ladder: lad.label }, `${t0.label}延伸到鉸鏈側，跟後爬梯（${lad.label}）位置重疊${t0.thin ? '；爬梯固定座要壓在護板上，需現場確認' : ''}`) });
    if (rb.tgPlate && over(t0.xSpan, [285, 615]))
      out.push({ level: 'error', msg: say('plateCovered', { item: t0.label }, `這款後保桿把車牌移到背門左側（離中心 285–615mm），會被${t0.label}蓋住`) });
  }
  const bolted = tg.filter(x => !x.thin);
  if (bolted.length > 1)
    out.push({ level: 'error', msg: say('tgOneOnly', { items: bolted.map(x => x.label).join(sep) }, `${bolted.map(x => x.label).join('、')}都鎖在同一組備胎架孔上，只能擇一`) });
  if (car.id !== 'none') {
    if (car.needsSpare) {
      if (off) out.push({ level: 'error', msg: say('carrierNeedsSpare', { carrier: carName }, `${carName}是夾在備胎上的，備胎拿掉就裝不上`) });
      if (hitch.id !== 'none') out.push({ level: 'info', msg: say('carrierNoHitch', null, '這款車架夾在備胎上，不用拖車座') });
    } else {
      if (hitch.id === 'none' && !rb.receiver)
        out.push({ level: 'error', msg: say('carrierNeedsHitch', { carrier: carName }, `${carName}插在拖車座上，目前沒有拖車座（後保桿也沒有自帶接收座）`) });
      if (car.needsDelete && !off)
        out.push({ level: 'error', msg: say('carrierNeedsDelete', { carrier: carName }, `${carName}的軌道離車尾只有約 470mm，裝著備胎時機車把手會撞到備胎，要先拿掉備胎`) });
      if (car.ball && !hitch.euroBall)
        out.push({ level: 'error', msg: say('carrierEuroBall', { carrier: carName }, `${carName}夾在 50mm 歐規拖車球上；這個拖車座沒有標示可換歐規球（グローバルタイト強化型可選）`) });
      // a bar's own receiver carries no published vertical rating
      const vl = hitch.id !== 'none' && !rb.receiver ? hitch.vload : null;
      if (rb.receiver) out.push({ level: 'info', msg: say('receiverNoRating', { bumper: rb.label }, `${rb.label}自帶的接收座沒有公布垂直荷重；日本市售 JB74 拖車座是 75–100kg，照這個範圍估`) });
      const full = car.weight + (car.load ?? car.cap);
      if (vl && full > vl) out.push(car.load
        ? { level: 'error', msg: say('hitchOverload', { vl, load: car.load, weight: car.weight, full: Math.round(full), over: Math.round(full - vl) }, `拖車座垂直荷重 ${vl}kg；示意機車 ${car.load}kg ＋車架 ${car.weight}kg ＝ ${Math.round(full)}kg，超過 ${Math.round(full - vl)}kg。日本市售 JB74 拖車座最高只有 100kg，50–125cc 機車都超過`) }
        : { level: 'warn', msg: say('hitchFull', { vl, weight: car.weight, cap: car.cap, full: Math.round(full) }, `拖車座垂直荷重 ${vl}kg；車架 ${car.weight}kg 加滿載 ${car.cap}kg ＝ ${Math.round(full)}kg，兩台都載到上限會超過`) });
      out.push({ level: 'info', msg: say('tailgateBlocked', null, 'JB74 背門是側開的，車架載著車時背門打不開，要先卸車') });
    }
    if (lad && lad.id !== 'none') out.push({ level: 'warn', msg: say('ladderBlocked', null, '後爬梯被車架上的車擋住，要先卸車才爬得上去') });
  }
  if (hitch.id !== 'none' && rb.receiver)
    out.push({ level: 'warn', msg: say('receiverBuiltIn', { bumper: rb.label }, `${rb.label}已經自帶拖車接收座，不需要另外裝拖車座`) });
  else if (hitch.id !== 'none' && cfg.rearBumper && cfg.rearBumper !== 'stock')
    out.push({ level: 'info', msg: say('hitchStockOnly', null, '拖車座只標原廠後保桿相容；社外後保桿能不能一起裝，請向店家確認') });
  if (cfg.exhaust === 'taniguchi_compe_r' && cfg.rearBumper !== 'stock') {
    out.push({ level: 'warn', msg: say('compeR', null, 'TANIGUCHI Compe R 的管口要從後保桿右角穿出；社外後保桿沒有任何一家公布相容性，需實車確認') });
  }
  if ((cfg.exhaust === 'jaos_zs' || cfg.exhaust === 'showa_links') && cfg.rearBumper !== 'stock') {
    out.push({ level: 'info', msg: say('exhaustTrim', null, '這套排氣管原廠保桿要局部裁切；換成社外後保桿後是否還需要修改，請向店家確認') });
  }
  return out;
}

export function priceOf(list, id) {
  const it = list.find((x) => x.id === id);
  return it?.price ?? null;
}


// 全車套件：DAMD（damd.co.jp，2026-09-27 逐頁重讀，研究檔 docs/jb74-damd-kits.json）
// 與 URNIETA。`set` 是套件裡每一件在配置器的對應，`demo` 是官方示範車的車色、
// 輪圈、輪胎與車上另外加裝的東西（不在套件內的件只放在 demo，不放 set）。
// 價格一律照官網寫的稅込價、未塗裝素地；little Δ／little 5. 另見 FACES。
export const KITS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'little_d', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-d/', label: 'little D. Defender 風套件', price: 305800, cur: 'JPY', brand: 'DAMD',
    demo: { color: 'ZVL', wheel: 'wildboar_sr15', rimFinish: 'B', tyre: 't215r15', tread: 'bfg_km3' },
    demoNote: '照官網棚拍示範車：中灰（ZVL）、APIO WILDBOAR SR 15×6J −5 黑框、BFGoodrich Mud-Terrain T/A 215/75R15（DATA 欄）。示範車胎側是白字，目錄裡的 KM3 只有黑字，所以畫黑字；車頂黑色鋼管籃、AOL 車門貼紙、反向備胎支架、車牌移到尾門都不在套件內，沒畫',
    set: { grille: 'damd_little_d', frontBumper: 'damd_little_d', rearBumper: 'damd_little_d_rear', hood: 'damd_little_d', mudFlap: 'damd_little_d' },
    note: 'ボディキット ¥305,800（稅込，未塗裝），烤漆另加 ¥96,800：水箱罩、前後保桿、引擎蓋罩、前後擋泥板、LITTLE:D 字與橢圓徽章、原廠倒車鏡頭套件。配 Cantabile ¥451,000、配 WILDBOAR SR ¥539,000、配 DEAN little D edition ¥605,000。水箱罩一律消光黑出貨。台灣無總代理，授權經銷商台中 Fujii74' },
  { id: 'little_g_std', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g/', label: 'little G. STANDARD 都會 G 風套件', price: 374000, cur: 'JPY', brand: 'DAMD',
    demo: { color: 'ZJ3', wheel: 'damd_little_g', rimFinish: 'BLACK', tyre: 't215r65', tread: 'bs_alenza001', rearBumper: 'damd_oem_painted' },
    demoNote: '照官網示範車：亮黑（ZJ3，官網沒寫色號，ZJ3 是塗裝清單裡唯一的黑）、little G ホイール 16×6J −5 黑色、BRIDGESTONE ALENZA 001 215/65R16（DATA 欄）、原廠車高。後保桿是加購的原廠保桿烤車身色（不在套件內）',
    set: { grille: 'damd_little_g_std', frontBumper: 'damd_little_g_std', fender: 'damd_little_g_t1', sideStep: 'damd_little_g', sideMould: 'damd_little_g', spareCoverKit: 'damd_little_g' },
    note: '套件（不含輪圈）¥374,000，烤漆另加 ¥141,900：水箱罩（附直立 LED 方向燈與 dd 徽章）、前保桿、type-1 爆龜＋鋁踏板、側飾條、不鏽鋼帶備胎蓋、G15 字（尾門字標沒畫）。含 little G 輪圈四顆 ¥517,000（不能沿用原廠胎）。不含後保桿' },
  { id: 'little_g_trad', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_traditional/', label: 'little G. TRADITIONAL 初代 G 風套件', price: 547800, cur: 'JPY', brand: 'DAMD',
    demo: { color: 'ZVG', wheel: 'damd_cantabile', rimFinish: 'GOLD', tyre: 't215r15', tread: 'bs_mt674', owl: true, roofRack: 'wood_full', sideMould: 'damd_little_g_black' },
    demoNote: '照官網米色示範車：米色（ZVG，官網沒寫色號，是清單裡唯一的象牙色）、DAMD Cantabile 15×6J −5 金色、BRIDGESTONE DUELER M/T 674 LT215/75R15 白字（DATA 欄）、trip basket 全長車頂架（選配）。側飾條在示範車上看起來整條黑',
    set: { grille: 'damd_little_g_trad', hood: 'damd_little_g', frontBumper: 'damd_little_g_trad', rearBumper: 'damd_little_g_trad_rear', fender: 'damd_little_g_t2', sideStep: 'damd_little_g', sideMould: 'damd_little_g', mudFlap: 'damd_little_g_trad' },
    note: '套件 ¥547,800，烤漆另加 ¥145,200：水箱罩、引擎蓋罩＋蓋上方向燈、前保桿＋Koito 方形霧燈、type-2 爆龜＋鋁踏板、側飾條、後保桿＋方形尾燈、擋泥板、dd 徽章（消光黑）。含 Cantabile 五顆 ¥693,000；含輪圈＋DUELER M/T 的組合已停止接單' },
  { id: 'little_g_adv', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_advance/', label: 'little G. ADVANCE 新款 G 風套件', price: 649000, cur: 'JPY', brand: 'DAMD',
    demo: { color: 'ZVR', wheel: 'damd_little_g', rimFinish: 'BLACK', tyre: 't215r65', tread: 'bs_alenza001' },
    demoNote: '官網有兩台示範車：一台接近白的冷灰（色號官網沒寫，不是 ZVL 也不像 ZVR，這裡用最接近的白色 ZVR）、一台消光銅橘配黑頂黑件（非原廠色）。輪圈 little G 16×6J −5 黑色、BRIDGESTONE ALENZA 001 215/65R16（DATA 欄）、原廠車高',
    set: { grille: 'damd_little_g_adv', hood: 'damd_little_g', frontBumper: 'damd_little_g_adv', rearBumper: 'damd_little_g_adv_rear', fender: 'damd_little_g_t2_paint', sideStep: 'damd_little_g', sideMould: 'damd_little_g', spareCoverKit: 'damd_little_g' },
    note: '套件 ¥649,000，烤漆另加 ¥194,700：直瀑鍍鉻水箱罩、引擎蓋罩＋蓋上方向燈、前保桿＋PIAA LED 霧燈、type-2 爆龜＋鋁踏板、後保桿＋415COBRA LED 尾燈、不鏽鋼帶備胎蓋、側飾條、dd（鍍鉻）與 G15 字。含 little G 輪圈四顆 ¥781,000；含輪圈＋輪胎 ¥770,000 那組比較便宜但已停止接單（官網舊價）' },
  { id: 'little_g_aventura', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_aventura/', label: 'little G. AVENTURA 越野 G 風套件', price: 836000, cur: 'JPY', brand: 'DAMD',
    demo: { color: 'ZZC', lift: 'sg25', wheel: 'damd_little_g', rimFinish: 'BLACK', tyre: 't225r70', tread: 'bfg_ko2', owl: true, mirrors: 'damd', sideMould: 'damd_little_g_black' },
    demoNote: '照官網示範車：軍綠（ZZC 相當，官網沒寫色號）、little G 16×6J −5 黑色、BFGoodrich KO2 LT225/70R16 白字（DATA：原廠車高裝不下）、升高 1 吋（示範車是 Spirit Racing 避震，這裡用目錄裡同為 25mm 的彈簧代替）、DAMD 卡車鏡。示範車另有 trip basket 後梯、IPF 工作燈與三種擋石網，都不在套件內、沒畫',
    set: { grille: 'damd_little_g_std', hood: 'damd_little_g', frontBumper: 'damd_little_g_std', rearBumper: 'damd_little_g_adv_rear', fender: 'damd_little_g_t1', sideStep: 'damd_little_g', sideMould: 'damd_little_g', roofRack: 'damd_solid', spareCoverKit: 'damd_tb_guard' },
    note: '套件 ¥836,000，烤漆另加 ¥128,700：STANDARD 水箱罩＋前保桿、引擎蓋罩＋蓋上方向燈、type-1 爆龜＋鋁踏板、ADVANCE 後保桿（415COBRA LED 尾燈）、側飾條、ソリッドラック 車頂架、trip basket 備胎護架、G15 字。含 little G 輪圈四顆 ¥957,000。注意：ソリッドラック 單品在官網標示「販売終了」，套件內容卻仍列著，下單前要向 DAMD 確認' },
  { id: 'roots', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_theroots/', label: 'JIMNY the ROOTS. LJ10 風套件', price: 213400, cur: 'JPY', brand: 'DAMD',
    demo: { color: 'ZZC', wheel: 'wildboar_sr15', rimFinish: 'H', tyre: 't215r15', tread: 'bs_mt674', owl: true },
    demoNote: '照官網示範車：軍綠（ZZC，官網沒寫色號）、APIO WILDBOAR SR 15×6J −5 灰色、BRIDGESTONE DUELER M/T 674 LT215/75R15 白字（DATA 欄）、原廠車高。保桿畫官網可選的コットンホワイト；示範車後保桿上段其實是車身綠（該配色在官網被註解掉）。反向備胎支架與「自家用」貼紙不在套件內',
    set: { grille: 'damd_roots', frontBumper: 'damd_roots', rearBumper: 'damd_roots_rear' },
    note: '外觀三件組 ¥213,400，烤漆另加 ¥99,000，與 APIO 共同開發。配 Cantabile 五顆 ¥363,000、配 WILDBOAR SR 五顆 ¥451,000；再加 DUELER M/T 的兩組已停止接單。露天可見代購 NT$65,000（未烤漆）' },
  { id: 'little_b', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-b/', label: 'little B. 美式小越野套件', price: 275000, cur: 'JPY', brand: 'APIO × DAMD',
    demo: { color: 'ZJ3', wheel: 'dean_cross', rimFinish: 'BG', tyre: 't215r65', tread: 'toyo_rt', owl: true, grille: 'damd_little_b_silver' },
    demoNote: '照官網正視示範車：黑色（ZJ3 推定，官網沒寫）、銀色 APIO 水箱罩、粗目銀×黑前後保桿、DEAN CROSS COUNTRY 16×6J −5、TOYO OPEN COUNTRY R/T 215/65R16 C 白字（DATA 欄）。另外三張斜拍是米白車頂的非原廠雙色，畫不出來',
    set: { grille: 'damd_little_b', hood: 'damd_bonnet', frontBumper: 'damd_little_b', rearBumper: 'damd_little_b_rear' },
    note: 'エクステリア 5 點套件 ¥275,000（稅込），烤漆另加 ¥118,800：APIO 鋼製水箱罩、DAMD 美式字標、引擎蓋罩、前保桿、後保桿＋延伸片；水箱罩現行色是半艷黑（銀色已終了），WHITE EDITION ¥308,000。含輪圈輪胎的完整套件頁面只寫 ¥448,000／¥468,000、稅込欄空白。前後保桿與 the ROOTS. 共用' },
  { id: 'saudade', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_saudade/', label: 'saudade 法式方燈套件', price: 437800, cur: 'JPY', brand: 'DAMD',
    demo: { color: 'ZVL', wheel: 'oz_rally', rimFinish: 'MB', tyre: 't215r16', tread: 'toyo_rt', roofRack: 'wood_full', mirrors: 'damd', mudFlap: 'damd_little_d' },
    demoNote: '照官網示範車（DAMD 註明是客製案例）：消光感中灰（最接近 ZVL，官網沒寫色號）、OZ Rally Racing 16×6J −5 消光黑、TOYO OPEN COUNTRY R/T 黑字（尺寸沒寫，照側面照片外徑約 703mm 用 215/70R16）、trip basket 全長車頂架、DAMD 卡車鏡、長擋泥板（不在本套件）。車門 Saudade 大貼紙與三色小徽章沒畫',
    set: { grille: 'damd_saudade', hood: 'damd_bonnet', frontBumper: 'damd_little_d', rearBumper: 'damd_little_d_rear', fender: 'damd_saudade' },
    note: '含引擎蓋罩 ¥437,800、不含 ¥393,800（稅込），只有未塗裝：Koito 方形雙燈水箱罩、前保桿、爆龜＋側裙飾板 6 件、後保桿＋圓燈、倒車鏡頭套件。前後保桿就是 little D. 那兩支（雷達、鏡頭、車牌套件都寫 little D. 專用）。加 OZ Rally Racing 五顆 ¥594,000／¥649,000' },
  { id: 'urnieta_salado', demo: { color: 'ZVR', lift: 'combo100', wheel: 'wildboar', rimFinish: 'G', tyre: 't31', tread: 'bfg_km3', owl: false }, demoNote: '照 URNIETA 官網示範車：白色（ZVR，車頂同色）、升高、消光黑 15 吋框配 BFG KM3 31×10.50R15 黑字泥地胎（docs/urnieta-demo-colours.json）；官方另有一台消光黑車，首頁與多數實車照是白色這台。輪框用目錄裡最接近的 15 吋黑框代替 SALADO 原廠框', url: 'https://urnieta.com/', label: 'SALADO 遠征越野套件', price: null, cur: 'TWD', brand: 'URNIETA', uncertain: true,
    set: { grille: 'urnieta_salado', frontBumper: 'urnieta_salado', rearBumper: 'urnieta_salado_rear', sideStep: 'urnieta_salado', hood: 'urnieta_salado', spareCoverKit: 'urnieta_salado', roofRack: 'urnieta_salado', ladder: 'urnieta', exhaust: 'urnieta_salado' },
    note: '中國東莞斯塔克工業（歐尼塔）；官網不標價，僅後保桿在台灣蝦皮有 NT$27,000。整套另有鋁引擎蓋、管狀側桿、行李架、後梯、四出排氣、涉水管（部分尚未建模）。只支援 JB74／JC74' },
  { id: 'urnieta_1970', demo: { color: 'Z2S', lift: 'td40', wheel: 'wildboar', rimFinish: 'G', tyre: 't235', tread: 'bfg_km3', owl: false }, demoNote: '照 URNIETA 官網示範車：絲光銀（Z2S，車頂同色）、升高、消光黑 15 吋框配 BFG KM3 LT235/75R15 黑字泥地胎（docs/urnieta-demo-colours.json）。輪框用目錄裡最接近的 15 吋黑框代替 1970 原廠框', url: 'https://urnieta.com/', label: '1970 復古套件（70 年代風）', price: 49400, cur: 'TWD', brand: 'URNIETA',
    set: { grille: 'urnieta_1970', frontBumper: 'urnieta_1970', rearBumper: 'urnieta_1970_rear', sideStep: 'urnieta_1970', hood: 'urnieta_1970', spareCoverKit: 'urnieta_1970' },
    note: '中國東莞斯塔克工業（歐尼塔）品牌，2026/6 上線；官網不標價，此為台灣三件合計。半高式前後保桿＋衝壓金屬網水箱罩，後保桿用圓形尾燈（官方寫致敬 Nissan GT-R）。同系列另有引擎蓋、側裙、備胎蓋、鷗翼窗（尚未建模）。只支援 JB74／JC74' },
  { id: 'little_delta', demo: { color: '2080-G13', wheel: 'oz_rally', rimFinish: 'RW', tyre: 't215r65', tread: 'bs_alenza001', owl: false, stripe: 'damd_center' },
    demoNote: '照 DAMD 官網紅色示範車：全車單色紅（JB74 沒有原廠紅，用 3M 2080-G13 改色膜代替）、OZ Rally Racing 16×6J −5 賽車白、BRIDGESTONE ALENZA 001 215/65R16、引擎蓋到車頂的米白＋深綠中線（示範車貼紙，套件不含）。示範車裝了 Rainbow Auto 2 吋降低彈簧，目錄裡沒有這項，所以車高維持原廠',
    url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_littledelta/', label: 'little Δ（Delta Integrale 風）套件', price: 539000, cur: 'JPY', brand: 'DAMD',
    set: { face: 'damd_delta', fender: 'damd_delta', sideStep: 'damd_l5d', rearBumper: 'damd_delta_rear', spoiler: 'damd_wing' },
    note: 'JB74 車身件全車套件（素地）¥539,000 稅込（¥490,000 稅抜）：四圓燈水箱罩（含頭燈、LED 燈泡、小燈、方向燈、三角徽章）、前保桿（含 Koito 黃色方形霧燈）、4 片整片鼓包葉子板、側裙、後保桿（含 DB 方形尾燈）、FRP 尾翼。除尾翼外全是 ABS。官網只列素地價，烤漆色表藏在網頁註解裡，目前不接。另有加 OZ 框、加框加胎的套裝，但頁面上是註解掉的（未販售）。台灣無總代理' },
  { id: 'little_5', demo: { color: 'DAMD-L5', wheel: 'oz_rally', rimFinish: 'RW', tyre: 't215r65', tread: 'bs_alenza001', owl: false },
    demoNote: '照 DAMD 官網紫藍示範車：車身與車頂同色深紫藍（非原廠色，官網沒寫色號），前後保桿石板灰、OZ Rally Racing 16×6J −5 賽車白、BRIDGESTONE ALENZA 001 215/65R16。示範車車門上的「NON TURBO」貼字與後鼓包前緣兩塊黑色斜飾片是示範車裝飾，沒有畫；示範車裝了 Rainbow Auto 2 吋降低彈簧，目錄裡沒有這項，所以車高維持原廠',
    url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little5/', label: 'little 5.（Renault 5 風）套件', price: 495000, cur: 'JPY', brand: 'DAMD',
    set: { face: 'damd_little5', fender: 'damd_delta', sideStep: 'damd_l5d', rearBumper: 'damd_little5_rear', spoiler: 'damd_wing13' },
    note: 'JB74 車身件全車套件（素地）¥495,000 稅込（¥450,000 稅抜）：方燈水箱罩（含 Koito 方形 2 燈式鹵素頭燈、DAMD 菱形徽章）、前保桿（含 Koito 黃色方形霧燈）、4 片整片鼓包葉子板、側裙、後保桿（含 DB 方形尾燈）、FRP 尾翼。除尾翼外全是 ABS。保桿、葉子板、後保桿、尾翼與 little Δ 共用，只有臉不同。官網只列素地價，烤漆色表藏在網頁註解裡，目前不接。台灣無總代理' },
];


// 引擎蓋。URNIETA 是整片鋁製引擎蓋（減重約 65%）；DAMD 是蓋在原廠引擎蓋上的
// 罩子。配置器都只畫出在車上看得出來的部分（中央隆起、進氣口、前緣唇邊）。
export const HOODS = [
  { id: 'stock', label: '原廠引擎蓋', price: 0, brand: 'SUZUKI' },
  { id: 'damd_little_d', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-d/', label: 'little D. 引擎蓋罩＋LITTLE:D 字', price: 52800, cur: 'JPY', brand: 'DAMD', kit: 'little_d',
    note: '蓋在原廠引擎蓋上：中央平頂加高區從雨刷下一路往前、前端收窄成斜面，前緣一條厚唇邊，上面貼 LITTLE:D 字母（消光黑或銀，¥7,480，套件內含；示範車銀色）。烤漆另加 ¥37,400，原廠色任選' },
  { id: 'damd_bonnet', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-b/', refs: ['https://www.damd.co.jp/products/suzuki/jimny_sierra_saudade/'], label: 'DAMD 引擎蓋罩（little B.／saudade）', price: 52800, cur: 'JPY', brand: 'DAMD', kit: 'little_b',
    note: 'little B. 與 saudade 兩頁同價同描述：中央平頂隆起到擋風玻璃前，前緣粗圓唇略懸出，要在原廠引擎蓋上鑽孔固定。烤漆另加 ¥18,700' },
  { id: 'damd_little_g', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_traditional/', label: 'little G. 引擎蓋罩＋蓋上方向燈', price: 74800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_trad',
    note: 'TRADITIONAL／ADVANCE／AVENTURA 共用：中央一塊平頂隆起一路到前緣，前角平肩上各一顆 G-Class 式楔形方向燈（附，官網提醒燈殼可能進水起霧）。烤漆另加 ¥37,400。裝上後日本法規的直前直左視認可能要另加前鏡頭（¥21,780）' },
  { id: 'urnieta_salado', url: 'https://urnieta.com/product/salado-hood-kit-for-jimny-jb74-jc74/', label: 'SALADO 鋁製引擎蓋', price: null, cur: 'TWD', brand: 'URNIETA', kit: 'urnieta_salado', uncertain: true,
    note: '工程圖 UN-JIMNY-FB-003：1408×882。鋁製減重約 65%，中央隆起後段一個大進氣口（三道鰭片＋中肋），沿用原廠鉸鍊／鎖扣／撐桿。6kg。官網不標價' },
  { id: 'urnieta_1970', url: 'https://urnieta.com/product/1970-hood-kit-for-jimny-jb74-jc74/', label: '1970 鋁製引擎蓋', price: null, cur: 'TWD', brand: 'URNIETA', kit: 'urnieta_1970', uncertain: true,
    note: '工程圖 UN-JIMNY-FB-025：1408×882。進氣口較小且位置偏中段（四道鰭片），右前角另有一組百葉散熱口，正面線條較接近原廠。6kg。官網不標價' },
];

// 套件專用備胎蓋（原廠硬殼蓋仍在「配件」開關裡）
export const SPARE_COVERS = [
  { id: 'damd_little_g', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g/', label: 'little G. 備胎硬殼蓋（不鏽鋼帶）', price: 63800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_std',
    note: '車身色平面硬殼、外圈拋光不鏽鋼帶（附鎖），中央一片黑色長圓角片帶 dd 徽章。適用 195/80R15、外徑 685–695mm、胎寬 175–195mm。烤漆另加 ¥24,200；黑帶版 ¥74,800 已販売終了' },
  { id: 'damd_tb_guard', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_aventura/', label: 'trip basket 備胎護架（木板）', price: 140800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_aventura',
    note: '鋼管抱箍夾住備胎兩側、中央黑色鋼板鎖在原廠備胎座，後面一片圓形天然木板蓋住輪面。適用胎外徑 685–720mm、胎寬 185–225mm，附固定繩。尺寸照官方照片估' },
  { id: 'none', label: '不裝', price: 0 },
  { id: 'urnieta_salado', url: 'https://urnieta.com/product/salado-extended-spare-tire-cover-for-jimny-jb74-jc74-jb64/', label: 'SALADO 延伸備胎蓋', price: null, cur: 'TWD', brand: 'URNIETA', kit: 'urnieta_salado', uncertain: true,
    note: '外蓋可向下翻開變成工作檯，兩顆卡扣＋兩支撐桿。3.4kg，JB64 也能裝。官網不標價' },
  { id: 'urnieta_1970', url: 'https://urnieta.com/product/1970-spare-tire-cover-kit-for-jimny-jb74-jc74-jb64/', label: '1970 備胎蓋', price: null, cur: 'TWD', brand: 'URNIETA', kit: 'urnieta_1970', uncertain: true,
    note: 'MOLLE 格帶面板／收納包雙模式。3.4kg，JB64 也能裝。官網不標價' },
  { id: 'beyond_white', url: 'https://shop.beyond-jpn.com/products/bestc-w', refs: ['https://prtimes.jp/main/html/rd/p/000000044.000141928.html'], label: 'スペアタイヤカバー エレガントホワイト', price: 5500, cur: 'JPY', brand: 'Beyond JAPAN', part: 'bestc-w', uncertain: true,
    note: 'ビニールレザー軟套，直接套上（かぶせるだけ），官網寫 JB64／JB74 Sierra／JC74 全等級。定價 ¥5,500（特價 ¥3,850，稅込與否頁面沒寫清楚）；附 BEYOND 貼紙，另有黑色 bestc-b。不是全白：面上黑白直條紋，中間一條白色橫帶印黑色襯線字 BEYOND JAPAN、上下各一道細黑線，白色滾邊。官網沒有尺寸，條紋數與寬度照商品照片估。Beyond 黃色示範車 CODE16（JB64）用的就是這件' },
];

// ── Spare delete and the bare tailgate (docs/jb74-spare-delete.json,
// researched 2026-09-27). The stock bracket bolts to the tailgate with four
// M10 x P1.25 bolts (14 mm); taking it off leaves four threaded holes that go
// straight into the door, so every delete seals them. Nobody publishes the
// hole positions: the 3D bolts sit on the bracket's footprint on this model
// (x +-150, y 820/955) and say so. `xSpan` is how far across the tailgate a
// part reaches (car mm, +X = vehicle left), used by validate() against the
// hinge-side ladders and the plate some rear bars move onto the tailgate.
export const SPARE_DELETES = [
  { id: 'none', label: '保留備胎', price: 0 },
  { id: 'alumania_bolt', url: 'https://shop.alumania.net/?pid=181814237', label: 'BackStyle BOLT 封孔螺栓組', price: 2420, cur: 'JPY', brand: 'alumania', part: 'VSJ-STB01',
    note: '4 顆全切削鋁合金裝飾螺栓＋矽膠墊片，封住備胎架的 4 個 M10 孔；黑／銀／紅／香檳金，附工具。適用 JB64W／JB74W／JC74W。孔位官方未公布，3D 依原廠備胎架位置擺放' },
  { id: 'kproducts_bolt', url: 'https://www.k-products.shop/shopdetail/000000001975/', label: '背門封孔螺栓 M10 P1.25 黑（4 顆）', price: 1672, cur: 'JPY', brand: 'K-PRODUCTS', part: '000000001975',
    note: '不鏽鋼黑塗裝 M10×25，單顆 ¥418 稅込、需 4 顆（本欄為 4 顆合計）；官網列 JB23／33／43／64，JB74 為同規格螺栓。頁面顯示缺貨' },
  { id: 'sunrise_cover', url: 'https://autoparts-sunrise.com/view/item/000000005674', label: '背面タイヤレス 封孔蓋板（鋼琴黑）', price: 8900, cur: 'JPY', brand: 'オートパーツサンライズ', part: '000000005674', uncertain: true, xSpan: [-240, 240],
    note: 'ABS 蓋板用原備胎架孔鎖上，蓋住整塊備胎架座；另有碳纖紋款。尺寸未公布，3D 依備胎架座（約 450×350）繪製' },
  { id: 'autorubys_plate', url: 'https://store.autorubys.com/products/haimen', label: '背面タイヤレス 車牌移位套件（背門中央）', price: 25300, cur: 'JPY', brand: 'Auto Rubys', centrePlate: true, xSpan: [-190, 190],
    note: '免鑽孔，利用備胎架孔把後車牌移到背門中央，附底座、LED 牌照燈與不鏽鋼螺栓；需接線，建議店裝。裝了之後背門中央就被車牌佔住' },
];

/** Panels that cover the bare tailgate below the window. The tailgate below
 *  the glass is y 645-1140 on this model, which is exactly OUTCLASS's
 *  published 495 mm height. `thin` parts lie flat on the skin. */
export const TG_PANELS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'outclass_frp', url: 'https://outclass.ocnk.net/product/1205', label: 'リヤゲートカバー 140 サイズ（FRP 兩件式）', price: 46794, cur: 'JPY', brand: 'アウトクラスカーズ', part: '1205', thin: true, xSpan: [-360, 360],
    note: '720W×495H，左右離背門邊 255／260mm；用原廠備胎架螺栓固定。出貨黑色底漆（另有 Raptor 塗裝）。稅込（未稅 ¥42,540）' },
  { id: 'jaos_np', url: 'https://www.jaos.co.jp/product/B097513NP/3103/', label: 'リヤハッチパネル 未塗裝', price: 37400, cur: 'JPY', brand: 'JAOS', part: 'B097513NP', thin: true, uncertain: true, xSpan: [-590, 590],
    note: 'AES 樹脂 2.1kg，裝回原廠螺栓位置，工時 1.0–1.5h。本體尺寸未公布（包裝 540H×1,280），3D 畫成窗下滿版，未證實。JAOS 註明拆胎後全長改變' },
  { id: 'jaos_cl', url: 'https://www.jaos.co.jp/product/B097513CL/3129/', label: 'リヤハッチパネル 碳纖紋', price: 50600, cur: 'JPY', brand: 'JAOS', part: 'B097513CL', thin: true, uncertain: true, xSpan: [-590, 590],
    note: '同上的碳纖紋版；消光黑塗裝款 B097513MB 同價 ¥50,600' },
  { id: 'klc_l2', url: 'https://www.klc-div.com/heritage/product/exterior/smoothingpanellevel2.html', label: 'スムージングパネル LEVEL II（未塗裝）', price: 41800, cur: 'JPY', brand: 'KLC Heritage', thin: true, uncertain: true, xSpan: [-600, 600],
    note: 'ABS，背門全寬、從窗下到下緣滿版；雙面膠固定、免鑽孔。尺寸未公布，3D 依背門窗下區繪製' },
  { id: 'klc_l2_paint', url: 'https://www.klc-div.com/heritage/product/exterior/smoothingpanellevel2.html', label: 'スムージングパネル LEVEL II（車身色）', price: 74800, cur: 'JPY', brand: 'KLC Heritage', thin: true, uncertain: true, xSpan: [-600, 600],
    note: '同上，原廠色塗裝版；背門看起來像沒有備胎的一整片' },
  { id: 'klc_frp', url: 'http://www.klc-div.com/heritage/product/exterior/smoothingpanel.html', label: 'スムージングパネル（FRP 未塗裝）', price: 33000, cur: 'JPY', brand: 'KLC Heritage', thin: true, uncertain: true, xSpan: [-280, 280],
    note: '螺栓固定、附橡膠墊。尺寸未公布，3D 只蓋住備胎架座一帶（約 560×400），未證實' },
  { id: 'kikaiya', url: 'https://kikaiya.shop/?pid=168861521', label: 'スムージングパネル（碳纖紋）', price: 15390, cur: 'JPY', brand: 'KIKAIYA', part: '168861521', thin: true, uncertain: true, xSpan: [-355, 355],
    note: 'ABS 1.35kg，螺栓固定；另有消光黑。店家標 710×500×80，不確定是本體還是包裝' },
];

/** Bags and boxes on the OUTSIDE of the bare tailgate. The inside MOLLE
 *  panels (APIO 3107-61, TLR, HIGH PEAK) do not need the spare off and are
 *  not visible from outside; they are in the research file only. */
export const TG_BAGS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'cllink_box', url: 'https://www.cllink.jp/view/item/000000000609', label: 'リアゲートボックス（約 39L）', price: 42900, cur: 'JPY', brand: 'C.L.LINK', part: '000000000609', xSpan: [-335, 335],
    note: '670W×360H×215D、PPE 箱＋鋼支架 8.7kg，耐重約 48kg，免工具快拆、附鎖；裝在原備胎位置。外掛軟式書包目前查到的都是 Amazon 無規格品，未收錄' },
];

/** Frames on the outside of the bare tailgate. */
export const TG_FRAMES = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'kikaiya_ladder', url: 'https://kikaiya.shop/?pid=175482602', label: 'テールドアラダー（鋁）', price: 17360, cur: 'JPY', brand: 'KIKAIYA', part: 'JMY-TDL-C', uncertain: true, xSpan: [-175, 175],
    note: '鋁製 2.7kg、耐重 100kg，螺栓固定；要先拆備胎，所以 3D 裝在背門中央的備胎架孔上。店家只給包裝 770×130×135，階數與實際位置未公布' },
  { id: 'pennylane_cargo', url: 'https://pennylane.base.shop/items/48585104', label: 'JB64.74 用 カーゴキャリア（可折）', price: 49500, cur: 'JPY', brand: 'PENNY LANE／PLUS SPORTS', part: '48585104', uncertain: true, xSpan: [-393, 393],
    note: '785×440 鋼製消光黑，可折起；放 RV BOX85、ROTOPAX 之類。耐重與是否含稅未公布；有一篇整理文寫不必拆備胎，本目錄照店家說明畫在空背門上' },
];

// The standard receiver mouth every carrier is built to (y, z car mm): the
// 2" tube about 10 mm under the stock plate (RV4 Wild Goose JM-2112's own
// wording), its mouth behind the plate. A bar with its own receiver moves the
// carrier to that one (REAR_BUMPERS[].receiver).
export const HITCH_STD = [352, -1660];

/** Hitch members. Every Japanese one is class A (500 kg towed, 75 kg on the
 *  ball) except Global Tight's reinforced one (100 kg). Suzuki Japan sells
 *  no hitch and publishes no towing figure for the JB74. */
export const HITCHES = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'wildgoose_jm2112', url: 'https://www.rv4wildgoose.com/parts/towing/hitch_member-towing/jm-2112.html', label: 'ヒッチメンバー（附牽引鉤）', price: 63800, cur: 'JPY', brand: 'RV4 Wild Goose', part: 'JM-2112', needsDelete: false,
    vload: 75, tow: 500, note: '2 吋方管接收座、牽引 500kg／垂直 75kg，960W×205H×225D、9.3kg；用原廠車架孔與拖車鉤，接收管在車牌下方約 10mm，車牌不用移。部分社外排氣管會干涉接收管' },
  { id: 'sunrise_a', url: 'https://autoparts-sunrise.com/view/item/000000000331', label: 'ヒッチメンバー 牽引クラス A（附 D 型環）', price: 32000, cur: 'JPY', brand: 'オートパーツサンライズ', part: '000000000331', needsDelete: false,
    vload: 75, tow: 500, note: '50mm 方管、2 吋球，牽引 500kg／垂直 75kg，JIS 7 極插座；適用 JB64W／JB74W／JC74W' },
  { id: 'globaltight', url: 'https://www.global-tight.com/case/%E3%82%B8%E3%83%A0%E3%83%8B%E3%83%BCjb64%E3%80%81jb74%E7%94%A8%E5%BC%B7%E5%8C%96%E5%9E%8B%E3%83%92%E3%83%83%E3%83%81%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC', label: '強化型ヒッチメンバー', price: 88000, cur: 'JPY', brand: 'グローバルタイト', needsDelete: false,
    vload: 100, tow: 1000, euroBall: true, note: '牽引 1,000kg／垂直 100kg，日本市售 JB74 拖車座裡垂直荷重最高；加大車架接觸面與螺栓數。可選 2 吋球或 50mm 歐規球。含稅與否未標' },
  { id: 'haymanreese', url: 'https://haymanreese.com.au/products/towbar-to-suit-suzuki-jimny-11-2018-on-03289rw', label: 'Towbar 03289RW', price: null, cur: 'AUD', brand: 'Hayman Reese', part: '03289RW', needsDelete: false, uncertain: true,
    vload: 75, tow: 1300, note: '澳洲 Class 4、50mm 方管，外露式免切保桿，23.9kg；牽引 1,300kg／球重 75kg（澳洲 Jimny 額定）。官網不標價' },
];

/** Two-wheeler carriers. The bikes and motorbikes on them are silhouettes
 *  drawn to the maker's published size (Honda's spec pages for the
 *  motorbikes); they are not for sale here. `load` is the demo motorbike's
 *  curb weight from Honda. */
export const CARRIERS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'thule_t2pro', kind: 'bike', url: 'https://www.thule.com/en-us/bike-rack/hitch-bike-racks/thule-t2-pro-xtr-2---2-_-9034xtr', label: 'T2 Pro XTR 2 台平台式（2 吋）＋一台登山車示意', price: 899.95, cur: 'USD', brand: 'Thule', part: '9034XTR',
    weight: 23.6, cap: 54.4, needsDelete: false, hitchDefault: 'wildgoose_jm2112',
    note: '總載重 54.4kg、每台 27.2kg、自重 23.6kg，1372×1092×381mm。裝著備胎也能用（車架在備胎後面），但背門是側開的，載著車就打不開' },
  { id: 'kuat_nv2', kind: 'bike', ebike: true, url: 'https://store.abovebike.com/?pid=122499779', label: 'NV 2.0 2 台平台式（2 吋）＋一台電輔登山車示意', price: 245000, cur: 'JPY', brand: 'Kuat', part: '122499779',
    weight: 23.5, cap: 54, needsDelete: false, hitchDefault: 'wildgoose_jm2112',
    note: '每台 27kg、自重 23.5kg、長約 1,400mm；日本 Above Bike Store 售價' },
  { id: 'thule_easyfold3', kind: 'bike', ebike: true, ball: true, url: 'https://www.thule.com/en-pf/bike-rack/towbar-bike-racks/thule-easyfold-3-2-bike-_-944100', label: 'EasyFold 3 兩台（50mm 拖車球）＋一台電輔車示意', price: null, cur: 'EUR', brand: 'Thule', part: '944100', uncertain: true,
    weight: 18.2, cap: 60, needsDelete: false, hitchDefault: 'globaltight',
    note: '夾在 50mm 歐規拖車球上（不是插方管），1260×700×810、收折 310×700×810，自重 18.2kg、每台 30kg 可載電輔車。官網未標價' },
  { id: 'yakima_spareride', kind: 'spare', url: 'https://shop.auto-proz.com/view/item/000000003901', label: 'SpareRide 2 台（夾在備胎上）＋一台登山車示意', price: 37800, cur: 'JPY', brand: 'YAKIMA', part: '8002599',
    weight: 9.7, cap: 30, needsSpare: true, needsDelete: false,
    note: '夾在背胎上、不用拖車座；總載重 30kg（每台 15kg），自重 9.7kg。拿掉備胎就沒地方裝' },
  { id: 'hillstone_ct125', kind: 'moto', url: 'https://store.shopping.yahoo.co.jp/akaneashop/ee369.html', label: 'バイクキャリア 2 吋＋Honda CT125 Hunter Cub 示意', price: 13380, cur: 'JPY', brand: 'Hill Stone', part: 'ee369',
    weight: 25.5, cap: 220, load: 118, needsDelete: false, hitchDefault: 'globaltight',
    note: '鋼製軌道 1935×170、插管約 850mm（評論說太長、常要裁），載重 220kg、自重 25.5kg。示意車 CT125：1965×805×1085、軸距 1260、車重 118kg（Honda 官網 honda.co.jp/CT125/spec）' },
  { id: 'weimall_monkey', kind: 'moto', url: 'https://weimall.jp/shopdetail/000000003588/', label: 'バイクヒッチキャリア＋Honda Monkey 125 示意', price: 15800, cur: 'JPY', brand: 'WEIMALL', part: '000000003588',
    weight: 24, cap: 220, load: 104, needsDelete: false, hitchDefault: 'globaltight',
    note: '軌道 1920×148、插管 850mm，載重 220kg（標題寫 226kg）、自重 24kg。示意車 Monkey 125：1710×755×1030、軸距 1145、12 吋胎、車重 104kg（Honda 官網）' },
  { id: 'versahaul_supercub', kind: 'moto', url: 'https://versahaul.com/vh50cc.php', label: 'VH-50CC 50cc 速克達架＋Honda Super Cub 50 示意', price: 562.99, cur: 'USD', brand: 'VersaHaul', part: 'VH-50CC',
    weight: 25.4, cap: 113, load: 96, needsDelete: false, hitchDefault: 'globaltight',
    note: '軌道 1575×116、插銷到軌道中心 470mm，載重 113kg、自重 25.4kg（運送重）；日本代理價 ¥132,000；軌道離車尾最近，機車把手比備胎頂還高，裝著備胎也不會碰到。示意車 Super Cub 50：1860×695×1040、車重 96kg（Honda 官網，2025 年 10 月停產）' },
];

// DAMD 套件的長版橡膠擋泥板（前後一組）
export const MUD_FLAPS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'damd_little_d', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-d/', label: 'little D. 長版擋泥板（前後）', price: 42900, cur: 'JPY', brand: 'DAMD', kit: 'little_d',
    note: '橡膠製、偏長，只能配 little D. 後保桿。官網：原廠車高時下緣離地前約 130mm、後約 145mm。saudade 示範車也裝了類似的長擋泥板（不在 saudade 套件內）' },
  { id: 'damd_little_g_trad', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_traditional/', label: 'little G. TRADITIONAL 擋泥板（前後）', price: 42900, cur: 'JPY', brand: 'DAMD', kit: 'little_g_trad',
    note: 'TRADITIONAL 專用，長度設定成升高車也夠用；下半往外張、底緣螺栓壓條，一條細鋼索斜拉定位' },
];

// 車身腰線的側飾條
export const SIDE_MOULDINGS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'damd_little_g', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g/', label: 'little G. 側飾條（不鏽鋼）', price: 30800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_std',
    note: '黑色橡膠條嵌日本製不鏽鋼板、兩端端蓋，前葉子板／車門／後側圍三段，高度約在門把上緣。無塗裝選項' },
  { id: 'damd_little_g_black', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_advance/', label: 'little G. 側飾條（不鏽鋼板烤黑）', price: 30800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_adv', uncertain: true,
    note: '同一件，ADVANCE 頁寫「套件附的不鏽鋼板不是黑色，示範車是另外烤黑」；AVENTURA、TRADITIONAL 示範車看起來也是整條黑。烤黑費用官網沒寫' },
];

/**
 * Outer roll cages. The one thing in here that redraws the car's outline
 * instead of hanging off it -- the roof stops being a plain box and becomes a
 * box inside a frame -- which is why it earns a family of its own.
 */
export const CAGES = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'wildgoose', photo: true, url: 'https://www.rv4wildgoose.com/parts/jimny-64-74/protection_64/jm-2424.html',
    label: '外掛式防滾籠 JM-2424', price: 203500, cur: 'JPY', brand: 'RV4 Wild Goose', part: 'JM-2424',
    note: '主管 38.1×2.3t、中央橫樑 25.4×2.3t，25kg。前端鎖引擎蓋固定點——所以側 cowl 與葉子板都要切——後端鎖車頂雨槽 8 點。廠方寫明「車検対応品として、構造変更無しで使用出来ます」。注意：雙色車與有雨槽飾條的車不適用' },
];

/**
 * Over-fenders laid over (or, for APIO's narrow one, replacing) the Sierra's
 * own resin arches. `widen` is the change in width per side in mm -- the
 * maker's figure where one is published, otherwise measured off the maker's
 * fitted photos (docs/jb74-fender-audit.json), and the entry is then marked
 * uncertain. Seen from the side almost all of them sit on the stock flare's
 * own footprint; what changes is how far they stand out. `replacesStock`
 * hides the stock flares. The kit list (docs/jb74-widebody.json) has the
 * western brands checked too: every one found fits only the old JB23/JB43.
 */
export const FENDERS = [
  { id: 'none', label: '原廠爆龜', price: 0 },
  { id: 'wald_bison', url: 'https://wald.co.jp/carrange/jimnysierra_bb/', label: 'SPORTS LINE BLACK BISON 爆龜', widen: 30,
    price: 234300, cur: 'JPY', brand: 'WALD',
    note: '官網「片側約30mmワイド」。ABS 10 件組 ¥234,300、FRP 8 件組 ¥222,200，皆稅込、素地未塗裝。蓋在原廠爆龜外側；FRP 版官網明寫裝 Jimny 需要加工，ABS 版沒寫。兩版都要配 WALD 自家的前後保桿下擾流才裝得上。側面輪廓幾乎貼著原廠爆龜（上緣同高、帶寬約 135mm，原廠約 145），變大的只有往外 30mm：方正平面、一道凹溝、拱口一圈內捲唇邊，外緣一圈飾螺絲（飾螺絲另售）' },
  { id: 'kuhl_blocker', url: 'https://kuhl-japan.com/ec/aeroparts/20425', label: 'BLOCKER SIERRA 寬體葉子板', widen: 30,
    price: 220000, cur: 'JPY', brand: 'KUHL RACING', uncertain: true,
    note: '¥220,000 稅込（官網「表示価格は全て税込み価格です」），FRP 素地，另有單件烤漆加價。蓋在原廠爆龜外側。兩件疊合：黑色方正殼體（上緣平、比原廠爆龜高約 40mm，上面五片鰭）加一圈沿拱口外露的黑色圓管。加寬量官網未公布：照官方正前照，殼體每側約比原廠外擴 30mm、圓管約 90mm（估計值）；是否要切鈑金官網沒寫' },
  { id: 'lb_gmini', url: 'https://libertywalk.co.jp/bodykit/suzuki-g-mini-type-2/', label: 'G mini 寬體葉子板', widen: 10,
    price: 154000, cur: 'JPY', brand: 'LIBERTY WALK', uncertain: true,
    note: '¥154,000 稅込（官網註明是概算價，正式以業務報價為準），FRP 素地。G mini 前保桿＋水箱罩＋寬體三件式的其中一件，JB64／JB74 車身件通用——裝在 JB74 上等於一層殼套在原廠爆龜外。加寬量官網未公布：照官方正前照量得每側只比原廠多約 10mm（誤差 ±15），輪廓與原廠幾乎相同，外緣一圈飾螺絲' },
  { id: 'aero_over', url: 'https://k-factory.ne.jp/art/g62-jimny3door/', label: 'G62S プラスワイドフェンダー', widen: 35,
    price: null, cur: 'JPY', brand: 'AERO OVER（K-FACTORY）', uncertain: true,
    note: 'JB74 專用的加寬版，官網寫每邊 +35mm、全車寬到 172cm，日本要辦構造變更。不是一片大爆龜，而是 G62S 車身色爆龜外緣再接一圈亮黑窄唇，只能配 G62S 套件。加寬版沒有單獨標價；標準寬度的 G62／G62S 爆龜 4 件組是 ¥120,000 稅抜' },
  { id: 'apio_narrow', url: 'https://apio.jp/parts/3032-20.html', label: 'ABS ナローフェンダー 窄版爆龜（3032-20）', widen: -29, replacesStock: true,
    price: 99000, cur: 'JPY', brand: 'APIO', part: '3032-20',
    note: '¥99,000 稅込，ABS 真空成形、黑色素地，附 30 顆假螺栓頭。換掉原廠爆龜、反過來把車變窄：前每邊縮約 29mm、後約 27mm。官網寫明要配 APIO Tactical 前保桿與 JB64 用 Tactical 後保桿（3032-70），並建議用輕 Jimny 規格的 16×5.5J inset 20 輪框配 6.50R16 或 205R16 胎（原廠 offset 的輪框會凸出爆龜）。日本要辦車寬構造變更' },
  { id: 'klc_fender_garnish', url: 'https://www.klc-div.com/heritage/product/exterior/overfendergarnish/', label: 'オーバーフェンダーガーニッシュ 輪弧飾板', widen: 3,
    price: 77000, cur: 'JPY', brand: 'KLC Heritage',
    note: '¥77,000 稅込，ABS 素地。蓋在原廠爆龜上、出幅幾乎等於原廠（官方：出幅が保安基準に触れることもない），這裡只畫殼厚 3mm。KLC MATURE 示範車烤車身色、拱口一圈槍灰邊，整台看不到黑色塑膠' },
  { id: 'damd_little_g_t1', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g/', label: 'little G. type-1 爆龜＋鋁踏板（車身色）', widen: 5,
    price: 140800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_std', uncertain: true,
    note: '¥140,800 稅込含鋁踏板（踏板在側踏選單），烤漆另加 ¥48,400。寬平的輪眉帶一道凸起階線；只能與 STANDARD 前保桿一起裝（AVENTURA 同）。加寬量官網未公布：官方正前照量得與原廠幾乎同寬（0–5mm，誤差 ±15），側面帶寬約 138mm，跟原廠一樣' },
  { id: 'damd_little_g_t2', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_traditional/', label: 'little G. type-2 爆龜＋鋁踏板（消光黑）', widen: 5,
    price: 162800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_trad', uncertain: true,
    note: '¥162,800 稅込含鋁踏板；斷面方正、兩階（拱口唇邊＋上方平面），可配原廠前後保桿。TRADITIONAL 的塗裝版就是消光黑。加寬量官網未公布：照片量得每側與原廠幾乎同寬（約 5mm），上緣比原廠高 20–40mm' },
  { id: 'damd_little_g_t2_paint', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little-g_advance/', label: 'little G. type-2 爆龜＋鋁踏板（車身色）', widen: 5,
    price: 162800, cur: 'JPY', brand: 'DAMD', kit: 'little_g_adv', uncertain: true,
    note: '同一組 type-2，ADVANCE 示範車烤車身色（烤漆另加 ¥48,400）。加寬量官網未公布，照片量得約 5mm' },
  { id: 'damd_saudade', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_saudade/', label: 'saudade 鼓包爆龜＋側裙飾板 6 件組', widen: 10,
    price: 118800, cur: 'JPY', brand: 'DAMD', kit: 'saudade', uncertain: true,
    note: '前後左右爆龜＋左右サイドシルガーニッシュ共 6 件，¥118,800 稅込，只有未塗裝素地；與 little 5.／Δ 的四件組不是同一件。圓潤鼓包、沒有唇邊或階線，後片末端的導風口是假的。加寬量官網未公布：照片量得每側約 10mm（0–25），側面上緣與原廠同高' },
  { id: 'damd_delta', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_littledelta/', label: 'little 5.／Δ 整片鼓包葉子板 4 件組', widen: 12,
    price: 140800, cur: 'JPY', brand: 'DAMD', uncertain: true,
    note: '¥140,800 稅込（¥128,000 稅抜），ABS 素地，前後左右 4 片，little 5. 與 little Δ 共用。不是輪拱外圈，而是整片鼓起的葉子板：前片從保桿端蓋一路包到車門前緣、後片從車門後緣包到車尾轉角，上緣一道肩線、下緣到門檻。後片尾端朝後的五片百葉導風口是假的。加寬量官網未公布：兩張正前／正後照裡鼓包、保桿端角和輪胎外緣幾乎切齊，以示範車 215/65R16、輪距約 1425 推算每邊只比原廠 1645 多 0–25mm，模型畫 12mm（估計值）' },
];

/**
 * Face kits: the whole front replaced -- grille, headlamps AND bumper -- so
 * choosing one hides all three stock parts and overrides the bumper and
 * grille pickers. The research, with the geometry read off the makers'
 * photographs, is docs/jb74-face-swap.json.
 */
export const FACES = [
  { id: 'none', label: '原廠臉', price: 0 },
  { id: 'bron55', url: 'https://shop.jetgogo.jp/items/69169821', refs: ['https://www.garage-ill.co.jp/bron55/'],
    label: 'BRON55 美式方頭換臉（雙色烤漆完成品）', price: 389400, cur: 'JPY', brand: 'GARAGE ILL',
    note: '水箱罩＋圓形 LED 頭燈組＋前保桿一整組，引擎蓋與葉子板不動。這裡畫的是官方示範車的雙色烤漆完成品 ¥389,400 稅込：水箱罩框與保桿上橫樑車身色、中央模組與下緣銀色。素地未塗裝 ¥297,000（原廠 LED 頭燈車用）／¥264,000（鹵素車用），稅込。適用 JB74W 1〜4 型；2025/11 以後的 5 型是另一個商品（附前方感知器移位套件，LED 車用 ¥330,000）；JB64 版同價但不通用。官方網店註明頭燈自 2024/8/1 起不對應日本車檢的頭燈檢查。官網未公布料號；尺寸是照官方照片估的（±10%）' },
  { id: 'damd_delta', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_littledelta/', label: 'little Δ 四圓燈臉（水箱罩＋前保桿）', price: 266200, cur: 'JPY', brand: 'DAMD', kit: 'little_delta',
    note: '水箱罩 ¥173,800 稅込（ABS 素地，含丸目 4 燈頭燈與 LED 燈泡、丸目小燈、方形方向燈、DAMD 三角徽章）加 little 5.／Δ 共用前保桿 ¥92,400 稅込（含 Koito 黃色方形霧燈），合計 ¥266,200。外框是車身色，裡面一片黑色燈座：外側一對約 140mm（頭燈，賽道照裡較亮的一對）、內側一對約 107mm（小燈），中間 Lancia 式鍍鉻盾形框、V 字上緣接中柱，兩個開口鑲車身色細邊與黑色菱形網；燈座下方黑條上是透明方形方向燈。保桿：上橫樑外凸、下面一排五格黑色進氣槽、兩側進氣口與黃色霧燈、兩端折角處各一道黑色縱縫。原廠頭燈清洗器不能用（附假蓋），官網提醒光度要自行確認過不過車檢；5 型以後有安全輔助的車另購雷達／聲納套件 ¥17,380。尺寸照官方正面照以車牌量（±5–8%）' },
  { id: 'damd_little5', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little5/', label: 'little 5. 方燈臉（水箱罩＋前保桿）', price: 222200, cur: 'JPY', brand: 'DAMD', kit: 'little_5',
    note: '水箱罩 ¥129,800 稅込（ABS 素地，含 Koito 方形 2 燈式鹵素頭燈與 DAMD 菱形徽章）加 little 5.／Δ 共用前保桿 ¥92,400 稅込，合計 ¥222,200。車身色面板，兩顆 Koito 方形頭燈（鏡面約 197×137）各嵌在深灰方形燈座裡、外側一條直立透明燈條，中間黑色 4 列 × 5 格百葉，上方菱形徽章，底緣黑唇上一道車身色細線。保桿畫成紫藍示範車的石板灰（官網說可選車身色或灰色等配色，只列素地價）。原廠頭燈清洗器不能用（附假蓋）。另售角目 2 燈專用 LED 燈泡 ¥26,400。尺寸照官方正面照以頭燈與車牌量（±5–8%）' },
];

/** Roof spoilers, on the roof's rear edge above the tailgate. */
export const SPOILERS = [
  { id: 'none', label: '不裝', price: 0 },
  { id: 'damd_wing', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_littledelta/', label: 'little 5.／Δ FRP 尾翼（36°，Δ 示範車角度）', price: 63800, cur: 'JPY', brand: 'DAMD', kit: 'little_delta',
    note: '¥63,800 稅込（¥58,000 稅抜），套件裡唯一的 FRP 件，素地。角度可自由調整，黑色金屬支架夾在車頂雨槽後角與尾門上緣，不用鑽孔。兩端上翹成後高前低的小鰭。翼展約 1210、弦長約 250，前緣離車頂約 15、後緣與車尾切齊；這項照 little Δ 紅色示範車的 36° 畫。尺寸照官方照片量' },
  { id: 'damd_wing13', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_little5/', label: 'little 5.／Δ FRP 尾翼（13°，little 5. 示範車角度）', price: 63800, cur: 'JPY', brand: 'DAMD', kit: 'little_5',
    note: '與上一項同一件（¥63,800 稅込），只是照 little 5. 紫藍示範車的角度畫：約 13°、後緣只比車頂高約 58mm。兩家頁面的照片翼端形狀看起來不太一樣，官網沒說明是否為不同件，這裡當作同一件不同角度' },
  { id: 'rowen', url: 'https://www.rowen.co.jp/bodykit/details.php?id=115', label: 'Roof Spoiler Electronics TYPE3 鴨尾', price: 117700, cur: 'JPY', brand: 'ROWEN', part: '1K002R30',
    note: '¥117,700 稅込，FRP 素地（單色烤漆 +¥46,200、雙色 +¥66,000）。車頂後緣的短鴨尾，不是架高的尾翼，後斜面內建連動 LED 第三煞車燈。適用 JB74W 1〜4 型；官網寫 LED 過不了日本車檢、要拆線才能驗，安裝需鑽孔。形狀是照官方照片估的，大部分照片是舊款 1K002R20' },
];

/**
 * Side stripes. What actually makes one built JB74 look unlike another is the
 * stripe down its flank, not the bumper -- which is why five styles built out
 * of bumpers and wheels all read the same from ten metres away.
 *
 * These are cut-vinyl sets, not paint, so in Taiwan they need no 變更登記 as
 * long as the car's main colour is unchanged (道路交通安全規則第 23 條 lists
 * 顏色 among the registrable items, but no rule anywhere sets an area
 * threshold -- the widely repeated "over 1/3" comes from a 2016 television
 * interview with a wrap shop, not from any regulation).
 */
export const STRIPES = [
  { id: 'none', label: '不貼', price: 0 },
  { id: 'retro3', photo: true, label: '復古三色腰線', price: 755, cur: 'TWD', brand: '露天賣家（裁切貼）',
    note: '深棕細線＋寬鏽橘＋米色下緣，三條相連，沿門檻上方的折線跑滿側面。日本沙色 JB74 最常見的那一組。台灣露天 NT$350–755 依長度與材質；自己貼得起來，工錢另計' },
  { id: 'stencil', photo: true, label: '軍用車輛標識（模板字＋橋梁載重牌）', price: 629, cur: 'TWD', brand: '露天賣家（裁切貼）', uncertain: true,
    note: '照美軍 TB 43-0209 與陸上自衛隊車輛標識的位置畫：前葉子板兩側車號、四個輪拱上方胎壓「TP 26」（原廠 180kPa）、油箱蓋下「MOGAS」、尾門兩側部隊代碼；前保桿左邊部隊代碼、右邊黃底黑字的橋梁載重圓牌（北約 STANAG 2021，JB74 約 1.4 噸屬第 2 級）與下角「TIE DOWN」（保桿上的字只有原廠保桿與 TANIGUCHI 方管保桿有畫）。消光白模板字，軍綠車上白字對比最高、黑字幾乎看不見。沒有星徽；代碼是虛構的，不是任何真實部隊。價格是台灣露天通用軍風字貼 NT$462–629 的參考，這一整組要請貼紙行照樣裁' },
  { id: 'toolgear', photo: true, label: '原廠工具箱風低位黑帶', price: null, cur: 'JPY', brand: 'SUZUKI', uncertain: true,
    note: '一條約 210mm 的深黑帶壓在車門下折線與門檻之間，下緣一道銀白細邊，車門上半刻意整片留白。原廠示範色是白車，對比最強。官網未單獨標價' },
  { id: 'jaos', photo: true, url: 'https://www.jaos.co.jp/', label: 'JAOS 低位雙線', price: null, cur: 'JPY', brand: 'JAOS', uncertain: true,
    note: '2200×75mm 長條供應、由施工者照車身折線自行修邊。主帶 78mm＋6mm 露車身色＋14mm 細線，位置低到只比門檻飾板高一點。銀或黑兩色，JAOS 橢圓標以鏤空透明 PVC 挖在主帶上' },
  { id: 'damd_center', url: 'https://www.damd.co.jp/products/suzuki/jimny_sierra_littledelta/', label: '車頂中線（DAMD little Δ 示範車式樣）', price: null, cur: 'TWD', brand: '貼膜行裁切', uncertain: true,
    note: '米白 25＋深綠 32＋米白 25mm 緊貼成一條 82mm 的帶（照尾翼上的貼紙量），從擋風玻璃下緣沿中線跑過引擎蓋、翻下引擎蓋前緣；裝了 little Δ 臉會再沿水箱罩上緣往下接到燈座，裝了 DAMD 尾翼會再跨過翼面。車頂從前緣跑到後緣，避開玻璃與尾門。DAMD 寫明這只是示範車的貼紙（センターマークデカール）、套件不含，市面也沒有 Jimny 專用的縱向中線商品，要請貼膜行照這個式樣裁' },
  { id: 'toy4', photo: true, label: '四色橘帶（Toy Factory 式樣）', price: null, cur: 'JPY', brand: 'Toy Factory', uncertain: true,
    note: '淺橘細線＋鮭橘漸層帶＋實色橘＋寬近黑，四條橫跨門把，整組往車尾抬 2.3 度。原版前端四條會一起轉 90 度繞過前葉子板立面，轉角是同心圓角；這裡只畫車側那一段' },
  { id: 'woodgrain', label: '木紋側板貼（woodie 式樣）', price: null, cur: 'TWD', brand: '貼膜行裁切', uncertain: true, refs: ['https://prtimes.jp/main/html/rd/p/000000044.000141928.html'],
    note: '木紋膜貼滿車門與後側圍下半、上下各一道米色細框，高約 245mm，從後輪弧前一路到前輪弧後，壓在門把、鑰匙孔、前葉子板方向燈與油箱蓋下方，全部避開。外型照 Beyond 黃色示範車 CODE16 的木紋側貼（那台是 JB64）；Beyond 官方商店沒有賣這件，也沒找到 JB74 專用的木紋側貼商品，所以尺寸是本頁定的，要請貼膜行照樣裁' },
];

/**
 * Styles: a starting point, not a package.
 *
 * 230 parts across eleven families is a wall to anyone opening this for the
 * first time, so the configurator asks for a STYLE before it asks for
 * anything else. Picking one applies the whole set below at once -- the same
 * mechanism the demo car already used, just visible and with five of them --
 * and every single item stays changeable afterwards. Nothing here is a
 * package you can buy in one box; the Japanese makers' complete kits are
 * real products and live in the parts lists instead.
 *
 * `set` holds only what differs from stock, so a style reads as a list of
 * decisions rather than a dump of state.
 */
export const STYLES = [
  // Each style is pushed apart on the axes that change the SILHOUETTE -- ride
  // height, what is on the roof, how wide the arches are, how big the wheels
  // are -- and only then on the stripe. Five cars that differ by bumper alone
  // all read the same from ten metres away.
  { id: 'jp_retro', label: '日系復古', sw: ['#d8c9a4', '#b4703a', '#1d2224'],
    desc: '米色車身配同色 SJ 水箱罩——整張臉跟車身是同一塊顏色，只剩深棕、鏽橘、米白三色腰線在側面走。黑鋼輪包白字全地形胎，KLC 不鏽鋼雙管前後保桿。車高只到 1.8 米出頭，是街上開的樣子。',
    set: { color: 'ZVG', lift: 'tg60', wheel: 'mrk_retro165', tyre: 't215r16', tread: 'toyo_at3', owl: true, rimFinish: 'BK', stripe: 'retro3', grille: 'klc_sj', frontBumper: 'tube_heritage', rearBumper: 'klc_heritage_rear', mirrors: 'damd', sideStep: 'jst', ladder: 'jst', exhaust: 'hks_legal', sideSkirt: true } },

  { id: 'au_offroad', label: '澳洲越野', sw: ['#63645f', '#1d2224', '#d0621f'],
    desc: '最高最寬的一台：2 吋懸吊＋2 吋車身舉升、31 吋胎配爆龜、絞盤前桿與呼吸管，車頂載架上一排探照燈與 270 度車邊帳。灰色車身讓整圈黑色裝備變成輪廓，照 SHOWA GARAGE 灰色戶外示範車的路線。',
    set: { color: 'ZVL', lift: 'combo100', wheel: 'wildboar', tyre: 't31', tread: 'bfg_km3', rimFinish: 'G', frontBumper: 'wmd_winch', rearBumper: 'hamer_mx208', grille: 'showa_hex', snorkel: 'safari', roofRack: 'arb', arbDeflector: true, arbBoards: true, awning: 'arb_touring_25', awningSide: 'left', sideStep: 'ironman', ladder: 'tube', roofLights: 'kc_pro6', windowGuards: true, guardCan: 'right', shovel: true, extinguisher: 'ladder', flares: true } },

  { id: 'au_jbox', label: '澳洲原廠越野 JBOX', sw: ['#cbd232', '#1d2224', '#c1121c'],
    desc: 'ARB 與 Suzuki 澳洲 2019 年的 Project JBOX：Kinetic 黃車身配黑車頂，所有加裝鋼件都是黑的——ARB 最小的一支 Summit 牛欄帶 WARN 8000 絞盤、欄上一對紅燈罩圓燈、中央紅色軟拖車扣、ARB 岩石滑桿、有管狀側欄的 BASE 平台架，OME 懸吊配黑輪框與泥地胎。黃、黑、紅三色，就是 Suzuki 自家的黃色示範車。ARB 新聞稿說 JBOX 上全是原型件；輪框與輪胎的型號官方沒寫，這裡用黑色五輻與 M/T 胎代替。',
    set: { color: 'ZZB', twoTone: true, lift: 'omr40', wheel: 'bradley', rimFinish: 'MBK', tyre: 't225r16', tread: 'toyo_mt', owl: false,
      frontBumper: 'arb_summit', grilleLight: 'arb_ar21_red', roofRack: 'arb', arbRailSide: true, sideStep: 'arb' } },

  { id: 'city', label: '都會輕改', sw: ['#0f74a8', '#3a3d42', '#1b1d1f'],
    desc: '往下走的乾淨路線：KLC TURTLES 彈簧放低約 5 公分，純藍車身，輪弧飾板烤成車身色、只留拱口一圈槍灰邊；Grand Wagoneer 式 #GD 縱格罩把圓燈框進方形燈座，16×8J 深碟黑鐵圈配 215/65R16 公路胎。整台幾乎看不到黑色塑膠，車頂空的。照 KLC Heritage 的 JB74W 示範車 MATURE（示範車是白邊胎，本頁還畫不出白邊；純藍是日規色）。',
    set: { color: 'ZWY', twoTone: false, lift: 'klc_turtles', wheel: 'klc_daytonas_deep', rimFinish: 'SGB', tyre: 't215r65', tread: 'bs_alenza001', owl: false, grille: 'klc_gd', frontBumper: 'klc_short', fender: 'klc_fender_garnish' } },

  { id: 'military', label: '軍風', sw: ['#444a3a', '#dedbd0', '#d9a21e'],
    desc: '原廠軍綠，照美軍與陸自的車輛標識規則貼消光白模板字：前葉子板車號、輪拱上方胎壓、油箱蓋下油種、尾門部隊代碼，前保桿一邊部隊代碼、一邊黃色橋梁載重圓牌。原廠 15 吋黑鋼圈包黑字泥地胎，APIO SJ 槍灰罩、TANIGUCHI 方管前桿與管式後桿、平台車頂架，側窗鐵窗上掛油桶、斧頭與鏟子。',
    set: { color: 'ZZC', lift: 'td40', wheel: 'oemsteel', tyre: 't215r15', tread: 'bs_mt674', owl: false, rimFinish: 'BK', stripe: 'stencil', grille: 'apio_sj', frontBumper: 'taniguchi_square', rearBumper: 'taniguchi_rear_pipe', roofRack: 'platform', windowGuards: true, guardCan: 'right', guardAxe: 'right', guardBoard: 'left', shovel: true, extinguisher: 'left', spareBag: true } },

  { id: 'street_low', label: '都會寬體低趴', sw: ['#16191c', '#6b5438', '#b8bcc0'],
    desc: '往下走的寬體路線：降低彈簧配 RAYS 18 吋青銅鍛造框與 55 系列公路胎，WALD 爆龜每邊再寬 30mm，輪拱被輪框而不是被胎填滿，車頂完全空的。黑車身、黑 G 臉，只讓青銅框發亮。',
    set: { color: 'ZJ3', lift: 'klc_turtles', wheel: 'street18', tyre: 't225r55', tread: 'toyo_ht2', fender: 'wald_bison', rimFinish: 'BR', grille: 'outclass_g', frontBumper: 'jaos_cowl', rearBumper: 'jaos_rear_cowl', exhaust: 'kakimoto_kr_lr', sideSkirt: true } },

  { id: 'narrow', label: '窄胎高瘦', sw: ['#cbd232', '#f2f2ee', '#16191c'],
    desc: '把原廠寬爆龜換成 APIO 窄版、每邊反而縮 27–29mm，再用輕 Jimny 規格 16×5.5J +20 的白色鐵圈風輪框包 6.50R16 高窄泥地胎、升高 40mm——胎壁又高又瘦，一眼就看得出是窄胎。純黃車身配同色 ROOTS 水箱罩、黑色 Tactical 前後保桿。照 APIO NARROW SIERRA 示範車的組合（示範車是白車配黑框，黃車白框是本頁的配色）；日本要辦車寬構造變更，純黃是日規色。',
    set: { color: 'ZZB', twoTone: false, lift: 'apio40', fender: 'apio_narrow', wheel: 'apio_ventura16', rimFinish: 'W', tyre: 't650r16', tread: 'yk_g003', owl: false, grille: 'damd_roots', frontBumper: 'apio_tactical_front', rearBumper: 'apio_tactical_rear64', sideStep: 'apio_guard' } },

  { id: 'cal_twotone', label: '加州雙色', sw: ['#e9dcc0', '#d0621f', '#d0d3d6'],
    desc: '上米白、下復古橘，連輪弧一起烤成下半的顏色，黑色塑膠件全消失；水箱罩用 KLC 七孔黑框配銀色鋁網（整片烤色的罩在分色線以下會變成橘色，原廠示範車用的 Su11 目錄還沒收）；前後鏡面不鏽鋼保桿配鍍鉻月亮盤。照 Beyond CODE01 的配色。',
    set: { color: 'ZVG', split: 'orange', paintFlares: true, lift: 'klc30', wheel: 'super_moon', rimFinish: 'smch', tyre: 't215r16', tread: 'bfg_ko2', owl: true, frontBumper: 'beyond_liberte_mirror', rearBumper: 'beyond_rear_mirror', grille: 'klc_nanaketsu' } },

  { id: 'grey_purple', label: '灰紫時裝', sw: ['#8e8f8c', '#6a3a98', '#b8bcc0'],
    desc: '上灰、下紫（連輪弧），鏡面管桿、銀色復古鋁圈配泥地胎，水箱罩後面透出銀網——有點街頭時裝的味道。照 Beyond CODE20 的配色，紫色是改色膜。',
    set: { color: 'ZVL', split: 'purple', paintFlares: true, lift: 'td40', wheel: 'mrk_retro165', rimFinish: 'WH', tyre: 't225r16', tread: 'toyo_mt', frontBumper: 'beyond_liberte_mirror', rearBumper: 'beyond_rear_mirror', grille: 'klc_nanaketsu' } },

  { id: 'sunset_ja', label: '夕陽 JA11', sw: ['#f2f3f0', '#e0662a', '#1d2224'],
    desc: '白車配一整道橘紅棕漸層寬條紋，黑管桿、黑鋼圈，水箱罩上四顆琥珀燈——向 90 年代 JA11 致敬。照 Beyond CODE26。',
    set: { color: 'ZVR', stripe: 'toy4', lift: 'klc30', wheel: 'dean_cross', rimFinish: 'MBK', tyre: 't215r16', tread: 'toyo_rt', owl: false, frontBumper: 'beyond_liberte', rearBumper: 'beyond_rear', grille: 'apio_marker' } },

  { id: 'cream_hw', label: '奶油硬件', sw: ['#444a3a', '#e9e1cc', '#f3c21c'],
    desc: '軍綠車身，所有粗件——前後管桿、籃式車頂架、鋼圈、水箱罩圓燈框——都是奶油白，大燈貼黃色罩。車頂有架子，但看起來是配色不是裝備。照 Beyond CODE13 與 KLC CAL 示範車。',
    set: { color: 'ZZC', wheel: 'wildboar_sr', rimFinish: 'W', tyre: 't215r16', tread: 'toyo_at3', owl: true, frontBumper: 'klc_trad', rearBumper: 'beyond_rear_ivory', roofRack: 'basket', rackPaint: 'ivory', lampCover: 'beyond_yellow', grille: 'klc_forty' } },

  { id: 'camp', label: '露營', sw: ['#cbd232', '#16191c', '#7a6242'],
    desc: '黃黑雙色配整套上下車的東西：車頂架、車邊帳、側踏與尾梯，ARMANDO 鋼製前保桿、Wild Goose 角管後保桿、深灰金屬色水箱罩，消光古銅輪框。胎走安靜的全地形，長途不吵。',
    set: { color: 'ZZB', twoTone: true, lift: 'td60', wheel: 'xj07', tyre: 't225r16', tread: 'toyo_at3', rimFinish: 'MBBR', stripe: 'none', grille: 'taniguchi_washer', frontBumper: 'armando', rearBumper: 'wildgoose_box_rear', roofRack: 'pioneer', awning: 'yakima_270s', awningSide: 'left', sideStep: 'jst', ladder: 'jst', spareCover: true, extinguisher: 'ladder', flares: true } },

  { id: 'woodie', label: '木紋旅行車', sw: ['#16191c', '#8a5a32', '#d0d3d6'],
    desc: '黑車身配原木車頂籃、鍍鉻月亮盤與白字胎，前後保桿留原廠，只在前面加一支鏡面管。整台只有黑、木、鉻三種材質——Grand Wagoneer 式的 woodie。照 Beyond CODE14 與 DAMD little B. 的木紋路線。',
    set: { color: 'ZJ3', lift: 'klc30', wheel: 'super_moon', rimFinish: 'smch', tyre: 't215r16', tread: 'toyo_at3', owl: true, grille: 'klc_nanaketsu', roofRack: 'wood_full', mirrors: 'damd' } },

  { id: 'lc40', label: 'LC40 紅白', sw: ['#c81b22', '#f0f0ec', '#16191c'],
    desc: '紅色改色膜車身配 KLC Forty 圓眼水箱罩——外框跟車身同紅、燈圈白——白色 RS Watanabe 八輻圈包白字泥地胎，黑色雙管前桿。Land Cruiser 40 的紅白配色，車身紅是 3M 膜不是原廠色。',
    set: { color: '2080-G13', lift: 'jaos40', wheel: 'watanabe_f8', rimFinish: 'WH', tyre: 't225r16', tread: 'toyo_mt', owl: true, grille: 'klc_forty', frontBumper: 'taniguchi_double', rearBumper: 'showa_iron_rear', sideStep: 'wildgoose_fold' } },

  { id: 'yellow_vintage', label: '黃色復古鐵件', sw: ['#cbd232', '#16191c', '#8c5a31'],
    desc: '原廠螢光黃黑頂，換 APIO ヴィンテージアイアングリル鋼板復古罩、中間橫肋貼鈴木原廠的 Jimny 草寫鍍鉻字標，側面一片米框木紋側板貼；白色 WILDBOAR SR+ 鋼圈風輪框配 Geolandar X-AT 215/70R16，APIO 小升高。照 APIO 官網 TS3「湘南 Edition」交車實例（頁面寫明キネティックイエロー黑頂、「筆記体エンブレム付き」的罩；輪框顏色頁面沒寫，這裡用白）；木紋側貼是本頁加的，照 Beyond CODE16 的路線。',
    set: { color: 'ZZB', twoTone: true, lift: 'apio20', grille: 'apio_vintage_iron', stripe: 'woodgrain', wheel: 'wildboar_srplus', rimFinish: 'W',
      tyre: 't215r16', tread: 'yk_xat', owl: false } },

  { id: 'black_chrome', label: '黑色鍍鉻西海岸', sw: ['#16191c', '#d0d3d6', '#f2f2ee'],
    desc: '全黑車身配一身反光：Beyond Liberte 鏡面不鏽鋼前後保桿、鈴木原廠鍍鉻後照鏡蓋、KLC FORTY 圓眼罩配鍍鉻燈圈（KLC 只有白或亮黑內圈，鍍鉻是本頁配色）、鍍鉻 SUPER MOON 月亮盤、白字 Open Country R/T，尾門掛 Beyond 白色備胎套。黑底讓每一塊鉻件都跳出來。外型參考 Beyond 示範車 CODE16 與 Lion Heart／RiSE 的鍍鉻車——兩台都是 JB64 而且是黃車，這裡換成 JB74 版零件、改成黑色，是外型參考不是實車複製。',
    set: { color: 'ZJ3', twoTone: false, frontBumper: 'beyond_liberte_mirror', rearBumper: 'beyond_rear_mirror', grille: 'klc_forty_chrome',
      mirrors: 'suzuki_chrome', spareCoverKit: 'beyond_white',
      wheel: 'super_moon', rimFinish: 'smch', tyre: 't215r65', tread: 'toyo_rt', owl: true } }

];

