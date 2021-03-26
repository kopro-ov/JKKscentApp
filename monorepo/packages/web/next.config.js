const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(
  [
    "react-native",
    "styled-components",
    '@nextjs-rn-monorepo/common',
  ],
);

module.exports = withPlugins([withTM], {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.ts',
      '.web.tsx',
      '.ts',
      '.tsx',
      '.web.js',
      '.web.jsx',
      '.js',
      '.jsx',
      ...config.resolve.extensions,
    ]
    return config;
  }
});
