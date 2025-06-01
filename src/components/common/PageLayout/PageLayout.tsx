import { ReactNode } from 'react';
import * as S from './PageLayout.styles';

interface PageLayoutProps {
  innerWidth?: string;
  fitToHeight?: boolean;
  children: ReactNode;
}

function PageLayout({ children, innerWidth = '70%', fitToHeight = false }: PageLayoutProps) {
  return (
    <S.Layout>
      <S.Container $innerWidth={innerWidth} $fitToHeight={fitToHeight}>
        {children}
      </S.Container>
    </S.Layout>
  );
}

export default PageLayout;
