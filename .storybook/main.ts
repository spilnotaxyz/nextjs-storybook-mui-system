import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    "../@(views|ui)/*.stories.mdx",
    "../@(views|ui)/*.stories.@(tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/nextjs",
  docs: {
    "autodocs": "tag"
  },
  core: {
    "builder": "@storybook/builder-webpack5"
  },
  staticDirs: [
    {
      from: '../public',
      to: 'public'
    }
  ],
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module?.rules?.find((rule: any) => rule?.test && rule.test?.test('.svg'))

    if(fileLoaderRule)
    (fileLoaderRule as any).exclude = /\.svg$/; 

    // svgs
    config.module?.rules?.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/] 
      },
      use: [{
        loader: '@svgr/webpack',
        options: {
           svgoConfig: {
              plugins: [{
                 name: 'removeViewBox',
                 active: false
              }]
           }
        }}],
    })

    return config
  }
}

export default config;