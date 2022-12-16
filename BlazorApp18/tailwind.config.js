/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{razor,html}'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      'component': '1px',
    },
    // fontFamily: {
    //   sans: ['Open Sans', 'sans-serif']
    // },
    extend: {
      height: {
        '18': '4.5rem'
      },
      inset: {
        '18': '4.5rem'
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))'
      },
      gridRow: {
        'span-9': 'span 9 / span 9',
      },
      colors: {
        'fromMainBackground': '#14fffa',
        'middleMainBackground': '#46d0fb',
        'toMainBackground': '#7aa1fd',
        'mainGradientTransparency':'#1df6fa',

        'borderColor':'rgb(229 231 235)',

        // 'componentColorDarkest':'#6a9bca',
        'componentColorDarkest':'#fefefe',
        'componentColorGreen':'#2c8d7e',
        'componentPlaceholder':'#ffffff',
        'componentPlaceholderText':'#bcbcbc',
        'inputsBorder':'#cbcbcb',
        'inputText':'#454545',
      }
    }
  },
  plugins: [],
}
