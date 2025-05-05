import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.color.primary[500]};
`;

export const PlanInfo = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.black[0]};
  border-radius: 8px;
`;

export const PlanTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.black[900]};
`;

export const PlanPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary[500]};
`;

export const CouponContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const CouponCheckbox = styled.input`
  margin-right: 0.5rem;
`;

export const CouponLabel = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.black[900]};
`;

export const PaymentWidgetContainer = styled.div`
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.black[900]};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.color.danger[500]};
  margin-left: 0.25rem;
`;

export const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.color.danger[500] : theme.color.black[200])};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.black[900]};
  background-color: ${({ theme }) => theme.color.black[0]};

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => ($hasError ? theme.color.danger[500] : theme.color.primary[500])};
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.danger[500]};
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
