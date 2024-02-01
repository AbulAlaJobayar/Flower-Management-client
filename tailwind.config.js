/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primaryy: "#8ed1a3",
      secondaryy: "#fbc8a4",
      accent: "#fdd05e",
      backgroundColor: "#fff9f4",
      textColor: "#333333",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
