/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors:{
        'cpPrimary' : '#81fd0d',
        'cpSecondary' : '#a8ff9b',
        'cpAccent' : '#a8ff9b',
      }
    },
  },
  plugins: [],
};