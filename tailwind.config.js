/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
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
  			blueFive: '#3F3873',
  			blueSix: '#1F1951',
        	blueSeven: '#344054',
        	blueEight: '#706F70',
			blueNine: '#3C75FF',
  			green: '#88E755',
  			greenTwo: '#39A300',
        	greenThree: '#62D60E',
			greenFour: '#1A4413',
  			gray: '#F5F7F8',
  			grayTwo: '#E0E0E0',
  			grayThree: '#F7F7F7',
  			grayFour: '#E0ECD9',
  			grayFive: '#E9EAED',
  			graySix: '#F0F0F0',
  			graySeven: '#EFEFEF',
  			grayEight: '#141415',
  			grayNine: '#D0D5DD',
			grayTen: '#D6E0F3',
			grayEleven: '#EBF1FC',
			grayTwelve: '#BDBDBD',
			grayThirteen: '#4F4F4F',
			grayFourteen: '#98A2B3',
			grayFifteen: '#D7E3FA',
			graySixteen: '#F2F2F2',
			graySeventeen: '#CBD5E1'
  		},
  		fontFamily: {
  			instrument: ['Instrument Sans"', "sans-serif"],
  			bevan: ['Bevan"', "sans-serif"],
  			dmSans: ['DM Sans"', "sans-serif"],
  			manrope: ['Manrope"', "sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
