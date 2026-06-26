import { Link } from 'react-router-dom'



import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { CardImage } from './CardImage';
import { cn } from '../ui/utils';

type ProductCardProps = {
  to: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
};

export function ProductCard({ to, title, description, imageSrc, imageAlt, className }: ProductCardProps) {
  const { t, lp } = useLanguage();
  return (
    <Link to={lp(to)} className={cn('group flex h-full flex-col', className)}>
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white transition-all duration-300 hover:border-op-primary/20 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.1)] hover:-translate-y-1">
        <CardImage src={imageSrc} alt={imageAlt} />
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-lg font-semibold tracking-tight text-op-ink transition-colors group-hover:text-op-primary">
            {title}
          </h3>
          <p className="mb-4 flex-1 text-xs leading-relaxed text-op-body">{description}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-op-primary">
            {t.common.viewDetails}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
