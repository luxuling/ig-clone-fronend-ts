/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        igBlue: '#0095F6',
        lineGrey: '#dbdbdb',
        bgGrey: '#FAFAFA',
        darkGrey: '#262626',
        ligthGrey: '#A8A8A8',
      },
    },
  },
  plugins: [],
};
