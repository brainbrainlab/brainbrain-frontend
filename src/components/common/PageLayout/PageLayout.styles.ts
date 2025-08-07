import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div<{ $innerWidth: string; $fitToHeight: boolean }>`
  display: flex;
  flex-direction: column;
  place-content: ${({ $fitToHeight }) => ($fitToHeight ? 'space-around' : 'start')};

  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  width: ${({ $innerWidth }) => $innerWidth};
  min-height: ${({ $fitToHeight }) => ($fitToHeight ? 'calc(100vh - 11rem)' : 'auto')};
  margin: 2rem auto;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[0]};
  box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
  font-size: ${({ theme }) => theme.fontSize.base};
`;
