import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';

export default [
  // Ignore build artifacts
  { ignores: ['dist/**', '.astro/**'] },

  // Astro recommended rules for .astro files
  ...astro.configs['flat/recommended'],

  // Base JS
  js.configs.recommended,

  // TypeScript recommended (type-checked)
  ...tseslint.configs.recommendedTypeChecked,

  // Rules for JS/TS/React files
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      'jsx-a11y': jsxA11y
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json']
      }
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    }
  }
];
