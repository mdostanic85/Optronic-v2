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
import { SEO } from '../../src/components/SEO';

const igvImage = '/assets/igv.webp';
const igvDiagramImage = '/assets/igv-diagram.png';

export function IGVPage() {
  const { t, locale, lp } = useLanguage();
  const page = getProductPageData('igv', locale);
  const features = page.sections?.[0]?.items ?? [];
  const modelsTable = page.tables?.[0];

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
                {t.productPages.igv?.industrialSensorBadge || t.productPages.premiumSensor}
              </div>
              <h2 className="mb-6 text-3xl text-op-ink md:text-4xl">
                {t.productPages.igv?.productOverview || t.productPages.lvm.overviewTitle}
              </h2>
              <p className="text-lg leading-relaxed text-op-body">
                {t.productPages.igv?.overviewBody || t.productPages.lvm.overviewP1}
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100">
                <ImageWithFallback
                  src={igvImage}
                  alt={t.productPages.igv?.imageAlt || 'Incremental Encoder Expanders IGV'}
                  className="h-full w-full object-cover"
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
            title={page.sections?.[0]?.heading ?? t.productPages.igv?.keyFeatures}
          />
          <ProductBulletList items={features} />
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.resourcesDownloads}
            title={t.productPages.igv?.downloadsHeading || t.productPages.lvm.downloadsTitle}
          />
          <ProductDownloadsList downloads={page.downloads} />
        </Container>
      </Section>

      {modelsTable ? (
        <Section variant="muted" spacing="default">
          <Container>
            <ProductSectionHeader
              badge={t.productPages.igv?.modelsSpecsBadge || t.productPages.availableModels}
              title={modelsTable.heading}
            />
            <div className="overflow-hidden rounded-xl border border-op-border shadow-lg">
              <table className="w-full border-collapse bg-op-surface text-sm">
                <thead className="bg-op-gradient-hero text-op-on-dark">
                  <tr>
                    {modelsTable.headers.map((header) => (
                      <th key={header} className="break-words px-4 py-3 text-left">
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
                          className={`break-words whitespace-pre-line px-4 py-3 ${cellIndex === 0 ? 'text-op-ink' : 'text-op-body'}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-10 flex justify-center">
              <ImageWithFallback
                src={igvDiagramImage}
                alt={t.productPages.igv?.diagramAlt || 'IGV signal distribution diagram'}
                className="h-auto w-full max-w-sm object-contain"
              />
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

      <PageCTA
        title={t.productPages.igv?.ctaTitle || t.productPages.lvm.ctaTitle}
        description={t.productPages.igv?.ctaDesc || t.productPages.lvm.ctaDesc}
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
