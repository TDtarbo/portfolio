import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages hosts this repository at /portfolio/.
  base: '/portfolio/',
  plugins: [react()],
})
