import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist'],
    files: ['**/*.{ts,tsx,js,jsx}'], // Certifique-se de incluir JSX
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: '@babel/eslint-parser', // Defina o parser aqui
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Ative suporte a JSX
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
