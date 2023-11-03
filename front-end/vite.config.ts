// import { defineConfig } from 'vite';
import { defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    define: {
      BASE_URL: process.env.BASE_URL,
    },
    // To access env vars here use process.env.TEST_VAR
  });
};
