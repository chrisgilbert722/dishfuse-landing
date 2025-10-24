/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00C897", // DishFuse Emerald
          dark: "#0f172a", // Deep navy background
          light: "#A7F3D0", // Light accent
        },
        accent: {
          blue: "#3B82F6",
          gold: "#FACC15",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(34,197,94,0.3)",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(90deg, #00C897 0%, #3B82F6 100%)",
        "gradient-dark":
          "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
