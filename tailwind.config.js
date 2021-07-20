module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
          'violet-eggplant': {
            '50': '#fcf2fc', 
            '100': '#f8e6f9', 
            '200': '#efc0f0', 
            '300': '#e59ae7', 
            '400': '#d14ed4', 
            '500': '#bd02c2', 
            '600': '#aa02af', 
            '700': '#8e0292', 
            '800': '#710174', 
            '900': '#5d015f'
        }, 
        'cerulean': {
          '50': '#f3fbfe', 
          '100': '#e7f8fd', 
          '200': '#c2edfa', 
          '300': '#9de2f6', 
          '400': '#54cdf0', 
          '500': '#0ab7e9', 
          '600': '#09a5d2', 
          '700': '#0889af', 
          '800': '#066e8c', 
          '900': '#055a72'
        } , 
        'midnight': {
          '50': '#f3f3f5', 
          '100': '#e7e7ea', 
          '200': '#c2c4cb', 
          '300': '#9da1ab', 
          '400': '#545a6d', 
          '500': '#0b132e', 
          '600': '#0a1129', 
          '700': '#080e23', 
          '800': '#070b1c', 
          '900': '#050917'
        }
      } , 
      boxShadow:{
        sm: '0 1px 2px 0 rgba(0, 0, 45, 0.95)',
        "card" : " -4px -4px 3px -3px #f719ff3a, 4px 4px 3px -3px  #0ab9e942 , -4px -4px 20px -3px #f719ff3a,4px 4px 20px -3px  #0ab9e952" ,
      } , 
    },
   
    screens: {
      'xs': '475px',
      // => @media (min-width: 475px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
