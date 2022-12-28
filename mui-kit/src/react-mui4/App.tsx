// React&MAterial UI #4: Button

import React from 'react';
import { makeStyles, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const useStyles = makeStyles((theme) => {});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton arial-label='delete'>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label='delete' disabled color='primary'>
        <DeleteIcon />
      </IconButton>
      <IconButton color='secondary' aria-label='add an alarm'>
        <AlarmIcon />
      </IconButton>
      <IconButton color='primary' aria-label='add to shopping cart'>
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
};

export default App;
