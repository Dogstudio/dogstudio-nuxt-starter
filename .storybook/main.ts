import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  "stories": [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": false
      }
    },
  ],
  "framework": {
    "name": "@storybook-vue/nuxt",
    "options": {}
  }
};
export default config;
