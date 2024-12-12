import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import architectureRules from './eslint-plugin-architecture-rules.js';

export default [
  pluginJs.configs.all,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      sourceType: 'module',
    },
    plugins: {
      prettier,
      'architecture-rules': architectureRules,
    },
    rules: {
      'no-console': 'warn',
      'sort-keys': 'off',
      'sort-imports': 'off',
      'one-var': 'off',
      'no-ternary': 'off',
      'capitalized-comments': 'off',
      'architecture-rules/restrict-fetch': 'error',
      'architecture-rules/restrict-localStorage': 'error',
      'architecture-rules/restrict-querySelector': 'error',
    },
  },
];
