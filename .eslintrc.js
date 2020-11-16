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
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "eqeqeq": "off",
    "curly": "error",
    "quotes": ["error", "off"],
    "indent": "off",
    "max-attributes-per-line": "off"
  }
}
