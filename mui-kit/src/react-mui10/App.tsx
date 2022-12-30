// React & Material UI #10: Grid & Grid Layout
import React from 'react';
import { Divider, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'blue',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction='column'>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid xs={12} container>
          <Grid item xs={6}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Grid>
          <Grid item xs={6}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
