import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {ignores: ['dist']},
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {jsx: true},
        sourceType: 'module',
      },
    },
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', {varsIgnorePattern: '^[A-Z_]'}],
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
    },
  },

  // Jest environment for test files
  {
    files: ["tests/**/*.test.jsx"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      }
    }
  },

  // Environment for mock files - supporting both CommonJS and ES modules
  {
    files: ["tests/__mocks__/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        module: 'readonly'
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  }
]
