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
        blueThree: '#667085',
        blueFour: '#25262D',
        green: '#88E755',
        greenTwo: '#39A300',
        gray: '#F5F7F8',
        grayTwo: '#E0E0E0',
        grayThree: '#F7F7F7',
        grayFour: '#E0ECD9',
        grayFive: '#E9EAED',
        graySix: '#F0F0F0',
        graySeven: '#EFEFEF'
      },
      fontFamily: {
        instrument: ['"Instrument Sans"', "sans-serif"],
        bevan: ['"Bevan"', "sans-serif"],
        dmSans: ['"DM Sans"', "sans-serif"],
        manrope: ['"Manrope"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
