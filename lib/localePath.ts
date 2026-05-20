export type Locale = 'en' | 'de'

const LOCALE_PREFIX = /^\/(en|de)(\/|$)/
const STATIC_PREFIXES = ['/downloads', '/assets']

export function localePath(locale: Locale, path: string): string {
  if (!path.startsWith('/')) return path

  const hashIdx = path.indexOf('#')
  const pathname = hashIdx >= 0 ? path.slice(0, hashIdx) : path
  const hash = hashIdx >= 0 ? path.slice(hashIdx) : ''

  if (LOCALE_PREFIX.test(pathname)) return path
  if (STATIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return path

  return `/${locale}${pathname}${hash}`
}
