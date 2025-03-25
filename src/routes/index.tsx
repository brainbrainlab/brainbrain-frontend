import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Main from '../pages/Main/Main';
import Testing from '../pages/Testing/Testing';
import Result from '../pages/Result/Result';
import NotFound from '../pages/NotFound/NotFound';
import TestInvalid from '../pages/TestInvalid/TestInvalid';

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
        path: '/testing',
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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
