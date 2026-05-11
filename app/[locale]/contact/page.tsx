import type { Metadata } from 'next'
import { ContactPage } from '@/views/ContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact OPTRONIC AG in Goldach, Switzerland. Get in touch for product inquiries, technical support, quotes, and custom solutions.',
}

export default function Page() {
  return <ContactPage />
}
