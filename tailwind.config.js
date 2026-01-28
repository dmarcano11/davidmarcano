/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-white': '#F0F3EF',
        'soft-green': '#869C90',
        'dark-grey': '#727576',
        'light-grey': '#8A8A8B',
        'dark-blue': '#1C242B',
      },
      fontFamily: {
        sans: ['Crimson Pro', 'serif'],
      },
    },
  },
  plugins: [],
}
