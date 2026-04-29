import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For custom domain, set base to '/'
  // For GitHub Pages without custom domain: base: '/<repo-name>/'
  base: '/',
})
