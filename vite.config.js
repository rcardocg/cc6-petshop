import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // Apunta a tu backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // Opción para remover el prefijo /api si lo necesitas
      },
    },
  },
});
