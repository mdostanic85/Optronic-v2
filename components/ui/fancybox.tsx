

import { type ReactNode, useEffect, useRef } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox/';

type FancyboxProps = {
  children: ReactNode;
  delegate?: string;
  options?: Record<string, unknown>;
};

export function Fancybox({ children, delegate = '[data-fancybox]', options = {} }: FancyboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<Record<string, unknown>>(options);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    NativeFancybox.bind(container, delegate, optionsRef.current);

    return () => {
      NativeFancybox.unbind(container);
    };
  }, [delegate]);

  return <div ref={containerRef}>{children}</div>;
}
