import { createTheme } from '@mui/system'

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      dark: '#000000'
    },
    background: {
      default: '#FBFBFB'
    },
    secondary: {
      main: '#D4D4D4'
    },
    gradients: {
      primary: 'linear-gradient(180deg, #000 20%, #303c5c 100%)',
      border:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 100%)'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
})
