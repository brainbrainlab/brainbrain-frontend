import { Outlet, useLocation } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import * as S from './Layout.styles';

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <S.Layout>
      <Header />
      <S.Main role="presentation">
        <Outlet />
      </S.Main>
      {pathname !== '/testing' && <Footer />}
    </S.Layout>
  );
};

export default Layout;
