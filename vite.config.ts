import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Your repository name is 'a-carder'
  base: "/a-carder/", 
  plugins: [react()],
})
