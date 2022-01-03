module.exports = {
  // 適用する環境
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  // パーサー
  parser: '@typescript-eslint/parser',
  // jsx を使います
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    // import 文でモジュールを使用します
    sourceType: 'module',
  },
  // React のバージョンは自動検出に
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-hooks', 'react', '@typescript-eslint', 'tailwindcss'],
  // 基本的にルールは recommended に従う
  // prettier は配列の最後尾に書く
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  rules: {
    quotes: ['warn', 'single'],
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-empty-function': 0,
    '@typescript-eslint/ban-ts-comment': 0,
  },
};
