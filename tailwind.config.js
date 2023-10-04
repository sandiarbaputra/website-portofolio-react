/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        secondary: "#166534",
        light: "#f1f5f9",
        light2: "#e2e8f0",
        dark: "#363636",
        dark2: "#2c2c2c",
        dark3: "#141414",
      },
    },
  },
  plugins: [],
};
