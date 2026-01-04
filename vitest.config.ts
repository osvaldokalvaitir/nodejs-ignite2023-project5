import path from 'node:path'
import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
// import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    globals: true,
    root: './',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      test: path.resolve(__dirname, './test'),
      '@prisma/client': path.resolve(__dirname, './generated/prisma/client'),
    },
  },
  plugins: [
    // tsConfigPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})