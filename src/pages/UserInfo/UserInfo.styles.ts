import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Title = styled.h1`
  width: 60%;
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black[700]};
  margin-bottom: 2rem;
`;

export const Subtitle = styled.p`
  width: 60%;
  text-align: start;
  color: ${({ theme }) => theme.color.black[700]};
  line-height: 1.6;
  margin-bottom: 3rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(10px);
  animation: slideDown 0.3s ease forwards;

  @keyframes slideDown {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.black[700]};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.color.error[500]};
  margin-left: 2px;
`;

export const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  height: 48px;
  padding: 0 1rem;
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.color.error[500] : theme.color.primary[200])};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.black[900]};
  background-color: ${({ theme }) => theme.color.black[0]};
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
  width: 100%;
  height: 4.8rem;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.color.error[500] : theme.color.primary[200])};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.black[600]};
  background-color: ${({ theme }) => theme.color.black[0]};
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
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.black[700]};
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const RadioButton = styled.div<{ $isChecked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ theme, $isChecked }) => ($isChecked ? theme.color.primary[500] : theme.color.black[400])};
  background-color: ${({ theme, $isChecked }) => ($isChecked ? theme.color.primary[500] : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  transition: all 0.2s ease;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.color.error[500]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '!';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.color.error[500]};
    color: white;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const AgreementGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(10px);
  animation: slideDown 0.3s ease forwards;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
`;

export const AgreementLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.black[700]};
  cursor: pointer;
  line-height: 1.5;
  user-select: none;
`;

export const AgreementLink = styled.a`
  color: ${({ theme }) => theme.color.primary[500]};
  text-decoration: underline;
`;

export const SubmitButton = styled.button`
  width: 60%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.black[0]};
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  cursor: pointer;
  transition: background-color 0.2s ease;
  opacity: 0;
  transform: translateY(10px);
  animation: slideDown 0.3s ease forwards;

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
