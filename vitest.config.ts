import vue from '@vitejs/plugin-vue2';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  test: {},
});
