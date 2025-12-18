import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: 'localhost',
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://gemai-project-server.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: { outDir: 'dist' },
});