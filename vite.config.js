import { defineConfig } from 'vite'

export default defineConfig({
  base: '/workoutapp/',   // e.g. '/camera-app/'
  build: { outDir: 'docs' }   // GitHub Pages will serve /docs from main
})
