/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00BFA5",
        accent: "#1A3E70",
      },
    },
  },
  plugins: [],
}
