import styled from 'styled-components';

export const Title = styled.h1`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.base};
  border-bottom: 2px solid ${({ theme }) => theme.color.primary[500]};

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  width: 100%;
`;

export const PlanInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base};

  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[50]};
`;

export const PlanTitle = styled.h2`
  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const PlanPrice = styled.p`
  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const CouponContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  margin: ${({ theme }) => theme.spacing.base} 0;
`;

export const CouponCheckbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;

  cursor: pointer;
`;

export const CouponLabel = styled.label`
  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  cursor: pointer;
`;

export const PaymentWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  width: 100%;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  width: 100%;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: center;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const PaymentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[50]};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
`;

export const PaymentInfoTitle = styled.h2`
  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`;

export const PaymentInfoDescription = styled.p`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: center;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  width: 100%;
  min-height: 40rem;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[0]};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
`;

export const PaymentFormTitle = styled.h2`
  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`;

export const PaymentFormDescription = styled.p`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: center;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[50]};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};

  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.color.error[500]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.base};
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.color.error[500] : theme.color.primary[200])};
  border-radius: 4px;

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;

    box-shadow: 0 0 0 0.2rem ${({ theme, $hasError }) => ($hasError ? theme.color.error[50] : theme.color.primary[100])};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.black[400]};
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.error[500]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.base};
  border: none;
  border-radius: 0.4rem;

  background-color: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.black[0]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[600]};
  }
`;

export const AddressInputWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  width: 100%;
`;

export const AddressSearchButton = styled.button`
  padding: ${({ theme }) => theme.spacing.base};
  border: 1px solid ${({ theme }) => theme.color.primary[500]};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.color.black[0]};
  color: ${({ theme }) => theme.color.primary[500]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  white-space: nowrap;

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[50]};
  }
`;
