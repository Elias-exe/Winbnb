import { ThemeProvider } from 'styled-components';
import Home from '../../pages/Home/index';
import { Container } from './styles';
import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
