/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#18191a",
        "secondary": "#242526",
        "tertiary": "#2f3136",
        "test": "#ffffff",
        "color-icon": "#b8bbbf",
      },
    },
  },
  plugins: [],
};
