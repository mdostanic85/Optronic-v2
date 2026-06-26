import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { ProductSectionHeader } from '../../components/design-system/product-page/ProductSectionHeader';
import { ProductBulletList } from '../../components/design-system/product-page/ProductBulletList';
import { ProductDownloadsList } from '../../components/design-system/product-page/ProductDownloadsList';
import { Fancybox } from '../../components/ui/fancybox';
import { useLanguage } from '../../contexts/LanguageContext';
import { getProductPageData } from '../../lib/productPageContent';
import { SEO } from '../../src/components/SEO';

const irvIrtHeroImages = [
  '/assets/irv20-mit-spule-32bit.webp',
  '/assets/irt-set-irv-7200x3100.webp',
  '/assets/irv20-open-32bit.webp',
];

export function IRVIRTPage() {
  const { t, locale, lp } = useLanguage();
  const page = getProductPageData('irv-irt', locale);
  const irvirt = (t.productPages as { irvirt?: Record<string, string | undefined> }).irvirt;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextHeroImage = () => setActiveImageIndex((prev) => (prev + 1) % irvIrtHeroImages.length);
  const prevHeroImage = () =>
    setActiveImageIndex((prev) => (prev - 1 + irvIrtHeroImages.length) % irvIrtHeroImages.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % irvIrtHeroImages.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  const featureSections = page.sections ?? [];
  const modelsTable = page.tables?.[0];
  const sectionVariant = (index: number) => (index % 2 === 0 ? 'surface' : 'muted') as const;

  return (
    <div className="bg-op-surface">
      <SEO title={page.seoTitle} description={page.seoDescription} />
      <PageHeader title={page.title} description={page.subtitle}>
        <div className="mt-6">
          <Link
            to={lp('/products/sensors')}
            className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark"
          >
            <ArrowLeft className="h-4 w-4" /> {irvirt?.backToSensors || t.productPages.backToSensors}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary">
                {irvirt?.overviewBadge || t.productPages.premiumSensor}
              </div>
              <h2 className="mb-6 text-3xl text-op-ink md:text-4xl">
                {irvirt?.overviewHeading || t.productPages.lvm.overviewTitle}
              </h2>
              <p className="text-lg leading-relaxed text-op-body">
                {irvirt?.overviewDescription || t.productPages.lvm.overviewP1}
              </p>
            </div>
            <div>
              <Fancybox options={{ Thumbs: false }}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100">
                  {irvIrtHeroImages.map((image, index) => (
                    <a
                      key={image}
                      href={image}
                      data-fancybox="irvirt-gallery"
                      data-caption="Self-Adjusting Inductive Loop Sensors IRV / IRT"
                      className={
                        activeImageIndex === index
                          ? 'absolute inset-0 z-10'
                          : 'pointer-events-none absolute inset-0'
                      }
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
                {irvIrtHeroImages.map((image, index) => (
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

      {featureSections.map((section, index) => (
        <Section key={section.heading} variant={sectionVariant(1 + index)} spacing="default">
          <Container>
            <ProductSectionHeader
              badge={
                index === 0
                  ? irvirt?.irtSectionBadge
                  : irvirt?.irv20SectionBadge || t.productPages.featuresCapabilities
              }
              title={section.heading}
              description={index === 0 ? irvirt?.irtFeaturesDescription : irvirt?.irv20FeaturesDescription}
            />
            <ProductBulletList items={section.items ?? []} />
          </Container>
        </Section>
      ))}

      <Section variant={sectionVariant(1 + featureSections.length)} spacing="default">
        <Container>
          <ProductSectionHeader
            badge={irvirt?.downloadsSectionBadge || t.productPages.resourcesDownloads}
            title={irvirt?.downloadsHeading || t.productPages.lvm.downloadsTitle}
            description={irvirt?.downloadsDescription}
          />
          <ProductDownloadsList downloads={page.downloads} />
        </Container>
      </Section>

      {modelsTable ? (
        <Section variant={sectionVariant(2 + featureSections.length)} spacing="default">
          <Container>
            <ProductSectionHeader
              badge={irvirt?.modelsSectionBadge || t.productPages.availableModels}
              title={modelsTable.heading}
              description={irvirt?.modelsDescription}
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
                        <td
                          key={`${row[0]}-${cellIndex}`}
                          className={`px-6 py-4 ${cellIndex === 0 ? 'text-op-ink' : 'text-op-body'}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </Section>
      ) : null}

      <PageCTA
        title={irvirt?.ctaTitle || t.productPages.lvm.ctaTitle}
        description={irvirt?.ctaDescription || t.productPages.lvm.ctaDesc}
      >
        <ButtonLink to={lp('/contact')} variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {irvirt?.requestConsultation || t.productPages.requestConsultation}
        </ButtonLink>
        <ButtonLink to={lp('/support')} variant="ghostOnDark">
          {irvirt?.technicalSupport || t.productPages.technicalSupport}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
