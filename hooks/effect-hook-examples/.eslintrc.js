module.exports = {
  extends: 'airbnb',
  plugins: [
    'react-hooks'
  ],
  env: {
    browser: true
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'semi': [2, 'never'],
    'react/jsx-one-expression-per-line': 'off',
    'jsx-quotes': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  }
}
