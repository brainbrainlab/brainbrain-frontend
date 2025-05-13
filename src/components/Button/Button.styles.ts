import styled, { css } from 'styled-components';

import { calculateButtonColor } from '@/utils/calculateButtonColor';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColor = 'primary' | 'warning' | 'error' | 'black';

interface ButtonStyleProp {
  $css?: ReturnType<typeof css>;
  $size: ButtonSize;
  $width?: string;
  $height?: string;
  $borderRadius?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $textAlign?: string;
  $color: ButtonColor | string;
  $filled: boolean;
  $rounded: boolean;
  $animation: boolean;
  disabled: boolean;
}

interface ButtonShapesProp {
  size?: ButtonSize;
  width?: string;
  height?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
}

const buttonSize = ({ size, width, height, borderRadius, fontSize, fontWeight, textAlign }: ButtonShapesProp) => {
  const defaultSizes = {
    sm: { width: '14rem', height: '4rem', borderRadius: '0.8rem', fontSize: 'md' },
    md: { width: '18rem', height: '5.8rem', borderRadius: '1rem', fontSize: 'lg' },
    lg: { width: '22rem', height: '7.2rem', borderRadius: '1.2rem', fontSize: 'xl' },
    xl: { width: '26rem', height: '8rem', borderRadius: '1.2rem', fontSize: 'xxl' },
  };

  const {
    width: defaultWidth,
    height: defaultHeight,
    borderRadius: defaultBorderRadius,
    fontSize: defaultFontSize,
  } = defaultSizes[size || 'md'];

  return css`
    width: ${width || defaultWidth};
    height: ${height || defaultHeight};
    border-radius: ${borderRadius || defaultBorderRadius};

    font-size: ${fontSize || (({ theme }) => theme.fontSize[defaultFontSize as keyof typeof theme.fontSize])};
    font-weight: ${fontWeight || 'normal'};
    text-align: ${textAlign || 'center'};
  `;
};

interface ButtonColorProp {
  color: ButtonColor | string;
  filled: boolean;
}

const buttonColor = ({ color, filled }: ButtonColorProp) => {
  const { base, hover, active, disabled } = calculateButtonColor(color, filled);

  return css`
    ${base}
    &:hover {
      ${hover}
    }

    &:active {
      ${active}
    }

    &:disabled {
      ${disabled}
    }
  `;
};

interface ButtonAnimationProp {
  animation: boolean;
}

const buttonAnimation = ({ animation }: ButtonAnimationProp) => css`
  &:hover {
    transform: ${animation ? 'scale(1.01)' : 'none'};
  }

  &:active {
    transform: ${animation ? 'scale(1.02)' : 'none'};
  }
`;

export const Button = styled.button<ButtonStyleProp>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: ${({ $filled }) => ($filled ? 'none' : '1px solid')};
  border-radius: ${({ $rounded, $borderRadius }) => $borderRadius || ($rounded ? '50rem' : '0.5rem')};

  transition: all 0.2s;

  ${({ $size, $width, $height, $borderRadius, $fontSize }) =>
    buttonSize({ size: $size, width: $width, height: $height, borderRadius: $borderRadius, fontSize: $fontSize })}

  ${({ $color, $filled }) => buttonColor({ color: $color, filled: $filled })}

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ $animation }) => $animation && buttonAnimation({ animation: $animation })}

  ${props => props.$css}
`;
