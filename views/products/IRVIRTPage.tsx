'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Download, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { Fancybox } from '../../components/ui/fancybox';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDocumentHead } from '../../hooks/useDocumentHead';

const irvIrtHeroImages = [
  '/assets/irv20-mit-spule-32bit.webp',
  '/assets/irt-set-irv-7200x3100.webp',
  '/assets/irv20-open-32bit.webp',
];

export function IRVIRTPage() {
  const { t, locale } = useLanguage();
  const isDe = locale === 'de';
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const nextHeroImage = () => setActiveImageIndex((prev) => (prev + 1) % irvIrtHeroImages.length);
  const prevHeroImage = () => setActiveImageIndex((prev) => (prev - 1 + irvIrtHeroImages.length) % irvIrtHeroImages.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % irvIrtHeroImages.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);
  useDocumentHead(
    'IRV/IRT Inductive Loop Sensors',
    'Self-adjusting inductive loop sensors IRV/IRT for contact-free detection of metallic material in tube processing and industrial applications.'
  );
  const irvirt = (t.productPages as { irvirt?: Record<string, string | undefined> }).irvirt;
  const irtFeatures = isDe ? [
    'Typische Einsatzgebiete: Rohrbearbeitungsmaschinen (Richten, Pilgern), Rohrzuführungen über Dornstangen',
    'Hohe Betriebssicherheit unter erschwerten Bedingungen',
    'Positions- und lageunabhängige Objekterfassung',
    'Unempfindlich gegen nichtmetallische Verschmutzung',
    'Unempfindlich gegenüber Umwelteinflüssen wie Temperatur und Feuchtigkeit',
    'Ansprechempfindlichkeit weitgehend konstant über den gesamten Sensorbereich',
    'Erkennung auch von kleinen Objekten (ferromagnetisches Stangenmaterial mit ø1.25mm)',
    'In vielen verschiedenen Dimensionen verfügbar',
    'Äusserst robuste Ausführung, Schutzart IP65',
    'Spulenkörper aus langlebigem massivem Kunststoff',
    'Tastspule im Spulenkörper versiegelt eingelassen',
    'Bis zu 3m langes Verbindungskabel zwischen IRT und IRV',
  ] : [
    'Typical application areas: Tube processing machines (Straightening, Pilgering), tube feeding by mandrel bars',
    'High operational reliability under difficult conditions',
    'Position and orientation independent object detection',
    'Insensitive to non-metallic contamination',
    'Insensitive to environmental influences like temperature and humidity',
    'Response sensitivity largely constant in the entire sensor area',
    'Detection of even small objects (ferromagnetic bar material with ø1.25mm)',
    'Available in various dimensions',
    'Extremely robust design, protection class IP65',
    'Coil body milled from durable solid plastic',
    'Sensing coil sealed in coil body',
    'Up to 3m long connection cable between IRT and IRV',
  ];

  const irv20Features = isDe ? [
    'Automatischer Ausgleich umgebender Metallmassen',
    'Automatischer Ausgleich umgebender Felder',
    'Automatische Einstellung der optimalen Ansprechempfindlichkeit bezogen auf die Eintauchtiefe des Materials in die Tastspule',
    'Justierung bleibt über Netz-Aus gespeichert',
    'Hohe Betriebssicherheit unter erschwerten Bedingungen',
    'Isolierte Optokoppler-Schaltausgänge mit hoher Belastbarkeit (30V/100mA)',
    'Isolierte Optokoppler-Schalteingänge',
    'Robustes Metallgehäuse, Schutzart IP65',
    'Versorgungsspannung: 24V DC oder 24V AC',
  ] : [
    'Automatic compensation of environmental metal masses',
    'Automatic compensation of environmental fields',
    'Automatic adjustment of the optimum response sensitivity related to the immersion depth of the material in the coil',
    'Adjustment remains stored after power-off',
    'High operational reliability under difficult conditions',
    'Isolated optocoupler switching outputs with high load rating (30V/100mA)',
    'Isolated optocoupler switching inputs',
    'Robust metal housing, protection class IP65',
    'Supply voltage: 24V DC or 24V AC',
  ];

  const irtModels = [
    { part: 'IRT25A', diameter: '25mm', dimensions: '90mm x 97mm' },
    { part: 'IRT40A', diameter: '40mm', dimensions: '100mm x 106mm' },
    { part: 'IRT50A', diameter: '50mm', dimensions: '100mm x 112mm' },
    { part: 'IRT60A', diameter: '60mm', dimensions: '120mm x 120mm' },
    { part: 'IRT75A', diameter: '75mm', dimensions: '135mm x 135mm' },
    { part: 'IRT100A', diameter: '100mm', dimensions: '150mm x 153mm' },
    { part: 'IRT150A', diameter: '150mm', dimensions: '210mm x 210mm' },
    { part: 'IRT200A', diameter: '200mm', dimensions: '260mm x 260mm' },
    { part: 'IRT250A', diameter: '250mm', dimensions: '310mm x 310mm' },
    { part: 'IRT300A', diameter: '300mm', dimensions: '380mm x 380mm' },
  ];

  const downloads = isDe
    ? [
        {
          title: 'Datenblatt zur Induktiven Tastspule IRT',
          type: t.downloads.fileTypePdf,
          link: '/downloads/doc/sensors/Induktive_Tastspule_IRT.pdf',
        },
        {
          title: 'Datenblatt zum Selbstjustierenden Steuergerät IRV20',
          type: t.downloads.fileTypePdf,
          link: '/downloads/doc/sensors/Steuergeraet_IRV20.pdf',
        },
        {
          title: 'Datenblatt zum Steuergerät IRV10',
          type: t.downloads.fileTypePdf,
          link: '/downloads/doc/sensors/Steuergeraet_IRV10.pdf',
        },
        {
          title: 'Datenblatt zum Steuergerät IRV11',
          type: t.downloads.fileTypePdf,
          link: '/downloads/doc/sensors/Steuergeraet_IRV11.pdf',
        },
      ]
    : [
        {
          title: 'Datasheet to Incuctive Sensing Coil IRT',
          type: t.downloads.fileTypePdf,
          link: '/downloads/doc/sensors/Inductive_Sensing_Coil_IRT.pdf',
        },
        {
          title: 'Datasheet to Self-Adjusting Control Unit IRV20',
          type: t.downloads.fileTypePdf,
          link: '/downloads/doc/sensors/Control_Unit_IRV20.pdf',
        },
      ];

  return (
    <div className="bg-op-surface">
      <PageHeader
        title={irvirt?.title || 'Self-Adjusting Inductive Loop Sensors IRV / IRT'}
        description={irvirt?.subtitle || (isDe ? 'Berührungsloses Erfassen von metallischem Material' : 'Contact-Free Detection of Metallic Material')}
      >
        <div className="mt-6">
          <Link
            href="/products/sensors"
            className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark"
          >
            <ArrowLeft className="h-4 w-4" />{' '}
            {irvirt?.backToSensors || t.productPages?.backToSensors || 'Back to Sensors'}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
                {irvirt?.overviewBadge || t.productPages?.premiumSensor || 'Premium Industrial Sensor'}
              </div>
              <h2 className="text-3xl md:text-4xl text-op-ink mb-6">
              {irvirt?.overviewHeading || (isDe ? 'Berührungslose Erfassung von metallischem Material' : 'Contact-Free Metallic Object Detection')}
              </h2>
              <p className="text-lg text-op-body leading-relaxed">
                {irvirt?.overviewDescription ||
                  (isDe
                    ? 'Das IRV/IRT-System ermöglicht die berührungslose Erfassung metallischer Materialien. Typische Anwendungen sind Rohrbearbeitungsmaschinen und Rohrzuführungen über Dornstangen. Das selbstjustierende Steuergerät IRV20 gleicht umgebende Metallmassen und Felder automatisch aus.'
                    : 'The IRV/IRT inductive loop sensor system provides contact-free detection of metallic material. Typical applications include tube processing machines and tube feeding by mandrel bars. The self-adjusting control unit IRV20 automatically compensates for environmental metal masses and fields.')}
              </p>
            </div>
            <div>
              <Fancybox options={{ Thumbs: false }}>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 relative">
                  {irvIrtHeroImages.map((image, index) => (
                    <a
                      key={image}
                      href={image}
                      data-fancybox="irvirt-gallery"
                      data-caption="Self-Adjusting Inductive Loop Sensors IRV / IRT"
                      className={activeImageIndex === index ? 'absolute inset-0 z-10' : 'absolute inset-0 pointer-events-none'}
                      tabIndex={activeImageIndex === index ? 0 : -1}
                      aria-label={`Open image ${index + 1} in gallery`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt="Self-Adjusting Inductive Loop Sensors IRV / IRT"
                        className={`h-full w-full object-cover transition-opacity duration-700 ${activeImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
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
                {irvIrtHeroImages.map((image, index) => (
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
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {irvirt?.irtSectionBadge || (isDe ? 'Tastspulen IRT' : 'Sensing Coils IRT')}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {irvirt?.irtFeaturesHeading || (isDe ? 'Tastspulen IRT: Eigenschaften' : 'Sensing Coils IRT Features')}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {irvirt?.irtFeaturesDescription ||
                (isDe
                  ? 'Robuste induktive Tastspulen für zuverlässige Erkennung in Rohrbearbeitung und Zuführung'
                  : 'Robust inductive coils for reliable detection in tube processing and feeding applications')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {irtFeatures.map((feature, index) => (
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
              {irvirt?.irv20SectionBadge || (isDe ? 'Steuergerät IRV20' : 'Control Unit IRV20')}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {irvirt?.irv20FeaturesHeading || (isDe ? 'Steuergerät IRV20: Eigenschaften' : 'Control Unit IRV20 Features')}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {irvirt?.irv20FeaturesDescription ||
                (isDe
                  ? 'Selbstjustierende Elektronik mit gespeicherter Kalibrierung und isolierten Schnittstellen'
                  : 'Self-adjusting electronics with stored calibration and isolated interfaces')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {irv20Features.map((feature, index) => (
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
              {irvirt?.modelsSectionBadge || t.productPages?.availableModels || 'Available Models'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {irvirt?.modelsHeading || (isDe ? 'Tastspulen IRT: Lieferbare Standard-Ausführungen' : 'IRT Sensing Coil Dimensions')}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {irvirt?.modelsDescription || (isDe ? 'Artikelbezeichnungen mit Tastspulen-Durchmesser und Aussen-Abmessungen' : 'Part numbers with coil diameter and external dimensions')}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
            <table className="w-full border-collapse bg-op-surface">
              <thead className="bg-op-gradient-hero text-op-on-dark">
                <tr>
                  <th className="px-6 py-4 text-left">{irvirt?.tablePartName || (isDe ? 'Artikelbezeichnung' : 'Part Name')}</th>
                  <th className="px-6 py-4 text-left">
                    {irvirt?.tableSensingCoilDiameter || (isDe ? 'Tastspulen-Durchmesser' : 'Sensing Coil Diameter')}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {irvirt?.tableExternalDimensions || (isDe ? 'Aussen-Abmessungen' : 'External Dimensions')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-op-border">
                {irtModels.map((row, index) => (
                  <tr key={index} className="transition-colors hover:bg-op-surface-muted">
                    <td className="px-6 py-4 text-op-ink">{row.part}</td>
                    <td className="px-6 py-4 text-op-body">{row.diameter}</td>
                    <td className="px-6 py-4 text-op-body">{row.dimensions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section variant="surface" spacing="default" id="downloads">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {irvirt?.downloadsSectionBadge || t.productPages?.resourcesDownloads || 'Resources & Downloads'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {irvirt?.downloadsHeading || (isDe ? 'Technische Dokumentation' : 'Technical Documentation')}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {irvirt?.downloadsDescription || (isDe ? 'Datenblätter für IRT-Tastspulen und Steuergerät IRV20' : 'Datasheets for IRT sensing coils and IRV20 control unit')}
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
        title={irvirt?.ctaTitle || (isDe ? 'Induktive Sensorlösung nach Mass gesucht?' : 'Need a Custom Inductive Sensing Solution?')}
        description={irvirt?.ctaDescription || (isDe ? 'Kontaktieren Sie unser Team, um Ihre spezifischen Erfassungsanforderungen zu besprechen.' : 'Contact our team to discuss your specific detection requirements.')}
      >
        <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {irvirt?.requestConsultation || t.productPages?.requestConsultation || 'Request Technical Consultation'}
        </ButtonLink>
        <ButtonLink to="/support" variant="ghostOnDark">
          {irvirt?.technicalSupport || t.productPages?.technicalSupport || 'Technical Support'}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
