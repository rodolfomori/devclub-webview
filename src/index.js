import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from './Router';
import GlobalStyles from './styles/globalStyles';
import { defaultTheme } from './styles/themes/default';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>
);