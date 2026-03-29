import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    // Target modern browsers — smaller bundle, native ESM
    target: 'es2020',
    // Warn when a chunk exceeds 400 kB (default is 500)
    chunkSizeWarningLimit: 400,
    rollupOptions: {
      output: {
        // Manual chunk splitting: vendor libs separate from app code
        manualChunks: {
          'vendor-vue':    ['vue', 'vue-router', 'pinia'],
          'vendor-i18n':   ['vue-i18n'],
          'vendor-http':   ['axios'],
        },
      },
    },
  },
});
