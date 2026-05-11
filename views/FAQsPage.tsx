'use client'

import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { PageHeader, Section, Container } from '../components/design-system';
import { useLanguage } from '../contexts/LanguageContext';
import { useDocumentHead } from '../hooks/useDocumentHead';

export function FAQsPage() {
  const { t } = useLanguage();
  useDocumentHead(
    'FAQ',
    'Frequently asked questions about OPTRONIC products, sensors, CNC control systems, support services, and spare parts.',
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    { category: 'General Questions', faqs: [
      { question: 'What products does OPTRONIC manufacture?', answer: 'OPTRONIC AG specializes in industrial sensors and CNC control systems. Our sensor product lines include the LVMC digital light screens, LV..M light curtains, G15/G35 measuring light barriers, OG23D/OG28D incremental encoders, IRV/IRT inductive loop sensors, and IGV encoder expanders. Our control systems include the CNC D500/E3000 multi-axis controller, OAGLinux real-time operating system, and CNC D571 flying saw controller.' },
      { question: 'Where is OPTRONIC located?', answer: 'OPTRONIC AG is based in Goldach, Switzerland (Unteregger Strasse 53, CH-9403 Goldach). We have been developing and manufacturing precision industrial sensors and control systems since the company\'s founding.' },
      { question: 'Do you ship internationally?', answer: 'Yes, OPTRONIC products are used worldwide. Contact our sales team at sales@optronic.ch for shipping options and delivery times to your location.' },
    ]},
    { category: 'Product Support', faqs: [
      { question: 'How do I configure my LVMC digital light screen?', answer: 'The LVMC can be configured using the LVMC CMT software, available for download on our Downloads page. The software supports configuration, operation, analysis, and monitoring. For initial setup, refer to the \'Getting Started with the Digital Light Curtain LVMC\' guide.' },
      { question: 'Where can I download product documentation?', answer: 'All product documentation, datasheets, user manuals, and software are available free of charge on our Downloads page at /support/downloads.' },
      { question: 'Do you support legacy and discontinued products?', answer: 'Yes, OPTRONIC provides comprehensive support for all products, including legacy systems from the D100, D200, D300, and E100 series. We maintain spare parts inventory, offer repair services, and provide technical assistance. Visit our Support page for details on legacy product support.' },
      { question: 'What replacement is available for CRT monitors in older control systems?', answer: 'The FSU200 series (FSU201, FSU202, FSU203, FSU211) provides modern flat-screen replacements for CRT monitors in OPTRONIC control systems D1xx, E1xx, E7xx, and OP500, as well as SIEMENS S5 based devices. The FPDI200 video signal converter is also available for custom display solutions.' },
    ]},
    { category: 'Technical Questions', faqs: [
      { question: 'What is the minimum detectable object size for LVMC sensors?', answer: 'The minimum detectable object size depends on the LVMC model. The smallest models (LVMC100/50M, LVMC100/100M, LVMC150/50M, LVMC150/100M, LVMC150/150M) can detect objects as small as 1mm. For the LV..M series, the LVE models can detect objects down to 0.6mm diameter.' },
      { question: 'What operating system do OPTRONIC CNC controllers use?', answer: 'OPTRONIC CNC controllers run OAGLinux, a Linux-based industrial real-time operating system developed specifically for demanding industrial applications. It requires less than 12MB of main memory, offers hard real-time capability, and supports TCP/IP networking with SMB, NFS, and FTP protocols.' },
      { question: 'Can the CNC D571 replace older flying saw controllers?', answer: 'Yes, the CNC D571 can replace older OPTRONIC controllers D115, D141, D151, and D171 in appropriate configuration. The D571C variant is specifically designed for retrofit applications.' },
    ]},
    { category: 'Orders & Service', faqs: [
      { question: 'How do I request a quote?', answer: 'You can request a quote through our Contact page or by emailing sales@optronic.ch. Please include the product type, quantity, and any specific requirements. Our team typically responds within 24 hours.' },
      { question: 'Do you offer repair services?', answer: 'Yes, OPTRONIC provides professional repair services for all our products, including legacy systems. Contact our support team at support@optronic.ch with the device type, serial number, and description of the issue.' },
      { question: 'What is the typical lead time for spare parts?', answer: 'Lead times vary depending on the part. Many common spare parts are available from stock. For specific availability and lead times, contact our sales team with the article number from the relevant component list.' },
    ]},
  ];

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const allFaqs = faqCategories.flatMap((cat, catIndex) =>
    cat.faqs.map((faq, faqIndex) => ({ ...faq, category: cat.category, globalIndex: catIndex * 100 + faqIndex }))
  );

  const filteredFaqs = searchTerm
    ? allFaqs.filter((faq) => faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    : allFaqs;

  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our products, services, and support"
      />

      <section className="border-b bg-op-surface py-8">
        <Container>
          <div className="relative mx-auto max-w-3xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-op-body" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-op-border-ui py-3 pl-12 pr-4 outline-none focus:border-op-primary focus:ring-2 focus:ring-op-primary/20"
            />
          </div>
        </Container>
      </section>

      <Section variant="surface" spacing="default">
        <Container narrow>
          {searchTerm ? (
            <div className="space-y-4">
              <p className="mb-6 text-op-body">Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''}</p>
              {filteredFaqs.map((faq) => (
                <Card key={faq.globalIndex} className="overflow-hidden">
                  <CardContent className="p-0">
                    <button onClick={() => toggleFaq(faq.globalIndex)} className="flex w-full items-start justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-op-surface-muted">
                      <div className="flex-1">
                        <p className="mb-1 text-xs text-op-primary">{faq.category}</p>
                        <p className="text-op-ink">{faq.question}</p>
                      </div>
                      <ChevronDown className={`mt-1 h-5 w-5 flex-shrink-0 text-op-body transition-transform ${openFaq === faq.globalIndex ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === faq.globalIndex && (
                      <div className="border-t bg-op-surface-muted px-6 pb-4 pt-2 text-op-body">{faq.answer}</div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {faqCategories.map((category, catIndex) => (
                <div key={category.category}>
                  <h2 className="mb-6 text-2xl font-normal text-op-ink">{category.category}</h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = catIndex * 100 + faqIndex;
                      return (
                        <Card key={globalIndex} className="overflow-hidden">
                          <CardContent className="p-0">
                            <button onClick={() => toggleFaq(globalIndex)} className="flex w-full items-start justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-op-surface-muted">
                              <p className="flex-1 text-op-ink">{faq.question}</p>
                              <ChevronDown className={`mt-1 h-5 w-5 flex-shrink-0 text-op-body transition-transform ${openFaq === globalIndex ? 'rotate-180' : ''}`} />
                            </button>
                            {openFaq === globalIndex && (
                              <div className="border-t bg-op-surface-muted px-6 pb-4 pt-2 text-op-body">{faq.answer}</div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          <Card className="mt-12 bg-op-secondary text-op-on-dark">
            <CardContent className="p-8 text-center">
              <h3 className="mb-4 text-2xl">{t.faqsPage.stillHaveQuestions}</h3>
              <p className="mb-6 text-op-on-dark-muted">{t.faqsPage.stillHaveQuestionsDesc}</p>
              <Button variant="secondary" asChild>
                <Link href="/support/contact">{t.common.contactSupport}</Link>
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
