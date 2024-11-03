/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "public/index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    fontFamily: {
      rale: ['Raleway'],
     
    },
    extend: {
      colors:{
        danger:'#FF4545',
        info:{
          100:'#BFECFF',
          200:'#CDC1FF',
          300:'#B03052'

        }
      }
    },
  },
  plugins: [],
}

