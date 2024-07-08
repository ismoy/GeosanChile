/**@type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    extend:{
      colors:{
        "white": "#FFFFFF",
        "primary-300": "#006f29",
        "primary-500": "#006f29",
        "secondary": "#000000",
        "color-yelow": "#F2F8F3",
        "secondary-500": "#B6BCF4",
        "error": "#FF616A",
        "blue-color": "#0359b5",
        "pure-white": "#FFF"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      content:{
        evolvetext: "url('.assets/EveloText.png')"
      }
    },
    screens:{
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }

  },
  plugins:[],
}
