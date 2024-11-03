import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/menu-translation/',  // Replace with your actual repo name
  plugins: [react()]
})
