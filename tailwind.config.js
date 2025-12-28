/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BE123C", // Rose 700 - Elegant Pink/Red
        secondary: "#FDF2F8", // Rose 50 - Soft Background
        accent: "#FB7185", // Rose 400
        dark: "#1C1917", // Stone 900
        light: "#FAFAF9", // Stone 50
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Adding a serif if we decide to import it, otherwise fallback
      }
    },
  },
  plugins: [],
}
