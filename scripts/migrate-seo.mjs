/**
 * Replaces useDocumentHead(title, desc) with <SEO .../> in view files.
 * Run: node scripts/migrate-seo.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const base = resolve(__dirname, '..')

const files = [
  ['views/AboutPage.tsx',                  'About OPTRONIC',                              'OPTRONIC AG \u2013 Swiss manufacturer of precision industrial sensors and CNC control systems based in Goldach. Decades of engineering excellence.'],
  ['views/ContactPage.tsx',                'Contact',                                     'Contact OPTRONIC AG in Goldach, Switzerland. Get in touch for product inquiries, technical support, quotes, and custom solutions.'],
  ['views/ControlSystemsPage.tsx',         'Control Systems',                             'OPTRONIC CNC control systems: D500/E3000 multi-axis controller, OAGLinux real-time operating system, D571 flying saw controller for industrial manufacturing.'],
  ['views/DocumentationPage.tsx',          'Technical Documentation',                     'Find product manuals, datasheets, and technical specifications for all OPTRONIC sensors and control systems.'],
  ['views/DownloadsPage.tsx',              'Downloads',                                   'Download product manuals, datasheets, software, and technical documentation for OPTRONIC sensors and CNC control systems.'],
  ['views/FAQsPage.tsx',                   'FAQ',                                         'Frequently asked questions about OPTRONIC products, sensors, CNC control systems, support services, and spare parts.'],
  ['views/HomePage.tsx',                   'Industrial Sensors & CNC Control Systems',    'OPTRONIC AG \u2013 Swiss-engineered precision sensors (LVMC, light curtains, encoders) and CNC control systems for industrial automation and manufacturing.'],
  ['views/PrivacyPage.tsx',                'Privacy Policy',                              'OPTRONIC AG privacy policy and data protection information.'],
  ['views/ProductsPage.tsx',               'Products',                                    'Explore OPTRONIC industrial sensors and CNC control systems. Digital light screens, light curtains, encoders, multi-axis CNC controllers, and real-time operating systems.'],
  ['views/SensorsPage.tsx',                'Sensors',                                     'OPTRONIC precision sensors: LVMC digital light screens, LV..M light curtains, G15/G35 measuring light barriers, OG incremental encoders, IRV/IRT inductive sensors, IGV encoder expanders.'],
  ['views/ServicesPage.tsx',               'Services',                                    'OPTRONIC engineering services: CNC system development, repair and retrofit, sensor integration, and technical support.'],
  ['views/SupportContactPage.tsx',         'Contact Support',                             'Submit a support request to OPTRONIC. Get help with technical issues, spare parts, repairs, and configuration.'],
  ['views/SupportHintsPage.tsx',           'Important Hints for Support Requests',        'Device identification information required for OPTRONIC support requests \u2014 type plates, labels, article numbers, and serial numbers.'],
  ['views/SupportPage.tsx',               'Support',                                     'OPTRONIC support, repair, and retrofit services. Legacy system support, spare parts, component lists, and CRT monitor replacements for industrial control systems.'],
  ['views/TechnicalSupportPage.tsx',       'Technical Support',                           'OPTRONIC technical support services: troubleshooting, maintenance, on-site support, and warranty service for industrial sensors and CNC systems.'],
  ['views/products/D500E3000Page.tsx',     'CNC D500 / E3000 Controller',                 'CNC D500 multi-axis controller with E3000 operating station. Modular CompactPCI architecture, SERCOS drives, OAGLinux real-time OS.'],
  ['views/products/D571Page.tsx',          'CNC D571 Flying Saw Controller',              'The CNC D571 is based on the CompactPCI system D500 and the operating station E3000 for synchronous running cutting-to-length devices.'],
  ['views/products/G15G35Page.tsx',        'G15/G35 Measuring Light Barriers',            'G15 and G35 measuring light barriers for precision length measurement. Response time 100\u00b5s, accuracy \u00b10.5mm, IP65 protection.'],
  ['views/products/IGVPage.tsx',           'IGV Incremental Encoder Expanders',           'IGV encoder expanders to connect one incremental encoder electrically isolated to up to three targets (CNC, PLC, measurement equipment).'],
  ['views/products/IRVIRTPage.tsx',        'IRV/IRT Inductive Loop Sensors',              'Self-adjusting inductive loop sensors IRV/IRT for contact-free detection of metallic material in tube processing and industrial applications.'],
  ['views/products/LVMCPage.tsx',          'LVMC Digital Light Screens',                  'LVMC digital light curtain system for detecting, counting, measuring, and classifying objects. High-resolution optical sensors with integrated Linux computer.'],
  ['views/products/LVMPage.tsx',           'LV..M Light Curtains',                        'LV..M light curtain system for detecting and counting small objects. Gapless sensing area, high sampling rate, minimum object size 0.6mm.'],
  ['views/products/OAGLinuxPage.tsx',      'OAGLinux Real-Time Operating System',         'OAGLinux \u2013 Linux-based industrial real-time operating system. Less than 12MB memory, hard real-time capability, TCP/IP networking.'],
  ['views/products/OGPage.tsx',            'OG23D/OG28D Incremental Encoders',            'Rugged photoelectrical incremental encoders OG23D and OG28D. Resolution up to 625 pulses/rev, 5000rpm max speed, IP65 protection.'],
]

for (const [relPath, title, description] of files) {
  const filePath = resolve(base, relPath)
  let content = readFileSync(filePath, 'utf-8')

  const isProduct = relPath.startsWith('views/products/')
  const seoImportPath = isProduct ? '../../src/components/SEO' : '../src/components/SEO'

  // Remove useDocumentHead import
  content = content.replace(/^import \{ useDocumentHead \} from ['"][^'"]+['"];?\n/m, '')

  // Remove the useDocumentHead(...); call (multi-line, from indented call to closing ");")
  content = content.replace(/\s*useDocumentHead\([^)]*\);\n/m, '\n')
  // Handle multi-line call: useDocumentHead(\n  'title',\n  'desc'\n);
  content = content.replace(/\s*useDocumentHead\(\s*[\s\S]*?\s*\);\n/m, '\n')

  // Add SEO import after the last existing import line
  const importMatches = [...content.matchAll(/^import .+\n/gm)]
  if (importMatches.length > 0) {
    const lastImport = importMatches[importMatches.length - 1]
    const insertAt = lastImport.index + lastImport[0].length
    const seoImport = `import { SEO } from '${seoImportPath}';\n`
    if (!content.includes(seoImport) && !content.includes("from '@/src/components/SEO'")) {
      content = content.slice(0, insertAt) + seoImport + content.slice(insertAt)
    }
  }

  // Escape for use in JSX attributes
  const safeTitle = title.replace(/"/g, '&quot;')
  const safeDesc = description.replace(/"/g, '&quot;')
  const seoTag = `      <SEO title="${safeTitle}" description="${safeDesc}" />\n`

  // Insert SEO as first child inside the main component's return (<div or similar)
  // Pattern: "  return (\n    <TAG" → "  return (\n    <TAG\n      <SEO .../>"
  // We insert after the first opening tag line inside "return ("
  content = content.replace(
    /(  return \(\n)(    <[^\n]+\n)/,
    `$1$2${seoTag}`
  )

  writeFileSync(filePath, content, 'utf-8')
  console.log(`\u2713 ${relPath}`)
}

console.log('\nAll done.')
