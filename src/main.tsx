import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './router'
import '../styles/globals.css'

export const createRoot = ViteReactSSG(
  { routes },
)
