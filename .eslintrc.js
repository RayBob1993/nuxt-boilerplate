module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/html-closing-bracket-spacing': ['error', {
      selfClosingTag: 'never'
    }],
    'vue/component-name-in-template-casing': [
      'error', 'kebab-case',
      {
        registeredComponentsOnly: false
      }
    ],
    'vue/html-indent': ['error', 2, {
      alignAttributesVertically: true
    }],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1
    }],
    'vue/max-attributes-per-line': ['error', {
      multiline: {
        allowFirstLine: false
      }
    }],
    semi: [2, 'always',
      {
        omitLastInOneLineBlock: false
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
};
