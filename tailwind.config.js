/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#da0d26",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ["'Barlow Condensed'", "sans-serif"],
        body: ["'Space Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
