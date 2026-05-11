import type { Metadata } from 'next'
import { SensorsPage } from '@/views/SensorsPage'

export const metadata: Metadata = {
  title: 'Sensors',
  description: 'OPTRONIC precision sensors: LVMC digital light screens, LV..M light curtains, G15/G35 measuring light barriers, OG incremental encoders, IRV/IRT inductive sensors, IGV encoder expanders.',
}

export default function Page() {
  return <SensorsPage />
}
