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
      keyframes: {
        "slow-bounce": {
          "0%, 100%": {
            transform: "translateY(-2%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slow-bounce": "slow-bounce 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
