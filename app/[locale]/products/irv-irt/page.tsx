import type { Metadata } from 'next'
import { IRVIRTPage } from '@/views/products/IRVIRTPage'

export const metadata: Metadata = {
  title: 'IRV/IRT Inductive Loop Sensors',
  description: 'Self-adjusting inductive loop sensors IRV/IRT for contact-free detection of metallic material in tube processing and industrial applications.',
}

export default function Page() {
  return <IRVIRTPage />
}
