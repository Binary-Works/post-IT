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
          100: "#fcfcfd",
          200: "#f9fafb",
          300: "#f6f7f9",
          400: "#f3f5f7",
          500: "#f0f2f5",
          600: "#c0c2c4",
          700: "#909193",
          800: "#606162",
          900: "#303031",
        },
        primary: {
          100: "#ffd2d1",
          200: "#ffa5a2",
          300: "#ff7874",
          400: "#ff4b45",
          500: "#ff1e17",
          600: "#cc1812",
          700: "#99120e",
          800: "#660c09",
          900: "#330605",
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
