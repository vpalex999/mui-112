// React & MAterial UI #11: Grid Centering
import React from 'react';
import { Grid } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const App = () => {
  return (
    <Grid container direction='column' justifyContent='flex-start' alignItems='center' style={{ height: '100px' }}>
      <Grid item>
        <AcUnitIcon color='primary' />
      </Grid>
      <Grid item>
        <AcUnitIcon color='secondary' />
      </Grid>
    </Grid>
  );
};

export default App;
