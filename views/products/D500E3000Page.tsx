import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { ProductSectionHeader } from '../../components/design-system/product-page/ProductSectionHeader';
import { ProductBulletList } from '../../components/design-system/product-page/ProductBulletList';
import { ProductDownloadsList } from '../../components/design-system/product-page/ProductDownloadsList';
import { useLanguage } from '../../contexts/LanguageContext';
import { getProductPageData } from '../../lib/productPageContent';
import type { ProductPageBlock } from '../../components/design-system/ProductDetailLayout';
import { SEO } from '../../src/components/SEO';

const d500Image = '/assets/e3000.webp';

export function D500E3000Page() {
  const { t, locale, lp } = useLanguage();
  const page = getProductPageData('d500-e3000', locale);
  const blocks = page.blocks ?? [];

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
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary">
                {t.productPages.d500e3000?.controlSystemBadge || t.productPages.premiumSensor}
              </div>
              <h2 className="mb-6 text-3xl text-op-ink md:text-4xl">
                {t.productPages.d500e3000?.productOverview || t.productPages.lvm.overviewTitle}
              </h2>
              <p className="text-lg leading-relaxed text-op-body">
                {t.productPages.d500e3000?.overviewBody || t.productPages.lvm.overviewP1}
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100">
                <ImageWithFallback
                  src={d500Image}
                  alt={t.productPages.d500e3000?.imageAlt || 'CNC D500 and Operating Station E3000'}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {blocks.map((block: ProductPageBlock, index) => {
        const variant = index % 2 === 0 ? 'muted' : 'surface';

        if (block.type === 'section') {
          return (
            <Section key={block.heading} variant={variant} spacing="default">
              <Container>
                <ProductSectionHeader
                  badge={
                    index === 0
                      ? t.productPages.d500e3000?.d500Badge
                      : t.productPages.d500e3000?.e3000Badge || t.productPages.featuresCapabilities
                  }
                  title={block.heading}
                />
                <ProductBulletList items={block.items ?? []} />
              </Container>
            </Section>
          );
        }

        return (
          <Section key={block.heading} variant={variant} spacing="default">
            <Container>
              <ProductSectionHeader
                badge={t.productPages.d500e3000?.interfacesBadge || t.productPages.availableModels}
                title={block.heading}
              />
              <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
                <table className="w-full border-collapse bg-op-surface">
                  <thead className="bg-op-gradient-hero text-op-on-dark">
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header} className="px-6 py-4 text-left">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-op-border">
                    {block.rows.map((row) => (
                      <tr key={row[0]} className="transition-colors hover:bg-op-surface-muted">
                        <td className="px-6 py-4 text-op-ink">{row[0]}</td>
                        <td className="px-6 py-4 text-op-body">{row[1]}</td>
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
        );
      })}

      <Section variant={blocks.length % 2 === 0 ? 'muted' : 'surface'} spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.resourcesDownloads}
            title={t.productPages.d500e3000?.downloadsHeading || t.productPages.lvm.downloadsTitle}
          />
          <ProductDownloadsList downloads={page.downloads} />
        </Container>
      </Section>

      <PageCTA
        title={t.productPages.d500e3000?.ctaTitle || t.productPages.lvm.ctaTitle}
        description={t.productPages.d500e3000?.ctaDesc || t.productPages.lvm.ctaDesc}
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
