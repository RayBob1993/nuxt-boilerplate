module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    semi: [
      2,
      'always',
      {
        omitLastInOneLineBlock: false
      }
    ]
  }
};
