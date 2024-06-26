module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?@?react-native|react-navigation|@react-navigation/.*))',
  ],
  setupFilesAfterEnv: ['./jest-setup-after-env.js'],
};
