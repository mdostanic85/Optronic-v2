import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { CardImage, PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { ProductSectionHeader } from '../../components/design-system/product-page/ProductSectionHeader';
import { ProductBulletList } from '../../components/design-system/product-page/ProductBulletList';
import { ProductDownloadsList } from '../../components/design-system/product-page/ProductDownloadsList';
import { useLanguage } from '../../contexts/LanguageContext';
import { getProductPageData } from '../../lib/productPageContent';
import type { ProductPageBlock } from '../../components/design-system/ProductDetailLayout';
import { SEO } from '../../src/components/SEO';

const coverImage = 'https://www.optronic.ch/wp-content/uploads/2022/02/d500_small.jpg';
const d500SectionImages = [
  'https://www.optronic.ch/wp-content/uploads/2022/02/omc520_side.jpg',
  'https://www.optronic.ch/wp-content/uploads/2022/02/omi500_large.jpg',
] as const;
const e3000SectionImage = 'https://www.optronic.ch/wp-content/uploads/2022/02/e3000_left.jpg';

function ProductImageFrame({ src, alt }: { src: string; alt: string }) {
  return <CardImage src={src} alt={alt} className="w-full rounded-xl border-4 border-gray-100" />;
}

export function D500E3000Page() {
  const { t, locale, lp } = useLanguage();
  const page = getProductPageData('d500-e3000', locale);
  const d500 = t.productPages.d500e3000;
  const blocks = page.blocks ?? [];
  const featureBlocks = blocks.filter(
    (block): block is Extract<ProductPageBlock, { type: 'section' }> => block.type === 'section',
  );
  const tableBlocks = blocks.filter(
    (block): block is Extract<ProductPageBlock, { type: 'table' }> => block.type === 'table',
  );
  const d500Block = featureBlocks[0];
  const e3000Block = featureBlocks[1];
  const sectionVariant = (index: number): 'muted' | 'surface' => (index % 2 === 1 ? 'muted' : 'surface');

  return (
    <div className="bg-op-surface">
      <SEO title={page.seoTitle} description={page.seoDescription} />
      <PageHeader title={page.title} description={d500?.subtitle || page.subtitle?.replace(/<\/?strong>/g, '')}>
        <div className="mt-6">
          <Link
            to={lp('/products/control-systems')}
            className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark"
          >
            <ArrowLeft className="h-4 w-4" /> {t.productPages.backToControlSystems}
          </Link>
        </div>
      </PageHeader>

      {d500Block ? (
        <Section variant="surface" spacing="default">
          <Container>
            <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <ProductSectionHeader
                  badge={d500?.d500Badge || t.productPages.featuresCapabilities}
                  title={d500Block.heading}
                  centered={false}
                />
                <ProductBulletList items={d500Block.items ?? []} align="start" />
              </div>
              <div className="grid w-full max-w-xl gap-4 md:ml-auto">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
                  <ImageWithFallback
                    src={coverImage}
                    alt={d500?.imageAlt || page.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                {d500SectionImages.map((src) => (
                  <ProductImageFrame key={src} src={src} alt={d500Block.heading} />
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {e3000Block ? (
        <Section variant={sectionVariant(2)} spacing="default">
          <Container>
            <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <ProductSectionHeader
                  badge={d500?.e3000Badge || t.productPages.featuresCapabilities}
                  title={e3000Block.heading}
                  centered={false}
                />
                <ProductBulletList items={e3000Block.items ?? []} align="start" />
              </div>
              <div className="w-full max-w-xl md:ml-auto">
                <ProductImageFrame src={e3000SectionImage} alt={e3000Block.heading} />
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      <Section variant={sectionVariant(1 + featureBlocks.length)} spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.resourcesDownloads}
            title={d500?.downloadsHeading || t.productPages.lvm.downloadsTitle}
          />
          <ProductDownloadsList downloads={page.downloads} />
        </Container>
      </Section>

      {tableBlocks.map((block, index) => (
        <Section
          key={block.heading}
          variant={sectionVariant(2 + featureBlocks.length + index)}
          spacing="default"
        >
          <Container>
            <ProductSectionHeader
              badge={d500?.interfacesBadge || t.productPages.availableModels}
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
            <div className="mt-10 rounded-xl bg-op-surface-muted p-8 text-center">
              <p className="mb-4 text-lg text-op-body">{t.productPages.customConfigDesc}</p>
              <Button size="lg" asChild>
                <Link to={lp('/contact')}>{t.productPages.requestCustomConfig}</Link>
              </Button>
            </div>
          </Container>
        </Section>
      ))}

      <PageCTA
        title={d500?.ctaTitle || t.productPages.lvm.ctaTitle}
        description={d500?.ctaDesc || t.productPages.lvm.ctaDesc}
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
