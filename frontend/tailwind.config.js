/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1931", // Navy Blue
        secondary: "#ffffff", // White
        accent: "#185ADB", // Lighter Blue
      },
    },
  },
  plugins: [],
};

