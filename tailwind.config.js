/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif", "Times New Roman"],
        dmSerif: ['"DM Serif Display"', "serif"],
        archivo: ['"Archivo"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
