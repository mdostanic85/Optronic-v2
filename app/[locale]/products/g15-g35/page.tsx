import type { Metadata } from 'next'
import { G15G35Page } from '@/views/products/G15G35Page'

export const metadata: Metadata = {
  title: 'G15/G35 Measuring Light Barriers',
  description: 'G15 and G35 measuring light barriers for precision length measurement. Response time 100µs, accuracy ±0.5mm, IP65 protection.',
}

export default function Page() {
  return <G15G35Page />
}
