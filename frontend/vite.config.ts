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
    // Target modern browsers — native ESM, no legacy polyfills
    target: 'es2020',

    // Skip gzip size reporting in CLI output (speeds up build)
    reportCompressedSize: false,

    // Warn at 450 kB per chunk (well under after splitting)
    chunkSizeWarningLimit: 450,

    // Inline assets < 4 KB as base64 → eliminates small HTTP requests
    assetsInlineLimit: 4096,

    // esbuild minifier (default, zero extra deps, fastest)
    minify: 'esbuild',

    // Per-entry CSS splitting → critical CSS only when needed
    cssCodeSplit: true,

    rollupOptions: {
      output: {
        // Stable chunk names for long-term caching headers
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',

        manualChunks(id) {
          // Vue core — changes rarely, cache forever
          if (id.includes('node_modules/vue/') ||
              id.includes('node_modules/vue-router/') ||
              id.includes('node_modules/pinia/')) {
            return 'vendor-vue';
          }
          // i18n — separate, only used at runtime
          if (id.includes('node_modules/vue-i18n/') ||
              id.includes('node_modules/@intlify/')) {
            return 'vendor-i18n';
          }
          // HTTP client
          if (id.includes('node_modules/axios/')) {
            return 'vendor-http';
          }
          // All other node_modules → vendor-misc
          if (id.includes('node_modules/')) {
            return 'vendor-misc';
          }
        },
      },
    },
  },

  // Pre-bundle deps → avoids waterfall requests in dev
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'vue-i18n', 'axios'],
  },
});
