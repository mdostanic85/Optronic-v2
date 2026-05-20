

import { Download, FileText, Search, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { PageHeader, Section, Container, ButtonLink } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../src/components/SEO';

interface DownloadFile {
  name: string;
  type: string;
  link: string;
}

export function DownloadsPage() {
  const { t, locale } = useLanguage();
  const d = t.downloads;
  const [searchQuery, setSearchQuery] = useState('');
  const byLocale = (defaultLink: string, deLink?: string) => (locale === 'de' && deLink ? deLink : defaultLink);
  const downloadBaseUrl = 'https://www.optronic.ch/download';
  const deLocal = (path: string) => `/downloads/de${path}`;

  const typeLabel = {
    pdf: d.fileTypePdf,
    software: d.fileTypeSoftware,
  };

  const downloadCategories: { category: string; files: DownloadFile[] }[] = [
    { category: d.categoryLabels.catLvmc, files: [
      {
        name: d.fileLabels.lvmc_flyer,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Light_Curtain_LVMC_Flyer.pdf`,
          deLocal('/doc/sensors/Lichtvorhang_LVMC_Flyer.pdf'),
        ),
      },
      {
        name: d.fileLabels.lvmc_getting_started,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Light_Curtain_LVMC_Getting_Started.pdf`,
          deLocal('/doc/sensors/Lichtvorhang_LVMC_Kurzanleitung.pdf'),
        ),
      },
      {
        name: d.fileLabels.lvmc_manual,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Light_Curtain_LVMC_User_Manual.pdf`,
          deLocal('/doc/sensors/Lichtvorhang_LVMC_Benutzerhandbuch.pdf'),
        ),
      },
      { name: d.fileLabels.lvmc_cmt_a1, type: typeLabel.software, link: `${downloadBaseUrl}/sw/sensors/lvmc/cmt/lvmc_cmt_a1_v1.450_setup.zip` },
      { name: d.fileLabels.lvmc_cmt_a2_2037, type: typeLabel.software, link: `${downloadBaseUrl}/sw/sensors/lvmc/cmt/lvmc_cmt_a2_v2.037_setup.zip` },
      { name: d.fileLabels.lvmc_cmt_a2_2110, type: typeLabel.software, link: `${downloadBaseUrl}/sw/sensors/lvmc/cmt/lvmc_cmt_a2_v2.110_setup.zip` },
      { name: d.fileLabels.lvmc_cmt_a2_2201, type: typeLabel.software, link: `${downloadBaseUrl}/sw/sensors/lvmc/cmt/lvmc_cmt_a2_v2.201_setup.zip` },
      { name: d.fileLabels.lvmc_rc_v13, type: typeLabel.software, link: `${downloadBaseUrl}/sw/sensors/lvmc/rc/lvmc_rc_v1.3.zip` },
      { name: d.fileLabels.lvmc_rc_v21, type: typeLabel.software, link: `${downloadBaseUrl}/sw/sensors/lvmc/rc/lvmc_rc_v2.1.zip` },
    ]},
    { category: d.categoryLabels.catLvm, files: [
      {
        name: d.fileLabels.lvm_flyer,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Light_Curtain_LV..M_Flyer.pdf`,
          deLocal('/doc/sensors/Lichtvorhang_LV..M_Flyer.pdf'),
        ),
      },
      {
        name: d.fileLabels.lvm_datasheet,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Light_Screen_LV...M.pdf`,
          deLocal('/doc/sensors/Lichtvorhang_LV...M.pdf'),
        ),
      },
    ]},
    { category: d.categoryLabels.catLv100, files: [
      {
        name: d.fileLabels.lv100d_ds,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Light_Screen_LV100D.pdf`,
          deLocal('/doc/sensors/Lichtvorhang_LV100D_LV150D.pdf'),
        ),
      },
      {
        name: d.fileLabels.lv100d_emitter,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Lichtvorhang%20LV100D_Wechsel_des_Sender-Empfaengerblocks.pdf`,
          deLocal('/doc/sensors/Lichtvorhang%20LV100D_Wechsel_des_Sender-Empfaengerblocks.pdf'),
        ),
      },
      {
        name: d.fileLabels.lv_mirrors,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Light_Screen_LV100_LV150_LV100D_LV150D_Replacing_the_Mirrors.pdf`,
          deLocal('/doc/sensors/Lichtvorhang_LV100_LV150_LV100D_LV150D_Wechsel_der_Spiegel.pdf'),
        ),
      },
      {
        name: d.fileLabels.lv_compat,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Light_Screen_LV100D_LV150D_Compatibility_with_LV..M.pdf`,
          deLocal('/doc/sensors/Lichtvorhang_LV100D_LV150D_Kompatibilitaet_mit_LV..M.pdf'),
        ),
      },
    ]},
    { category: d.categoryLabels.catG15G35, files: [
      {
        name: d.fileLabels.g15_ds,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Measuring_Light_Barrier_G15.pdf`,
          deLocal('/doc/sensors/Messlichtschranke_G15.pdf'),
        ),
      },
      {
        name: d.fileLabels.g35_ds,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Measuring_Light_Barrier_G35.pdf`,
          deLocal('/doc/sensors/Messlichtschranke_G35.pdf'),
        ),
      },
    ]},
    { category: d.categoryLabels.catOg, files: [
      {
        name: d.fileLabels.og_ds,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Incremental_Encoder_OG.pdf`,
          deLocal('/doc/sensors/Inkrementalgeber_OG.pdf'),
        ),
      },
    ]},
    { category: d.categoryLabels.catIrv, files: [
      {
        name: d.fileLabels.irt_ds,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Inductive_Sensing_Coil_IRT.pdf`,
          deLocal('/doc/sensors/Induktive_Tastspule_IRT.pdf'),
        ),
      },
      {
        name: d.fileLabels.irv20_ds,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/sensors/Control_Unit_IRV20.pdf`,
          deLocal('/doc/sensors/Steuergeraet_IRV20.pdf'),
        ),
      },
      ...(locale === 'de'
        ? [
            {
              name: d.fileLabels.irv10_ds,
              type: typeLabel.pdf,
              link: deLocal('/doc/sensors/Steuergeraet_IRV10.pdf'),
            },
            {
              name: d.fileLabels.irv11_ds,
              type: typeLabel.pdf,
              link: deLocal('/doc/sensors/Steuergeraet_IRV11.pdf'),
            },
          ]
        : []),
    ]},
    { category: d.categoryLabels.catIgv, files: [
      { name: d.fileLabels.igv133, type: typeLabel.pdf, link: byLocale(`${downloadBaseUrl}/doc/sensors/Incremental_Encoder_Expander_IGV-133.pdf`, deLocal('/doc/sensors/Inkrementalgeber-Verzweigung_IGV-133.pdf')) },
      { name: d.fileLabels.igv233, type: typeLabel.pdf, link: byLocale(`${downloadBaseUrl}/doc/sensors/Incremental_Encoder_Expander_IGV-233.pdf`, deLocal('/doc/sensors/Inkrementalgeber-Verzweigung_IGV-233.pdf')) },
      { name: d.fileLabels.igv134, type: typeLabel.pdf, link: byLocale(`${downloadBaseUrl}/doc/sensors/Incremental_Encoder_Expander_IGV-134.pdf`, deLocal('/doc/sensors/Inkrementalgeber-Verzweigung_IGV-134.pdf')) },
      { name: d.fileLabels.igv334, type: typeLabel.pdf, link: byLocale(`${downloadBaseUrl}/doc/sensors/Incremental_Encoder_Expander_IGV-334.pdf`, deLocal('/doc/sensors/Inkrementalgeber-Verzweigung_IGV-334.pdf')) },
      { name: d.fileLabels.igv634, type: typeLabel.pdf, link: byLocale(`${downloadBaseUrl}/doc/sensors/Incremental_Encoder_Expander_IGV-634.pdf`, deLocal('/doc/sensors/Inkrementalgeber-Verzweigung_IGV-634.pdf')) },
    ]},
    { category: d.categoryLabels.catControl, files: [
      {
        name: d.fileLabels.d500_maint,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/CNC_D500_Assembly_and_Maintenance.pdf`,
          deLocal('/doc/control_systems/CNC_D500_Aufbau_und_Wartung.pdf'),
        ),
      },
      {
        name: d.fileLabels.d571c_retrofit,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/CNC_D571C_Retrofit_Flying_Saw_D115_D141_D151_D171.pdf`,
          deLocal('/doc/control_systems/CNC_D571C_Retrofit_Fliegende_Saege_Retrofit_D115_D141_D151_D171.pdf'),
        ),
      },
      {
        name: d.fileLabels.battery,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/Ni-MH_Battery_Module_510.330.02a.pdf`,
          deLocal('/doc/control_systems/Ni-MH_Battery_Module_510.330.02a.pdf'),
        ),
      },
    ]},
    { category: d.categoryLabels.catOag, files: [
      {
        name: d.fileLabels.oag_v3,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/OAGLinux_V3_Operating_Instructions.pdf`,
          deLocal('/doc/control_systems/OAGLinux_V3_Bedienungsanleitung.pdf'),
        ),
      },
      {
        name: d.fileLabels.oag_v22,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/OAGLinux_V2.2_Operating_Instructions.pdf`,
          deLocal('/doc/control_systems/OAGLinux_V2.2_Bedienungsanleitung.pdf'),
        ),
      },
    ]},
    { category: d.categoryLabels.catFsu, files: [
      {
        name: d.fileLabels.fsu201_oi,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/FSU201_Operating_Instructions.pdf`,
          deLocal('/doc/control_systems/FSU201_Bedienungsanleitung.pdf'),
        ),
      },
      {
        name: d.fileLabels.fsu201_d145,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/FSU201_D145F_D150F_Replacement_Instructions.pdf`,
          deLocal('/doc/control_systems/FSU201_D145F_D150F_Austauschanleitung.pdf'),
        ),
      },
      {
        name: d.fileLabels.fsu201_e102,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/FSU201_E102_Replacement_Instructions.pdf`,
          deLocal('/doc/control_systems/FSU201_E102_Austauschanleitung.pdf'),
        ),
      },
      {
        name: d.fileLabels.fsu201_e114,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/FSU201_E114_E152_E153_Replacement_Instructions.pdf`,
          deLocal('/doc/control_systems/FSU201_E114_E152_E153_Austauschanleitung.pdf'),
        ),
      },
      {
        name: d.fileLabels.fsu202_oi,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/FSU202_Operating_Instructions.pdf`,
          deLocal('/doc/control_systems/FSU202_Bedienungsanleitung.pdf'),
        ),
      },
      {
        name: d.fileLabels.fsu202_op500,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/FSU202_Replacement_Instructions.pdf`,
          deLocal('/doc/control_systems/FSU202_Austauschanleitung.pdf'),
        ),
      },
      {
        name: d.fileLabels.fsu202_cable,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/FSU202_Active_Video_Cable.pdf`,
          deLocal('/doc/control_systems/FSU202_Aktives_Videokabel.pdf'),
        ),
      },
      {
        name: d.fileLabels.fsu203_oi,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/FSU203_Operating_Instructions.pdf`,
          deLocal('/doc/control_systems/FSU203_Bedienungsanleitung.pdf'),
        ),
      },
      {
        name: d.fileLabels.fsu203_op500,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/FSU203_Replacement_Instructions.pdf`,
          deLocal('/doc/control_systems/FSU203_Austauschanleitung.pdf'),
        ),
      },
      {
        name: d.fileLabels.fsu211_oi,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/FSU211_Operating_Instructions.pdf`,
          deLocal('/doc/control_systems/FSU211_Bedienungsanleitung.pdf'),
        ),
      },
      {
        name: d.fileLabels.fsu211_d145,
        type: typeLabel.pdf,
        link: byLocale(
          `${downloadBaseUrl}/doc/control_systems/FSU211_D145F_D150F_Replacement_Instructions.pdf`,
          deLocal('/doc/control_systems/FSU211_D145F_D150F_Austauschanleitung.pdf'),
        ),
      },
      { name: d.fileLabels.fpdi200, type: typeLabel.pdf, link: byLocale(`${downloadBaseUrl}/doc/control_systems/FPDI200_Flyer.pdf`, deLocal('/doc/control_systems/FPDI200_Flyer.pdf')) },
    ]},
  ];

  const filteredCategories = downloadCategories
    .map((c) => ({ ...c, files: c.files.filter((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase())) }))
    .filter((c) => c.files.length > 0);

  return (
    <div>
      <SEO title="Downloads" description="Download product manuals, datasheets, software, and technical documentation for OPTRONIC sensors and CNC control systems." />
      <PageHeader
        title={d.pageTitle}
        description={d.pageDescription}
      />

      <section className="border-b bg-op-surface py-8">
        <Container>
          <div className="relative mx-auto max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-op-body" />
            <input
              type="text"
              placeholder={d.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-op-border-ui py-3 pl-12 pr-4 outline-none focus:border-op-primary focus:ring-2 focus:ring-op-primary/20"
            />
          </div>
        </Container>
      </section>

      <Section variant="muted" spacing="default">
        <Container>
          <div className="space-y-8">
            {filteredCategories.map((category, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-2xl text-op-ink">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.files.map((file, fileIdx) => (
                      <a
                        key={fileIdx}
                        href={file.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 rounded-lg border border-op-border p-4 transition-all hover:border-op-primary/30 hover:bg-op-surface-muted hover:shadow-sm sm:items-center sm:gap-4"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-op-primary-muted transition-colors group-hover:bg-op-primary/20">
                          <FileText className="h-5 w-5 text-op-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm leading-snug text-op-ink transition-colors group-hover:text-op-primary sm:text-base">{file.name}</h4>
                          <p className="mt-0.5 text-xs uppercase tracking-wide text-op-body sm:text-sm">{file.type}</p>
                        </div>
                        <div className="hidden flex-shrink-0 items-center gap-2 text-sm text-op-body transition-colors group-hover:text-op-primary sm:flex">
                          <Download className="h-4 w-4" /> {d.downloadLabel}
                        </div>
                        <ExternalLink className="h-4 w-4 flex-shrink-0 text-op-body transition-colors group-hover:text-op-primary sm:hidden" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="py-12 text-center">
              <FileText className="mx-auto mb-4 h-16 w-16 text-op-border-ui" />
              <h3 className="mb-2 text-xl text-op-body">{d.emptyTitle}</h3>
              <p className="text-op-body">{d.emptyHint}</p>
            </div>
          )}
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container narrow className="text-center">
          <h2 className="mb-4 text-3xl font-normal text-op-ink">{d.ctaTitle}</h2>
          <p className="mb-8 text-xl text-op-body">{d.ctaDesc}</p>
          <ButtonLink to="/contact" variant="primary">{d.ctaButton}</ButtonLink>
        </Container>
      </Section>
    </div>
  );
}
