import { DefaultTheme } from 'styled-components';

const color = {
  primary: '#55CCFF',
  success: '#95DE2F',
  info: '#55CCFF',
  warning: '#FFC700',
  danger: '#FF5F2F',
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
