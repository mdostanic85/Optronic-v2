import { Navigate, useLocation } from 'react-router-dom'
import { detectLocale } from './RootLocaleRedirect'
import { localePath } from '../../lib/localePath'

/** Redirects bare paths (e.g. /products/lvmc) to the locale-prefixed route. */
export function LocalePathRedirect() {
  const { pathname, search, hash } = useLocation()
  const locale = detectLocale()
  const target = localePath(locale, pathname) + search + hash
  return <Navigate to={target} replace />
}
