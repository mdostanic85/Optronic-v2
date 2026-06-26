# Product & Support pages — plan (copy, slike, struktura)

> **Agent skill:** use [`.cursor/skills/product-support-page/SKILL.md`](../.cursor/skills/product-support-page/SKILL.md) when fixing or generating these pages. This doc is the human-readable mirror; keep in sync with skill `reference.md`.

> **Obuhvat:** sve stranice u **`/products/*`** i **`/support/*`** (sensors, control-systems, product detail, support overview, support detail, hints, itd.).

Referentne implementacije:

| Tip | Stranica | Fajl |
|-----|----------|------|
| Product (layout) | `/products/lvm` | `views/products/LVMPage.tsx` |
| Product (live slike) | `/products/d500-e3000`, `/products/d571` | `D500E3000Page.tsx`, `D571Page.tsx` |
| Support detail (gotovo) | `/support/omc300` | `views/SupportPage.tsx` → `OMC300Content` |
| Support hints | `/support/hints` | `views/SupportHintsPage.tsx` |

**Cilj svake stranice:** copy i cover **1:1 sa live linkom**, slike **sa live sajta**, sekcije **isti jezik** (LVM / D500 / OMC300).

---

## 0. Obavezni workflow pre rada

Korisnik daje **bar jedan live link**. Agent radi redom:

