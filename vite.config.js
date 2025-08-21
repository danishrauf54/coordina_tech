import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/coordina_tech/', // IMPORTANT: must match repo name
  plugins: [react()],
});
