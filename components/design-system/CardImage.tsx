import { ImageWithFallback } from '../figma/ImageWithFallback';
import { cn } from '../ui/utils';

type CardImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function CardImage({ src, alt, className }: CardImageProps) {
  return (
    <div className={cn('relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-white', className)}>
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <ImageWithFallback src={src} alt={alt} className="max-h-full max-w-full object-contain" />
      </div>
    </div>
  );
}
