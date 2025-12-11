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
      // Базовые рекомендованные правила от плагинов
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,

      // Разрешаем alias '@/...' и игнорируем абсолютные роуты типа '/'
      'import/no-unresolved': ['error', { ignore: ['^/'] }],

      // ОТКЛЮЧАЕМ старое правило порядка импортов
      'import/order': 'off',

      // ВКЛЮЧАЕМ авто-сортировку импортов
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. React, ReactDOM и прочие внешние пакеты (node_modules)
            ['^react$', '^react-dom$', '^[a-zA-Z0-9@]'],
            // 2. Алиасы проекта
            ['^@/'],
            // 3. Родительские / соседние модули
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?!/?$)', '^\\./?$'],
            // 4. Стили и ассеты
            ['^.+\\.s?css$', '^.+\\.(png|jpe?g|svg|gif|webp)$'],
          ],
        },
      ],

      'simple-import-sort/exports': 'error',

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // React 17+ — react в скоупе не обязателен
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      'no-invalid-this': 'error',

      // Prettier как последний шаг форматирования
      'prettier/prettier': 'error',
    },
  },
];
