import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Serve at the domain root locally, and at the repository path on GitHub Pages.
  base: command === "build" ? "/portofolio/" : "/",
  plugins: [react(), tailwindcss()],
}))
