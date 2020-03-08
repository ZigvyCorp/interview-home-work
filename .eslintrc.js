module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['eslint-config-leapfrog', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'no-console': 0,
    'no-unused-vars': [1, { argsIgnorePattern: '^_' }],
  },
}
