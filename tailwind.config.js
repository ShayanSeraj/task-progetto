/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  
  theme: {
    colors:{
      primary:{
        100: '#5570f1',
        90:'#6075ec',
        80:'#6d83ec',
        70:'#7c8fec',
        60:'#8899e9',
        50:'#97a5eb',
        40:'#abb5e9',
        30:'#b6bfe8',
        20:'#c4cae8',
        10:'#dbdeee',
      },
      secondary:{
        100: '#ffcc91',
        90:'#ffd29e',
        80:'#ffdaae',
        70:'#ffdfba',
        60:'#ffe5c8',
        50:'#ffead1',
        40:'#fff0de',
        30:'#fff2e2',
        20:'#fef5ea',
        10:'#fef9f2',
      },
      black:{
        100: '#1c1d22',
        90:'#2c2d33',
        80:'#33343a',
        70:'#37393f',
        60:'#45464e',
        50:'#53545c',
        40:'#6e7079',
        30:'#8b8d97',
        20:'#a6a8b1',
        10:'#bec0ca',
      },
      action:{
        green: '#519c66',
        red: '#cc5f5f'
      },
      gray: '#e1e2e9',
      mainBg: '#f4f5fa',
      white: '#fff',
      stroke: '#f1f3f9',
      transparent: 'transparent'
    },
    extend: {},
    screens: {
      xl: { max: "1200px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "550px" },
      xsm: { max: "375px" },
    },
  },
  plugins: [],
};
