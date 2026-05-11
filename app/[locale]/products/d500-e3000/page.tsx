import type { Metadata } from 'next'
import { D500E3000Page } from '@/views/products/D500E3000Page'

export const metadata: Metadata = {
  title: 'CNC D500 / E3000 Controller',
  description: 'CNC D500 multi-axis controller with E3000 operating station. Modular CompactPCI architecture, SERCOS drives, OAGLinux real-time OS.',
}

export default function Page() {
  return <D500E3000Page />
}
