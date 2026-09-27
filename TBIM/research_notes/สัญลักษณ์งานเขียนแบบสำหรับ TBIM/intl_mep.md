# International and National MEP Graphical-Symbol Standards (catalog for TBIM IEC-style and US-style symbol sets)

Research note: covers electrical, ELV, fire, plumbing, HVAC and P&ID symbols, service abbreviations, colour coding, and SEA/Thai adoption. Researched 2026-09-27.

Method caveat: the sandbox proxy blocked direct page fetches for almost all publisher sites (iec.ch, iso.org, nfpa.org, necanet.org, ansi.org, wikipedia.org, iteh.ai, certbox.app). Findings below therefore come mostly from search-engine result extracts that point to the listed URLs, plus one full fetch (a GitHub gist). Treat each extract as needing a check against the primary page. Geometry descriptions that come from general drafting practice rather than a fetched source are listed under **Inferences** and marked "verify". They are not cited facts.

---

## Q1. Electrical and ELV: IEC 60617 (DB structure, installation symbols), IEC 61082, IEC 81346, IEEE 315 / Y32.9, NECA 100 / NCS, BS/DIN EN 60617, JIS C 0617, GB/T 4728, and how US and IEC symbols differ

### Takeaway
IEC 60617 now exists only as a subscription online database. It holds about 1,900 symbols, each with an ID of the form "Snnnnn" that carries no meaning, and it is the source that national versions copy (BS EN, DIN EN, NF EN, JIS C 0617, GB/T 4728). US building-plan practice follows NECA 100-2024, the current American National Standard for electrical construction drawing symbols. IEEE 315 was inactivated in 2019. US plans use letter-based symbols (S, S3, a circle with two lines), while IEC plans use pictorial symbols (a semicircle socket, a circle with an oblique stroke for a switch, a circle with a cross for a luminaire).

