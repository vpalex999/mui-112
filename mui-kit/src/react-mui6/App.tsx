// React & Material UI #6: Themes - Making your own Theme
import React from 'react';
import { Button, makeStyles, Typography, useTheme } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: 'linear-gradient(45deg, #FF6B8B 30%, #FF8E53 90%)',
  },
});

const App = () => {
  const theme = useTheme();
  console.log(theme);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button color='primary' variant='contained'>
        This is a button
      </Button>
      <Button color='secondary' variant='contained'>
        This is a button
      </Button>
      <Typography>This is my topography</Typography>
    </div>
  );
};

export default App;
