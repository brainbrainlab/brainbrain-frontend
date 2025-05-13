import { useEffect } from 'react';
import { Outlet , useLocation } from 'react-router-dom';

import * as S from './Layout.styles';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


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
