/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-out forwards',
      },
      colors: {
        primary: '#48cae4',
        mainText: '#000000',
        subText: '#767676',
        accentText: '#EB5757',
        background: '#00b4d8',
      },
      fontFamily: {
        spoqa: ['SpoqaHanSansNeo-Regular'],
        spoqaMedium: ['SpoqaHanSansNeo-Medium'],
        spoqaBold: ['SpoqaHanSansNeo-Bold'],
      },
      screens: {
        ss: '480px',
        md: '768px',
        lg: '1300px',
      },
      fontSize: {
        smoother: ['100%', { WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }],
      },
      backfaceVisibility: {
        hidden: 'backface-visibility: hidden;',
      },
      translate: {
        '3d': 'translate3d(0, 0, 0)',
      },
      rotate: {
        10: '10deg',
        20: '20deg',
        30: '30deg',
        40: '40deg',
        45: '45deg',
        '-10': '-10deg',
        '-20': '-20deg',
        '-30': '-30deg',
        '-40': '-40deg',
        '-45': '-45deg',
      },
    },
  },
  plugins: [require('daisyui')],
};
