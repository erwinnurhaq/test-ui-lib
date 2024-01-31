import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-optional-chaining',
          ['transform-react-remove-prop-types', { removeImport: true }],
        ],
        minified: true,
      },
    }),
    libInjectCss(),
    dts({ include: ['src/lib'] }),
  ],
  build: {
    emptyOutDir: true,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/lib/index.tsx'),
      name: pkg.name,
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', /^react-icons/],
      input: Object.fromEntries(
        glob
          .sync('src/lib/**/*.{ts,tsx}', {
            ignore: ['src/lib/**/*.stories.tsx'],
          })
          .map((file) => [
            // The name of the entry point
            // src/nested/foo.ts becomes nested/foo
            relative('src/lib', file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // src/nested/foo.ts becomes /project/src/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].[format].js',
      },
    },
  },
});
