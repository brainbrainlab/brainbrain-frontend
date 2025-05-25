import styled, { css, keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 2rem 0;

  background-color: transparent;
`;

export const Title = styled.h1`
  width: 60%;
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.color.black[800]};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Subtitle = styled.p`
  width: 60%;
  margin-bottom: 3rem;

  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.6;
  text-align: start;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: 60%;
  padding: 2rem;
`;

export const FormGroup = styled.div<{ withAnimation?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;

  ${({ withAnimation }) =>
    withAnimation
      ? css`
          opacity: 0;

          animation: ${slideDown} 0.3s ease forwards;
          transform: translateY(10px);
        `
      : css`
          opacity: 1;

          animation: none;
          transform: none;
        `}
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Required = styled.span`
  margin-left: 2px;

  color: ${({ theme }) => theme.color.error[500]};
`;

export const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  height: 48px;
  padding: 0 1rem;
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.color.error[500] : theme.color.primary[200])};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[0]};
  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.base};

  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme, $hasError }) => ($hasError ? theme.color.error[500] : theme.color.primary[400])};
  }

  &:focus {
    outline: none;

    border-color: ${({ theme, $hasError }) => ($hasError ? theme.color.error[500] : theme.color.primary[500])};

    box-shadow: 0 0 0 3px ${({ theme, $hasError }) => ($hasError ? theme.color.error[50] : theme.color.primary[100])};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.black[400]};
  }
`;

export const Select = styled.select<{ $hasError: boolean }>`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4.8rem;
  padding: 0 1rem;
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.color.error[500] : theme.color.primary[200])};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[0]};
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.base};

  transition: all 0.2s ease;

  cursor: pointer;

  &:hover {
    border-color: ${({ theme, $hasError }) => ($hasError ? theme.color.error[500] : theme.color.primary[400])};
  }

  &:focus {
    outline: none;

    border-color: ${({ theme, $hasError }) => ($hasError ? theme.color.error[500] : theme.color.primary[500])};

    box-shadow: 0 0 0 3px ${({ theme, $hasError }) => ($hasError ? theme.color.error[100] : theme.color.primary[100])};
  }

  option {
    padding: 0.75rem 1rem;
  }

  option:disabled {
    color: ${({ theme }) => theme.color.black[400]};
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  margin-top: 0.5rem;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;
  border-radius: 4px;

  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.base};

  transition: all 0.2s ease;

  cursor: pointer;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const RadioButton = styled.div<{ $isChecked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  border: 2px solid ${({ theme, $isChecked }) => ($isChecked ? theme.color.primary[500] : theme.color.black[400])};
  border-radius: 50%;

  background-color: ${({ theme, $isChecked }) => ($isChecked ? theme.color.primary[500] : 'transparent')};

  transition: all 0.2s ease;
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.color.error[500]};
  font-size: ${({ theme }) => theme.fontSize.sm};

  &::before {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 16px;
    height: 16px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.color.error[500]};
    color: white;
    font-size: 12px;
    font-weight: bold;
    content: '!';
  }
`;

export const AgreementGroup = styled.div<{ withAnimation?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;

  ${({ withAnimation }) =>
    withAnimation
      ? `
    opacity: 0;
    animation: ${slideDown} 0.3s ease forwards;
    transform: translateY(10px);
  `
      : `
    opacity: 1;
    animation: none;
    transform: none;
  `}
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0.5rem;
  border-radius: 6px;

  transition: all 0.2s ease;

  cursor: pointer;
`;

export const AgreementLabel = styled.label`
  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.5;

  cursor: pointer;
  user-select: none;
`;

export const AgreementLink = styled.a`
  color: ${({ theme }) => theme.color.primary[500]};
  text-decoration: underline;
`;

export const SubmitButton = styled.button<{ withAnimation?: boolean }>`
  width: 60%;
  padding: 1rem;
  border: none;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.black[0]};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};

  transition: background-color 0.2s ease;

  cursor: pointer;

  ${({ withAnimation }) =>
    withAnimation
      ? `
    opacity: 0;
    animation: ${slideDown} 0.3s ease forwards;
    transform: translateY(10px);
  `
      : `
    opacity: 1;
    animation: none;
    transform: none;
  `}

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[600]};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.primary[700]};
  }
`;

export const ErrorContainer = styled.div`
  min-height: 20px;
  margin-top: 0.25rem;
`;
