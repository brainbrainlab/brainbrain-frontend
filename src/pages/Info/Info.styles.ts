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
    list-style-type: disc;
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  ol {
    list-style-type: decimal;
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

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  margin: 2.5rem 0;
  background: #fff;
  font-size: 1.13rem;
  th,
  td {
    font-size: 1.13rem;
    border: 1px solid #ececec;
  }
  thead th {
    background: #f7f7fa !important;
    border-bottom: 1.5px solid #e0e0e0;
  }
`;

export const StyledTh = styled.th`
  padding: 18px 14px;
  font-weight: 700;
  font-size: 1.13rem;
  color: #222;
  background: #f7f7fa;
`;

export const StyledTd = styled.td`
  padding: 16px 14px;
  color: #444;
  font-size: 1.13rem;
  background: #fff;
`;
