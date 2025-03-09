import GlobalStyle from './styles/Global.style';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import './styles/font.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
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
