import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Section } from './Section';
import { Container } from './Container';
import { SEO } from '../../src/components/SEO';

export type ProductPageSection = {
  heading: string;
  items?: string[];
  paragraphs?: string[];
};

export type ProductPageTable = {
  heading: string;
  headers: string[];
  rows: string[][];
};

export type ProductPageBlock =
  | ({ type: 'section' } & ProductPageSection)
  | ({ type: 'table' } & ProductPageTable);

export type ProductPageData = {
  seoTitle: string;
  seoDescription: string;
  title: string;
  subtitle?: string;
  downloads: { label: string; href: string }[];
  intro?: string[];
  /** Ordered content blocks (matches live page section order). */
  blocks?: ProductPageBlock[];
  sections?: ProductPageSection[];
  tables?: ProductPageTable[];
};

type ProductDetailLayoutProps = {
  backTo: string;
  backLabel: string;
  data: ProductPageData;
};

function resolveBlocks(data: ProductPageData): ProductPageBlock[] {
  if (data.blocks) return data.blocks;
  return [
    ...(data.sections ?? []).map((section) => ({ type: 'section' as const, ...section })),
    ...(data.tables ?? []).map((table) => ({ type: 'table' as const, ...table })),
  ];
}

export function ProductDetailLayout({ backTo, backLabel, data }: ProductDetailLayoutProps) {
  const blocks = resolveBlocks(data);

  return (
    <div className="bg-op-surface">
      <SEO title={data.seoTitle} description={data.seoDescription} />
      <PageHeader title={data.title} description={data.subtitle}>
        <div className="mt-6">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-op-on-dark-muted transition-colors hover:text-op-on-dark"
          >
            <ArrowLeft className="h-4 w-4" /> {backLabel}
          </Link>
        </div>
      </PageHeader>

      <Section variant="surface" spacing="default">
        <Container narrow>
          {data.downloads.length > 0 ? (
            <ul id="downloads" className="mb-10 list-none space-y-2">
              {data.downloads.map((download) => (
                <li key={download.href}>
                  <a
                    href={download.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-op-primary hover:underline"
                  >
                    {download.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}

          {data.intro?.map((paragraph) => (
            <p key={paragraph} className="mb-6 text-base leading-relaxed text-op-body">
              {paragraph}
            </p>
          ))}

          {blocks.map((block) =>
            block.type === 'section' ? (
              <div key={block.heading} className="mb-10">
                <h2 className="mb-4 text-xl font-medium text-op-ink">{block.heading}</h2>
                {block.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mb-4 text-base leading-relaxed text-op-body">
                    {paragraph}
                  </p>
                ))}
                {block.items && block.items.length > 0 ? (
                  <ul className="list-disc space-y-2 pl-6 text-base text-op-body">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : (
              <div key={block.heading} className="mb-10">
                <h2 className="mb-4 text-xl font-medium text-op-ink">{block.heading}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-op-border text-left text-sm">
                    <thead>
                      <tr className="bg-op-surface-muted">
                        {block.headers.map((header) => (
                          <th key={header} className="border border-op-border px-4 py-3 font-medium text-op-ink">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row) => (
                        <tr key={row.join('|')} className="text-op-body">
                          {row.map((cell, cellIndex) => (
                            <td key={`${row[0]}-${cellIndex}`} className="border border-op-border px-4 py-3 align-top">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ),
          )}
        </Container>
      </Section>
    </div>
  );
}
