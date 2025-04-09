/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          white: '#ffffff',
          black: '#121113',
          brown: '#312e2d',
          cream: '#e4d8c1',
          gold: '#927046',
          gray: '#968e83',
        }
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #312e2d, #927046)',
      }
    },
  },
  plugins: [],
};