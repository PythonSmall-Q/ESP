import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: { port: 3005 },
  plugins: [
    react(),
    federation({
      name: 'reporting',
      filename: 'remoteEntry.js',
      exposes: { './App': './src/App.tsx' },
      shared: ['react', 'react-dom']
    })
  ],
  build: { target: 'esnext', rollupOptions: { output: { format: 'esm' } } }
});
