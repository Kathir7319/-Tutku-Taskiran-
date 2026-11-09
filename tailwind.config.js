/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF7',
          100: '#FAF7EE',
          200: '#F3EDE0',
          300: '#E8DEC9',
          400: '#D5C4A6',
          900: '#2A251C',
        },
        sage: {
          50: '#F3F6F4',
          100: '#E4ECE7',
          200: '#C7D9CE',
          300: '#A3BFB0',
          400: '#7E9F8E',
          500: '#5B7E6D',
          600: '#486557',
          700: '#384F44',
          800: '#2B3D34',
          900: '#1F2C26',
        },
        clay: {
          50: '#FDF6F2',
          100: '#FBEDE3',
          200: '#F6D7C2',
          500: '#C67D5A',
          600: '#B06947',
          700: '#945336',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
