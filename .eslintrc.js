module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
};
