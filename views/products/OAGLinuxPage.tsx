import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { ProductSectionHeader } from '../../components/design-system/product-page/ProductSectionHeader';
import { ProductBulletList } from '../../components/design-system/product-page/ProductBulletList';
import { ProductDownloadsList } from '../../components/design-system/product-page/ProductDownloadsList';
import { useLanguage } from '../../contexts/LanguageContext';
import { getProductPageData } from '../../lib/productPageContent';
import { SEO } from '../../src/components/SEO';

const coverImage = 'https://www.optronic.ch/wp-content/uploads/2022/03/oaglinux_logo.png';

export function OAGLinuxPage() {
  const { t, locale, lp } = useLanguage();
  const page = getProductPageData('oaglinux', locale);
  const oag = t.productPages.oagLinux;
  const features = page.sections?.[0]?.items ?? [];
  const intro = page.intro ?? [];

  return (
    <div className="bg-op-surface">
      <SEO title={page.seoTitle} description={page.seoDescription} />
      <PageHeader title={page.title} description={page.subtitle || oag?.subtitle}>
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
                {oag?.osBadge || t.productPages.premiumSensor}
              </div>
              <h2 className="mb-6 text-3xl text-op-ink md:text-4xl">
                {oag?.productOverview || t.productPages.lvm.overviewTitle}
              </h2>
              {intro.length > 0 ? (
                intro.map((paragraph) => (
                  <p key={paragraph} className="mb-6 text-lg leading-relaxed text-op-body last:mb-0">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-lg leading-relaxed text-op-body">{oag?.overviewBody}</p>
              )}
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
                <ImageWithFallback
                  src={coverImage}
                  alt={oag?.imageAlt || page.title}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.featuresCapabilities}
            title={page.sections?.[0]?.heading ?? oag?.keyFeatures}
          />
          <ProductBulletList items={features} />
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.resourcesDownloads}
            title={oag?.downloadsHeading || t.productPages.lvm.downloadsTitle}
          />
          <ProductDownloadsList downloads={page.downloads} />
        </Container>
      </Section>

      <PageCTA
        title={oag?.ctaTitle || t.productPages.lvm.ctaTitle}
        description={oag?.ctaDesc || t.productPages.lvm.ctaDesc}
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
