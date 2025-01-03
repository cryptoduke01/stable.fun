/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        red: {
          500: "#EF4444",
          600: "#DC2626",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
