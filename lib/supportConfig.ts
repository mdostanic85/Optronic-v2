/** Support section routes and overview gallery — aligned with optronic.ch/support */
export const SUPPORT_DETAIL_IDS = [
  'omc300',
  'cnc-obsolete',
  'component-lists',
  'fsu200',
  'lv-obsolete',
  'og-obsolete',
] as const;

export type SupportDetailId = (typeof SUPPORT_DETAIL_IDS)[number];

export const SUPPORT_OVERVIEW_GALLERY = [
  {
    id: 'e3000',
    src: 'https://www.optronic.ch/wp-content/uploads/2022/02/e3000.jpg',
    alt: 'e3000',
    path: '/support/component-lists',
  },
  {
    id: 'e100',
    src: 'https://www.optronic.ch/wp-content/uploads/2022/02/e100.jpg',
    alt: 'e100',
    path: '/support/cnc-obsolete',
  },
  {
    id: 'd107_d140',
    src: 'https://www.optronic.ch/wp-content/uploads/2022/02/d107_d140.jpg',
    alt: 'd107_d140',
    path: '/support/component-lists',
  },
  {
    id: 'd111_d115_d141',
    src: 'https://www.optronic.ch/wp-content/uploads/2022/02/d111_d115_d141.jpg',
    alt: 'd111_d115_d141',
    path: '/support/component-lists',
  },
  {
    id: 'gf',
    src: 'https://www.optronic.ch/wp-content/uploads/2022/02/gf.jpg',
    alt: 'gf',
    path: '/support/component-lists',
  },
  {
    id: 'fsu_crt',
    src: 'https://www.optronic.ch/wp-content/uploads/2022/02/fsu_crt.jpg',
    alt: 'fsu_crt',
    path: '/support/fsu200',
  },
  {
    id: 'lv100',
    src: 'https://www.optronic.ch/wp-content/uploads/2022/02/lv100.jpg',
    alt: 'lv100',
    path: '/support/lv-obsolete',
  },
  {
    id: 'og_flange',
    src: 'https://www.optronic.ch/wp-content/uploads/2022/02/og_flange.jpg',
    alt: 'og_flange',
    path: '/support/og-obsolete',
  },
  {
    id: 'd145',
    src: 'https://www.optronic.ch/wp-content/uploads/2022/02/d145.jpg',
    alt: 'd145',
    path: '/support/omc300',
  },
  {
    id: 'd376_d377',
    src: 'https://www.optronic.ch/wp-content/uploads/2022/02/d376_d377.jpg',
    alt: 'd376_d377',
    path: '/support/component-lists',
  },
] as const;

export function getSupportNavItems(t: {
  support: { overview: string };
  supportDetails: { categories: Record<string, { title: string }> };
}) {
  const c = t.supportDetails.categories;
  return [
    { path: '/support', label: t.support.overview },
    { path: '/support/hints', label: c.importantHints.title },
    { path: '/support/omc300', label: c.omc300.title },
    { path: '/support/cnc-obsolete', label: c.cncObsolete.title },
    { path: '/support/component-lists', label: c.componentLists.title },
    { path: '/support/fsu200', label: c.fsu200.title },
    { path: '/support/lv-obsolete', label: c.lvObsolete.title },
    { path: '/support/og-obsolete', label: c.ogObsolete.title },
  ];
}
