/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        md: "480px",
        lg: "767px",
        xl: "1200px",
        "2xl": "1536px",
      },
      maxWidth: {
        customWidth: "82.625rem",
      },
      colors: {
        primaryBlue: "#386DFF",
        primaryNavy: "#0F0161",
        primaryViolet: "#9118F5 ",
      },
      container: {
        center: true,
        screens: {
          "2xl": "82.625rem",
        },
      },
    },
  },
  plugins: [],
};
