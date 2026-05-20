

import type { ReactNode } from 'react';
import { cn } from '../ui/utils';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Narrow column for CTAs / Swiss block */
  narrow?: boolean;
};

/**
 * Horizontal max-width + gutters. Matches Figma content width (1216px).
 */
export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-op-gutter',
        narrow ? 'max-w-op-narrow' : 'max-w-op-container',
        className,
      )}
    >
      {children}
    </div>
  );
}
