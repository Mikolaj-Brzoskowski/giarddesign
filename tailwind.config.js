/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'beige': '#DCC1AB',
        'green': '#1B5B31',
        'grey': '#F5F0EC',
      },
    },
    fontFamily: {
      'inter': ['Inter', 'serif'], 
      'montserrat': ['Montserrat', 'serif'],
    }
  },
  plugins: [],
}

