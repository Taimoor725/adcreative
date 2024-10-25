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



      keyframes: {
        "pulse-stroke": {
          "0%": { strokeDashoffset: "9999px" },
          "50%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-9999px" },
        },
      },
      animation: {
        "pulse-stroke": "pulse-stroke 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
