import type { ProductPageData } from '@/components/design-system/ProductDetailLayout';
import { deProductPages } from './de';
import { enProductPages } from './en';

export type ProductPageId = keyof typeof deProductPages;

export function getProductPageData(id: ProductPageId, locale: 'de' | 'en'): ProductPageData {
  return locale === 'de' ? deProductPages[id] : enProductPages[id];
}
