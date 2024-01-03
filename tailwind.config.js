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
        background : "url('https://i.ibb.co/8zPjXtg/sl-100622-53160-19.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}