import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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

const lvmHeroImages = ['/assets/lv-var.webp', '/assets/lve.webp', '/assets/lvm-stage.png'];

export function LVMPage() {
  const { t, locale, lp } = useLanguage();
  const page = getProductPageData('lvm', locale);
  const features = page.sections?.[0]?.items ?? [];
  const modelsTable = page.tables?.[0];
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);

  const nextHeroImage = () => setCurrentHeroImageIndex((prev) => (prev + 1) % lvmHeroImages.length);
  const prevHeroImage = () =>
    setCurrentHeroImageIndex((prev) => (prev - 1 + lvmHeroImages.length) % lvmHeroImages.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentHeroImageIndex((prev) => (prev + 1) % lvmHeroImages.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="bg-op-surface">
      <SEO title={page.seoTitle} description={page.seoDescription} />
      <PageHeader title={page.title} description={page.subtitle}>
        <div className="mt-6">
          <Link
            to={lp('/products/sensors')}
            className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark"
          >
            <ArrowLeft className="h-4 w-4" /> {t.productPages.backToSensors}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary">
                {t.productPages.premiumSensor}
              </div>
              <h2 className="mb-6 text-3xl text-op-ink md:text-4xl">{t.productPages.lvm.overviewTitle}</h2>
              <p className="text-lg leading-relaxed text-op-body">{t.productPages.lvm.overviewP1}</p>
            </div>
            <div>
              <Fancybox options={{ Thumbs: false }}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
                  {lvmHeroImages.map((image, index) => (
                    <a
                      key={image}
                      href={image}
                      data-fancybox="lvm-gallery"
                      data-caption="LV..M Light Curtain"
                      className={
                        currentHeroImageIndex === index
                          ? 'absolute inset-0 z-10'
                          : 'pointer-events-none absolute inset-0'
                      }
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
                    type="button"
                    onClick={prevHeroImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-op-ink shadow-md transition hover:bg-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextHeroImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-op-ink shadow-md transition hover:bg-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </Fancybox>
              <div className="mt-4 flex items-center justify-center gap-2">
                {lvmHeroImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setCurrentHeroImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${currentHeroImageIndex === index ? 'w-6 bg-op-primary' : 'bg-slate-300 hover:bg-slate-400'}`}
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
            title={page.sections?.[0]?.heading ?? t.productPages.lvm.featuresTitle}
            description={t.productPages.lvm.featuresDesc}
          />
          <ProductBulletList items={features} />
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.resourcesDownloads}
            title={t.productPages.lvm.downloadsTitle}
            description={t.productPages.lvm.downloadsDesc}
          />
          <ProductDownloadsList downloads={page.downloads} />
        </Container>
      </Section>

      {modelsTable ? (
        <Section variant="muted" spacing="default">
          <Container>
            <ProductSectionHeader
              badge={t.productPages.availableModels}
              title={modelsTable.heading}
              description={t.productPages.lvm.modelsDesc}
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
              <p className="mb-4 text-lg text-op-body">{t.productPages.customConfigDesc}</p>
              <Button size="lg" asChild>
                <Link to={lp('/contact')}>{t.productPages.requestCustomConfig}</Link>
              </Button>
            </div>
          </Container>
        </Section>
      ) : null}

      <PageCTA title={t.productPages.lvm.ctaTitle} description={t.productPages.lvm.ctaDesc}>
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
