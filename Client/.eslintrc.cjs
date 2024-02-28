module.exports = {
    env: { node: true, es2020: true, browser: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'quotes': ['error', 'single'],
        'object-curly-spacing': ['error', 'always', { 'objectsInObjects': true }],
        'no-unused-vars': 'off'
    },
}
