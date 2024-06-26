module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'),require("daisyui")],
  daisyui:{
    themes: ["light", "dark", "cupcake","nord","black"],
  }
}