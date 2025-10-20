import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // frontend port
    proxy: {
      '/user': {
        target: 'http://localhost:8080', // your Spring Boot backend
        changeOrigin: true,
        secure: false,
      },
      '/appointment': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
      // Add other backend paths as needed
    },
  },
});
