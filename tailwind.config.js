/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF4D00',
          50: '#FFF0E6',
          100: '#FFE1CC',
          200: '#FFC399',
          300: '#FFA566',
          400: '#FF8733',
          500: '#FF4D00',
          600: '#CC3E00',
          700: '#992E00',
          800: '#661F00',
          900: '#330F00',
        },
      },
      boxShadow: {
        'custom': '0 10px 25px -5px rgba(255, 77, 0, 0.1), 0 10px 10px -5px rgba(255, 77, 0, 0.04)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
};