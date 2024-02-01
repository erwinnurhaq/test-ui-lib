let spacingStartOffset = 0;
const spacingStep = 0.25;
const spacingData = Array(50)
  .fill(0)
  .map(() => {
    const data = spacingStartOffset;
    spacingStartOffset += spacingStep;
    return data;
  })
  .reduce(
    (prevValue, currentValue, index) => ({ ...prevValue, [index]: `${currentValue}rem` }),
    {}
  );

module.exports = {
  corePlugins: {
    /* 
      because most of our application is using semantic ui
      we decided to use semantic ui reset instead of tailwind
      and disable tailwind reset
    */
    preflight: false,
  },
  prefix: 'psui-',
  purge: ['./src/**/*.@(js|jsx|ts|tsx)'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      px: '1px',
      ...spacingData,
    },
    extend: {
      fontFamily: {
        ps: ['Roboto', 'Lato', 'SF Pro', 'sans-serif'],
      },
      colors: {
        'ps-white': {
          10: '#ffffff',
          20: '#F7F6FF',
          30: '#F3F1FF',
          40: '#F7F7F8',
          50: '#EAEAF1',
          60: '#D4D4E4',
          70: '#9999AA',
          80: '#585864',
          90: '#1A1A1D',
          100: '#000000',
        },
        'ps-black': {
          10: '#EBF1F5',
          20: '#D5E1EA',
          30: '#A5BECF',
          40: '#869BA9',
          50: '#5A6872',
          60: '#424B51',
          70: '#303436',
          80: '#1F2122',
          90: '#151616',
          100: '#030303',
        },
        'ps-blue': {
          10: '#DAEBFD',
          20: '#A6D2FF',
          30: '#73B8FF',
          40: '#47A1FD',
          50: '#2284E7',
          60: '#0167CE',
          70: '#0251A1',
          80: '#00366C',
          90: '#002143',
          100: '#000912',
        },
        'ps-green': {
          10: '#C9F2C8',
          20: '#9DF09B',
          30: '#6DEA6A',
          40: '#3CEB39',
          50: '#17C713',
          60: '#06A903',
          70: '#068903',
          80: '#056A03',
          90: '#024601',
          100: '#012500',
        },
        'ps-red': {
          10: '#FFDFE2',
          20: '#FFBBC2',
          30: '#FF8793',
          40: '#FF596A',
          50: '#E71D32',
          60: '#D10318',
          70: '#B10214',
          80: '#930211',
          90: '#73020E',
          100: '#4E0209',
        },
        'ps-yellow': {
          10: '#FFF5DA',
          20: '#FFEAAB',
          30: '#FFDD7A',
          40: '#FFCF47',
          50: '#FFC110',
          60: '#DDA403',
          70: '#B68702',
          80: '#926C02',
          90: '#775801',
          100: '#543E01',
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
      cursor: ['hover'],
      backgroundColor: ['active'],
      borderColor: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
};
