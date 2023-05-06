// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment'
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin(['API_BASE_URL'])
  ],
  server: {
    port: 3000,
    base: 'src'
  },
  build: {
    target: 'esnext'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@store": path.resolve(__dirname, './src/store')
    }
  }
});
