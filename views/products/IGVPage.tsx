'use client'

import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDocumentHead } from '../../hooks/useDocumentHead';

const igvImage = '/assets/igv.webp';

export function IGVPage() {
  const { t, locale } = useLanguage();
  const isDe = locale === 'de';
  useDocumentHead(
    'IGV Incremental Encoder Expanders',
    'IGV encoder expanders to connect one incremental encoder electrically isolated to up to three targets (CNC, PLC, measurement equipment).'
  );
  const features = [
    'Electrically isolated incremental encoder interfaces for up to three targets',
    'Different variants for different target signal levels: +5V..15V or +10V...+30V',
    'Support for incremental encoder channels A, B, C and their inverted signals, optionally channel D',
    'Compact design for cap rail mounting (mounting rails TS32 and TS35)',
    '5V, 12V, or 15V supply voltage for the connected incremental encoder',
  ];

  const models = [
    {
      part: 'IGV-133',
      channels: 'A/B/C + inverted',
      maxFreq: '500kHz',
      psEncoder: '+5V/+12V max 300mA',
      out1: '+5V..+15V max 85mA',
      out2: '+5V..+15V max 85mA',
      out3: '+5V..+15V max 85mA',
    },
    {
      part: 'IGV-233',
      channels: 'A/B/C + inverted',
      maxFreq: '300kHz',
      psEncoder: '+5V/+12V max 300mA',
      out1: '+5V..+15V max 85mA',
      out2: '+5V..+15V max 85mA',
      out3: '+10V..+30V max 160mA',
    },
    {
      part: 'IGV-134',
      channels: 'A/B/C/D + inverted',
      maxFreq: '500kHz',
      psEncoder: '+5V/+12V max 300mA',
      out1: '+5V..+15V max 85mA',
      out2: '+5V..+15V max 85mA',
      out3: '+5V..+15V max 85mA',
    },
    {
      part: 'IGV-334',
      channels: 'A/B/C/D + inverted',
      maxFreq: '300kHz',
      psEncoder: '+5V/+12V max 300mA',
      out1: '+10V..+30V max 160mA',
      out2: '+10V..+30V max 160mA',
      out3: '+10V..+30V max 160mA',
    },
    {
      part: 'IGV-634',
      channels: 'A/B/C/D + inverted',
      maxFreq: '300kHz',
      psEncoder: '+5V/+15V max 300mA',
      out1: '+10V..+30V max 160mA',
      out2: '+10V..+30V max 160mA',
      out3: '+10V..+30V max 160mA',
    },
  ];

  const downloads = [
    {
      title: t.downloads.fileLabels.igv133,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Inkrementalgeber-Verzweigung_IGV-133.pdf'
        : '/downloads/doc/sensors/Incremental_Encoder_Expander_IGV-133.pdf',
    },
    {
      title: t.downloads.fileLabels.igv233,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Inkrementalgeber-Verzweigung_IGV-233.pdf'
        : '/downloads/doc/sensors/Incremental_Encoder_Expander_IGV-233.pdf',
    },
    {
      title: t.downloads.fileLabels.igv134,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Inkrementalgeber-Verzweigung_IGV-134.pdf'
        : '/downloads/doc/sensors/Incremental_Encoder_Expander_IGV-134.pdf',
    },
    {
      title: t.downloads.fileLabels.igv334,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Inkrementalgeber-Verzweigung_IGV-334.pdf'
        : '/downloads/doc/sensors/Incremental_Encoder_Expander_IGV-334.pdf',
    },
    {
      title: t.downloads.fileLabels.igv634,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Inkrementalgeber-Verzweigung_IGV-634.pdf'
        : '/downloads/doc/sensors/Incremental_Encoder_Expander_IGV-634.pdf',
    },
  ];

  return (
    <div className="bg-op-surface">
      <PageHeader
        title={t.productPages?.igv?.title || 'Incremental Encoder Expanders IGV'}
        description={
          t.productPages?.igv?.subtitle ||
          'To Connect One Encoder Electrically Isolated to Up to Three Targets'
        }
      >
        <div className="mt-6">
          <Link
            href="/products/sensors"
            className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark"
          >
            <ArrowLeft className="h-4 w-4" /> {t.productPages?.backToSensors || 'Back to Sensors'}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
                {t.productPages?.igv?.industrialSensorBadge || 'Industrial Sensor'}
              </div>
              <h2 className="text-3xl md:text-4xl text-op-ink mb-6">
                {t.productPages?.igv?.productOverview || 'Product Overview'}
              </h2>
              <p className="text-lg text-op-body leading-relaxed">
                {t.productPages?.igv?.overviewBody ||
                  'The IGV incremental encoder expanders allow connecting one encoder electrically isolated to up to three targets such as CNC controllers, PLCs, or measurement equipment. Available in different variants for different target signal levels.'}
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100">
                <ImageWithFallback
                  src={igvImage}
                  alt={t.productPages?.igv?.imageAlt || 'Incremental Encoder Expanders IGV'}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {t.productPages?.featuresCapabilities || 'Features & Capabilities'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages?.igv?.keyFeatures || 'Key Features'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-op-border bg-op-surface p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5 text-op-primary" />
                  <p className="leading-relaxed text-op-body">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {t.productPages?.igv?.modelsSpecsBadge || 'Models & Specifications'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages?.availableModels || 'Available Models'}
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
            <table className="w-full min-w-[960px] border-collapse bg-op-surface">
              <thead className="bg-op-gradient-hero text-op-on-dark">
                <tr>
                  <th className="px-6 py-4 text-left">
                    {t.productPages?.igv?.tablePartName || 'Part Name'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {t.productPages?.igv?.tableAvailableChannels || 'Available Channels'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {t.productPages?.igv?.tableMaxSignalFrequency || 'Max Signal Frequency'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {t.productPages?.igv?.tablePowerSupplyEncoder || 'Power Supply Encoder'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {t.productPages?.igv?.tableOutput1 || 'Output 1 (X3)'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {t.productPages?.igv?.tableOutput2 || 'Output 2 (X4)'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {t.productPages?.igv?.tableOutput3 || 'Output 3 (X5)'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-op-border">
                {models.map((row) => (
                  <tr key={row.part} className="transition-colors hover:bg-op-surface-muted">
                    <td className="px-6 py-4 text-op-ink">{row.part}</td>
                    <td className="px-6 py-4 text-op-body">{row.channels}</td>
                    <td className="px-6 py-4 text-op-body">{row.maxFreq}</td>
                    <td className="px-6 py-4 text-op-body">{row.psEncoder}</td>
                    <td className="px-6 py-4 text-op-body">{row.out1}</td>
                    <td className="px-6 py-4 text-op-body">{row.out2}</td>
                    <td className="px-6 py-4 text-op-body">{row.out3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 rounded-xl bg-op-surface-muted p-8 text-center">
            <p className="mb-4 text-lg text-op-body">
              {t.productPages?.customConfigDesc ||
                (isDe
                  ? 'Benötigen Sie eine individuelle Konfiguration? Kontaktieren Sie unser Ingenieurteam für massgeschneiderte Lösungen.'
                  : 'Need a custom configuration? Contact our engineering team for tailored solutions.')}
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                {t.productPages?.requestCustomConfig || 'Request Custom Configuration'}
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default" id="downloads">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {t.productPages?.resourcesDownloads || 'Resources & Downloads'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages?.igv?.downloadsHeading || (isDe ? 'Technische Dokumentation' : 'Technical Documentation')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {downloads.map((dl) => (
              <a
                key={dl.link}
                href={dl.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border-2 border-op-border bg-op-surface-muted p-6 transition-all hover:border-op-primary/30 hover:bg-op-surface hover:shadow-lg group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-op-primary-muted transition-colors group-hover:bg-op-primary/20">
                    <Download className="h-7 w-7 text-op-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-op-ink transition-colors group-hover:text-op-primary">{dl.title}</h3>
                    <div className="mt-1">
                      <span className="text-sm uppercase tracking-wide text-op-body">{dl.type}</span>
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-6 w-6 flex-shrink-0 text-op-body transition-colors group-hover:text-op-primary" />
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <PageCTA
        title={t.productPages?.igv?.ctaTitle || (isDe ? 'Hilfe bei der Gebersignal-Verteilung?' : 'Need Help with Encoder Signal Distribution?')}
        description={t.productPages?.igv?.ctaDesc || (isDe ? 'Kontaktieren Sie unser Team für Integrationsunterstützung.' : 'Contact our team for integration support.')}
      >
        <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {t.productPages?.requestConsultation || 'Request Technical Consultation'}
        </ButtonLink>
        <ButtonLink to="/support" variant="ghostOnDark">
          {t.productPages?.technicalSupport || 'Technical Support'}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
