

import { Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Download } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent } from '../components/ui/card';
import { CardImage, PageHeader, PageCTA, Section, Container, ButtonLink } from '../components/design-system';
import { ProductSectionHeader } from '../components/design-system/product-page/ProductSectionHeader';
import { ProductBulletList } from '../components/design-system/product-page/ProductBulletList';
import { ProductDownloadsList } from '../components/design-system/product-page/ProductDownloadsList';
import { useLanguage } from '../contexts/LanguageContext';
import { SUPPORT_OVERVIEW_GALLERY } from '../lib/supportConfig';
import { batteryModulePdf, fsu200DownloadHrefs, lvObsoleteDownloadHrefs, lvObsoleteDownloads } from '../lib/downloadUrls';
import { SEO } from '../src/components/SEO';

interface SupportCategory {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
}

/** Same font (Plus Jakarta); evens out repeated “x” in codes like D1xx / E7xx (no ligatures / contextual alts). */
const supportTechText =
  "antialiased [font-feature-settings:'liga'_0,'clig'_0,'calt'_0] [font-variant-ligatures:none]";

function sectionVariant(index: number): 'muted' | 'surface' {
  return index % 2 === 1 ? 'surface' : 'muted';
}

function SupportTechBulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex max-w-none flex-col gap-3">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 text-base leading-relaxed text-op-body ${supportTechText}`}>
          <span className="mt-[0.55rem] h-2 w-2 flex-shrink-0 rounded-full bg-op-primary" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProductImageFrame({ src, alt }: { src: string; alt: string }) {
  return <CardImage src={src} alt={alt} className="w-full rounded-xl border-4 border-gray-100" />;
}

function OMC300Content() {
  const { t } = useLanguage();
  const sd = t.supportDetails;

  return (
    <>
      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary">
                {t.nav.support}
              </div>
              <h2 className="mb-6 text-3xl text-op-ink md:text-4xl">{sd.omc300.heading}</h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-op-body">{sd.omc300.coverSubtitle}</p>
                <p className="text-lg leading-relaxed text-op-body">{sd.omc300.overviewP1}</p>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
                <ImageWithFallback
                  src="/assets/omc300.png"
                  alt="OMC300"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.featuresCapabilities}
            title={sd.omc300.heading}
            description={sd.omc300.featuresDesc || undefined}
          />
          <ProductBulletList items={sd.omc300.features} />
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.resourcesDownloads}
            title={sd.omc300.downloadsTitle}
            description={sd.omc300.downloadsDesc}
          />
          <ProductDownloadsList downloads={sd.omc300.downloads} />
        </Container>
      </Section>
    </>
  );
}

const CNC_OBSOLETE_IMAGES = {
  d100ps: '/assets/d100ps.png',
  accu: '/assets/accu.png',
  fsu200: '/assets/fsu200-2.png',
} as const;

function cncObsoleteBatteryPdf(locale: string) {
  return batteryModulePdf(locale === 'de' ? 'de' : 'en');
}

