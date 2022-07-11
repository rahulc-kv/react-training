module.exports = {
  content: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blackGreen: '#1A191C',
        comet: '#5B6275',
        coralRed: '#F64040',
        davyGrey: '#4B5563',
        dawnPink: '#EBECED',
        greenHaze: '#07B055',
        greyCloud: '#B4B7BD',
        harp: '#E9EDF2',
        hawksBlue: '#D4DDFC',
        lightOrange: '#FFEFE0',
        osloGrey: '#858D9D',
        paleGreen: '#EBFFF4',
        primaryColor: '#2653F1',
        roseWhite: '#FFF6F6',
        secondaryColor: '#5E7799',
        slateGrey: '#7E818D',
        whiteLilac: '#F6F6F6',
        whiteSmoke: '#F3F5F7',
        warningRed: '#F55E5E',
        mercury: '#E5E7EB'
      },
      animation: {
        'slide-to-left': 'slide-left 0.7s ease-in forwards',
        'slide-to-right': 'slide-right 0.7s ease-in forwards',
        'zoom-to-front': 'zoom-in 0.7s ease-in-out',
        'zoom-to-back': 'zoom-out 0.7s ease-in-out forwards',
        rotate: 'rotation 2s infinite'
      },
      keyframes: {
        'slide-left': {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        },
        'zoom-in': {
          '0%': {
            transform: 'scale(0.8)',
            opacity: 0
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        },
        'zoom-out': {
          '0%': {
            transform: 'scale(1)',
            opacity: 1
          },
          '100%': {
            transform: 'scale(0.8)',
            opacity: 0
          }
        },
        rotation: {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        }
      },
      spacing: {
        20: '20%'
      },
      width: {
        15: '15%',
        44: '44%',
        96: '96%',
        220: '220px',
        250: '250px',
        350: '350px'
      },
      height: {
        '40px': '40px',
        '100px': '100px',
        '550px': '550px'
      },
      fontFamily: {
        inter: ['Inter']
      },
      text: {
        '10px': '10px'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: []
};
