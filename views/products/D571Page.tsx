'use client'

import Link from 'next/link';
import { ArrowLeft, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { Fancybox } from '../../components/ui/fancybox';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDocumentHead } from '../../hooks/useDocumentHead';

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
  const { t, locale } = useLanguage();
  const isDe = locale === 'de';
  const d571 = t.productPages?.d571;

  useDocumentHead(
    d571?.title || 'D571: CNC for Synchronous Running Cutting-To-Length Devices (Flying Saws)',
    d571?.overviewBody ||
      'The CNC D571 is based on the CompactPCI system D500, and the operating station E3000.'
  );

  const features = d571?.features || [];
  const galleryCaptions = d571?.galleryCaptions || [];

  const downloads = [
    {
      title: t.downloads.fileLabels.d571c_retrofit,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/control_systems/CNC_D571C_Retrofit_Fliegende_Saege_Retrofit_D115_D141_D151_D171.pdf'
        : '/downloads/doc/control_systems/CNC_D571C_Retrofit_Flying_Saw_D115_D141_D151_D171.pdf',
    },
  ];

  return (
    <div className="bg-op-surface">
      <PageHeader
        title={d571?.title || 'D571: CNC for Synchronous Running Cutting-To-Length Devices (Flying Saws)'}
        description={
          d571?.subtitle || 'CNC D571C: Retrofit of old Flying Saws D115, D141, D151 und D171'
        }
      >
        <div className="mt-6">
          <Link
            href="/products/control-systems"
            className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark"
          >
            <ArrowLeft className="h-4 w-4" />{' '}
            {t.productPages?.backToControlSystems || 'Back to Control Systems'}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div>
              <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
                {d571?.controlSystemBadge || 'Control System'}
              </div>
              <h2 className="text-3xl md:text-4xl text-op-ink mb-6">
                {d571?.productOverview || 'Product Overview'}
              </h2>
              <p className="text-lg text-op-body leading-relaxed mb-6">
                {d571?.overviewBody ||
                  'The CNC D571 is based on the CompactPCI system D500, and the operating station E3000.'}
              </p>
              <p className="text-lg text-op-body leading-relaxed">
                {d571?.overviewBodySecondary ||
                  'The CNC D571 is available in a configuration that can be used as replacement for older OPTRONIC control systems for synchronous running cutting (D115, D141, D151, D171).'}
              </p>
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

      <Section variant="muted" spacing="default">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {d571?.keyFeatures || 'Functions of the CNC D571'}
            </h2>
          </div>

          <ul className="mx-auto max-w-5xl list-disc space-y-4 pl-6 text-op-body">
            {features.map((feature, index) => (
              <li key={index} className="text-base leading-relaxed marker:text-op-primary">
                {feature}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container narrow>
          <div className="rounded-xl border border-op-border bg-op-surface-muted p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl text-op-ink mb-6">
              {d571?.operatingStationTitle || 'Operating Station E3000 to CNC D571'}
            </h2>
            <p className="text-lg text-op-body leading-relaxed mb-6">
              {d571?.operatingStationBody ||
                'The D571 is completely parameterized by use of the operating station E3000.'}
            </p>
            <p className="text-lg text-op-body leading-relaxed">
              {d571?.operatingSystemNote || 'OAGLinux is used as operating system.'}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {isDe ? 'Software-Oberfläche' : 'Software Interface'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {d571?.galleryTitle || 'D571 Interface Gallery'}
            </h2>
          </div>

          <Fancybox options={{ Thumbs: false }}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {d571GalleryImages.map((src, index) => (
                <figure key={src} className="overflow-hidden rounded-xl border border-op-border bg-op-surface shadow-sm transition-shadow hover:shadow-md">
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
                    {galleryCaptions[index] || `${isDe ? 'Ansicht' : 'View'} ${index + 1}`}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Fancybox>
        </Container>
      </Section>

      <Section variant="surface" spacing="default" id="downloads">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {t.productPages?.resourcesDownloads || 'Resources & Downloads'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {d571?.downloadsHeading || (isDe ? 'Technische Dokumentation' : 'Technical Documentation')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {downloads.map((dl) => (
              <a
                key={dl.link}
                href={dl.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border-2 border-op-border bg-op-surface-muted p-6 transition-all hover:border-op-primary/30 hover:bg-op-surface hover:shadow-lg group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-op-primary-muted transition-colors group-hover:bg-op-primary/20">
                    <Download className="h-7 w-7 text-op-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-op-ink transition-colors group-hover:text-op-primary">{dl.title}</h3>
                    <div className="mt-1">
                      <span className="text-sm uppercase tracking-wide text-op-body">{dl.type}</span>
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-6 w-6 flex-shrink-0 text-op-body transition-colors group-hover:text-op-primary" />
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <PageCTA
        title={d571?.ctaTitle || (isDe ? 'Steuerungslösung für Flugsägen gesucht?' : 'Need a Flying Saw Control Solution?')}
        description={
          d571?.ctaDesc ||
          (isDe
            ? 'Kontaktieren Sie unser Team zu Ihren Anforderungen an das Längenteilen.'
            : 'Contact our team to discuss your cutting-to-length requirements.')
        }
      >
        <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {t.productPages?.requestConsultation || 'Request Technical Consultation'}
        </ButtonLink>
        <ButtonLink to="/support" variant="ghostOnDark">
          {t.productPages?.technicalSupport || 'Technical Support'}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
