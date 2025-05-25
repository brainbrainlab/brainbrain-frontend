import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: calc(100vh - 20rem);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  width: 100%;
  max-width: 80rem;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
`;

export const Title = styled.h1`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.base};
  border-bottom: 2px solid ${({ theme }) => theme.color.primary[500]};

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: center;
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[50]};
`;

export const PaymentInfoTitle = styled.h2`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.base};
  border-bottom: 1px solid ${({ theme }) => theme.color.black[200]};

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

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[0]};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
`;

export const PaymentFormTitle = styled.h2`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.base};
  border-bottom: 1px solid ${({ theme }) => theme.color.black[200]};

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
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.color.error[500]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  padding: 0 ${({ theme }) => theme.spacing.base};
  border: 1.5px solid ${({ theme }) => theme.color.black[200]};
  border-radius: 6px;

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;

    box-shadow: 0 0 0 0.3rem ${({ theme }) => theme.color.primary[100]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.black[400]};
  }
`;

export const ErrorMessage = styled.p`
  min-height: 2rem;

  color: ${({ theme }) => theme.color.error[500]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.base};
  border: none;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.black[0]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[600]};

    transform: translateY(1rem);
  }
`;

export const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  margin-bottom: 3rem;
`;

export const OptionCard = styled.div<{ $isSelected: boolean; $isBest?: boolean }>`
  position: relative;

  padding: 2rem;
  border: 2px solid ${({ theme, $isSelected }) => ($isSelected ? theme.color.primary[500] : theme.color.black[200])};
  border-radius: 12px;

  background-color: ${({ theme }) => theme.color.black[0]};

  transition: all 0.2s ease;

  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);

    transform: translateY(-4px);
  }
`;

export const BestBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 1rem;

  padding: 0.5rem 1rem;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.color.primary[500]};
  color: white;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const OptionTitle = styled.h2`
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Price = styled.div`
  margin-bottom: 1.5rem;

  color: ${({ theme }) => theme.color.primary[500]};
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const FeaturesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 0.5rem;

  color: ${({ theme }) => theme.color.black[700]};
`;

export const CheckIcon = styled(FaCheck)`
  color: ${({ theme }) => theme.color.primary[500]};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;

  margin-top: 2rem;
`;

export const CouponForm = styled.form`
  display: flex;
  gap: 1rem;

  margin-top: 1rem;
`;
