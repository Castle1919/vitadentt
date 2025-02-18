/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'blueFirst' : '#167495',
        'blueSecond' : '#1d97c1',
        'blueThird' : '#38b5df',
        'white' : '#fff',
        'gray' : '#808080',
        'black' : '#000000',
      },
      gap: {
        '50':'3,125rem',
      }
      


    },
  },
  plugins: [],
}

  