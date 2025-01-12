/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors:{
        'cpPrimary' : '#6ce235',
        'cpSecondary' : '#8bc6ef',
        'cpAccent' : '#606de8',
        'cpSecondaryLight' : '#e0f1f0',
        'cpPrimaryLight' : '#eefbe7', 
      }
    },
  },
  plugins: [],
};