import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  eslint:{
    ignoreDuringBuilds:true,
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './src/main.jsx', // Specify your entry point here
    }
  }
})
