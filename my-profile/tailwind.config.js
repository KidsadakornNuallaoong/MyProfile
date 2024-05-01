/** @type {import('tailwindcss').Config} */
// * add tailwind plugin
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#040D1B',
        'secondary': '#202B3B',
        'tertiary': '#D8F8EE',
        'quaternary': '#3EDA7C',
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') },
        'h4': { fontSize: theme('fontSize.lg') },
        'h5': { fontSize: theme('fontSize.base') },
        'h6': { fontSize: theme('fontSize.sm') },
      })
    })
  ],
}

