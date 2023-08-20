/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      colors: {
        'beige': '#DCC1AB',
        'green': '#1B5B31',
        'grey': '#F5F0EC',
      },
      scale: {
        '85': '0.85',
      }
    },
    fontFamily: {
      'inter': ['Inter', 'serif'], 
      'montserrat': ['Montserrat', 'serif'],
    }
  },
  plugins: [require('flowbite/plugin'), require("tailwind-gradient-mask-image")],
}

