import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.color.black[900]};
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
  border-radius: 12px;
  border: 2px solid ${({ theme, $isSelected }) => ($isSelected ? theme.color.primary[500] : theme.color.black[200])};
  background-color: ${({ theme }) => theme.color.black[0]};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const BestBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 1rem;
  background-color: ${({ theme }) => theme.color.primary[500]};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const OptionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color.black[900]};
`;

export const Price = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.primary[500]};
  margin-bottom: 1.5rem;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.black[200]};
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.black[900]};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary[500]};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primary[100]};
  }
`;
