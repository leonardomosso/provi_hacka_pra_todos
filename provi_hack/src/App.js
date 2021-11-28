import React from 'react';
import './styles/style.css';
import Router from './Routes/Router';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Leva para o Router onde as páginas são organizadas.  */}
      <Router />
    </ThemeProvider>
  );
}

export default App;
