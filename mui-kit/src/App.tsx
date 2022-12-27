import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique',
    color: 'red',
    fontSize: '30px',
  },
  buttonStyles: {
    color: 'green',
    border: 0,
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.helloThereStyle} color='primary' variant='h2'>
        Hello there
      </Typography>
      <Button className={classes.buttonStyles} color='primary' variant='outlined'>
        Hello World
      </Button>
    </>
  );
};

export default App;
