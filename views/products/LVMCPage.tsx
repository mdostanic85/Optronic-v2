'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Download, ExternalLink, Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Fancybox } from '../../components/ui/fancybox';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDocumentHead } from '../../hooks/useDocumentHead';
const lvmcHeroImages = [
  '/assets/lvmc-render-1.webp',
  '/assets/lvmc-render-2.webp',
  '/assets/lvmc-render-3.webp',
];
const lvmcVideoUrl = 'https://www.youtube.com/watch?v=iq_Hxfu-ztk&t=95s';
const lvmcVideoEmbedUrl = 'https://www.youtube.com/embed/iq_Hxfu-ztk?start=95&autoplay=1&rel=0';
const lvmcVideoThumbnail = 'https://img.youtube.com/vi/iq_Hxfu-ztk/maxresdefault.jpg';

export function LVMCPage() {
  const { t, locale } = useLanguage();
  const isDe = locale === 'de';
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextHeroImage = () => setActiveImageIndex((prev) => (prev + 1) % lvmcHeroImages.length);
  const prevHeroImage = () => setActiveImageIndex((prev) => (prev - 1 + lvmcHeroImages.length) % lvmcHeroImages.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % lvmcHeroImages.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  useDocumentHead(
    'LVMC Digital Light Screens',
    'LVMC digital light curtain system for detecting, counting, measuring, and classifying objects. High-resolution optical sensors with integrated Linux computer.'
  );

  const standardModels = [
    { model: 'LVMC100/50M', minObject: '1mm', sensingArea: '100mm x 52mm', dimensions: '160mm x 165mm' },
    { model: 'LVMC100/100M', minObject: '1mm', sensingArea: '100mm x 100mm', dimensions: '160mm x 213mm' },
    { model: 'LVMC150/50M', minObject: '1mm', sensingArea: '150mm x 52mm', dimensions: '210mm x 165mm' },
    { model: 'LVMC150/100M', minObject: '1mm', sensingArea: '150mm x 100mm', dimensions: '210mm x 213mm' },
    { model: 'LVMC150/150M', minObject: '1mm', sensingArea: '150mm x 150mm', dimensions: '210mm x 263mm' },
    { model: 'LVMC200/100M', minObject: '2mm', sensingArea: '200mm x 100mm', dimensions: '260mm x 213mm' },
    { model: 'LVMC200/200M', minObject: '2mm', sensingArea: '200mm x 200mm', dimensions: '260mm x 313mm' },
    { model: 'LVMC250/100M', minObject: '3mm', sensingArea: '250mm x 100mm', dimensions: '310mm x 213mm' },
    { model: 'LVMC250/250M', minObject: '3mm', sensingArea: '250mm x 250mm', dimensions: '310mm x 363mm' },
    { model: 'LVMC300/100M', minObject: '4mm', sensingArea: '300mm x 100mm', dimensions: '360mm x 213mm' },
    { model: 'LVMC300/200M', minObject: '4mm', sensingArea: '300mm x 200mm', dimensions: '360mm x 313mm' },
    { model: 'LVMC400/400M', minObject: '8mm', sensingArea: '400mm x 400mm', dimensions: '460mm x 513mm' },
  ];

  const downloads = [
    {
      title: t.downloads.fileLabels.lvmc_flyer,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Lichtvorhang_LVMC_Flyer.pdf'
        : '/downloads/doc/sensors/Light_Curtain_LVMC_Flyer.pdf',
    },
    {
      title: t.downloads.fileLabels.lvmc_getting_started,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Lichtvorhang_LVMC_Kurzanleitung.pdf'
        : '/downloads/doc/sensors/Light_Curtain_LVMC_Getting_Started.pdf',
    },
    {
      title: t.downloads.fileLabels.lvmc_manual,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/sensors/Lichtvorhang_LVMC_Benutzerhandbuch.pdf'
        : '/downloads/doc/sensors/Light_Curtain_LVMC_User_Manual.pdf',
    },
    {
      title: t.downloads.fileLabels.lvmc_cmt_a1,
      type: t.downloads.fileTypeSoftware,
      link: '/downloads/sw/sensors/lvmc/cmt/lvmc_cmt_a1_v1.450_setup.zip',
    },
    {
      title: t.downloads.fileLabels.lvmc_cmt_a2_2037,
      type: t.downloads.fileTypeSoftware,
      link: '/downloads/sw/sensors/lvmc/cmt/lvmc_cmt_a2_v2.037_setup.zip',
    },
    {
      title: t.downloads.fileLabels.lvmc_cmt_a2_2110,
      type: t.downloads.fileTypeSoftware,
      link: '/downloads/sw/sensors/lvmc/cmt/lvmc_cmt_a2_v2.110_setup.zip',
    },
    {
      title: t.downloads.fileLabels.lvmc_cmt_a2_2201,
      type: t.downloads.fileTypeSoftware,
      link: '/downloads/sw/sensors/lvmc/cmt/lvmc_cmt_a2_v2.201_setup.zip',
    },
    {
      title: t.downloads.fileLabels.lvmc_rc_v13,
      type: t.downloads.fileTypeSoftware,
      link: '/downloads/sw/sensors/lvmc/rc/lvmc_rc_v1.3.zip',
    },
    {
      title: t.downloads.fileLabels.lvmc_rc_v21,
      type: t.downloads.fileTypeSoftware,
      link: '/downloads/sw/sensors/lvmc/rc/lvmc_rc_v2.1.zip',
    },
  ];

  const galleryImages = [
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/02/configuration_page-1024x907.png', alt: 'LVMC configuration page' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/02/status_page-1024x907.png', alt: 'LVMC status page' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/02/analysis_page-1024x907.png', alt: 'LVMC analysis page' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/02/statistics_and_automatic_page-1024x907.png', alt: 'LVMC statistics and automatic page' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/02/error_log_page-1024x907.png', alt: 'LVMC error log page' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/02/demo_page.png', alt: 'LVMC demo page' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/02/speed_measurement_page-1024x792.png', alt: 'LVMC speed measurement page' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/02/cmt_analysis_screw.png', alt: 'LVMC CMT analysis' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/03/LVMC_Ai-1-1024x576.jpg', alt: 'LVMC image 1' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/03/LVMC_object-clasification-1024x576.jpg', alt: 'LVMC object classification' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/03/LVMC_correct-counting-rotated-1-1024x576.jpg', alt: 'LVMC correct counting' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/03/LVMC_detect-stucked-objects-1024x576.jpg', alt: 'LVMC detect stucked objects' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/03/LVMC_detect-small-objects-1024x576.jpg', alt: 'LVMC detect small objects' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/03/LVMC_nested-objects-1024x576.jpg', alt: 'LVMC nested objects' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/03/LVMC_flexibile-integration-1024x576.jpg', alt: 'LVMC flexible integration' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/03/LVMC_status-LED-1024x576.jpg', alt: 'LVMC status LED' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/03/LVMC_dsub-1024x576.jpg', alt: 'LVMC dsub' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/03/LVMC_ethernet-1024x576.jpg', alt: 'LVMC ethernet' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/03/LVMC_USB-1024x576.jpg', alt: 'LVMC USB' },
    { src: 'https://www.optronic.ch/wp-content/uploads/2022/03/LVMC_differnt-sizes-1024x576.jpg', alt: 'LVMC different sizes' },
  ];

  return (
    <div className="bg-op-surface">
      <PageHeader title={t.productPages.lvmc.title} description={t.productPages.lvmc.subtitle}>
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
                {t.productPages.lvmc.overviewBadge}
              </div>
              <h2 className="text-3xl md:text-4xl text-op-ink mb-6">
                {t.productPages.lvmc.overviewTitle}
              </h2>
              <p className="text-lg text-op-body mb-6 leading-relaxed">
                {t.productPages.lvmc.overviewP1}
              </p>
              <p className="text-lg text-op-body leading-relaxed">
                {t.productPages.lvmc.overviewP2}
              </p>
              {t.productPages.lvmc.overviewP3 ? (
                <p className="mt-6 text-lg text-op-body leading-relaxed">
                  {t.productPages.lvmc.overviewP3}
                </p>
              ) : null}
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white relative">
                {lvmcHeroImages.map((image, index) => (
                  <ImageWithFallback
                    key={image}
                    src={image}
                    alt="LVMC Product"
                    className={`absolute inset-0 h-full w-full object-contain bg-white transition-opacity duration-700 ${activeImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <button
                  onClick={prevHeroImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-op-ink shadow-md transition hover:bg-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextHeroImage}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-op-ink shadow-md transition hover:bg-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                {lvmcHeroImages.map((image, index) => (
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
              {t.productPages.featuresCapabilities}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages.lvmc.featuresTitle}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {t.productPages.lvmc.featuresDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.productPages.lvmc.featuresList.map((feature, index) => (
              <div key={index} className="rounded-xl border border-op-border bg-op-surface p-6 shadow-sm transition-all hover:shadow-md">
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
              {t.productPages.lvmc.modelsTitle}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {t.productPages.lvmc.modelsDesc}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
            <table className="w-full border-collapse bg-op-surface">
              <thead className="bg-op-gradient-hero text-op-on-dark">
                <tr>
                  <th className="px-6 py-4 text-left">{t.productPages.lvmc.tablePartName}</th>
                  <th className="px-6 py-4 text-left">{t.productPages.lvmc.tableMinObject}</th>
                  <th className="px-6 py-4 text-left">{t.productPages.lvmc.tableSensingArea}</th>
                  <th className="px-6 py-4 text-left">{t.productPages.lvmc.tableDimensions}</th>
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

      <Section variant="muted" spacing="default">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {t.productPages.productInAction}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages.lvmc.galleryTitle}
            </h2>
            <p className="text-lg text-op-body max-w-3xl mx-auto">
              {t.productPages.lvmc.galleryDesc}
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-20">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 max-w-5xl mx-auto border-4 border-op-border transition-all">
              {isVideoPlaying ? (
                <iframe
                  className="h-full w-full"
                  src={lvmcVideoEmbedUrl}
                  title="LVMC YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsVideoPlaying(true)}
                  className="group relative h-full w-full cursor-pointer"
                  aria-label="Play LVMC video"
                >
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/30">
                    <div className="text-center">
                      <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-op-primary transition-all group-hover:scale-110 group-hover:bg-op-primary-hover">
                        <Play className="w-14 h-14 text-white ml-2" />
                      </div>
                      <p className="text-white text-3xl mb-3">{t.productPages.lvmc.videoTitle}</p>
                      <p className="text-white/90 text-lg mb-2">{t.productPages.lvmc.videoDesc}</p>
                      <p className="text-white/70">{t.productPages.lvmc.videoSub}</p>
                    </div>
                  </div>
                  <ImageWithFallback
                    src={lvmcVideoThumbnail}
                    alt="LVMC YouTube Video Thumbnail"
                    className="h-full w-full object-cover"
                  />
                </button>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          <div>
            <h3 className="mb-8 text-center text-2xl text-op-ink">{t.productPages.lvmc.galleryHeading}</h3>
            <Fancybox options={{ Thumbs: false }}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {galleryImages.map((image, index) => (
                  <a
                    key={index}
                    href={image.src}
                    data-fancybox="lvmc-gallery"
                    data-caption={image.alt}
                    className="cursor-pointer overflow-hidden rounded-xl border-2 border-op-border transition-all hover:border-op-primary/30 group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-op-primary focus-visible:ring-offset-2"
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </a>
                ))}
              </div>
            </Fancybox>
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
              {t.productPages.lvmc.downloadsTitle}
            </h2>
            {t.productPages.lvmc.downloadsDesc ? (
              <p className="text-lg text-op-body max-w-3xl mx-auto">
                {t.productPages.lvmc.downloadsDesc}
              </p>
            ) : null}
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

      <PageCTA
        title={t.productPages.lvmc.ctaTitle}
        description={t.productPages.lvmc.ctaDesc}
      >
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