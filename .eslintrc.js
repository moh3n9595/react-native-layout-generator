module.exports = {
  env: {
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'standard', 'plugin:react/recommended', '@react-native-community', 'prettier'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
