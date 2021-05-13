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
          Components: './app/components',
          Constants: './app/components',
          Navigation: './app/navigation',
          Screens: './app/screens'
        }
      }
    ]
  ]

};
