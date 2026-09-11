# CRRT open feedback — text changes (feedback-update)

Source: `GET https://crrt.ai/api/v1/public/comments?projectKey=optronic` (reviewStatus=open).

## Done

| # | Page | Key / location | Previous | Current |
|---|------|----------------|----------|---------|
| 4 | Home DE+EN | `home.solutionSensorsDesc` | DE: `…Ringtaster für präzise Messung und Erkennung.` / EN: `…sensors for precise measurement and detection.` | DE: `…Ringtaster.` / EN: `…sensors.` |
| 5 | Home DE+EN | `home.solutionControlDesc` | DE: `…Betriebssysteme für die Fertigung.` / EN: `…systems for manufacturing.` | DE: `…Betriebssysteme.` / EN: `…systems.` |
| 6 | Home DE | `home.flagshipProduct` | `Flaggschiff-Produkt` | `Highlight` |
| 7 | Home DE+EN | `home.sensorProductsDesc2` | Second sentence kept (“Alle Sensoren verfügen…” / “All sensors feature…”) | Second sentence removed; first sentence unchanged |
| 8–10 | Contact DE (+EN keys) | `contact.partnerCountryGermany/France/Denmark` + `ContactPage.tsx` | Hardcoded `Germany` / `France` / `Denmark` | DE: `Deutschland` / `Frankreich` / `Dänemark`; EN unchanged via locale keys |
| 11 | G15/G35 DE | `productPages.g15g35.ctaTitle` | `Fragen zu G15 / G35?` | `Fragen zu den Lichtschranken G15 und G35?` |
| 19 | G15/G35 EN | `productPages.g15g35.ctaTitle` | `Questions about G15 / G35?` | `Questions about the light barriers G15 and G35?` |
| 12 | IGV DE | `productPages.igv.overviewBody` | Longer IGV text + “Verfügbar in verschiedenen Varianten…” | `Die Mehrfach-Inkrementalgeberverzweigungen IGV ermöglichen den potentialfreien Anschluss eines Gebers an bis zu drei Zielbaugruppen wie CNC-Steuerungen, SPSen oder Messgeräte.` |
| 20 | IGV EN | `productPages.igv.overviewBody` | Old EN + “Available in different variants…” | EN aligned to DE (no variants sentence). **Confirm wording — pin body was empty.** |
| 13+21 | IGV EN+DE | `IGVPage.tsx` features description | Used shared `lvm.featuresDesc` (“Designed for…” / “Entwickelt für…”) | Description prop removed on IGV only (LVM unchanged) |
| 14 | IGV DE | `productPages.igv.ctaTitle` | `Hilfe bei der Gebersignal-Verteilung?` | `Hilfe bei der Auswahl der geeigneten IGV-Variante?` |
| 22 | IGV EN | `productPages.igv.ctaTitle` | `Need Help with Encoder Signal Distribution?` | `Need help with selecting the right IGV type?` |
| 15+16 | LVM DE | `productPages.lvm.ctaTitle` | `Hilfe bei der Wahl der richtigen LV..M Konfiguration?` | `Benötigen Sie Hilfe bei der Wahl der richtigen LV..M Konfiguration?` (**inferred** from incomplete pin text) |
| 17 | OG DE | `productPages.og.ctaTitle` (new) | Fell back to LVM CTA | `Benötigen Sie Hilfe bei der Auswahl des passenden Gebers?` (single line via `whitespace-nowrap` on OG only) |
| 24 | OG EN | `productPages.og.ctaTitle` (new) | Fell back to LVM CTA | `Need help choosing the right encoder?` (single line; **inferred**) |
| — | All PageCTAs + home/downloads CTA bands | `PageCTA.tsx`, `HomePage.tsx`, `DownloadsPage.tsx` | `max-w-op-narrow` | Full content width `max-w-op-container` (same as tables), DE+EN |
| 23 | IRV/IRT EN | `productPages.irvirt.ctaTitle` (already in WIP) | Fell back to LVM CTA | `Need help choosing the right IRV / IRT?` |

## Not done — need your exact text

| # | Page | Why blocked |
|---|------|-------------|
| 1 | Home DE footer | Privacy pin already `implementationStatus=done`. Skip unless you want a re-check. |
| 2 | Home DE | Body only: `remove this text` → screenshot is heading `Unsere Lösungen`. Empty the string? Remove EN `Our Solutions` too? |
| 3 | Home DE | Body only: `Remove this text` → screenshot is `Kernproduktkategorien für Präzision, Zuverlässigkeit und Leistung`. Empty? EN too? |
| 18 | Home EN | Body only: `replace` on `sensorProductsDesc` — **no replacement string**. |

## Files touched

- `locales/de.ts`
- `locales/en.ts`
- `views/ContactPage.tsx` (country labels → locale keys only)
- `views/products/IGVPage.tsx` (stop passing shared LVM features description)
- `CRRT-FEEDBACK-CHANGES.md` (this file)
