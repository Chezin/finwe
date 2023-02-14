/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'first': {
        100: '#f4ebf4',
        200: '#ecd6e7',
        300: '#d9afd1',
        400: '#bd6aab',
        500: '#9c4c93',
        600: '#82317b',
        700: '#74226c',
        800: '#691461',
      },
      'second': {
        100: '#D5EFFD',
        200: '#BBE5F0',
        300: '#A2DADB',
        400: '#89D0C8',
        500: '#6FC7B7',
        600: '#4CBFA5',
        700: '#18B795',
        800: '#00A681',
      },
      'third': {
        100: '#FFF799',
        200: '#FFF46D',
        300: '#FFDE30',
        400: '#FFCB07',
        500: '#FEB715',
        600: '#FBA51A',
        700: '#F8931E',
        800: '#F37021',
      },
    },
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
};
