import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';

import * as S from './Layout.styles';

const Layout = () => {
  return (
    <S.Layout>
      <Header />
      <S.Main role="presentation">
        <Outlet />
      </S.Main>
    </S.Layout>
  );
};

export default Layout;
