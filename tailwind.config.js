/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        customWidth: "82.625rem",
      },
      colors: {
        primaryBlue: "#386DFF",
        primaryNavy: "#0F0161",
        primaryViolet: "#9118F5 ",
      },
    },
  },
  plugins: [],
};
