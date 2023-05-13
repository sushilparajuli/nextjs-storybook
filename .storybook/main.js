const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  stories: [
    "../pages/**/*.mdx",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
    "@storybook/addon-a11y"
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
  framework: {
    "name": "@storybook/nextjs",
    "options": {}
  },
  docs: {
    enabled: true,
    defaultName: 'Documentation',
    //👇 Use only one of the following options to auto-generate documentation
    autodocs: true,
  },
  features: {
    "emotionAlias": false,
    "interactionsDebugger": true,
  },
  typescript: { reactDocgen: 'react-docgen-typescript' },
}