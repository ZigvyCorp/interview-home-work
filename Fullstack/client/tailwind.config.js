/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    fontFamily: {
      main: ["Poppins", "sans-serif"]
    },
    extend: {
      width: {
        main: "75%"
      },
      backgroundColor: {
        main: "#000",
        sub: "#fff",
        hover: "#000",
        feature: "#4299e1",
        danger: "#e53e3e",



      },
      textColor: {
        main: "#3b82f6",
        sub: "#a0aec0",
        hover: "#fff",
        feature: "#004aad",
        danger: "#e53e3e"

      },
      borderColor: {
        main: "#a0aec0",
        sub: "#3b82f6",

      }
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    require('autoprefixer'),

  ],
}