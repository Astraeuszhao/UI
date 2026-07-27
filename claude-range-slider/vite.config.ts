/**
 * @file        vite.config.ts
 * @author      Astraeus
 * @created     2026-06-18 20:08:51 UTC
 * @license     Apache-2.0
 *
 * Vite build configuration with React and Tailwind CSS v4 plugins.
 *
 * @disclaimer
 * This file is distributed under Apache License 2.0. The software is provided "as is", without warranty of any kind. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: astraeuszhao@gmail.com
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 1313,
    host: '0.0.0.0',
  },
})