1. **Copy** — [`.cursor/rules/copy-replacement.mdc`](../.cursor/rules/copy-replacement.mdc) + cover override ([§5](#5-copy--1-1-sa-live-linkom)).
2. **Slike** — URL-ovi iz live HTML-a ([§6](#6-slike-sa-live-sajta)).
3. **Redosled sekcija** — ako je zadatak samo reorder: [`.cursor/rules/section-validation.mdc`](../.cursor/rules/section-validation.mdc).
4. **Layout** — [§2](#2-struktura-sekcija) + varijanta po tipu ([§7](#7-varijante-po-tipu-stranice)).
5. **Cover** — verbatim sa live ([§4](#4-cover--1-1-sa-live-sajtom)).
6. **Checklist** — [§10](#10-checklist-pre-merge-a).

**Ne raditi:** parafraziranje, placeholder slike ako live ima drugačiju, sidebar na detail stranicama.

---

## 1. Obuhvat — koje stranice

### Product (`views/products/*`, overview stranice)

| Repo ruta | Komponenta | Live putanja (tipično) |
|-----------|------------|-------------------------|
| `/products/lvmc` | `LVMCPage` | `/sensors/lvmc/` |
| `/products/lvm` | `LVMPage` | `/sensors/lvm/` |
| `/products/g15-g35` | `G15G35Page` | `/sensors/g15_g35/` |
| `/products/og` | `OGPage` | `/sensors/og/` |
| `/products/irv-irt` | `IRVIRTPage` | `/sensors/irv_irt/` |
| `/products/igv` | `IGVPage` | `/sensors/igv/` |
| `/products/d500-e3000` | `D500E3000Page` | `/control_systems/d500/` |
| `/products/oaglinux` | `OAGLinuxPage` | `/control_systems/oaglinux/` |
| `/products/d571` | `D571Page` | `/control_systems/d571/` |
| `/products/sensors` | `SensorsPage` | `/sensors/overview/` |
| `/products/control-systems` | `ControlSystemsPage` | `/control_systems/overview/` |

EN: `https://www.optronic.ch/en/...` · DE: `https://www.optronic.ch/...` (bez `/de/`).

### Support (`views/Support*.tsx`)

| Repo ruta | Komponenta | Napomena |
|-----------|------------|----------|
| `/support` | `SupportPage` (index) | Gallery kartice, intro |
| `/support/omc300` | `OMC300Content` | Referenca |
| `/support/cnc-obsolete` | `CNCObsoleteContent` | |
| `/support/component-lists` | `ComponentListContent` | |
| `/support/fsu200` | `FSU200Content` | |
| `/support/lv-obsolete` | `LVObsoleteContent` | |
| `/support/og-obsolete` | `OGObsoleteContent` | |
| `/support/hints` | `SupportHintsPage` | Poseban layout (2 kolone kartice) |
| `/support/downloads` | `DownloadsPage` | Velika lista fajlova |
| `/support/documentation` | `DocumentationPage` | |
| `/support/faqs` | `FAQsPage` | |
| `/support/contact` | `SupportContactPage` | |

Support detail live slugovi često koriste `_` (npr. `cnc_obsolete`, `component_list`) — vidi [§5](#5-copy--1-1-sa-live-linkom).

---

## 2. Struktura sekcija

Zajednički uzorak za **product** i **support detail** stranice.

### Shell

```
SEO
PageHeader     ← cover sa live (§4)
Section × N    ← body; svaki logički blok = svoj Section
PageCTA        ← dno stranice (product ili support CTA; repo-only ako nema na live)
```

- **Bez** spoljašnjeg `Section`/`Container` koji obavija sve sekcije odjednom.
- **Bez** sidebar navigacije na detail stranicama.
- Link nazad u `PageHeader` `children`: product → kategorija (`/products/sensors` ili `/products/control-systems`); support → `/support`.

### Redosled (standardna product/support detail stranica)

| # | `variant` | Sadržaj |
|---|-----------|---------|
| 1 | `surface` | Overview: badge + `h2` + opis + slika (`md:grid-cols-2`, `gap-16`) |
| 2 | `muted` | Features: `ProductSectionHeader` + `ProductBulletList` |
| 3 | `surface` | Downloads: `ProductSectionHeader` + `ProductDownloadsList` |
| 4+ | naizmenično | Tabele, galerije, video, dodatne podsekcije — red kao na live |

### Layout konstante

| Element | Vrednost |
|---------|----------|
| Grid overview | `md:grid-cols-2`, `gap-16`, `items-center` |
| Slika | `aspect-[4/3]`, `rounded-xl`, `border-4 border-gray-100`, `object-contain` |
| Badge | `rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary` |
| Opis | `text-lg leading-relaxed text-op-body` |
| Bullets | `ProductBulletList` |
| Downloads | `ProductDownloadsList` + header (badge + title + desc) ispred |
| Pozadine | `surface` → `muted` → `surface` → … (`sectionVariant(index)` ili eksplicitno) |
| Širina | pun `Container` — ne uska `max-w-xl` kolona za glavni sadržaj |

### Pravilo granice sekcije

Svaki blok sa **sopstvenim naslovom** na live = **poseban** `<Section>`. Ne stapati npr. video + downloads + galeriju u jedan `Section` ([section-validation](../.cursor/rules/section-validation.mdc)).

---

## 3. Komponente

| Svrha | Komponenta |
|-------|------------|
| Cover | `PageHeader` |
| Omotač | `Section` + `Container` |
| Naslov sekcije | `ProductSectionHeader` |
| Bullet lista | `ProductBulletList` |
| Download kartice | `ProductDownloadsList` |
| Slika | `ImageWithFallback` / `CardImage` |

**Zastarelo:** `SupportTechBulletList`, `DownloadRow`, sidebar na detail stranicama.

---

## 4. Cover — 1:1 sa live sajtom

Važi za **product** i **support** stranice sa `PageHeader`.

| Live (hero / cover zona) | Product repo | Support detail repo |
|--------------------------|--------------|---------------------|
| `<h1>` | `page.title` / `getProductPageData` | `coverTitle` |
| Podnaslov / tagline | `page.subtitle` / `productPages.*` | `coverSubtitle` |
| Link nazad | `backToSensors` / `backToControlSystems` | `backToSupport` |
| Download linkovi u hero | → Downloads sekcija ispod | → `downloads[]` + Downloads sekcija |

**Pravilo:** `title` + `description` u `PageHeader` moraju biti **verbatim** sa live cover-a (EN i DE posebno).

- Product: ne mešati SEO naslov sa cover `h1` ako se razlikuju.
- Support: `categories.*.title` za nav/SEO; `coverTitle` za prikaz u headeru.

**Bold u tagline-u:** renderovati ako je na live `<b>` / `<strong>`.

---

## 5. Copy — 1:1 sa live linkom

### Pravila u repou

| Pravilo | Fajl |
|---------|------|
| Copy 1:1 | [`.cursor/rules/copy-replacement.mdc`](../.cursor/rules/copy-replacement.mdc) |
| Samo redosled sekcija | [`.cursor/rules/section-validation.mdc`](../.cursor/rules/section-validation.mdc) |

| Uvek | Nikad |
|------|--------|
| Fetch EN + DE | Parafrazirati |
| Tekst verbatim | Izmišljati prevod |
| Bold u body-ju | Dirati navbar, footer, homepage hero |

### Cover + body override (product & support)

Standardno copy-replacement pravilo **ignoriše cover** kao izvor. Za stranice iz ovog plana:

- **Cover** (`PageHeader` title + description) → **uzeti sa live cover-a**.
- **Body** → verbatim redom kao na live.
- **Download labeli** → verbatim sa live.

Copy-only task = samo stringovi. Layout task = copy + slike + sekcije po ovom planu.

### Gde živi copy

| Oblast | Fajlovi |
|--------|---------|
| Product stranice | `lib/productPageContent/en.ts`, `de.ts`; `locales/en.ts` → `productPages.*` |
| Support detail | `locales/supportDetailsLocales.ts` |
| Support overview / hints | `locales/en.ts`, `de.ts` → `support.*`; `supportDetailsLocales.ts` |
| Nav labeli | `locales/*` → `nav`, `categories.*` (ne za body tekst) |

### Tipični ključevi (product-like / support detail)

```ts
// Product: page.title, page.subtitle, sections[], downloads[]
// Support detail:
{
  coverTitle, coverSubtitle,
  heading,
  overviewP1?,          // samo ako postoji na live — ne izmišljati
  features[], featuresDesc?,
  downloads[], downloadsTitle, downloadsDesc,
  // tabele, p1/p2, … po stranici
}
```

### Live URL šema

**Product (sensors):** `…/en/sensors/{slug}/` · DE: `…/sensors/{slug}/`  
**Product (control):** `…/en/control_systems/{slug}/` · DE: `…/control_systems/{slug}/`  
**Support detail:** vidi tabelu u §1; DE bez `/de/`.

Korisnikov link ima prioritet; drugi jezik izvesti zamenom `/en/` ↔ root.

---

## 6. Slike sa live sajta

Obavezno za **sve** product i support stranice iz ovog plana.

1. Fetch live HTML (EN/DE).
2. Naći `<img>` u body/cover modulima (`fl-photo-img`, `wp-image-*`).
3. Uzeti pun URL: `https://www.optronic.ch/wp-content/uploads/YYYY/MM/file.ext` (najveći iz `srcset`).

**U repo:**

```ts
// Preferirano — kao D500, OAGLinux, OG, support gallery
const image = 'https://www.optronic.ch/wp-content/uploads/2022/02/omc300.jpg';
```

Ili lokalno u `public/assets/` samo ako projekat već tako radi.

| Pravilo | Detalj |
|---------|--------|
| Izvor | Live `src` / `srcset`, ne stari placeholder |
| `alt` | Sa live `alt` ili `title` |
| Okvir u body | `aspect-[4/3]` + `border-4` + `object-contain` |
| Overview gallery | `lib/supportConfig.ts` → `SUPPORT_OVERVIEW_GALLERY` |
| Više slika | Jedna sekcija ili grid po live redosledu |

---

## 7. Varijante po tipu stranice

Isti design-system; broj i sadržaj sekcija = **live redosled**.

### A) Standard product / support detail (LVM, OMC300)

Overview → Features → Downloads → (opciono tabele/galerija/video).

### B) Višesekcijski product (D500, D571, LVMC)

Više feature blokova + tabele + slike; svaki blok = `Section`, naizmenične pozadine.

### C) Support — tekst + podsekcije (`cnc-obsolete`)

Uvod → podteme (baterija + download, CRT link…) — svaka `ProductSectionHeader` + sadržaj.

### D) Support — tabela (`component-lists`)

Intro → tabela; `supportTechText` na kodovima (`D1xx`).

### E) Support — višeslojno (`fsu200`)

Intro → bullets + slika → tabela → FPDI + slika → downloads.

### F) Support — tabele + slike (`lv-obsolete`, `og-obsolete`)

Naslov → slika/tabela → napomene → downloads.

### G) Support hints

`SupportHintsPage` — copy 1:1; layout: 2 kartice/red, jednaka visina image containera.

### H) Overview / listing (`/support`, `/products/sensors`)

Intro + kartice/grid; slike sa live; naslovi u karticama.

### I) Downloads / FAQ / Documentation

Copy i linkovi 1:1; layout po postojećem komponentu — i dalje live slike gde postoje.

---

## 8. Locale vs nav vs cover

| Ključ | Upotreba |
|-------|----------|
| `nav.*`, `categories.*` | Navigacija |
| `page.title` / `coverTitle` | `PageHeader` — live cover |
| `page.subtitle` / `coverSubtitle` | `PageHeader` description |
| Body ključevi | Sekcije ispod cover-a — live body |

---

## 9. Status (pregled)

### Product pages

| Ruta | Layout | Copy | Live slike |
|------|--------|------|------------|
| `lvm` | ✅ uzorak | ❓ | delimično |
| `lvmc` | ⚠️ | ❓ | delimično |
| `g15-g35` | ⚠️ | ❓ | ✅ URL |
| `og` | ⚠️ | ❓ | ✅ URL |
| `irv-irt`, `igv` | ⚠️ | ❓ | ❓ |
| `d500-e3000`, `d571`, `oaglinux` | ✅ | ❓ | ✅ URL |

### Support

| ID / ruta | Layout | Copy | Live slike |
|-----------|--------|------|------------|
| `omc300` | ✅ | ✅ | ⚠️ → `omc300.jpg` |
| ostali detail | ⚠️ | ❓ | ❓ |
| `hints` | ✅ | ❓ | gallery ✅ |
| index | ✅ | ❓ | gallery ✅ |

---

## 10. Checklist pre merge-a

### Copy
- [ ] `.cursor/rules/copy-replacement.mdc`
- [ ] EN + DE live
- [ ] Cover verbatim
- [ ] Body verbatim (redosled sekcija = live)
- [ ] Download labeli verbatim
- [ ] Bold renderovan

### Slike
- [ ] Svi `img` sa live mapirani
- [ ] Nema zastarelih `/assets/` placeholdera

### Layout
- [ ] `PageHeader` → `Section` × N → `PageCTA`
- [ ] Overview grid `gap-16 md:grid-cols-2`
- [ ] `ProductBulletList` + `ProductDownloadsList` + download header
- [ ] Naizmenično `surface` / `muted`
- [ ] Uporediti sa `/de/products/lvm`

### Build
- [ ] `npm run build`

---

## 11. Povezani fajlovi

| Fajl | Uloga |
|------|--------|
| `.cursor/rules/copy-replacement.mdc` | Copy 1:1 |
| `.cursor/rules/section-validation.mdc` | Redosled sekcija |
| `.cursor/skills/product-support-page/SKILL.md` | Agent skill (primary) |
| `.cursor/skills/product-support-page/reference.md` | Skill reference (routes, variants) |
| `docs/support-detail-page-plan.md` | Human-readable plan (this file) |
| `views/products/*.tsx` | Product stranice |
| `views/SupportPage.tsx`, `SupportHintsPage.tsx`, … | Support |
| `lib/productPageContent/` | Product copy |
| `locales/supportDetailsLocales.ts` | Support detail copy |
| `lib/supportConfig.ts` | Support rute + gallery slike |

### Primer prompta

> Primeni product-support plan + copy-replacement:  
> `https://www.optronic.ch/sensors/lvm/`  
> Layout kao LVM, slike sa live, cover 1:1.

> Primeni plan za support:  
> `https://www.optronic.ch/support/fsu200/`
