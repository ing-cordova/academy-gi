/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      'pop': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        // Be careful with the colors, they are used in the whole project.
        // If you modify them, the whole project will be affected.
        'monochrome': {
          //Most important colors
          'black': '#000000',
          'main': '#4A47A3',
          'primary': '#282658',
          'secondary': '#504db1',
          'tertiary': '#a7a6d8',
          'white': '#ffffff',
          //--------------------------------
          'input': '#F6F9FD'
        }
      }
    },
    screens: {
      'phone': [
        { 'min': '320px', 'max': '480px' }
      ]
    }
  },
  plugins: []
}

