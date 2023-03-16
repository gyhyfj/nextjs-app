module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'next/core-web-vitals'], // no prettier yet
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'prefer-const': 'warn',
    '@next/next/no-html-link-for-pages': ['warn', 'src/app/'],
  },
}
