import React from 'react'
import { ThemeProvider } from "@mui/system"
import { theme } from "../lib/theme"

export const withMuiTheme = (Story) =>  (
  <ThemeProvider theme={theme}>
    <style global jsx>{`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      hr {
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-start: 0;
        padding-block-end: 0;
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
      `}
    </style>
    <Story />
  </ThemeProvider>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark'
  },
  viewport: {
    viewports: {
      small: {
        name: 'Small',
        styles: {
          width: '375px',
          height: '568px',
        },
      },
      middle: {
        name: 'Middle',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      large: {
        name: 'Large',
        styles: {
          width: '960px',
          height: '768px',
        },
      },
      extraLarge: {
        name: 'Extra Large',
        styles: {
          width: '1440px',
          height: '900px',
        },
      }
    }, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  }
}

export const decorators = [withMuiTheme];