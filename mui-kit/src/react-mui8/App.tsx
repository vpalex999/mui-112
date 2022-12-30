// React & Material UI #8: Add dark mode to you site(theming)

import React, { useState } from 'react';
import { Grid, Typography, Button, Paper, ThemeProvider, createTheme, Switch } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  const greenTheme = createTheme({
    palette: {
      primary: green,
      secondary: green,
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : greenTheme}>
      <Paper style={{ height: '100vh' }}>
        <Grid container direction='column'>
          <Typography variant='h1'>This is My App!</Typography>
          <Button variant='contained' color='primary'>
            This is a button
          </Button>
          <Button variant='contained' color='secondary'>
            This is another button
          </Button>
          <Switch
            checked={darkMode}
            onChange={() => {
              setDarkMode((mode) => !mode);
            }}
          />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
