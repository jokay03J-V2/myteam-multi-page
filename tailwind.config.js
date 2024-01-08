/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Livvic", "sans-serif"]
      },
      fontSize: {
        h1Large: ["6.25rem", { fontWeight: 700, lineHeight: "6.25rem" }],
        h1Small: ["4rem", { fontWeight: 700, lineHeight: "3.5rem" }],
        h2: ["3rem", { fontWeight: 700, lineHeight: "3rem" }],
        h3: ["1.125rem", { fontWeight: 700, lineHeight: "1.75rem" }],
        body1: ["1.125rem", { fontWeight: 600, lineHeight: "1.75rem" }],
        body2: ["0.938rem", { fontWeight: 600, lineHeight: "1.563rem" }]
      },
      colors: {
        lightCoral: "#F67E7E",
        midnightGreen: "#014E56",
        raptureBlue: "#79C8C7",
        policeBlue: "#2C6269",
        jungleGreen: "#004047",
        stateGreen: "#012F34",
        darkGreen: "#002529"
      }
    },
  },
  plugins: [],
}