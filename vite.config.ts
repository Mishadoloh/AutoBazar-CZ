
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Вказуємо базовий шлях як назву вашого репозиторію на GitHub
  base: '/AutoBazar-CZ/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
