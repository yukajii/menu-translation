// vite.config.js for testing on GitHub Pages
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/menu-translation/', // Change this for GitHub Pages testing
  plugins: [react()]
})