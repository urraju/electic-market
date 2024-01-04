/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        inter : "'Inter', sans-serif;"
      },
      backgroundImage : {
        background : "url('https://i.ibb.co/WnFYNky/banner.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}