// Catalogue text in English, keyed by parts.js list name then entry key
// (id / code / key; SIMPLE by its object key). Fields mirror the zh-TW ones in
// parts.js: label, note, desc, demoNote, name, kind, inch, brand, brands, part,
// finishes.{finishId} (wheel finish names), options.{optionId} (SIMPLE options).
// Only fields whose zh-TW text has CJK are here; everything else is language-neutral.
// Coverage is checked by i18n/test.mjs. Read through i18n.js tx(), not directly.
export default {
 "ARB_RACK_ACC": {
  "arbDeflector": {
   "label": "Wind deflector, Universal 51 in",
   "note": "2.0mm pressed aluminium, powder-coated, hangs under the rack's front edge on an M8 stud plate under the front beam to cut wind noise. ARB's fitting instructions list 17900090 for the 1770020 rack size; the 17950020 in older data is the Jeep JL-specific part and has been corrected here. US store price excl. tax"
  },
  "arbRailFront": {
   "label": "Front 3/4 guard rail",
   "note": "A front cross rail plus sides running three quarters of the length, open at the rear (ARB: designed for rear-folding rooftop tents); cast-aluminium corners and upright clamps lock into the rack frame's dovetail slots with Torx M6 / M8 fasteners. ARB does not publish the rail height or section; drawn at about 130mm above the deck from official photos. US store price excl. tax"
  },
  "arbRailSide": {
   "label": "Side guard rails (left/right pair)",
   "note": "Trade Rail 61 in, US$292 each, counted here as a pair; each has three cast-aluminium upright clamps and end caps. ARB offers no combination of the front 3/4 rail with side rails; for a full surround choose the full guard rail. Height estimated from photos"
  },
  "arbRailFull": {
   "label": "Full guard rail 61×51 in",
   "note": "A full surround: cast-aluminium corners, two upright clamps front and rear and three each side. This is the full rail for the 1545×1285 rack (1780180 is for the 49 in rack). With a rail fitted, the roof lights bolt to the rail's front cross bar instead. Height estimated from photos. US store price excl. tax"
  },
  "arbLights": {
   "label": "Rack lighting kit (light bar + three work lights)",
   "note": "Slimline light bar 954×34×67mm, 3.07kg, 130W (ARB manual), clamped to the front beam's dovetail slot with the supplied brackets and standing ahead of the rack; three 71×56mm auxiliary lights clamp to the rear beam as work lights. Includes two looms and switches. US store price excl. tax"
  },
  "arbJerry": {
   "label": "Double jerry can holder (horizontal)",
   "note": "Powder-coated steel frame clamped across two crossbars (35mm aluminium clamps, forged eye nuts); two 20L cans lie flat one behind the other, held by a ratchet strap running over both from the eye nuts at each end. Frame dimensions not published by the maker; cans drawn at the common NATO 20L size of 470×345×165mm. Price is for the holder only (Australian site, incl. GST); two full cans weigh about 40kg, already over the JB74 roof's 30kg dynamic load"
  },
  "arbGas": {
   "label": "Gas bottle holder",
   "note": "Two adjustable stainless cradles, cam-buckle straps, 35mm clamps with forged eye nuts; ARB: up to a 9kg gas bottle, 20kg total. The bottle lies across the front of the rack; the roughly 310mm diameter is the common size of a 9kg bottle, not an ARB figure. Price is for the holder only; bottle sold separately"
  },
  "arbBoards": {
   "label": "Recovery board mount + two MAXTRAX",
   "note": "Four 40mm clamps and a cradle plate on the crossbars; the boards are held by MAXTRAX's own long mounting pins (40mm thread, locks with a 90-degree turn, padlockable). MAXTRAX MKII official size 1150×330×85mm, 3.4kg each, 95mm for two stacked. Price is for the mount only; MAXTRAX and pins sold separately"
  },
  "arbJack": {
   "label": "Hi-Lift jack holder (premium)",
   "note": "Cradle plus clamp at two points, padlockable, two 100mm clamps. Drawn with a Hi-Lift HL-485 48 in (maker: 1289 long, 127 wide, 245mm deep, 12.77kg) lying fore-and-aft on the right of the rack, handle stowed along the bar. Price is for the holder only; jack sold separately"
  },
  "arbShovel": {
   "label": "Shovel holder",
   "note": "Two brackets each on a 60mm clamp in the dovetail slot along the rack's right outer edge, quick-release handle clamps (for 32–42mm handles) with captive locking knobs, takes a long shackle lock. The shovel hangs outside the rack, blade forward. ARB specifies no shovel; drawn with an ordinary long-handled D-grip shovel, sold separately. With this fitted, the separate \"roof rack shovel\" option is not drawn"
  }
 },
 "AWNINGS": {
  "none": {
   "label": "None"
  },
  "yakima_s": {
   "label": "OverNOut S side awning 2×2.5m",
   "note": "Soft bag 2100 long, 10kg (Yakima Taiwan site); Yakima Taiwan price"
  },
  "yakima_l": {
   "label": "OverNOut L side awning 2.5×2.5m",
   "note": "The Taiwan site says 300×250cm, 12kg, while the US listing with the same code 8007446 says 8×8 ft, 15.4kg; the two do not match, so it is drawn at the 2.5×2.5m in the product name"
  },
  "yakima_270": {
   "label": "OverNOut 270 batwing awning",
   "note": "2286×216×254, pivots at the rear, four self-supporting arms; left = driver's side"
  },
  "yakima_270s": {
   "label": "OverNOut 270 batwing awning 1.8m",
   "note": "Short 270° version, about 1850×216×254 packed; mounted above the roof rack's side edge (an owner's actual build)"
  },
  "yakima_180": {
   "label": "OverNOut 180 side awning",
   "note": "2260×229×178, 8.7m², three arms"
  },
  "rhino_compact": {
   "label": "Batwing Compact awning",
   "note": "2000 long, 6m², 18kg; price from Hei Si Qu (Taiwan)"
  },
  "rhino_270": {
   "label": "Batwing 270 awning",
   "note": "2500 long, 10m², 20.5kg"
  },
  "allblack_270": {
   "label": "ALL BLACK 270° side awning gen3",
   "note": "2m / 2.5m sizes, left or right opening; LED strip included",
   "brand": "Hei Si Qu (Taiwan)"
  },
  "arb_touring_2": {
   "label": "Touring awning 2000×2500 LED",
   "note": "PVC soft bag about 2200 long, 12.9kg; Australian site AUD 419 (incl. GST)"
  },
  "arb_touring_25": {
   "label": "Touring awning 2500×2500 LED",
   "note": "About 2700 long, 14.3kg"
  },
  "arb_alu": {
   "label": "Aluminium-cased awning 2500×2500",
   "note": "Rectangular aluminium case with an outward-opening lid, 17.8kg"
  },
  "darche_270": {
   "label": "Eclipse 270 G2 side awning",
   "note": "11.5m², 1000D PVC, aluminium pivot at the rear"
  },
  "darche_slim": {
   "label": "Eclipse Slimline side awning",
   "note": "820D soft bag, 14kg"
  },
  "ikamper": {
   "label": "ExoShell 270 hard-shell awning",
   "note": "2630×180×184 hard aluminium case, 11.2m², 30kg; deployed 4990 along the car, 3900 outward",
   "part": "MB011-005 (driver side) / MB011-002 (passenger side)"
  }
 },
 "BODY_LIFTS": {
  "none": {
   "label": "None"
  },
  "bl25": {
   "label": "25mm body lift kit",
   "note": "Raises the body itself, so it genuinely adds wheel-arch room without cutting. The standard pairing for 31-inch tyres"
  }
 },
 "CAGES": {
  "none": {
   "label": "None"
  },
  "wildgoose": {
   "label": "External roll cage JM-2424",
   "note": "Main tubes 38.1×2.3t, centre crossbar 25.4×2.3t, 25kg. The front bolts to the bonnet mounting points, so the side cowls and wings must be cut; the rear bolts to the roof gutters at 8 points. The maker states \"as an inspection-compliant product, it can be used without structural-change registration\". Note: not for two-tone cars or cars with roof gutter trim"
  }
 },
 "CAMP_EXTRAS": {
  "none": {
   "label": "None"
  },
  "lxmode_jim817": {
   "label": "Car Living pop-up tent at the tail",
   "note": "¥60,500 incl. tax, JB74W-specific. Stands on the ground behind the car and connects to the body; 2000×2000mm, 2250 high (2450 at the centre) mm, packs to Φ900×100mm, about 8kg. How it connects to the JB74's side-hinged tailgate is not stated by the maker"
  },
  "suzuki_tarp": {
   "label": "Genuine 70 car tarp (side awning)",
   "note": "¥45,100 incl. tax, about 250×250cm, 220cm high, 2.5kg. One side hangs from the roof edge on two suction hooks, the other stands on two aluminium poles; no roof rack needed, engine must be off while in use",
   "brand": "SUZUKI (made by ogawa)",
   "part": "ACAZ (99243-77R02)"
  }
 },
 "CARRIERS": {
  "none": {
   "label": "None"
  },
  "thule_t2pro": {
   "label": "T2 Pro XTR 2-bike platform (2-inch) + mountain bike shown",
   "note": "Total load 54.4kg, 27.2kg per bike, own weight 23.6kg, 1372×1092×381mm. Works with the spare tyre fitted (the rack sits behind it), but the back door is side-hinged and cannot open with bikes loaded"
  },
  "kuat_nv2": {
   "label": "NV 2.0 2-bike platform (2-inch) + e-MTB shown",
   "note": "27kg per bike, own weight 23.5kg, about 1,400mm long; price from Above Bike Store in Japan"
  },
  "thule_easyfold3": {
   "label": "EasyFold 3, two bikes (50mm tow ball) + e-bike shown",
   "note": "Clamps onto a 50mm European tow ball (not a square receiver), 1260×700×810, folded 310×700×810, own weight 18.2kg, 30kg per bike so it takes e-bikes. No price on the maker's site"
  },
  "yakima_spareride": {
   "label": "SpareRide, 2 bikes (clamps to the spare tyre) + mountain bike shown",
   "note": "Clamps onto the spare tyre, no hitch needed; total load 30kg (15kg per bike), own weight 9.7kg. Nowhere to mount it once the spare is removed"
  },
  "hillstone_ct125": {
   "label": "Bike carrier, 2-inch + Honda CT125 Hunter Cub shown",
   "note": "Steel rail 1935×170, insert tube about 850mm (reviews say too long and often cut down), load 220kg, own weight 25.5kg. Shown bike CT125: 1965×805×1085, wheelbase 1260, weight 118kg (Honda official, honda.co.jp/CT125/spec)"
  },
  "weimall_monkey": {
   "label": "Bike hitch carrier + Honda Monkey 125 shown",
   "note": "Rail 1920×148, insert tube 850mm, load 220kg (the listing title says 226kg), own weight 24kg. Shown bike Monkey 125: 1710×755×1030, wheelbase 1145, 12-inch tyres, weight 104kg (Honda official)"
  },
  "versahaul_supercub": {
   "label": "VH-50CC 50cc scooter carrier + Honda Super Cub 50 shown",
   "note": "Rail 1575×116, pin to rail centre 470mm, load 113kg, own weight 25.4kg (shipping weight); Japanese distributor price ¥132,000. The rail sits closest to the tail, and the handlebars stand higher than the top of the spare, so it clears a fitted spare tyre. Shown bike Super Cub 50: 1860×695×1040, weight 96kg (Honda official; production ended 2025-10)"
  }
 },
 "COLORS": {
  "ZJ3": {
   "name": "Black (Bluish Black Pearl 3)",
   "note": "Added in Taiwan only in 2022; a deep blue-toned pearl black"
  },
  "ZVL": {
   "name": "Grey (Medium Gray)",
   "note": "A solid grey sold continuously in Taiwan since 2019"
  },
  "ZVR": {
   "name": "White (Pure White Pearl)",
   "note": "Suzuki Taiwan only says \"white\" with no code; pearl white ZVR and solid white 26U are almost identical in hue"
  },
  "ZZC": {
   "name": "Army green (Jungle Green)",
   "note": "Sold continuously in Taiwan since 2019"
  },
  "ZVG": {
   "name": "Beige (Chiffon Ivory Metallic)",
   "note": "Sold as a single colour only from 2025; with the two-tone roof on it is Taiwan's \"beige-black\""
  },
  "ZZB": {
   "name": "Yellow (Kinetic Yellow)",
   "note": "Taiwan only gets the two-tone \"yellow-black\"; solid yellow is Japan-spec only"
  },
  "ZWY": {
   "name": "Blue (Brisk Blue Metallic)",
   "note": "Taiwan only gets the two-tone \"blue-black\"; sales paused 2022–2024"
  },
  "Z2S": {
   "name": "Silver (Silky Silver Metallic)",
   "note": "Available in Japan throughout; never introduced in Taiwan"
  },
  "2080-G13": {
   "name": "Red (3M 2080 Gloss Hot Rod Red wrap film)",
   "note": "Not a factory colour. The JB74 has no factory red in Japan, Taiwan, Australia or the UK; only the five-door JC74 gets Sizzling Red. This is 3M wrap film 2080-G13; Taiwanese wrap shops quote about NT$115,000 for 3M film on an SUV-size car (not a Jimny-specific quote, may be lower for a small car). The colour is estimated from product photos; 3M publishes no colour code"
  },
  "DAMD-L5": {
   "name": "Violet blue (DAMD little 5. demo car colour, not factory)",
   "note": "Not a factory colour. DAMD publishes no colour code and does not say whether it is paint or wrap; the colour is a deep violet blue sampled from the studio side shot on DAMD's official site (reads purple under studio lights). The JB74 factory blue, Brisk Blue ZWY, is a lighter cyan blue, not this colour"
  }
 },
 "EXHAUSTS": {
  "stock": {
   "label": "Stock",
   "note": "Exits on the right, the tip almost flush with the bumper and barely visible from outside"
  },
  "tw_tip": {
   "label": "Decorative tail tip (slip-on)",
   "note": "Slips over the stock pipe and extends it 50–80mm rearward; nothing underneath changes. The most common JB74 mod in Taiwan",
   "brand": "Taiwan aftermarket"
  },
  "fujitsubo_ak": {
   "note": "φ70 tip slash-cut at 21°, 320mm ground clearance, the most discreet system in the stock position; the stock mud flap must be removed or trimmed. Burnt-colour tip option available"
  },
  "monster_sp_x": {
   "note": "φ76.3 slash-cut rolled tip, 3.6kg bullet silencer, stock right-hand position with no bumper trimming"
  },
  "jaos_zs": {
   "note": "φ101 round tip (the largest single outlet in the list) with BATTLEZ lettering; the bumper needs partial trimming. Fits JB74 2018.07–2025.11; the type 5 after 2025.11 cannot take it. About NT$22,000 at MyRack in Taiwan — the real system easiest to buy in Taiwan"
  },
  "kakimoto_kr_lr": {
   "label": "Class KR left/right exit",
   "note": "φ96 dual outlets, one under each lower corner of the bumper — the most striking set from straight behind; no fat silencer, a flat resonator box instead",
   "brand": "Kakimoto Racing"
  },
  "apio_yoshimura_ti": {
   "label": "Totsugeki R-77J titanium silencer",
   "note": "The point is the silencer itself: a hand-made heat-blued titanium silencer, the most recognisable in the list. APIO's spec: main pipe about φ50.8mm (partly φ42.7mm), outlet OD about φ68mm, about 4.2kg; the \"550×115mm\" in the old catalogue has no basis on the maker's site and was removed. Fits JB74 types 1–4 with the stock bumper (MT / AT); type 5 not supported. The same spec in titanium grey, 2004-7TX, is about ¥14,300 cheaper (¥348,700)"
  },
  "taniguchi_compe_r": {
   "note": "TANIGUCHI's price notice confirms ¥102,300 incl. tax (for shipments from 2026/2/2), but the product page loads by JavaScript and its spec text cannot be retrieved — \"the tip exits sideways from the right rear corner, about 560mm off the ground\" and \"the stock bumper must be cut\" cannot be found on any first-hand page of the maker, so both are marked unverified for now; ask the shop for a spec sheet before listing."
  },
  "hks_legal": {
   "note": "φ74.7 single outlet, polished SUS304, exits at the right rear (same side and position as stock), about 45mm past the bumper. The silencer weighs only 4.0kg and sits above the rear axle, nearly invisible from the side; close-proximity noise 83dB (stock 81), no bumper cutting. The only HKS Jimny exhaust with an official Taiwan-import list price; Japan ¥49,500. An owner's actual build"
  },
  "hks_legal_ti": {
   "label": "LEGAL Muffler K-1 (burnt titanium tip)",
   "note": "The same K-1 with a burnt-titanium tail tip; Japan ¥71,500"
  },
  "urnieta_salado": {
   "label": "SALADO quad-exit exhaust",
   "note": "Genuinely four pipes: one central silencer splits in two, with two Ø80 tips each side (279 / 368mm from the centreline, 89mm apart on the same side so almost touching, sharing one square shroud), all facing rearward. Electronic valve + wireless remote, a mid/rear cat-back, no bumper cutting — the SALADO rear bumper is half-height and leaves this area exposed anyway. Dimensions from the maker drawing UN-JIMNY-FB-010"
  },
  "hks_trailmaster": {
   "note": "Side-exit dual φ75×2, the rear bumper untouched; the maker's site only says \"side-exit dual muffler\" and states neither which side it exits on nor that the tips are burnt titanium, so neither should be fixed here. Body S304 stainless, 9.0kg, 210mm ground clearance as fitted, close-proximity noise 88dB (stock 81dB, the loudest in the list). JB74W part number 32018-AS006; JB64W is a different part, 31021-AS004 — check the model when ordering."
  }
 },
 "EXTINGUISHERS": {
  "none": {
   "label": "None"
  },
  "ladder": {
   "label": "On the rear ladder",
   "note": "A double-ring bracket for round tube; an owner's actual build. No JB74 ladder-specific bracket exists on the market",
   "brand": "Double-ring quick-release"
  },
  "left": {
   "label": "Left window guard",
   "note": "The guard panel carries only 2–5kg, so only a 1kg bottle strapped upright",
   "brand": "MOLLE panel"
  },
  "right": {
   "label": "Right window guard",
   "note": "Same as the left side",
   "brand": "MOLLE panel"
  }
 },
 "FACES": {
  "none": {
   "label": "Stock face"
  },
  "bron55": {
   "label": "BRON55 American square-nose face swap (two-tone painted)",
   "note": "Grille, round LED headlamp set and front bumper as one set; bonnet and wings are untouched. Drawn here is the two-tone painted version from the maker's demo car, ¥389,400 incl. tax: grille frame and bumper top bar in body colour, centre module and lower edge in silver. Unpainted ¥297,000 (for cars with stock LED headlamps) / ¥264,000 (halogen), incl. tax. Fits JB74W Types 1〜4; the Type 5 from 2025/11 on is a separate product (with front sensor relocation kit, LED cars ¥330,000); the JB64 version costs the same but does not interchange. The maker's web shop states that from 2024/8/1 the headlamps do not meet Japan's road-inspection headlamp test. Part number not published; dimensions estimated from the maker's photos (±10%)"
  },
  "damd_delta": {
   "label": "little Δ quad-round-lamp face (grille + front bumper)",
   "note": "Grille ¥173,800 incl. tax (unpainted ABS, with 4 round headlamps and LED bulbs, round position lamps, square indicators and DAMD triangle badge) plus the front bumper shared by little 5. / Δ, ¥92,400 incl. tax (with Koito yellow square fog lamps); total ¥266,200. The outer frame is body colour with a black lamp panel inside: an outer pair of about 140mm (headlamps, the brighter pair in track photos) and an inner pair of about 107mm (position lamps), a Lancia-style chrome shield frame in the middle whose V-shaped top meets the centre bar, the two openings edged in thin body colour and filled with black diamond mesh; clear square indicators sit on the black strip below the lamp panel. Bumper: a top bar that bulges outward, a row of five black intake slots below, side intakes with the yellow fog lamps, and a black vertical seam at each folded corner. The stock headlamp washers cannot be used (blanking caps supplied), and the maker warns that owners must confirm headlamp output passes road inspection themselves; Type 5 and later cars with safety assist need the separate radar/sonar kit, ¥17,380. Dimensions measured off the maker's front photo against the number plate (±5–8%)"
  },
  "damd_little5": {
   "label": "little 5. square-lamp face (grille + front bumper)",
   "note": "Grille ¥129,800 incl. tax (unpainted ABS, with Koito square 2-lamp halogen headlamps and DAMD diamond badge) plus the front bumper shared by little 5. / Δ, ¥92,400 incl. tax; total ¥222,200. A body-colour panel with two Koito square headlamps (reflector about 197×137), each set in a dark grey square housing with an upright clear lamp strip outboard, black louvres of 4 rows × 5 slots in the middle, the diamond badge above, and a thin body-colour line along the black bottom lip. Bumper drawn in the slate grey of the purple-blue demo car (the maker says body colour, grey and other finishes can be chosen, but lists only the unpainted price). The stock headlamp washers cannot be used (blanking caps supplied). LED bulbs specific to the square 2-lamp setup are sold separately, ¥26,400. Dimensions measured off the maker's front photo against the headlamps and number plate (±5–8%)"
  }
 },
 "FENDERS": {
  "none": {
   "label": "Stock over-fenders"
  },
  "wald_bison": {
   "label": "SPORTS LINE BLACK BISON over-fenders",
   "note": "Maker: \"approx. 30mm wider per side\". ABS 10-piece set ¥234,300, FRP 8-piece set ¥222,200, both incl. tax, unpainted. Fits over the stock over-fenders; the maker says the FRP version needs modification to fit a Jimny, the ABS page does not say. Both need WALD's own front and rear lower bumper spoilers to fit. Side profile hugs the stock fender (same top edge, band about 135mm vs stock about 145); only the 30mm outward growth changes: flat square faces, one groove, a rolled lip round the arch, and a ring of dummy rivets on the outer edge (rivets sold separately)"
  },
  "kuhl_blocker": {
   "label": "BLOCKER SIERRA wide-body fenders",
   "note": "¥220,000 incl. tax (maker: \"all prices shown include tax\"), raw FRP, painting per piece at extra cost. Fits over the stock over-fenders. Two layered parts: a black square shell (flat top, about 40mm taller than the stock fender, five fins on top) plus a black round tube exposed along the arch. Widening not published by the maker: from the official front photo the shell sticks out about 30mm per side and the tube about 90mm (estimates); the maker does not say whether sheet metal must be cut"
  },
  "lb_gmini": {
   "label": "G mini wide-body fenders",
   "note": "¥154,000 incl. tax (maker notes this is an estimate; the dealer quote is final), raw FRP. One of the three pieces of the G mini kit (front bumper + grille + wide body), shared between JB64 and JB74 bodies, so on a JB74 it is a shell over the stock over-fenders. Widening not published by the maker: the official front photo shows only about 10mm more per side than stock (±15), with an outline almost identical to stock and a ring of dummy rivets on the outer edge"
  },
  "aero_over": {
   "label": "G62S Plus Wide Fender",
   "note": "JB74-specific widened version; maker says +35mm per side and 172cm overall width, requiring a structural-change registration in Japan. Not one big fender: a gloss-black narrow lip added round the G62S body-colour fender, only fits with the G62S kit. The wide version has no separate price; the standard-width G62/G62S 4-piece fender set is ¥120,000 excl. tax",
   "brand": "AERO OVER (K-FACTORY)"
  },
  "apio_narrow": {
   "label": "ABS Narrow Fender (3032-20)",
   "note": "¥99,000 incl. tax, vacuum-formed ABS in black, with 30 dummy bolt heads. Replaces the stock over-fenders and makes the car narrower: about 29mm less per side at the front, about 27mm at the rear. The maker says to pair it with the APIO Tactical front bumper and the JB64 Tactical rear bumper (3032-70), and recommends kei-Jimny 16×5.5J inset 20 wheels with 6.50R16 or 205R16 tyres (stock-offset wheels poke out past the fender). Requires a width structural-change registration in Japan"
  },
  "klc_fender_garnish": {
   "label": "Over Fender Garnish",
   "note": "¥77,000 incl. tax, raw ABS. Fits over the stock over-fenders with almost the same projection as stock (maker: the projection does not breach Japanese safety standards); drawn here as a 3mm shell only. The KLC MATURE demo car has it in body colour with a gunmetal edge round the arch, leaving no black plastic visible"
  },
  "damd_little_g_t1": {
   "label": "little G. type-1 fenders + aluminium steps (body colour)",
   "note": "¥140,800 incl. tax including the aluminium steps (steps are in the side-step menu); painting ¥48,400 extra. Wide flat arch band with one raised step line; only fits together with the STANDARD front bumper (AVENTURA likewise). Widening not published by the maker: the official front photo shows almost the same width as stock (0–5mm, ±15), side band about 138mm, same as stock"
  },
  "damd_little_g_t2": {
   "label": "little G. type-2 fenders + aluminium steps (matte black)",
   "note": "¥162,800 incl. tax including the aluminium steps; square section in two tiers (arch lip + flat top), fits the stock front and rear bumpers. The painted TRADITIONAL version is simply matte black. Widening not published by the maker: photos show almost the same width per side as stock (about 5mm), top edge 20–40mm higher than stock"
  },
  "damd_little_g_t2_paint": {
   "label": "little G. type-2 fenders + aluminium steps (body colour)",
   "note": "The same type-2 set, painted body colour on the ADVANCE demo car (painting ¥48,400 extra). Widening not published by the maker; about 5mm measured from photos"
  },
  "damd_saudade": {
   "label": "saudade bulged fenders + side sill garnish, 6 pieces",
   "note": "Four fenders plus left and right side sill garnishes, 6 pieces, ¥118,800 incl. tax, unpainted only; not the same parts as the little 5./Δ four-piece set. Rounded bulges with no lip or step line; the vent at the end of the rear pieces is fake. Widening not published by the maker: about 10mm per side from photos (0–25), top edge level with stock in side view"
  },
  "damd_delta": {
   "label": "little 5./Δ full blister fender panels, 4 pieces",
   "note": "¥140,800 incl. tax (¥128,000 excl. tax), raw ABS, 4 pieces front and rear, shared by little 5. and little Δ. Not arch rings but whole bulged fender panels: the front piece wraps from the bumper end to the leading edge of the door, the rear piece from the trailing edge of the door to the rear corner, with a shoulder line on top and reaching the sill below. The five rear-facing louvres at the tail of the rear piece are fake. Widening not published by the maker: in the front and rear photos the bulge, bumper corners and tyre outer edge are almost flush; with the demo car's 215/65R16 and a track of about 1425 that works out to 0–25mm per side over the stock 1645; modelled at 12mm (estimate)"
  }
 },
 "FRONT_BUMPERS": {
  "urnieta_salado": {
   "label": "SALADO winch front bumper",
   "note": "Drawing UN-JIMNY-FB-001: 1426×670 (incl. U-shaped nudge bar). 42.8kg, integrated 8000lb winch cradle and fairlead, recessed light pockets with steel mesh guards at both ends; the U-bar and the nudge bar are interchangeable and the skid plate is removable. No price on the maker's site"
  },
  "damd_little_d": {
   "label": "little D. front bumper",
   "note": "Flat steel-plate-style beam, both ends chamfered at 45° to wrap into the wheel arches, two exposed bolts on each end plate; keeps the stock round fog lamps, black mesh slot in the centre, gunmetal skid plate with a row of downward embossed tabs on its lower edge. Paint adds ¥35,200; the only scheme is coarse-texture matte black (beam and end plates) × gunmetal (skid plate only). Fitting requires trimming the wheel-arch liners; Type 5 and later need the separate radar/sonar kit at ¥17,380. The saudade kit uses this same bumper"
  },
  "damd_little_g_std": {
   "label": "little G. STANDARD front bumper",
   "note": "Body-colour box bumper with two chrome U-shaped corner guards folding over the top edge; black-mesh fog pods at each end reuse the stock round fog lamps (XG grade needs fog lamps bought separately), black mesh in the centre, matte silver skid plate along the bottom. Paint adds ¥31,900 (body colour × matte silver). Can only be fitted together with the type-1 over-fenders and aluminium side steps; the AVENTURA kit also uses this bumper. Dimensions estimated from official photos"
  },
  "damd_little_g_adv": {
   "label": "little G. ADVANCE front bumper (PIAA LED fog lamps)",
   "note": "Body-colour box bumper with straight chrome corner guards; fish-scale mesh fog pods at each end carry small round PIAA LED fog lamps; matte gunmetal skid plate along the bottom with a row of small recesses. Paint adds ¥30,800 (body colour × matte black × matte gunmetal); radar/sonar kit ¥26,400. Dimensions estimated from official photos"
  },
  "damd_little_g_trad": {
   "label": "little G. TRADITIONAL front bumper",
   "note": "Three-tier steel bumper: a piano-black ribbed strip on top, a matte black main beam in the middle (two mesh openings in the centre), and a rearward-sloping skid band with six triangular ribs below. Comes with Koito halogen square amber fog lamps in chrome housings, standing on top of both ends of the main beam (the maker warns that the chrome can rust); the licence plate is offset to the driver's side. Finish is matte black × piano black"
  },
  "damd_roots": {
   "label": "JIMNY the ROOTS. front bumper",
   "note": "Two tiers: an upper steel-plate beam with two rows of three long slots (the demo car is in Cotton White), a matte black lower apron with the plate mounted centrally, stock round fog lamps at both sides. Paint adds ¥35,200; choice of Cotton White / coarse silver / coarse black × matte black. Shared with little B."
  },
  "damd_little_b": {
   "label": "little B. front bumper (coarse silver)",
   "note": "The same bumper as the ROOTS. (the maker lists it as shared by the ROOTS / little B.); drawn here in the little B. demo car's coarse matte silver upper beam × matte black lower apron. Paint adds ¥35,200"
  },
  "stock": {
   "label": "Stock"
  },
  "tube_heritage": {
   "label": "Traditional twin-tube front bumper (black)",
   "note": "Upper and lower round tubes, the plate spans both tubes, Heritage skid plate. All stainless steel; without fog-lamp brackets ¥99,000 (162070313), with fog-lamp brackets ¥110,000 (162070297), both incl. tax. Fits JB74W Sierra and JC74W Nomade; not for Sierra Type 5 or Nomade Type 2. Owner's own car configuration (fog lamps swapped to KC FLEX ERA 4)"
  },
  "armando": {
   "label": "PRIME steel front bumper",
   "note": "Full-width steel-plate bumper, centre light mount, round fog-lamp holes, skid plate"
  },
  "urnieta_1970": {
   "label": "1970 retro front bumper",
   "note": "Drawing UN-JIMNY-FB-027: 1547×331, upswept wing-shaped ends with three cooling slits, centre louvred panel carrying URNIETA and 1970 SERIES badges, flat lower plate with two tow rings. 21kg. Short retro style, both sides fold up and narrow; keeps the stock fog lamps and headlamp washers"
  },
  "beyond_liberte": {
   "label": "Liberte retro front bumper",
   "note": "Stainless steel (the black is paint), with fog-lamp brackets and skid plate; MRK (Taiwan agent) price. Beyond's own version comes in mirror / black / ivory finishes, and the front bumper has four variants by fog brackets and skid plate, ¥69,300–¥107,800 incl. tax"
  },
  "beyond_liberte_mirror": {
   "label": "Liberte retro front bumper (mirror stainless)",
   "note": "Beyond's official mirror-polished stainless version; the maker's front bumpers are ¥69,300–¥107,800 incl. tax by spec, and the price of this mirror version is not listed separately on the maker's site"
  },
  "beyond_liberte_ivory": {
   "label": "Liberte retro front bumper (ivory)",
   "note": "Beyond's official ivory-painted version; the maker's front bumpers are ¥69,300–¥107,800 incl. tax by spec"
  },
  "maverick": {
   "label": "Short metal front bumper",
   "note": "Galvanised steel NT$29,000 / aluminium alloy NT$35,000, paint +9,000"
  },
  "mrk_abs": {
   "label": "Short ABS front bumper (matte black)",
   "note": "Shortened version of the stock shape, ABS"
  },
  "wmd_winch": {
   "label": "Short winch front bumper",
   "note": "Taiwan-made short steel-plate bumper with a centre winch mount and top cover plate, red D-ring mounts on both sides. The listing photos show no hoop, so the 'Ø50 hoop' the catalogue used to list has been removed",
   "brand": "WMD (Taiwan)"
  },
  "jaos_cowl": {
   "label": "Front Sport Cowl front lower spoiler",
   "note": "Confirmed on JAOS Japan's site: ¥66,000 incl. tax / ¥60,000 excl. tax, part no. B040518, unpainted black polyurethane body with aluminium mesh, 5.05kg. Fits models built 2018/7 – 2025/11, all grades; overall length +10mm, lower edge −80mm, width within the stock width. Currently shown as sold out, next shipment expected early-to-mid 2026/11. The NT$18,700 in the catalogue is a Taiwan price; this check found only JAOS Japan's data and no matching page on MRK or other Taiwan agents, so the NT$ figure cannot be traced to a first-party source and is marked uncertain."
  },
  "klc_short": {
   "label": "Front Short Bumper 74",
   "note": "ABS resin, shortened from the stock height, centre aluminium mesh opening (silver), keeps the stock fog lamps. Only paint colour is wrinkle black: painted ¥102,300, unpainted ¥69,300, both incl. tax. Fits JB74W Sierra and JC74W Nomade; not for Sierra Type 5 or Nomade Type 2"
  },
  "apio_tactical_front": {
   "label": "Tactical front bumper",
   "note": "¥121,000 incl. tax (unpainted), paint adds ¥35,200. Squared-off vacuum-formed ABS bumper with upswept ends, keeps the stock round fog lamps and headlamp washers, centre opening with mesh, grey skid plate below. Fits JB74 Types 1–4 (not Type 5 because of the millimetre-wave radar); the wheel-arch liners must be trimmed. Dimensions not published by the maker; measured off the NARROW SIERRA demo car's front photo using the licence plate as scale"
  },
  "klc_trad": {
   "label": "Traditional twin-tube front bumper (ivory)",
   "note": "Same bumper as the black one, painted ivory. All stainless steel; without fog-lamp brackets ¥99,000, with fog-lamp brackets ¥110,000, both incl. tax. Fits JB74W Sierra and JC74W Nomade; not for Sierra Type 5 or Nomade Type 2. (The link used to point to the JB64 page; ¥104,500 is that car's price)"
  },
  "outclass_t2": {
   "label": "TYPE2 steel winch front bumper",
   "note": "Confirmed on OUTCLASS's site: ¥128,000 excl. tax / ¥140,800 incl. tax (list price ¥180,000), part no. JB64JB74JC74-A-FB2UBTETU [260/160 size], steel, fits JB64 / JB74 / JC74. Includes a winch cradle and four LEDs (fog ×2, work light ×2); fairlead, D-rings and the winch itself are extra. The Raptor coating option currently shows as 'orders suspended', so it ships only as unpainted bare steel. The stock headlamp washers cannot be fitted; weight not published by the maker."
  },
  "taniguchi_square": {
   "label": "Square front bumper",
   "note": "Confirmed on TANIGUCHI's site: steel, black powder coat ¥58,300 incl. tax; stainless SUS304 #400 polished version ¥107,800 incl. tax (mounting brackets still steel); fits JB64/74 and JC74; body approx. 3kg. The '2mm square tube' had no source: 2mm is the spec of the same maker's square rear bumper; the front bumper page gives only material, finish and weight, and the part number and tube size/wall thickness are not published by the maker."
  },
  "taniguchi_double": {
   "label": "Twin-tube front bumper",
   "note": "Confirmed on TANIGUCHI's site: ¥77,000 incl. tax, steel, black powder coat, tube diameter 48.6mm, wall 2.3mm, body approx. 9kg, fits JB64 (except XG) / JB74 / JC74. Part number not published by the maker."
  },
  "toc_extreme": {
   "label": "Extreme Bumper 74 front bumper",
   "note": "Confirmed on TOC BODYWORKS' official store: 'Extreme Bumper 74 Front' ¥54,780 incl. tax, fits JB74 Sierra and JC74 Nomade, FRP with black gelcoat; must be painted by the buyer (the store offers paint as a paid option). The store states 'LED light bar and skid plate not included', and says nothing about a built-in LED bar recess. Also sold as a two-piece set with the TOC Skid Plate 74 at ¥82,280 and a three-piece set with front and rear guards at ¥137,060. Currently a pre-order item, shipping from 10 October 2026 onwards."
  },
  "arb_summit": {
   "label": "Summit bull bar front bumper + WARN 8000 winch",
   "note": "The smallest Summit bar ARB has made (Project JBOX press release), steel, textured black powder coat; wings and underbody protection 3.0mm, outer and centre tubes Ø47.6×2.6mm; includes ARB Fog Light MkII mounts, LED indicator/position lamps, two Hi-Lift jacking points, underbody protection and driving-light holes; ADR and airbag compliant, takes up to an 8000lb winch (fitting instructions 3789938). Bar AUD 2,220 + WARN M8000 winch AUD 1,965 (JBOX carries a Warn Magnum 8,000lb; ARB's current equivalent is the M8000); winch mounting kit 3500720 extra; with a winch the plate moves to a folding plate holder. Overall width, height, depth and weight not published by ARB; drawn from JBOX official photos using the headlamp spacing as scale. The red soft shackle in the middle of the bar is as seen in the photos; ARB's current ARB2018 is orange, model unverified"
  }
 },
 "GRILLES": {
  "urnieta_salado": {
   "label": "SALADO grille",
   "note": "Drawing UN-JIMNY-FB-004: 1337×241, centre opening 592×126, horizontal louvres + raised URNIETA lettering. ABS, 1.2kg, 45° downward-angled intake. No price on the maker's site"
  },
  "damd_little_d": {
   "label": "little D. grille (matte black)",
   "note": "A tribute to the classic Land Rover Defender: a raised black frame with 7 thin horizontal bars + 2 vertical bars (3 columns × 8 rows) over black mesh, square lamp surrounds around the stock headlamps, and two small round lamps outboard, amber on top and clear below (the clear one is a dummy; an LED lighting kit is extra at ¥8,580). Matte black ¥52,800; stock colour × matte black (only the centre frame in body colour) ¥75,900. Green oval badge extra at ¥3,080"
  },
  "damd_little_g_std": {
   "label": "little G. STANDARD grille",
   "note": "Late W463 style: body-colour panel with square lamp surrounds, a separate chrome rounded-corner frame in the centre, two chrome horizontal bars on each side, round dd badge, vertical LED indicators outboard of the headlamps (all included). Mesh is always black; paint adds ¥23,100. The AVENTURA kit also uses this grille"
  },
  "damd_little_g_adv": {
   "label": "little G. ADVANCE grille (vertical chrome slats)",
   "note": "W463A / AMG vertical-slat grille style: spans past the stock parting line onto the fenders, a row of upright chrome fins on a black base, dd badge in the centre. Unpainted; paint adds ¥23,100 (stock colour × matte black). Must be fitted together with the little G. bonnet cover"
  },
  "damd_little_g_trad": {
   "label": "little G. TRADITIONAL grille",
   "note": "A tribute to the first W460: a single matte black panel spanning past the parting line onto the fenders, with very deep square lamp surrounds at both ends; a centre post splits the louvres into left and right columns, each with 4 slots above and 4 below, and a solid centre band carries a matte black dd badge. No small round lamps. Matte black only; must be fitted together with the little G. bonnet cover"
  },
  "damd_roots": {
   "label": "JIMNY the ROOTS. grille",
   "note": "Co-developed with APIO, a tribute to the first LJ10: a single body-colour panel surrounds the headlamps and round amber indicators (included); the openings are three rows of round-ended slots: one long slot on top, the chrome SUZUKI lettering (stock badge included), another long slot, and two short slots split in the middle at the bottom, each long slot with two vertical dividers. Paint adds ¥17,600 (ZVR / ZZC / ZJ3 / ZVL / ZVG)"
  },
  "damd_little_b": {
   "label": "little B. APIO Vintage Iron Grille (semi-gloss black)",
   "note": "APIO's steel grille; DAMD's page leaves the price blank and points to APIO for purchase (unit price not found). One piece surrounding the headlamps and outer round amber lamps, two groups of 3×6 round-ended pressed horizontal slots above and below, with DAMD American-style raised lettering (orange face, silver edge, ¥7,480) on the flat centre band. Current colour is semi-gloss black; silver has been discontinued in the 5-point kit; Cotton White is WHITE EDITION only"
  },
  "damd_little_b_silver": {
   "label": "little B. APIO Vintage Iron Grille (silver)",
   "note": "The silver version fitted to the little B. demo car; the maker says silver has ended in the 5-point kit, though the complete kit (with wheels) still lists it as an option. Unit price not published"
  },
  "apio_vintage_iron": {
   "label": "Vintage Iron Grille + script badge",
   "note": "Steel, approx. 2.8kg (incl. brackets), bolts straight on with the stock clips and screws, fits JB64 / JB74 / JC74, ¥55,000 incl. tax; the grille's own dimensions are not published by the maker. This is the grille used on little B.: pressed horizontal slots, with a flat rib across the middle for a badge or sticker. The script badge is not included: APIO states the one in the photo is the 'Suzuki genuine classic emblem (77860-84F51-ZG4)', to be bought from a Suzuki dealer. The TS3 'Shonan Edition' delivery page says 'with script emblem' without naming the lettering; Suzuki's genuine Sierra accessories include a retro 'Jimny' emblem (Hi-Boscal, glossy imitation chrome, ¥3,960), so it is drawn here as a chrome 'Jimny' script badge, with lettering and size estimated",
   "part": "3033-57B (semi-gloss black) / 3033-57L (light bronze)"
  },
  "damd_saudade": {
   "label": "saudade grille (Koito square headlamps)",
   "note": "French-car design language: thick body-colour frame, black inner area, the round headlamps replaced by Koito halogen square twin lamps, vertical LED strips outboard, three rows of louvres in the centre, a tricolour diamond DAMD badge on the top edge. Unpainted only. The maker does not make clear whether the headlamps are included in the ¥129,800 single-item price (the kit contents list them separately); the stock headlamp washers cannot be used as stock, and blanking caps are supplied"
  },
  "stock": {
   "label": "Stock grille",
   "note": "5 vertical bars, S badge in the centre"
  },
  "hbar_suzuki": {
   "label": "Face Grille Nostalgic",
   "note": "ABS painted ¥93,500 / ABS unpainted ¥60,500 / FRP ¥55,000; square headlamp surrounds, three horizontal bars + fine mesh; owner's own car configuration. A copy is sold by Nanguo Jimmy (Taiwan) at NT$2,750"
  },
  "taishan_retro": {
   "label": "Retro grille (black / silver)",
   "note": "KLC-style resin retro grille",
   "brand": "Taishan Meiyanshe (Taiwan)"
  },
  "urnieta_1970": {
   "label": "1970 grille",
   "note": "Drawing UN-JIMNY-FB-026: 1337×241, centre opening 592×126 with fine mesh + raised URNIETA lettering and a small UNT badge. 1.6kg. Pressed metal mesh + minimal frame, 1.6kg; sold through Heekis"
  },
  "mrk_angry": {
   "label": "Angry Bird grille",
   "note": "JB74 specific, NT$5,500 (fitting, shipping and paint extra), clips straight onto the stock mounts. Material not stated by the seller (only 'durable material'), dimensions not published. One-piece matte black frame with a slight dip in the middle of the top edge; above each round headlamp opening an 'angry brow' slopes down towards the centre, with a small round indicator hole outboard of each headlamp; seven round-bottomed slots in the middle like a row of teeth, shorter and leaning inward towards the outside, backed by silver mesh. Shape drawn from MRK's product photos"
  },
  "klc_sj": {
   "label": "Face Grille SJ",
   "note": "FRP unpainted NT$16,000 (Fujii 74, Taiwan); in Japan ABS painted ¥93,500. Shown in body colour"
  },
  "klc_ja": {
   "label": "Face Grille JA",
   "note": "Twin lamp pods beside the headlamps, open centre mesh; ABS unpainted ¥60,500 / FRP ¥55,000"
  },
  "klc_nanaketsu": {
   "label": "Face Grille NANAKETSU",
   "note": "Seven vertical slots give a three-dimensional look (KLC's own words: '7 vertical holes create depth'; they are not rounded square holes); the round headlamps are framed by rounded square surrounds. ABS unpainted ¥60,500 / FRP unpainted ¥55,000 (both incl. tax)"
  },
  "klc_gd": {
   "label": "#GD vertical-slat grille (Grand Wagoneer style)",
   "note": "¥88,000 incl. tax, unpainted FRP, fits JB64W / JB74W / JC74W. 14 narrow vertical slats, the round headlamps framed by rounded square surrounds, and a very thick grille body that makes the headlamps look recessed (maker: the face grille itself is given generous depth). The KLC MATURE demo car's scheme: outer frame in body colour, slats and lamp surrounds gunmetal"
  },
  "klc_forty": {
   "label": "Face Grille FORTY",
   "note": "Ribs around the headlamps, centre mesh + S badge"
  },
  "klc_forty_chrome": {
   "label": "Face Grille FORTY (chrome lamp rings)",
   "note": "The same FORTY grille (ABS painted ¥93,500), with the lamp rings drawn in chrome. KLC's paint options offer only white or gloss black for the inner parts, no chrome; chrome lamp rings are this black-chrome West Coast car's scheme and need separate plating or chrome film, cost unknown"
  },
  "apio_sj": {
   "label": "SJ Grille steel-plate grille",
   "note": "SJ30-style vertical-slot pressed steel plate, gunmetal, black aluminium mesh"
  },
  "apio_marker": {
   "label": "Marker Vintage Iron grille",
   "note": "Steel horizontal bars + 4 IPF marker lamps, semi-gloss black or light bronze",
   "part": "3033-59B (semi-gloss black) / 3033-59L (light bronze)"
  },
  "showa_hex": {
   "label": "ABS honeycomb grille",
   "note": "Unpainted black ABS, must be painted by the buyer (maker's words: ABS resin has poor weather resistance and degrades quickly under UV, so paint it before use); the painted versions in the same range are E00501 (gunmetal) / E00502 (wrinkle black) / E00504 (ZJ3 bluish black pearl), painted price ¥37,400 incl. tax, not the ¥31,900 the catalogue used to list; honeycomb mesh opening in the centre"
  },
  "outclass_g": {
   "label": "Vintage G grille",
   "note": "Textured black ASA resin; 4 horizontal bars + a centre post, fine mesh behind. ¥52,500 excl. tax / ¥57,750 incl. tax; badge sold separately, no fitting instructions, about 3 weeks when out of stock"
  },
  "taniguchi_washer": {
   "label": "FRP Washer grille",
   "note": "Stock-shaped FRP, centre mesh opening, washer nozzles moved into the headlamps"
  },
  "kpro_folksy": {
   "label": "Folksy Style horizontal-fin grille",
   "note": "Confirmed on K-PRODUCTS' official shop: fits JB64 / JB74 / JC74; FRP with mesh part, part no. 190604-1; the white is only gelcoat, not a finished colour, and the maker's photo shows it painted black. Listed at ¥42,493 (tax status not stated), currently SOLD OUT. The ¥30,000 the catalogue used to list is an old excl.-tax JB64 price quoted by 4x4espoir; the maker's page now takes precedence"
  },
  "prostaff_minig": {
   "label": "miniG grille",
   "note": "The only source that can currently be found (a 4x4espoir reposted page) gives the fitment as 'for the new Jimny JB64W'; another write-up on the same maker's miniG bumper (64swamp.com) also says 'this is for the JB64'. Both point to JB64 only and neither mentions the JB74. The Pro Staff site (4x4prostaff.com / www.4x4prostaff.com) was still unreachable in this check and could not be verified directly. ¥38,000 (excl. tax) is an old price quoted by 4x4espoir, not the maker's current price; JB74 fitment should be marked unverified rather than implied"
  },
  "sixsense_explosion": {
   "label": "Explosion Classic grille",
   "note": "The Six Sense official shop page confirms it fits both the JB64W and the JB74W Sierra; unpainted FRP to be painted by the buyer, opening 240mm, part no. jimex108-nocl, price ¥110,000 excl. tax (maker's words '110,000 yen (excl. tax)', rechecked 2026-09-26), ¥121,000 incl. tax. The catalogue's old ¥80,000 was an excl.-tax price quoted by 4x4espoir and has been updated to the maker's current price; mounts either the standard SUZUKI badge or the stock emblem; an optional front grille cover with LED louvre kit is ¥16,500"
  }
 },
 "GRILLE_LIGHTS": {
  "none": {
   "label": "None"
  },
  "rally": {
   "label": "Rally Bar + ST1K yellow",
   "note": "A 63mm stainless tube runs across the FRONT of the grille, with the light bar bolted to the tube. STEDI makes no in-grille bracket for the Jimny; this is their only Jimny front-end part (tube A$325 + ST1K A$219)"
  },
  "lower": {
   "label": "ST1K 21.5 in in the lower intake",
   "note": "546mm yellow bar tucked into the lower bumper opening — the most common DIY solution"
  },
  "bushranger": {
   "label": "Night Hawk 28 in (behind the grille)",
   "note": "717mm single row of 21 OSRAM LEDs; the maker's copy says it fits BEHIND the lower grille, and the lower cover needs trimming"
  },
  "arb_ar21_red": {
   "label": "Intensity V2 AR21 round lamps, pair (red covers)",
   "note": "7 in round 21-LED spot lamp, 184×208×117mm, 2.5kg, 12mm mounting bolt (ARB); AUD 829 each, counted as a pair here. Bolted to the driving-light mounts on top of the Summit bull bar, with red covers as in the Project JBOX photos: ARB says Intensity covers come in clear, amber, blue, red and full black, but the Australian site currently lists only clear AR10TC (AUD 116 a pair), amber and full black; no red part number can be found, and the price excludes covers"
  }
 },
 "HITCHES": {
  "none": {
   "label": "None"
  },
  "wildgoose_jm2112": {
   "label": "Hitch member (with tow hook)",
   "note": "2-inch square receiver, 500kg towing / 75kg vertical, 960W×205H×225D, 9.3kg; uses the stock frame holes and tow hook, receiver sits about 10mm below the number plate, no plate relocation needed. Some aftermarket exhausts interfere with the receiver"
  },
  "sunrise_a": {
   "label": "Hitch member, towing class A (with D-ring)",
   "note": "50mm square tube, 2-inch ball, 500kg towing / 75kg vertical, JIS 7-pin socket; fits JB64W/JB74W/JC74W",
   "brand": "Auto Parts Sunrise"
  },
  "globaltight": {
   "label": "Reinforced hitch member",
   "note": "1,000kg towing / 100kg vertical, the highest vertical load among JB74 hitches sold in Japan; larger frame contact area and more bolts. 2-inch ball or 50mm European ball. Whether tax is included is not stated",
   "brand": "Global Tight"
  },
  "haymanreese": {
   "note": "Australian Class 4, 50mm square receiver, exposed type with no bumper cutting, 23.9kg; 1,300kg towing / 75kg ball load (Australian Jimny rating). No price on the maker's site"
  }
 },
 "HOODS": {
  "stock": {
   "label": "Stock bonnet"
  },
  "damd_little_d": {
   "label": "little D. bonnet cover + LITTLE:D letters",
   "note": "Fits over the stock bonnet: a flat raised centre section runs forward from below the wipers and narrows into a slope at the front, with a thick lip on the leading edge and LITTLE:D letters on top (matte black or silver, ¥7,480, included in the kit; silver on the demo car). Painting ¥37,400 extra, any factory colour"
  },
  "damd_bonnet": {
   "label": "DAMD bonnet cover (little B./saudade)",
   "note": "The little B. and saudade pages give the same price and description: a flat raised centre running up to the windscreen, a thick rounded front lip that overhangs slightly, fixed by drilling the stock bonnet. Painting ¥18,700 extra"
  },
  "damd_little_g": {
   "label": "little G. bonnet cover + bonnet-top indicators",
   "note": "Shared by TRADITIONAL/ADVANCE/AVENTURA: a flat raised centre runs to the leading edge, with a G-Class-style wedge indicator on each flat front shoulder (included; the maker warns the lamp housings may take in water and fog). Painting ¥37,400 extra. Once fitted, Japanese front/left direct-view rules may require an extra front camera (¥21,780)"
  },
  "urnieta_salado": {
   "label": "SALADO aluminium bonnet",
   "note": "Drawing UN-JIMNY-FB-003: 1408×882. Aluminium, about 65% lighter; one large intake at the back of the raised centre (three fins plus a centre rib); reuses the stock hinges, latch and stay. 6kg. No price on the maker's site"
  },
  "urnieta_1970": {
   "label": "1970 aluminium bonnet",
   "note": "Drawing UN-JIMNY-FB-025: 1408×882. Smaller intake set nearer the middle (four fins), plus a louvred vent on the right front corner; the face lines stay closer to stock. 6kg. No price on the maker's site"
  }
 },
 "KITS": {
  "none": {
   "label": "None"
  },
  "little_d": {
   "label": "little D. Defender-style kit",
   "note": "Body kit ¥305,800 (incl. tax, unpainted); paint adds ¥96,800. Contents: grille, front and rear bumpers, bonnet cover, front and rear mud flaps, LITTLE:D lettering and oval badge, stock reversing-camera relocation kit. With Cantabile wheels ¥451,000, with WILDBOAR SR ¥539,000, with DEAN little D edition ¥605,000. The grille always ships in matte black. No official Taiwan distributor; authorized dealer: Fujii74, Taichung",
   "demoNote": "Drawn from the maker's studio demo car: Medium Gray (ZVL), APIO WILDBOAR SR 15×6J −5 black, BFGoodrich Mud-Terrain T/A 215/75R15 (DATA section). The demo car runs white-letter tyres, but the KM3 in this catalogue is black-letter only, so black letters are drawn. The black tubular roof basket, AOL door decals, reversed spare-tyre bracket and tailgate-mounted plate are not part of the kit and are not drawn"
  },
  "little_g_std": {
   "label": "little G. STANDARD city G-style kit",
   "note": "Kit (wheels not included) ¥374,000; paint adds ¥141,900. Contents: grille (with upright LED indicators and dd badge), front bumper, type-1 over-fenders with aluminium steps, side mouldings, stainless-band spare-tyre cover, G15 lettering (tailgate lettering not drawn). With four little G wheels ¥517,000 (stock tyres cannot be reused). Rear bumper not included",
   "demoNote": "Drawn from the maker's demo car: gloss black (ZJ3; the maker gives no code, ZJ3 is the only black on the paint list), little G wheel 16×6J −5 black, BRIDGESTONE ALENZA 001 215/65R16 (DATA section), stock ride height. The rear bumper is the stock bumper painted body colour, bought separately (not in the kit)"
  },
  "little_g_trad": {
   "label": "little G. TRADITIONAL first-gen G-style kit",
   "note": "Kit ¥547,800; paint adds ¥145,200. Contents: grille, bonnet cover with bonnet-top indicators, front bumper with Koito square fog lamps, type-2 over-fenders with aluminium steps, side mouldings, rear bumper with square tail lamps, mud flaps, dd badge (matte black). With five Cantabile wheels ¥693,000; the set with wheels plus DUELER M/T is no longer taking orders",
   "demoNote": "Drawn from the maker's beige demo car: Chiffon Ivory (ZVG; the maker gives no code, it is the only ivory on the list), DAMD Cantabile 15×6J −5 gold, BRIDGESTONE DUELER M/T 674 LT215/75R15 white letter (DATA section), trip basket full-length roof rack (option). The side mouldings look all black on the demo car"
  },
  "little_g_adv": {
   "label": "little G. ADVANCE new-generation G-style kit",
   "note": "Kit ¥649,000; paint adds ¥194,700. Contents: vertical-bar chrome grille, bonnet cover with bonnet-top indicators, front bumper with PIAA LED fog lamps, type-2 over-fenders with aluminium steps, rear bumper with 415COBRA LED tail lamps, stainless-band spare-tyre cover, side mouldings, dd badge (chrome) and G15 lettering. With four little G wheels ¥781,000; the cheaper ¥770,000 set with wheels and tyres is no longer taking orders (old price on the maker's site)",
   "demoNote": "The maker shows two demo cars: one in a near-white cool grey (code not given; neither ZVL nor ZVR, so the closest white, ZVR, is used) and one in matte copper-orange with black roof and black parts (not a factory colour). Wheels little G 16×6J −5 black, BRIDGESTONE ALENZA 001 215/65R16 (DATA section), stock ride height"
  },
  "little_g_aventura": {
   "label": "little G. AVENTURA off-road G-style kit",
   "note": "Kit ¥836,000; paint adds ¥128,700. Contents: STANDARD grille and front bumper, bonnet cover with bonnet-top indicators, type-1 over-fenders with aluminium steps, ADVANCE rear bumper (415COBRA LED tail lamps), side mouldings, Solid Rack roof rack, trip basket spare-tyre guard, G15 lettering. With four little G wheels ¥957,000. Note: the Solid Rack is marked \"discontinued\" as a single item on the maker's site yet still listed in the kit contents; confirm with DAMD before ordering",
   "demoNote": "Drawn from the maker's demo car: Jungle Green (ZZC equivalent; the maker gives no code), little G 16×6J −5 black, BFGoodrich KO2 LT225/70R16 white letter (DATA: does not fit at stock height), 1-inch lift (the demo car runs Spirit Racing dampers; a 25mm spring from this catalogue stands in), DAMD truck mirrors. The demo car also carries a trip basket rear ladder, IPF work lamps and three stone guards; none are in the kit and none are drawn"
  },
  "roots": {
   "label": "JIMNY the ROOTS. LJ10-style kit",
   "note": "Three-piece exterior set ¥213,400; paint adds ¥99,000. Co-developed with APIO. With five Cantabile wheels ¥363,000, with five WILDBOAR SR ¥451,000; the two sets that add DUELER M/T are no longer taking orders. Proxy-buy listings on Ruten (Taiwan) seen at NT$65,000 (unpainted)",
   "demoNote": "Drawn from the maker's demo car: Jungle Green (ZZC; the maker gives no code), APIO WILDBOAR SR 15×6J −5 grey, BRIDGESTONE DUELER M/T 674 LT215/75R15 white letter (DATA section), stock ride height. Bumpers drawn in the selectable Cotton White; the upper part of the demo car's rear bumper is actually body green (that colour option is commented out on the maker's site). The reversed spare-tyre bracket and the \"private use\" sticker are not in the kit"
  },
  "little_b": {
   "label": "little B. American mini off-roader kit",
   "note": "5-piece exterior kit ¥275,000 (incl. tax); paint adds ¥118,800. Contents: APIO steel grille, DAMD American-style lettering, bonnet cover, front bumper, rear bumper with extension. The grille now comes in semi-gloss black (silver discontinued); WHITE EDITION ¥308,000. The complete kit with wheels and tyres shows only ¥448,000 / ¥468,000 with the tax column blank. Front and rear bumpers are shared with the ROOTS.",
   "demoNote": "Drawn from the maker's front-view demo car: black (ZJ3 presumed, not stated), silver APIO grille, coarse-mesh silver×black front and rear bumpers, DEAN CROSS COUNTRY 16×6J −5, TOYO OPEN COUNTRY R/T 215/65R16 C white letter (DATA section). The other three angled shots show a non-factory two-tone with an off-white roof, which cannot be drawn"
  },
  "saudade": {
   "label": "saudade French square-lamp kit",
   "note": "¥437,800 with bonnet cover, ¥393,800 without (incl. tax), unpainted only. Contents: Koito square twin-lamp grille, front bumper, over-fenders plus 6-piece side garnish, rear bumper with round lamps, reversing-camera kit. The front and rear bumpers are the little D. ones (radar, camera and plate kits are all marked little D. only). With five OZ Rally Racing wheels ¥594,000 / ¥649,000",
   "demoNote": "Drawn from the maker's demo car (DAMD marks it as a custom build): matte-look mid grey (closest to ZVL; code not given), OZ Rally Racing 16×6J −5 matte black, TOYO OPEN COUNTRY R/T black letter (size not stated; about 703mm outer diameter from the side photo, so 215/70R16), trip basket full-length roof rack, DAMD truck mirrors, long mud flaps (not in this kit). The large Saudade door decal and small tricolour badge are not drawn"
  },
  "urnieta_salado": {
   "label": "SALADO expedition kit",
   "note": "Made by Stark Industry (URNIETA), Dongguan, China. No prices on the maker's site; only the rear bumper is listed on Shopee Taiwan, at NT$27,000. The full set also includes an aluminium bonnet, tubular side bars, roof rack, rear ladder, quad exhaust and snorkel (some not modelled yet). JB74 / JC74 only",
   "demoNote": "Drawn from the URNIETA demo car: white (ZVR, roof same colour), lifted, matte black 15-inch wheels on BFG KM3 31×10.50R15 black-letter mud tyres (docs/urnieta-demo-colours.json). The maker also shows a matte black car, but the home page and most real photos show this white one. The closest 15-inch black wheel in the catalogue stands in for the SALADO wheel"
  },
  "urnieta_1970": {
   "label": "1970 retro kit (70s style)",
   "note": "A brand of Stark Industry (URNIETA), Dongguan, China, launched 2026/6. No prices on the maker's site; this is the Taiwan total for three pieces. Half-height front and rear bumpers plus a stamped-metal mesh grille; the rear bumper uses round tail lamps (the maker says it is a tribute to the Nissan GT-R). The series also includes a bonnet, side skirts, spare-tyre cover and gull-wing windows (not modelled yet). JB74 / JC74 only",
   "demoNote": "Drawn from the URNIETA demo car: Silky Silver (Z2S, roof same colour), lifted, matte black 15-inch wheels on BFG KM3 LT235/75R15 black-letter mud tyres (docs/urnieta-demo-colours.json). The closest 15-inch black wheel in the catalogue stands in for the 1970 wheel"
  },
  "little_delta": {
   "label": "little Δ (Delta Integrale-style) kit",
   "note": "Full JB74 body kit (unpainted) ¥539,000 incl. tax (¥490,000 excl. tax). Contents: quad-round-lamp grille (with headlamps, LED bulbs, position lamps, indicators and triangle badge), front bumper (with Koito yellow square fog lamps), 4 one-piece blistered wings, side skirts, rear bumper (with DB square tail lamps), FRP rear spoiler. Everything except the spoiler is ABS. The maker lists only the unpainted price; the paint chart is hidden in the page source and paint is not currently offered. Sets with OZ wheels, and with wheels and tyres, exist but are commented out on the page (not on sale). No official Taiwan distributor",
   "demoNote": "Drawn from DAMD's red demo car: solid red all over (no JB74 was sold in red, so 3M 2080-G13 wrap film stands in), OZ Rally Racing 16×6J −5 race white, BRIDGESTONE ALENZA 001 215/65R16, off-white plus dark green centre stripe from bonnet to roof (demo-car decal, not in the kit). The demo car runs Rainbow Auto 2-inch lowering springs, which are not in this catalogue, so ride height stays stock"
  },
  "little_5": {
   "label": "little 5. (Renault 5-style) kit",
   "note": "Full JB74 body kit (unpainted) ¥495,000 incl. tax (¥450,000 excl. tax). Contents: square-lamp grille (with Koito square 2-lamp halogen headlamps and DAMD diamond badge), front bumper (with Koito yellow square fog lamps), 4 one-piece blistered wings, side skirts, rear bumper (with DB square tail lamps), FRP rear spoiler. Everything except the spoiler is ABS. Bumpers, wings, rear bumper and spoiler are shared with little Δ; only the face differs. The maker lists only the unpainted price; the paint chart is hidden in the page source and paint is not currently offered. No official Taiwan distributor",
   "demoNote": "Drawn from DAMD's purple-blue demo car: body and roof in the same deep purple-blue (not a factory colour; code not given), front and rear bumpers in slate grey, OZ Rally Racing 16×6J −5 race white, BRIDGESTONE ALENZA 001 215/65R16. The \"NON TURBO\" door lettering and the two black diagonal trims ahead of the rear blisters are demo-car decoration and are not drawn. The demo car runs Rainbow Auto 2-inch lowering springs, which are not in this catalogue, so ride height stays stock"
  }
 },
 "LADDERS": {
  "none": {
   "label": "None"
  },
  "fr": {
   "label": "Tailgate ladder",
   "note": "4 steps, hinge side, hooks over the top of the tailgate"
  },
  "jst": {
   "label": "Standard tailgate ladder",
   "note": "Closed oval loop of Ø25 round tube, 27cm inner width (narrow version 22cm), four steps, two mounting plates on the tailgate hinge side; made in Taiwan",
   "brand": "JST Jimmy Workshop"
  },
  "urnieta": {
   "label": "SALADO rear ladder",
   "note": "1015×390mm, Ø34 main tube + Ø28 four steps (158 / 378 / 603 / 862mm from the bottom, unevenly spaced). Hooks over the top of the tailgate and clamps to the lower tailgate hinge at the bottom; the roof is untouched. A 91mm outward S-offset in the middle clears the spare, up to 235/75. Flag mount, antenna mount and two auxiliary-light points included. Dimensions from the maker drawing UN-JIMNY-FB-013"
  },
  "tube": {
   "label": "Tubular loop rear ladder",
   "note": "Ø32 tube loop, hooks over the rear edge of the roof rack, with an extinguisher mount (an owner's actual build)",
   "brand": "Various makers"
  }
 },
 "LAMP_COVERS": {
  "none": {
   "label": "None"
  },
  "beyond_yellow": {
   "label": "Liberte yellow headlamp covers",
   "note": "Yellow acrylic overlays that stick onto the stock headlamps with the supplied double-sided tape; fits all JB64/JB74/JC74 grades. List price ¥19,800 incl. tax (sale price on the maker's shop ¥15,840)"
  }
 },
 "LIFTS": {
  "stock": {
   "label": "Stock",
   "inch": "Stock",
   "note": "Stock ground clearance 210mm; the largest tyre at stock height is 215/70R16"
  },
  "klc_turtles": {
   "label": "SUPER DOWN SPRING TURTLES lowering springs",
   "note": "Spring-only lowering kit for JB64W/JB74W/JC74W, ¥30,800 incl. tax. The product page only gives about 40mm down for the JB64; KLC's own two JB74W demo-car pages give JB74 figures: CHROME \"45 to 50mm front and rear\", MATURE \"about 50 to 60mm down\". 50mm is used here"
  },
  "klc30": {
   "label": "Heritage Todoroki lift springs",
   "note": "KLC Heritage product page: Lift-Up Suspension Todoroki ¥38,500 incl. tax. The maker lists only shared fitment \"JB64W / JB74W Sierra / JC74W Nomade\" and gives no separate JB74 lift figure; the \"about 30mm\" on the page is actually the JB64 figure. Spring-only kit that keeps the stock dampers and lifts within stock travel; the maker says no extended brake hoses are needed and the car passes inspection as fitted. Actual JB74 lift is not published by the maker; the JB64 figure is used as an estimate."
  },
  "sg25": {
   "label": "1-inch lift springs",
   "note": "Springs only; a lateral rod kit is recommended (with rods ¥90,200)"
  },
  "ms20": {
   "label": "20mm suspension kit",
   "note": "MONSTER SPORT's JB74W-specific kit actually on sale is the \"Height-Up Suspension Set\", part no. 510500-5600M, ¥99,000 incl. tax (¥90,000 excl. tax): about 20mm up front and rear, 14-step adjustable, spring rates front 2.3 / rear 2.5 kgf/mm; the maker states JB74W only, not for JB64W. The type-2 in the old catalogue (part no. 510502-5600ML, ¥94,600 incl. tax) is still marked \"in development\" on the maker's site with a planned price and is not on sale yet, so it was replaced with the item actually sold."
  },
  "apio20": {
   "label": "7420SA suspension kit",
   "note": "APIO's current list price ¥141,900 incl. tax, part no. 1028-1AA, JB74 only, about 20mm lift. Contents: JB74-specific 20mm springs, 14-step damping-adjustable shocks, LED headlamp levelling plate and nuts. The maker states it is inspection-compliant (no structural-change registration) and needs no extended brake hoses."
  },
  "es30": {
   "label": "Country 30mm suspension kit",
   "note": "4x4 Engineering official pricing: JB74 30mm base kit 74743-31C ¥127,000 excl. tax (¥139,700 incl. tax), front and rear springs plus 14-step adjustable shocks only, no lateral rods or steering damper. The same series also has 74743-31LC (LED headlamp levelling bracket version, ¥142,560 incl. tax), 74743-32C (with lateral rods, ¥199,100 incl. tax) and others."
  },
  "jaos40": {
   "label": "BATTLEZ VFS ver.A 40mm full kit",
   "note": "JAOS list price ¥184,800 incl. tax (¥168,000 excl. tax), part no. A734518Z, for all 2018.07- JB74 grades. The maker gives the front and rear lift as 35-40mm (not a fixed 40mm); net weight 24.54kg. Includes titanium-alloy springs, dampers with Harmoflex, long brake hoses, front and rear lateral rods, Assist Kit (front caster bushes and alignment jig) and long LED headlamp levelling brackets; the long brake hoses are confirmed as kit contents, not a separate purchase."
  },
  "apio40": {
   "label": "7440Ti full suspension kit",
   "note": "APIO list price ¥276,100 incl. tax, part no. 1034-1AE, JB74 only, about 40mm lift, inspection-compliant (no structural-change registration). Contents: a set of A2000Ti titanium springs, long-travel 14-step adjustable shocks, adjustable reinforced lateral rods front and rear, rear bump-stop spacers, caster offset bushes, extended brake hoses and an LED headlamp levelling plate. Nothing on the maker's site restricts it by steering side; the old \"RHD only\" warning had no source and was removed."
  },
  "omr40": {
   "label": "Old Man Emu 40mm suspension kit",
   "note": "Includes crossmember reinforcement, Panhard mount, brake hose extensions and caster bushes; springs chosen by bumper/winch weight"
  },
  "dob40": {
   "label": "IMS Monotube 40mm suspension kit"
  },
  "td40": {
   "label": "Foam Cell 40mm suspension kit"
  },
  "sg50": {
   "label": "SG Custom 50 Ennepetal suspension kit",
   "note": "BA full set ¥480,700 (extended brake hoses + lateral rods)"
  },
  "cusco50": {
   "label": "2-inch suspension kit (50-75mm adjustable)",
   "note": "CUSCO list price ¥167,200 incl. tax (¥152,000 excl. tax), JB74W part no. 60N-6JS-U20 (the JB64W has its own part no. 60M-6JS-U20, same spec). Ride height adjustable +50 to +75mm, 14-step damping adjustment front and rear. Includes 4 each of shocks, springs, threaded spacers and high-capacity bump stops, plus extended brake hoses, an ABS harness and free-wheel hub hose relocation kit. Above 2 inches the front propshaft tends to hit the stock crossmember, so a drop bracket is recommended; cars with auto-levelling LED headlamps need an adjuster rod bought separately."
  },
  "im50": {
   "label": "Nitro Gas 50mm suspension kit",
   "note": "Includes extended brake hoses, crossmember drop mounts, 2° caster bushes and extended bump stops"
  },
  "tg60": {
   "label": "SOLVE ACE60 suspension kit",
   "note": "Off Road Service Taniguchi official site (after the 2025.2.1 price change): SOLVE ACE60 suspension kit for JB74 ¥220,220 incl. tax, about 60mm lift. Includes springs, dedicated shocks, extended brake hoses, Caster Dream, lateral rods, rear lateral rod correction bracket and offset anti-roll bar spacers. The stock third crossmember cannot be reused; the maker marks the SOLVE crossmember ¥29,700 as \"recommended\", sold separately. Type 1-4 cars with stock LED headlamps also need an adjustable levelling rod."
  },
  "td60": {
   "label": "Foam Cell 60mm suspension kit",
   "note": "Includes braided brake hoses; price on request"
  },
  "sg75": {
   "label": "SG Spring 75 X-SHOCK suspension kit",
   "note": "Fits JB74 types 1 to 5. Standard set ¥234,300 (S00373), B set ¥246,400 (S00374), BA full set ¥389,400 (S00375), all incl. tax; a caster correction arm is needed separately. The previously recorded S00472 / ¥253,000 / BA ¥394,900 were all figures for the five-door JC74"
  },
  "es70": {
   "label": "Country 70mm suspension kit",
   "note": "4x4 Engineering official pricing: JB74 70mm base kit 74745-31B ¥197,300 excl. tax (¥217,030 incl. tax): front and rear springs, Harmoflex 14-step adjustable shocks, rear shock spacers, crossmember drop brackets, brake hoses and propshaft spacers. Lateral rods need the 74745-32B upgrade (¥303,380 incl. tax); the full kit with steering damper and lateral rods is 74745-32LSB (¥330,110 incl. tax). The ¥315,000 shown before matched none of the official prices, and the listed contents were not the base kit."
  },
  "dob75": {
   "label": "IMS remote-reservoir 75mm suspension kit",
   "note": "Includes crossmember drop, adjustable front and rear Panhard rods, caster bushes, headlamp levelling brackets and extended hoses"
  },
  "br75": {
   "label": "Black Raptor 3-inch full suspension kit",
   "note": "Includes caster correction arms + adjustable Panhard rods"
  },
  "br100": {
   "label": "Black Raptor 4-inch full suspension kit",
   "note": "Springs, shocks, 4 caster correction arms, 2 adjustable Panhard rods, braided hoses and crossmember drop; springs differ for LHD and RHD"
  },
  "sg50bl": {
   "label": "50mm suspension + 25mm body lift",
   "note": "2-inch suspension plus a body lift, the usual combination for 31-inch tyres"
  },
  "combo100": {
   "label": "2-inch suspension + 2-inch body lift",
   "note": "A route that uses a body lift instead of caster correction arms and Panhard rods"
  }
 },
 "LIGHT_BARS": {
  "none": {
   "label": "None"
  },
  "ipf": {
   "label": "600 S-Series 40 in light bar",
   "note": "Without a roof rack it bolts to the A-pillar bracket in the kit (IPF: \"bolt-on at the top of the A-pillar\"); with a rack it moves to the rack's front edge. IPF 642JM2 is the complete kit with the bar: 642SD 40 in dual-row bar + relay harness + switch + A-pillar bracket, for JB64 / JB74 (from 2018.07, one part number for both). The site's ¥118,800 incl. tax (¥108,000 excl. tax) is the full kit price; the 642SD alone is ¥95,480 incl. tax (¥86,800 excl. tax), and adding the two would count the bar twice, so only the kit total is used here. 642SD spec: 20,000 lm, 273,000cd, 210W, 6000K, IP68, 2,900g, white."
  },
  "stedi_st3k": {
   "label": "ST3K 51.5 in (amber filter)",
   "note": "1300×51mm, 50 LEDs; the filter is removable and turns it from 5700K to 2500K amber. 4.25kg — the only full-width option that does not eat the roof's 30kg load. Without a rack it uses the MG-X gutter bracket (Mega Jimny, clamps to the front of the rain gutter, designed for 52 in bars, AUD 129, dimensions unpublished); with a rack it bolts to the rack's front edge. Taiwan distributor: Jimny Plus"
  },
  "stedi_st4k": {
   "label": "ST4K 52 in (amber filter)",
   "note": "1320×110×105mm, dual row of 100 LEDs, 6.62kg; with a roof rack it gets close to the 30kg limit. Without a rack it uses the MG-X gutter bracket (designed for 52 in bars); with a rack it bolts to the rack's front edge"
  },
  "stedi_st1k": {
   "label": "ST1K 21.5 in yellow",
   "note": "546×38×80mm, 20 LEDs; factory-bonded yellow lens, so it looks yellow even when off (the only natively tinted bar in the range). Without a rack it is drawn on an A-pillar bracket (STEDI has no JB74-specific bracket)"
  },
  "stedi_st2k": {
   "label": "ST2K TOUCH 40 in white / amber",
   "note": "1016mm, 16 segments; white / amber dual-colour DRL switched by touch. Section not published. Without a rack it is drawn on an A-pillar bracket (STEDI has no JB74-specific bracket)"
  }
 },
 "MIRRORS": {
  "stock": {
   "label": "Stock power-folding mirrors"
  },
  "urnieta": {
   "label": "SALADO mirror set",
   "note": "Taiwan Shopee GOAT Wild explorer NT$17,800. URNIETA is a brand of Stark Industrial in Dongguan, China (Chinese name Ounita), not Japanese; fits JB74 / JC74 only, JB64 officially listed as incompatible. Maker drawing UN-JIMNY-FB-014: 411mm overall height, 237mm overall width. Rounded-rectangle mirror housing 187×231; a single round tube runs from a joint at the upper front corner of the door frame, down the inside of the housing and back to the lower joint, the housing held to the tube by a four-bolt clamp block, with an URNIETA badge on the outer edge"
  },
  "damd": {
   "label": "Truck Mirror",
   "note": "DAMD Japan MSRP: matte black ¥69,000 excl. tax / ¥75,900 incl. tax, chrome ¥74,000 excl. tax / ¥81,400 incl. tax. U-shaped tube arm with an upright truck-style housing; heated, but power folding and power adjustment are lost (the site says auto-fold, the fold switch and the adjust switch all stop working). JB64 / JB74 only; does not fit the JC74 (NOMADE)"
  },
  "suzuki_chrome": {
   "label": "Door mirror covers (chrome)",
   "note": "Sierra genuine accessory catalogue (2025-07): chrome-plated, left and right pair, replacing the stock shells (fitted after removing the standard parts), so the shape is exactly the stock housing. JC: 99122-77R11 ¥24,970 (part ¥20,570 + reference labour ¥4,400); the price for JL 99122-77R00 is garbled in the PDF's columns and looks the same, unverified. Material not stated in the catalogue. JB64 uses the same two part numbers",
   "brand": "SUZUKI genuine accessory",
   "part": "99122-77R00 (JL, mirror without turn signal) / 99122-77R11 (JC, mirror with LED side turn signal)"
  }
 },
 "MUD_FLAPS": {
  "none": {
   "label": "None"
  },
  "damd_little_d": {
   "label": "little D. long mud flaps (front and rear)",
   "note": "Rubber, on the long side, only fits with the little D. rear bumper. Maker: at stock ride height the bottom edge sits about 130mm off the ground at the front and about 145mm at the rear. The saudade demo car wears similar long flaps (not part of the saudade kit)"
  },
  "damd_little_g_trad": {
   "label": "little G. TRADITIONAL mud flaps (front and rear)",
   "note": "TRADITIONAL only, long enough for lifted cars too; the lower half flares outward, with a bolted strip along the bottom edge and a thin steel cable pulling it into place at an angle"
  }
 },
 "OTHERS": {
  "showa_skirt": {
   "label": "AES lower door skirt panels",
   "note": "Matte-black AES sill covers for a clean waistline; imported by Heekis; an owner's actual build"
  },
  "kc_flex4": {
   "label": "FLEX ERA 4 fog lamps (pair)",
   "note": "4-LED square lamps, 160W combination beam; mounted at both ends of the KLC front bumper's lower tube (an owner's actual build; already in the front bumper model)"
  },
  "wlm_guard": {
   "label": "Rear side window guard",
   "note": "Per panel; 795×533 laser-cut square-hole plate, gutter-clamp mounted, hinged; the configurator's \"window guard (WLM)\""
  },
  "fr_ladder": {
   "label": "Jimny tailgate ladder",
   "note": "4 steps, hinge side; the configurator's \"rear ladder\""
  },
  "suzuki_cover": {
   "label": "Genuine hard spare-tyre cover (Jimny SIERRA lettering)",
   "note": "Hard resin front and side panels with an easily removable synthetic-leather back; Suzuki MSRP ¥52,800 (incl. tax), reference labour 0.2h, and the stock half cover must be removed first. A rhino hairline version at ¥33,880 (incl. tax) exists but is not modelled here. Suzuki's accessory page publishes no part number; the 9923B-77R21-003 in the old catalogue is not in the parts catalogue, and 77R is the JB64 series code (JB74 is 78R), so it has been removed"
  },
  "trasharoo": {
   "label": "Spare-tyre bag (Trasharoo)",
   "note": "The configurator's \"spare-tyre bag\""
  },
  "maxx": {
   "label": "MAXX JB74 flow-formed ten-spoke wheel 16×6.0J ±0",
   "note": "FB flat black, on TOYO Open Country M/T 225/75R16 (an owner's actual build)",
   "brand": "MAXX (made in Taiwan)"
  }
 },
 "RACK_PAINTS": {
  "none": {
   "label": "As supplied (black / aluminium)"
  },
  "ivory": {
   "label": "Ivory white paint"
  },
  "sand": {
   "label": "Sand paint"
  },
  "olive": {
   "label": "Olive green paint"
  }
 },
 "REAR_BUMPERS": {
  "urnieta_salado_rear": {
   "label": "SALADO rear bumper",
   "note": "Drawing UN-JIMNY-FB-002: height 216mm, developed length 1816. Half-height, wraps the corners at both ends, one light window on each side (a Salado badge on one side, URNIETA on the other), two step plates below. 16.4kg. NT$27,000 on Shopee Taiwan"
  },
  "damd_delta_rear": {
   "label": "little 5./Δ rear bumper (DB square tail lamps)",
   "note": "Unpainted ¥74,800 incl. tax (¥68,000 excl. tax), ABS, shared by little 5. and little Δ; fitted with DB square tail lamps, from outside in: amber indicator | red tail lamp (two round lenses) | clear reversing lamp. Two raised outer blocks with five horizontal ribs that wrap round the corners to the sides, a dark grey lip under each, a recessed centre section for the plate. This is the red little Δ demo car's scheme: bumper in body colour, lips grey. Dimensions measured off the official straight-rear photo using the plate as scale: width approx. 1540, height approx. 285, tail lamps approx. 217×68 at ±550. For cars built from 2024/11 the maker recommends adding a reversing camera"
  },
  "damd_little5_rear": {
   "label": "little 5./Δ rear bumper (grey, little 5. demo car scheme)",
   "note": "The same part as the previous entry (¥74,800 incl. tax, shipped unpainted), drawn here in the purple-blue little 5. demo car's scheme: bumper slate grey, lower lips dark grey. The maker's copy says body colour or grey schemes are available, but only the unpainted price is listed; paint is extra"
  },
  "damd_little_d_rear": {
   "label": "little D. rear bumper",
   "note": "Two separate end boxes (flat plates with bolts at the four corners) flank a dropped, recessed centre section, with a narrower beam below. The stock tail-lamp units are removed entirely and replaced by the kit's domed round lamps: an amber indicator plus a red tail lamp on each side, a clear reversing lamp on a triangular bracket under each outer corner, two red round reflectors on the lower beam; plate base included. Paint adds ¥24,200 (coarse matte black only). The DAMD demo car adds the ¥10,780 plate relocation kit to hang the plate on the tailgate; cars with parking sensors need drilling, and the stock plate needs resealing. The saudade kit uses this same bumper"
  },
  "damd_little_g_trad_rear": {
   "label": "little G. TRADITIONAL rear bumper",
   "note": "Exposed faces in coarse matte black, recesses in piano black; end caps wrapping to the over-fenders with two bolts each; a row of piano-black vertical teeth along the lower edge. One rectangular lamp per side (the maker says DB halogen square tail lamps, part number and size not published), lens split into four cells, from outside in amber indicator / red / red / clear reversing lamp. Plate in the centre"
  },
  "damd_little_g_adv_rear": {
   "label": "little G. ADVANCE rear bumper (415COBRA LED tail lamps)",
   "note": "Body-colour box bumper with a matte gunmetal lower lip and two straight chrome corner guards; comes with 415COBRA LIGHT SABER PRISTIGE LED tail lamps (rounded-rectangle red lamps with a clear centre light bar, sequential indicators). Paint adds ¥30,800; parking-sensor kits for Type 4 / Type 5 are ¥17,380 each. The AVENTURA kit also uses this bumper"
  },
  "damd_oem_painted": {
   "label": "Stock rear bumper painted body colour (little G. STANDARD add-on)",
   "note": "The STANDARD kit has no rear bumper; the demo car has the stock rear bumper's grain sanded off and painted body colour, stock tail lamps untouched. The single-item section says ¥118,800, while the kit add-on table says ¥96,800 (Types 1–3) / ¥107,800 (Type 4); the two disagree and both are quoted as written. Not for cars with parking sensors ordered from 2024/1 onwards"
  },
  "damd_roots_rear": {
   "label": "JIMNY the ROOTS. rear bumper + extensions",
   "note": "Upper tier: two end boxes (Cotton White), each with one amber and one red round lamp, recessed in the middle below the spare wheel; lower tier matte black with the plate in the centre, square red reflectors on both sides and one round reversing lamp to the right of the plate. The 'extensions' are Sierra-only left and right wheel-arch end caps bridging from the rear over-fender ends to the bumper ends; painted versions are always matte black. The DAMD demo car's upper tier is body-colour green, a scheme commented out in the maker's page HTML. Cars with parking sensors need drilling"
  },
  "damd_little_b_rear": {
   "label": "little B. rear bumper + extensions (coarse silver)",
   "note": "Same part as the ROOTS.; drawn here with the little B. demo car's coarse matte silver upper tier; the extensions (wheel-arch end caps) are always matte black"
  },
  "stock": {
   "label": "Stock"
  },
  "tube": {
   "label": "Tubular rear bumper (with tail-lamp mounts)",
   "note": "Ø76 straight tube, square end caps, tail-lamp mounting plates, exhaust tip on the right, tow hitch",
   "brand": "Various makers"
  },
  "klc_heritage_rear": {
   "label": "Traditional twin-tube rear bumper (black)",
   "note": "Thick straight tube with trapezoid tail-lamp plates at both ends, plate hung below. All stainless steel (not powder-coated steel), ¥88,000 incl. tax, keeps the stock tail lamps. The stock spare wheel must be relocated to fit it. Fits JB74W Sierra and JC74W Nomade; not for Sierra Type 5 or Nomade Type 2. Owner's own car configuration"
  },
  "urnieta_1970_rear": {
   "label": "1970 retro rear bumper",
   "note": "Drawing UN-JIMNY-FB-028: 1617×265, two round tail lamps per side (the maker says a tribute to the Nissan GT-R) plus a square recessed window, URNIETA light-bar badge on the right, plate in the centre. 8.4kg. Half-height, both ends fold up, round tail lamps, 8.4kg"
  },
  "beyond_rear": {
   "label": "Liberte retro rear bumper",
   "note": "Minimal tube bumper in stainless steel (the black is paint); MRK (Taiwan agent) price. Beyond's own version in mirror / black / ivory finishes is ¥83,600–¥86,900 incl. tax"
  },
  "beyond_rear_mirror": {
   "label": "Liberte retro rear bumper (mirror stainless)",
   "note": "Beyond's official mirror version; the maker's rear bumpers in three finishes are ¥83,600–¥86,900 incl. tax, and the mirror version's price is not listed separately on the maker's site"
  },
  "beyond_rear_ivory": {
   "label": "Liberte retro rear bumper (ivory)",
   "note": "Beyond's official ivory version; the maker's rear bumpers in three finishes are ¥83,600–¥86,900 incl. tax"
  },
  "jaos_rear_cowl": {
   "label": "Rear Sport Cowl rear lower spoiler",
   "note": "JAOS Taiwan agent MRK lists NT$26,500 (unpainted); Japan official ¥92,400 incl. tax / ¥84,000 excl. tax, part no. B042518, unpainted polyurethane body, stainless brackets, 4.65kg. Fits JB74 Types 1–3 (2018.07–2024.04); Type 4 and later are not in the maker's fitment table. The four round LED tail lamps are ECE-approved and pass Japanese roadworthiness inspection; a reversing-camera bracket is included (bracket only, no camera)."
  },
  "wildgoose_crawler_rear": {
   "label": "Crawler round-tube rear bumper JM-1103",
   "note": "Confirmed on RV4 Wild Goose's site: part no. JM-1103, ¥60,000 excl. tax / ¥66,000 incl. tax, 9.3kg. Steel, tube diameter 76.3mm, wall 1.6mm, black semi-matte paint, W1330×H200×D225mm; tail-lamp plates 4.5mm thick with lenses recessed 10mm for impact protection, tow ring Ø50mm (with Ø20mm lock point). The maker states tail lamps are not included; the separately sold 'combination lamps' must be chosen and fitted by the buyer, and the stock tail lamps are not reused. Fits Jimny JB64 and Jimny Sierra JB74 (slightly short at the sides on the JB74 because of its wide stock arches). The plate and spare wheel must be relocated."
  },
  "wildgoose_box_rear": {
   "label": "Square-tube off-road rear bumper JM-1101",
   "note": "Confirmed on RV4 Wild Goose's site: part no. JM-1101, ¥87,000 excl. tax / ¥95,700 incl. tax, 13.2kg. Steel, main section W1410×H100×D100mm, overall with brackets W1410×H200×D220mm; body 3.2mm, mounting brackets 9.0mm, reinforcement plates 3.2mm; cationic electrocoat plus black semi-matte paint. Designed mainly for the Jimny JB64; also fits the Jimny Sierra JB74 (slightly short at the sides because of the wide stock arches). The maker states tail lamps are not included; separately sold 'combination lamps' must be fitted by the buyer; the plate and spare wheel must be relocated."
  },
  "showa_iron_rear": {
   "label": "Iron Bumper steel-tube rear bumper",
   "note": "Ø60 main tube + Ø42 tail-lamp tube wings, matte black. ¥62,150 incl. tax. Fits JB74 Types 1–4 (not Type 5). The version with LED reversing lamps has two part numbers by model type: Types 1–3 E00951 ¥127,160; Type 4 and JC74 Type 1 E00952 ¥127,930"
  },
  "taniguchi_rear_pipe": {
   "label": "Steel-tube off-road rear bumper",
   "note": "Confirmed on TANIGUCHI's site: tube version (Off-road Rear Bumper) ¥63,800 incl. tax, tube diameter 48.6mm, wall 2.3mm, fits JB64/74 and JC74; square version (Rear Square Bumper) in steel is also ¥63,800 (a coincidence, not a typo), body approx. 4kg, plate 2mm, plus a stainless SUS304 #400 polished version at ¥121,000 incl. tax; tow-hitch version ¥128,700 incl. tax, tube diameter 48.6mm, wall 3.5mm, body approx. 15kg plus mounting brackets approx. 5kg, fits JB64/74 only (not JC74). Part numbers of all three not published by the maker."
  },
  "apio_tactical_rear": {
   "label": "Tactical rear bumper",
   "note": "Confirmed on APIO's site: ¥140,800 incl. tax, part no. 3032-71 unpainted; painted version (matte black) adds ¥33,000 incl. tax. Jimny Sierra JB74 only (not shared with JB64), vacuum-formed ABS. Includes the body, wide left and right extensions, tail/brake-lamp housings, indicator housings, reversing-lamp housings and reflectors; the housings replace the stock tail-lamp assemblies, reusing the stock bulbs, sockets and harness (the reversing lamps need an extension harness). 1660×280×460mm is the shipping box size, not the part's own dimensions; the part's dimensions and weight are not published by the maker. Some cars with parking sensors need drilling."
  },
  "apio_tactical_rear64": {
   "label": "Tactical rear bumper (JB64 version, for narrow over-fenders)",
   "note": "¥95,700 incl. tax (unpainted); matte black painted 3032-70B adds ¥25,300. Originally for the JB64, without the JB74 version's wide extensions; APIO's narrow over-fender product page states that a JB74 fitted with the narrow over-fenders must use this bumper. Two sets each of lamp housings, indicator housings and reversing-lamp housings, stock bulbs reused, plate moves to the tailgate. Model drawn from the JB74 version with both ends shortened"
  },
  "outclass_rear_abs": {
   "label": "TYPE2 ABS rear bumper",
   "note": "Confirmed on OUTCLASS's site: ¥41,600 excl. tax / ¥45,760 incl. tax (list price ¥83,200), part no. JB64JB74JC74-A-RB2ABS [200 size], ABS, fits JB64 / JB74 / JC74. Standard item is unpainted with no tail lamps; tail lamps (domestic small tail lamps or smoked LED version), Raptor black coating and parking-sensor drilling are all paid options."
  },
  "hamer_mx208": {
   "label": "MX208 steel rear bumper",
   "note": "1830×650×340 wrap-around steel plate, corner steps, light-bar slot, 50kg"
  }
 },
 "ROOF_LIGHTS": {
  "none": {
   "label": "None"
  },
  "round": {
   "label": "968 round lamps (pair)",
   "note": "With a roof rack they clamp to the rack's front edge; without one they fit IPF's own JB64 / JB74-specific lamp stay JS-001 (in front of the grille; IPF says it is designed for the 950SRL and 968, requires trimming the radiator under-cover and part of the stock front bumper, ¥16,720 incl. tax, stay extra). IPF publishes no drawing for JS-001, so its shape is estimated from photos of real cars. The catalogue used to say \"a pair of generic 7 in round lamps\", which matches no first-hand Japanese product: IPF's only round lamp sold as a pair is the 968 series, φ166×D75mm (about 6.5 in), halogen (H3 12V 55W), neither 7 in nor LED. The set includes 2 lamps, 2 covers, relay, harness and switch: S-9682 (clear) ¥16,940 incl. tax, S-9681 (gold) ¥18,150 incl. tax. For LED, IPF 900XLS φ200mm (about 7.9 in), 2,200 lm, 30W, ¥29,700 incl. tax, but the site notes it ships singly, so a pair means buying two.",
   "part": "S-9682 (clear cover) / S-9681 (gold cover)"
  },
  "kc_pro6": {
   "label": "Pro6 six-lamp bar (smiley covers)",
   "note": "994×154×85mm, six 152.4mm lamps at 156.6mm spacing, with black-and-yellow KC covers. KC supplies only universal mounts and no JB74-specific bracket: with a rack it bolts to the rack's front edge, without one an A-pillar bracket must be bought separately (drawn as the A-pillar-top type used by IPF 642JM2; KC does not make one). 11.34kg — with a flat rack it is already over the JB74 roof's 30kg dynamic load. Distributed in Taiwan by MRK; covers alone NT$600"
  }
 },
 "ROOF_RACKS": {
  "urnieta_salado": {
   "label": "SALADO full-length roof rack",
   "note": "1890×1366mm flat platform: 7 transverse 50mm channel slats (220mm pitch in the middle), a central longitudinal spine, a low round-tube perimeter frame and a pressed-aluminium wind deflector at the front. One long rail per side on the stock rain gutters, 3 feet per side. Dimensions from the maker drawing UN-JIMNY-FB-012; height above the roof not published by the maker"
  },
  "urnieta_salado_half": {
   "label": "SALADO half-length roof rack",
   "note": "Short version of the same rack, 2 feet per side. The maker does not publish the half rack's length; the model length is estimated from photos"
  },
  "damd_solid": {
   "label": "Solid Rack roof rack (listed as discontinued by the maker)",
   "note": "Japanese-made steel roof rack: black steel-tube frame with rounded front and rear ends, steel side panels each carried on four perforated box supports, checker plate at both ends and a flat centre deck; load about 20–30kg. ¥217,800 incl. tax, but the maker's site marks the price \"discontinued\" (hanbai shuryo) while the AVENTURA kit contents still list it — the rack on its own is probably no longer sold, so check with DAMD before ordering. Length 1503 and 155mm above the roof are measured off the official side photo"
  },
  "wood": {
   "label": "trip basket retro roof rack (half length)",
   "note": "1350×600×160mm, 13.5kg. Black steel wire basket; the wood is \"Accoya\", acetylated New Zealand radiata pine for high durability, shaped into a curved fairing wrapping the front edge plus side blocks — not a wooden floor. Mounts on crossbars over the front of the roof. Still on sale in Japan at ¥56,000 excl. tax / ¥61,600 incl. tax; plus the TERZO base set TB-HRKJB at ¥74,000 excl. tax (¥81,400 incl. tax), containing 4 JB64/JB74-specific PIAA TERZO feet and 2 main bars, adding about 5kg."
  },
  "wood_full": {
   "label": "trip basket retro roof rack (full length)",
   "note": "1350×1000×160mm, 16kg, same design as the half-length version. Japan ¥59,000 / ¥64,900 incl. tax; plus the TERZO base set TB-RRKJB at ¥77,000 excl. tax (¥84,700 incl. tax), containing 4 JB64/JB74-specific PIAA TERZO feet and 2 main bars, adding about 5kg. Taiwan: Shopee seller \"Fujii 74\" NT$19,800"
  },
  "none": {
   "label": "None"
  },
  "arb": {
   "label": "BASE Rack roof rack 1545×1285",
   "note": "Extruded-aluminium platform, dovetail side rails, 4 gutter feet; platform alone NT$15,000 (MRK); an owner's actual build"
  },
  "yakima": {
   "label": "LockNLoad platform roof rack 1520×1370",
   "note": "Transverse T-slot slats, 4 gutter feet (110 / 150 / 210mm); Yakima Taiwan price"
  },
  "pioneer": {
   "label": "Pioneer LT platform roof rack",
   "note": "1453×1339, 5 longitudinal slats, mounted on Backbone rails; price from Hei Si Qu (Taiwan)"
  },
  "ipf": {
   "label": "EXP Roof Rack type-A roof rack",
   "note": "1400×1250×38.8mm (excluding feet), 12.5kg, corrosion-resistant aluminium alloy. The ¥85,800 incl. tax on IPF Japan's site is the rack body only; the feet are sold separately: drip-rail legs low EXR-01L2 ¥50,600, high EXR-02L2 ¥30,800, so the fitted total in Japan is really ¥116,600–¥136,400; IPF also does not publish a load rating. The NT$32,000 below is MRK's Taiwan price."
  },
  "tw_generic": {
   "label": "Aluminium flat roof rack",
   "note": "1600×1260, 6 gutter feet, front deflector; fitting +NT$1,000",
   "brand": "Oil Warehouse (Taiwan)"
  },
  "platform": {
   "label": "Slimline II full-length roof rack",
   "note": "1560×1345, 6 gutter feet, front deflector, 31kg"
  },
  "fr34": {
   "label": "Slimline II 3/4 roof rack",
   "note": "1156×1345, 4 feet"
  },
  "jaos": {
   "label": "Flat Rack type-B roof rack",
   "note": "1400×1250, aluminium frame 32mm deep (39mm at the corner caps), 6 T-slot floor bars, front deflector, 16.4kg, ¥140,800 incl. tax. **Fitment in doubt**: JAOS's own product page lists the five-door JC74 as the application, while its vehicle search files it under JB74; the two pages contradict each other, so confirm with JAOS before ordering. The rack itself is rated 50kg, but the roof's dynamic load is still 30kg; minus the rack's 16.4kg only about 13kg is left on the move"
  },
  "apio": {
   "label": "Mighty Smart Rack roof rack",
   "note": "1420×1270, the front rail is angled forward to double as a deflector, powder-coated marine-grade aluminium with stainless hardware. Weighs 21.3kg; APIO's site states \"load capacity: not listed\". Under the JB74 roof's 30kg dynamic load limit, less than 9kg is left on the move after the rack's own weight."
  },
  "showa_foot": {
   "label": "A-x Roof Rack 1512 roof rack",
   "note": "Folded 1500×1250×40mm, deployed 1520×1270×60mm; folds on the roof and adjusts about 3cm in height. 27kg with feet, rated 50kg by the maker, but it already uses about ninety percent of the JB74 roof's 30kg dynamic load, leaving almost nothing to carry on the move — best for parked camping. Mounting bracket E20034 sold separately."
  },
  "basket": {
   "label": "A-x Half Rack M basket roof rack",
   "note": "The official name is \"Half Size M type\" (half roof), not Full size — SHOWA GARAGE also sells a separate \"Full Size M type\" (E20009) at ¥57,200 incl. tax, which is easy to confuse. 1400×1250mm, about 130mm folded, a semi-rigid fabric-and-frame construction (not a rigid metal rack), splits into two halves of about 7kg each, 11.4kg total; rated load 30kg, exactly the JB74 roof's dynamic limit, so about 18kg can be carried on the move after its own weight."
  }
 },
 "SIDE_MOULDINGS": {
  "none": {
   "label": "None"
  },
  "damd_little_g": {
   "label": "little G. side mouldings (stainless)",
   "note": "Black rubber strip inset with Japanese-made stainless plate, end caps at both ends, in three sections across front fender, door and rear quarter, at about door-handle top height. No paint option"
  },
  "damd_little_g_black": {
   "label": "little G. side mouldings (stainless plate painted black)",
   "note": "The same part; the ADVANCE page says \"the stainless plate in the kit is not black, the demo car's was painted black separately\"; the AVENTURA and TRADITIONAL demo cars also look all black. Cost of painting not given by the maker"
  }
 },
 "SIDE_STEPS": {
  "damd_little_g": {
   "label": "little G. aluminium step (comes with over-fender set)",
   "note": "Black aluminium extrusion with three bright strips on top and a bright outer edge, running from front arch to rear arch (about 1270mm, estimated from the maker's photos). Not sold alone: part of the \"Over Fender & Aluminium Step\" type-1 (¥140,800) and type-2 (¥162,800); the price is in the over-fender set. The brackets need holes drilled under the body"
  },
  "urnieta_salado": {
   "label": "SALADO tubular side bars",
   "note": "Drawing UN-JIMNY-FB-009: 3-door 1270×460 (5-door 1687×460). An outer round tube tucked in at both ends, with a slotted step plate bolted inside; two brackets per side into the chassis plus one diagonal brace at the front, and a clamp-on step pad in the middle. 27kg per set. No prices on the maker's site"
  },
  "urnieta_1970": {
   "label": "1970 side skirt panels",
   "note": "Drawing UN-JIMNY-FB-030: 1433×176. One-piece side skirt with a raised trim line along its length, three bolts along the top edge, and ends that sweep up into the arches. 4.6kg per set. No prices on the maker's site"
  },
  "damd_l5d": {
   "label": "little 5. / Δ side sill garnish",
   "note": "Appears only in the contents list of the little 5. / Δ full kits; no single-item price on the maker's site, and not in the (hidden) wheel and tyre set list either. ABS, a flat body-colour panel covering the stock black sill, from the rear of the front blister to the front of the rear blister. Size estimated from the maker's side photo: about 1290 long, about 65 high, standing about 20–30 proud of the door skin"
  },
  "none": {
   "label": "None"
  },
  "wlm": {
   "label": "WLM001 side steps",
   "note": "Ø50 round tube along the sill, two step plates, galvanised with black powder coat; bolts to factory holes, no drilling"
  },
  "jst": {
   "label": "JB74001 side steps",
   "note": "Straight tube with two flat step plates, both ends kicked up; heavy-duty / special editions up to NT$11,700; from an owner's real car",
   "brand": "JST (Jimmy Workshop, Taiwan)"
  },
  "tjm": {
   "label": "735STRSA57X rock sliders",
   "note": "Ø51, chassis-mounted, welded step plates; brackets extra NT$3,000"
  },
  "outclass": {
   "label": "Tube-frame side steps",
   "note": "OUTCLASS [220 size] version ¥80,000 excl. tax / ¥88,000 incl. tax. Steel, left and right pair, in matte black powder coat or Raptor black, road-inspection compliant. The weight field on the maker's site literally says \"not measured\"; part number and tube diameter are not published and no instructions are supplied. The maker also sells a powered version, the \"Auto Side Step [240 size]\", ¥119,000 excl. tax / ¥130,900 incl. tax; do not mix the two up when ordering."
  },
  "apio_guard": {
   "label": "H.D heavy-duty aluminium sill guards",
   "note": "APIO's site confirms the product name \"JB74 H.D Side Sill Guard\", listed for the Jimny Sierra JB74, ¥132,000 incl. tax, part number 3102-69. Body is a single layer of 3.0mm A5052 duralumin with steel mounting brackets; about 8kg for the pair (about 10kg packed). 1,350×185×210mm is the shipping box size; the part's own dimensions are not published by the maker. The maker states it is \"for vehicles with narrow fenders\" and \"cannot be used with the stock over-fenders\", so a JB74 with the standard wide arches cannot take it directly; narrow wings must be fitted first."
  },
  "taniguchi_bar": {
   "label": "Long-tube side steps (height adjustable)",
   "note": "The price was originally the right-side-only price; now shown as the pair: right ¥53,900, left ¥50,600, both incl. tax, ¥104,500 incl. tax for both sides (textured finish from October 2025, i.e. 2025/10). A JB74 Sierra-specific steel tube side step: 42.7mm tube, 2.3mm wall, 1200mm long, black powder coat. The tube itself is the step; there is no separate mesh plate. Height adjusts in two positions (about 9cm / about 6cm below the sill), stays inside the stock arches and passes road inspection."
  },
  "taniguchi_short": {
   "label": "Two-position short side steps",
   "note": "The price was originally the right-side-only price; now shown as the pair. Steel: right ¥41,250 / left ¥35,750, pair ¥77,000 incl. tax. Stainless: right ¥59,400 / left ¥56,100, pair ¥115,500 incl. tax (stainless price revised 2026.5.1). JB74 Sierra-specific, bolt-on with no drilling, step height adjusts in two positions (about 9cm / about 6cm below the sill), stays inside the stock arches and passes road inspection. The 550×145 mesh step size appears only on the JB64 steel version's page; the JB74 page does not publish step size or tube diameter, and no part numbers are published for any version."
  },
  "showa": {
   "label": "Long side steps + side garnish set (JB74)",
   "note": "No model called \"Type2\" exists on the maker's site. E00173's official name is \"Side Step Long Type, left/right set\", ¥69,300 incl. tax for the pair, steel in wrinkle-black paint, fits JB64 / JB74 Types 1 to 5. Because the stock JB74 sill cover cannot simply be removed, the maker states that E00207 \"AES Side Garnish for JB74\" (pair ¥57,750 incl. tax, JB74 only, not JC74) must be bought to replace the stock sill trim, so the full JB74 set actually costs ¥127,050 incl. tax. On Type 3 and later cars the floor insulation fouls the brackets and must be trimmed."
  },
  "wildgoose_fold": {
   "label": "Folding side step JM-2262",
   "note": "RV4 Wild Goose's site confirms ¥35,200 incl. tax (¥32,000 excl. tax) per side; left and right are part numbers JM-2262L / JM-2262R, ¥70,400 incl. tax for both. JB74W only; the JB64 uses a different part, JM-2162, not interchangeable. 4.2mm steel step plate, 6.0mm bracket, 5kg per side, folds up by hand. The maker notes that on Type 3 and later cars it may rattle against the body depending on fitment and needs a fix."
  },
  "wildgoose_guard": {
   "label": "Sill guard side step JM-2409",
   "note": "RV4 Wild Goose's site confirms ¥110,000 incl. tax (¥100,000 excl. tax) for the left/right pair (one car's worth), not per side. Galvanised steel sheet (bonderized: zinc plating plus chromate double coat), 2.3mm thick, black urethane paint, 1292mm long, 55mm outward projection; JB74-only part number JM-2409. The JB64 counterpart is a different item, \"Side Sill Guard 3.2\" JM-2408 (¥44,000 incl. tax, not the same guard step). The maker does not say whether 14.5kg is per side or per pair."
  },
  "customwagon": {
   "label": "Adjustable-reach side steps",
   "note": "Custom Wagon's site says, in the original, \"the adjustment range is about 50 centimetres\": reach is adjustable by about 50cm, not the 50mm this catalogue first listed. The maker's own text is taken as correct, fixing a tenfold error. ¥57,200 incl. tax (shop price, not a maker's suggested retail price), steel tube in satin black, JB74W only (AT and MT), brackets differ from the JB64 version and cannot be mixed. Cars built from July 2022 on, i.e. 2022/7 (Type 3), need the added insulation cut away to fit. Part number, tube diameter, dimensions and weight are not published by the maker."
  },
  "spieler": {
   "label": "7575 square-tube side steps",
   "note": "SPIELER's site has no \"75×75 square tube\" spec. The product page says only \"square tube\" plus \"aluminium top plate (burring-processed anti-slip)\"; 75×75 appears only in the URL slug jb64jb74sidestep7575 and is not confirmed in the maker's text, so it should be marked unverified. ¥88,000 incl. tax (¥80,000 excl. tax). The JB64 and JB74 share the main body with different brackets; mounts to existing body holes without drilling, adjustable reach, road-inspection compliant. Both the JB64 and JB74 versions currently show sold out."
  },
  "arb": {
   "label": "Rock Sliders",
   "note": "Ø60.3 main tube, 3 support tubes into the chassis, textured black, 18kg"
  },
  "ironman": {
   "label": "Rock Slider SS070",
   "note": "Ø50.8×2.6, 1280mm, satin black"
  },
  "hamer": {
   "label": "SM104 rock sliders",
   "note": "Round tube with grated step, 25kg, price on request"
  }
 },
 "SIMPLE": {
  "snorkel": {
   "label": "Snorkel",
   "note": "None of Japan's six big tuners (APIO, TANIGUCHI, JAOS, RV4 Wild Goose, MONSTER SPORT, SHOWA GARAGE) currently makes a JB74 snorkel; the APIO listed before was a mistake. In Japan, water-crossing prep goes via diff/transmission breather extensions and canister relocation instead (RV4 Wild Goose front and rear diff breather kit JM-5016 ¥9,350 incl. tax, A/T breather JM-5019 ¥3,300 incl. tax, canister relocation kit JM-5221 ¥19,800 incl. tax). Snorkels themselves still come mainly from overseas brands (Australia, South Africa, etc.); mind the side (left/right), and some need the wing cut"
  },
  "roofRack": {
   "label": "Roof rack",
   "options": {
    "none": "None",
    "platform": "Platform",
    "basket": "Basket"
   }
  },
  "awning": {
   "label": "Side awning",
   "options": {
    "none": "None",
    "left": "Left side",
    "right": "Right side"
   }
  },
  "windowGuards": {
   "label": "Window guards"
  },
  "ladder": {
   "label": "Rear ladder",
   "note": "Bolts to the body or integrates with the spare-wheel carrier",
   "brands": "Various makers"
  },
  "rockSliders": {
   "label": "Side steps / rock sliders"
  },
  "lightBar": {
   "label": "Roof light bar",
   "brands": "Various makers"
  },
  "spareBag": {
   "label": "Spare-wheel bag",
   "brands": "Various makers"
  }
 },
 "SNORKELS": {
  "none": {
   "label": "None"
  },
  "safari": {
   "label": "Round snorkel ISNORKEL070",
   "note": "Forward-facing ram head with hexagonal mesh, clamped so it can be turned. Tube diameter and material not published by Ironman (the Ø89 / LLDPE / wing-cutting details recorded earlier had no source). It was wrongly listed under Safari before: Safari has never made one for the JB74"
  },
  "bravo": {
   "label": "SSJN snorkel",
   "note": "Made in Girona, Spain. Perfectly round Ø89 head; the forward-facing elbow is clamped and turns 360°. Needs drilling and wing cutting (the maker's manual shows Drill / Cut, the bonnet has to come off, two M6 rivet nuts supplied): \"no drilling\" is a dealer's claim, not the maker's. Taiwan: MRK / Xiqi NT$18,800; Europe EUR 399"
  },
  "urnieta": {
   "label": "SALADO snorkel",
   "note": "Maker's drawing UN-JIMNY-FB-006: 1048 long × 675mm high, 2.3kg; not compatible with the JB64. This is the round drum head with louvres all the way round (360°); the kit comes with two interchangeable heads (URNIETA calls them Standard and Pre-Cleaner without describing their shapes). Replaces the stock bonnet trim. Shopee Taiwan NT$14,000"
  },
  "urnieta_ram": {
   "label": "SALADO snorkel (forward ram head)",
   "note": "The same SALADO kit fitted with the square head: a box reaching forward with a slatted opening facing the front and a UNT badge on the outside. The intake sits away from the body side, into the wind, so dust and spray behave differently than with the round drum head. Head shape taken from a Taiwan seller's real photos; URNIETA's site does not describe the shapes of the two heads"
  },
  "precleaner": {
   "label": "Cyclone pre-cleaner head (Ø180)",
   "note": "Ø180 clear cyclone bowl that spins dust out before it reaches the filter. Fits a 3.5-inch (89mm) snorkel, not 3-inch. PC35 is jimnybits' own stock code and the product page names no maker; the earlier \"Safari + PC35\" attribution was wrong"
  },
  "sleek": {
   "label": "Supa-Sleek V4 concealed snorkel",
   "note": "2-inch stainless tube hidden entirely inside a black trim panel; the intake is a louvred panel at the top of the A-pillar facing outward, not a rear-facing scoop. No drilling"
  },
  "tw_frp": {
   "label": "FRP snorkel (Brazilian style)",
   "note": "Sold by several Taiwan shops under their own names, none of which state a maker: Oil Warehouse NT$10,000 (plus 3,500 labour), Nanguo Jimmy 10,500, a Wuri (Taichung) shop 12,000–18,000. Wing hole about 83–110mm, plus four 8mm mounting holes drilled in the A-pillar",
   "brand": "Taiwan shops (own label)"
  },
  "tw_nodrill": {
   "label": "No-drill snorkel",
   "note": "JIMNY74 style selection; specs not published",
   "brand": "Taiwan shops (own label)"
  }
 },
 "SPARE_COVERS": {
  "damd_little_g": {
   "label": "little G. hard spare-tyre cover (stainless band)",
   "note": "Flat body-colour hard shell with a polished stainless band round the rim (lockable), and a black rounded oblong plate with a dd badge in the centre. Fits 195/80R15, outer diameter 685–695mm, tyre width 175–195mm. Painting ¥24,200 extra; the black-band version at ¥74,800 is discontinued"
  },
  "damd_tb_guard": {
   "label": "trip basket spare-tyre guard (wood panel)",
   "note": "Steel tube clamps grip both sides of the spare, a black steel plate bolts to the stock spare mount, and a round natural-wood panel covers the wheel face. Fits tyres of 685–720mm outer diameter and 185–225mm width; tie-down rope included. Dimensions estimated from official photos"
  },
  "none": {
   "label": "None"
  },
  "urnieta_salado": {
   "label": "SALADO extended spare-tyre cover",
   "note": "The outer lid folds down into a work table, with two latches and two stays. 3.4kg, also fits JB64. No price on the maker's site"
  },
  "urnieta_1970": {
   "label": "1970 spare-tyre cover",
   "note": "Two modes: MOLLE webbing panel or storage bag. 3.4kg, also fits JB64. No price on the maker's site"
  },
  "beyond_white": {
   "label": "Spare tyre cover, Elegant White",
   "note": "Vinyl-leather soft cover that simply slips on; the maker lists all JB64/JB74 Sierra/JC74 grades. List ¥5,500 (sale ¥3,850; the page does not make clear whether tax is included); comes with a BEYOND sticker, also in black as bestc-b. Not plain white: black and white vertical stripes, a white band across the middle printed with BEYOND JAPAN in black serif letters, a thin black line above and below, white piping. No dimensions published; stripe count and width estimated from product photos. This is the cover on Beyond's yellow demo car CODE16 (a JB64)"
  }
 },
 "SPARE_DELETES": {
  "none": {
   "label": "Keep spare tyre"
  },
  "alumania_bolt": {
   "label": "BackStyle BOLT hole-plug bolt set",
   "note": "4 fully machined aluminium dress-up bolts with silicone washers that plug the 4 M10 holes of the spare-tyre mount; black/silver/red/champagne gold, tool included. Fits JB64W/JB74W/JC74W. Hole positions not published by the maker; the 3D places them at the stock spare-mount positions"
  },
  "kproducts_bolt": {
   "label": "Back-door hole-plug bolts M10 P1.25 black (4 pcs)",
   "note": "Black-coated stainless M10×25, ¥418 incl. tax each, 4 needed (the price here is for 4). The maker lists JB23/33/43/64; the JB74 uses the same bolt size. Page shows out of stock"
  },
  "sunrise_cover": {
   "label": "Tyre-less rear hole cover panel (piano black)",
   "note": "ABS panel bolted on through the stock spare-mount holes, covering the whole spare-tyre mount base; also in carbon-look. Dimensions not published; the 3D follows the mount base (about 450×350)",
   "brand": "Auto Parts Sunrise"
  },
  "autorubys_plate": {
   "label": "Tyre-less rear number-plate relocation kit (centre of back door)",
   "note": "No drilling: uses the spare-mount holes to move the rear number plate to the centre of the back door; includes base, LED plate lamp and stainless bolts. Needs wiring, shop fitting recommended. Once fitted, the plate occupies the centre of the back door"
  }
 },
 "SPLIT_PAINTS": {
  "none": {
   "label": "Single colour (no split)"
  },
  "orange": {
   "label": "Retro orange",
   "note": "Beyond CODE01: ivory over orange"
  },
  "purple": {
   "label": "Purple (wrap film)",
   "note": "Beyond CODE20: grey over purple; the purple is wrap film"
  },
  "black": {
   "label": "Black (same as ZJ3)",
   "note": "Beyond CODE32: grey over black"
  },
  "cream": {
   "label": "Cream white"
  },
  "brown": {
   "label": "Dark brown"
  },
  "green": {
   "label": "Army green (same as ZZC)"
  },
  "red": {
   "label": "Brick red"
  }
 },
 "SPOILERS": {
  "none": {
   "label": "None"
  },
  "damd_wing": {
   "label": "little 5./Δ FRP rear wing (36°, as on the Δ demo car)",
   "note": "¥63,800 incl. tax (¥58,000 excl. tax), the only FRP part in the kit, unpainted. Angle freely adjustable; black metal stays clamp to the rear corners of the roof gutter and the top of the tailgate, no drilling. Both ends kick up into small fins, higher at the back. Span about 1210, chord about 250, leading edge about 15 above the roof, trailing edge flush with the tail; this entry is drawn at the 36° of the red little Δ demo car. Dimensions measured from official photos"
  },
  "damd_wing13": {
   "label": "little 5./Δ FRP rear wing (13°, as on the little 5. demo car)",
   "note": "The same part as the previous entry (¥63,800 incl. tax), drawn at the angle of the purple-blue little 5. demo car: about 13°, trailing edge only about 58mm above the roof. The wing-tip shapes look slightly different in the photos on the two pages; the maker does not say whether they are different parts, so this treats it as one part at two angles"
  },
  "rowen": {
   "label": "Roof Spoiler Electronics TYPE3 ducktail",
   "note": "¥117,700 incl. tax, raw FRP (single-colour paint +¥46,200, two-tone +¥66,000). A short ducktail on the rear edge of the roof, not a raised wing, with a linked LED third brake light built into the rear slope. Fits JB74W types 1–4; the maker says the LED does not pass Japanese inspection and must be disconnected for it, and fitting requires drilling. Shape estimated from official photos, most of which show the older 1K002R20"
  }
 },
 "STRIPES": {
  "none": {
   "label": "No decals"
  },
  "retro3": {
   "label": "Retro three-tone side stripe",
   "note": "Thin dark brown line + wide rust orange + beige lower band, three joined stripes running the full side along the crease above the sill. The set seen most on sand-coloured JB74s in Japan. NT$350–755 on Taiwan's Ruten marketplace depending on length and material; DIY-friendly, labour extra",
   "brand": "Ruten seller (cut vinyl)"
  },
  "stencil": {
   "label": "Military vehicle markings (stencil letters + bridge classification sign)",
   "note": "Placed after US Army TB 43-0209 and JGSDF vehicle markings: vehicle numbers on both front fenders, tyre pressure \"TP 26\" over the four arches (stock 180kPa), \"MOGAS\" under the fuel filler, unit codes on both sides of the tailgate; on the front bumper a unit code on the left and on the right a yellow-with-black bridge classification disc (NATO STANAG 2021; the JB74 at about 1.4 t is class 2) with \"TIE DOWN\" at the lower corner (bumper lettering is drawn only on the stock bumper and the TANIGUCHI tube bumper). Matte white stencil letters: white on a green car has the most contrast, black is almost invisible. No star insignia; the codes are fictitious and belong to no real unit. The price refers to generic military-style decals on Taiwan's Ruten, NT$462–629; this full set has to be cut to order by a sign shop",
   "brand": "Ruten seller (cut vinyl)"
  },
  "toolgear": {
   "label": "Factory tool-box-style low black band",
   "note": "A deep black band about 210mm tall between the lower door crease and the sill, with a thin silver-white edge along the bottom, leaving the upper door deliberately bare. Suzuki shows it on a white car, where the contrast is strongest. No separate price published by the maker"
  },
  "jaos": {
   "label": "JAOS low double stripe",
   "note": "Supplied as 2200×75mm strips that the installer trims to the body creases. Main band 78mm + 6mm body colour gap + 14mm thin line, set low, just above the sill garnish. Silver or black; the JAOS oval logo is cut out of the main band as clear PVC"
  },
  "damd_center": {
   "label": "Roof centre stripe (as on the DAMD little Δ demo car)",
   "note": "Off-white 25 + dark green 32 + off-white 25mm butted into one 82mm band (measured from the decal on the wing), running from the base of the windscreen along the centreline over the bonnet and down over its leading edge; with the little Δ face it continues down the top of the grille to the lamp surrounds, and with the DAMD wing it crosses the wing. On the roof it runs front to back, avoiding glass and tailgate. DAMD states this is only the demo car's decal (the \"center mark decal\"), not in the kit, and no Jimny-specific lengthwise centre stripe is sold, so a wrap shop has to cut it to this pattern",
   "brand": "Cut by a wrap shop"
  },
  "toy4": {
   "label": "Four-tone orange stripe (Toy Factory pattern)",
   "note": "Light orange thin line + salmon-orange gradient band + solid orange + wide near-black, four stripes crossing the door handles, the whole set rising 2.3 degrees towards the rear. On the original, all four turn 90 degrees together at the front to wrap the front fender face with concentric radiused corners; only the side section is drawn here"
  },
  "woodgrain": {
   "label": "Woodgrain side panels (woodie pattern)",
   "note": "Woodgrain film over the lower half of the doors and rear quarters, framed by a thin beige line top and bottom, about 245mm tall, running from ahead of the rear arch to behind the front arch, staying below the door handles, key barrel, front fender indicator and fuel filler. Styled after the woodgrain side decal on Beyond's yellow demo car CODE16 (a JB64); Beyond's official shop does not sell it and no JB74-specific woodgrain side decal was found, so the dimensions are set by this page and a wrap shop has to cut it to this pattern",
   "brand": "Cut by a wrap shop"
  }
 },
 "STYLES": {
  "jp_retro": {
   "label": "Japanese retro",
   "desc": "An ivory body with a matching SJ grille, so the whole face melts into the paint and only a brown, rust-orange and off-white stripe runs down the side. Black steel wheels on white-letter all-terrains, KLC stainless twin-tube bumpers front and rear. It stands just over 1.8 m tall: built for the street."
  },
  "au_offroad": {
   "label": "Aussie off-road",
   "desc": "The tallest, widest build here: 2-inch suspension plus a 2-inch body lift, 31-inch tyres under flares, a winch bumper and snorkel, a row of spotlights on the roof tray and a 270-degree awning. The grey body turns all the black gear into an outline, in the spirit of SHOWA GARAGE's grey outdoor demo car."
  },
  "au_jbox": {
   "label": "Factory Aussie off-road: JBOX",
   "desc": "ARB and Suzuki Australia's 2019 Project JBOX: Kinetic Yellow with a black roof, and every piece of added steel in black. ARB's smallest Summit bull bar with a WARN 8000 winch, a pair of round lamps with red covers on the bar, a red soft shackle in the middle, ARB rock sliders, a BASE platform rack with tubular side rails, OME suspension, black wheels and mud tyres. Yellow, black and red: Suzuki's own yellow demo car. ARB's press release says every part on JBOX was a prototype; the wheel and tyre models were never published, so black five-spokes and M/T tyres stand in."
  },
  "city": {
   "label": "Clean city build",
   "desc": "The clean way down: KLC TURTLES springs drop it about 5 cm, solid blue paint, and arch trims painted body colour with only a gunmetal edge left round each opening. A Grand Wagoneer-style #GD vertical-bar grille frames the round lamps in square bezels, and deep-dish 16×8J black steelies wear 215/65R16 road tyres. Almost no black plastic in sight and nothing on the roof. After KLC Heritage's JB74W demo car MATURE (the demo car runs whitewalls, which this page cannot draw yet; solid blue is a Japan-market colour)."
  },
  "military": {
   "label": "Military",
   "desc": "Factory Jungle Green with matte white stencils laid out the way US Army and JGSDF vehicles are marked: the vehicle number on the front wing, tyre pressure above the arch, fuel type under the filler, a unit code on the tailgate, and on the front bumper a unit code on one side and a yellow bridge-classification disc on the other. Stock 15-inch black steel wheels on black-letter mud tyres, APIO SJ grille in gunmetal, TANIGUCHI square-tube front bumper and tubular rear, a platform roof rack, and jerry cans, an axe and a shovel hung on the window guards."
  },
  "street_low": {
   "label": "Wide-body street low",
   "desc": "The wide-body way down: lowering springs with RAYS 18-inch bronze forged wheels and 55-series road tyres, and WALD over-fenders adding another 30mm per side, so the arches are filled by wheel rather than tyre. Nothing on the roof. Black body, black G face, and only the bronze wheels shine."
  },
  "narrow": {
   "label": "Tall and skinny",
   "desc": "The stock wide flares swapped for APIO's narrow ones, which pull each side in by 27–29mm, then kei-Jimny-spec 16×5.5J +20 white steelie-look wheels on tall, skinny 6.50R16 mud tyres and a 40mm lift. Tall, thin sidewalls: narrow tyres at a glance. Solid yellow body with a matching ROOTS grille and black Tactical bumpers front and rear. After APIO's NARROW SIERRA demo car (the demo car is white on black wheels; yellow on white is this page's colourway). In Japan the width change needs a structural-change registration; solid yellow is a Japan-market colour."
  },
  "cal_twotone": {
   "label": "California two-tone",
   "desc": "Off-white on top and retro orange below, arches included, so every piece of black plastic disappears. KLC's seven-slot black-frame grille with silver aluminium mesh (a fully painted grille would turn orange below the split line; the Su11 used on the maker's demo car is not in the catalogue yet), mirror-polished stainless bumpers front and rear, and chrome moon discs. The Beyond CODE01 colourway."
  },
  "grey_purple": {
   "label": "Grey and purple fashion",
   "desc": "Grey on top, purple below (arches included), mirror tube bumpers, silver retro alloy wheels on mud tyres, and silver mesh showing through the grille: a touch of streetwear. The Beyond CODE20 colourway; the purple is a wrap film."
  },
  "sunset_ja": {
   "label": "Sunset JA11",
   "desc": "A white car with one wide orange-red-brown gradient stripe, black tube bumpers, black steel wheels and four amber lamps in the grille: a nod to the 90s JA11. After Beyond CODE26."
  },
  "cream_hw": {
   "label": "Cream hardware",
   "desc": "Jungle Green body with every heavy piece in cream: tube bumpers front and rear, basket roof rack, steel wheels and the grille's round lamp bezels, plus yellow headlamp covers. There is a rack on the roof, but it reads as colour, not gear. After Beyond CODE13 and KLC's CAL demo car."
  },
  "camp": {
   "label": "Camping",
   "desc": "Yellow and black two-tone with the full set of things for climbing on and off: roof rack, awning, side steps and rear ladder. ARMANDO steel front bumper, Wild Goose square-tube rear bumper, dark grey metallic grille and matte bronze wheels. Quiet all-terrain tyres for long, calm drives."
  },
  "woodie": {
   "label": "Woodie wagon",
   "desc": "Black body with a natural-wood roof basket, chrome moon discs and white-letter tyres; the stock bumpers stay, with just a mirror tube added up front. Only three materials on the whole car: black, wood and chrome. A Grand Wagoneer-style woodie, after Beyond CODE14 and DAMD little B.'s woodgrain look."
  },
  "lc40": {
   "label": "LC40 red and white",
   "desc": "Red-wrapped body with the KLC Forty round-eye grille (frame in body red, lamp rings white), white RS Watanabe eight-spoke wheels on white-letter mud tyres, and a black twin-tube front bumper. The red and white of the Land Cruiser 40; the body red is 3M film, not a factory colour."
  },
  "yellow_vintage": {
   "label": "Yellow vintage iron",
   "desc": "Factory yellow with a black roof, APIO's Vintage Iron Grille in steel plate with Suzuki's genuine chrome Jimny script badge on its centre rib, a cream-framed woodgrain side decal, white WILDBOAR SR+ steelie-look wheels on Geolandar X-AT 215/70R16, and a mild APIO lift. After a TS3 \"Shonan Edition\" delivery on APIO's site (the page states Kinetic Yellow with black roof and a grille \"with script emblem\"; the wheel colour is not stated, white is used here). The woodgrain side decal is this page's addition, after Beyond CODE16."
  },
  "black_chrome": {
   "label": "Black chrome West Coast",
   "desc": "All-black body dressed in reflections: Beyond Liberte mirror-polished stainless bumpers front and rear, Suzuki's genuine chrome mirror caps, KLC FORTY round-eye grille with chrome lamp rings (KLC offers only white or gloss black rings; chrome is this page's choice), chrome SUPER MOON discs, white-letter Open Country R/T, and a Beyond white spare-tyre cover on the tailgate. The black base makes every piece of chrome pop. Styling references are Beyond demo car CODE16 and Lion Heart / RiSE's chrome car; both are yellow JB64s, so this swaps in JB74 parts and black paint. A styling reference, not a replica."
  }
 },
 "TENTS": {
  "none": {
   "label": "None"
  },
  "kamado_j3": {
   "label": "Canotier J3 Jimny-specific hard-shell rooftop tent",
   "note": "The only Jimny-specific rooftop tent: made from a 3D scan and bolted straight to the roof with no rack, and road-legal for the Japanese inspection (shaken) when fitted. ¥880,000 incl. tax with fitting (fitted only at the Gotemba shop), 48kg. Deployed 2100×1120×970mm, raised by gas struts, with the rear section extending back so a 180cm person can lie flat. Opening direction and extension length not published by the maker; drawn hinged at the front",
   "brand": "Kamado"
  },
  "fr_tent031": {
   "label": "Roof Top Tent, fold-over",
   "note": "US$1,199, 43kg, 330mm high closed, 2400×1300mm open, folds out over the side of the car with the aluminium ladder as the support, sleeps 2+. Mounts on a roof rack; the same maker's Slimline II has a JB74-specific part number. Fold-out direction and open height not published by the maker"
  },
  "autohome_columbus": {
   "label": "Columbus Small pop-up hard-shell tent",
   "note": "44kg, 2100×1300mm; two gas springs plus a crank raise the shell straight up, with no overhang beyond the car; one door on each side and one at the front. Price and closed / open heights not published by the maker"
  }
 },
 "TG_BAGS": {
  "none": {
   "label": "None"
  },
  "cllink_box": {
   "label": "Rear Gate Box (approx. 39L)",
   "note": "670W×360H×215D, PPE box on a steel bracket, 8.7kg, rated about 48kg, tool-free quick release, lockable; mounts in place of the spare tyre. The hanging soft bags found so far are unspecified Amazon items, so none are listed"
  }
 },
 "TG_FRAMES": {
  "none": {
   "label": "None"
  },
  "kikaiya_ladder": {
   "label": "Tail door ladder (aluminium)",
   "note": "Aluminium, 2.7kg, rated 100kg, bolt-on; the spare must come off first, so the 3D mounts it on the spare-mount holes in the middle of the back door. The shop gives only the package size 770×130×135; step count and actual position not published"
  },
  "pennylane_cargo": {
   "label": "Cargo carrier for JB64.74 (folding)",
   "note": "785×440 steel in matte black, folds up; carries an RV BOX85, ROTOPAX and the like. Load rating and whether tax is included not published; one write-up says the spare need not be removed, but this catalogue follows the shop's description and draws it on a bare back door",
   "brand": "PENNY LANE/PLUS SPORTS"
  }
 },
 "TG_PANELS": {
  "none": {
   "label": "None"
  },
  "outclass_frp": {
   "label": "Rear Gate Cover, 140 size (FRP, two-piece)",
   "note": "720W×495H, 255/260mm from the left/right edges of the back door; mounts on the stock spare-mount bolts. Ships in black primer (Raptor coating also available). Incl. tax (¥42,540 excl. tax)",
   "brand": "Outclass Cars"
  },
  "jaos_np": {
   "label": "Rear Hatch Panel, unpainted",
   "note": "AES resin, 2.1kg, fits the stock bolt positions, 1.0–1.5h labour. Panel dimensions not published (package 540H×1,280); the 3D draws it full width below the window, unverified. JAOS notes that removing the spare changes the overall length"
  },
  "jaos_cl": {
   "label": "Rear Hatch Panel, carbon-look",
   "note": "Carbon-look version of the above; the matte black painted version B097513MB is the same price, ¥50,600"
  },
  "klc_l2": {
   "label": "Smoothing Panel LEVEL II (unpainted)",
   "note": "ABS, full back-door width from below the window to the bottom edge; double-sided tape, no drilling. Dimensions not published; the 3D follows the area below the back-door window"
  },
  "klc_l2_paint": {
   "label": "Smoothing Panel LEVEL II (body colour)",
   "note": "As above, painted in a factory colour; the back door looks like one clean panel with no spare tyre"
  },
  "klc_frp": {
   "label": "Smoothing Panel (FRP, unpainted)",
   "note": "Bolt-on, rubber pad included. Dimensions not published; the 3D covers only the spare-mount area (about 560×400), unverified"
  },
  "kikaiya": {
   "label": "Smoothing Panel (carbon-look)",
   "note": "ABS, 1.35kg, bolt-on; also in matte black. The shop lists 710×500×80, unclear whether that is the panel or the package"
  }
 },
 "TYRES": {
  "t195": {
   "note": "Factory fitment"
  },
  "t215r15": {
   "note": "+2.4%, fits the stock wheels with no modification. The safest upgrade"
  },
  "t215r16": {
   "note": "+2%, may need minor trimming of the inner arch liner"
  },
  "t225r70": {
   "note": "+4%. DAMD's little G. AVENTURA demo car runs BFGoodrich KO2 LT225/70R16 102/99R white letters; DAMD states it does not fit at stock height, and the demo car is lifted 1 inch (about 25mm) with a trimmed front bumper"
  },
  "t225r16": {
   "note": "+7.4%, needs a 40-60mm lift and liner trimming; the owner's actual setup (MAXX 16×7)"
  },
  "t175r16": {
   "note": "-1%, the JB64's factory size, even narrower than the JB74's stock tyre, no modification; listed on the GEOLANDAR M/T G003 official site (black letters)"
  },
  "t185r16": {
   "note": "+3.9%, the classic narrow-and-tall Japanese size. Listed on the official sites for TOYO OPEN COUNTRY R/T (white letters), YOKOHAMA GEOLANDAR A/T G015 / X-AT G016 (some with white letters) and M/T G003 (black letters); 4.5-6.0J recommended (5.0J standard). URBAN OFF CRAFT Hamamatsu's JB74 runs it at stock height with no lift, but added a steering stabiliser because the narrow tyre hurt straight-line stability"
  },
  "t195r16c": {
   "note": "+3.3%, listed on the official sites for X-AT G016 (white letters) and M/T G003 (black letters); 5.0-6.0J recommended. The real car found looks like a JB43 rather than a JB74, so the no-lift claim is unverified"
  },
  "t205r16c": {
   "note": "+6.2%, LT commercial spec (M/T G003 official site, black letters), 5.5-6.5J recommended; no \"205/80R16\" on the official site. The lift is estimated from neighbouring sizes; there is no JB74 real-car statement"
  },
  "t650r16": {
   "note": "+10.7%, an inch-sized narrow-and-tall tyre listed only on the M/T G003 official site (black letters, radial), 4.5-6.0J recommended. APIO's narrow over-fender product page says their JB74 runs a 40mm lift + 16×5.5J inset 20 + 6.50R16 (or 205R16); the lift here follows that combination"
  },
  "t700r16": {
   "note": "+13.1%, listed only on the M/T G003 official site (black letters), 5.0-6.5J recommended; much narrower than a 31×10.5, the lift is an estimate"
  },
  "t225": {
   "note": "+3.7%, needs about 20mm of lift"
  },
  "t235": {
   "note": "+6.9%, needs a 40-50mm lift plus liner and bumper trimming; rubs at full lock and articulation. The Australian legal limit"
  },
  "t205r16": {
   "note": "Same outer diameter as 235/75R15 but lighter"
  },
  "t215r18": {
   "note": "Outer diameter 694mm, almost the same as the stock 195/80R15, so no lift is needed; the difference is all in the sidewall: a 55-series sidewall is only just over half the stock height, so the arch is filled by the wheel rather than the tyre"
  },
  "t225r55": {
   "note": "+1.7%, only slightly bigger than stock; TOYO's official table lists this size for OPEN COUNTRY H/T Ⅱ (98H, with white letters)"
  },
  "t215r65": {
   "note": "-1%, slightly shorter than the stock 195/80R15, with a tread 26mm wider. The size on DAMD's little 5. / Δ demo cars (OZ Rally Racing 16×6J -5 with BRIDGESTONE ALENZA 001); outer diameter 686, overall width 221 and standard rim 6½J are from Bridgestone's official ALENZA 001 size table. The LT version of TOYO OPEN COUNTRY R/T, 215/65R16 C 109/107Q, is listed with white letters on the official site; DAMD's little G. STANDARD / ADVANCE and little B. demo cars also use this size. YOKOHAMA RADIAL 360 STEEL comes in P215/65R16 96S with a white stripe (white ribbon, the tyre on KLC's MATURE / CHROME demo cars); this page cannot draw white stripes yet"
  },
  "t225r18": {
   "note": "+4.9%; this is the size on the real car running RAYS A-LAP-07X 18×7.0J +8, at stock height with no suspension change"
  },
  "t30": {
   "note": "+10%, needs a 50mm lift plus modification. Beyond the Australian legal limit"
  },
  "t31": {
   "note": "+13.5%; the standard answer is 50mm suspension + 25mm body lift + modification"
  },
  "t33": {
   "label": "33-inch",
   "note": "+21%, needs a 4-inch lift, -30 offset, heavy cutting of arches and bumpers, and 17/87 reduction gears"
  }
 },
 "TYRE_MODELS": {
  "bs_ht684": {
   "label": "DUELER H/T684Ⅱ highway tyre",
   "note": "The JB74 Sierra's factory tyre: Bridgestone's OE fitment list gives 195/80R15 96S, part no. PSR16069, ¥24,310 incl. tax. Continuous straight grooves plus continuous shoulder ribs, low noise"
  },
  "bs_alenza001": {
   "label": "ALENZA 001 SUV highway tyre",
   "note": "An SUV-specific on-road sport tyre (\"on-road sport tyre for SUVs\"). Only one 16-inch size: 215/65R16 98H, part no. PSR14900, ¥33,220 incl. tax (Bridgestone official size table). No white letters in the official table. This is the tyre on DAMD's little 5. / Δ demo cars"
  },
  "toyo_ht2": {
   "label": "OPEN COUNTRY H/T Ⅱ highway tyre",
   "note": "The official size table has no 195/80R15 or 215/70R16; 18-inch sizes are 225/60R18, 225/55R18 and 235/60R18, all with white letters. Low-noise highway tread with continuous shoulder ribs and straight longitudinal grooves"
  },
  "toyo_at3": {
   "label": "Open Country A/T III all-terrain tyre",
   "note": "White letters: Japan-spec 215/70R16, US-spec 235/75R15, 30×9.5, 31×10.5"
  },
  "bfg_ko2": {
   "label": "All-Terrain T/A KO2 all-terrain tyre",
   "note": "White letters (RWL) on most sizes"
  },
  "yk_g015": {
   "label": "GEOLANDAR A/T G015 all-terrain tyre",
   "note": "**The Japanese catalogue has neither 195/80R15 nor 215/70R16**; the usable size is 185/85R16 (white letters on one side). Not sold in Taiwan, replaced by the A/T4 G018. White letters on some sizes"
  },
  "fk_at3w": {
   "label": "WILDPEAK A/T3W all-terrain tyre",
   "note": "Black letters only"
  },
  "toyo_rt": {
   "label": "Open Country R/T rugged-terrain tyre",
   "note": "White letters are **not in the main JB74 sizes**: the official table lists no WL for 195/80R15 or 215/70R16; white letters come in 185/85R16, LT225/70R16 and 235/70R16 (retail SKU naming conflicts with the official table, to be checked on a real car). In the LT range, 215/65R16 C 109/107Q is also marked WL (TOYO official site; this is the tyre on DAMD's little B. demo car). Japan-spec has white letters on one side"
  },
  "yk_xat": {
   "label": "GEOLANDAR X-AT G016 rugged-terrain tyre",
   "note": "The JB74 sizes with white letters are **195/80R15 (white letters both sides) and 185/85R16**; LT215/70R16 has black letters. Note the 195/80R15 is a **G016A**, whose sidewalls differ from the G016 in the marketing photos. White letters: 195R16C, 215/70R16"
  },
  "nt_ridge": {
   "label": "Ridge Grappler rugged-terrain tyre",
   "note": "**Does not fit the JB74**: the smallest size is 265/70R16 with a minimum rim of 7.0J, so the stock 5.5J is out of spec. No Grappler model has white letters. Kept for reference only. Black letters only; few common JB74 sizes"
  },
  "kd_rt": {
   "label": "Klever R/T KR601 rugged-terrain tyre",
   "note": "White letters on some sizes"
  },
  "toyo_mt": {
   "label": "Open Country M/T mud-terrain tyre",
   "note": "White letters vary by size: **30×9.50R15 has them, 31×10.50R15 does not**; US-spec is all BSW. Every size usable on a JB74 is LT and needs a lift. Japan-spec has white letters on one side; LT spec"
  },
  "bs_mt674": {
   "label": "DUELER M/T 674 mud-terrain tyre",
   "note": "Bridgestone's official size table has only LT215/75R15 100/97Q and LT235/75R15C in 15 inches; the former is marked \"outline white letters on the reverse side\". This is the tyre in DAMD's the ROOTS. / little G. TRADITIONAL kits"
  },
  "bfg_km3": {
   "label": "Mud-Terrain T/A KM3 mud-terrain tyre",
   "note": "Black letters only"
  },
  "yk_g003": {
   "label": "GEOLANDAR M/T G003 mud-terrain tyre",
   "note": "**No white letters**: Yokohama states \"all G003 sizes are raised black letter with a rim protector bar\", so no market and no size has white letters. Japan-spec 215/70R16 has white letters"
  },
  "cp_stt": {
   "label": "Discoverer STT Pro mud-terrain tyre",
   "note": "Only one size fits the JB74: 31×10.50R15. 31×10.5R15 white letters"
  }
 },
 "WHEELS": {
  "oem": {
   "label": "Stock alloy wheel",
   "note": "Standard on the JC grade: five Y-spokes, each splitting into a V at mid-radius out to the rim, small black S cap, exposed lug nuts. The stock finish is a dark gunmetal (not bright silver); Suzuki does not publish the colour name. ET+5 and a 108 centre bore are trade-standard figures, also not published by the maker",
   "kind": "Stock",
   "finishes": {
    "GM": "Dark gunmetal (colour name not published by Suzuki)"
   }
  },
  "oemsteel": {
   "label": "Stock steel wheel (JL)",
   "note": "Standard on the JL grade, and the spare on every grade: pressed steel, a ring of 10 round holes, black S cap. Colour name and offset not published by the maker",
   "kind": "Stock",
   "finishes": {
    "BK": "Black paint (colour name not published by Suzuki)"
   }
  },
  "suzuki_acc15": {
   "label": "Genuine accessory alloy wheel (Jimny lettering)",
   "note": "Suzuki Japan genuine accessory \"Aluminium wheel (15 inch), machined + black, with Jimny logo\", ¥19,800 per wheel (manufacturer's suggested retail price, incl. tax), 15×5 1/2J; not usable as the spare. Five wide-angle spokes, a ring of 15 small vents outside the hub, machined bright outer lip. Offset not published by the maker; drawn here at the stock +5",
   "kind": "Stock",
   "brand": "SUZUKI Genuine Accessories",
   "finishes": {
    "BKM": "Machined + black"
   }
  },
  "suzuki_accsteel": {
   "label": "Genuine accessory steel wheel (matte black)",
   "note": "Suzuki genuine accessory \"Steel wheel set (15 inch) matte black\", ¥16,500 per wheel (incl. tax); same 10-hole steel design, no centre cap. Whether it is the same pressing as the JL standard wheel, and its offset, are not stated by the maker",
   "kind": "Stock",
   "brand": "SUZUKI Genuine Accessories",
   "finishes": {
    "MBK": "Matte black"
   }
  },
  "te37xt": {
   "label": "TE37XT for J forged wheel",
   "note": "Forged one-piece. A deep conical disc with 6 D-shaped windows (not six spokes), a thin bright line round the flat lip. RAYS lists two JIMNY SIERRA sizes: 16×5.5J ±0 (this entry) and 16×6.0J −5 (BC ¥84,700 / BR ¥89,100); 16×5.5J +20 is for the JB64. Centre bore 112, not hub-centric; the stock centre cap does not fit. Standard colours BC and BR, plus 18 made-to-order colours (+¥3,300 to ¥7,700); PH is the Black Shadow LTD. limited edition on a separate product page",
   "part": "06456550015BC / 06456550015BR",
   "finishes": {
    "BC": "Blast Black (BC)",
    "BR": "Bronze, anodised (BR)",
    "PH": "Matte Translucent Black (PH), Black Shadow LTD.",
    "DW": "Dash White (DW), made to order",
    "MB": "Matte Black (MB), made to order",
    "RE": "Red (RE), made to order",
    "DB": "Diamond Black (DB), made to order",
    "BL": "Mag Blue (BL), made to order",
    "BK": "Black (BK), made to order",
    "MZ": "Matte Gun Bronze (MZ), made to order",
    "GB": "Matte Blue Gunmetal (GB), made to order",
    "GM": "Gunmetal (GM), made to order",
    "GO": "Gold (GO), made to order",
    "DS": "Diamond Silver (DS), made to order",
    "DG": "Dark Gunmetal (DG), made to order",
    "HL": "Hyper Blue (HL), made to order",
    "IG": "Racing Green (IG), made to order",
    "MR": "Metallic Red (MR), made to order",
    "SI": "Shining Light Metal (SI), made to order",
    "HM": "Shining Black Metallic (HM), made to order",
    "SZ": "Shining Bronze Metal (SZ), made to order"
   }
  },
  "te37xt_ul": {
   "label": "TE37XT for J UL forged wheel",
   "note": "Lightweight version of the TE37XT for J (RAYS: about 350g lighter), 16×6.0J −6, centre bore 108.8; the stock centre cap fits (rear wheels only). No bright lip line, larger windows. Standard colour MT, plus the same made-to-order colours",
   "finishes": {
    "MT": "Matte Gun Black (MT)",
    "DW": "Dash White (DW), made to order",
    "MB": "Matte Black (MB), made to order",
    "RE": "Red (RE), made to order",
    "DB": "Diamond Black (DB), made to order",
    "BL": "Mag Blue (BL), made to order",
    "BK": "Black (BK), made to order",
    "MZ": "Matte Gun Bronze (MZ), made to order",
    "GB": "Matte Blue Gunmetal (GB), made to order",
    "GM": "Gunmetal (GM), made to order",
    "GO": "Gold (GO), made to order",
    "DS": "Diamond Silver (DS), made to order",
    "DG": "Dark Gunmetal (DG), made to order",
    "HL": "Hyper Blue (HL), made to order",
    "IG": "Racing Green (IG), made to order",
    "MR": "Metallic Red (MR), made to order",
    "SI": "Shining Light Metal (SI), made to order",
    "HM": "Shining Black Metallic (HM), made to order",
    "SZ": "Shining Bronze Metal (SZ), made to order"
   }
  },
  "alapj": {
   "label": "A-LAP-J forged ten-spoke wheel",
   "note": "Ten thin straight spokes set into a 55mm-deep L-shaped lip; on BD the lip is diamond-cut. The RAYS size chart names no vehicle, but RAYS copy says \"also fits the Sierra\"; going by offset this catalogue takes 16×5.5J ±0 (the +20 row is JB64). 16×6.0J −5 exists only as the 2324 LIMITED (PH) and DESERT EDITION (MI) limited editions, and −6 only as the PRO (DW)",
   "brand": "RAYS A-LAP",
   "part": "10026550015BD / 10026550015BR",
   "finishes": {
    "BD": "Black / rim diamond-cut (BD)",
    "BR": "Bronze, anodised (BR)"
   }
  },
  "alap07x": {
   "label": "A-LAP-07X forged seven-spoke wheel, 16 inch",
   "note": "Seven main spokes fork at half radius; neighbouring branches meet at seven nodes and each splits again to the rim (14 ends). The RAYS chart names no vehicle; 16×6.0J −5 (F3 face) is taken as the Sierra row by offset; 16×5.5J +20 is JB64",
   "brand": "RAYS A-LAP",
   "part": "10096606515BD / 10096606515BR",
   "finishes": {
    "BD": "Black / rim diamond-cut (BD)",
    "BR": "Bronze, anodised (BR)"
   }
  },
  "street18": {
   "label": "A-LAP-07X forged seven-spoke wheel, 18 inch",
   "note": "The 18-inch A-LAP-07X above (F1 face, S lip 32mm), 5×139.7, centre bore 108.8. RAYS's demo car runs 18×7.0J +8 with 225/60R18 at stock ride height; there is also a −2 (10098706215). The RAYS page gives no per-row vehicle or fender notes. WedsSport, MLJ and Bradley V stop at 16 inch for the JB74; this is the only current Japanese 18-inch JB74 wheel found",
   "brand": "RAYS A-LAP",
   "finishes": {
    "BD": "Black / rim diamond-cut (BD)",
    "BR": "Bronze, anodised (BR)"
   }
  },
  "gl57drx": {
   "label": "gram LIGHTS 57DR-X six-spoke wheel",
   "note": "Six spokes, wide at the root and narrowing outward, with a ridge down the middle; D2 face (deeper than the JB64's D1). The RAYS chart names no vehicle; 16×5.5J ±0 judged by offset. The stock centre cap fits the rear wheels only. Jungle Green is a limited colour",
   "finishes": {
    "AXZ": "Super Dark Gunmetal (AXZ)",
    "DXZ": "Jungle Green (DXZ), limited"
   }
  },
  "gl57xrx": {
   "label": "gram LIGHTS 57XR-X 2×6 wheel",
   "note": "Six main spokes split at 0.45R into 12 sharp blades running to the rim, with a raised ring of \"Speed Brick\" blocks round the outside. The 5-lug version comes only as 16×6.0J +5 (stock offset); the RAYS gallery shows it on a JB74. GL centre cap included",
   "part": "58306600515Z2 / 58306600515B2",
   "finishes": {
    "Z2": "Dark Bronze (Z2)",
    "B2": "Black Graphite (B2)"
   }
  },
  "td_f6boost": {
   "label": "TEAM DAYTONA F6 boost faux-beadlock wheel",
   "note": "Six heavy main spokes, each forking into a Y, rising out of a deep barrel; the outer ring is a faux beadlock with about 16 bolts. The Black Edition chart explicitly lists 16×6.0J −5 for JIMNY / JIMNY SIERRA / JIMNY NOMADE (16×5.5J +20 is JB64 only). Z5 ¥51,700; N1 and BOJ (Black Edition) ¥53,900",
   "part": "38066606515Z5 / 38066606515N1",
   "finishes": {
    "Z5": "Dark Bronze (Z5)",
    "N1": "Semi-gloss Black (N1)",
    "BOJ": "Semi-gloss Black (BOJ), Black Edition"
   }
  },
  "td_m9plus": {
   "label": "TEAM DAYTONA M9+ faux-beadlock wheel",
   "note": "Nine-node mesh: 9 large hexagonal windows outside, 9 small triangular windows inside, and a drilled, bolted faux-beadlock ring outside; LPS CAP V2 included. The RAYS chart names no vehicle; 16×6.0J −5 judged by offset (+20 is JB64). BEL is a clear-smoke disc with a black ring; AOJ is the SPEC-M",
   "part": "38126606515BOJ / 38126606515BEL",
   "finishes": {
    "BOJ": "Semi-gloss Black (BOJ)",
    "BEL": "Black / disc clear smoke (BEL)",
    "AOJ": "Semi-gloss Super Dark Gunmetal (AOJ), SPEC-M"
   }
  },
  "td_fdxj": {
   "label": "TEAM DAYTONA FDX-J twin-rail spoke wheel",
   "note": "Five spokes, each two parallel rails with a black channel between, opening into a V at the rim; the outer ring is a segmented faux beadlock alternating black plates and bright faces. Barrel depth 67.8mm (RAYS). The chart names no vehicle; 16×5.5J ±0 judged by offset (+20 is JB64)",
   "part": "38846550015DW / 38846550015BNN",
   "finishes": {
    "DW": "Black / diamond-cut (DW)",
    "BNN": "Black (BNN), FDX-J collection"
   }
  },
  "td_d108": {
   "label": "TEAM DAYTONA D108 eight-spoke wheel",
   "note": "Eight flat, wide spokes (nearly as wide as the windows), flat face, deep barrel, plain wide lip; LPS CAP V2 included. Only one 5-lug size; the RAYS gallery has a Jimny Sierra photo. Matte black only (Dark Bronze comes only in 6-lug 17/18 inch)",
   "finishes": {
    "BPJ": "Matte Black (BPJ)"
   }
  },
  "crag_tgrabic2": {
   "label": "CRAG T-GRABIC II MC+ faux-beadlock wheel",
   "note": "Six heavy spokes (with a milled groove down the middle) diving into a recessed hub, a ring of 18 square holes outside them, and an arched faux beadlock with machined bright bolts beyond that. WORK's only non-JB64 5H-139.7 row is 16×5.5J ±0, but WORK's JB74 fitment chart does not list it; confirm with WORK before fitting. Made in Japan",
   "finishes": {
    "BLKPM": "Black Pierce Machining (BLKPM)"
   }
  },
  "crag_galvatre2": {
   "label": "CRAG GALVATRE 2 three-piece wheel",
   "note": "Three-piece: a slightly directional five-spoke star sunk into a deep stepped polished lip, about 40 chrome through-bolts round the outside, no centre cap. WORK lists no JB74 row; offset depends on the three-piece build (6.0J can be +26 / +13 / 0 / −12 / −25), taken here as ±0. MGM 5.5J ¥79,200, 6.0J ¥80,300; MSP costs ¥2,200 more. Semi-custom colours and plated bolts are also offered. A demo JB74 runs it at 16×5.5J",
   "finishes": {
    "MGM": "Matte Carbon (MGM)",
    "MSP": "Cut Clear (MSP)"
   }
  },
  "mv06": {
   "label": "MUD VANCE 06 V twin-spoke wheel",
   "note": "Five pairs of V twin spokes fanning out from a raised hub ring to the rim; the outer edge is a faceted block-style guard. Weds lists Jimny Sierra (JB74, 43) and the JC74: 16×6.0J −5 (this entry) or 15×6.0J ±0 (¥35,200 to ¥36,300). Centre bore 110.5; no cap supplied for 5H-139.7",
   "part": "40228 / 40227",
   "finishes": {
    "FMB": "Full Matte Black",
    "MBP": "Matte Black Polish",
    "BPBC": "Black Polish Bronze Clear"
   }
  },
  "mv07": {
   "label": "MUD VANCE 07 split star-spoke wheel",
   "note": "Five star spokes, each split in two with a long slot between; the face stands 5mm proud of the rim (Weds: disc protrusion 5mm), with about 20 bright faux rivets round the outside. Sierra size is 15×6.0J ±0 only",
   "part": "40532 / 40544",
   "finishes": {
    "FMB": "Full Matte Black",
    "FG": "Flint Gray"
   }
  },
  "mv08": {
   "label": "MUD VANCE 08 trident-spoke wheel",
   "note": "Five main spokes each forking into three to the rim, about 15 bright faux rivets round the outside. JB74 / JC74 16×6.0J −5; also 15×6.0J ±0 (¥36,300)",
   "part": "41127 / 41141",
   "finishes": {
    "FB": "Flint Black",
    "MBR": "Matte Bronze"
   }
  },
  "mvx_f": {
   "label": "MUD VANCE X Type F twin-ring window wheel",
   "note": "Flat rally disc: 20 windows on the outer ring, 10 smaller ones on the inner. Centre bore 108.25 (hub-centric); the stock rear centre cap fits. JB74 / JC74 16×6.0J −5",
   "part": "41547 / 41556",
   "finishes": {
    "FMB": "Full Matte Black",
    "FBR": "Flint Bronze"
   }
  },
  "mvx_m": {
   "label": "MUD VANCE X Type M mesh wheel",
   "note": "X-series 20-window outer ring; the inner ring is a cross mesh (10 diamond windows plus small triangles). JB74 / JC74 16×6.0J −5; the stock rear centre cap fits",
   "part": "41565 / 41579",
   "finishes": {
    "FMB": "Full Matte Black",
    "MGM": "Matte Gunmetal"
   }
  },
  "mvx_s": {
   "label": "MUD VANCE X Type S wide paddle-spoke wheel",
   "note": "X-series 20-window outer ring with five very wide paddle spokes inside. JB74 / JC74 16×6.0J −5; also 15×6.0J ±0 (¥35,200 to ¥36,300)",
   "part": "41597 / 41612",
   "finishes": {
    "FMB": "Full Matte Black",
    "FG": "Flint Gray"
   }
  },
  "keeler": {
   "label": "KEELER TACTICS six-spoke wheel",
   "note": "Classic six-spoke 4x4 face, a deep groove down each wide spoke, stepped lip. Weds chart: Jimny Sierra (JB31, 43, 74) 15×6.0J ±0; centre cap sold separately. The cheapest Japanese aftermarket wheel in the catalogue",
   "part": "39705 / 39722",
   "finishes": {
    "HS": "Hyper Silver",
    "GB": "Gloss Black"
   }
  },
  "xj03": {
   "label": "XTREME-J XJ03 eight-hole faux-beadlock wheel",
   "note": "Deep concave disc with eight large two-stage round holes, a smoked faux-beadlock ring round the outside with about 20 black bolts. MLJ chart *2: 16×6.0J −5, for the \"JB74 Jimny Sierra, stock cap compatible\"; 16×5.5J +20 is JB64. Centre bore 108.5",
   "finishes": {
    "FBSF": "Flat Black / Smoke Flange"
   }
  },
  "xtremej": {
   "label": "XTREME-J XJ04 cross-mesh faux-beadlock wheel",
   "note": "A chunky nine-fold cross mesh (large hexagonal windows plus small triangular windows at the rim), with a stainless-bolt faux-beadlock ring outside (outer flange undercut). MLJ chart *4: 16×5.5J −5 for the JB74; 16×5.5J +22 is JB23 / JB64. Satin Black ¥59,400, the other two colours ¥62,700. Centre bore not published by the maker",
   "finishes": {
    "SB": "Satin Black",
    "GBMS": "Gloss Black Machined / Smoke Clear",
    "MBBR": "Matte Bronze / Black Rim"
   }
  },
  "xj07": {
   "label": "XTREME-J XJ07 trapezoid-window faux-beadlock wheel",
   "note": "Eight trapezoidal D windows; 16×6.0J −5 (*9, JB74 Jimny Sierra) is ULTRA DEEP CONCAVE (the deepest in the range), with a black faux-beadlock ring of about 24 bolts outside. The old catalogue's \"no faux beadlock\" was wrong. Bore 108.5. Satin Black ¥62,700, Matte Bronze Black Rim ¥67,100",
   "finishes": {
    "SB": "Satin Black",
    "MBBR": "Matte Bronze Black Rim"
   }
  },
  "xj08": {
   "label": "XTREME-J XJ08 double-gear wheel",
   "note": "New for 2025-09: 16 fins and 16 secondary spokes, inner and outer window rings offset by half a step like two layers of gears; the outer ring is a genuinely drilled faux beadlock with hex bolts. MLJ chart *2: JB74 Sierra / JC74 Nomade 16×6.0J −5; +20 is JB64",
   "finishes": {
    "SB": "Satin Black",
    "GM": "Gloss Machined",
    "MBBR": "Matte Bronze / Black Rim"
   }
  },
  "daytona_ss": {
   "label": "DAYTONA SS two-piece steel wheel",
   "note": "The classic Daytona steel wheel: 10 teardrop vents, a raised pressed hub, thin red and blue pinstripes on the rim. MLJ chart *9 (JB74 Jimny Sierra): 16×6.0J ±0 ¥29,700, 15×6.0J ±0 ¥28,600; both offsets are published (the old catalogue's \"not published\" was wrong). MLJ forbids spacers and impact wrenches. The 16×5.5J +20 row is JB64",
   "kind": "Retro",
   "finishes": {
    "BK": "BLACK (red / blue line)"
   }
  },
  "nitro_h12": {
   "label": "NITRO POWER H12 SHOTGUN wheel",
   "note": "Military-style disc: 12 round holes (with ribbed walls), a NITRO POWER lettering ring, and an armoured-look outer edge with dedicated black through-bolts and notches. 16×6.0J −5, centre bore 108.8; no cap for 5H. The factory JB74 colours are BBK / BKM / SSM plus three Tactical colours; the old catalogue's \"matte antique bronze\" is not a factory colour. 15×6.0J −5 BBK ¥46,750",
   "part": "L1726605D105030N (BBK)",
   "finishes": {
    "BBK": "Barrel Black (BBK)",
    "BKM": "Black Clear / Machining (BKM)",
    "SSM": "Semi-gloss Smoke / Machined Face (SSM)",
    "SOG": "Semi-gloss OD Green (SOG), Tactical",
    "SSB": "Semi-gloss Sand Beige (SSB), Tactical",
    "SGK": "Semi-gloss Concrete (SGK), Tactical"
   }
  },
  "nitro_m10": {
   "label": "NITRO POWER M10 PERSHING ten-spoke wheel",
   "note": "Ten creased straight spokes, medium concave, with a pin-type faux beadlock outside. 16×6.0J −5, centre bore 108.8, load rating 700kg; the page names no vehicle, judged JB74 by size",
   "part": "X1666605D105SB00 (SBM)",
   "finishes": {
    "SBM": "Semi-gloss Black / Machining (SBM)",
    "BMB": "Black / DC + Machining / Black Clear (BMB)",
    "BBK": "Barrel Black (BBK)"
   }
  },
  "nitro_m29": {
   "label": "NITRO POWER M29 STINGER mesh wheel",
   "note": "2×9 mesh with large pads at the crossings; the outer edge uses the same armoured through-bolt rim as the H12. The HSM photo is labelled \"jimny-size 16x6J-5\"; centre bore 108.8",
   "part": "X1936605D1050300 (BBK)",
   "finishes": {
    "BBK": "Barrel Black (BBK)",
    "HSM": "Hyper Silver / Machined Face (HSM)",
    "SBC": "Semi-gloss Black Clear (SBC)"
   }
  },
  "mudrider": {
   "label": "ROADMAX MUD RIDER eight-spoke wheel",
   "note": "A plain eight heavy spokes with a cast faux-beadlock edge, one grey only. 15×5.5J +5 is exactly the JB74 stock size and offset, but the page names no vehicle; centre bore 108.8",
   "finishes": {
    "MGR": "Metallic Grey (MGR)"
   }
  },
  "ppx_mk6": {
   "label": "PPX MK6 hollow five-spoke wheel",
   "note": "Five wide spokes milled hollow, leaving only the rib outline (maker: \"the spoke centres are also machined, leaving the edges as ribs\"), with a faux beadlock of 20 square recesses round the outside (no bolts). 16×6.0J ±0, centre bore 108.3, maximum protrusion 0.0mm; launched 2025-12, no vehicle named on the chart",
   "finishes": {
    "SGM": "Stealth Grey Metallic"
   }
  },
  "bradley": {
   "label": "BRADLEY V five-spoke wheel",
   "note": "Five very wide paddle spokes (not six), shark-fin windows only on the outer 55%, a raised lug-nut ring. Low-pressure cast, made in Japan, centre bore 110. JB74 / JC74: 16×5.5J ±0 (FACE2 flat, this entry) or 16×6.0J −6 (FACE3, ¥56,100, available in BSI bright silver, not in MGM)",
   "finishes": {
    "GMT": "Gunmetallic",
    "PWI": "Pearl White",
    "MBK": "Matte Black",
    "MBR": "Matte Bronze",
    "MGM": "Matte Gunmetallic"
   }
  },
  "bradley_evo": {
   "label": "BRADLEY V EVOLUTION lightweight five-spoke wheel",
   "note": "Lightweight BRADLEY V (MAT process, 6.4kg), spokes about a quarter slimmer, larger windows. JB74 / JC74 16×5.5J ±0; the competition SPEC-C 16×5.5J −20 (6.1kg, four more colours at ¥55,550 to ¥56,650) needs wider fenders. Centre bore 110.5",
   "finishes": {
    "SBK": "Super Black",
    "PWI": "Pearl White",
    "MBK": "Matte Black",
    "MBR": "Matte Bronze"
   }
  },
  "bradley_takumi": {
   "label": "BRADLEY FORGED TAKUMI forged five-spoke wheel",
   "note": "8,000-tonne forging, fully CNC machined: five sharp straight spokes, triangular shark-fin windows pointing at the hub, L-centre concave. JB74 / JC74 16×6.5J −5 is marked \"tuner size\" and needs wider fenders; product page ¥97,000 excl. tax (¥106,700 incl. tax), but the 2026-09 price list PDF does not list this 5-lug size. Centre bore 110.3",
   "finishes": {
    "MDG": "Matte Deep Grey",
    "MSB": "Matte Shadow Black",
    "MTB": "Matte Titanium Bronze"
   }
  },
  "airg_massive": {
   "label": "Air/G Massive eight-oval-hole wheel",
   "note": "Deep concave disc with eight radial oval holes edged in wide bright chamfers; the outer ring is a crenellated faux beadlock with 8 hex bolts; black gear-edged cap included. JB74 / JC74 16×6.0J ±0 (FACE5)",
   "finishes": {
    "MBK": "Matte Black",
    "GHG": "Ghost Edition"
   }
  },
  "airg_rocks": {
   "label": "Air/G Rocks Y-mesh wheel",
   "note": "Ten spokes splitting into Ys at 0.7R to form a dense, deep-concave mesh; crenellated faux-beadlock ring with 8 black bolts outside, diamond-cut outer edge. JB74 / JC74 16×6.0J −5 (FACE6). SBB is while stocks last",
   "finishes": {
    "MBK": "Matte Black / rim diamond-cut",
    "SBB": "Stealth Bronze Brushed / rim diamond-cut, while stocks last",
    "GHG": "Ghost Edition"
   }
  },
  "airg_vulcan": {
   "label": "Air/G VULCAN double-ring window wheel",
   "note": "Stepped concave disc with 12 small teardrop windows on the inner ring and 16 rounded-square windows on the outer ring; a faux bead-lock ring of about 30 bright bolts alternating with recesses; black cap with a gear-tooth edge. JB74/JC74 16×6.0J ±0 (FACE-X)",
   "finishes": {
    "MGM": "Matte Gunmetallic (MGM)",
    "MBR": "Matte Bronze (MBR)",
    "GHG": "Ghost Edition"
   }
  },
  "wildboar": {
   "label": "WILDBOAR X five-spoke star wheel",
   "note": "Five slim arrow-shaped spokes with a centre ridge (not eight spokes), tucked inside the rim to show a deep lip; flat cap in matching colour. 15×6.0J −5, ¥47,300 per wheel (incl. tax), approx. 7.35kg, for JB74/JB43/JB33/JB32/JB31; APIO shows 215/75R15 fitting at stock ride height without rubbing. Centre bore not published",
   "part": "7200-15R (Raid Black) / 7200-15G (Gun Black)",
   "finishes": {
    "R": "Raid Black (gloss black)",
    "G": "Gun Black (matte black)"
   }
  },
  "wildboar_x2": {
   "label": "WILDBOAR X2 five-spoke star wheel",
   "note": "Sharper version of the X: full-length ridges, spoke tips fold forward at the rim, no cap, bright-machined ring around the hub bore. For JB74: 16×5.5J −5 (8.2kg); 16×6.0J ±0 is the Sierra-only concave face, but is now left only in Iron Black",
   "part": "7200-44R/7200-44B",
   "finishes": {
    "R": "Raid Black",
    "B": "Iron Black (matte)"
   }
  },
  "wildboar_sr": {
   "label": "WILDBOAR SR four-slot wheel",
   "note": "Pressed-steel look: flat outer band and dished centre, four slim arc slots at 1:30/4:30/7:30/10:30. 16×6.0J −5 only in Iron Black and Cotton White, 8kg, dedicated cap included; APIO notes a stock-bumper JB74 on 205R16 needs about 40mm of lift",
   "kind": "Retro",
   "part": "7200-47B/7200-47W",
   "finishes": {
    "B": "Iron Black (matte black)",
    "W": "Cotton White (gloss white)"
   }
  },
  "wildboar_sr15": {
   "label": "WILDBOAR SR four-slot wheel 15-inch",
   "note": "The same SR in 15×6.0J −5: three colours, ¥47,300 per wheel (incl. tax), 7.0kg; the 15-inch has no centre cap, nuts exposed. Used on DAMD's little D./the ROOTS. demo cars (little D. in black, ROOTS in grey)",
   "kind": "Retro",
   "part": "7200-18B/7200-18H",
   "finishes": {
    "B": "Iron Black (matte black)",
    "H": "Iron Grey (gloss grey)",
    "W": "Cotton White (gloss white)"
   }
  },
  "wildboar_srplus": {
   "label": "WILDBOAR SR+ pressed-steel-style wheel",
   "note": "SR variant: slimmer, longer arc slots each set in a pressed channel, a raised steel-wheel-style dome hub, multi-step rim; no cap, APIO large chrome cap optional. 16×6.0J −5 8.8kg; 15×6.0J −5 ¥47,300",
   "kind": "Retro",
   "part": "7200-49W/7200-49B",
   "finishes": {
    "W": "Cotton White",
    "B": "Iron Black"
   }
  },
  "wildboar_d": {
   "label": "WILDBOAR D lotus-root pattern wheel",
   "note": "Deep-set disc with a single ring of 16 coned countersunk holes (lotus-root pattern); the outer lip band is a contrasting colour. APIO splits the offset by finish: 16×6.0J −5 only in Semi-Gloss Black/Wood Copper (7200-62F, new colour 2026-04-20); Gloss Black/Smoke Clear is 16×6.0J ±0 (7200-62B). 8.62kg, no centre cap",
   "finishes": {
    "F": "Semi-Gloss Black / Wood Copper (rim)"
   }
  },
  "wildboar_ventura": {
   "label": "WILDBOAR Ventura 12-slot steel-style wheel",
   "note": "Classic 12-slot steel-wheel look: tangential oval vents in pressed dimples, three tiers from coned outer band to dished hub disc to raised nut boss. Sierra/Nomade 15×6.0J −5 in four colours (chrome ¥72,600); 16×6.0J −5 black only (9.7kg)",
   "kind": "Retro",
   "part": "7200-31B/7200-31W",
   "finishes": {
    "B": "Iron Black",
    "W": "White",
    "S": "Bright Silver",
    "C": "Bright Chrome (sputtered)"
   }
  },
  "wildboar_hr": {
   "label": "WILDBOAR HR American chrome slot wheel",
   "note": "West-coast hot-rod chrome slot wheel: five rounded blades in a centre star, nuts in deep wells between the spokes, five arc slots on the outer ring, deep polished disc wall; small dome cap usable on the front wheels. 15×6.0J −5, 8.0kg; APIO notes the JC74's larger calipers limit balance-weight placement",
   "kind": "Retro",
   "finishes": {
    "C": "Chrome (sputtered)"
   }
  },
  "dean_cross": {
   "label": "CROSS COUNTRY five-slot steel-wheel face",
   "note": "Steel-wheel-style disc with two pressed steps and five long arc slots near the rim; a chrome five-window centre plate plus dome cap covers the nuts (remove it to expose 5 nut seats). DEAN's Jimny fitment chart lists 16×6.0J −5 for JB74/JB33/JB43/JC74, all three colours ¥44,000 per wheel (incl. tax); the old catalogue used a Taiwan shop price of NT$10,500, now replaced by the maker's yen price. The missing Burnish Gray added (machined bright rim)",
   "kind": "Retro",
   "finishes": {
    "MBK": "Matte Black",
    "MW": "Margaret White",
    "BG": "Burnish Gray"
   }
  },
  "dean_california": {
   "label": "CALIFORNIA turbine-face wheel",
   "note": "24 slim radial slots, half open and half blind; a large chrome centre disc, rope-pattern ring and bullet cap cover the nuts; smooth bowl-shaped outer rim. JB74/JC74 16×6.0J −5, centre bore 108.8. Matte Black ¥44,000, Burnish Gray ¥46,200 (the ¥46,200 in the old catalogue was the BG price)",
   "kind": "Retro",
   "finishes": {
    "MBK": "Matte Black",
    "BG": "Burnish Gray"
   }
  },
  "dean_colorado": {
   "label": "COLORADO closed-disc wheel",
   "note": "Fully closed steel-wheel-style disc with three tiers, a ring of 18 dummy hex bolts, a black centre plate held by 8 Torx screws plus a black dome cap covering the nuts. JB74 is 15×6.0J −5 (¥39,600 incl. tax) — the old catalogue's 16×5.5J +20 was the JB64 row, and its price was a Taiwan shop price",
   "kind": "Retro",
   "finishes": {
    "SG": "Steel Grey",
    "MCB": "Matte Charcoal Black"
   }
  },
  "dean_bjmex": {
   "label": "BJ MEXICAN Baja-truck wheel",
   "note": "Retro Baja-truck face: five trapezoid windows alternate with five closed recesses each holding one large hex bolt; shot-blasted texture, no centre cap. DEAN's chart leaves the JB74 row blank; 16×6.0J −5 is inferred from the Sierra spec; centre bore 108.8",
   "kind": "Retro",
   "finishes": {
    "SCB": "Shot Charcoal Black",
    "SC": "Shot Clear"
   }
  },
  "barkley_rogan": {
   "label": "BARKLEY HARDROCK ROGAN faux bead-lock wheel",
   "note": "Gloss-black W-profile double-concave face with two staggered rings of small square windows; wide polished bronze-clear faux bead-lock ring with black hex bolts. *1 Jimny/Sierra size 16×6.0J −5; 15×6.0J ±0 ¥48,400. Price-list image dated 2021/08, prices may have changed",
   "finishes": {
    "BKBRC": "Black & Rim Polish + Bronze Clear"
   }
  },
  "barkley_rizard": {
   "label": "BARKLEY HARDROCK RIZARD 16-window wheel",
   "note": "Disc stands proud of the rim (maker's description); a ring of 16 trapezoid windows around a large flat platform, toothed lugs around the rim. *1 Jimny-specific 16×6.0J −5, no cap (the stock rear-wheel cap fits)",
   "finishes": {
    "GB": "Semi-Gloss Black (GB)"
   }
  },
  "barkley_huron": {
   "label": "BARKLEY HARDROCK HURON seven-point mesh wheel",
   "note": "Seven-node mesh: seven large rounded-square windows (machined bright edges) alternate with seven small triangular windows; a ring of machined dots on the rolled rim. 16×6.0J −5, centre bore 108.5",
   "finishes": {
    "GBM": "Gloss Black Machining (GB/M)"
   }
  },
  "madcross_jb01": {
   "label": "MAD CROSS JB-01 grooved star wheel",
   "note": "Sierra-specific design: thick faceted five-point star spokes, each with a long centre groove, deep rim. 16×6.0J ±0 7.58kg; 15×6.0J ±0 ¥51,700–¥53,900. Price list dated 2021/08",
   "finishes": {
    "GM": "Gunmetal (GM)",
    "AG": "Ash Grey & Rim Polish (AG/Rim P)"
   }
  },
  "madcross_recon": {
   "label": "MAD CROSS RECON eight-egg-hole wheel",
   "note": "New for 2026: matte shallow dish with eight egg-shaped holes; faux bead-lock rim with machined notches and military-style engraved lines. *5 Jimny/Sierra/Nomade 16×6.0J ±0; 15×6.0J ±0 ¥52,800",
   "finishes": {
    "MBK": "Matte Black (MBK)"
   }
  },
  "watanabe_f8": {
   "label": "EIGHT SPOKE F8 eight-spoke wheel",
   "note": "The classic 1968 eight round-section 'bone' spokes, narrow at the hub and wide at the rim; small cap, nuts exposed. Fitment chart: Sierra JB74W 16×5.5J ±0 (+22 is JB64W). The site's ¥45,000 per wheel is the trade price excl. tax, approx. ¥49,500 incl. tax; rim machining and other colours add ¥3,000 excl. tax (approx. ¥3,300). Centre bore 108.5, no Taiwan distributor",
   "kind": "Retro",
   "finishes": {
    "BK": "Black (standard)",
    "RimS": "Rim machined (rim silver)",
    "GOLD": "Gold Metallic",
    "SILVER": "Silver Metallic",
    "MATT": "Matte Black",
    "GLOSS": "Gloss Black",
    "MAG": "Mag colour",
    "RED": "Red",
    "BLUE": "Blue",
    "YELLOW": "Yellow",
    "WH": "White"
   }
  },
  "showa_eight": {
   "label": "IGNITION EIGHT eight-post wheel",
   "note": "Eight short flat spokes between a wide hub ring and the rim, with eight oversized machined bolt heads around the rim. ¥37,400 per wheel (incl. tax), 8.8kg, Jimny Sierra JB74/JB43/JC74 16×6.0J ±0; the +20 W00230 is for JB64. The missing Matte Bronze (W00236) added",
   "kind": "Retro",
   "part": "W00235 (Matte Black) / W00236 (Matte Bronze)",
   "finishes": {
    "W00235": "Matte Black",
    "W00236": "Matte Bronze"
   }
  },
  "showa_r8": {
   "label": "R8 eight-egg-hole wheel",
   "note": "Clean flat dish with eight steep-walled egg-shaped holes; a small black octagonal cap inside the nut circle (nuts exposed). JB74/JB43 15×6.0J ±0, 6.77kg; SHOWA notes it does not fit the JC74",
   "part": "W00051/W00052",
   "finishes": {
    "W00051": "Matte Black",
    "W00052": "Gloss Black"
   }
  },
  "showa_gunfield": {
   "label": "GUNFIELD military-disc wheel",
   "note": "Concave military-style disc with a ring of 14 small slots, a raised GUNFIELD lettering ring (machined bright on Black Polish), stepped rim with lathe marks. JB74/JB43/JC74 16×6.0J ±0; 15×6.0J ±0 (W00240/W00241) ¥36,300–¥37,400",
   "part": "W00215/W00216",
   "finishes": {
    "W00215": "Sand Black",
    "W00216": "Black Polish"
   }
  },
  "damd_cantabile": {
   "label": "Cantabile turbine-face wheel",
   "note": "70s-style turbine face: 24 sharp radial fins (alternating long and short) on a deep mortar-shaped cone, a ring of 12 small windows inside the lip, small hub, nuts exposed. 15×6.0J −5 'JIMNY SIERRA (JB74) dedicated size', all three colours ¥35,200 per wheel (incl. tax), coarse-texture paint. The little G. TRADITIONAL demo car runs gold",
   "kind": "Retro"
  },
  "damd_little_g": {
   "label": "little G. WHEEL Y-mesh wheel",
   "note": "The little G. series' designated wheel: seven faceted Y spokes split at 0.6R, the arms meeting the neighbouring spokes at the rim (14 end points); SILVER is machined bright with dark recesses. 16×6.0J −5 'JIMNY SIERRA (JB74) dedicated size'. SILVER ¥41,800, BLACK ¥42,900 (incl. tax and shipping); DAMD notes the stock tyres cannot be reused"
  },
  "oz_rally": {
   "label": "Rally Racing reissue 16-inch wheel",
   "note": "Reissue of the 80s–90s rally wheel Rally Racing, made with OZ and flow-formed: a ring of 20 small windows inside the lip, a large smooth disc coning down to the hub, no centre cap. 16×6J −5, 5×139.7, centre bore 108.3, 8.584kg each, for JB74/JC74, DAMD exclusive. ¥53,900 each, ¥269,500 for five, incl. tax. Part number not published by the maker (DAMD)",
   "kind": "Retro",
   "finishes": {
    "RW": "Racing White (RW)",
    "MB": "Matte Black (MB)",
    "DG": "Dark Graphite (DG)",
    "MBR": "Matte Bronze (MBR)"
   }
  },
  "super_moon": {
   "label": "SUPER MOON moon disc",
   "note": "Steel, a smooth bowl with no holes at all: flat outer band, coned drop, raised hub boss showing only the 5 nuts. 16×6.0J INSET −5, PCD 139.7, product name 'Super Moon [JB74W]' — JB74W/JC74 only, JB64 has a different part number. Black/white ¥19,800, chrome ¥23,100 (list ¥33,000/¥38,500, on sale), all prices per wheel ('sold singly')",
   "kind": "Retro",
   "part": "bewl74-smch/bewl74-smbl",
   "finishes": {
    "smch": "Chrome",
    "smbl": "Black",
    "smwh": "White"
   }
  },
  "landfoot_swz": {
   "label": "LANDFOOT SWZ ten-teardrop-window wheel",
   "note": "Topy Industries: pressed-steel feel, ten teardrop windows each with a raised pressed edge, flat outer band stepping down to a round hub boss. Sierra only in 15×5.5J +5 (Jimny Sierra JB43/JB74, Nomade JC74), stock centre cap fits, centre bore 108.5; CAFE and AF GRAY are only made in the JB64 16-inch",
   "kind": "Retro",
   "part": "3L966 (GB/RP) / 3L218 (OD)",
   "finishes": {
    "GBRP": "GB/RP (Gloss Black / Rim Polish)",
    "OD": "OD (Olive Drab)"
   }
  },
  "landfoot_xfg": {
   "label": "LANDFOOT XFG van-steel-style wheel",
   "note": "Van steel-wheel style: four long arc slits near the rim alternate with four pairs of oval holes ('4 oval slits and 2-hole pairs ×4 on the disc'), concentric pressed rings rising to the hub. JB43/JB74/JC74 16×6.0J ±0, centre bore 108.5, stock centre cap fits; GB/P only in JB64 sizes",
   "kind": "Retro",
   "part": "3Y722 (SC/P) / 3B668 (WH)",
   "finishes": {
    "SCP": "SC/P (Smoke Clear / Polish)",
    "WH": "WH (White)"
   }
  },
  "landfoot_gwd": {
   "label": "LANDFOOT GWD block five-spoke wheel",
   "note": "Five thick retro spokes, each topped with a raised square pad on its outer half; sunken centre, a groove between spokes and rim; coarse-grain black paint. Jimny Sierra JB43/JB74 16×5.5J ±0 (this row does not list the Nomade), centre bore 108.5; GRAY and MG only in JB64 sizes",
   "kind": "Retro",
   "part": "3M836 (RB)",
   "finishes": {
    "RB": "RB (Rugged Black)"
   }
  },
  "maxx": {
   "label": "MAXX JB74 flow-formed ten-spoke wheel",
   "note": "Made in Taiwan, flow-formed (the Chao Chien Wheels listing says 'Taiwan-made MAXX flow-forming process'): ten flat-topped straight spokes, mildly concave down to a sunken hub ring, no centre cap. 16×6.0J ±0, centre bore 108, 7.15kg, no fender flares needed. 4Wheels list price NT$4,400 each, Ruten sellers NT$3,800–4,200. The owner's actual setup",
   "brand": "MAXX (Hong Yue, made in Taiwan)",
   "finishes": {
    "FB": "FB flat black",
    "FBR": "FBR flat antique bronze",
    "FDG": "FDG flat iron grey",
    "MIB": "MIB gloss black, polished lip"
   }
  },
  "yaochi_h598": {
   "label": "LEADER H-598 twelve-hole rivet wheel",
   "note": "Modular steel-wheel / faux bead-lock look: deep dish with 12 round holes, a ring of about 24 dark-chrome dome rivets inside the deep lip (not five slots). 15×7.0J ±0, centre bore 108.2, 8.55kg; listing photos show 'MADE IN TAIWAN' cast on the back. 7J ±0 sits about 24mm further out than stock. NT$4,000–4,700 each across shops; the olive and cream from older data are special editions and are genuinely listed",
   "brand": "Yaochi LEADER (made in Taiwan)",
   "finishes": {
    "MB": "Flat black",
    "GBL": "Gloss black, machined lip",
    "SL": "Bright silver, machined lip",
    "OD": "Special edition field olive (black-clear machined lip)",
    "CR": "Special edition cream white (bright machined lip)",
    "GG": "Gloss olive (machined lip)"
   }
  },
  "leader_h519": {
   "label": "LEADER H-519 swirl split-spoke wheel",
   "note": "Cast, made in Taiwan (several listings say 'Taiwan-made', ARTC tested): five clockwise-swept spokes each split into one wide and one narrow blade, 10 curved arms at the rim, wide blades machined bright on top, tall black castellated centre cap. 15×7.0J ±0, centre bore 108.2, approx. 8kg. NT$3,300–3,600 each across shops; the ET10 version listed separately by Chao Chien describes itself as 6-hole and is not used",
   "brand": "Yaochi LEADER (made in Taiwan)",
   "finishes": {
    "PBK": "Piano black, machined face"
   }
  },
  "mahom_mff37x": {
   "label": "MAHOM MFF-37x flow-formed six-spoke wheel",
   "note": "TE37X-style six flat straight spokes, medium concave, deep stepped lip, flow-formed, 7.24kg. The seller says it is a Yaochi brand and ARTC tested, but no listing says made in Taiwan and the lip reads 'DESIGN IN JAPAN'; origin unknown. 16×6.0J −25 sits about 30mm further out; fender coverage not stated by the seller; centre bore 110.2 needs hub-centric rings",
   "brand": "MAHOM (origin not stated)",
   "finishes": {
    "MB": "Flat black",
    "MBR": "Flat bronze"
   }
  },
  "inforged_2336": {
   "label": "INFORGED 2336 faux bead-lock wheel",
   "note": "All-matte-black faux bead-lock dish: a ring of about 16 small round holes, 16 hex bolt heads and V notches cast into the outer ring, small red-badge cap. The brand's company is in Zhongli, Taoyuan, but the 2336 is not on its website and listings do not say made in Taiwan. JB74 16×6.0J −5 (the +22 row is JB64)",
   "brand": "INFORGED (origin not stated)",
   "finishes": {
    "MB": "Matte black"
   }
  },
  "aidesignd_id7": {
   "label": "AI-DESIGN-D ID7 rally-disc wheel",
   "note": "Flat rally disc with a ring of 20 near-square small windows inside the lip, recessed hub opening, flow-formed. A Taiwan brand (distributed by Heyi), but listings do not state origin. 16×5.5J −20, centre bore 108.1, load rating 620kg, sits about 25mm further out. 4Wheels NT$24,000 for a set of four",
   "brand": "AI-DESIGN-D (origin not stated)",
   "finishes": {
    "GBK": "Gloss black"
   }
  },
  "mrk_retro15": {
   "label": "MRK retro alloy wheel 15-inch",
   "note": "American five-arc-slot steel-wheel look, large chrome centre cover (five black windows plus dome) hiding the nuts. 15×6.0J −5, centre bore 108.1, NT$3,980 each, fitting extra; MRK's page does not state origin (the old catalogue's 'Taiwan-made' has no source). All sizes showed out of stock on 2026-09-27",
   "kind": "Retro",
   "brand": "MRK 4X4 (origin not stated)",
   "part": "D110-1560-JB74-BK/WH",
   "finishes": {
    "BK": "Matte black",
    "WH": "Ceramic white",
    "SV": "Silver"
   }
  },
  "mrk_retro165": {
   "label": "MRK retro alloy wheel 16×6.5J",
   "note": "Same design in 16×6.5J −5, only matte black and ceramic white (no silver); the 16-inch centre cover has a pointed cone top. The old catalogue's other 16×5.5J +20 wheel was the JB64 offset and has been removed",
   "kind": "Retro",
   "brand": "MRK 4X4 (origin not stated)",
   "part": "D110-1665-5-JB74-BK/WH",
   "finishes": {
    "BK": "Matte black",
    "WH": "Ceramic white"
   }
  },
  "apio_ventura16": {
   "label": "WILDBOAR Ventura steel-style wheel 16×5.5J +20",
   "note": "Cast aluminium made to look like a pressed steel wheel: a ring of 12 long oval slots, dished centre, raised nut boss. White/Iron Black/Bright Silver ¥48,400 each, Bright Chrome ¥72,600, all incl. tax, approx. 8.7kg. This is the kei Jimny (JB64) +20 offset; APIO fits it to a JB74 with its own narrow fender flares (with the stock wide flares it sits well inboard); large chrome cap 7200-11A ¥5,500 incl. tax sold separately. The face is drawn with the 15-inch Ventura's twelve-slot pattern",
   "part": "7200-30W (White)",
   "finishes": {
    "W": "White",
    "B": "Iron Black",
    "S": "Bright Silver",
    "C": "Bright Chrome"
   }
  },
  "klc_daytonas_deep": {
   "label": "Daytona's Deep deep-dish steel wheel 16×8.0J −20",
   "note": "Steel (maker: 'this product is made of steel'), for Sierra/Nomade 16×8.0J −20, PCD 5×139.7, ¥29,700 incl. tax per wheel, Semi-Gloss Black only. Strongly concave dish with a ring of 10 dome-shaped holes, nuts exposed. KLC itself says it is hard to fit without modification ('a little difficult to fit without customising'); the MATURE demo car runs 215/65R16, beyond that tyre's official 6–7½J rim-width range (KLC deliberately stretches it). The face borrows the stock steel wheel's ten-round-hole drawing",
   "finishes": {
    "SGB": "Semi-Gloss Black"
   }
  }
 }
};
