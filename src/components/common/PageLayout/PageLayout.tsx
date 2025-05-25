import { ReactNode } from 'react';
import * as S from './PageLayout.styles';

interface PageLayoutProps {
  innerWidth?: string;
  children: ReactNode;
}

function PageLayout({ children, innerWidth = '60%' }: PageLayoutProps) {
  return (
    <S.Layout>
      <S.Container $innerWidth={innerWidth}>{children}</S.Container>
    </S.Layout>
  );
}

export default PageLayout;