### Cited Findings
**IEC 60617 database: structure and access**
- The IEC 60617 DB is the official source of IEC 60617 and contains "some 1900 symbols". Earlier versions of the info sheet quoted 1,500 to 1,750. — [IEC 60617 info sheet (IEC webstore preview)](https://webstore.iec.ch/en/iec_catalog/product/preview/?id=L3B1Yi9wZGYvcHJldmlldy9pbmZvX2llYzYwNjE3e2VkMS4wfWIucGRm); [normservis mirror](https://www.normservis.cz/download/view/iec/info_iec60617_DB.pdf)
- Symbol identity format: "Snnnnn", where n is a digit from 0 to 9. The numbers are sequential and carry no meaning (example: S00823). — [IEC 60617 info sheet](https://webstore.iec.ch/en/iec_catalog/product/preview/?id=L3B1Yi9wZGYvcHJldmlldy9pbmZvX2llYzYwNjE3e2VkMS4wfWIucGRm)
- Symbols can be searched or browsed by symbol identity number, keyword, **application class**, **function class**, **shape class**, **status level** and **earlier publication** (the old part and item number in IEC 60617-2…-13). — [IEC 60617 info sheet](https://webstore.iec.ch/en/iec_catalog/product/preview/?id=L3B1Yi9wZGYvcHJldmlldy9pbmZvX2llYzYwNjE3e2VkMS4wfWIucGRm)
- The product is sold as a 12-month subscription to the online database "comprising parts 2 to 13 of IEC 60617". The first DB edition is IEC 60617-DB-12M Ed. 1.0:2001. — [ANSI webstore](https://webstore.ansi.org/standards/iec/iec60617db12med2001)
- The current dated editions are "IEC 60617:2025 DB" (listed by SCC) and "IEC 60617:2026 DB" (IEC webstore publication 2723). The DB is re-dated every year. — [IEC webstore 2723](https://webstore.iec.ch/en/publication/2723); [SCC](https://scc-ccn.ca/standardsdb/standards/2027220); [en-standard.eu](https://www.en-standard.eu/iec-60617-2025-db-graphical-symbols-for-diagrams-12-month-subscription-to-regularly-updated-online-database-comprising-parts-2-to-13-of-iec-60617/)
- Access points: https://std.iec.ch/iec60617 and https://library.iec.ch/iec60617. The IEC products portal also shows single symbols, for example "IEC 60617 S00457" at products.iec.ch/view/grs/8141. — [std.iec.ch](https://std.iec.ch/iec60617); [library.iec.ch](https://library.iec.ch/iec60617); [IEC products portal S00457](https://products.iec.ch/view/grs/8141)
- Installation (architectural) symbol IDs confirmed from search extracts:
  - **S00473** Dimmer
  - **S00474** Pull-cord single-pole switch
  - **S00475** Push-button
  - **S00477** Push-button protected against unintentional operation
  - **S00484** Luminaire, general symbol; Fluorescent lamp, general symbol

  — [IEC 60617 symbol list (QElectroTech forum attachment)](https://qelectrotech.org/forum/misc.php?action=pun_attachment&item=2124&download=1); [IEC 60617 info sheet](https://webstore.iec.ch/en/iec_catalog/product/preview/?id=L3B1Yi9wZGYvcHJldmlldy9pbmZvX2llYzYwNjE3e2VkMS4wfWIucGRm)
- IEC 60617-1:2008 is quoted, via a Thai secondary source, as defining "more than 2,000" symbols. This conflicts with the IEC's own figure of about 1,900 and is probably loose wording. — [klangfaifa.com (TH)](https://www.klangfaifa.com/Knowledge-about-Electrical-equipment/ElectricalSymbols%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2.html)

**IEC installation-symbol geometry (as described by BS EN 60617 guides)**
- Socket outlets: the base shape is a **semicircle**, and the number of short vertical lines gives the number of gangs. A single socket is a semicircle with one line, and a twin socket has two lines. — [Total Skills UK](https://www.totalskills.co.uk/guides/electrical-symbols-explained); [Elec-Mate](https://www.elec-mate.com/guides/electrical-symbols-chart)
- Switches: a **circle with an angled line** shows the switching action. Variants cover one-way, two-way, intermediate, dimmer and pull-cord switches. A double-pole switch has two parallel strokes. — [Total Skills UK](https://www.totalskills.co.uk/guides/electrical-symbols-explained)
- Luminaire: a **circle with a cross** is the general ceiling light. A fluorescent luminaire is a **long rectangle** or bar. — [Total Skills UK](https://www.totalskills.co.uk/guides/electrical-symbols-explained)
- A UK guide says **BS EN 60617 has been withdrawn and replaced by IEC 60617**, meaning UK users now refer to the IEC DB directly. — [Total Skills UK (search extract)](https://www.totalskills.co.uk/guides/electrical-symbols-explained); BSI series page: [BS EN 60617](https://landingpage.bsigroup.com/LandingPage/Series?UPI=BS+EN+60617)
- IEC 60617 is adopted nationally as NF EN 60617 (France) and DIN EN 60617 (Germany). AS/NZS 1102, which was a lightly modified IEC 60617, was withdrawn without replacement, and users are told to use IEC 60617 instead. — [Electronic symbol, Wikipedia](https://en.wikipedia.org/wiki/Electronic_symbol)

**National equivalents (Asia)**
- **GB/T 4728.1 to 4728.13** (China) is the Chinese version of IEC 60617. The -2018 set is described as the "Chinese edition of IEC 60617". Some parts have newer editions, for example **GB/T 4728.12-2022** (binary logic elements). — [CSDN](https://blog.csdn.net/std7879/article/details/124361047); [antpedia GB/T 4728.12-2022](https://m.antpedia.com/standard/1041076296.html)
- **JIS C 0617** series (Japan) mirrors IEC 60617. Parts are dated 2011, for example JIS C 0617-2:2011 and JIS C 0617-8:2011, and JSA publishes a combined handbook "JIS電気用図記号 JIS C 0617/IEC 60617シリーズ". — [NDL](https://ndlsearch.ndl.go.jp/en/books/R100000002-I000002828838); [JIS C 0617-2:2011 sample](https://www.elecenghub.com/NewSamples/JIS/159429482/JIS-C-0617-2-2011-1.pdf)

**US standards**
- **IEEE Std 315-1975** (= ANSI Y32.2-1975 = CSA Z99-1975), "Graphic Symbols for Electrical and Electronics Diagrams (Including Reference Designation Letters)", was reaffirmed in 1993 and **inactivated without replacement on 7 Nov 2019**. — [Wikipedia (IEEE 315)](https://en.wikipedia.org/wiki/IEEE_315-1975); [ANSI webstore](https://webstore.ansi.org/standards/ieee/3151975); [IITB copy showing R1993](https://www.ee.iitb.ac.in/~spilab/Tips/ansii_graphic_symbols_for_electrical_and_electronics_daigrams_1993.pdf)
- **ANSI Y32.9-1972**, "Graphic Symbols for Electrical Wiring and Layout Diagrams Used in Architecture and Building Construction", was the legacy US architectural wiring standard. Its current status was not confirmed in this search. — [search extract re IEEE 315 family](https://en.wikipedia.org/wiki/IEEE_315-1975)
- **NECA 100-2024**, "Symbols for Electrical Construction Drawings", is the current edition and replaces NECA 100-2013 and -1999. It covers graphic symbols for electrical wiring and equipment on construction drawings, plus recommended drawing practice. "Electrical" there includes electrical, electronic and communications systems covered by NFPA 70. The PDF edition includes a .zip of **AutoCAD symbol files**. — [ANSI webstore NECA 100-2024](https://webstore.ansi.org/standards/neca/neca1002024); [ANSI Blog](https://blog.ansi.org/ansi/neca-100-2024-symbols-for-electrical-construction-drawings/); [NECA 100-2013 PDF](https://www.necanet.org/docs/default-source/codes-standards/100-2013.pdf?sfvrsn=472ce75e_5); [NECA 100 202x ballot draft](https://www.necanet.org/docs/default-source/neis/ballots/neca-100-202x/neca-100-ansi-recirculation-draft---legislative-format-20231204.pdf?sfvrsn=d7498b2e_3)
- **US National CAD Standard (NCS) v7** (NIBS) has more than 1,300 symbol CAD files, renamed with unique 3-digit extension numbers and grouped by **MasterFormat 2004** division, for example Div 21 Fire Suppression and Div 22 Plumbing. Drawing units are inches, and DWG, linetype and pattern files can be downloaded. A single licence covers 1–2 employees at one office. — [NCS v7 what's new](https://nationalcadstandard.org/ncs7/new.php); [NCS v7](https://nationalcadstandard.org/resources/standards/ncs7/); [NIBS](https://nibs.org/projects/united-states-national-cad-standard-ncs/)

**US vs IEC differences (plan symbols)**
- US duplex receptacle: a **circle crossed by two short parallel lines**. A single receptacle drops one line. A GFCI receptacle uses the same symbol with "GFCI" or "GFI" written beside it, or a special fill defined in the legend. IEC regions use a semicircle socket or a national variant. — [ElectricalFlux](https://electricalflux.com/wire-switches/duplex-receptacle-symbol-blueprint-guide); [NEC Mastery / search extract](https://www.necmastery.com/quick-reference/symbols/); [cadblockdwg](https://cadblockdwg.com/guides/socket-switch-symbol-standards-cad-blocks)
- US switches are the **letter "S" with subscripts**: S = single-pole, S3 = 3-way, S4 = 4-way, SD = dimmer. The device a US drawing calls a "3-way" (S3) is called a "2-way" switch in UK/IEC practice. — [kth-electric](https://kth-electric.com/en/electrical-symbols-guide-iec-ansi/); [search extract for NECA 100 symbols](https://www.architecturecourses.org/architecture/electrical-symbols-floor-plans)
- A circle with an X is the general lamp or luminaire symbol in **both** ANSI and IEC practice. — [kth-electric](https://kth-electric.com/en/electrical-symbols-guide-iec-ansi/)
- NECA-based US legends distinguish **flush-mounted from surface-mounted panelboards** (by fill or hatching of the rectangle) and show a junction box as "J". — [Weld County symbol list](https://www.weld.gov/files/sharedassets/public/v/1/departments/purchasing/documents/archive/bid-specs-1-weld-county-dispatch-console-addition-75.pdf); [search extract](https://www.architecturecourses.org/architecture/electrical-symbols-floor-plans)

**IEC 81346 / IEC 61082**
- **IEC 81346-1:2022 (Ed. 2.0)**, "Industrial systems, installations and equipment and industrial products — Structuring principles and reference designations — Part 1: Basic rules", is the current edition. It was synchronised with IEC 81346-2:2019 and ISO 81346-12:2018 (construction works and building services) and links to EN 61082-1:2015. — [ISO 82229](https://www.iso.org/standard/82229.html); [IEC webstore 64021](https://webstore.iec.ch/en/publication/64021); [ANSI](https://webstore.ansi.org/standards/iec/iec81346ed2022)
- **IEC 81346-2:2019** sets classification schemes of object classes with **letter codes**, used in reference designations. — [iTeh](https://standards.iteh.ai/catalog/standards/iec/40b9789e-7182-4e6f-8919-05dbe70f117b/iec-81346-2-2019); [AFNOR](https://www.boutique.afnor.org/en-gb/standard/iec-8134622019/industrial-systems-installations-and-equipment-and-industrial-products-stru/xs134890/250464)
- IEC 61082-1 (preparation of documents used in electrotechnology) is referenced as **EN 61082-1:2015**, which corresponds to IEC 61082-1:2014. — [ISO 82229 page (inter-standard links)](https://www.iso.org/standard/82229.html)

### Inferences
- **Geometry, IEC style (verify against the IEC 60617 DB entries; these follow common drafting practice).** A proposed TBIM base grid is 2.5 mm or 5 mm (IEC 60617 symbols are drawn on a modular grid, typically M = 2.5 mm).
  - Socket outlet: semicircle, flat side toward the wall, with a short line from the arc apex to the wall.
  - Socket with protective (earth) contact: the same semicircle with a short bar parallel to the flat side, crossing the apex line.
  - Multiple socket: a numeral "n" or n parallel strokes.
  - Switched socket: add a switch stroke (an oblique line with a short hook).
  - Switch, general: a small circle (dot or open circle) with an oblique line at about 45°. A short perpendicular tick at the end means single-pole; ticks are added for 2- and 3-pole.
  - Two-way switch: oblique lines on both sides (mirrored).
  - Intermediate switch: two crossing strokes.
  - Dimmer (S00473): a switch with an arrow or slanted wedge.
  - Pull-cord (S00474): a switch with a small arrow along the stroke.
  - Push-button (S00475): a circle with a dot. Protected (S00477): push-button inside a shield.
  - Luminaire (S00484): a cross in a circle (the X-in-circle glyph). Fluorescent: a long bar with short end ticks; n tubes can be shown as n bars.
  - Emergency lighting: the luminaire with a filled or hatched segment, or an "E" mark (national practice varies).
  - Distribution board: a rectangle, often half-filled (diagonal fill) to mark it as a board.
  - Earth (IEC): a vertical line ending in three decreasing horizontal bars. Protective earth: the same inside a circle. Chassis/frame: a hatched line.
- **Geometry, US style (NECA 100; verify).**
  - Duplex receptacle: circle Ø ≈ 1/4" with two parallel short lines crossing it, perpendicular to the wall.
  - Single receptacle: one line. Quadruplex: a circle with two pairs of lines, or two circles.
  - Floor receptacle: the symbol inside a square.
  - Special-purpose receptacle: a triangle or a letter.
  - Switch: the letter S with subscripts: S, S2, S3, S4, SD (dimmer), SK (key), SP (pilot), SOS (occupancy).
  - Luminaires: to scale as rectangles (troffers) or circles (downlights), with a filled half or hatching for emergency types. Exit sign: a rectangle or circle with "X" or a directional arrow.
  - Panelboard: a rectangle, solid-filled for flush mounting and outlined for surface mounting.
  - Junction box: "J" in a circle. Motor: "M" in a circle. Disconnect: a rectangle with a switch blade.
- **Most practical takeaway for TBIM.** Store every symbol against a neutral "function key" in a mapping table: (function, IEC 60617 S-number, NECA 100 name, IEC 81346-2 class letter). Examples: socket to S-number plus class X; switch to class S; luminaire to class E; board to class A or W. This lets the IEC and US sets be swapped per project.
- Reference designation prefixes in IEC 81346-1: "=" for the function aspect, "-" for the product aspect, "+" for the location aspect. Examples: =A1 is a function, -Q1 is a switching device (Q is the class for controlling or switching energy), +R101 is a location. These are well known from the standard but were **not verified from a fetched page in this session**.

### Gaps
- The full ID list for IEC 60617 Part 11 "architectural and topographical installation plans", roughly S00437 to S00500, could not be retrieved because std.iec.ch and the QElectroTech PDF were blocked. The S-numbers for socket outlet (general, with PE contact, with switch), switch general symbol, luminaire variants, emergency luminaire, distribution board and the earth/PE symbols (believed to be around S00200–S00204) remain **unverified**.
- IEC 61082-1: current edition confirmation (2014, and whether an Ed. 3 exists by 2026) was not checked directly.
- ANSI Y32.9-1972 status (widely reported as withdrawn) was not confirmed from a primary source.
- DIN EN 60617 and BS EN 60617 current status. BS EN 60617 is reported withdrawn in favour of the IEC DB by a secondary source only.

---

## Q2. Fire: NFPA 170, ISO 6790, ISO 7010, ISO 23601

### Takeaway
NFPA 170-2024 is the current US fire-symbol standard. NFPA 72 requires it for fire alarm drawings unless the AHJ accepts other symbols. It covers fire alarm devices, sprinklers, FDCs and standpipes. The ISO counterpart for fire-protection plan symbols, ISO 6790:1986, is reported withdrawn, so the ISO route in practice is ISO 7010 (safety signs) plus ISO 23601 (evacuation plans).

### Cited Findings
- **NFPA 170-2024**, "Standard for Fire Safety and Emergency Symbols", is the current edition. It gives uniform symbols for fire safety, **engineering drawings**, pre-incident plans and emergency management. — [NFPA](https://www.nfpa.org/product/nfpa-170-standard/p0170code); [ANSI webstore](https://webstore.ansi.org/standards/nfpa/nfpa1702024); [UpCodes 2024 viewer](https://up.codes/viewer/nfpa/nfpa-170-2024)
- New in 2024: symbols for **hybrid (water and inert) extinguishing systems**; **oxygen and fuel-gas detectors**; piping, valves, control devices and hangers; and a consolidated table for Emergency Responder Communication Enhancement Systems (the source abbreviates it "ECRCES"). — [UpCodes / search extract](https://up.codes/viewer/nfpa/nfpa-170-2024); [NFPA 170 2024 preview](https://nfpanorm.com/wp-content/preview/170%202024.pdf)
- Structure as reported:
  - Ch. 4: Symbols for General Use (egress, assembly points, exits)
  - Ch. 5: Symbols for Use by the Fire Service (FDCs, standpipes, utility shutoffs)
  - Ch. 6: Symbols for Use in Architectural and Engineering Drawings and Insurance Diagrams

  A secondary source places fire detection and alarm symbols in Ch. 6 and suppression symbols (sprinkler pendent/upright/sidewall/ESFR, standpipes, hose, clean agent, water mist) in Ch. 5. The chapter numbering is inconsistent between secondary sources. — [UpCodes / search extract](https://up.codes/viewer/nfpa/nfpa-170-2024); [EvacPlan Generator](https://evacplangenerator.com/articles/nfpa-170-standard-fire-safety-symbols)
- Named sprinkler symbol types:
  - upright; pendent
  - upright on sprig; upright on top of riser nipple; pendent on drop nipple
  - sprinkler with guard; sidewall; outside sprinkler
  - open sprinkler on branch line; water-spray nozzle; window sprinkler

  The FDC symbols distinguish whether a connection supplies sprinklers, standpipes or both, and FDC detail was expanded in the 2018 edition. — [NFPA 170 2006 text](https://atapars.com/wp-content/uploads/2021/01/atapars.com-NFPA-170-2006.pdf); [NFPA 170 2018 copy](https://edufire.ir/storage/Library/NFPA%20170%202018.pdf); [UpCodes 2018](https://up.codes/viewer/nfpa/nfpa-170-2018)
- Named detection and alarm symbol types include duct detector, heat detector, smoke detector, waterflow switch, manual station (pull station / fire alarm box) and tamper switch. **NFPA 72 requires fire alarm drawings to use NFPA 170 symbols unless the AHJ accepts others.** — [search extract citing NFPA 170 / NFPA 72](https://nationaltrainingcenter.com/fire-alarm-symbols/); [NFPA 72, Wikipedia](https://en.wikipedia.org/wiki/NFPA_72)
- **ISO 6790:1986**, "Equipment for fire protection and fire fighting — Graphical symbols for fire protection plans — Specification", is Edition 1 and is reported **withdrawn** with no ISO replacement identified. The Philippines adopted it as **PNS 6790:1992**. — [ISO 13288](https://www.iso.org/standard/13288.html); [GlobalSpec (PNS 6790:1992)](https://standards.globalspec.com/std/600050/ISO%206790); [SIS](https://www.sis.se/en/produkter/standardization/graphical-symbols/drawings-plans-and-maps/iso67901986/)
- **ISO 7010:2019** "Graphical symbols — Safety colours and safety signs — Registered safety signs" is kept current by amendments, including **Amd 9:2025** and **Amd 10:2025**. E001 is "Emergency exit (left hand)". The adopted European version is EN ISO 7010:2020. — [ISO 7010:2019](https://www.iso.org/standard/72424.html); [Amd 9:2025](https://www.iso.org/standard/91364.html); [Amd 10:2025](https://www.iso.org/standard/92129.html); [EN ISO 7010:2020](https://standards.iteh.ai/catalog/standards/cen/b2a32cf3-b37d-402d-ba3d-14111750282c/en-iso-7010-2020)
- **ISO 23601:2020**, "Safety identification — Escape and evacuation plan signs", sets design principles for displayed escape plans. It uses ISO 7010 safety signs and colour coding to show the viewer's position, escape routes and the location of fire and emergency equipment. — [ISO 80678](https://www.iso.org/standard/80678.html); [BSI](https://knowledge.bsigroup.com/products/safety-identification-escape-and-evacuation-plan-signs-1); [FireEscapePlans.ie](http://www.fireescapeplans.ie/information/guidance/guide_to_iso_23601.html)

### Inferences
- **Geometry, NFPA-style fire alarm (verify against NFPA 170 Ch. 6).** US practice and many NFPA-derived legends draw:
  - Initiating devices as a **square or circle with letters**: smoke detector "S" (duct smoke "SD" or a square with "D"); heat detector "H" (rate-of-rise, fixed-temperature variants). Manual station is a square with "F" or a pull-handle glyph.
  - Notification appliances as a **square or rectangle with a stylised horn**, plus "S"/"F"/"V" for strobe; horn-strobe as a combination; speaker as an "SP" or speaker cone.
  - The FACP as a rectangle labelled "FACP".
  - Waterflow and tamper switches as "WF" and "TS".
  - Sprinklers (NFPA 170): a small circle for the head. Pendent and upright are told apart by an open vs filled circle or a half-fill. Sidewall is a semicircle against the wall.
  - FDC: a "Y" (Siamese) shape.
  - Standpipe: a circle with "S" or a riser dot.

  Exact NFPA shapes must be checked against the standard. The fetch was blocked.
- Because ISO 6790 is withdrawn, an IEC/ISO-style TBIM fire set would in practice combine ISO 7010 pictograms (for example F001 fire extinguisher, F002 fire hose reel, F005 fire alarm call point, E001/E002 exits) placed on plan per ISO 23601, and IEC 60617 for alarm wiring diagrams. National sets would fill the remaining gaps: BS 5839 legends in the UK, DIN 14034-6 in Germany, and the Thai EIT fire alarm standard.

### Gaps
- The exact NFPA 170-2024 figure geometry and table numbers for detectors, pull stations, notification appliances, sprinklers, FDC and standpipes could not be read (NFPA, UpCodes and training sites were blocked).
- ISO 6790 withdrawal date and status could not be confirmed on iso.org because the fetch was blocked. Only a search extract reported the withdrawal.
- ISO 7010 amendments after Amd 10:2025 (any in 2026) were not checked.

---

## Q3. Plumbing, HVAC and piping/P&ID: ISO 4067, ISO 14617, ISO 10628, ISA-5.1, ASHRAE, ASME Y32.x / ASPE, EN 806 / DIN 1988, JIS/SHASE, GB/T 50106 / 50114; line types and service abbreviations

### Takeaway
No live international "building-services plan symbol" standard exists for plumbing and HVAC. ISO 4067-1:1984 and ASHRAE 134 are both old or withdrawn, and so is ASME Y32.4. The live international libraries are diagram-oriented: ISO 14617 (Part 1 revised 2025), ISO 10628-2:2012 for P&IDs, and ANSI/ISA-5.1-2024 for instruments. Building-plan symbols in practice come from national sets: US NCS v7 and ASHRAE Handbook chapters, China GB/T 50106/50114-2010, Japan SHASE-S 001, and Europe EN 806-1.

### Cited Findings
- **ISO 4067-1:1984**, "Technical drawings — Installations — Part 1: Graphical symbols for plumbing, heating, ventilation and ducting", sets basic symbols for drainage and water supply, space heating and cooling, and ducted air systems. One search extract reports it as **withdrawn**. The companion part ISO 4067-6:1985 covers water supply and drainage in the ground. — [ISO 9778](https://www.iso.org/standard/9778.html); [SIS](https://www.sis.se/en/produkter/standardization/graphical-symbols/drawings-plans-and-maps/iso406711984/); [Intertek 4067-6](https://www.intertekinform.com/en-us/standards/iso-4067-6-1985-595810_saig_iso_iso_1364874/)
- **ISO 14617** "Graphical symbols for diagrams" has 15 parts:
  1. General
  2. Symbols having general application
  3. Connections
  4. Actuators
  5. Measurement and control devices
  6. Measurement and control functions
  7. Basic mechanical components
  8. **Valves and dampers**
  9. **Pumps, compressors and fans**
  10. Fluid power converters
  11. **Heat transfer devices and heat engines**
  12. Separating, purification and mixing
  13. Material processing
  14. Transport and handling
  15. **Installation diagrams and network maps**

  Parts 1–12 and 15 were published in 2002, and Parts 13–14 in 2004. **ISO 14617-1:2025 "General rules"** is the new Part 1. — [ISO 14617, Wikipedia](https://en.wikipedia.org/wiki/ISO_14617); [ISO 14617-1:2025](https://www.iso.org/standard/85641.html); [ISO 14617-15:2002](https://www.iso.org/standard/22668.html)
- **ISO 10628-1:2014** (specification of diagrams) and **ISO 10628-2:2012** (graphical symbols) cover P&IDs and flow diagrams for the chemical and petrochemical industry. ISO 10628-2 is a "collective application standard" of ISO 14617. — [ISO 10628-2](https://www.iso.org/standard/51841.html); [ISO 10628, Wikipedia](https://en.wikipedia.org/wiki/ISO_10628)
- Redrawn ISO 10628-2:2012 symbol sheets are on Wikimedia Commons (7 sheets, SVG and PDF). They are listed as public domain or CC-BY-SA, and the licence must be checked per file. Other open libraries:
  - FreeCAD-symbols: CC-BY 3.0
  - draw.io P&ID stencils: open source
  - SpaceTeam/pnid-lib: GPL-3.0
  - PIDcircuitTikZ: LPPL, ISO 14617-oriented

  — [GitHub gist P&ID library reference](https://gist.github.com/ChintanTalapara/5d5d8fb26a16c980612ee03f49051230); [Wikimedia ISO 10628-2 sheet](https://upload.wikimedia.org/wikipedia/commons/f/f4/ISO_10628-2_2012_Symbols.pdf)
- **ANSI/ISA-5.1-2024**, "Instrumentation and Control Symbols and Identification", was approved by ANSI on 17 Jul 2024. The title changed from "Instrumentation Symbols and Identification". The edition adds control symbols, new automation technology and a loop-diagram symbol table, and reorganises the text. — [ISA](https://www.isa.org/products/ansi-isa-5-1-2024-instrumentation-and-control-symb); [ISA 5 series](https://www.isa.org/standards-and-publications/isa-standards/isa-5-standard); [ANSI webstore](https://webstore.ansi.org/standards/isa/ansiisa2024)
- ISA-5.1 geometry (from a secondary summary):
  - Shapes:
    - **circle** = discrete instrument
    - **circle inside a square** = shared display/control
    - **hexagon** = computer function
    - **diamond/triangle inside a square** = PLC
  - Location bars inside the bubble:
    - none = field-mounted
    - single solid bar = main control room
    - double bar = auxiliary panel
    - dashed bar = behind the panel / not accessible
  - Letters:
    - First letter is the measured variable: A = analysis, F = flow, L = level, P = pressure, T = temperature.
    - Succeeding letters are functions: C = controller, I = indicator, R = recorder, S = switch, T = transmitter, V = valve, Y = relay/compute. Modifiers H, L, HH, LL.
  - Signal lines: solid for process lines; dashed for electrical signals (the source groups "electrical/pneumatic control" here); dash-dot for data links.

  The source's line-type table is loosely stated and differs from ISA-5.1's own convention (see Inferences). Verify against the standard. — [GitHub gist](https://gist.github.com/ChintanTalapara/5d5d8fb26a16c980612ee03f49051230)
- **ANSI/ASHRAE Standard 134-2005 (RA 2014)**, "Graphic Symbols for Heating, Ventilating, Air-Conditioning, and Refrigerating Systems", is **withdrawn**. It identified symbols by name, configuration and description for manual and CAD drawing. — [Techstreet (withdrawn)](https://www.techstreet.com/standards/ashrae-134-2005-ra-2014?product_id=1873279); [ANSI preview](https://webstore.ansi.org/preview-pages/ASHRAE/preview_ANSI+ASHRAE+Standard+134-2005.pdf)
- The **ASHRAE Handbook — Fundamentals** keeps an "**Abbreviations and Symbols**" chapter in its General section. Secondary sources say its graphic lists cover air-moving devices, ductwork, terminal units, dampers, grilles/registers/diffusers and HVAC equipment, based on Std 134. — [ASHRAE](https://www.ashrae.org/advertising/handbook-advertising/fundamentals/abbreviations-and-symbols); [MEP Academy](https://mepacademy.com/understanding-hvac-symbols/)
- **ASME Y32.4-1977 (R2004)**, "Graphic Symbols for Plumbing Fixtures for Diagrams Used in Architecture and Building Construction", was **withdrawn in October 2006** and is sold for historical reference. Sec. 5 covers common fixtures and Sec. 6 covers hospital and institutional fixtures. **ASME Y32.2.3-1949 (R1999)** covers "Graphic Symbols for Pipe Fittings, Valves and Piping". — [ANSI Y32.4 (historical)](https://webstore.ansi.org/standards/asme/ansiasmey321977r2004); [ASME Y32.2.3](https://www.asme.org/codes-standards/find-codes-standards/y32-2-3-graphic-symbols-pipe-fittings-valves-piping); [ASME withdrawn list](https://cstools.asme.org/csconnect/Filedownload.cfm?46239.5932176=&DownloadFileName=List+of+Withdrawn+Standards+-+last+updated+October+11%2C+2022&dir=CommitteeFiles&preview=true&thisfile=45120.pdf)
- **NCS v7** symbol library includes Div 21 Fire Suppression, Div 22 Plumbing and mechanical and electrical divisions: 6 new plumbing symbols and 10 revised fire suppression symbols in v7. — [NCS v7](https://nationalcadstandard.org/ncs7/new.php)
- **EN 806-1:2001 + A1:2001** (drinking water installations inside buildings, Part 1: General) contains terms, **graphical symbols**, units and abbreviations, including symbols for backflow-protection devices. **DIN 1988-100:2011-08** points to DIN EN 806-1 for symbols. — [ANSI DIN EN 806-1](https://webstore.ansi.org/standards/din/dinen8062001); [DIN Media DIN 1988-100](https://www.dinmedia.de/en/standard/din-1988-100/142014717)
- **SHASE-S 001-2005** "図示記号" (Graphical symbols for plumbing, air-conditioning, ventilation and ducting) is Japan's HVAC and sanitary symbol standard, published by the Society of Heating, Air-Conditioning and Sanitary Engineers of Japan (Mar 2006). — [CiNii / NDL (search extract)](https://ci.nii.ac.jp/ncid/BB01304679); [J-STAGE SHASE-S](https://www.jstage.jst.go.jp/article/shase/31/117/31_KJ00006793056/_article/-char/ja)
- **GB/T 50106-2010** 《建筑给水排水制图标准》 (building water supply and drainage drawing standard) took effect 1 Mar 2011 and replaces the 2001 edition. Pipe categories are coded with **Hanyu Pinyin initials** (for example J = water supply 给水, RJ = hot water supply, W = sewage 污水, Y = rainwater 雨水, per common usage), with legend tables for pipes, fittings, valves, sanitary fixtures and tanks. — [gongbiaoku](https://www.gongbiaoku.com/mobile/book/aub181439qg); [fwxgx](https://www.fwxgx.com/questions/3324955)
- **GB/T 50114-2010** 《暖通空调制图标准》 (HVAC drawing standard) was issued 18 Aug 2010 and took effect 1 Mar 2011. Water and steam pipe codes are in Table 3.1.1 and duct codes in Table 3.2.1. Examples: **LG** = chilled water supply, **LH** = chilled water return, **NG** = heating supply, **NH** = heating return. — [NDLS](https://www.ndls.org.cn/standard/detail/accfe080216ff0e5c8addc47d12dc708); [fwxgx LG/LH](https://www.fwxgx.com/questions/899204); [co188](https://bbs.co188.com/thread-10435345-1-1.html)
- US/international service abbreviations seen on real mechanical and plumbing legends:
  - CHWS/CHWR = chilled water supply/return
  - CWS/CWR = condenser water supply/return
  - HWS/HWR = heating hot water supply/return
  - CD = condensate drain
  - FP = fire protection
  - DCW/DHW = domestic cold/hot water

  — [JME common tag codes](https://www.jmesales.com/content/docs/Marking%20Services/List-of-Common-Tag-Codes.pdf); [ODOT mechanical legend](https://www.odot.org/contracts/a2018/plans1805/490_1805_STP-255E(354)AG_3150404/0085%20-%2031504(04)%20-%20M01%20MECHANICAL%20(UNDERPASS)%201%20of%206.pdf); [MDM plumbing legend P-001](http://www.mdm-construction.com/wp-content/uploads/ATTACHMENT11-Drawings-Mechanical-Plumbing.pdf); [heatinghelp](https://heatinghelp.com/systems-help-center/what-the-heck-do-those-letters-stand-for/)

### Inferences
- **Suggested TBIM line and abbreviation set (from typical US legends such as NCS/CSI practice; verify per project).** Common convention is a solid line labelled with the abbreviation in breaks; per-system linetypes are office-defined, not standardised.

  | Abbrev. | Service | Typical linetype |
  |---|---|---|
  | CW / DCW | cold water | solid, or long dash-short dash |
  | HW / DHW | hot water | dash-dot |
  | HWR / DHWR | hot water return | dash-dot-dot |
  | CHWS / CHWR | chilled water | solid with "CHWS"/"CHWR" in breaks |
  | CD | condensate drain | dashed |
  | FP | fire protection (often "F" or "FP", or a sprinkler main "S") | solid with text |
  | SAN / S | sanitary waste | heavy solid |
  | V | vent | dashed |
  | SD | storm drain | solid with "SD" |
  | G | gas | solid with "G" |

- **Duct geometry, US (ASHRAE/NCS convention; verify).**
  - Duct: double line to scale, with the size note W×D.
  - Section cuts: X (diagonal cross) for supply-duct section, a single diagonal for return or exhaust.
  - Ceiling diffuser: a square with diagonals, plus an arrow for throw.
  - Volume damper: a line across the duct with a small circle and "VD".
  - Fire damper: a line with "FD" and triangles or hatching. Smoke damper: "SD". Combination fire/smoke damper: "FSD".
  - Motorised damper: "MD" with an actuator glyph.
  - Flexible duct: wavy double lines.
- **P&ID-derived valve geometry (ISO 14617-8 / ISO 10628-2 / ASME Y32.2.3 practice; verify).**
  - Gate valve: two triangles tip-to-tip (bow-tie).
  - Globe valve: bow-tie with a filled dot at the centre.
  - Check valve: bow-tie with one triangle filled, or a line with an arrow.
  - Ball valve: bow-tie with a circle.
  - Butterfly valve: a line with a disc.
  - Pump: a circle with a triangle, or a tangential outlet.
- Signal lines per ISA-5.1 convention (differs from the gist's loosely stated table): pneumatic signal is a line with double diagonal hatch marks; electric signal is dashed; a line with small circles is software/data link.

### Gaps
- The ISO 4067-1 withdrawal was reported only in a search extract. Several catalogues (SIS, NBN) still list it, so its status needs confirming on iso.org. I believe it was still listed as current until recently and cannot resolve this conflict here.
- The full GB/T 50106 and GB/T 50114 code tables, the JIS/SHASE line conventions, and the EN 806-1 symbol list were not retrieved.
- The ASPE plumbing symbols publication (ASPE Data Book) and its edition were not confirmed.
- Current ASHRAE Handbook Fundamentals chapter number (2025 edition) not verified.

---

## Q4. Colour coding: pipes (ASME A13.1, BS 1710, ISO 14726) and cables (IEC 60445)

### Takeaway
Pipe identification colours differ by jurisdiction:
- **ASME A13.1-2023** (US) sets hazard-based label colours and is now a continuous-maintenance standard.
- **BS 1710:2014** (UK) pairs a basic content colour with safety-colour bands, using BS 4800 colour references.
- **ISO 14726** covers ships.

Cable colours follow **IEC 60445:2021 + AMD1:2026**, which Thailand follows through TIS 11-2553.

### Cited Findings
- **ANSI/ASME A13.1-2023**, "Scheme for the Identification of Piping Systems":
  - Uses six standard colour combinations plus four user-defined combinations.
  - Is now a continuous-maintenance standard.
  - The 2023 update revised the colour section and the flow-direction and GHS requirements.
  - Specifies **Pantone** references.
  - Example classes: toxic and corrosive = **black text on orange**; fire-quenching (water, foam, CO2) = **white on red**.

  — [ANSI Blog](https://blog.ansi.org/ansi/identification-piping-systems-asme-a13-1-2023/); [Projectmaterials](https://blog.projectmaterials.com/pipes/asme-a13-1-pipe-color-coding/); [Creative Safety Supply](https://www.creativesafetysupply.com/articles/pipe-colorcodes/)
- **BS 1710:2014** "Specification for identification of pipelines and services" (above and below ground) gives each pipe a basic identification colour for its contents, plus a code or safety colour band, using **BS 4800:2011** colour references. Ship systems were removed in 2014 and are now covered by **BS ISO 14726**. — [BSI](https://knowledge.bsigroup.com/products/specification-for-identification-of-pipelines-and-services); [a-spe](https://a-spe.com/knowledge-base/pipe-marking-guide/); [R M Labels](https://www.rmlabels.com/blog/2017/03/24/bs-17102014-specification-for-identification-of-pipelines-and-services/)
- **IEC 60445 Ed. 7.0 (2021-07)** covers identification of equipment terminals, conductor terminations and conductors. A consolidated **IEC 60445:2021 + AMD1:2026** exists. Colours: PE = green-yellow; N = blue; AC phases L1 = brown, L2 = black, L3 = grey. — [IEC 60445:2021+AMD1:2026 CSV sample](https://cdn.standards.iteh.ai/samples/iec/iec-60445-2021/c4a0a8a441884afba2028cac1dd3ae11/iec-60445-2021-amd1-2026-csv.pdf); [iTeh](https://standards.iteh.ai/catalog/standards/iec/7275345f-6850-44bf-a57f-02870c0e23d2/iec-60445-2021); [Robotiq](https://blog.robotiq.com/knowledge/wiring-color-identification-in-control-cabinets-under-iec-60445)
- Thailand: under **TIS 11-2553 (มอก. 11-2553)**, which is aligned to IEC 60227, colours are L = brown, N = light blue, earth = green-yellow; three-phase L1/L2/L3 = brown/black/grey. — [capsolar.co.th](https://capsolar.co.th/en/knowledge/wire-color-code-standard-thailand); [DSD มอก. 11-2553](https://www.dsd.go.th/DSD/Doc/Download/17093)

### Inferences
- The remaining ASME A13.1 classes, as widely published but not verified here:
  - flammable/oxidising = black on yellow
  - combustible = white on brown
  - potable, cooling, boiler-feed and other water = white on green
  - compressed air = white on blue
  - user-defined = purple, black, grey, white
- The BS 1710 basic colours, as widely cited but not verified here:
  - water = green
  - steam = silver-grey
  - oils = brown
  - gases = yellow ochre
  - acids/alkalis = violet
  - air = light blue
  - other fluids = black
  - electrical services = orange

  The red safety band means fire-fighting.
- For TBIM, pipe-service colours in a BIM model are display colours, not labels. Offer an "ASME A13.1" and a "BS 1710" palette as options, plus a Thai-practice palette defined by the owner or consultant.

### Gaps
- The full ASME A13.1-2023 table with Pantone numbers and the BS 1710 BS 4800 codes were not retrieved.
- ISO 14726 edition (2008?) not confirmed.
- No Thai pipe colour-coding standard was identified. Thai fire codes such as the EIT fire protection standard may define red for fire piping, but this was not checked.

---

## Q5. Southeast Asia / Thailand: dominant standards and TIS adoption

### Takeaway
No TIS (มอก.) adoption of IEC 60617, NFPA 170 or ISO 14617 was found. Thai electrical practice runs through the EIT/MEA/PEA "Electrical Installation Standard for Thailand" and IEC-aligned cable standards (TIS 11-2553). Thai drawings in practice mix IEC-style and US-style symbols, defined per project in a legend sheet. The only SEA adoption record found is the Philippines' **PNS 6790:1992** (ISO 6790).

### Cited Findings
- The "Electrical Installation Standard for Thailand" (มาตรฐานการติดตั้งทางไฟฟ้าสำหรับประเทศไทย) is produced by the Engineering Institute of Thailand (วสท.) with MEA and PEA. Editions include B.E. 2556 and later ones (for example 2564). EIT standards are used as the basis for legal compliance in electrical safety, fire protection and building systems. — [EIT standard article (TH)](https://www.xn--82cz5aihol4c5bwl.com/eit-standard/); [FlipHTML5 2556 edition](https://fliphtml5.com/wfrt/taov/basic); [Scribd วสท. 2564](https://www.scribd.com/document/718402155/)
- The Thai cable standard TIS 11-2553 is aligned to IEC 60227, and Thai conductor colours follow IEC 60445. — [capsolar.co.th](https://capsolar.co.th/en/knowledge/wire-color-code-standard-thailand); [DSD](https://www.dsd.go.th/DSD/Doc/Download/17093)
- Thai utilities also publish their own work standards. The Provincial Waterworks Authority's electrical works standard is กปภ.04-2558. — [CMRU copy of กปภ.04-2558](https://www.cmru.ac.th/file/download/3823/1.4%20%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%90%E0%B8%B2%E0%B8%99%20%E0%B8%81%E0%B8%9B%E0%B8%A0.04-2558.pdf)
- Philippines: ISO 6790 was adopted as PNS 6790:1992. — [GlobalSpec](https://standards.globalspec.com/std/600050/ISO%206790)
- Thai-language teaching and vendor pages present IEC 60617 as the reference for electrical symbols, alongside IEEE 315 material. — [RS Online TH](https://th.rs-online.com/web/content/discovery/ideas-and-advice/electronic-symbols-explanation); [klangfaifa](https://www.klangfaifa.com/Knowledge-about-Electrical-equipment/ElectricalSymbols%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2.html); [hmong.in.th (IEEE 315 TH)](https://hmong.in.th/wiki/IEEE_315-1975)

### Inferences
- Thailand's MEP design culture follows both lineages:
  - Electrical power and cable standards are IEC-based (EIT and TIS track IEC 60364 and IEC 60227/60502).
  - Fire protection design commonly follows NFPA (EIT fire standards are NFPA-derived), which makes **NFPA 170-style fire symbols** familiar.
  - HVAC and plumbing drawings often use US/ASHRAE-style legends from international consultants.

  This supports TBIM offering both an IEC set and a US set, with a project-level legend generator.
- Malaysia (MS IEC 60617) and Singapore (SS 638 / IEC-based practice) are likely IEC-style. This was not verified.

### Gaps
- No evidence found of a **มอก. identical adoption of IEC 60617** or of any TIS drawing-symbol standard. TISI's catalogue (tisi.go.th) was not searched directly, and this should be checked.
- Whether the EIT electrical installation standard contains a symbols appendix could not be confirmed.
- No Thai fire-symbol, plumbing-symbol or HVAC-symbol national standard was found. The EIT fire alarm standard (วสท. 3002) symbol content was not checked.
- Malaysia (MS), Singapore (SS), Vietnam (TCVN) and Indonesia (SNI) adoption of IEC 60617 or ISO 14617 was not found in searches.

---

## Q6. Access, licensing and copyright for reproducing symbols in commercial software

### Takeaway
IEC and ISO hold copyright in their databases and documents. IEC encourages using its symbols in diagrams but **forbids duplicating or extracting substantial parts of the DB for commercial exploitation without written approval**. A BIM product that ships a complete IEC 60617-derived library should therefore either redraw symbols independently (see Inferences) or get IEC permission. The same applies to NFPA, NECA and ISA. Open-licence libraries exist for P&ID.

### Cited Findings
- IEC: "The structure and content of the IEC databases are copyright of IEC." IEC encourages use and citation of database content to identify or clarify symbols "in manuals, diagrams and equipment", and IEC should be referenced as the source. **Duplication of the databases, or extraction of substantial portions for commercial exploitation or free sharing, is prohibited without explicit written approval from IEC.** Subscriptions are sold through IEC National Committees, their sales outlets or the IEC Webstore, under the IEC Webstore Product(s) Licence Agreement. — [IEC 60617 info sheet](https://webstore.iec.ch/en/iec_catalog/product/preview/?id=L3B1Yi9wZGYvcHJldmlldy9pbmZvX2llYzYwNjE3e2VkMS4wfWIucGRm); [library.iec.ch](https://library.iec.ch/iec60617)
- The joint IEC 60417 / ISO 7000 database of equipment symbols is also subscription-based. — [IEC/ISO DB info](https://webstore.ansi.org/preview-pages/IEC/preview_IEC+60417-DB-12M+Ed.+1.0+b-2002.pdf); [IEC TC 3](https://tc3.iec.ch/tc-activity/graphical-symbols-for-use-on-equipment/)
- The ISO 7010:2019 document is copyright-protected, and no part may be reproduced without written permission. A sign-industry source argues that the safety symbols themselves are commonly treated as free to use. That is a legal opinion, not an ISO statement. — [ISO 7010 PDF copy (ITS)](https://www.its.ac.id/burb/wp-content/uploads/sites/106/2023/07/ISO_7010_2019_EN.pdf-1-safety-sign.pdf); [Parrot Signs](https://parrotsigns.co.uk/articles/are-safety-signs-copyrighted-understanding-the-legal-landscape)
- NCS v7 is sold under per-seat licences (1–2 employees per single licence). Its DWG symbols are downloadable only by licensees. — [NCS v7](https://nationalcadstandard.org/ncs7/new.php)
- NECA 100-2024 ships AutoCAD symbol files with the purchased PDF. — [ANSI webstore](https://webstore.ansi.org/standards/neca/neca1002024)
- Vendor implementations of IEC 60617 already exist (Autodesk AutoCAD Electrical "IEC-60617 Symbol Preview"; Siemens Capital X Panel Designer IEC symbols) and are examples of licensed or independently drawn libraries. — [Autodesk](https://help.autodesk.com/view/ACAD_E/2026/ENU/?guid=GUID-7871E6EF-24D5-467E-9B74-321FEDC9DFDA); [Capital X Panel Designer](https://symbols.radicasoftware.com/225/iec-symbols)
- Open-licence P&ID and ISO 10628 / 14617 libraries: FreeCAD-symbols (CC-BY 3.0), Wikimedia Commons ISO 10628-2 sheets (PD or CC-BY-SA), draw.io stencils, SpaceTeam/pnid-lib (GPL-3.0, which is copyleft and risky for proprietary software), PIDcircuitTikZ (LPPL). — [GitHub gist](https://gist.github.com/ChintanTalapara/5d5d8fb26a16c980612ee03f49051230)

### Inferences
- Safest path for TBIM:
  - (a) **Redraw every symbol independently** from the geometric descriptions. Simple geometric conventions (a circle with a cross, a semicircle socket) are generally not copyrightable in themselves, but the curated database is.
  - (b) Cite the S-number or the standard clause as "conforms to" metadata instead of copying the DB images.
  - (c) Avoid GPL libraries.
  - (d) If TBIM wants to show official IEC S-numbers with names and pictures in bulk, contact IEC (or TISI as the Thai IEC National Committee) about a licence.

  This is not legal advice. Thai counsel should confirm it.

### Gaps
- NFPA's, ISA's and NECA's specific policies on embedding their symbols in commercial software were not found. The standard "All rights reserved" copyright notices apply.
- The TISI role as Thailand's IEC National Committee and sales outlet for IEC 60617 DB subscriptions was not confirmed.
