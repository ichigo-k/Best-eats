/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    sreens:{
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    colors: {
      DarkSlateGrey: "hsl(234, 29%, 20%)",
      primary:"#70e000",
      secondary:"#38b000",
      white:"white",
      darkBlueGrayishBlue:"hsl(227,12%,61%)",
      VeryLightGray:"hsl(0,0%,98%)",
      black:"#000000",
      transparent:"transparent"
      
    },
    extend: {},
  },
  plugins: [],
}

