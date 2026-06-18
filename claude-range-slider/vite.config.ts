/**
 * @file        vite.config.ts
 * @author      Astraeus
 * @created     2026-06-18 20:08:51 UTC
 * @license     MIT
 *
 * Vite build configuration with React and Tailwind CSS v4 plugins.
 *
 * @disclaimer
 * This file is released under the MIT License. Anyone may use it for any
 * purpose. The author accepts no liability for any outcome arising from its use.
 * All rights and final interpretation of this file are reserved by the author.
 * To contact the author: astraeuszhao@gmail.com
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
