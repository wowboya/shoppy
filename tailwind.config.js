/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#F96162'
      },
      spacing: {
        '120': '30rem'
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`
      }
    },
  },
  plugins: [],
}
