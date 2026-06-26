import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CardImage, PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { ProductSectionHeader } from '../../components/design-system/product-page/ProductSectionHeader';
import { ProductBulletList } from '../../components/design-system/product-page/ProductBulletList';
import { ProductDownloadsList } from '../../components/design-system/product-page/ProductDownloadsList';
import { useLanguage } from '../../contexts/LanguageContext';
import { getProductPageData } from '../../lib/productPageContent';
import { SEO } from '../../src/components/SEO';

const g15G35SectionImages = [
  'https://www.optronic.ch/wp-content/uploads/2020/09/G15-_-G35-1024x640.jpg',
  'https://www.optronic.ch/wp-content/uploads/2022/02/g35_small-1024x429.jpg',
] as const;

function ProductImageFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <CardImage src={src} alt={alt} className="w-full rounded-xl border-4 border-gray-100" />
  );
}

export function G15G35Page() {
  const { t, locale, lp } = useLanguage();
  const page = getProductPageData('g15-g35', locale);
  const g15g35 = (t.productPages as { g15g35?: Record<string, string | undefined> }).g15g35;

  const featureSections = page.sections ?? [];
  const tables = page.tables ?? [];
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
            <ArrowLeft className="h-4 w-4" /> {g15g35?.backToSensors || t.productPages.backToSensors}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="w-full">
            <div className="mb-4 inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary">
              {g15g35?.overviewBadge || t.productPages.premiumSensor}
            </div>
            <h2 className="mb-6 text-3xl text-op-ink md:text-4xl">
              {g15g35?.overviewHeading || (locale === 'de' ? 'Produktübersicht' : 'Product Overview')}
            </h2>
            <p className="max-w-none text-lg leading-relaxed text-op-body">
              {g15g35?.overviewDescription || page.seoDescription}
            </p>
          </div>
        </Container>
      </Section>

      {featureSections.map((section, index) => {
        const sectionImage = g15G35SectionImages[index];
        return (
          <Section key={section.heading} variant={sectionVariant(1 + index)} spacing="default">
            <Container>
              <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <ProductSectionHeader title={section.heading} centered={false} />
                  <ProductBulletList items={section.items ?? []} align="start" />
                </div>
                {sectionImage ? (
                  <div className="w-full max-w-xl md:ml-auto">
                    <ProductImageFrame src={sectionImage} alt={section.heading} />
                  </div>
                ) : null}
              </div>
            </Container>
          </Section>
        );
      })}

      <Section variant={sectionVariant(1 + featureSections.length)} spacing="default">
        <Container>
          <ProductSectionHeader
            badge={g15g35?.downloadsSectionBadge || t.productPages.resourcesDownloads}
            title={g15g35?.downloadsHeading || t.productPages.lvm.downloadsTitle}
            description={g15g35?.downloadsDescription}
          />
          <ProductDownloadsList downloads={page.downloads} />
        </Container>
      </Section>

      {tables.map((table, index) => (
        <Section
          key={table.heading}
          variant={sectionVariant(2 + featureSections.length + index)}
          spacing="default"
        >
          <Container>
            <ProductSectionHeader
              badge={g15g35?.modelSpecsBadge || t.productPages.availableModels}
              title={table.heading}
            />
            <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
              <table className="w-full min-w-[640px] border-collapse bg-op-surface">
                <thead className="bg-op-gradient-hero text-op-on-dark">
                  <tr>
                    {table.headers.map((header) => (
                      <th key={header} className="px-6 py-4 text-left">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-op-border">
                  {table.rows.map((row) => (
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
      ))}

      <PageCTA
        title={g15g35?.ctaTitle || t.productPages.lvm.ctaTitle}
        description={g15g35?.ctaDescription || t.productPages.lvm.ctaDesc}
      >
        <ButtonLink to={lp('/contact')} variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {g15g35?.requestConsultation || t.productPages.requestConsultation}
        </ButtonLink>
        <ButtonLink to={lp('/support')} variant="ghostOnDark">
          {g15g35?.technicalSupport || t.productPages.technicalSupport}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
