import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/pagespeed": "http://localhost:9090",
      "/leads": "http://localhost:9090",
    },
  },
})
