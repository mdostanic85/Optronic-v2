'use client'

import Link from 'next/link';
import { FileText, Download, ArrowRight, Radio, Cpu, Wrench } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { PageHeader, Section, Container, ButtonLink } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { useDocumentHead } from '../hooks/useDocumentHead';

export function DocumentationPage() {
  const { t } = useLanguage();
  useDocumentHead(
    'Technical Documentation',
    'Find product manuals, datasheets, and technical specifications for all OPTRONIC sensors and control systems.',
  );
  const productDocs = [
    { title: 'LVMC – Digital Light Screens', desc: 'Brochure, getting started guide, user manual, and CMT/RC software', link: '/products/lvmc#downloads', icon: Radio },
    { title: 'LV..M – Light Curtains', desc: 'Product brochure and technical datasheet', link: '/products/lvm#downloads', icon: Radio },
    { title: 'G15 / G35 – Measuring Light Barriers', desc: 'Technical datasheets for G15 and G35 models', link: '/products/g15-g35#downloads', icon: Radio },
    { title: 'OG23D / OG28D – Incremental Encoders', desc: 'Incremental encoder datasheet', link: '/products/og#downloads', icon: Radio },
    { title: 'IRV / IRT – Inductive Loop Sensors', desc: 'Datasheets for IRT sensing coils and IRV20 control unit', link: '/products/irv-irt#downloads', icon: Radio },
    { title: 'IGV – Encoder Expanders', desc: 'Datasheets for all IGV model variants', link: '/products/igv#downloads', icon: Radio },
    { title: 'CNC D500 / E3000', desc: 'Assembly and maintenance documentation', link: '/products/d500-e3000#downloads', icon: Cpu },
    { title: 'OAGLinux', desc: 'Operating instructions for V2.2 and V3', link: '/products/oaglinux#downloads', icon: Cpu },
    { title: 'CNC D571 – Flying Saw', desc: 'Retrofit documentation for older flying saws', link: '/products/d571#downloads', icon: Cpu },
    { title: 'FSU200 / FPDI200 – CRT Replacements', desc: 'Operating instructions and replacement guides for all FSU models', link: '/support/fsu200', icon: Wrench },
  ];

  return (
    <div>
      <PageHeader
        title="Technical Documentation"
        description="Find product manuals, datasheets, installation guides, and technical specifications for all OPTRONIC products"
      />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-normal text-op-ink">{t.common.productDocumentationHeading}</h2>
            <ButtonLink to="/support/downloads" variant="outlineNeutral" iconRight={<Download className="h-4 w-4" />}>
              {t.common.allDownloads}
            </ButtonLink>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {productDocs.map((doc) => (
              <Link key={doc.title} href={doc.link} className="group">
                <Card className="h-full transition-all hover:border-op-primary hover:shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-op-primary-muted transition-colors group-hover:bg-op-primary/20">
                      <doc.icon className="h-5 w-5 text-op-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-base font-medium text-op-ink transition-colors group-hover:text-op-primary">{doc.title}</h3>
                      <p className="text-sm text-op-body">{doc.desc}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-op-body transition-colors group-hover:text-op-primary" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <Card>
            <CardContent className="p-8 text-center">
              <FileText className="mx-auto mb-4 h-12 w-12 text-op-primary" />
              <h3 className="mb-3 text-2xl font-normal text-op-ink">Need a Specific Document?</h3>
              <p className="mb-6 text-op-body">
                If you can't find the documentation you need, contact our support team. Please include the product type, serial number, and description of what you're looking for.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <ButtonLink to="/contact" variant="primary">{t.common.contactSupport}</ButtonLink>
                <ButtonLink to="/support/downloads" variant="outlineNeutral">{t.common.browseAllDownloads}</ButtonLink>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
