import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/global';
import { AuthProvider } from './hooks/auth';
import { StrictMode } from 'react';
import theme from './styles/theme';


import { Routes } from './routes'
// import { PagePrato } from './pages/PagePrato'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        < Routes />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
