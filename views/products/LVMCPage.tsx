
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Fancybox } from '../../components/ui/fancybox';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { ProductSectionHeader } from '../../components/design-system/product-page/ProductSectionHeader';
import { ProductBulletList } from '../../components/design-system/product-page/ProductBulletList';
import { ProductDownloadsList } from '../../components/design-system/product-page/ProductDownloadsList';
import { useLanguage } from '../../contexts/LanguageContext';
import { getProductPageData } from '../../lib/productPageContent';
import { SEO } from '../../src/components/SEO';

const lvmcHeroImages = [
  '/assets/lvmc-render-1.webp',
  '/assets/lvmc-render-2.webp',
  '/assets/lvmc-render-3.webp',
];
const lvmcVideoEmbedUrl = 'https://www.youtube.com/embed/iq_Hxfu-ztk?start=95&autoplay=1&rel=0';
const lvmcVideoThumbnail = 'https://img.youtube.com/vi/iq_Hxfu-ztk/maxresdefault.jpg';

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

export function LVMCPage() {
  const { t, locale, lp } = useLanguage();
  const page = getProductPageData('lvmc', locale);
  const features = page.sections?.[0]?.items ?? [];
  const modelsTable = page.tables?.[0];
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

  return (
    <div className="bg-op-surface">
      <SEO title={page.seoTitle} description={page.seoDescription} />
      <PageHeader title={page.title} description={page.subtitle}>
        <div className="mt-6">
          <Link to={lp('/products/sensors')} className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark">
            <ArrowLeft className="h-4 w-4" /> {t.productPages.backToSensors}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary">
                {t.productPages.lvmc.overviewBadge}
              </div>
              <h2 className="mb-6 text-3xl text-op-ink md:text-4xl">{t.productPages.lvmc.overviewTitle}</h2>
              <p className="mb-6 text-lg leading-relaxed text-op-body">{t.productPages.lvmc.overviewP1}</p>
              <p className="text-lg leading-relaxed text-op-body">{t.productPages.lvmc.overviewP2}</p>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
                {lvmcHeroImages.map((image, index) => (
                  <ImageWithFallback
                    key={image}
                    src={image}
                    alt="LVMC Product"
                    className={`absolute inset-0 h-full w-full bg-white object-contain transition-opacity duration-700 ${activeImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <button
                  type="button"
                  onClick={prevHeroImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-op-ink shadow-md transition hover:bg-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
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
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${activeImageIndex === index ? 'w-6 bg-op-primary' : 'bg-slate-300 hover:bg-slate-400'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.featuresCapabilities}
            title={page.sections?.[0]?.heading ?? t.productPages.lvmc.featuresTitle}
            description={t.productPages.lvmc.featuresDesc}
          />
          <ProductBulletList items={features} />
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container>
          <ProductSectionHeader badge={t.productPages.resourcesDownloads} title={t.productPages.lvmc.downloadsTitle} />
          <ProductDownloadsList downloads={page.downloads} />
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.productInAction}
            title={t.productPages.lvmc.videoTitle}
            description={t.productPages.lvmc.videoDesc}
          />
          <div className="mb-20">
            <div className="relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-2xl border-4 border-op-border bg-gray-900">
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
                        <Play className="ml-2 h-14 w-14 text-white" />
                      </div>
                      <p className="mb-3 text-3xl text-white">{t.productPages.lvmc.videoTitle}</p>
                      <p className="mb-2 text-lg text-white/90">{t.productPages.lvmc.videoDesc}</p>
                      <p className="text-white/70">{t.productPages.lvmc.videoSub}</p>
                    </div>
                  </div>
                  <ImageWithFallback src={lvmcVideoThumbnail} alt="LVMC YouTube Video Thumbnail" className="h-full w-full object-cover" />
                </button>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {modelsTable ? (
        <Section variant="surface" spacing="default">
          <Container>
            <ProductSectionHeader
              badge={t.productPages.availableModels}
              title={modelsTable.heading}
              description={t.productPages.lvmc.modelsDesc}
            />
            <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
              <table className="w-full border-collapse bg-op-surface">
                <thead className="bg-op-gradient-hero text-op-on-dark">
                  <tr>
                    {modelsTable.headers.map((header) => (
                      <th key={header} className="px-6 py-4 text-left">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-op-border">
                  {modelsTable.rows.map((row) => (
                    <tr key={row[0]} className="transition-colors hover:bg-op-surface-muted">
                      {row.map((cell, cellIndex) => (
                        <td key={`${row[0]}-${cellIndex}`} className="px-6 py-4 text-op-body">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-10 rounded-xl bg-op-surface-muted p-8 text-center">
              <p className="mb-4 text-lg text-op-body">{t.productPages.lvmc.customConfigDesc}</p>
              <Button size="lg" asChild>
                <Link to={lp('/contact')}>{t.productPages.requestCustomConfig}</Link>
              </Button>
            </div>
          </Container>
        </Section>
      ) : null}

      <Section variant="muted" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.productInAction}
            title={t.productPages.lvmc.galleryTitle}
            description={t.productPages.lvmc.galleryDesc}
          />
          <Fancybox options={{ Thumbs: false }}>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {galleryImages.map((image) => (
                <a
                  key={image.src}
                  href={image.src}
                  data-fancybox="lvmc-gallery"
                  data-caption={image.alt}
                  className="group block cursor-pointer overflow-hidden rounded-xl border-2 border-op-border transition-all hover:border-op-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-op-primary focus-visible:ring-offset-2"
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </Fancybox>
        </Container>
      </Section>

      <PageCTA title={t.productPages.lvmc.ctaTitle} description={t.productPages.lvmc.ctaDesc}>
        <ButtonLink to={lp('/contact')} variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {t.productPages.requestConsultation}
        </ButtonLink>
        <ButtonLink to={lp('/support')} variant="ghostOnDark">
          {t.productPages.technicalSupport}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
