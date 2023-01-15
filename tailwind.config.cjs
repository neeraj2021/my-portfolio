/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        upperBackground: "url('./src/assets/UpperBackground.png')",
      },
      colors: {
        cream: "#FBFAFF",
        primary: "#5E3BEF",
        text_gray: "#51586A",
      },
    },
  },
  plugins: [],
};
