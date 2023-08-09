/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors:{
        'purple': '#B54CF2'
      }
    },
  },
  daisyui: {
    themes: ["dracula"],
  },
  plugins:[require("daisyui")],
}