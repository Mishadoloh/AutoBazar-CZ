
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Відносна база, щоб усе працювало як локально, так і на GitHub Pages
  base: './',
  build: {
    // Будуємо одразу в папку docs, з якої GitHub Pages віддає сайт
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
