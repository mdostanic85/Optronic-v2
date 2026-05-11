import type { Metadata } from 'next'
import { LVMCPage } from '@/views/products/LVMCPage'

export const metadata: Metadata = {
  title: 'LVMC Digital Light Screens',
  description: 'LVMC digital light curtain system for detecting, counting, measuring, and classifying objects. High-resolution optical sensors with integrated Linux computer.',
}

export default function Page() {
  return <LVMCPage />
}
