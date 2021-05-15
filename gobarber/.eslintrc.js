module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",//permite recerber um parametro e fazer alteracao
    "camelcase": "off",
    "no-unused-vars": ["error", {"argsIgnorePattern": "next"}]//permite declara a varialvel next mas nao usala
  },
};
