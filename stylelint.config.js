module.exports = {
  extends: [
    "stylelint-config-rational-order",
    "stylelint-config-standard",
    "stylelint-config-prettier"
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          'apply',
          'responsive',
          'media',
          'screen',
          'mixin',
          'include',
          'extend'
        ]
      }
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'variants',
          'responsive',
          'media',
          'screen',
          'mixin',
          'include'
        ]
      }
    ],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": true,
        "empty-line-between-groups": true
      }
    ]
  }
}
