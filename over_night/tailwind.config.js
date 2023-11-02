/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
   
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      blue:colors.blue,
      yellow:colors.amber,
      purple:colors.purple,
      green:colors.green,
   
      logos:{
        yellow:"#F4C01E",
        gyellow:"#FFF506",
        hyellow:"#F5E54A",
        blue:"#74C1FF",
        gblue:"#A1BEFF"}
    }
  },
  plugins: [],
}