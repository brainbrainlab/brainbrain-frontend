import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Main from '../pages/Main/Main';
import Testing from '../pages/Test/Test';
import Result from '../pages/Result/Result';
import NotFound from '../pages/NotFound/NotFound';
import TestInvalid from '../pages/TestInvalid/TestInvalid';
import Info from '../pages/Info/Info';
import Contact from '../pages/Contact/Contact';
import UserInfo from '../pages/UserInfo/UserInfo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/test',
        element: <Testing />,
      },
      {
        path: '/result',
        element: <Result />,
      },
      {
        path: '/test-invalid',
        element: <TestInvalid />,
      },
      {
        path: '/user-info',
        element: <UserInfo />,
      },
      {
        path: '/privacy',
        element: <Info />,
      },
      {
        path: '/terms',
        element: <Info />,
      },
      {
        path: '/business',
        element: <Info />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/404',
        element: <NotFound />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
