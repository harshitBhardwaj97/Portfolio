/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimaryDark: "#251c69",
      },
      fontFamily: {
        // playFair: ["Playfair Display", "serif"],
        ubuntu: ["Ubuntu", "sans - serif"],
      },
    },
  },
  plugins: [forms],
};
