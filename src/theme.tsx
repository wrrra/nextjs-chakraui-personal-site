import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    white: {
      white: '#ffff',
      ghost: '#FBFBFF'
    },
    green: {
      caribbean: '#00CC99',
    },
    purple: {
      rebecca: '#7C3AA8'
    }
  },
  fonts,
  breakpoints,
  sizes: {
    '6xs': '8rem'
  }
})

export default theme
