import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [react()],
  server: { host: '127.0.0.1' },
  ...(mode === 'intro' ? {
    // A classic script also runs when index.html is opened using file://.
    define: { 'process.env.NODE_ENV': JSON.stringify('production') },
    build: {
      outDir: 'assets',
      emptyOutDir: true,
      lib: {
        entry: 'src/main.jsx',
        name: 'MacOSIntro',
        formats: ['iife'],
        fileName: () => 'intro.js',
        cssFileName: 'intro',
      },
    },
  } : {}),
}));
