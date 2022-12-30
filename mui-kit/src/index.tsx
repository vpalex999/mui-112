import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './react-mui10/App';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
