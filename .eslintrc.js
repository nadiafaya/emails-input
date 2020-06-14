module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'space-before-function-paren': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
};
