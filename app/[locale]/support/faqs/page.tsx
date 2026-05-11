import type { Metadata } from 'next'
import { FAQsPage } from '@/views/FAQsPage'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about OPTRONIC products, sensors, CNC control systems, support services, and spare parts.',
}

export default function Page() {
  return <FAQsPage />
}
