import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    },
    assetsDir: 'assets',
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    manifest: true
  }
});