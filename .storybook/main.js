const path = require('path');
module.exports = {
  "stories": [
    "../pages/**/*.mdx",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next"
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "docs": {
    "docsPage": true
  },
  "features": {
    "emotionAlias": false,
  }
}