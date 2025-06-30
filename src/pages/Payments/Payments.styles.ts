import styled, { css } from 'styled-components';

export const Title = styled.h1`
  margin: 5rem;

  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;

export const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;

  width: 100%;
  margin-bottom: 2rem;
`;

export const OptionCard = styled.div<{ $isSelected: boolean; $isBest: boolean }>`
  position: relative;

  padding: 2rem;
  border: 2px solid
    ${({ $isSelected, $isBest }) =>
      css`
        ${$isSelected ? '#007AFF' : $isBest ? '#FFD700' : '#E5E5E5'}
      `};
  border-radius: 1rem;

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);

    transform: translateY(-4px);
  }
`;

export const BestBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;

  padding: 4px 12px;
  border-radius: 12px;

  background-color: #ffd700;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const OptionTitle = styled.h2`
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.color.primary[700]};
  font-size: 3rem;
  font-weight: bold;
`;

export const Price = styled.div`
  margin-bottom: 1.5rem;

  font-size: 3rem;
  font-weight: bold;
`;

export const FeaturesList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: 0.75rem;

  font-size: 1.5rem;
`;

export const CheckIcon = styled.div`
  position: relative;

  width: 20px;
  height: 20px;
  margin-right: 0.75rem;
  border-radius: 50%;

  background-color: #4caf50;

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 4px;
    height: 8px;
    border: solid white;

    transform: translate(-50%, -50%) rotate(45deg);
    content: '';
    border-width: 0 2px 2px 0;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  margin-top: 2rem;
`;

export const CouponForm = styled.form`
  display: flex;
  gap: 1rem;

  margin-top: 1rem;
`;

export const Input = styled.input`
  flex: 1;

  padding: 0.75rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.5rem;
`;

export const PaymentsMethodContainer = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 1rem;
`;

export const PaymentsMethodTitle = styled.h3`
  margin-bottom: 1rem;

  font-size: 1.25rem;
`;

export const PaymentsMethodList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const PaymentsMethodItem = styled.div<{ $isSelected: boolean }>`
  padding: 1rem;
  border: 2px solid
    ${({ $isSelected }) =>
      css`
        ${$isSelected ? '#007AFF' : '#E5E5E5'}
      `};
  border-radius: 0.5rem;

  text-align: center;

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    border-color: #007aff;

    background-color: #f5f9ff;
  }
`;
