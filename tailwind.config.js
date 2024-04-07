/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['BlinkMacSystemFont'],
      },
      keyframes: {
        jiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        jiggle: 'jiggle 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
}
