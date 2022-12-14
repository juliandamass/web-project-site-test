const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Code Pro', ...defaultTheme.fontFamily.sans],
        display: ['GFS Didot', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        'montserrat-alternates': [
          'Montserrat Alternates',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        'mint-green': {
          DEFAULT: '#A2E4B8',
        },
        argent: {
          DEFAULT: '#C2BEBE',
        },
        'mint-purple': {
          DEFAULT: '#8E90C0',
        },
      },
      spacing: {
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        26: '6.5rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        full: '100%',
      },
      maxWidth: {
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        ...defaultTheme.spacing,
      },
      minHeight: {
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        ...defaultTheme.spacing,
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '16rem',
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
      },
      boxShadow: {
        surround: '0px 0px 8px 0px rgb(4 17 29 / 25%)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
