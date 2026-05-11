'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Download, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { Fancybox } from '../../components/ui/fancybox';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDocumentHead } from '../../hooks/useDocumentHead';

const g15G35HeroImages = ['/assets/g15-g35.webp', '/assets/ls-collage2.webp', '/assets/ls-control.webp'];

export function G15G35Page() {
  const { t, locale } = useLanguage();
  const isDe = locale === 'de';
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const nextHeroImage = () => setActiveImageIndex((prev) => (prev + 1) % g15G35HeroImages.length);
  const prevHeroImage = () => setActiveImageIndex((prev) => (prev - 1 + g15G35HeroImages.length) % g15G35HeroImages.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % g15G35HeroImages.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  useDocumentHead(
    'G15/G35 Measuring Light Barriers',
    'G15 and G35 measuring light barriers for precision length measurement. Response time 100µs, accuracy ±0.5mm, IP65 protection.'
  );
  const g15g35 = (t.productPages as { g15g35?: Record<string, string | undefined> }).g15g35;
  const g35Features = isDe ? [
    'Als Lichtschranke in Längenmess-Systemen oder als Lichtvorhang zur Objekterkennung',
    'Hohe Betriebssicherheit auch unter erschwerten Bedingungen',
    'Lichtgitter bestehend aus 6 Strahlengängen',
    'Lichtgitterhöhe: 40mm bis 65mm (typenabhängig)',
    'Reaktionszeit (Objekteintritt und -austritt): 100µs',
    'Auflösung: 8mm bis 12mm (typenabhängig)',
    'Genauigkeit: ±0.5mm oder ±0.8mm (typenabhängig)',
    'Wiederholgenauigkeit: 0.1mm oder 0.2mm (typenabhängig)',
    'Abstand Sender-Empfänger: bis 700mm (typenabhängig)',
    'Zwei isolierte Optokoppler-Schaltausgänge mit hoher Belastbarkeit (30V/100mA)',
    'Robustes Metallgehäuse, Schutzart IP65',
    'Versorgungsspannung: 12V DC, 24V DC oder 24V AC',
  ] : [
    'As light barrier in length measuring systems or light curtain for object detection',
    'High operational reliability even under difficult conditions',
    'Light grid consisting of 6 beam paths',
    'Light grid height: 40mm to 65mm (type-dependent)',
    'Response time (object entry and exit): 100µs',
    'Resolution: 8mm to 12mm (type-dependent)',
    'Accuracy: ±0.5mm or ±0.8mm (type-dependent)',
    'Repeatability: 0.1mm or 0.2mm (type-dependent)',
    'Distance transmitter-receiver: up to 700mm (type-dependent)',
    'Two isolated optocoupler switching outputs with high load rating (30V/100mA)',
    'Robust metal housing, protection class IP65',
    'Supply voltage: 12V DC, 24V DC or 24V AC',
  ];

  const g15Features = isDe ? [
    'Als Lichtschranke in Längenmess-Systemen',
    'Hohe Betriebssicherheit auch unter erschwerten Bedingungen',
    'Reaktionszeit (Objekteintritt und -austritt): 100µs',
    'Genauigkeit: ±0.5mm bis ±1.0mm (typenabhängig)',
    'Wiederholgenauigkeit: 0.1mm bis 0.3mm (typenabhängig)',
    'Abstand Sender-Empfänger: bis 1m (typenabhängig)',
    'Isolierter Optokoppler-Schaltausgang mit hoher Belastbarkeit (30V/100mA)',
    'Robustes Metallgehäuse, Schutzart IP65',
    'Versorgungsspannung: 12V DC, 24V DC oder 24V AC',
  ] : [
    'As light barrier in length measuring systems',
    'High operational reliability even under difficult conditions',
    'Response time (object entry and exit): 100µs',
    'Accuracy: ±0.5mm to ±1.0mm (type-dependent)',
    'Repeatability: 0.1mm to 0.3mm (type-dependent)',
    'Distance transmitter-receiver: up to 1m (type-dependent)',
    'Isolated optocoupler switching output with high load rating (30V/100mA)',
    'Robust metal housing, protection class IP65',
    'Supply voltage: 12V DC, 24V DC or 24V AC',
  ];

  const g35ModelRows = [
    {
      parameter: isDe ? 'Lichtgitterhöhe' : 'Light Grid Height',
      values: ['51.5mm', '51.5mm', '40mm', '65mm', '51.5mm'],
    },
    {
      parameter: isDe ? 'Max. Abstand Sender zu Empfänger' : 'Max Distance Transmitter to Receiver',
      values: ['200mm', '350mm', '200mm', '200mm', '700mm'],
    },
    {
      parameter: isDe ? 'Auflösung (Strahlabstand)' : 'Resolution (Beam Path Distance)',
      values: ['10mm', '10mm', '8mm', '12mm', '10mm'],
    },
    {
      parameter: isDe ? 'Genauigkeit (Richtigkeit)' : 'Accuracy (Correctness)',
      values: ['±0.5mm', '±0.8mm', '±0.5mm', '±0.5mm', '±0.8mm'],
    },
    {
      parameter: isDe ? 'Wiederholgenauigkeit (Präzision)' : 'Repeatability (Precision)',
      values: ['0.1mm', '0.2mm', '0.1mm', '0.1mm', '0.2mm'],
    },
  ];

  const g15ModelRows = [
    {
      parameter: isDe ? 'Max. Abstand Sender zu Empfänger' : 'Max Distance Transmitter to Receiver',
      values: ['200mm', '500mm', '700mm', '1000mm'],
    },
    {
      parameter: isDe ? 'Genauigkeit (Richtigkeit)' : 'Accuracy (Correctness)',
      values: ['±0.5mm', '±0.8mm', '±1.0mm', '±1.0mm'],
    },
    {
      parameter: isDe ? 'Wiederholgenauigkeit (Präzision)' : 'Repeatability (Precision)',
      values: ['0.1mm', '0.2mm', '0.3mm', '0.3mm'],
    },
  ];

  const downloads = [
    {
      title: t.downloads.fileLabels.g15_ds,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Messlichtschranke_G15.pdf'
        : '/downloads/doc/sensors/Measuring_Light_Barrier_G15.pdf',
    },
    {
      title: t.downloads.fileLabels.g35_ds,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Messlichtschranke_G35.pdf'
        : '/downloads/doc/sensors/Measuring_Light_Barrier_G35.pdf',
    },
  ];

  return (
    <div className="bg-op-surface">
      <PageHeader
        title={g15g35?.title || 'Measuring Light Barriers G15 / G35'}
        description={
          g15g35?.subtitle ||
          (isDe
            ? 'Spezial-Lichtschranken zum Einsatz in Längenmess-Systemen oder als Lichtvorhänge'
            : 'Special-purpose Light Barriers for usage in length measuring systems or as light curtains')
        }
      >
        <div className="mt-6">
          <Link
            href="/products/sensors"
            className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark"
          >
            <ArrowLeft className="h-4 w-4" />{' '}
            {g15g35?.backToSensors || t.productPages?.backToSensors || 'Back to Sensors'}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
                {g15g35?.overviewBadge || (isDe ? 'Messlichtschranken' : 'Measuring Light Barriers')}
              </div>
              <h2 className="text-3xl md:text-4xl text-op-ink mb-6">
                {g15g35?.overviewHeading || (isDe ? 'Produktübersicht' : 'Product Overview')}
              </h2>
              <p className="text-lg text-op-body leading-relaxed">
                {g15g35?.overviewDescription ||
                  (isDe
                    ? 'Die Messlichtschranken G15 und G35 sind Spezialsensoren für präzise Längenmess-Systeme und Lichtvorhang-Anwendungen. Mit Reaktionszeiten bis 100µs und Genauigkeiten bis ±0.5mm liefern sie zuverlässige Resultate in anspruchsvollen industriellen Umgebungen.'
                    : 'The G15 and G35 measuring light barriers are special-purpose sensors designed for precision length measurement systems and light curtain applications. With response times as fast as 100µs and accuracy down to ±0.5mm, they deliver reliable results in demanding industrial environments.')}
              </p>
            </div>
            <div>
              <Fancybox options={{ Thumbs: false }}>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white relative">
                  {g15G35HeroImages.map((image, index) => (
                    <a
                      key={image}
                      href={image}
                      data-fancybox="g15g35-gallery"
                      data-caption="G15 and G35 measuring light barriers"
                      className={activeImageIndex === index ? 'absolute inset-0 z-10' : 'absolute inset-0 pointer-events-none'}
                      tabIndex={activeImageIndex === index ? 0 : -1}
                      aria-label={`Open image ${index + 1} in gallery`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt="G15 and G35 measuring light barriers"
                        className={`h-full w-full object-contain bg-white transition-opacity duration-700 ${activeImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                      />
                    </a>
                  ))}
                  <button
                    onClick={prevHeroImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-op-ink shadow-md transition hover:bg-white z-20"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextHeroImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-op-ink shadow-md transition hover:bg-white z-20"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </Fancybox>
              <div className="mt-4 flex items-center justify-center gap-2">
                {g15G35HeroImages.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${activeImageIndex === index ? 'bg-op-primary w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {g15g35?.g35FeaturesHeading || (isDe ? 'G35: Eigenschaften' : 'G35 Features')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {g35Features.map((feature, index) => (
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
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {g15g35?.g15FeaturesHeading || (isDe ? 'G15: Eigenschaften' : 'G15 Features')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {g15Features.map((feature, index) => (
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

      <Section variant="muted" spacing="default">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {g15g35?.modelSpecsBadge || (isDe ? 'Modelle & Spezifikationen' : 'Model Specifications')}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {g15g35?.g35ModelsHeading || (isDe ? 'G35 Modelle' : 'G35 Models')}
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
            <table className="w-full min-w-[720px] border-collapse bg-op-surface">
              <thead className="bg-op-gradient-hero text-op-on-dark">
                <tr>
                  <th className="px-6 py-4 text-left">
                    {g15g35?.tableParameterColumn || (isDe ? 'Parameter' : 'Parameter')}
                  </th>
                  <th className="px-6 py-4 text-left">G35EF1Vx</th>
                  <th className="px-6 py-4 text-left">G35EF2Vx</th>
                  <th className="px-6 py-4 text-left">G35EF3Vx</th>
                  <th className="px-6 py-4 text-left">G35EF4Vx</th>
                  <th className="px-6 py-4 text-left">G35EF5Vx</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-op-border">
                {g35ModelRows.map((row) => (
                  <tr key={row.parameter} className="transition-colors hover:bg-op-surface-muted">
                    <td className="px-6 py-4 text-op-ink">{row.parameter}</td>
                    {row.values.map((value, cellIndex) => (
                      <td key={`${row.parameter}-${cellIndex}`} className="px-6 py-4 text-op-body">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {g15g35?.modelSpecsBadge || (isDe ? 'Modelle & Spezifikationen' : 'Model Specifications')}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {g15g35?.g15ModelsHeading || (isDe ? 'G15 Modelle' : 'G15 Models')}
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
            <table className="w-full min-w-[640px] border-collapse bg-op-surface">
              <thead className="bg-op-gradient-hero text-op-on-dark">
                <tr>
                  <th className="px-6 py-4 text-left">
                    {g15g35?.tableParameterColumn || (isDe ? 'Parameter' : 'Parameter')}
                  </th>
                  <th className="px-6 py-4 text-left">G15E1xF10</th>
                  <th className="px-6 py-4 text-left">G15E2xF20</th>
                  <th className="px-6 py-4 text-left">G15E3xF30</th>
                  <th className="px-6 py-4 text-left">G15E4xF40</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-op-border">
                {g15ModelRows.map((row) => (
                  <tr key={row.parameter} className="transition-colors hover:bg-op-surface-muted">
                    <td className="px-6 py-4 text-op-ink">{row.parameter}</td>
                    {row.values.map((value, cellIndex) => (
                      <td key={`${row.parameter}-${cellIndex}`} className="px-6 py-4 text-op-body">
                        {value}
                      </td>
                    ))}
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
              {g15g35?.downloadsSectionBadge || t.productPages?.resourcesDownloads || 'Resources & Downloads'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {g15g35?.downloadsHeading || (isDe ? 'Technische Dokumentation' : 'Technical Documentation')}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {g15g35?.downloadsDescription || (isDe ? 'Datenblätter für Messlichtschranken G15 und G35' : 'Datasheets for G15 and G35 measuring light barriers')}
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
        title={g15g35?.ctaTitle || (isDe ? 'Präzise Messlösung gesucht?' : 'Need a Precision Measurement Solution?')}
        description={g15g35?.ctaDescription || (isDe ? 'Kontaktieren Sie unser Team für anwendungsspezifische Beratung.' : 'Contact our team for application-specific guidance.')}
      >
        <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {g15g35?.requestConsultation || t.productPages?.requestConsultation || 'Request Technical Consultation'}
        </ButtonLink>
        <ButtonLink to="/support" variant="ghostOnDark">
          {g15g35?.technicalSupport || t.productPages?.technicalSupport || 'Technical Support'}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
