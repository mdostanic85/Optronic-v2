# OPTRONIC — Corporate Website Redesign

A modern bilingual (EN/DE) rebuild of [optronic.ch](https://www.optronic.ch), the website of a Swiss manufacturer of industrial sensors and CNC control systems. This repository is a **full redesign and technical migration** from the legacy WordPress site to a fast, maintainable stack with an AI-assisted development workflow.

| | Legacy site | New site |
|---|-------------|----------|
| **URL** | [optronic.ch](https://www.optronic.ch) | [optronic-v2.vercel.app](https://optronic-v2.vercel.app) |
| **Platform** | WordPress | React + static export (SSG) |
| **Languages** | EN / DE | EN / DE (`/en/*`, `/de/*`) |
| **Feedback** | Email, manual edits | CRRT widget + agent sessions |
| **Deploy** | Traditional hosting | Vercel (CI/CD from GitHub) |

---

## What was done — audit of the new site

### Architecture and infrastructure

- Migrated from a Next.js prototype to **Vite + vite-react-ssg** — static HTML per route, fast load times, low hosting cost.
- **Bilingual routing** with locale prefixes (`/en/`, `/de/`) and automatic redirects from bare paths (`/products/lvm` → `/en/products/lvm`).
- **SEO**: `react-helmet-async`, canonical URLs, hreflang, generated `sitemap.xml` and `robots.txt`.
- **Vercel deploy** with `.npmrc` (legacy peer deps) and `vercel.json` for SPA rewrites.

### Content parity with the live site

- **1:1 copy** from the legacy site for body sections (EN + DE) — products, support, downloads, privacy policy.
- **Downloads page**: 45+ DE / 44+ EN links mapped from [optronic.ch/files/](https://www.optronic.ch/files/); PDFs and ZIPs hosted locally in `public/downloads/`.
- **Support detail pages**: OMC300, CNC obsolete, component lists, FSU200, LV obsolete, OG obsolete — layout and copy aligned with the live reference.
- **9 product pages**: LVMC, LV..M, G15/G35, OG, IRV/IRT, IGV, D500/E3000, OAG Linux, D571.
- **Privacy policy**: full Datenschutzerklärung / Privacy Policy from the live site, routes `/privacy` and `/privacy-policy`.

### UI / UX redesign

- New **design system** (`components/design-system/`): PageHeader, Section, Container, ProductCard, FeatureCard, CalloutCard, SwissMadeBadge, and more.
- **Tailwind CSS 4** with OPTRONIC design tokens (colors, spacing, typography).
- **Radix UI + shadcn-style** components for accessibility and consistency.
- Responsive navigation with product and support dropdown menus.
- Home hero carousel, product grids, support hub with categories.

### CRRT — visual feedback loop

Integrated [**CRRT**](https://crrt.ai) widget (`@thedesignproject/crrt`):

1. Client / reviewer leaves a comment **pinned to a specific pixel** on the live preview.
2. In the dashboard, marks the comment as `accepted` or `rejected`.
3. A Cursor AI agent reads the session, implements accepted items, and reports status (`claim` → `start` → `complete`).

Examples of implemented CRRT feedback:

- Removed obsolete fax number on the contact page
- About: “Seit 1961” instead of “Seit über 60 Jahren”
- Downloads: `LV..M` label fixes
- Support: component lists copy, lv-obsolete title, removed Akkumodul cover link
- Privacy policy: added route, nav link, removed fax from contact block

---

## Tech stack

| Layer | Stack |
|-------|--------|
| **Framework** | React 19, TypeScript 5.7 |
| **Build / SSG** | Vite 8, vite-react-ssg |
| **Routing** | React Router 6 |
| **Styling** | Tailwind CSS 4, CVA, tailwind-merge |
| **UI** | Radix UI, Lucide icons |
| **Forms** | react-hook-form, Zod |
| **SEO** | react-helmet-async |
| **Feedback** | @thedesignproject/crrt |
| **Hosting** | Vercel |
| **Repo** | GitHub |

---

## Project structure

```
views/              # Pages (Home, About, Contact, Support, Products, …)
views/products/     # Product detail pages
components/
  design-system/    # Reusable layout & UI components
  ui/               # Radix/shadcn primitives
locales/            # EN + DE copy (de.ts, en.ts, supportDetailsLocales, privacy)
lib/
  productPageContent/   # Product-specific copy
  downloadUrls.ts       # Local download path helpers
  supportConfig.ts      # Support routes and nav
public/
  assets/           # Product images
  downloads/        # Locally hosted PDF/ZIP files
scripts/            # sitemap, robots, sync-downloads
src/
  router.tsx        # SSG routes + getStaticPaths
  components/       # SEO, LocaleLayout, redirects
.cursor/
  rules/            # copy-replacement, section-validation
  skills/           # product-support-page workflow
```

---

## How AI is used on this project

This project is not “AI generated the site from scratch.” AI acts as a **partner in a controlled process** — with clear rules, verification, and human review.

### 1. Cursor Rules — hard constraints for the agent

| Rule | Purpose |
|------|---------|
| **copy-replacement** | Copy from a live link must be **1:1** (EN + DE). Navbar, hero, and footer are off-limits unless explicitly requested. |
| **section-validation** | Section order on a page must match the live site — reorder only, no copy or UI changes. |

The agent must not paraphrase, shorten, or “improve” client text.

### 2. Cursor Skills — repeatable workflows

The **`product-support-page`** skill defines step-by-step work for every product/support page:

1. Fetch EN + DE from the live site  
2. Map copy into locale files  
3. Pull images from `wp-content/uploads`  
4. Mirror download files locally  
5. Implement layout using the LVM/OMC300 reference  
6. `npm run build` + report what was done  

A skill is a documented procedure the agent **must** follow — not improvisation.

### 3. CRRT — feedback on live UI

Instead of long email threads (“top left, third paragraph…”), the reviewer clicks the exact spot on the page. The agent receives:

- CSS selector / text anchor  
- Screenshot  
- `reviewStatus: accepted`  

…and implements only accepted items.

### 4. Pre-deploy verification

- `npm run build` — SSG must pass for all routes  
- Manual EN + DE check on the preview URL  
- Downloads: HTTP 200 on every link  
- CRRT: `comment.complete` with a description of the change  

### Why this matters for clients

| Without AI discipline | With this approach |
|-----------------------|-------------------|
| Generic “modern” copy | Verbatim text from the existing site |
| Hallucinated links | Local download mirror + verification |
| One-off prompts | Skills + rules = repeatable quality |
| Vague change requests | CRRT pin + accepted/rejected workflow |
| Hard to maintain | Locale files, design system, typed TS |

---

## Benefits of the new site

- **Speed** — static HTML, no WordPress overhead  
- **Security** — no WordPress plugin attack surface  
- **Maintainability** — copy in TypeScript locale files, not a CMS database  
- **Scalability** — new product page = new view + locale keys following an existing template  
- **Bilingual** — structured, not a duplicate site  
- **SEO** — per-page meta, sitemap, canonical URLs  
- **Collaboration** — CRRT + Git = transparent change history  
- **Low cost** — Vercel free/hobby tier for a static site  

---

## Local development

```bash
npm install
npm run dev      # http://127.0.0.1:5175
npm run build    # dist/ + sitemap + robots
npm run preview  # http://127.0.0.1:4173
```

`.npmrc` contains `legacy-peer-deps=true` (Vite 8 + vite-react-ssg peer constraint).

---

## Deploy

Push to `main` → Vercel builds and deploys automatically.

```bash
git push origin main
```

Production: **https://optronic-v2.vercel.app**

---

## Author / context

Redesign and implementation: **Milos Dostanic**  
Client: **OPTRONIC AG**, Goldach, Switzerland  
Period: 2025–2026  

This project demonstrates how a corporate website can migrate from a legacy platform to a modern stack — with AI assistance, but with **human review, rules, and verification**, not blind generation.

---

## License

Private repository. Content (copy, images, PDF documentation) belongs to OPTRONIC AG.
