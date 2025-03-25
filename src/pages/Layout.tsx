import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import * as S from './Layout.styles';

const Layout = () => {
  return (
    <S.Layout>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </S.Layout>
  );
};

export default Layout;
