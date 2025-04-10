import type { AliasOptions } from 'vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// @ts-expect-error
import path from 'node:path';

// @ts-expect-error
const root = path.resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      '@': root,
    } as AliasOptions,
  },
});
