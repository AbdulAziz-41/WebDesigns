/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        combon: ["Combon", "sans-serif"],
        DINRound: ["DINRoundPro"],
        Tiempos: ["Tiempos Headline"],
      },
      boxShadow: {
        custom: "0px 12px 28px 0px #0000004F", // Custom box-shadow
      },
    },
  },
  plugins: [],
};
