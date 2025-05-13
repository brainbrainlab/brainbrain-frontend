import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  width: 100%;
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.color.primary[500]};
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
`;

export const PlanInfo = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[0]};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
`;

export const PlanTitle = styled.h2`
  margin-bottom: 0.5rem;

  color: ${({ theme }) => theme.color.black[800]};
  font-size: 2rem;
  font-weight: 600;
`;

export const PlanPrice = styled.p`
  color: ${({ theme }) => theme.color.primary[500]};
  font-size: 2rem;
  font-weight: 700;
`;

export const CouponContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[0]};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
`;

export const CouponCheckbox = styled.input`
  margin-right: 0.5rem;
`;

export const CouponLabel = styled.label`
  color: ${({ theme }) => theme.color.black[900]};
  font-size: 1rem;
`;

export const PaymentWidgetContainer = styled.div`
  width: 100%;
  min-height: 400px;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[0]};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
`;

export const Form = styled.form`
  width: 100%;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[0]};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
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
  margin-left: 0.25rem;

  color: ${({ theme }) => theme.color.error[500]};
`;

export const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.color.error[500] : theme.color.black[200])};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.color.black[0]};
  color: ${({ theme }) => theme.color.black[900]};

  transition: all 0.2s ease;

  &:focus {
    outline: none;

    border-color: ${({ theme, $hasError }) => ($hasError ? theme.color.error[500] : theme.color.primary[500])};

    box-shadow: 0 0 0 2px ${({ theme, $hasError }) => ($hasError ? theme.color.error[50] : theme.color.primary[100])};
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 0.5rem;

  color: ${({ theme }) => theme.color.error[500]};
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

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
  border: none;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.black[0]};
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;

  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[600]};
  }
`;
