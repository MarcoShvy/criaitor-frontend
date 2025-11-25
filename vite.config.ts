import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    css: true,
    globals: true,
    include: ['src/**/*.{test,test.*}.{ts,tsx}', 'src/**/*.test.{ts,tsx}', 'src/**/*.test.tsx'],
    exclude: ['e2e/**', 'playwright.config.{ts,js}', 'node_modules/**', 'dist/**'],
  },
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
})
