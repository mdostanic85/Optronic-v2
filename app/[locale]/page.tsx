import type { Metadata } from 'next'
import { HomePage } from '@/views/HomePage'

export const metadata: Metadata = {
  title: 'Industrial Sensors & CNC Control Systems | Swiss Engineering',
  description: 'OPTRONIC AG – Swiss-engineered precision sensors (LVMC, light curtains, encoders) and CNC control systems for industrial automation and manufacturing.',
}

export default function Page() {
  return <HomePage />
}
