/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pt: ['PT', 'sans-serif'],
        maven: ['Maven Pro']
      },
      backgroundImage: {
        'pattern': "url('https://learnwithsumit.com/_next/static/media/pattern.afd33a3d.svg')",
        'dark-pattern': "url('https://learnwithsumit.com/_next/static/media/pattern-dark.20747baf.svg')"
      }
    },
  },
  plugins: [],
}