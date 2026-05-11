'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { locale, t } = useLanguage()

  const lp = (path: string) => `/${locale}${path}`

  return (
    <footer className="bg-[#0f172a] text-slate-400">
      <div className="mx-auto max-w-op-container px-op-gutter">
        <div className="grid grid-cols-1 gap-10 border-b border-white/[0.06] py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src="/assets/on_dark.svg" alt="OPTRONIC" className="h-[1.7rem] w-auto max-w-[min(100%,238px)]" width="276" height="27" />
            </div>
            <p className="mb-5 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <img src="/assets/swiss-made.svg?v=20260401" alt="Swiss Made" className="mb-5 h-[calc(1.75rem*1.15*1.18)] w-auto max-w-[min(100%,230px)]" width="92" height="32" />
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">{t.footer.products}</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href={lp('/products/lvmc')} className="transition-colors hover:text-white">{t.footer.lvmcLink}</Link></li>
              <li><Link href={lp('/products/sensors')} className="transition-colors hover:text-white">{t.footer.sensorsLink}</Link></li>
              <li><Link href={lp('/products/control-systems')} className="transition-colors hover:text-white">{t.footer.controlSystemsLink}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">{t.footer.support}</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href={lp('/support/downloads')} className="transition-colors hover:text-white">{t.footer.downloadsLink}</Link></li>
              <li><Link href={lp('/support/documentation')} className="transition-colors hover:text-white">{t.footer.documentationLink}</Link></li>
              <li><Link href={lp('/support/faqs')} className="transition-colors hover:text-white">{t.footer.faqsLink}</Link></li>
              <li><Link href={lp('/support/contact')} className="transition-colors hover:text-white">{t.footer.contactSupportLink}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">{t.footer.contactUs}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" />
                <span>OPTRONIC AG<br />Unteregger Strasse 53<br />CH-9403 Goldach</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-slate-500" />
                <a href="tel:+41718440200" className="transition-colors hover:text-white">+41 (0)71 844 02 00</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-slate-500" />
                <a href="mailto:sales@optronic.ch" className="transition-colors hover:text-white">sales@optronic.ch</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-slate-400 md:flex-row">
          <p>© {currentYear} OPTRONIC AG. {t.footer.rights}</p>
          <div className="flex gap-6">
            <Link href={lp('/privacy')} className="transition-colors hover:text-slate-200">{t.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
