/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        calypso: {
          50: "#f1f9fa",
          100: "#dbedf2",
          200: "#bbdde6",
          300: "#8bc3d5",
          400: "#55a2bb",
          500: "#3986a1",
          600: "#2f667f",
          700: "#2e5a70",
          800: "#2d4c5d",
          900: "#294050",
          950: "#172935",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
