module.exports = api => {
  api.cache(true);

  return {
    presets: [
      "next/babel",
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: ["> 1%", "last 2 versions", "not ie <= 10"]
          },
        }
      ]
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        { corejs: 3 }
      ],
      [
        "styled-components",
        {
          ssr: true,
          displayName: true,
          preprocess: false
        }
      ],
    ],
  }
};
