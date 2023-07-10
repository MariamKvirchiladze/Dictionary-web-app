/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      darkShadow: "0px 5px 30px #A445ED",
      lightShadow: "0px 5px 30px rgba(0, 0, 0, 0.1)",
    },
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
      lora: ['"Lora"', "serif"],
      mono: ['"Inconsolata"', "monospace"],
    },
  },
  plugins: [],
};
