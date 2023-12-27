module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:playwright/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}',
        'fixtures/**/*.ts',
        'pages/**/*.ts',
        'playwright.config.ts',
        'tests/**/*.ts',
        'util/**/*.ts'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': 'off'
  }
};
