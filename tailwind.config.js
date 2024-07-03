/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pop': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#7161ef',
        'secondary': '#957fef',
        'tertiary': '#b79ced',
        'quaternary': '#dec0f1',
        'quinary': '#efd9ce',

        // pallet monochrome
        'monochrome': {
          'main': '#4A47A3',
          'black': '#000000',
          'primary': '#282658',
          'secondary': '#504db1',
          'tertiary': '#a7a6d8',
          'white': '#ffffff',
          'input' : '#F6F9FD'
        }
      }
    },
  },
  plugins: [],
}

