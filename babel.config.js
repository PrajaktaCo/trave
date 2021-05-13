module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          Assets: './app/assets',
          Themes: './app/themes',
          Components: './app/components',
          Constants: './app/constants',
          Navigation: './app/navigation',
          Screens: './app/screens'
        }
      }
    ]
  ]

};
