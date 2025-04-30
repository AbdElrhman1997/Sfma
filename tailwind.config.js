/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/[locale]/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DAEE5", // Custom color
      },
    },
  },
  plugins: [],
};
