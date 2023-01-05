import React from 'react';
import { Button, Divider, makeStyles } from '@material-ui/core';
import { Link as RouterLink, Outlet } from 'react-router-dom';

const useStyles = makeStyles({
  buttonStyle: {
    marginRight: '5px',
  },
});

const Layout = () => {
  const classes = useStyles();
  return (
    <div>
      <Button color='primary' variant='contained' component={RouterLink} to='/theme-light-112' className={classes.buttonStyle}>
        Theme Light 112
      </Button>
      <Button color='primary' variant='contained' component={RouterLink} to='/theme-color-112' className={classes.buttonStyle}>
        Theme Color 112
      </Button>
      <Divider />
      <Outlet />
    </div>
  );
};

export default Layout;
