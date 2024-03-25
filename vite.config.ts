import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['@vantage-js/validate'],
      output: {
        globals: {
          '@vantage-js/validate': 'validate',
        },
      },
    },
  },
  resolve: { alias: { src: resolve(__dirname, 'src') } },
  plugins: [dts()],
});
