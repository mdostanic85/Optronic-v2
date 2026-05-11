import type { Metadata } from 'next'
import { ControlSystemsPage } from '@/views/ControlSystemsPage'

export const metadata: Metadata = {
  title: 'Control Systems',
  description: 'OPTRONIC CNC control systems: D500/E3000 multi-axis controller, OAGLinux real-time operating system, D571 flying saw controller for industrial manufacturing.',
}

export default function Page() {
  return <ControlSystemsPage />
}
