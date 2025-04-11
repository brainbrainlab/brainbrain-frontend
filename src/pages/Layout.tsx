import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import * as S from './Layout.styles';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
