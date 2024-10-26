/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'cali' : ["Cali",'cursive'],
        'hello' : ['hellnore','sans-serif'],
        'adelia' : ["adelia"],
        'classy' : ["classy"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

