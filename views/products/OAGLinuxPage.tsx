'use client'

import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDocumentHead } from '../../hooks/useDocumentHead';

export function OAGLinuxPage() {
  const { t, locale } = useLanguage();
  useDocumentHead(
    'OAGLinux Real-Time Operating System',
    'OAGLinux – Linux-based industrial real-time operating system. Less than 12MB memory, hard real-time capability, TCP/IP networking.'
  );
  const features =
    t.productPages?.oagLinux?.features || [
      'Designed for industrial hard real-time applications with high requirements, but still offers all the advantages of Linux.',
      "Supports a wide range of today's critical features and protocols.",
      'Low memory and computing power requirements. The complete operating system occupies less than 12MB of main memory and fits on a 64MB CompactFlash card.',
      'Short start-up time, depending on the constellation a few seconds up to half a minute.',
      'Simple and user-friendly configuration.',
      'License management system for activating application and hardware-specific system and application functions.',
      'Simple, secure and fast update of the application and the system via USB.',
      'Simple, secure and fast loading of licenses and configuration data via USB.',
      'TCP/IP network support with nowadays important protocols (e.g. SMB, NFS, FTP).',
      'Remote maintenance access via network.',
      'The system can be switched-off at any time during normal operation without losing system and application data.',
    ];

  const downloads = [
    {
      title: t.downloads.fileLabels.oag_v3,
      type: t.downloads.fileTypePdf,
      link:
        locale === 'de'
          ? '/downloads/doc/control_systems/OAGLinux_V3_Bedienungsanleitung.pdf'
          : '/downloads/doc/control_systems/OAGLinux_V3_Operating_Instructions.pdf',
    },
    {
      title: t.downloads.fileLabels.oag_v22,
      type: t.downloads.fileTypePdf,
      link:
        locale === 'de'
          ? '/downloads/doc/control_systems/OAGLinux_V2.2_Bedienungsanleitung.pdf'
          : '/downloads/doc/control_systems/OAGLinux_V2.2_Operating_Instructions.pdf',
    },
  ];

  return (
    <div className="bg-op-surface">
      <PageHeader
        title={t.productPages?.oagLinux?.title || 'OPTRONIC OAGLinux'}
        description={
          t.productPages?.oagLinux?.subtitle ||
          'Linux based industrial real-time Operating System'
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
          <div>
            <div>
              <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
                {t.productPages?.oagLinux?.osBadge || 'Operating System'}
              </div>
              <h2 className="text-3xl md:text-4xl text-op-ink mb-6">
                {t.productPages?.oagLinux?.productOverview || 'Product Overview'}
              </h2>
              <p className="text-lg text-op-body leading-relaxed">
                {t.productPages?.oagLinux?.overviewBody ||
                  'OAGLinux was specially developed for use in industrial real-time applications. It is deployed in most current OPTRONIC systems, offering hard real-time capability while supporting a wide range of important functions and protocols. The complete operating system occupies less than 12MB of main memory.'}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {t.productPages?.featuresCapabilities || 'Features & Capabilities'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages?.oagLinux?.keyFeatures || 'Key Features'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-op-border bg-op-surface p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5 text-op-primary" />
                  <p className="leading-relaxed text-op-body">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface" spacing="default" id="downloads">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {t.productPages?.resourcesDownloads || 'Resources & Downloads'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages?.oagLinux?.downloadsHeading || (locale === 'de' ? 'Technische Dokumentation' : 'Technical Documentation')}
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
        title={t.productPages?.oagLinux?.ctaTitle || (locale === 'de' ? 'Interesse an OAGLinux für Ihre Anwendung?' : 'Interested in OAGLinux for Your Application?')}
        description={
          t.productPages?.oagLinux?.ctaDesc || (locale === 'de' ? 'Kontaktieren Sie unser Team zu Lizenzierung und Integration.' : 'Contact our team to discuss licensing and integration.')
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
