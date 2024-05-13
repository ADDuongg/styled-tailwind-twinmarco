/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorGray: '#8B8B8B',
        colorPink: '#FF64AE',
        colorPurple: '#414880',
        colorPurple_200: '#ABB4FF',
        colorBG: 'background: #F6F7FF',
        bgPurple: '#09115699'
      },
      fontSize: {
        md: '1rem'
      },
      width: {
        98: '26rem',
        100: '30rem',
        102: '34rem',
        110: '40rem'
      },
      margin: {
        98: '30rem',
        110: '50rem',
        'lg': '75rem',
        'xl': '78rem',
        'xxl': '107rem'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem'
      },
      height: {
        98: '30rem',
        100: '56rem',
        'lg': '40rem',
        'xxl': '100rem'
      },
      top: {
        150: '55rem'
      },
      borderRadius: {
        'xxxl': '5rem'
      }
    },
  },
  plugins: [],
}

