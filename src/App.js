import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import CustomTheme from './styles/customTheme';
import Products from './components/products.tsx';
import Toolbar from './components/toolbar.tsx';
import { Container } from '@mui/material';
import { GlobalContextProvider } from './services/context/GlobalContext';

const App = ({ Component, pageProps }) => {
    return(
      <GlobalContextProvider>
        <ThemeProvider theme={CustomTheme}>
          <CssBaseline />
            <Toolbar/>
            <Container disableGutters>
              <Products/>
            </Container>
        </ThemeProvider>
      </GlobalContextProvider>
    )
}

export default App;
