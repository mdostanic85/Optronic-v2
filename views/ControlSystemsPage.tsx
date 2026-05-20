

import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../src/components/SEO';

const SYSTEM_IDS = ['d500-e3000', 'oaglinux', 'd571'];
const SYSTEM_IMAGES = ['/assets/e3000.webp', '/assets/oag-linux.webp', '/assets/e3000.webp'];
const SYSTEM_DATASHEETS = [
  '/downloads/doc/control_systems/CNC_D500_Aufbau_und_Wartung.pdf',
  '/downloads/doc/control_systems/OAGLinux_V3_Operating_Instructions.pdf',
  '/downloads/doc/control_systems/CNC_D571C_Retrofit_Fliegende_Saege_Retrofit_D115_D141_D151_D171.pdf',
];

export function ControlSystemsPage() {
  const { t, lp } = useLanguage();

  const controlSystems = t.controlSystems.items.map((item: { name: string; title: string; description: string; features: string[]; applications: string[] }, i: number) => ({
    id: SYSTEM_IDS[i],
    image: SYSTEM_IMAGES[i],
    datasheet: SYSTEM_DATASHEETS[i],
    name: item.name,
    title: item.title,
    description: item.description,
    features: item.features,
    applications: item.applications,
  }));

  return (
    <div>
      <SEO title="Control Systems" description="OPTRONIC CNC control systems: D500/E3000 multi-axis controller, OAGLinux real-time operating system, D571 flying saw controller for industrial manufacturing." />
      <PageHeader
        title={t.controlSystems.title}
        description={t.controlSystems.description}
      />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {controlSystems.map((system: { id: string; image: string; datasheet: string; name: string; title: string; description: string; features: string[]; applications: string[] }) => (
              <Card key={system.id} className="overflow-hidden border-2 transition-all hover:border-op-primary hover:shadow-xl">
                <div className="flex aspect-video items-center justify-center overflow-hidden bg-op-surface-muted">
                  <img src={system.image} alt={system.name} className="h-full w-full object-cover" />
                </div>
                <CardContent className="p-8">
                  <div className="mb-2 text-sm text-op-primary">{system.name}</div>
                  <h3 className="mb-3 text-2xl font-normal text-op-ink">{system.title}</h3>
                  <p className="mb-6 text-op-body">{system.description}</p>

                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-medium text-op-ink">{t.controlSystems.keyFeatures}</h4>
                    <div className="space-y-2">
                      {system.features.map((f: string) => (
                        <div key={f} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-op-primary" />
                          <span className="text-sm text-op-body">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-medium text-op-ink">{t.controlSystems.applications}</h4>
                    <div className="space-y-2">
                      {system.applications.map((a: string) => (
                        <div key={a} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-op-secondary" />
                          <span className="text-sm text-op-body">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1" asChild>
                      <Link to={lp(`/products/${system.id}`)}>{t.controlSystems.viewDetails}</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={system.datasheet} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" /> {t.controlSystems.datasheet}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <div className="overflow-hidden rounded-xl bg-op-surface p-8 shadow-lg md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-normal text-op-ink">{t.controlSystems.legacyTitle}</h2>
                <p className="mb-6 text-op-body">
                  {t.controlSystems.legacyDesc}
                </p>
                <div className="space-y-3">
                  {t.controlSystems.legacyItems.map((item: string) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-op-primary" />
                      <span className="text-op-body-strong">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-op-surface-muted p-6">
                <h3 className="mb-4 text-xl font-medium text-op-ink">{t.controlSystems.legacyNeedHelp}</h3>
                <p className="mb-6 text-op-body">{t.controlSystems.legacyNeedHelpDesc}</p>
                <ButtonLink to="/support/contact" variant="primary" className="w-full justify-center" iconRight={<ArrowRight className="h-5 w-5" />}>
                  {t.common.contactSupport}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <PageCTA
        title={t.controlSystems.ctaTitle}
        description={t.controlSystems.ctaDesc}
      >
        <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {t.controlSystems.ctaButton}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
