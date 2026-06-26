import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { CardImage, PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { ProductSectionHeader } from '../../components/design-system/product-page/ProductSectionHeader';
import { ProductBulletList } from '../../components/design-system/product-page/ProductBulletList';
import { ProductDownloadsList } from '../../components/design-system/product-page/ProductDownloadsList';
import { useLanguage } from '../../contexts/LanguageContext';
import { getProductPageData } from '../../lib/productPageContent';
import { SEO } from '../../src/components/SEO';

const coverImage = 'https://www.optronic.ch/wp-content/uploads/2022/02/cnc_d571.jpg';
const e3000SectionImage = 'https://www.optronic.ch/wp-content/uploads/2022/02/e3000_d571.jpg';

function ProductImageFrame({ src, alt }: { src: string; alt: string }) {
  return <CardImage src={src} alt={alt} className="w-full rounded-xl border-4 border-gray-100" />;
}

export function D571Page() {
  const { t, locale, lp } = useLanguage();
  const page = getProductPageData('d571', locale);
  const d571 = t.productPages.d571;
  const intro = page.intro ?? [];
  const functionSection = page.sections?.[0];
  const operatingStationSection = page.sections?.[1];
  const sectionVariant = (index: number): 'muted' | 'surface' => (index % 2 === 1 ? 'muted' : 'surface');
  const featureSectionCount = [functionSection, operatingStationSection].filter(Boolean).length;

  return (
    <div className="bg-op-surface">
      <SEO title={page.seoTitle} description={page.seoDescription} />
      <PageHeader title={page.title} description={page.subtitle || d571?.subtitle}>
        <div className="mt-6">
          <Link
            to={lp('/products/control-systems')}
            className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark"
          >
            <ArrowLeft className="h-4 w-4" /> {t.productPages.backToControlSystems}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary">
                {d571?.controlSystemBadge || t.productPages.premiumSensor}
              </div>
              <h2 className="mb-6 text-3xl text-op-ink md:text-4xl">
                {d571?.productOverview || t.productPages.lvm.overviewTitle}
              </h2>
              {intro.length > 0 ? (
                intro.map((paragraph) => (
                  <p key={paragraph} className="mb-6 text-lg leading-relaxed text-op-body last:mb-0">
                    {paragraph}
                  </p>
                ))
              ) : (
                <>
                  <p className="mb-6 text-lg leading-relaxed text-op-body">{d571?.overviewBody}</p>
                  {d571?.overviewBodySecondary ? (
                    <p className="text-lg leading-relaxed text-op-body">{d571.overviewBodySecondary}</p>
                  ) : null}
                </>
              )}
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
                <ImageWithFallback
                  src={coverImage}
                  alt={d571?.imageAltPrimary || page.title}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {functionSection ? (
        <Section variant={sectionVariant(1)} spacing="default">
          <Container>
            <ProductSectionHeader
              badge={d571?.controlSystemBadge || t.productPages.featuresCapabilities}
              title={functionSection.heading}
            />
            <ProductBulletList items={functionSection.items ?? []} />
          </Container>
        </Section>
      ) : null}

      {operatingStationSection ? (
        <Section variant={sectionVariant(2)} spacing="default">
          <Container>
            <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <ProductSectionHeader
                  badge={d571?.e3000Badge || t.productPages.featuresCapabilities}
                  title={operatingStationSection.heading}
                  centered={false}
                />
                {(operatingStationSection.paragraphs ?? []).map((paragraph) => (
                  <p key={paragraph} className="mb-6 text-lg leading-relaxed text-op-body last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="w-full max-w-xl md:ml-auto">
                <ProductImageFrame
                  src={e3000SectionImage}
                  alt={d571?.imageAltSecondary || operatingStationSection.heading}
                />
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      <Section variant={sectionVariant(1 + featureSectionCount)} spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.resourcesDownloads}
            title={d571?.downloadsHeading || t.productPages.lvm.downloadsTitle}
          />
          <ProductDownloadsList downloads={page.downloads} />
        </Container>
      </Section>

      <PageCTA
        title={d571?.ctaTitle || t.productPages.lvm.ctaTitle}
        description={d571?.ctaDesc || t.productPages.lvm.ctaDesc}
      >
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
