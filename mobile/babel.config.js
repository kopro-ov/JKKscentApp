module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '~': './src',
          '@components': './src/components',
          '@containers': './src/containers',
          '@modules': './src/modules',
          '@screens': './src/screens',
          '@utils': './src/utils',
          'images': './src/assets/images',
        },
      },
    ],
  ],
}