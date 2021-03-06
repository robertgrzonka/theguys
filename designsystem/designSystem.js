import DesignSystem from 'design-system-utils'

import colorPalette from './colorPalette'

const fontFamily = {
  system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: '"Cormorant Garamond", "Playfair Display", Georgia, "Times New Roman", Times, serif',
  mono: 'Menlo, Monaco, "Courier New", monospace'
}

const transitions = {
  duration: '300ms',
  timing: 'ease'
}

const palette = colorPalette

const designTokens = {
  type: {
    baseFontSize: '12px',
    sizes: {
      xs: '10px',
      s: '11px',
      base: '12px',
      regular: '12px',
      m: '14px',
      l: '16px',
      xl: '20px',
      xxl: '24px'
    },

    fontFamily,
    fontFamilyBase: fontFamily.system,
    fontFamilyHeadings: fontFamily.serif,

    lineHeight: {
      paragraph: 1.4,
      regular: 1.4,
      headings: 1.2
    },

    textRendering: 'optimize-legibility',

    letterSpacing: {
      small: '0.045em',
      normal: '0.0625em',
      large: '0.0805em'
    },

    fontWeight: {
      extralight: 100,
      light: 200,
      normal: 300,
      medium: 500,
      bold: 700,
      headings: 900
    }
  },

  colors: {
    colorPalette: palette,
    brand: {
      colorName: 'crimson'
    }
  },

  breakpoints: {
    s: 300,
    m: 500,
    l: 850
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000
  },

  spacing: {
    baseline: 20,
    padding: '0.4em',
    scale: [ 0, 8, 16, 24, 32, 40 ]
  },

  layout: {
    gutter: 20,
    maxWidth: 1400,
    grid: {
      columnCount: 8
    }
  },

  transition: {
    duration: transitions.duration,
    timing: transitions.timing,
    transition: `all ${transitions.duration} ${transitions.timing}`
  },

  borderRadius: '0.5em'
}

export default new DesignSystem(designTokens, {
  fontSizeUnit: 'rem'
})
