import type { Metadata } from 'next'
import { OAGLinuxPage } from '@/views/products/OAGLinuxPage'

export const metadata: Metadata = {
  title: 'OAGLinux Real-Time Operating System',
  description: 'OAGLinux – Linux-based industrial real-time operating system. Less than 12MB memory, hard real-time capability, TCP/IP networking.',
}

export default function Page() {
  return <OAGLinuxPage />
}
