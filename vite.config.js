import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Render serves this site from its domain root; GitHub Pages serves it under the repo path.
  base: process.env.RENDER === "true"
    ? "/"
    : command === "build"
      ? "/portofolio/"
      : "/",
  plugins: [react(), tailwindcss()],
}))
