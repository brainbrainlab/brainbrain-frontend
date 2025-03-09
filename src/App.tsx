import GlobalStyle from './styles/Global.style';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main/Main';
import './styles/font.css';
import Testing from './pages/Testing/Testing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/testing',
    element: <Testing />,
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
