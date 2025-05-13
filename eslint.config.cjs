module.exports = [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/coverage/**',
      '**/*.config.js',
      '**/*.config.cjs',
      '**/*.config.mjs',
      '**/*.config.ts',
      '**/*.min.js',
      '**/*.bundle.js',
    ],
    languageOptions: {
      globals: {
        browser: true,
        es2020: true,
      },
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'jsx-a11y': require('eslint-plugin-jsx-a11y'),
      import: require('eslint-plugin-import'),
      storybook: require('eslint-plugin-storybook'),
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
              pattern: '@/pages/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/common/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/stores/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/apis/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/hooks/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/queries/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/utils/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/validations/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/types/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/constants/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/styles/**',
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
  },
];
