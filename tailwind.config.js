/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '1280px',
        '1/8': '50%',
        '1/4': '100%'
      },
      fontSize: {
        sm: ['14px'],
        base: ['16px'],
        lg: ['20px'],
        xl: ['24px']
      },
      fontFamily: {
        custom: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
