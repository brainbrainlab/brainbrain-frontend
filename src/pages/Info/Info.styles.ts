import styled from 'styled-components';

export const InfoContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black[0]};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const InfoTitle = styled.h1`
  width: 60%;
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black[700]};
  margin-bottom: 2rem;
  text-align: start;
  border-bottom: 2px solid ${({ theme }) => theme.color.primary[500]};
  padding-bottom: 1rem;
`;

export const InfoContent = styled.div`
  width: 60%;
  color: ${({ theme }) => theme.color.black[700]};
  line-height: 1.6;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.h4};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.color.black[700]};
    margin: 2rem 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.h5};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.color.black[700]};
    margin: 1.6rem 0;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.color.black[900]};
  }
`;
