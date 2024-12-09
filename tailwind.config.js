/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '300',
            src: 'url(https://fonts.gstatic.com/s/montserrat/v29/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format("woff2")',
            unicodeRange:
              'U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
          },
          {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '400',
            src: 'url(https://fonts.gstatic.com/s/montserrat/v29/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format("woff2")',
            unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
          },
        ],
      });
    }),
  ],
};

