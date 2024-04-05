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
      colorYellowBg: "#FFCB66",
      shadow: "#000000",
      errorMsg: "#D60404",
      blurEffect: "#D9D9D9"
    }
  },
  plugins: []
};
