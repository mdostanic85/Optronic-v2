'use client'

import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { useDocumentHead } from '../hooks/useDocumentHead';

export function SensorsPage() {
  const { t } = useLanguage();
  useDocumentHead(
    'Sensors',
    'OPTRONIC precision sensors: LVMC digital light screens, LV..M light curtains, G15/G35 measuring light barriers, OG incremental encoders, IRV/IRT inductive sensors, IGV encoder expanders.',
  );
  const sensorIds = ['lvmc', 'lvm', 'g15-g35', 'og', 'irv-irt', 'igv'];
  const sensorImages = ['/assets/lvmc-main.webp', '/assets/lvm-sensor.webp', '/assets/g15-g35.webp', '/assets/og23-og28.webp', '/assets/irv20-mit-spule-32bit.webp', '/assets/igv.webp'];
  const sensorDatasheets = [
    '/downloads/doc/sensors/Light_Curtain_LVMC_Flyer.pdf',
    '/downloads/doc/sensors/Light_Curtain_LV..M_Flyer.pdf',
    '/downloads/doc/sensors/Measuring_Light_Barrier_G15.pdf',
    '/downloads/doc/sensors/Incremental_Encoder_OG.pdf',
    '/downloads/doc/sensors/Inductive_Sensing_Coil_IRT.pdf',
    '/downloads/doc/sensors/Incremental_Encoder_Expander_IGV-133.pdf',
  ];
  const sensors = t.sensors.items.map((item, i) => ({ ...item, id: sensorIds[i], image: sensorImages[i], datasheet: sensorDatasheets[i] }));

  return (
    <div>
      <PageHeader
        title={t.sensors.title}
        description={t.sensors.description}
      />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sensors.map((sensor) => (
              <Card key={sensor.id} className="group overflow-hidden border-2 transition-all hover:border-op-primary hover:shadow-xl">
                <div className="flex aspect-square items-center justify-center overflow-hidden bg-op-surface-muted">
                  <img src={sensor.image} alt={sensor.name} className="h-full w-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 text-sm text-op-primary">{sensor.name}</div>
                  <h3 className="mb-3 text-xl font-medium text-op-ink">{sensor.title}</h3>
                  <p className="mb-4 text-op-body">{sensor.description}</p>

                  <div className="mb-6 space-y-2">
                    {sensor.features.slice(0, 3).map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-op-primary" />
                        <span className="text-sm text-op-body">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href={`/products/${sensor.id}`}>
                        {t.sensors.learnMore}
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={sensor.datasheet} target="_blank" rel="noopener noreferrer">
                        <Download className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <PageCTA
        title={t.sensors.ctaTitle}
        description={t.sensors.ctaDesc}
      >
        <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {t.sensors.ctaButton}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
