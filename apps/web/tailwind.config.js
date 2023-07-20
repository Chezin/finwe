/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#691562",
          secondary: "#fcab28",
          accent: "#089971",
          neutral: "#FFFFFF",
          "base-100": "#1a103c",
          info: "#53c0f3",
          success: "#71ead2",
          warning: "#f3cc30",
          error: "#e24056",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
