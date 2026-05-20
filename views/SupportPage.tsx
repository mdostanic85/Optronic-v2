

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Wrench, Package, Clock, HelpCircle, Download, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
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

function DownloadRow({ title, link }: { title: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between rounded-xl border-2 border-op-border bg-op-surface-muted p-5 transition-all hover:border-op-primary/30 hover:bg-op-surface hover:shadow-lg group"
    >
      <div className="flex items-center gap-4 flex-1">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-op-primary-muted transition-colors group-hover:bg-op-primary/20">
          <Download className="h-6 w-6 text-op-primary" />
        </div>
        <div className="flex-1">
          <h4 className="text-base text-op-ink transition-colors group-hover:text-op-primary">{title}</h4>
          <span className="text-sm uppercase tracking-wide text-op-body">PDF</span>
        </div>
      </div>
      <ExternalLink className="h-5 w-5 flex-shrink-0 text-op-body transition-colors group-hover:text-op-primary" />
    </a>
  );
}

function OMC300Content() {
  const { t, locale } = useLanguage();
  const sd = t.supportDetails;

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
        <div>
          <h3 className="mb-4 text-2xl font-medium text-op-ink">{sd.omc300.heading}</h3>
          <p className="mb-6 text-op-body leading-relaxed">{sd.omc300.intro}</p>
          <div className="flex flex-col gap-4">
            {sd.omc300.features.map((f) => (
              <div key={f} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-op-primary" />
                <span className={`text-sm text-op-body ${supportTechText}`}>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-op-border bg-op-surface-muted">
          <ImageWithFallback src="/assets/omc300.png" alt="omc300" className="h-full w-full object-contain" />
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="text-lg font-medium text-op-ink">{sd.downloadsHeading}</h4>
        <DownloadRow title={t.downloads.fileLabels.omc300} link="/downloads/de/cnc/OMC300.pdf" />
        <DownloadRow
          title={t.downloads.fileLabels.oag_v22}
          link={
            locale === 'de'
              ? '/downloads/de/cnc/OS.401_030603_Bedienungsanleitung_OAGLinux_V2.2.pdf'
              : '/downloads/doc/control_systems/OAGLinux_V2.2_Operating_Instructions.pdf'
          }
        />
      </div>
    </div>
  );
}

function CNCObsoleteContent() {
  const { t } = useLanguage();
  const sd = t.supportDetails;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-2xl font-medium text-op-ink">{sd.cncObsolete.heading}</h3>
        <p className="mb-4 text-op-body leading-relaxed">{sd.cncObsolete.p1}</p>
        <p className="mb-4 text-op-body leading-relaxed">{sd.cncObsolete.p2}</p>
      </div>
      <div className="rounded-xl bg-op-surface-muted p-6">
        <h4 className="mb-3 text-lg font-medium text-op-ink">{sd.cncObsolete.batteryTitle}</h4>
        <p className="mb-4 text-op-body">{sd.cncObsolete.batteryDesc}</p>
        <DownloadRow title={t.downloads.fileLabels.battery} link="/downloads/doc/control_systems/Ni-MH_Battery_Module_510.330.02a.pdf" />
      </div>
      <div className="rounded-xl bg-op-surface-muted p-6">
        <h4 className="mb-3 text-lg font-medium text-op-ink">{sd.cncObsolete.replacingTitle}</h4>
        <p className="text-op-body">
          {sd.cncObsolete.replacingPrefix}
          <Link to="/support/fsu200" className="text-op-primary hover:underline">{sd.cncObsolete.replacingLinkText}</Link>
          {sd.cncObsolete.replacingSuffix}
        </p>
      </div>
    </div>
  );
}

function ImportantHintsContent() {
  const { t } = useLanguage();
  const sd = t.supportDetails;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-2xl font-medium text-op-ink">{sd.importantHints.heading}</h3>
        <p className="mb-4 text-op-body leading-relaxed">{sd.importantHints.p1}</p>
        <p className="text-op-body leading-relaxed">{sd.importantHints.p2}</p>
      </div>
    </div>
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
  const toOptronicPdfUrl = (link: string) => {
    if (link.startsWith('http')) return link;
    if (link.startsWith('/downloads/doc/component_lists/')) {
      const fileName = link.split('/').pop();
      return `https://www.optronic.ch/download/doc/component_lists/${fileName}`;
    }
    return link;
  };

  return (
    <div className="space-y-6">
      <p className="mb-6 text-op-body leading-relaxed">{sd.componentLists.intro}</p>
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
                    <a href={toOptronicPdfUrl(l.link)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-op-primary hover:underline">
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
    </div>
  );
}

function FSU200Content() {
  const { t } = useLanguage();
  const sd = t.supportDetails;
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-2xl font-medium text-op-ink">{sd.fsu200.heading}</h3>
        <p className="mb-4 text-op-body leading-relaxed">{sd.fsu200.intro}</p>
      </div>
      <div>
        <h4 className="mb-4 text-xl font-medium text-op-ink">{sd.fsu200.featuresTitle}</h4>
        <div className="mb-6 overflow-hidden rounded-xl border border-op-border bg-op-surface-muted">
          <ImageWithFallback
            src="/assets/fsu200_crt-f5c4342b-b479-41df-adff-37b955f96017.png"
            alt={sd.fsu200.imageAltMain}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          {sd.fsu200.features.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-op-primary" />
              <span className={`text-sm text-op-body ${supportTechText}`}>{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="mb-3 text-2xl font-medium text-op-ink">{sd.fsu200.tableTitle}</h4>
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
      </div>
      <div>
        <h4 className="mb-4 text-xl font-medium text-op-ink">{sd.fsu200.fpdiHeading}</h4>
        <p className="mb-6 text-op-body leading-relaxed">{sd.fsu200.fpdiIntro}</p>
        <div className="mb-6 overflow-hidden rounded-xl border border-op-border bg-op-surface-muted">
          <ImageWithFallback
            src="/assets/fpdi200-8846a642-7f6f-4460-8ac0-0298d342a1bc.png"
            alt={sd.fsu200.fpdiImageAlt}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          {sd.fsu200.fpdiFeatures.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-op-primary" />
              <span className={`text-sm text-op-body ${supportTechText}`}>{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="text-lg font-medium text-op-ink">{sd.downloadsHeading}</h4>
        <DownloadRow title={t.downloads.fileLabels.fsu201_oi} link="/downloads/doc/control_systems/FSU201_Operating_Instructions.pdf" />
        <DownloadRow title={t.downloads.fileLabels.fsu201_d145} link="/downloads/doc/control_systems/FSU201_D145F_D150F_Replacement_Instructions.pdf" />
        <DownloadRow title={t.downloads.fileLabels.fsu201_e102} link="/downloads/doc/control_systems/FSU201_E102_Replacement_Instructions.pdf" />
        <DownloadRow title={t.downloads.fileLabels.fsu201_e114} link="/downloads/doc/control_systems/FSU201_E114_E152_E153_Replacement_Instructions.pdf" />
        <DownloadRow title={t.downloads.fileLabels.fsu202_oi} link="/downloads/doc/control_systems/FSU202_Operating_Instructions.pdf" />
        <DownloadRow title={t.downloads.fileLabels.fsu202_op500} link="/downloads/doc/control_systems/FSU202_Replacement_Instructions.pdf" />
        <DownloadRow title={t.downloads.fileLabels.fsu202_cable} link="/downloads/doc/control_systems/FSU202_Active_Video_Cable.pdf" />
        <DownloadRow title={t.downloads.fileLabels.fsu203_oi} link="/downloads/doc/control_systems/FSU203_Operating_Instructions.pdf" />
        <DownloadRow title={t.downloads.fileLabels.fsu203_op500} link="/downloads/doc/control_systems/FSU203_Replacement_Instructions.pdf" />
        <DownloadRow title={t.downloads.fileLabels.fsu211_oi} link="/downloads/doc/control_systems/FSU211_Operating_Instructions.pdf" />
        <DownloadRow title={t.downloads.fileLabels.fsu211_d145} link="/downloads/doc/control_systems/FSU211_D145F_D150F_Replacement_Instructions.pdf" />
        <DownloadRow title={t.downloads.fileLabels.fpdi200} link="/downloads/doc/control_systems/FPDI200_Flyer.pdf" />
      </div>
    </div>
  );
}

function LVObsoleteContent() {
  const { t } = useLanguage();
  const sd = t.supportDetails;
  const lv100dDatasheet = 'https://www.optronic.ch/download/doc/sensors/Light_Screen_LV100D.pdf';
  const lv100dEmitter = 'https://www.optronic.ch/download/doc/sensors/Light_Screen_LV100D_Replacing_the_Emitter_Receiver_Block.pdf';
  const lvMirrors = 'https://www.optronic.ch/download/doc/sensors/Light_Screen_LV100_LV150_LV100D_LV150D_Replacing_the_Mirrors.pdf';
  const lvCompatibility = 'https://www.optronic.ch/download/doc/sensors/Light_Screen_LV100D_LV150D_Compatibility_with_LV..M.pdf';

  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-2xl font-medium text-op-ink">{sd.lvObsolete.heading}</h3>
      </div>
      <h4 className="text-xl font-medium text-op-ink">{sd.lvObsolete.replacementPartsTitle}</h4>
      <p className="text-op-body leading-relaxed">{sd.lvObsolete.intro}</p>
      <div className="overflow-hidden rounded-xl border border-op-border bg-op-surface-muted">
        <ImageWithFallback src="/assets/lv100_lvs.jpg" alt="lv100_lvs" className="h-auto w-full object-cover" />
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
      <p className="text-op-body">{sd.lvObsolete.additionalPartsNote}</p>
      <div>
        <h4 className="mb-4 text-xl font-medium text-op-ink">{sd.lvObsolete.replacementByTitle}</h4>
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
      </div>
      <p className="text-op-body">
        {sd.lvObsolete.adaptationInfo}{' '}
        <a href={lvCompatibility} target="_blank" rel="noopener noreferrer" className="text-op-primary hover:underline">
          {sd.lvObsolete.adaptationLinkText}
        </a>
      </p>
      <div className="overflow-hidden rounded-xl border border-op-border bg-op-surface-muted">
        <ImageWithFallback src="/assets/lv-obsolete-main.png" alt="lv_obsolete_main" className="h-auto w-full object-cover" />
      </div>
      <div className="space-y-3">
        <h4 className="text-lg font-medium text-op-ink">{sd.downloadsHeading}</h4>
        <DownloadRow title={t.downloads.fileLabels.lv100d_ds} link={lv100dDatasheet} />
        <DownloadRow title={t.downloads.fileLabels.lv100d_emitter} link={lv100dEmitter} />
        <DownloadRow title={t.downloads.fileLabels.lv_mirrors} link={lvMirrors} />
        <DownloadRow title={t.downloads.fileLabels.lv_compat} link={lvCompatibility} />
      </div>
    </div>
  );
}

function OGObsoleteContent() {
  const { t } = useLanguage();
  const sd = t.supportDetails;
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-2xl font-medium text-op-ink">{sd.ogObsolete.heading}</h3>
        <p className="text-op-body leading-relaxed">{sd.ogObsolete.intro}</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
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
        <div className="space-y-6">
          <div className="overflow-hidden rounded-xl border border-op-border bg-op-surface-muted">
            <ImageWithFallback src="/assets/og_bearing.png" alt="og_bearing" className="h-auto w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl border border-op-border bg-op-surface-muted">
            <ImageWithFallback src="/assets/og_flange.png" alt="og_flange" className="h-auto w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-op-body italic">{sd.ogObsolete.note}</p>
        <p className="text-sm text-op-body italic">{sd.ogObsolete.note2}</p>
      </div>
    </div>
  );
}

export function SupportPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const { t, locale } = useLanguage();
  const sd = t.supportDetails;

  const supportCategories: SupportCategory[] = [
    {
      id: 'omc300',
      title: sd.categories.omc300.title,
      description: sd.categories.omc300.description,
      content: <OMC300Content />,
    },
    {
      id: 'important-hints',
      title: sd.categories.importantHints.title,
      description: sd.categories.importantHints.description,
      content: <ImportantHintsContent />,
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

  const services = [
    { icon: Wrench, title: t.support.services[0].title, desc: t.support.services[0].desc },
    { icon: Package, title: t.support.services[1].title, desc: t.support.services[1].desc },
    { icon: Clock, title: t.support.services[2].title, desc: t.support.services[2].desc },
    { icon: HelpCircle, title: t.support.services[3].title, desc: t.support.services[3].desc },
  ];
  const localizedSupportBase = locale === 'de' ? '/de/support' : '/en/support';
  const supportGalleryImages = [
    { src: '/assets/support-e3000.jpg', href: `${localizedSupportBase}/component-lists` },
    { src: '/assets/support-e100.jpg', href: `${localizedSupportBase}/cnc-obsolete` },
    { src: '/assets/support-d107-d140.jpg', href: `${localizedSupportBase}/component-lists` },
    { src: '/assets/support-d111-d115-d141.jpg', href: `${localizedSupportBase}/component-lists` },
    { src: '/assets/support-gf.jpg', href: `${localizedSupportBase}/component-lists` },
    { src: '/assets/support-fsu200-e100.jpg', href: `${localizedSupportBase}/fsu200` },
    { src: '/assets/support-lv100.jpg', href: `${localizedSupportBase}/lv-obsolete` },
    { src: '/assets/support-og-flange.jpg', href: `${localizedSupportBase}/og-obsolete` },
    { src: '/assets/support-d145.jpg', href: `${localizedSupportBase}/omc300` },
    { src: '/assets/support-d376-d377.jpg', href: `${localizedSupportBase}/component-lists` },
  ];

  if (activeCategory) {
    const hideActiveCategoryDescription = activeCategory.id === 'component-lists';
    return (
      <div>
        <PageHeader title={activeCategory.title} description={hideActiveCategoryDescription ? '' : activeCategory.description}>
          <div className="mt-6">
            <Link to="/support" className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark">
              <ArrowLeft className="h-4 w-4" /> {sd.backToSupport}
            </Link>
          </div>
        </PageHeader>

        <Section variant="surface" spacing="default">
          <Container>
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-3">
                {activeCategory.content}
              </div>
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-xl bg-op-surface-muted p-6">
                    <h3 className="mb-4 text-lg font-medium text-op-ink">{sd.supportCategories}</h3>
                    <nav className="space-y-2">
                      {supportCategories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/support/${category.id}`}
                          className={`block rounded-lg p-3 text-sm transition-colors ${
                            category.id === id
                              ? 'bg-op-primary-muted text-op-primary font-medium'
                              : 'text-op-body hover:bg-op-surface hover:text-op-primary'
                          }`}
                        >
                          {category.title}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <Card className="border-2 border-op-primary">
                    <CardContent className="p-6">
                      <h3 className="mb-4 text-lg font-medium text-op-ink">{t.support.needHelp}</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="mb-1 text-sm text-op-body">{t.support.email}</p>
                          <a href="mailto:support@optronic.ch" className="text-sm text-op-ink hover:text-op-primary transition-colors">support@optronic.ch</a>
                        </div>
                        <div>
                          <p className="mb-1 text-sm text-op-body">{t.support.phone}</p>
                          <a href="tel:+41718440200" className="text-sm text-op-ink hover:text-op-primary transition-colors">+41 (0)71 844 02 00</a>
                        </div>
                      </div>
                      <Button className="mt-4 w-full" asChild>
                        <Link to="/contact">{t.support.getInTouch}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    );
  }

  return (
    <div>
      <SEO title="Support" description="OPTRONIC support, repair, and retrofit services. Legacy system support, spare parts, component lists, and CRT monitor replacements for industrial control systems." />
      <PageHeader
        title={t.support.title}
        description={t.support.description}
      />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-4 text-base leading-6 tracking-[-0.31px] text-op-body mb-8">
                <p>{t.support.intro[0]}</p>
                <p>{t.support.intro[1]}</p>
                <p>{t.support.intro[2]}</p>
                <p>{t.support.intro[3]}</p>
              </div>

              <div className="rounded-xl bg-op-surface-muted p-8 mb-12">
                <h2 className="mb-6 text-2xl font-normal tracking-[0.37px] text-op-ink">{t.support.ourServices}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((s) => (
                    <div key={s.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[10px] bg-op-primary-muted">
                        <s.icon className="h-6 w-6 text-op-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-medium leading-7 tracking-[-0.44px] text-op-ink">{s.title}</h3>
                        <p className="text-base leading-6 tracking-[-0.31px] text-op-body">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {supportGalleryImages.map((item) => (
                    <Link
                      key={item.src}
                      to={item.href}
                      className="overflow-hidden rounded-xl border border-op-border bg-op-surface-muted transition-all hover:border-op-primary/40 hover:shadow-md"
                    >
                      <ImageWithFallback src={item.src} alt="support_gallery" className="h-28 w-full object-cover md:h-32" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mb-10 rounded-xl border-2 border-op-primary bg-op-primary-muted p-7 shadow-md">
                <h3 className="mb-3 text-2xl font-medium text-op-ink">{sd.importantHints.heading}</h3>
                <p className="mb-2 text-base text-op-body">{sd.importantHints.p1}</p>
                <p className="text-base text-op-body">{sd.importantHints.p2}</p>
              </div>

              <h2 className="mb-6 text-2xl font-normal text-op-ink">{sd.legacyProductSupport}</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {supportCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/support/${category.id}`}
                    className="group rounded-xl border-2 border-op-border bg-op-surface p-6 transition-all hover:border-op-primary hover:shadow-lg"
                  >
                    <h3 className="mb-2 text-lg font-medium text-op-ink transition-colors group-hover:text-op-primary">
                      {category.title}
                    </h3>
                    <p className="mb-3 text-sm text-op-body">{category.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-op-primary">
                      {sd.viewDetails} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mb-8 rounded-xl border-l-4 border-op-primary bg-op-primary-muted p-6">
                <h3 className="mb-3 text-xl font-medium text-op-ink">{t.support.longLifeTitle}</h3>
                <p className="text-base leading-6 tracking-[-0.31px] text-op-body">
                  {t.support.longLifeDesc}
                </p>
              </div>

              <div className="py-8 text-center">
                <h3 className="mb-4 text-2xl font-normal text-op-ink">{t.support.readyTitle}</h3>
                <p className="mb-6 text-op-body">{t.support.readyDesc}</p>
                <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-4 w-4" />}>
                  {t.support.contactTeam}
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="border-2 border-op-primary">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-medium text-op-ink">{t.support.needHelp}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="mb-1 text-sm text-op-body">{t.support.email}</p>
                        <a href="mailto:support@optronic.ch" className="text-op-ink hover:text-op-primary transition-colors">support@optronic.ch</a>
                      </div>
                      <div>
                        <p className="mb-1 text-sm text-op-body">{t.support.phone}</p>
                        <a href="tel:+41718440200" className="text-op-ink hover:text-op-primary transition-colors">+41 (0)71 844 02 00</a>
                      </div>
                    </div>
                    <Button className="mt-6 w-full" asChild>
                      <Link to="/contact">{t.support.getInTouch}</Link>
                    </Button>
                  </CardContent>
                </Card>

                <div className="rounded-xl bg-op-surface-muted p-6">
                  <h3 className="mb-4 text-lg font-medium text-op-ink">{t.support.additionalResources}</h3>
                  <div className="space-y-3">
                    <Link to="/support/downloads" className="block rounded-lg p-3 text-sm text-op-body transition-colors hover:bg-op-surface hover:text-op-primary">
                      {t.support.resourceDownloads}
                    </Link>
                    <Link to="/support/documentation" className="block rounded-lg p-3 text-sm text-op-body transition-colors hover:bg-op-surface hover:text-op-primary">
                      {t.support.resourceDocs}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
