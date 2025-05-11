import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.color.primary[500]};
  width: 100%;
`;

export const PlanInfo = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.color.black[0]};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PlanTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.black[800]};
`;

export const PlanPrice = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary[500]};
`;

export const CouponContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.black[0]};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  width: 100%;
  min-height: 400px;
  background-color: ${({ theme }) => theme.color.black[0]};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

export const Form = styled.form`
  margin-bottom: 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.black[0]};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.black[900]};
  font-weight: 500;
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
  color: ${({ theme }) => theme.color.black[900]};
  background-color: ${({ theme }) => theme.color.black[0]};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => ($hasError ? theme.color.danger[500] : theme.color.primary[500])};
    box-shadow: 0 0 0 2px ${({ theme, $hasError }) => ($hasError ? theme.color.danger[100] : theme.color.primary[100])};
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.color.danger[500]};
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const AddressInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const AddressSearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.black[0]};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[600]};
  }
`;
