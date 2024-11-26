/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        blue: '#161141',
        blueTwo: '#475569',
        green: '#88E755',
        greenTwo: '#39A300',
        gray: '#F5F7F8',
        grayTwo: '#E0E0E0'
      },
      fontFamily: {
        'InstrumentSans-Bold' : ['InstrumentSans-Bold', 'sans-serif'],
        'InstrumentSans-SemiBold' : ['InstrumentSans-SemiBold', 'sans-serif'],
        'InstrumentSans-Medium' : ['InstrumentSans-Medium', 'sans-serif'],
        'InstrumentSans-Regular' : ['InstrumentSans-Regular', 'sans-serif']
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
