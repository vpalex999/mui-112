import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import themeColor112 from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeColor112}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
