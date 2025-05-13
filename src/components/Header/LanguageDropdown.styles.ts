import styled from 'styled-components';

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0);

  width: 10rem;
  background-color: ${({ theme }) => theme.color.black[0]};
  border: 1px solid ${({ theme }) => theme.color.black[200]};
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
