/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        nav: '#353940',
        title: '#72777f',
        prod: '#353942',
        rs: '#212529',
        home: '#1e68ad',
        blue1: '#17a2b8',
        green1: '#28a544',
        footer: '#DC3545',
        about: '#e8ecef',
        grey: '#939499',
      },
      backgroundImage: {
        welcome: "url('/src/Images/bg1.jpeg')",
      },
    },
  },
  plugins: [],
};
