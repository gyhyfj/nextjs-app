import { defineConfig } from 'vitest/config'
import autoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    autoImport({
      imports: ['vitest'],
      dts: true, // generate TypeScript declaration
    }),
  ],
  // define: {
  //   'import.meta.vitest': 'undefined',
  // }, // only for vite
  test: {
    environment: 'jsdom',
    includeSource: ['src/**/*.{js,ts,jsx,tsx}'],
  },
})
