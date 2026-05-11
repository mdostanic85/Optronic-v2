import type { Metadata } from 'next'
import { LVMPage } from '@/views/products/LVMPage'

export const metadata: Metadata = {
  title: 'LV..M Light Curtains',
  description: 'LV..M light curtain system for detecting and counting small objects. Gapless sensing area, high sampling rate, minimum object size 0.6mm.',
}

export default function Page() {
  return <LVMPage />
}
