import { resolve } from 'path';
import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: pkg.name,
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      plugins: [
        babel({
          babelHelpers: 'bundled',
          exclude: 'node_modules/**',
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
      ],
    },
  },
});
