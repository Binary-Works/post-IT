/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translate(40%)" },
          "100%": { transform: "translate(-100%)" },
        },
        phslide: {
          "0%": { transform: "translate(20%)" },
          "100%": { transform: "translate(-100%)" },
        },
      },
      colors: {
        white_gray: {
          100: "#f8f9fa",
          200: "#f0f3f5",
          300: "#e9ecf0",
          400: "#e1e6eb",
          500: "#dae0e6",
          600: "#aeb3b8",
          700: "#83868a",
          800: "#575a5c",
          900: "#2c2d2e",
        },
        primary: {
          100: "#ffdacc",
          200: "#ffb599",
          300: "#ff8f66",
          400: "#ff6a33",
          500: "#ff4500",
          600: "#cc3700",
          700: "#992900",
          800: "#661c00",
          900: "#330e00",
        },
        black: {
          100: "#cdcdcd",
          200: "#9a9a9a",
          300: "#686868",
          400: "#353535",
          500: "#030303",
          600: "#020202",
          700: "#020202",
          800: "#010101",
          900: "#010101",
        },
        black_gray: {
          100: "#d1d1d1",
          200: "#a3a3a4",
          300: "#767676",
          400: "#484849",
          500: "#1a1a1b",
          600: "#151516",
          700: "#101010",
          800: "#0a0a0b",
          900: "#050505",
        },
      },
    },
  },
  plugins: [],
};
