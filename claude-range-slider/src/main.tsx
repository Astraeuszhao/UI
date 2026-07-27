/**
 * @file        main.tsx
 * @author      Astraeus
 * @created     2026-06-18 20:08:51 UTC
 * @license     Apache-2.0
 *
 * Application entry point. Mounts the React root into the DOM.
 *
 * @disclaimer
 * This file is distributed under Apache License 2.0. The software is provided "as is", without warranty of any kind. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: astraeuszhao@gmail.com
 */

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found.')

createRoot(rootElement).render(<App />)
