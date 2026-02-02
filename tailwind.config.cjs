/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f52ba', // light blue neutral
        primary: '#0F172A', // dark slate text
        accent: '#3B82F6', // blue accent
      },
      fontSize: {
        hero: '3rem',
        subhero: '1.25rem',
      },
    },
  },
  plugins: [],
}
