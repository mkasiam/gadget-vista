/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'light': '#333', // default light text color
        'dark': '#fff',  //  dark text color
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

