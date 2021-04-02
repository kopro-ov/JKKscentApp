module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      { rootPathPrefix: '~', rootPathSuffix: 'src', },
      {
        rootPathSuffix: "./src/components",
        rootPathPrefix: "@components/",
      },      
    ],
  ],
};