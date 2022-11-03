import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: '',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'widget.js',
        assetFileNames: 'widget.[ext]'
      },
    
    },
  }
})
