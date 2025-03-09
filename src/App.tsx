import GlobalStyle from './styles/Global.style';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>this is brainbrain</div>
    </ThemeProvider>
  );
}

export default App;
