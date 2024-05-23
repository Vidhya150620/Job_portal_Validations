/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#0A73BE",
        secondary: "#F8F9FA",
        info: "#0A73BE",
        error: "#C30000",
        bg_color_action: "#F5FAFF",
        text_color: "#303030",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [
    require("daisyui"),
    require("@material-tailwind/react", flowbite.plugin()),
  ],
};
