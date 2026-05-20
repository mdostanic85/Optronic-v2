import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { ProductSectionHeader } from '../../components/design-system/product-page/ProductSectionHeader';
import { ProductBulletList } from '../../components/design-system/product-page/ProductBulletList';
import { ProductDownloadsList } from '../../components/design-system/product-page/ProductDownloadsList';
import { Fancybox } from '../../components/ui/fancybox';
import { useLanguage } from '../../contexts/LanguageContext';
import { getProductPageData } from '../../lib/productPageContent';
import { SEO } from '../../src/components/SEO';

const d571PrimaryImage = '/assets/d571-cnc.jpg';
const d571SecondaryImage = '/assets/d571-e3000.jpg';
const d571GalleryImages = [
  '/assets/d571-gallery-title.png',
  '/assets/d571-gallery-current.png',
  '/assets/d571-gallery-actval.png',
  '/assets/d571-gallery-settings-round.png',
  '/assets/d571-gallery-settings-profile.png',
  '/assets/d571-gallery-settings-teachin.png',
  '/assets/d571-gallery-length-program-1s2e.png',
  '/assets/d571-gallery-length-program-optimizing.png',
];

export function D571Page() {
  const { t, locale, lp } = useLanguage();
  const page = getProductPageData('d571', locale);
  const d571 = t.productPages?.d571;
  const intro = page.intro ?? [];
  const functionSection = page.sections?.[0];
  const operatingStationSection = page.sections?.[1];
  const galleryCaptions = d571?.galleryCaptions ?? [];

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
          <div className="mx-auto max-w-5xl">
            <div>
              <div className="mb-4 inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary">
                {d571?.controlSystemBadge || t.productPages.premiumSensor}
              </div>
              <h2 className="mb-6 text-3xl text-op-ink md:text-4xl">
                {d571?.productOverview || t.productPages.lvm.overviewTitle}
              </h2>
              {intro.map((paragraph) => (
                <p key={paragraph} className="mb-6 text-lg leading-relaxed text-op-body last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
                <ImageWithFallback
                  src={d571PrimaryImage}
                  alt={d571?.imageAltPrimary || 'CNC D571'}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100 bg-white">
                <ImageWithFallback
                  src={d571SecondaryImage}
                  alt={d571?.imageAltSecondary || 'Operating Station E3000 to CNC D571'}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {functionSection ? (
        <Section variant="muted" spacing="default">
          <Container>
            <ProductSectionHeader title={functionSection.heading} />
            <ProductBulletList items={functionSection.items ?? []} />
          </Container>
        </Section>
      ) : null}

      {operatingStationSection ? (
        <Section variant="surface" spacing="default">
          <Container narrow>
            <div className="rounded-xl border border-op-border bg-op-surface-muted p-8 md:p-10">
              <ProductSectionHeader title={operatingStationSection.heading} centered={false} />
              {(operatingStationSection.paragraphs ?? []).map((paragraph) => (
                <p key={paragraph} className="mb-6 text-lg leading-relaxed text-op-body last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section variant="muted" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={locale === 'de' ? 'Software-Oberfläche' : 'Software Interface'}
            title={d571?.galleryTitle || 'D571 Interface Gallery'}
          />
          <Fancybox options={{ Thumbs: false }}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {d571GalleryImages.map((src, index) => (
                <figure
                  key={src}
                  className="overflow-hidden rounded-xl border border-op-border bg-op-surface shadow-sm transition-shadow hover:shadow-md"
                >
                  <a
                    href={src}
                    data-fancybox="d571-gallery"
                    data-caption={galleryCaptions[index] || `${d571?.galleryTitle || 'D571 Interface'} ${index + 1}`}
                    className="group block w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-op-primary focus-visible:ring-offset-2"
                  >
                    <div className="aspect-[4/3] bg-white">
                      <ImageWithFallback
                        src={src}
                        alt={galleryCaptions[index] || `${d571?.galleryTitle || 'D571 Interface'} ${index + 1}`}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </a>
                  <figcaption className="px-4 py-3 text-sm text-op-body">
                    {galleryCaptions[index] || `${locale === 'de' ? 'Ansicht' : 'View'} ${index + 1}`}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Fancybox>
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container>
          <ProductSectionHeader
            badge={t.productPages.resourcesDownloads}
            title={d571?.downloadsHeading || t.productPages.lvm.downloadsTitle}
          />
          <ProductDownloadsList downloads={page.downloads} />
        </Container>
      </Section>

      <PageCTA title={d571?.ctaTitle || t.productPages.lvm.ctaTitle} description={d571?.ctaDesc || t.productPages.lvm.ctaDesc}>
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
