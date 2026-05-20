import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '..', 'dist')

const BASE_URL = 'https://www.optronic.ch'

const content = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
Host: ${BASE_URL}
`

writeFileSync(resolve(distDir, 'robots.txt'), content, 'utf-8')
console.log('robots.txt written')
