/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      main_color: '#040D1B',
      secondary_color: '#202B3B',
      third_color: '#D8F8EE',
      fourth_color: '#3EDA7C',
    },
  },
  plugins: [],
}

