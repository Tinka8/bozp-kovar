/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich": "#001011",
        "tiffany": "#75dedd",
        "munse": "#4f8991",
        "prussian": "#17293a",
        "midnight": "#004346",
        "mint": "#07bc8a",
        "verdigris": "#5bc0be",
        "light-gray": "#f1f6f9"
          },
        fontFamily: {
            mono: ["Menlo", "monospace"],
            sans: ["Inter", "sans-serif"],
            headline: ["Familjen Grotesk", "sans-serif"],
        }
    },
  },
  plugins: [],
};
