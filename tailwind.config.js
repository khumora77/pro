/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8ddd0',
          300: '#d9c4a8',
          400: '#c7a47e',
          500: '#b8895c',
          600: '#a87550',
          700: '#8b5e44',
          800: '#714d3c',
          900: '#5c3f32',
        },
        cream: {
          50: '#fffdf9',
          100: '#fefbf2',
          200: '#fdf5e0',
          300: '#fbecc4',
          400: '#f7dc9e',
          500: '#f2c668',
          600: '#ecb046',
          700: '#d89a2a',
          800: '#b67f25',
          900: '#936624',
        },
        gold: {
          50: '#fffdf2',
          100: '#fffbe0',
          200: '#fff5b8',
          300: '#ffed85',
          400: '#ffdd47',
          500: '#ffca1c',
          600: '#f5a623',
          700: '#d4841f',
          800: '#b5651d',
          900: '#94521c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};