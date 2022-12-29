import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  typographyStyle: {
    color: 'blue',
    fontFamily: 'Arial',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Typography color='secondary' className={classes.typographyStyle}>
      Hello world
    </Typography>
  );
};

export default App;
