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
    keyframes: {
      scroll: {
        'from': { left: 'translateX(0%)' },
        'to': { transform: 'translateX(-100%)' }
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-20%)',
          AnimationTimingFunction: 'ease-in-out'
        },
        '50%': {
          transform: 'translateY(0%)',
          AnimationTimingFunction: 'ease-in'
        }
      }
    },
    animation: {
      scroll: 'scroll 50s linear infinite',
      bounce: 'bounce 1s infinite'
    }
  },
  plugins: [],
}
