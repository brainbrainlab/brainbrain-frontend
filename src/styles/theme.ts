import { DefaultTheme } from 'styled-components';

const color = {
  primary: {
    0: '#e6f7ff',
    50: '#ccefff',
    100: '#b3e7ff',
    200: '#99dfff',
    300: '#80d7ff',
    400: '#66cfff',
    500: '#39BCF5',
    600: '#3399cc',
    700: '#267399',
    800: '#1a4d66',
    900: '#0d2633',
  },
  warning: {
    0: '#fff7e6',
    50: '#ffefcc',
    100: '#ffe7b3',
    200: '#ffdf99',
    300: '#ffd780',
    400: '#ffcf66',
    500: '#F7C83B',
    600: '#d1a634',
    700: '#a38229',
    800: '#755f1f',
    900: '#473b14',
  },
  danger: {
    0: '#ffe6e6',
    50: '#ffcccc',
    100: '#ffb3b3',
    200: '#ff9999',
    300: '#ff8080',
    400: '#ff6666',
    500: '#FF7171',
    600: '#e66666',
    700: '#cc5c5c',
    800: '#994747',
    900: '#663131',
  },
  black: {
    0: '#ffffff',
    50: '#f5f5f5',
    100: '#eeeeee',
    200: '#e5e5e5',
    300: '#cccccc',
    400: '#9f9f9f',
    500: '#808080',
    600: '#606060',
    700: '#404040',
    800: '#202020',
    900: '#000000',
  },
};

const fontSize = {
  h1: '4.8rem',
  h2: '4.0rem',
  h3: '3.2rem',
  h4: '2.8rem',
  h5: '2.4rem',
  h6: '2.0rem',
  lg: '1.8rem',
  base: '1.6rem',
  md: '1.4rem',
  sm: '1.2rem',
  xs: '1.0rem',
};

const deviceWidth = {
  mobile: '768px',
};

const fontWeight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

export type ColorTypes = typeof color;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;
export type DeviceWidthTypes = typeof deviceWidth;

export const theme: DefaultTheme = {
  color,
  fontSize,
  fontWeight,
  deviceWidth,
};
