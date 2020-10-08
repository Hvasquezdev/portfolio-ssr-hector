module.exports = {
  purge: [
    './assets/**/*.css',
    './pages/**/*.vue',
    './components/**/*.vue',
    './plugins/**/*.vue',
    './static/**/*.vue',
    './store/**/*.vue'
  ],
  theme: {
    screens: {
      xs: '320px',
      md: '720px',
      lg: '1360px',
      xl: '1620px',
      hd: '1920px'
    },
    fontFamily: {
      // Font families here!
      poppins: 'Poppins, sans-serif',
      nunito: 'Nunito, sans-serif',
      asap: 'Asap, sans-serif'
    },
    colors: {
      transparent: 'transparent',
      white: {
        primary: '#FFFFFF',
        secondary: '#FAFAFF'
      },
      dark: {
        primary: '#4A4A4A',
        secondary: '#6E6E6E',
        tertiary: '#5D5D5D',
        transparent: {
          primary: '#4a4a4ab3',
          secondary: '#6e6e6e6e'
        }
      },
      blue: {
        primary: '#5165FF',
        secondary: '#6048FF'
      },
      green: {
        primary: '#49cc68'
      },
      grey: {
        primary: '#7F8688',
        secondary: '#929D9E'
      },
      yellow: {
        primary: '#F3E367'
      }
    }
  },
  variants: {},
  plugins: []
};
