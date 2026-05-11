'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Download, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { Fancybox } from '../../components/ui/fancybox';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDocumentHead } from '../../hooks/useDocumentHead';

const lvmHeroImages = ['/assets/lv-var.webp', '/assets/lve.webp', '/assets/lvm-stage.png'];

export function LVMPage() {
  const { t, locale } = useLanguage();
  const isDe = locale === 'de';
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
  const nextHeroImage = () => setCurrentHeroImageIndex((prev) => (prev + 1) % lvmHeroImages.length);
  const prevHeroImage = () => setCurrentHeroImageIndex((prev) => (prev - 1 + lvmHeroImages.length) % lvmHeroImages.length);
  useDocumentHead(
    'LV..M Light Curtains',
    'LV..M light curtain system for detecting and counting small objects. Gapless sensing area, high sampling rate, minimum object size 0.6mm.'
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentHeroImageIndex((prev) => (prev + 1) % lvmHeroImages.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const features = [
    'Gapless sensing area',
    'High sampling rate',
    'Three adjustable response sensitivity levels',
    'High operational reliability',
    'Insensitive to environmental influences',
    'Position and orientation independent object detection',
    'Detection of complicated shapes',
    'Detection of small objects (minimum ø0.6mm)',
    'Avoidance of multiple counts',
    'Detection of stuck objects',
    'Integrated function monitoring (Watchdog)',
    'Contamination monitoring with warning signal',
    'Operation with and without sensing area limiter',
    'Selection of active response sensitivity level by digital inputs or mode switch',
    'Response sensitivity not affected by continuous contamination',
    'Flexible configurable D-Sub interface',
    'Isolated optocoupler outputs and inputs',
    'For small sensing field (minimum 30x30mm) or tight space conditions available with external control unit (LVE)',
    'Robust metal housing',
    'Available in various dimensions',
    'Supply voltage: +24V',
  ];

  const standardModels = [
    { model: 'LV100M', minObject: '1mm', sensingArea: '100mm x 100mm', dimensions: '160mm x 213mm' },
    { model: 'LV150M', minObject: '1mm', sensingArea: '150mm x 100mm', dimensions: '210mm x 213mm' },
    { model: 'LV200M', minObject: '1mm', sensingArea: '200mm x 100mm', dimensions: '260mm x 213mm' },
    { model: 'LV250M', minObject: '1mm', sensingArea: '250mm x 100mm', dimensions: '310mm x 213mm' },
    { model: 'LV300M', minObject: '2mm', sensingArea: '300mm x 100mm', dimensions: '360mm x 213mm' },
    { model: 'LV100/50M', minObject: '0.6mm', sensingArea: '100mm x 52mm', dimensions: '160mm x 165mm' },
    { model: 'LV150/50M', minObject: '0.6mm', sensingArea: '150mm x 52mm', dimensions: '210mm x 165mm' },
    { model: 'LV150/150M', minObject: '2mm', sensingArea: '150mm x 150mm', dimensions: '210mm x 263mm' },
    { model: 'LV200/200M', minObject: '3mm', sensingArea: '200mm x 200mm', dimensions: '260mm x 313mm' },
    { model: 'LV250/250M', minObject: '5mm', sensingArea: '250mm x 250mm', dimensions: '310mm x 363mm' },
    { model: 'LV300/200M', minObject: '4mm', sensingArea: '300mm x 200mm', dimensions: '360mm x 313mm' },
    { model: 'LV400/400M', minObject: '8mm', sensingArea: '400mm x 400mm', dimensions: '460mm x 513mm' },
    { model: 'LVE30/30M', minObject: '0.6mm', sensingArea: '30mm x 30mm', dimensions: '90mm x 91mm' },
    { model: 'LVE50/50M', minObject: '0.6mm', sensingArea: '50mm x 50mm', dimensions: '110mm x 115mm' },
  ];

  const downloads = [
    {
      title: t.downloads.fileLabels.lvm_flyer,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Lichtvorhang_LV..M_Flyer.pdf'
        : '/downloads/doc/sensors/Light_Curtain_LV..M_Flyer.pdf',
    },
    {
      title: t.downloads.fileLabels.lvm_datasheet,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Lichtvorhang_LV...M.pdf'
        : '/downloads/doc/sensors/Light_Screen_LV...M.pdf',
    },
  ];

  return (
    <div className="bg-op-surface">
      <PageHeader title={t.productPages.lvm.title} description={t.productPages.lvm.subtitle}>
        <div className="mt-6">
          <Link href="/products/sensors" className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark">
            <ArrowLeft className="h-4 w-4" /> {t.productPages.backToSensors}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
                {t.productPages.premiumSensor}
              </div>
              <h2 className="text-3xl md:text-4xl text-op-ink mb-6">
                {t.productPages.lvm.overviewTitle}
              </h2>
              <p className="text-lg text-op-body leading-relaxed">
                {t.productPages.lvm.overviewP1}
              </p>
            </div>
            <div>
              <Fancybox options={{ Thumbs: false }}>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 relative bg-white">
                  {lvmHeroImages.map((image, index) => (
                    <a
                      key={image}
                      href={image}
                      data-fancybox="lvm-gallery"
                      data-caption="LV..M Light Curtain"
                      className={currentHeroImageIndex === index ? 'absolute inset-0 z-10' : 'absolute inset-0 pointer-events-none'}
                      tabIndex={currentHeroImageIndex === index ? 0 : -1}
                      aria-label={`Open image ${index + 1} in gallery`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt="LV..M Light Curtain"
                        className={`h-full w-full object-contain transition-opacity duration-700 ${currentHeroImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
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
                {lvmHeroImages.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setCurrentHeroImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${currentHeroImageIndex === index ? 'bg-op-primary w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
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
              {t.productPages.featuresCapabilities}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages.lvm.featuresTitle}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {t.productPages.lvm.featuresDesc}
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
              {t.productPages.availableModels}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages.lvm.modelsTitle}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {t.productPages.lvm.modelsDesc}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
            <table className="w-full border-collapse bg-op-surface">
              <thead className="bg-op-gradient-hero text-op-on-dark">
                <tr>
                  <th className="px-6 py-4 text-left">{t.productPages.lvm.tablePartName}</th>
                  <th className="px-6 py-4 text-left">{t.productPages.lvm.tableMinObject}</th>
                  <th className="px-6 py-4 text-left">{t.productPages.lvm.tableSensingArea}</th>
                  <th className="px-6 py-4 text-left">{t.productPages.lvm.tableDimensions}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-op-border">
                {standardModels.map((model, index) => (
                  <tr key={index} className="transition-colors hover:bg-op-surface-muted">
                    <td className="px-6 py-4 text-op-ink">{model.model}</td>
                    <td className="px-6 py-4 text-op-body">{model.minObject}</td>
                    <td className="px-6 py-4 text-op-body">{model.sensingArea}</td>
                    <td className="px-6 py-4 text-op-body">{model.dimensions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 rounded-xl bg-op-surface-muted p-8 text-center">
            <p className="mb-4 text-lg text-op-body">
              {t.productPages.customConfigDesc}
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">{t.productPages.requestCustomConfig}</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section variant="surface" spacing="default" id="downloads">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {t.productPages.resourcesDownloads}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages.lvm.downloadsTitle || (isDe ? 'Technische Dokumentation' : 'Technical Documentation')}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {t.productPages.lvm.downloadsDesc || (isDe ? 'Datenblätter und technische Unterlagen für LV..M' : 'Datasheets and technical documentation for LV..M')}
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
                    <h3 className="text-lg text-op-ink transition-colors group-hover:text-op-primary">
                      {download.title}
                    </h3>
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

      <PageCTA title={t.productPages.lvm.ctaTitle} description={t.productPages.lvm.ctaDesc}>
        <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {t.productPages.requestConsultation}
        </ButtonLink>
        <ButtonLink to="/support" variant="ghostOnDark">
          {t.productPages.technicalSupport}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
