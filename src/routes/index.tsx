import { createBrowserRouter } from 'react-router-dom';

import Contact from '@/pages/Contact/Contact';
import Info from '@/pages/Info/Info';
import Layout from '@/pages/Layout';
import Main from '@/pages/Main/Main';
import NotFound from '@/pages/NotFound/NotFound';
import Payments from '@/pages/Payments/Payments';
import PaymentsFail from '@/pages/Payments/PaymentsFail';
import PaymentsProcessing from '@/pages/Payments/PaymentsProcessing';
import PaymentsSuccess from '@/pages/Payments/PaymentsSuccess';
import Result from '@/pages/Result/Result';
import Testing from '@/pages/Test/Test';
import TestInvalid from '@/pages/TestInvalid/TestInvalid';
import UserInfo from '@/pages/UserInfo/UserInfo';

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
        path: '/payments',
        element: <Payments />,
      },
      {
        path: '/payments/processing',
        element: <PaymentsProcessing />,
      },
      {
        path: '/payments/fail',
        element: <PaymentsFail />,
      },
      {
        path: '/payments/success',
        element: <PaymentsSuccess />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
