import { Download, ExternalLink } from 'lucide-react';

type DownloadItem = { label: string; href: string };

type ProductDownloadsListProps = {
  downloads: DownloadItem[];
};

export function ProductDownloadsList({ downloads }: ProductDownloadsListProps) {
  return (
    <div id="downloads" className="mx-auto max-w-4xl space-y-3">
      {downloads.map((download) => (
        <a
          key={download.href}
          href={download.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-xl border-2 border-op-border bg-white p-5 transition-all hover:border-op-primary/30 hover:shadow-lg"
        >
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-op-primary-muted transition-colors group-hover:bg-op-primary/20">
              <Download className="h-6 w-6 text-op-primary" />
            </div>
            <span className="text-base text-op-ink transition-colors group-hover:text-op-primary">{download.label}</span>
          </div>
          <ExternalLink className="ml-4 h-5 w-5 flex-shrink-0 text-op-body transition-colors group-hover:text-op-primary" />
        </a>
      ))}
    </div>
  );
}
