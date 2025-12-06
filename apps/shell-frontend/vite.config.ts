import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    react(),
    federation({
      name: 'efp-shell',
      remotes: {
        // 示例远程微应用占位地址（开发时可调整）
        approval: 'http://localhost:3001/assets/remoteEntry.js',
        project: 'http://localhost:3002/assets/remoteEntry.js',
        file: 'http://localhost:3003/assets/remoteEntry.js',
        calendar: 'http://localhost:3004/assets/remoteEntry.js',
        reporting: 'http://localhost:3005/assets/remoteEntry.js',
        communication: 'http://localhost:3006/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'zustand']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
