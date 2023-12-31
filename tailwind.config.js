/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {

  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown": {
          100: '#ECE0D1',
          300: '#DBC1AC',
          600: '#967259',
          900: '#634832'
        }
      },
      boxShadow: {
        'shadow': '0px 1px 10px rgba(0, 0, 0, 0.05)'
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemoBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
      },
      letterSpacing: {
        "tightest": '-0.065em'
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }),
  ],
}