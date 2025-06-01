import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';

import * as S from './Layout.styles';

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <S.Layout>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      {location.pathname !== '/test' && <Footer />}
    </S.Layout>
  );
};

export default Layout;
