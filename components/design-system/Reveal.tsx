'use client'

import { useEffect, useState, type ReactNode, type CSSProperties, type ElementType } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { cn } from '../ui/utils';

type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale' | 'fade-down';

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  threshold?: number;
  once?: boolean;
};

const hiddenStyles: Record<RevealVariant, CSSProperties> = {
  'fade-up': { opacity: 0, transform: 'translateY(24px)' },
  'fade-down': { opacity: 0, transform: 'translateY(-24px)' },
  'fade-in': { opacity: 0 },
  'slide-left': { opacity: 0, transform: 'translateX(-32px)' },
  'slide-right': { opacity: 0, transform: 'translateX(32px)' },
  'scale': { opacity: 0, transform: 'scale(0.95)' },
};

const visibleStyles: CSSProperties = {
  opacity: 1,
  transform: 'translate(0) scale(1)',
};

export function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  className,
  as: Tag = 'div',
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold, once });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const shouldShow = !hasMounted || isVisible;

  const style: CSSProperties = {
    ...(shouldShow ? visibleStyles : hiddenStyles[variant]),
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  };

  return (
    <Tag ref={ref} className={cn(className)} style={style}>
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode[];
  variant?: RevealVariant;
  stagger?: number;
  duration?: number;
  className?: string;
  childClassName?: string;
  threshold?: number;
};

export function RevealStagger({
  children,
  variant = 'fade-up',
  stagger = 0.1,
  duration = 0.5,
  className,
  childClassName,
  threshold = 0.1,
}: StaggerProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const shouldShow = !hasMounted || isVisible;

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => {
        const delay = i * stagger;
        const style: CSSProperties = {
          ...(shouldShow ? visibleStyles : hiddenStyles[variant]),
          transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        };
        return (
          <div key={i} style={style} className={childClassName}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
