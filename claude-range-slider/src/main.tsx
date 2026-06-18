/**
 * @file        main.tsx
 * @author      Astraeus
 * @created     2026-06-18 20:08:51 UTC
 * @license     MIT
 *
 * Application entry point. Mounts the React root into the DOM.
 *
 * @disclaimer
 * This file is released under the MIT License. Anyone may use it for any
 * purpose. The author accepts no liability for any outcome arising from its use.
 * All rights and final interpretation of this file are reserved by the author.
 * To contact the author: astraeuszhao@gmail.com
 */

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found.')

createRoot(rootElement).render(<App />)
