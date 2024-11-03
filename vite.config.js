import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/menu-translation/',  // Make sure this matches your repository name
  plugins: [react()]
})