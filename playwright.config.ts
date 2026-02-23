import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: 'http://localhost:5000',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
  reporter: [['html'], ['list']],
});