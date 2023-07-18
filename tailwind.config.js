/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "hsl(235, 16%, 14%)",
        red: "hsl(345, 95%, 68%)",
        desatBlue: "hsl(236, 21%, 26%)",
        grayishBlue: "hsl(237, 18%, 59%)",
      },
      fontFamily: {
        redhat: ["Red Hat Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
