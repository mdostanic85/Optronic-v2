import { useState, useRef, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getSupportNavItems } from '../lib/supportConfig'

const logoImage = '/assets/logo.webp'

type SupportNavLink = { path: string; label: string }

type NavItem =
  | { path: string; label: string }
  | { label: string; productDropdown: true }
  | { label: string; path: string; supportDropdown: SupportNavLink[] }

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [activeProductSection, setActiveProductSection] = useState<string>('sensors')
  const [openMobileProductSection, setOpenMobileProductSection] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { locale, t } = useLanguage()
  const { pathname } = useLocation()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const lp = (path: string) => `/${locale}${path}`
  const supportNavItems = getSupportNavItems(t)

  const navItems: NavItem[] = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { label: t.nav.products, productDropdown: true },
    { label: t.nav.support, path: '/support', supportDropdown: supportNavItems },
    { path: '/support/downloads', label: t.nav.downloads },
    { path: '/contact', label: t.nav.contact },
  ]

  const productMenuSections = [
    {
      id: 'sensors',
      title: t.nav.sensors,
      path: '/products/sensors',
      links: [
        { path: '/products/lvmc', label: 'LVMC' },
        { path: '/products/lvm', label: 'LV..M' },
        { path: '/products/g15-g35', label: 'G15 / G35' },
        { path: '/products/og', label: 'OG23D / OG28D' },
        { path: '/products/irv-irt', label: 'IRV / IRT' },
        { path: '/products/igv', label: 'IGV' },
      ],
    },
    {
      id: 'control-systems',
      title: t.nav.controlSystems,
      path: '/products/control-systems',
      links: [
        { path: '/products/d500-e3000', label: 'CNC D500 / E3000' },
        { path: '/products/oaglinux', label: 'OAGLinux' },
        { path: '/products/d571', label: 'CNC D571' },
      ],
    },
  ]

  const isActive = (path: string) => pathname === lp(path)
  const isDropdownActive = (paths: string[]) => paths.some((path) => isActive(path))
  const isSupportDropdownActive = () =>
    supportNavItems.some((item) => isActive(item.path)) ||
    (pathname.startsWith(`${lp('/support')}/`) &&
      !isActive('/support/downloads') &&
      !isActive('/support/documentation') &&
      !isActive('/support/faqs') &&
      !isActive('/support/contact'))

  const hasProductDropdown = (item: NavItem): item is { label: string; productDropdown: true } =>
    'productDropdown' in item && item.productDropdown === true

  const hasSupportDropdown = (
    item: NavItem,
  ): item is { label: string; path: string; supportDropdown: SupportNavLink[] } => 'supportDropdown' in item

  useEffect(() => {
    setOpenDropdown(null)
    setIsOpen(false)
    setOpenMobileProductSection(null)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setOpenDropdown(label)
  }, [])

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }, [])

  return (
    <nav className={`font-op-display sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-[0_1px_0_rgba(15,23,42,0.06)]' : ''}`}>
      <div className="mx-auto max-w-op-container px-op-gutter">
        <div className="flex h-16 items-center justify-between">
          <Link to={lp('/')} className="flex items-center">
            <img src={logoImage} alt="OPTRONIC" className="h-[1.575rem] w-auto" width="242" height="25" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => (hasProductDropdown(item) || hasSupportDropdown(item)) && handleMouseEnter(item.label)}
                onMouseLeave={() => (hasProductDropdown(item) || hasSupportDropdown(item)) && handleMouseLeave()}
              >
                {hasProductDropdown(item) ? (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        ;(e.currentTarget as HTMLButtonElement).blur()
                      }}
                      className={`px-3.5 py-2 rounded-lg transition-all duration-200 flex items-center gap-1.5 text-xs font-medium ${
                        openDropdown === item.label || isDropdownActive(productMenuSections.map((section) => section.path))
                          ? 'text-op-primary bg-op-primary-muted'
                          : 'text-op-body-strong hover:text-op-ink hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="w-64 rounded-xl bg-white shadow-[0_8px_30px_rgba(15,23,42,0.12)] border border-slate-100 p-2">
                          <div className="space-y-1">
                            {productMenuSections.map((section) => (
                              <div key={section.id} className="relative">
                                <Link
                                  to={lp(section.path)}
                                  onMouseEnter={() => setActiveProductSection(section.id)}
                                  onFocus={() => setActiveProductSection(section.id)}
                                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                                    activeProductSection === section.id || isActive(section.path)
                                      ? 'bg-op-primary-muted text-op-primary'
                                      : 'text-op-body-strong hover:bg-slate-50 hover:text-op-ink'
                                  }`}
                                >
                                  <span>{section.title}</span>
                                  <ChevronRight className="h-3.5 w-3.5" />
                                </Link>

                                {activeProductSection === section.id && (
                                  <div className="absolute left-full top-0 ml-2 w-72 rounded-xl bg-white shadow-[0_8px_30px_rgba(15,23,42,0.12)] border border-slate-100 p-2 z-50">
                                    {section.links.map((sub) => (
                                      <Link
                                        key={sub.path}
                                        to={lp(sub.path)}
                                        className={`block px-3.5 py-2.5 rounded-lg text-xs transition-all duration-150 ${
                                          isActive(sub.path) ? 'bg-op-primary-muted text-op-primary font-medium' : 'text-op-body-strong hover:bg-slate-50 hover:text-op-ink'
                                        }`}
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : hasSupportDropdown(item) ? (
                  <>
                    <Link
                      to={lp(item.path)}
                      className={`px-3.5 py-2 rounded-lg transition-all duration-200 flex items-center gap-1.5 text-xs font-medium ${
                        openDropdown === item.label || isSupportDropdownActive()
                          ? 'text-op-primary bg-op-primary-muted'
                          : 'text-op-body-strong hover:text-op-ink hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </Link>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="w-[22rem] max-w-[calc(100vw-2rem)] rounded-xl bg-white shadow-[0_8px_30px_rgba(15,23,42,0.12)] border border-slate-100 p-2">
                          <div className="space-y-1">
                            {item.supportDropdown.map((sub) => (
                              <Link
                                key={sub.path}
                                to={lp(sub.path)}
                                className={`block px-3.5 py-2.5 rounded-lg text-xs transition-all duration-150 ${
                                  isActive(sub.path) ? 'bg-op-primary-muted text-op-primary font-medium' : 'text-op-body-strong hover:bg-slate-50 hover:text-op-ink'
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={lp(item.path)}
                    className={`px-3.5 py-2 rounded-lg transition-all duration-200 text-xs font-medium ${
                      isActive(item.path) ? 'text-op-primary bg-op-primary-muted' : 'text-op-body-strong hover:text-op-ink hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="ml-2 h-5 w-px bg-slate-200" />

            <div className="ml-2 inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5">
              <Link
                to={`/en${pathname.replace(/^\/(en|de)/, '')}`}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  locale === 'en' ? 'bg-op-primary text-white' : 'text-op-body-strong hover:bg-slate-50'
                }`}
              >
                EN
              </Link>
              <Link
                to={`/de${pathname.replace(/^\/(en|de)/, '')}`}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  locale === 'de' ? 'bg-op-primary text-white' : 'text-op-body-strong hover:bg-slate-50'
                }`}
              >
                DE
              </Link>
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-slate-50 transition-colors" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-0.5 max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label}>
                {hasProductDropdown(item) ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-op-body-strong hover:bg-slate-50 font-medium transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-4 mt-0.5 space-y-0.5">
                        {productMenuSections.map((section) => (
                          <div key={section.title} className="mt-1">
                            <div className="flex items-center gap-1">
                              <Link
                                to={lp(section.path)}
                                onClick={() => setIsOpen(false)}
                                className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors ${
                                  isActive(section.path) ? 'bg-op-primary-muted text-op-primary' : 'text-op-body-muted hover:bg-slate-50'
                                }`}
                              >
                                {section.title}
                              </Link>
                              <button
                                onClick={() => setOpenMobileProductSection(openMobileProductSection === section.id ? null : section.id)}
                                aria-label={`Toggle ${section.title} submenu`}
                                className="rounded-lg p-2 text-op-body-muted hover:bg-slate-50 transition-colors"
                              >
                                <ChevronDown className={`w-4 h-4 transition-transform ${openMobileProductSection === section.id ? 'rotate-180' : ''}`} />
                              </button>
                            </div>
                            {openMobileProductSection === section.id &&
                              section.links.map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={lp(sub.path)}
                                  onClick={() => setIsOpen(false)}
                                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                    isActive(sub.path) ? 'bg-op-primary-muted text-op-primary font-medium' : 'text-op-body hover:bg-slate-50'
                                  }`}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : hasSupportDropdown(item) ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-op-body-strong hover:bg-slate-50 font-medium transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-4 mt-0.5 space-y-0.5">
                        {item.supportDropdown.map((sub) => (
                          <Link
                            key={sub.path}
                            to={lp(sub.path)}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                              isActive(sub.path) ? 'bg-op-primary-muted text-op-primary font-medium' : 'text-op-body hover:bg-slate-50'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={lp(item.path)}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg transition-colors font-medium ${
                      isActive(item.path) ? 'bg-op-primary-muted text-op-primary' : 'text-op-body-strong hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-3 border-t border-slate-100 pt-3">
              <div className="inline-flex w-full items-center rounded-lg border border-slate-200 bg-white p-0.5">
                <Link
                  to={`/en${pathname.replace(/^\/(en|de)/, '')}`}
                  className={`w-1/2 rounded-md px-3 py-2 text-sm font-semibold transition-colors text-center ${
                    locale === 'en' ? 'bg-op-primary text-white' : 'text-op-body-strong hover:bg-slate-50'
                  }`}
                >
                  EN
                </Link>
                <Link
                  to={`/de${pathname.replace(/^\/(en|de)/, '')}`}
                  className={`w-1/2 rounded-md px-3 py-2 text-sm font-semibold transition-colors text-center ${
                    locale === 'de' ? 'bg-op-primary text-white' : 'text-op-body-strong hover:bg-slate-50'
                  }`}
                >
                  DE
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
