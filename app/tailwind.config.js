/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    // preflight: false,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '600px',
          md: '728px',
          // lg: '984px',
          // xl: '1240px',
          // '2xl': '1496px',
        }
      }

    },
  },
  plugins: [],
}

