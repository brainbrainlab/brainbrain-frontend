import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { router } from './routes';
import GlobalStyle from './styles/Global.style';
import { theme } from './styles/theme';
import { updateHtmlLang } from './utils/i18n';

import './styles/font.css';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    updateHtmlLang(i18n.language);
  }, [i18n.language]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
