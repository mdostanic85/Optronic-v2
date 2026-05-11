'use client'

import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDocumentHead } from '../../hooks/useDocumentHead';

const ogProductImage = '/assets/og23-og28.webp';

export function OGPage() {
  const { t, locale } = useLanguage();
  const isDe = locale === 'de';
  useDocumentHead(
    'OG23D/OG28D Incremental Encoders',
    'Rugged photoelectrical incremental encoders OG23D and OG28D. Resolution up to 625 pulses/rev, 5000rpm max speed, IP65 protection.'
  );
  const og = (t.productPages as { og?: Record<string, string | undefined> }).og;
  const features = isDe ? [
    'Hohe Betriebssicherheit unter erschwerten Bedingungen',
    'Langlebiger mechanisch-fotoelektrischer Aufbau',
    'Auflösung: 375, 471, 500 oder 625 Impulse/Umdrehung',
    'Rechtecksignale A, B und Referenzimpuls C',
    'Mit oder ohne invertierte Signale (typenabhängig)',
    'Wellenbelastbarkeit: bis 100N radial und 10N axial',
    'Hohe Drehzahl/Frequenz',
    'Maximale Frequenz: 100kHz',
    'Niedrige Phasenverschiebung, Hohe Signalqualität',
    'Ausgangssignale mit hoher Belastbarkeit bei geringem Spannungsabfall',
    'Mit Stecker oder Anschlusskabel',
    'Unempfindlich gegenüber Umwelteinflüssen',
    'Äusserst robuster Aufbau, Schutzart IP65',
    'Versorgungsspannung: 12V DC',
  ] : [
    'High operational reliability under difficult conditions',
    'Long-life mechanical-photoelectric design',
    'Resolution: 375, 471, 500 or 625 pulses/rev',
    'Square wave signals A, B, and reference pulse C',
    'With or without inverted signals (type-dependent)',
    'Shaft load capacity: Up to 100N radial and 10N axial',
    'High rotation speed/frequency',
    'Maximum frequency: 100kHz',
    'Low phase shift, high signal quality',
    'Output signals with high load capacity at low voltage drop',
    'With connector plug or connection cable',
    'Insensitive to environmental influences',
    'Extremely robust design, protection class IP65',
    'Supply voltage: 12V DC',
  ];

  const models = [
    { model: 'OG23D375Q', resolution: '375 pulses/rev', connection: '1.5m Connection Cable', inverted: 'YES' },
    { model: 'OG23D471Q', resolution: '471 pulses/rev', connection: '1.5m Connection Cable', inverted: 'YES' },
    { model: 'OG23D625Q', resolution: '625 pulses/rev', connection: '1.5m Connection Cable', inverted: 'YES' },
    { model: 'OG23D500Q', resolution: '500 pulses/rev', connection: '1.5m Connection Cable', inverted: 'YES' },
    { model: 'OG23D500N', resolution: '500 pulses/rev', connection: 'Connector', inverted: 'YES' },
    { model: 'OG28D500Q', resolution: '500 pulses/rev', connection: '1.5m Connection Cable', inverted: 'NO' },
    { model: 'OG28D500N', resolution: '500 pulses/rev', connection: 'Connector', inverted: 'NO' },
    { model: 'OG28D625Q', resolution: '625 pulses/rev', connection: '1.5m Connection Cable', inverted: 'NO' },
  ];

  const downloads = [
    {
      title: t.downloads.fileLabels.og_ds,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Inkrementalgeber_OG.pdf'
        : '/downloads/doc/sensors/Incremental_Encoder_OG.pdf',
    },
  ];

  return (
    <div className="bg-op-surface">
      <PageHeader
        title={og?.title || 'Incremental Encoder OG23D / OG28D'}
        description={
          og?.subtitle ||
          (isDe
            ? 'Robuste fotoelektrische Inkrementalgeber für den Einsatz unter erschwerten Bedingungen'
            : 'Rugged photoelectrical Incremental Encoders for usage under rough conditions')
        }
      >
        <div className="mt-6">
          <Link
            href="/products/sensors"
            className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark"
          >
            <ArrowLeft className="h-4 w-4" />{' '}
            {og?.backToSensors || t.productPages?.backToSensors || 'Back to Sensors'}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
                {og?.overviewBadge || t.productPages?.premiumSensor || (isDe ? 'Premium Industriesensor' : 'Premium Industrial Sensor')}
              </div>
              <h2 className="text-3xl md:text-4xl text-op-ink mb-6">
                {og?.overviewHeading || (isDe ? 'Zuverlässige Drehgebertechnik in rauen Umgebungen' : 'Reliable Encoding in Harsh Environments')}
              </h2>
              <p className="text-lg text-op-body leading-relaxed">
                {og?.overviewDescription ||
                  (isDe
                    ? 'Die Inkrementalgeber OG23D und OG28D sind für den zuverlässigen Betrieb unter rauen industriellen Bedingungen ausgelegt. Ihr robuster mechanisch-fotoelektrischer Aufbau sorgt für lange Lebensdauer bei Auflösungen von 375 bis 625 Impulsen pro Umdrehung und maximalen Drehzahlen von 5000 U/min.'
                    : 'The OG23D and OG28D incremental encoders are designed for reliable operation in harsh industrial conditions. Their robust mechanical-photoelectric design ensures long service life with resolutions from 375 to 625 pulses per revolution and maximum rotation speeds of 5000rpm.')}
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100">
                <ImageWithFallback
                  src={ogProductImage}
                  alt="Incremental Encoder OG23D / OG28D"
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
              {og?.featuresSectionBadge || t.productPages?.featuresCapabilities || 'Features & Capabilities'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {og?.featuresHeading || (isDe ? 'Für anspruchsvolle Industrieanwendungen' : 'Built for Demanding Industrial Applications')}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {og?.featuresDescription ||
                (isDe
                  ? 'Mechanisch-fotoelektrische Leistung mit hoher Signalqualität und hoher Umweltbeständigkeit'
                  : 'Mechanical-photoelectric performance with high signal quality and environmental resilience')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-op-border bg-op-surface p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-op-primary" />
                  </div>
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
              {og?.modelsSectionBadge || t.productPages?.availableModels || (isDe ? 'Verfügbare Modelle' : 'Available Models')}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {og?.modelsHeading || (isDe ? 'OG23D / OG28D Konfigurationen' : 'OG23D / OG28D Configurations')}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {og?.modelsDescription ||
                (isDe
                  ? 'Auflösung, Anschlussart und invertierte Signaloptionen für Ihre Anwendung'
                  : 'Resolution, connection type, and inverted signal options for your application')}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
            <table className="w-full border-collapse bg-op-surface">
              <thead className="bg-op-gradient-hero text-op-on-dark">
                <tr>
                  <th className="px-6 py-4 text-left">{og?.tableModel || (isDe ? 'Modell' : 'Model')}</th>
                  <th className="px-6 py-4 text-left">{og?.tableResolution || (isDe ? 'Auflösung' : 'Resolution')}</th>
                  <th className="px-6 py-4 text-left">{og?.tableConnection || (isDe ? 'Anschluss' : 'Connection')}</th>
                  <th className="px-6 py-4 text-left">
                    {og?.tableInvertedSignals || (isDe ? 'Invertierte Signale' : 'Inverted Signals')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-op-border">
                {models.map((row, index) => (
                  <tr key={index} className="transition-colors hover:bg-op-surface-muted">
                    <td className="px-6 py-4 text-op-ink">{row.model}</td>
                    <td className="px-6 py-4 text-op-body">{row.resolution}</td>
                    <td className="px-6 py-4 text-op-body">{row.connection}</td>
                    <td className="px-6 py-4 text-op-body">{row.inverted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default" id="downloads">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {og?.downloadsSectionBadge || t.productPages?.resourcesDownloads || 'Resources & Downloads'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {og?.downloadsHeading || (isDe ? 'Technische Dokumentation' : 'Technical Documentation')}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {og?.downloadsDescription || (isDe ? 'Datenblätter und Spezifikationen für Inkrementalgeber' : 'Datasheets and specifications for incremental encoders')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {downloads.map((download, index) => (
              <a
                key={index}
                href={download.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border-2 border-op-border bg-op-surface-muted p-6 transition-all hover:border-op-primary/30 hover:bg-op-surface hover:shadow-lg group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-op-primary-muted transition-colors group-hover:bg-op-primary/20">
                    <Download className="h-7 w-7 text-op-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-op-ink transition-colors group-hover:text-op-primary">{download.title}</h3>
                    <div className="mt-1 flex items-center gap-3">
                      <span className="text-sm uppercase tracking-wide text-op-body">{download.type}</span>
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
        title={og?.ctaTitle || (isDe ? 'Hilfe bei der Geber-Integration?' : 'Need Help with Encoder Integration?')}
        description={og?.ctaDescription || (isDe ? 'Kontaktieren Sie unser technisches Team für anwendungsspezifischen Support.' : 'Contact our technical team for application support.')}
      >
        <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {og?.requestConsultation || t.productPages?.requestConsultation || 'Request Technical Consultation'}
        </ButtonLink>
        <ButtonLink to="/support" variant="ghostOnDark">
          {og?.technicalSupport || t.productPages?.technicalSupport || 'Technical Support'}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
