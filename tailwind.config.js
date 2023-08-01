/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {

    screens:{
      ms: '834px'
    },

    colors: {
      'blue': '#091E42',
      'gray': '#0047B3',
      'red': '#317D20',
     
    },
    fontFamily: {
      sans: ['Clash Grotesk', 'sans-serif'],
      serif: ['Archivo', 'sans-serif'],
    },

    safelist: [{
      pattern: /(navy|sky|grass)/
  }

],

    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

