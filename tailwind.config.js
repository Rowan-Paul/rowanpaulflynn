module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-grey-500': '#121212',
        'dark-grey-400': '1d1d1d',
        primary: '#f4fcf4'
      },
      maxWidth: {
        '3/4': '70%'
      }
    }
  },
  plugins: []
};
