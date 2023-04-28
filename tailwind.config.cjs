/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "share-tech-mono": ["'Share Tech'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
