/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A1120",
          800: "#0B1222",
          700: "#102042",
          600: "#1F2D50",
          500: "#24335D"
        },
        gold: {
          500: "#F4C762",
          600: "#EEB94A"
        }
      }
    }
  },
  plugins: []
};
