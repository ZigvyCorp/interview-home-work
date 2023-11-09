module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "/components/**/*.{js,ts,jsx,tsx}",
    "/pages/**/*.{js,ts,jsx,tsx}",
    // "/constant/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      light_grey: "#2A3348",
      grey: "#C9C9C9",
      black: "#000000",
      bg_grey: "#f3f4f6",
      white: "#ffffff",
      black2: "#505564",
      main: "#f9660c",
      main_bg: "#2b2b2b",
      bg: "#070D1B",
      light_bg: "#1A2439",
      yellow: "#FCC02D",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sx: "320px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      // customTablet: "1090px",
    },
    fontSize: {
      normal_size: "1.4rem",
    },
    extend: {
      height: {
        head: "var(--head-height)",
      },
      padding: {
        head: "var(--head-height)",
      },
    },
  },
  // plugins: [require("@tailwindcss/line-clamp")],
};
