import { DefaultTheme } from 'styled-components';

const color = {
  primary: {
    0: '#e6f7ff',
    25: '#F1FBFF',
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
    2: '#f9f9f9',
    5: '#f7f7f7',
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

const spacing = {
  xxxs: '0.2rem',
  xxs: '0.4rem',
  xs: '0.8rem',
  sm: '1.2rem',
  md: '1.6rem',
  lg: '2.4rem',
  xl: '4.0rem',
  xxl: '8.0rem',
  xxxl: '12.0rem',
  xxxxl: '16.0rem',
};

const borderRadius = {
  none: '0',
  sm: '0.4rem',
  md: '0.8rem',
  lg: '1.6rem',
  xl: '3.0rem',
  full: '9999px',
};

const shadow = {
  none: 'none',
  sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
  md: '0 4px 12px rgba(0, 0, 0, 0.1)',
  lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
  xl: '0 12px 24px rgba(0, 0, 0, 0.1)',
};

export type ColorTypes = typeof color;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;
export type DeviceWidthTypes = typeof deviceWidth;
export type SpacingTypes = typeof spacing;
export type BorderRadiusTypes = typeof borderRadius;
export type ShadowTypes = typeof shadow;

const theme: DefaultTheme = {
  color,
  fontSize,
  fontWeight,
  deviceWidth,
  spacing,
  borderRadius,
  shadow,
};

export default theme;
