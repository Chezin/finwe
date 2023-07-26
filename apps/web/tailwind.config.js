/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        acai: {
          primary: "#6f2f67",
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
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
