/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
};
