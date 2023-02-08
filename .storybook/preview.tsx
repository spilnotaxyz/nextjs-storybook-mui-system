import React from 'react'
import { ThemeProvider } from "@mui/system"
import { theme } from "../lib"

export const withMuiTheme = (Story) =>  (
  <ThemeProvider theme={theme}>
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
  }
}

export const decorators = [withMuiTheme];