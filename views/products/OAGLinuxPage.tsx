import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { ProductSectionHeader } from '../../components/design-system/product-page/ProductSectionHeader';
import { ProductBulletList } from '../../components/design-system/product-page/ProductBulletList';
import { ProductDownloadsList } from '../../components/design-system/product-page/ProductDownloadsList';
import { useLanguage } from '../../contexts/LanguageContext';
import { getProductPageData } from '../../lib/productPageContent';
import { SEO } from '../../src/components/SEO';

export function OAGLinuxPage() {
  const { t, locale, lp } = useLanguage();
  const page = getProductPageData('oaglinux', locale);
  const features = page.sections?.[0]?.items ?? [];
  const intro = page.intro ?? [];

  return (
    <div className="bg-op-surface">
      <SEO title={page.seoTitle} description={page.seoDescription} />
      <PageHeader title={page.title} description={page.subtitle}>
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
          <div>
            <div className="mb-4 inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary">
              {t.productPages.oagLinux?.osBadge || t.productPages.premiumSensor}
            </div>
            <h2 className="mb-6 text-3xl text-op-ink md:text-4xl">
              {t.productPages.oagLinux?.productOverview || t.productPages.lvm.overviewTitle}
            </h2>
            {intro.map((paragraph) => (
              <p key={paragraph} className="mb-6 text-lg leading-relaxed text-op-body last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.featuresCapabilities}
            title={page.sections?.[0]?.heading ?? t.productPages.oagLinux?.keyFeatures}
          />
          <ProductBulletList items={features} />
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.resourcesDownloads}
            title={t.productPages.oagLinux?.downloadsHeading || t.productPages.lvm.downloadsTitle}
          />
          <ProductDownloadsList downloads={page.downloads} />
        </Container>
      </Section>

      <PageCTA
        title={t.productPages.oagLinux?.ctaTitle || t.productPages.lvm.ctaTitle}
        description={t.productPages.oagLinux?.ctaDesc || t.productPages.lvm.ctaDesc}
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
