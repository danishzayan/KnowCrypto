/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
    },

    colors: {
      gray: { 100: "#808080", 200: "#323232", 300: "#0f172a"},
      white: "#fff",
      lightgreen: "#00ff00",
      red: "#d6436e",
      green: "#25da72",
    },
    
    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "24px",
      xl: "32px",
      base: "16px",
    },
  },
  plugins: [],
};
