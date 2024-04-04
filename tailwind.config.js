/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["josefin Sans", "sans-serif"]
      }
    },
    colors: {
      colorYellowBg: "#FFC657",
      shadow: "#000000",
      errorMsg: "#D60404"
    }
  },
  plugins: []
};
