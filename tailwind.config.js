/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#009B4C',
        secondary: '#F9EA00',
        ternary: '#E5F5ED'
      }
    },
  },
  plugins: [],
}
