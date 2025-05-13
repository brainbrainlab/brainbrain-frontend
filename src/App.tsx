import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import GlobalStyle from './styles/Global.style';
import { theme } from './styles/theme';
import { router } from './routes';
import { updateHtmlLang } from './utils/i18n';

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