function CNCObsoleteContent() {
  const { t, lp, locale } = useLanguage();
  const co = t.supportDetails.cncObsolete;
  const supportBadge = t.nav.support;
  const batteryPdf = cncObsoleteBatteryPdf(locale);

  return (
    <>
      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary">
                {supportBadge}
              </div>
              <h2 className="mb-6 text-3xl text-op-ink md:text-4xl">{co.orderingTitle}</h2>
              <div className="space-y-4 text-lg leading-relaxed text-op-body">
                <p>{co.p1}</p>
                <p>
                  {co.p2BeforeLink}
                  <Link
                    to={lp('/support/component-lists')}
                    className="font-semibold text-op-primary hover:underline"
                  >
                    {co.p2LinkText}
                  </Link>
                  {co.p2AfterLink}
                </p>
                <p>{co.p3}</p>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
                <ImageWithFallback
                  src={CNC_OBSOLETE_IMAGES.d100ps}
                  alt={co.imageAltD100ps}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <ProductSectionHeader title={co.batteryTitle} centered={false} />
              <p className="text-lg leading-relaxed text-op-body">
                {co.batteryBeforeLink}
                <a
                  href={batteryPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-op-primary hover:underline"
                >
                  {co.batteryLinkText}
                </a>
                {co.batteryAfterLink}
              </p>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
                <ImageWithFallback
                  src={CNC_OBSOLETE_IMAGES.accu}
                  alt={co.imageAltAccu}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <ProductSectionHeader title={co.replacingTitle} centered={false} />
              <p className="text-lg leading-relaxed text-op-body">
                {co.replacingPrefix}
                <Link to={lp('/support/fsu200')} className="font-semibold text-op-primary hover:underline">
                  {co.replacingLinkText}
                </Link>
                {co.replacingSuffix}
              </p>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
                <ImageWithFallback
                  src={CNC_OBSOLETE_IMAGES.fsu200}
                  alt={co.imageAltFsu200}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ComponentListContent() {
  const { t, locale } = useLanguage();
  const sd = t.supportDetails;
  const lists = [
    { id: 'D101', systems: 'D101, D101A, D101B, D101C, D101D, D101E', operatingStations: '', link: '/downloads/doc/component_lists/Baugruppenliste_D101.pdf' },
    { id: 'D107', systems: 'D107, D107A, D107B, D107C, D107D, D107E, D107G, D107H, D107J', operatingStations: 'D107F', link: '/downloads/doc/component_lists/Baugruppenliste_D107.pdf' },
    { id: 'D111', systems: 'D111', operatingStations: '', link: '/downloads/doc/component_lists/Baugruppenliste_D111.pdf' },
    { id: 'D114', systems: 'D114', operatingStations: '', link: '/downloads/doc/component_lists/Baugruppenliste_D114.pdf' },
    { id: 'D115', systems: 'D115-00, D115-01, D115-02, D115-03, D115-07, D115-15', operatingStations: '', link: '/downloads/doc/component_lists/Baugruppenliste_D115.pdf' },
    { id: 'D116', systems: 'D116', operatingStations: '', link: '/downloads/doc/component_lists/Baugruppenliste_D116.pdf' },
    { id: 'D124', systems: 'D124-01, D124-02, D124-06, D124-08', operatingStations: 'E114, E114A, E114B, E3251', link: '/downloads/doc/component_lists/Baugruppenliste_D124.pdf' },
    { id: 'D128', systems: 'D128, D128A, D128B, D128C-3, D128C-4, D128C-5, D128C-6, D128C6-3, D128C6-4, D128C6-6', operatingStations: '', link: '/downloads/doc/component_lists/Baugruppenliste_D128.pdf' },
    { id: 'D134', systems: 'D134-00, D134-01, D134-03, D134-07, D134A-03, D134A-11, D134A-15, D134A-19, D134B-19', operatingStations: 'E101, E102', link: '/downloads/doc/component_lists/Baugruppenliste_D134.pdf' },
    { id: 'D139', systems: 'D139-00, D139-01, D139-03, D139-05, D139-07, D139-31, D139A-31, D139B-00, D139B-02, D139B-27, D139B-31, D139B-36, D139B-37, D139C/1, D139C/2, D139C/3, D139C/4', operatingStations: 'D100FB2, D139FB2, D139FB3', link: '/downloads/doc/component_lists/Baugruppenliste_D139.pdf' },
    { id: 'D140', systems: 'D140, D140A, D140B, D140D', operatingStations: 'D140F', link: '/downloads/doc/component_lists/Baugruppenliste_D140.pdf' },
    { id: 'D141', systems: 'D141-000, D141-002, D141-003, D141-006, D141-007, D141-015, D141-071, D141-079, D141-107, D141A-043, D141A-047', operatingStations: '', link: '/downloads/doc/component_lists/Baugruppenliste_D141.pdf' },
    { id: 'D145', systems: 'D145, D145C, D145D, D145E', operatingStations: 'D145F, D145F2', link: '/downloads/doc/component_lists/Baugruppenliste_D145.pdf' },
    { id: 'D147', systems: 'D147, D147A-06, D147A-13, D147A-29, D147A-45, D147A-46, D147B-13, D147C-13, D147C-46', operatingStations: 'D100FB1, D100FB2, D100FB3', link: '/downloads/doc/component_lists/Baugruppenliste_D147.pdf' },
    { id: 'D150', systems: 'D150, D150A, D150B', operatingStations: 'D150F2', link: '/downloads/doc/component_lists/Baugruppenliste_D150.pdf' },
    { id: 'D151', systems: 'D151-000, D151-001, D151-002, D151-003, D151-004, D151-005, D151-007, D151-012', operatingStations: 'E102', link: '/downloads/doc/component_lists/Baugruppenliste_D151.pdf' },
    { id: 'D171', systems: 'D171/01, D171/01A2, D171/01A3, D171/01A4, D171/01B1, D171/01C1, D171/01D1, D171/01D2, D171/01E1, D171/01E2, D171/01E3, D171/01F1, D171/01F2, D171/11', operatingStations: 'E102, E3112, E3210', link: '/downloads/doc/component_lists/Baugruppenliste_D171.pdf' },
    { id: 'D175', systems: 'D175', operatingStations: 'D100F1', link: '/downloads/doc/component_lists/Baugruppenliste_D175.pdf' },
    { id: 'D176', systems: 'D176/01, D176/01B1, D176/01EB1, D176/02, D176/03, D176/03A2, D176/03C1, D176/03D1, D176/03D2, D176/03E1, D176/04, D176/05, D176/05B1, D176/06, D176/06A1, D176/06B1, D176/06C1, D176/06D1, D176/06D2, D176/06E1, D176/06F1, D176/06F2, D176/06G1, D176/06H1', operatingStations: 'F1000, E3610, E3611', link: '/downloads/doc/component_lists/Baugruppenliste_D176.pdf' },
    { id: 'D177', systems: 'D177/01', operatingStations: 'F1000', link: '/downloads/doc/component_lists/Baugruppenliste_D177.pdf' },
    { id: 'D178', systems: 'D178/01, D178/01B1, D178/01C1, D178/02A1, D178/03A1, D178/03A2, D178/03B1, D178/03B2', operatingStations: 'E3510, E3520, E3610, E3611, E3612', link: '/downloads/doc/component_lists/Baugruppenliste_D178.pdf' },
    { id: 'D301', systems: 'D301, D301-A3, D301-B1, D301-C1', operatingStations: 'E3611', link: '/downloads/doc/component_lists/Baugruppenliste_D301.pdf' },
    { id: 'D304', systems: 'D304, D304A1, D304/01B1, D304/02A1, D304/02B1', operatingStations: 'E2010, E3610', link: '/downloads/doc/component_lists/Baugruppenliste_D304.pdf' },
    { id: 'D305', systems: 'D305, D305/01A1, D305/01B1, D305/01B2, D305/01B3, D305/01B4, D305/02A1, D305/03A1, D305/04A1', operatingStations: 'E3250, E3610, E3611, E3631', link: '/downloads/doc/component_lists/Baugruppenliste_D305.pdf' },
    { id: 'D306', systems: 'D306, D306/01A1, D306/02A1, D306/03A1', operatingStations: 'E3020, E3120, E3210, E3611, E3612', link: '/downloads/doc/component_lists/Baugruppenliste_D306.pdf' },
    { id: 'D376', systems: 'D376/05C1, D376/05D1, D376/05D2', operatingStations: 'E3610, E3611, E3641', link: '/downloads/doc/component_lists/Baugruppenliste_D376.pdf' },
    { id: 'D377', systems: 'D377/01A1, D377/01B1, D377/01C1, D377/01D1, D377/01E1, D377/01F1', operatingStations: 'E3610, E3611', link: '/downloads/doc/component_lists/Baugruppenliste_D377.pdf' },
    { id: 'E100', systems: '', operatingStations: 'E101, E102', link: '/downloads/doc/component_lists/Baugruppenliste_E100.pdf' },
    { id: 'E152', systems: 'E152-00, E152-01, E152-02, E152-04, E152-10, E152-A103', operatingStations: '', link: '/downloads/doc/component_lists/Baugruppenliste_E152.pdf' },
    { id: 'E153', systems: 'E153, E153-01, E153-211, E153-212', operatingStations: '', link: '/downloads/doc/component_lists/Baugruppenliste_E153.pdf' },
    { id: 'D510', systems: 'D510/01 A1, D510/02 A1', operatingStations: 'E3753', link: null },
    { id: 'D520', systems: 'D520/01 A1', operatingStations: 'E3250', link: null },
    { id: 'D547', systems: 'D547/01 A1, D547/01 A2', operatingStations: '', link: null },
    { id: 'D571', systems: 'D571/01 A1, D571/01 A2, D571/01 B1, D571/02 C4, D571/02 C5, D571/02 C6, D571/02 C7', operatingStations: 'E3260, E3262, E3410, E3440, E3450, E3460', link: null },
    { id: 'D577', systems: 'D577/01 A1, D577/01 A2, D577/01 A3, D577/01 A4, D577/01 B5, D577/01 B6, D577/01 C1', operatingStations: 'E3741, E3743, E3751, E3753', link: null },
    { id: 'D200', systems: '', operatingStations: 'D200 Panel', link: null },
    { id: 'D300', systems: '', operatingStations: 'D300 Panel', link: null },
  ];
  const noDownloadLabel = locale === 'de' ? 'Auf Anfrage' : 'On request';

  return (
    <>
      <Section variant={sectionVariant(1)} spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.nav.support}
            title={sd.componentLists.heading}
            description={sd.componentLists.intro}
            centered={false}
          />
        </Container>
      </Section>
      <Section variant={sectionVariant(2)} spacing="default">
        <Container>
          <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
            <table className="w-full border-collapse bg-op-surface">
              <thead className="bg-op-gradient-hero text-op-on-dark">
                <tr>
                  <th className="px-6 py-4 text-left">{sd.componentLists.table.list}</th>
                  <th className="px-6 py-4 text-left">{sd.componentLists.table.controlSystems}</th>
                  <th className="px-6 py-4 text-left">{sd.componentLists.table.operatingStations}</th>
                  <th className="px-6 py-4 text-left">{sd.componentLists.table.download}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-op-border">
                {lists.map((l) => (
                  <tr key={l.id} className="transition-colors hover:bg-op-surface-muted">
                    <td className={`px-6 py-4 font-medium text-op-ink ${supportTechText}`}>{l.id}</td>
                    <td className={`px-6 py-4 text-op-body ${supportTechText}`}>{l.systems}</td>
                    <td className={`px-6 py-4 text-op-body ${supportTechText}`}>{l.operatingStations}</td>
                    <td className={`px-6 py-4 ${supportTechText}`}>
                      {l.link ? (
                        <a
                          href={l.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-op-primary hover:underline"
                        >
                          <Download className="h-4 w-4" /> {t.downloads.fileTypePdf}
                        </a>
                      ) : (
                        <span className="text-op-body">{noDownloadLabel}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
    </>
  );
}

const FSU200_IMAGE_CRT = 'https://www.optronic.ch/wp-content/uploads/2022/02/fsu200_crt.jpg';
const FSU200_IMAGE_FPDI = 'https://www.optronic.ch/wp-content/uploads/2022/02/fpdi200.jpg';

function FSU200Content() {
  const { t, locale } = useLanguage();
  const sd = t.supportDetails;
  const downloadHrefs = fsu200DownloadHrefs(locale === 'de' ? 'de' : 'en');

  return (
    <>
      <Section variant="surface" spacing="default">
        <Container>
          <ProductSectionHeader title={sd.fsu200.featuresTitle} centered={false} />
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
              <ImageWithFallback
                src={FSU200_IMAGE_CRT}
                alt={sd.fsu200.imageAltMain}
                className="h-full w-full object-contain"
              />
            </div>
            <ProductBulletList items={sd.fsu200.features} />
          </div>
        </Container>
      </Section>
      <Section variant="muted" spacing="default">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <ProductSectionHeader
                title={sd.fsu200.fpdiHeading}
                description={sd.fsu200.fpdiIntro}
                centered={false}
              />
              <ProductBulletList items={sd.fsu200.fpdiFeatures} />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
              <ImageWithFallback
                src={FSU200_IMAGE_FPDI}
                alt={sd.fsu200.fpdiImageAlt}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section variant="surface" spacing="default">
        <Container>
          <ProductSectionHeader title={sd.fsu200.tableTitle} />
          <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
            <table className="w-full min-w-[720px] border-collapse bg-op-surface">
              <thead className="bg-op-gradient-hero text-op-on-dark">
                <tr>
                  <th className="whitespace-nowrap px-6 py-4 text-left">{sd.fsu200.table.partName}</th>
                  <th className="whitespace-nowrap px-6 py-4 text-left">{sd.fsu200.table.displayType}</th>
                  <th className="whitespace-nowrap px-6 py-4 text-left">{sd.fsu200.table.usage}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-op-border">
                {sd.fsu200.table.rows.map((m) => (
                  <tr key={m.name} className="transition-colors hover:bg-op-surface-muted">
                    <td className={`px-6 py-4 font-medium text-op-ink ${supportTechText}`}>{m.name}</td>
                    <td className={`px-6 py-4 text-op-body ${supportTechText}`}>{m.display}</td>
                    <td className={`whitespace-pre-line px-6 py-4 text-op-body ${supportTechText}`}>{m.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
      <Section variant="muted" spacing="default">
        <Container>
          <ProductSectionHeader badge={t.productPages.resourcesDownloads} title={sd.downloadsHeading} />
          <ProductDownloadsList
            downloads={sd.fsu200.downloads.map((item, index) => ({
              label: item.label,
              href: downloadHrefs[index],
            }))}
          />
        </Container>
      </Section>
    </>
  );
}

const LV_OBSOLETE_IMAGE_LVS = 'https://www.optronic.ch/wp-content/uploads/2022/02/lv100_lvs.jpg';
const LV_OBSOLETE_IMAGE_LV100D = '/assets/lv100d.png';

function LVObsoleteContent() {
  const { t, locale } = useLanguage();
  const sd = t.supportDetails;
  const downloadHrefs = lvObsoleteDownloadHrefs(locale === 'de' ? 'de' : 'en');
  const { lvCompatibility } = lvObsoleteDownloads(locale === 'de' ? 'de' : 'en');

  return (
    <>
      <Section variant="surface" spacing="default">
        <Container>
          <p className="text-lg leading-relaxed text-op-body">{sd.lvObsolete.intro}</p>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <ProductSectionHeader title={sd.lvObsolete.replacementPartsTitle} centered={false} />
          <div className="mb-8">
            <div className="relative w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
              <ImageWithFallback
                src={LV_OBSOLETE_IMAGE_LVS}
                alt={sd.lvObsolete.imageAltLv100Lvs}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
            <table className="w-full border-collapse bg-op-surface">
              <thead className="bg-op-gradient-hero text-op-on-dark">
                <tr>
                  <th className="px-6 py-4 text-left">{sd.lvObsolete.table.lightScreen}</th>
                  <th className="px-6 py-4 text-left">{sd.lvObsolete.table.problem}</th>
                  <th className="px-6 py-4 text-left">{sd.lvObsolete.table.replacementPart}</th>
                  <th className="px-6 py-4 text-left">{sd.lvObsolete.table.itemNumber}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-op-border">
                {sd.lvObsolete.table.rows.map((r, i) => (
                  <tr key={i} className="transition-colors hover:bg-op-surface-muted">
                    <td className={`px-6 py-4 font-medium text-op-ink ${supportTechText}`}>{r.screen}</td>
                    <td className={`px-6 py-4 text-op-body ${supportTechText}`}>{r.problem}</td>
                    <td className={`px-6 py-4 text-op-body ${supportTechText}`}>{r.part}</td>
                    <td className={`px-6 py-4 text-op-body ${supportTechText}`}>{r.item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-op-body">{sd.lvObsolete.additionalPartsNote}</p>
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container>
          <ProductSectionHeader title={sd.lvObsolete.replacementByTitle} centered={false} />
          <div className="grid items-start gap-16 md:grid-cols-2">
            <div className="min-w-0 space-y-6">
              <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
                <table className="w-full border-collapse bg-op-surface">
                  <thead className="bg-op-gradient-hero text-op-on-dark">
                    <tr>
                      <th className="px-6 py-4 text-left">{sd.lvObsolete.replacementBy.lightScreen}</th>
                      <th className="px-6 py-4 text-left">{sd.lvObsolete.replacementBy.replaceBy}</th>
                      <th className="px-6 py-4 text-left">{sd.lvObsolete.replacementBy.adapterFlange}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-op-border">
                    {sd.lvObsolete.replacementBy.rows.map((r) => (
                      <tr key={r.screen} className="transition-colors hover:bg-op-surface-muted">
                        <td className={`px-6 py-4 font-medium text-op-ink ${supportTechText}`}>{r.screen}</td>
                        <td className={`px-6 py-4 text-op-body ${supportTechText}`}>{r.replaceBy}</td>
                        <td className={`px-6 py-4 text-op-body ${supportTechText}`}>{r.adapterFlange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-lg leading-relaxed text-op-body">
                {sd.lvObsolete.adaptationInfo}{' '}
                <a
                  href={lvCompatibility}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-op-primary hover:underline"
                >
                  {sd.lvObsolete.adaptationLinkText}
                </a>
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
              <ImageWithFallback
                src={LV_OBSOLETE_IMAGE_LV100D}
                alt={sd.lvObsolete.imageAltLv100d}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <ProductSectionHeader badge={t.productPages.resourcesDownloads} title={sd.downloadsHeading} />
          <ProductDownloadsList
            downloads={sd.lvObsolete.downloads.map((item, index) => ({
              label: item.label,
              href: downloadHrefs[index],
            }))}
          />
        </Container>
      </Section>
    </>
  );
}

function OGObsoleteContent() {
  const { t } = useLanguage();
  const sd = t.supportDetails;

  return (
    <>
      <Section variant={sectionVariant(1)} spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.nav.support}
            title={sd.ogObsolete.heading}
            description={sd.ogObsolete.intro}
            centered={false}
          />
        </Container>
      </Section>
      <Section variant={sectionVariant(2)} spacing="default">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
              <table className="w-full border-collapse bg-op-surface">
                <thead className="bg-op-gradient-hero text-op-on-dark">
                  <tr>
                    <th className="px-6 py-4 text-left">{sd.ogObsolete.table.oldDeviceName}</th>
                    <th className="px-6 py-4 text-left">{sd.ogObsolete.table.newDeviceName}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-op-border">
                  {[
                    { old: 'OG2DzzzL', new: 'OG31DzzzL' },
                    { old: 'OG2DzzzN', new: 'OG26DzzzN *' },
                    { old: 'OG2DzzzQ', new: 'OG26DzzzQ *' },
                    { old: 'OG7DzzzL', new: 'OG32DzzzL' },
                    { old: 'OG7DzzzN', new: 'OG27DzzzN *' },
                    { old: 'OG7DzzzQ', new: 'OG27DzzzQ *' },
                    { old: 'OG8DzzzN', new: 'OG28DzzzN *' },
                    { old: 'OG8DzzzQ', new: 'OG28DzzzQ *' },
                    { old: 'OG14DzzzL', new: 'OG34DzzzL' },
                    { old: 'OG14DzzzN', new: 'OG29DzzzN *' },
                    { old: 'OG14DzzzQ', new: 'OG29DzzzQ *' },
                  ].map((r) => (
                    <tr key={r.old} className="transition-colors hover:bg-op-surface-muted">
                      <td className={`px-6 py-4 text-op-ink ${supportTechText}`}>{r.old}</td>
                      <td className={`px-6 py-4 text-op-body ${supportTechText}`}>{r.new}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid gap-4">
              <ProductImageFrame src="/assets/og_bearing.png" alt="OG bearing" />
              <ProductImageFrame src="/assets/og_flange.png" alt="OG flange" />
            </div>
          </div>
          <div className="mt-8 space-y-2">
            <p className="text-sm italic text-op-body">{sd.ogObsolete.note}</p>
            <p className="text-sm italic text-op-body">{sd.ogObsolete.note2}</p>
          </div>
        </Container>
      </Section>
    </>
  );
}

export function SupportPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const { t, lp, locale } = useLanguage();
  const sd = t.supportDetails;

  if (id === 'important-hints') {
    return <Navigate to={lp('/support/hints')} replace />;
  }

  const supportCategories: SupportCategory[] = [
    {
      id: 'omc300',
      title: sd.categories.omc300.title,
      description: sd.categories.omc300.description,
      content: <OMC300Content />,
    },
    {
      id: 'cnc-obsolete',
      title: sd.categories.cncObsolete.title,
      description: sd.categories.cncObsolete.description,
      content: <CNCObsoleteContent />,
    },
    {
      id: 'component-lists',
      title: sd.categories.componentLists.title,
      description: sd.categories.componentLists.description,
      content: <ComponentListContent />,
    },
    {
      id: 'fsu200',
      title: sd.categories.fsu200.title,
      description: sd.categories.fsu200.description,
      content: <FSU200Content />,
    },
    {
      id: 'lv-obsolete',
      title: sd.categories.lvObsolete.title,
      description: sd.categories.lvObsolete.description,
      content: <LVObsoleteContent />,
    },
    {
      id: 'og-obsolete',
      title: sd.categories.ogObsolete.title,
      description: sd.categories.ogObsolete.description,
      content: <OGObsoleteContent />,
    },
  ];

  const activeCategory = id ? supportCategories.find((c) => c.id === id) : null;

  if (activeCategory) {
    const pageHeaderTitle =
      activeCategory.id === 'omc300'
        ? sd.omc300.coverTitle
        : activeCategory.id === 'cnc-obsolete'
          ? sd.cncObsolete.coverTitle
          : activeCategory.id === 'fsu200'
            ? sd.fsu200.coverTitle
            : activeCategory.id === 'lv-obsolete'
              ? sd.lvObsolete.coverTitle
              : activeCategory.title;
    const pageHeaderDescription =
      activeCategory.id === 'omc300'
        ? sd.omc300.coverSubtitle
        : activeCategory.id === 'fsu200'
          ? (
              <strong className="font-semibold text-op-on-dark">{sd.fsu200.coverSubtitle}</strong>
            )
          : undefined;
    return (
      <div className="bg-op-surface">
        <SEO title={activeCategory.title} description={activeCategory.description || t.support.description} />
        <PageHeader title={pageHeaderTitle} description={pageHeaderDescription}>
          <div className="mt-6">
            <Link
              to={lp('/support')}
              className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark"
            >
              <ArrowLeft className="h-4 w-4" /> {sd.backToSupport}
            </Link>
          </div>
        </PageHeader>

        {activeCategory.content}

        <PageCTA title={t.support.needHelp} description={t.support.readyDesc}>
          <ButtonLink to={lp('/contact')} variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
            {t.support.getInTouch}
          </ButtonLink>
        </PageCTA>
      </div>
    );
  }

  return (
    <div className="bg-op-surface">
      <SEO title="Support" description={t.support.description} />
      <PageHeader title={t.support.title} />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="space-y-10">
            <div className="mx-auto max-w-3xl space-y-4 text-lg leading-relaxed text-op-body">
              {t.support.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {SUPPORT_OVERVIEW_GALLERY.map((item) => (
                <Card
                  key={item.id}
                  className="group flex h-full flex-col gap-0 overflow-hidden border-2 transition-all hover:border-op-primary hover:shadow-xl"
                >
                  <Link to={lp(item.path)} className="flex h-full flex-col">
                    <CardImage src={item.src} alt={item.alt} />
                    <CardContent className="flex flex-1 flex-col p-5">
                      <h3 className="text-base font-medium text-op-ink transition-colors group-hover:text-op-primary">
                        {t.support.galleryItems[item.id]}
                      </h3>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <PageCTA title={t.support.needHelp} description={t.support.readyDesc}>
        <ButtonLink to={lp('/contact')} variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {t.support.getInTouch}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
