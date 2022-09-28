/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "1rem",
        "base-adjusted-sm": "0.938rem",
      },
      fontFamily: {
        sans: [
          "InterVar",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        serif: [
          "LiterataVar",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      colors: {
        silver: "#DFDFDE",
        "silver-dark": "#9B9B9B",
        "neutral-950": "#101010",
        "neutral-850": "#1C1C1C",
      },
      textDecorationThickness: {
        1.5: "1.5px",
      },
      textUnderlineOffset: {
        1.5: "1.5px",
        2.5: "2.5px",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.215, 0.61, 0.355, 1)",
      },
      maxWidth: {
        main: "44rem",
      },
      width: {
        main: "44rem",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      letterSpacing: {
        xs: "-.000490774em",
        sm: "-.00622354em",
        normal: "-.0109598em",
        zero: "0",
      },
      animation: {
        scale: "scale .4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(.8) translateX(-50%)", opacity: 0 },
          "100%": { transform: "scale(1) translateX(-50%)", opacity: 1 },
        },
      },
      boxShadow: {
        fancy:
          "0px 0px 0px 1px rgba(25, 37, 50, 0.05), 0px 3px 7px -3px rgba(25, 37, 50, 0.1), 0px 6px 12px -2px rgba(25, 37, 50, 0.1);",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
