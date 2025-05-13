import styled from 'styled-components';

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 1000;

  width: 10rem;
  border: 1px solid ${({ theme }) => theme.color.black[200]};
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.color.black[0]};
  box-shadow: 0 1px 10px rgb(0 0 0 / 10%);

  transform: translate(-50%, 0);
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
