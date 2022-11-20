/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "../Pages/**/*.cshtml"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "raisin-black": "#282828ff",
        "eerie-black": "#212121ff",
        "gray-web": "#7c7c7cff",
        "davys-grey": "#525252ff",
        "eerie-black-2": "#1b1b1bff",
        "cornflower-blue": "#6d9addff",
        "light-gray": "#d4d4d4ff",
        "quick-silver": "#a7a7a8ff",
        onyx: "#3e3f40ff",
        "bdazzled-blue": "#2d5a96ff",
      },
    },
  },
  plugins: [],
};
