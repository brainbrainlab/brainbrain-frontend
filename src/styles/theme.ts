import { DefaultTheme } from 'styled-components';

const color = {
  primary: {
    50: '#E3F2FD',
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2196F3',
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
  },
  black: {
    0: '#FFFFFF',
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  success: {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#4CAF50',
    600: '#43A047',
    700: '#388E3C',
    800: '#2E7D32',
    900: '#1B5E20',
  },
  error: {
    50: '#FFEBEE',
    100: '#FFCDD2',
    200: '#EF9A9A',
    300: '#E57373',
    400: '#EF5350',
    500: '#F44336',
    600: '#E53935',
    700: '#D32F2F',
    800: '#C62828',
    900: '#B71C1C',
  },
  warning: {
    50: '#FFF3E0',
    100: '#FFE0B2',
    200: '#FFCC80',
    300: '#FFB74D',
    400: '#FFA726',
    500: '#FF9800',
    600: '#FB8C00',
    700: '#F57C00',
    800: '#EF6C00',
    900: '#E65100',
  },
} as const;

const fontSize = {
  xxs: '1.2rem', // 12px
  xs: '1.4rem', // 14px
  sm: '1.6rem', // 16px
  base: '1.8rem', // 18px
  lg: '2rem', // 20px
  xl: '2.4rem', // 24px
  xxl: '2.8rem', // 28px
  xxxl: '3.2rem', // 32px
  h1: '3.2rem', // 32px
  h2: '2.8rem', // 28px
  h3: '2.4rem', // 24px
  h4: '2rem', // 20px
  h5: '1.8rem', // 18px
  h6: '1.6rem', // 16px
} as const;

const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

const spacing = {
  none: '0',
  xxs: '0.4rem', // 4px
  xs: '0.8rem', // 8px
  sm: '1.2rem', // 12px
  base: '1.6rem', // 16px
  lg: '2rem', // 20px
  xl: '2.4rem', // 24px
  xxl: '3.2rem', // 32px
  xxxl: '4rem', // 40px
} as const;

const borderRadius = {
  none: '0',
  sm: '0.125rem', // 2px
  base: '0.25rem', // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  xxl: '1rem', // 16px
  xxxl: '1.5rem', // 24px
  full: '9999px',
} as const;

const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
} as const;

const shadow = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

const transitions = {
  default: '0.3s ease',
  fast: '0.15s ease',
  slow: '0.5s ease',
} as const;

export type ColorTypes = typeof color;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;
export type SpacingTypes = typeof spacing;
export type BorderRadiusTypes = typeof borderRadius;
export type BreakpointTypes = typeof breakpoints;
export type ShadowTypes = typeof shadow;
export type ZIndexTypes = typeof zIndex;
export type TransitionTypes = typeof transitions;

export const theme: DefaultTheme = {
  color,
  fontSize,
  fontWeight,
  spacing,
  borderRadius,
  breakpoints,
  shadow,
  zIndex,
  transitions,
};
