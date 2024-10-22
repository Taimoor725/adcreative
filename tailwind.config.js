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
        "BG":"#F5EFF2",
        "textColor":"#0F082B",
        "brDarkBlue":"#0f082b",
        "brPink":"#EF2B70",
        "brLightPink":"#F681AA"
      },
    },
  },
  plugins: [],
};
