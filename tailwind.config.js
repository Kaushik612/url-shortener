/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        'widescreen': {'raw': '(min-aspect-ratio : 3/2)'},
        'tallscreen': {'raw': '(max-aspect-ratio : 13/20)'},
      },
      keyframes:{
        'open-menu' : {
          '0%': {transform : 'scaleY(0)'},
          '80%': {transform : 'scaleY(1.2)'},
          '100%': {transform : 'scaleY(1)'},
        },
        'close-menu' : {
          '0%': {transform : 'scaleY(1)'},
          '100%': {transform : 'scaleY(0)'},
        }
      },
      animation:{
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'close-menu': 'close-menu 0.5s ease-out backwards',
      },
      colors:{
        'primary-cyan':  'hsl(180, 66%, 49%)',
        'primary-dark-violet': 'hsl(257, 27%, 26%)',
        'secondary-red': 'hsl(0, 87%, 67%)',
        'neutral-gray': 'hsl(0, 0%, 75%)',
        'neutral-grayish-violet': 'hsl(257, 7%, 63%)',
        'neutral-dark-blue': 'hsl(255, 11%, 22%)',
        'neutral-dark-violet':'hsl(260, 8%, 14%)',
      },
      gridTemplateColumns:{
        '3' : 'repeat(3, 1fr)'
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [],
}
