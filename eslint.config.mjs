import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { ignores: ['.vercel/**'] },
  js.configs.recommended,
  {
    files: ['site.js'],
    languageOptions: {
      sourceType: 'script',
      globals: globals.browser,
    },
    rules: {
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always'],
    },
  },
]);
