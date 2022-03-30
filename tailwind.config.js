module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-grey-500': '#121212',
        'dark-grey-400': '1d1d1d',
        primary: '#F1FAFF',
        text: '#222325'
      },
      maxWidth: {
        '3/4': '70%'
      },
      fontFamily: {
        primary: ['DM Serif Display', 'serif']
      }
    }
  },
  plugins: []
};
