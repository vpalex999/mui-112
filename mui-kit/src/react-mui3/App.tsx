// React & MAterialUI#3: MakeStyles
import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { CoolButton, CoolButton2, CoolButtonTheme } from './CoolButton';

const useStyles = makeStyles({
  buttonStyle: {
    color: 'red',
    border: 'none',
  },
  textStyle: {
    color: 'green',
  },
});

const App = () => {
  const classes = useStyles();
  const cool = false;

  console.log(classes);

  return (
    <>
      <Button className={classes.buttonStyle}>Small button</Button>
      <h1 className={classes.textStyle}> this is text</h1>
      <CoolButton cool={cool} />
      <br />
      <CoolButton2 cool={cool} />
      <br />
      <CoolButtonTheme />
    </>
  );
};

export default App;
