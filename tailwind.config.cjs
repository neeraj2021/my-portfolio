/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBFAFF",
        primary: "#5E3BEF",
        text_gray: "#51586A",
      },
    },
  },
  plugins: [],
};
