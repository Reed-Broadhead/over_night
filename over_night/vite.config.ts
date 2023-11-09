import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'


//  [/\.(js)$/, /\.(css)$/]
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression()
  
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5555/',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/,'')
    }
  },
}})
