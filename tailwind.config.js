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
			blackTwo: '#242527',
  			blue: '#161141',
  			blueTwo: '#475569',
  			blueThree: '#667085',
  			blueFour: '#25262D',
  			blueFive: '#3F3873',
  			blueSix: '#1F1951',
        	blueSeven: '#344054',
        	blueEight: '#706F70',
			blueNine: '#3C75FF',
			blueTen: '#575F6A',
			blueEleven: '#232038',
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
			graySeventeen: '#CBD5E1',
			grayEighteen: '#E8E8E6',
			grayNinteen: '#B4B2C2',
			grayTwenty: '#333333',
			grayTwentyOne: '#F1F5F9',
			grayTwentyTwo: '#E2E8F0',
			grayTwentyThree: '#F9F9F9',
			grayTwentyFour: '#E1DADA66',
			red: '#D1797A',
			yellow: '#febd58'
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
