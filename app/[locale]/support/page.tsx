import type { Metadata } from 'next'
import { SupportPage } from '@/views/SupportPage'

export const metadata: Metadata = {
  title: 'Support',
  description: 'OPTRONIC support, repair, and retrofit services. Legacy system support, spare parts, component lists, and CRT monitor replacements for industrial control systems.',
}

export default function Page() {
  return <SupportPage />
}
