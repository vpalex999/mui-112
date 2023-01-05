import React from 'react';
import { Link, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <Typography variant='h2'>Nothing to see here!</Typography>
      <Link component={RouterLink} to='/'>
        Go to the home page
      </Link>
    </div>
  );
};

export default NoMatch;
