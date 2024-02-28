import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    define: {
      'process.env': {},
      'import.meta.env': JSON.stringify(dotenv.config().parsed),
    },
    optimizeDeps: {
      exclude: ['buffer', 'crypto'],
    },
    plugins: [react()],
    test: {
      includeSource: ['src/**/*.{js,jsx,ts,tsx}'],
      coverage: {
        reporter: ['text', 'html'],
      },
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.mjs'],
      alias: {
        src: '/src',
      },
    },
    server: {
      host: true,
      port: env.VITE_PORT,
    },
    build: {
      sourcemap: true,
    },
  };
});
