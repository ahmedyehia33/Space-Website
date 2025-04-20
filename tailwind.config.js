/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        barlow: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}