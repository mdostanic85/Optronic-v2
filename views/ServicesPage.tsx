'use client'

import Link from 'next/link';
import { Settings, Wrench, GraduationCap, HeadphonesIcon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { PageHeader, PageCTA, Section, Container, ButtonLink } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { useDocumentHead } from '../hooks/useDocumentHead';

export function ServicesPage() {
  const { t } = useLanguage();
  useDocumentHead(
    'Services',
    'OPTRONIC engineering services: CNC system development, repair and retrofit, sensor integration, and technical support.',
  );
  const services = [
    { icon: Settings, title: 'CNC System Development', description: 'Custom CNC control solutions for specific industrial applications.', features: ['Application-specific CNC programming', 'Multi-axis control system design', 'SERCOS drive integration', 'OAGLinux system configuration', 'Commissioning and optimization'] },
    { icon: Wrench, title: 'Repair & Retrofit', description: 'Professional repair services and system upgrades for all OPTRONIC products.', features: ['Repair of sensors and control systems', 'Retrofit of older D1xx/E1xx controllers', 'CRT to flat-screen monitor upgrades (FSU200)', 'Flying saw controller upgrades (D571)', 'Spare parts supply for legacy systems'] },
    { icon: GraduationCap, title: 'Sensor Integration', description: 'Expert support for integrating OPTRONIC sensors into your production line.', features: ['LVMC light screen configuration and setup', 'Light curtain selection and sizing', 'Encoder and inductive sensor integration', 'Interface configuration (USB, Ethernet, Profibus)', 'Application-specific parameter optimization'] },
    { icon: HeadphonesIcon, title: 'Technical Support', description: 'Expert technical assistance from our engineering team in Goldach, Switzerland.', features: ['Phone and email support', 'Remote diagnostics via network', 'On-site service available', 'Support for current and legacy products', 'Component lists and replacement part identification'] },
  ];

  const faqs = [
    { question: 'Do you offer retrofit solutions for older CNC systems?', answer: 'Yes, we specialize in retrofitting older OPTRONIC controllers (D115, D141, D151, D171) with modern CNC D571 systems. We also offer CRT monitor replacements with our FSU200 flat-screen units.' },
    { question: 'Can you develop custom sensor configurations?', answer: 'Yes, the LVMC and LV..M light curtain systems are available in various standard configurations, and custom sensing area dimensions can be developed for specific applications. Contact our engineering team to discuss your requirements.' },
    { question: 'What is the typical turnaround time for repairs?', answer: 'Standard repair turnaround is typically 2-4 weeks depending on the product and issue complexity. For urgent cases, expedited service may be available. Contact support@optronic.ch with your device details.' },
    { question: 'Do you provide support for non-OPTRONIC equipment?', answer: 'Our primary focus is OPTRONIC products, but we can assist with integration of our sensors and control systems into third-party equipment. For SIEMENS S5 based devices, our FSU202/FSU203 monitor replacements are also compatible.' },
    { question: 'How do I order spare parts for legacy systems?', answer: 'Component lists with order numbers are available for all D100, D300, and E100 series control systems on our Support page. Contact sales@optronic.ch with the article number to check availability and pricing.' },
  ];

  return (
    <div>
      <PageHeader
        title="Our Services"
        description="Comprehensive support services to ensure your success from initial consultation through long-term operation."
      />

      <Section variant="surface" spacing="default">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="border-2 transition-colors hover:border-op-primary">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-op-primary-muted">
                    <service.icon className="h-6 w-6 text-op-primary" />
                  </div>
                  <h3 className="text-2xl font-normal text-op-ink">{service.title}</h3>
                  <p className="text-op-body">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-op-primary" />
                        <span className="text-op-body-strong">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="default">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-normal text-op-ink md:text-4xl">Our Process</h2>
            <p className="mx-auto max-w-2xl text-xl text-op-body">A streamlined approach to deliver exceptional results.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your needs and requirements' },
              { step: '02', title: 'Design', desc: 'Creating tailored solutions' },
              { step: '03', title: 'Implementation', desc: 'Professional installation and setup' },
              { step: '04', title: 'Support', desc: 'Ongoing assistance and maintenance' },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-op-primary text-xl text-op-on-dark">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-op-ink">{item.title}</h3>
                  <p className="text-op-body">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-op-primary-muted md:block" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface" spacing="default">
        <Container narrow>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-normal text-op-ink md:text-4xl">Frequently Asked Questions</h2>
            <p className="text-xl text-op-body">Find answers to common questions about our services.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-op-ink">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-op-body">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>

      <PageCTA
        title="Ready to Start Your Project?"
        description="Let's discuss how our services can help you achieve your goals."
      >
        <ButtonLink to="/contact" variant="primary" iconRight={<ArrowRight className="h-5 w-5" />}>
          {t.common.contactUsToday}
        </ButtonLink>
      </PageCTA>
    </div>
  );
}
