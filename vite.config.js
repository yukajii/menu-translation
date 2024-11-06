import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Changed from '/menu-translation/' to '/' since we're using a custom domain
  plugins: [react()]
})