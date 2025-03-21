import GlobalStyle from './styles/Global.style';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main/Main';
import './styles/font.css';
import Testing from './pages/Testing/Testing';
import Layout from './pages/Layout';
import Result from './pages/Result/Result';

const router = createBrowserRouter([
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
        path: '*',
        element: <div>404</div>,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
