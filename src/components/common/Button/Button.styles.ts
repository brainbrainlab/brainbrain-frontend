import styled, { css } from 'styled-components';

import { calculateButtonColor } from '@/utils/calculateButtonColor';

const reducedCssValue = (value?: string): string | undefined => {
  if (typeof value !== 'string') return value;

  const match = value.match(/^(-?\d*\.?\d+)(\D*)$/);

  if (match) {
    const number = parseFloat(match[1]);
    const unit = match[2] || '';
    return `${number * 0.8}${unit}`;
  }
  return value;
};

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColor = 'primary' | 'warning' | 'error' | 'black';

interface ButtonStyleProp {
  $css?: ReturnType<typeof css>;
  $size?: ButtonSize;
  $width?: string;
  $height?: string;
  $borderRadius?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $textAlign?: string;
  $color?: ButtonColor | string;
  $filled?: boolean;
  $rounded?: boolean;
  $animation?: boolean;
  disabled?: boolean;
}

const defaultSizes: Record<ButtonSize, { width: string; height: string; borderRadius: string; fontSize: string }> = {
  sm: { width: '14rem', height: '4rem', borderRadius: '0.8rem', fontSize: 'md' },
  md: { width: '18rem', height: '5.8rem', borderRadius: '1rem', fontSize: 'lg' },
  lg: { width: '22rem', height: '7.2rem', borderRadius: '1.2rem', fontSize: 'xl' },
  xl: { width: '26rem', height: '8rem', borderRadius: '1.2rem', fontSize: 'xxl' },
};

export const Button = styled.button<ButtonStyleProp>`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: ${({ $animation }) => ($animation ? 'all 0.2s' : 'none')};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ theme, $size = 'md', $width, $height, $borderRadius, $fontSize, $fontWeight, $textAlign, $rounded }) => {
    const defaultSize = defaultSizes[$size];
    const defaultFontSizeKey = defaultSize.fontSize as keyof typeof theme.fontSize;

    const finalWidth = $width || defaultSize.width;
    const finalHeight = $height || defaultSize.height;
    const finalBorderRadius = $rounded ? '50rem' : $borderRadius || defaultSize.borderRadius;
    const finalFontSize = $fontSize || theme.fontSize[defaultFontSizeKey];

    return css`
      width: ${finalWidth};
      height: ${finalHeight};
      border-radius: ${finalBorderRadius};

      font-size: ${finalFontSize};
      font-weight: ${$fontWeight || 'normal'};
      text-align: ${$textAlign || 'center'};

      @media (width <= ${theme.breakpoints.sm}) {
        width: ${reducedCssValue(finalWidth)};
        height: ${reducedCssValue(finalHeight)};
        border-radius: ${reducedCssValue(finalBorderRadius)};

        /* font-size: ${reducedCssValue(finalFontSize)}; */
      }
    `;
  }}

  ${({ $color = 'primary', $filled = false }) => {
    const { base, hover, active, disabled } = calculateButtonColor($color, $filled);
    return css`
      border: ${$filled ? 'none' : '1px solid'};

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
  }}

  &:hover {
    transform: ${({ $animation }) => ($animation ? 'scale(1.01)' : 'none')};
  }

  &:active {
    transform: ${({ $animation }) => ($animation ? 'scale(1.02)' : 'none')};
  }

  ${({ $css }) => $css}
`;

Button.defaultProps = {
  $size: 'md',
  $color: 'primary',
  $filled: false,
  $rounded: false,
  $animation: true,
};
