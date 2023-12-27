/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['altivo', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

