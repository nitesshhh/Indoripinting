/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red:    '#e63329',
          green:  '#25D366',
          border: '#e5e5e5',
          muted:  '#6b7280',
          light:  '#f8f8f8',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
