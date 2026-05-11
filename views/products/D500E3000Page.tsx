'use client'

import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../../components/design-system';
import { useLanguage } from '../../contexts/LanguageContext';
import { useDocumentHead } from '../../hooks/useDocumentHead';

const d500Image = '/assets/e3000.webp';

export function D500E3000Page() {
  const { t, locale } = useLanguage();
  const isDe = locale === 'de';
  useDocumentHead(
    'CNC D500 / E3000 Controller',
    'CNC D500 multi-axis controller with E3000 operating station. Modular CompactPCI architecture, SERCOS drives, OAGLinux real-time OS.'
  );
  const d500Features = [
    'Result of long-lasting experience in developing CNC control systems for industrial applications',
    'Powerful CNC core for multi-axis control in technologically demanding projects',
    'CompactFlash slot for operating system, application, and user data',
    'Modular construction: Rack OMR500, power supply OPS500, CPU card OMC520, interface card OMI500 with up to eight expansion cards OIP500',
    'High-resolution programmable watchdog with short reaction time (min 50µs), galvanically isolated',
    'Interfaces on CPU card: Profibus DP Slave, Ethernet, 2x USB2.0, 2x RS232C/485/422, isolated digital I/O',
    'Interfaces on interface card: 2x SSI for absolute encoders, 2x TTL for incremental encoders, 4 analog inputs (16-bit), 8 interrupt-capable digital inputs',
    '1MB NVRAM for data retention across power cycles',
    'OAGLinux real-time operating system',
    'Robust construction, long availability',
    'Maintenance-friendly: no battery, replaceable fan module',
    'Ambient temperature: 0 to 40°C',
  ];

  const e3000Features = [
    'Result of long-lasting experience in developing operating stations for industrial use',
    'CompactFlash slot for operating system, application, and user data',
    'Modular construction: front panel with screen and keyboard, 24V or 230V power supply, CPU module OPC',
    'Interfaces: Ethernet, 2x USB2.0, up to 4x RS232C',
    'Temperature monitoring (digital output, galvanically isolated)',
    'Operating system: OAGLinux',
    'Robust construction, long availability',
    'Ambient temperature: 0 to 40°C',
  ];

  const interfaces = [
    {
      name: 'Absolute Encoder Interfaces',
      description: 'SSI interfaces for absolute encoders with wire break monitoring and data error detection',
    },
    {
      name: 'Incremental Encoder Interfaces',
      description: 'TTL interfaces for incremental encoders with wire break monitoring and high-precision speed measurement',
    },
    {
      name: 'Analog Inputs',
      description: '14-bit or 16-bit resolution, automatic cycle-synchronous reading',
    },
    {
      name: 'Analog Outputs',
      description: '16-bit resolution',
    },
    {
      name: 'Digital Inputs',
      description: 'Fast galvanically isolated interrupt-capable inputs, cycle-synchronous reading',
    },
    {
      name: 'Digital Outputs',
      description: 'Fast galvanically isolated outputs',
    },
  ];

  const downloads = [
    {
      title: t.downloads.fileLabels.d500_maint,
      type: t.downloads.fileTypePdf,
      link: isDe
        ? '/downloads/doc/control_systems/CNC_D500_Aufbau_und_Wartung.pdf'
        : '/downloads/doc/control_systems/CNC_D500_Assembly_and_Maintenance.pdf',
    },
  ];

  return (
    <div className="bg-op-surface">
      <PageHeader
        title={t.productPages?.d500e3000?.title || 'CNC D500 / Operating Station E3000'}
        description={
          t.productPages?.d500e3000?.subtitle ||
          'Designed for years of error-free use in harsh industrial environments'
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
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
                {t.productPages?.d500e3000?.controlSystemBadge || 'Control System'}
              </div>
              <h2 className="text-3xl md:text-4xl text-op-ink mb-6">
                {t.productPages?.d500e3000?.productOverview || 'Product Overview'}
              </h2>
              <p className="text-lg text-op-body leading-relaxed">
                {t.productPages?.d500e3000?.overviewBody ||
                  'The CNC D500 is a modular multi-axis CNC controller based on CompactPCI architecture, paired with the E3000 operating station. Together they form a powerful, reliable control system for demanding industrial applications including tube adjusting machines, flying saws, and profile grinding machines.'}
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-gray-100">
                <ImageWithFallback
                  src={d500Image}
                  alt={t.productPages?.d500e3000?.imageAlt || 'CNC D500 and Operating Station E3000'}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {t.productPages?.d500e3000?.d500Badge || 'CNC D500'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages?.d500e3000?.d500FeaturesTitle || 'CNC D500 Features'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {d500Features.map((feature, index) => (
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

      <Section variant="surface" spacing="default">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {t.productPages?.d500e3000?.e3000Badge || 'Operating Station E3000'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages?.d500e3000?.e3000FeaturesTitle || 'Operating Station E3000 Features'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {e3000Features.map((feature, index) => (
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

      <Section variant="muted" spacing="default">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-op-primary-muted px-4 py-1 text-sm text-op-primary mb-4">
              {t.productPages?.d500e3000?.interfacesBadge || 'Interfaces'}
            </div>
            <h2 className="text-3xl md:text-4xl text-op-ink mb-4">
              {t.productPages?.d500e3000?.interfacesSectionTitle || 'Available Interfaces'}
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-op-border shadow-lg">
            <table className="w-full border-collapse bg-op-surface">
              <thead className="bg-op-gradient-hero text-op-on-dark">
                <tr>
                  <th className="px-6 py-4 text-left">
                    {t.productPages?.d500e3000?.tableInterface || 'Interface'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {t.productPages?.d500e3000?.tableDescription || 'Description'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-op-border">
                {interfaces.map((row) => (
                  <tr key={row.name} className="transition-colors hover:bg-op-surface-muted">
                    <td className="px-6 py-4 text-op-ink">{row.name}</td>
                    <td className="px-6 py-4 text-op-body">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 rounded-xl bg-op-surface-muted p-8 text-center">
            <p className="mb-4 text-lg text-op-body">
              {t.productPages?.customConfigDesc ||
                (isDe
                  ? 'Benötigen Sie eine individuelle Konfiguration? Kontaktieren Sie unser Ingenieurteam für massgeschneiderte Lösungen.'
                  : 'Need a custom configuration? Contact our engineering team for tailored solutions.')}
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                {t.productPages?.requestCustomConfig || 'Request Custom Configuration'}
              </Link>
            </Button>
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
              {t.productPages?.d500e3000?.downloadsHeading || (isDe ? 'Technische Dokumentation' : 'Technical Documentation')}
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
        title={
          t.productPages?.d500e3000?.ctaTitle ||
          (isDe ? 'Bereit, Ihre Steuerungsanforderungen zu besprechen?' : 'Ready to Discuss Your Control System Requirements?')
        }
        description={
          t.productPages?.d500e3000?.ctaDesc ||
          (isDe ? 'Kontaktieren Sie unser Ingenieurteam für eine massgeschneiderte Lösung.' : 'Contact our engineering team for a customized solution.')
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
