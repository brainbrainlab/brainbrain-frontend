const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const importPlugin = require('eslint-plugin-import');
const storybookPlugin = require('eslint-plugin-storybook');

const baseConfig = {
  ignores: ['**/node_modules/**', '**/dist/**'],
};

const typescriptConfig = {
  files: ['src/**/*.{ts,tsx}'],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: './tsconfig.json',
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  rules: {
    ...tseslint.configs.recommended.rules,
  },
};

const reactConfig = {
  files: ['src/**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    globals: {
      browser: true,
    },
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
    'jsx-a11y': jsxA11yPlugin,
    import: importPlugin,
    storybook: storybookPlugin,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {},
      typescript: {
        directory: './src',
      },
    },
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
  },
  rules: {
    // 함수 선언
    'prefer-arrow-callback': 'warn',
    'func-style': 'off',

    // 타입
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // 네이밍
    'id-length': [
      'warn',
      {
        min: 2,
        exceptions: ['e', 't', 'x', 'y', 'z', 'i', '_', 'S'],
      },
    ],
    'consistent-this': ['error', 'self'],

    // 상수
    'no-var': 'error',
    'prefer-const': 'error',
    'no-duplicate-imports': 'off',
    'import/no-duplicates': 'error',

    // 사용하지 않는 import
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    // 컴포넌트 네이밍
    'react/jsx-pascal-case': 'error',
    'react/react-in-jsx-scope': 'off',

    // 기타
    'import/no-named-as-default': 0,
    'import/no-unresolved': 'off',

    // import문 순서
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/assets',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/assets/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/pages/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/pages/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/api/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/api/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/hooks/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/hooks/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/utils/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/utils/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/types/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/types/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/constants/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/constants/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/styles/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/styles/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/language/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/language/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/routes/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/routes/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
};

module.exports = tseslint.config(baseConfig, typescriptConfig, reactConfig);
