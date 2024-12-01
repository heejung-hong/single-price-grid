/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#2baaa7",
        "cyan-light": "#44b6b4",
        "bright-yellow": "#c0df34",
        "light-gray": "#e5eff5",
        "grayish-blue": "#98a6bd",
      },
    },
  },
  plugins: [],
};
