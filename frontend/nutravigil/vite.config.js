import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Ensures file changes are detected
      interval: 100,    // Adjust polling interval if needed
    },
    hmr: {
      overlay: true, // Ensures error overlay is displayed if HMR fails
    },
  },
  css: {
    devSourcemap: true, // Enables easier debugging of styles in the browser
  },
});
