

import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CardImage, PageHeader, Section, Container } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../src/components/SEO';

const SYSTEM_IDS = ['d500-e3000', 'oaglinux', 'd571'];
const SYSTEM_IMAGES = [
  'https://www.optronic.ch/wp-content/uploads/2022/03/e3000_d500.jpg',
  'https://www.optronic.ch/wp-content/uploads/2022/03/oaglinux.png',
  'https://www.optronic.ch/wp-content/uploads/2022/02/flying_saw.jpg',
];
const SYSTEM_DATASHEETS = [
  '/downloads/doc/control_systems/CNC_D500_Aufbau_und_Wartung.pdf',
  '/downloads/doc/control_systems/OAGLinux_V3_Operating_Instructions.pdf',
  '/downloads/doc/control_systems/CNC_D571C_Retrofit_Fliegende_Saege_Retrofit_D115_D141_D151_D171.pdf',
];

export function ControlSystemsPage() {
  const { t, lp } = useLanguage();

  const controlSystems = t.controlSystems.overviewItems.map((item, i) => ({
    id: SYSTEM_IDS[i],
    image: SYSTEM_IMAGES[i],
    datasheet: SYSTEM_DATASHEETS[i],
    name: item.name,
    description: item.description,
  }));

  return (
    <div>
      <SEO
        title="Control Systems"
        description="OPTRONIC CNC control systems: D500/E3000 multi-axis controller, OAGLinux real-time operating system, D571 flying saw controller for industrial manufacturing."
      />
      <PageHeader title={t.controlSystems.overviewTitle} />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {controlSystems.map((system) => (
              <Card
                key={system.id}
                className="group flex h-full flex-col gap-0 overflow-hidden border-2 transition-all hover:border-op-primary hover:shadow-xl"
              >
                <CardImage src={system.image} alt={system.name} />
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="mb-2 shrink-0 text-sm text-op-primary">{system.name}</div>
                  <p className="flex-1 text-op-body">{system.description}</p>
                  <div className="mt-6 flex shrink-0 gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to={lp(`/products/${system.id}`)}>{t.sensors.learnMore}</Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={system.datasheet} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
}
