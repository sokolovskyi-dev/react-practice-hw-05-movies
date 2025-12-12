import js from '@eslint/js';
import globals from 'globals';

import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },

  js.configs.recommended,

  {
    files: ['src/**/*.{js,jsx}'],

    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
    },

    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx'],
        },
      },
    },

    rules: {
      // Recommended rulesets
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,

      // Alias '@/...' and absolute routes like '/' (common for assets or routing)
      'import/no-unresolved': ['error', { ignore: ['^/'] }],

      // Prevent conflicts with simple-import-sort
      'import/order': 'off',

      // Import sorting + blank lines between groups
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1) React first (optional but keeps consistency)
            ['^react$', '^react-dom$'],

            // 2) External packages (node_modules)
            ['^@?\\w'],

            // 3) Internal aliases
            ['^@/'],

            // 4) Parent imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

            // 5) Sibling/current-dir imports
            ['^\\./(?!/?$)', '^\\./?$'],

            // 6) Styles
            ['^.+\\.s?css$'],

            // 7) Assets
            ['^.+\\.(png|jpe?g|svg|gif|webp)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // React Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // React 17+
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // Misc
      'no-invalid-this': 'error',

      // Prettier via ESLint (so eslint --fix formats code)
      'prettier/prettier': 'error',
    },
  },
];
