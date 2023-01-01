import React from 'react';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  typographyHeader: {
    textAlign: 'center',
    padding: '20px',
  },
  typographySubHeader: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  paperItem: {
    height: '100px',
  },
});

const ColorPalette112 = () => {
  const classes = useStyles();

  return (
    <Paper>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h4' className={classes.typographyHeader}>
            Палитра цветов интерфейса клиента 112
          </Typography>
        </Grid>
        <Grid xs={6} item>
          <Grid xs={12} item>
            <Typography variant='h5' className={classes.typographySubHeader}>
              Интерфейс - основная разбивка
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={10}>
            <Grid xs={3} item>
              <Paper style={{ backgroundColor: '#57585C' }} className={classes.paperItem}>
                <Typography align='center'>RGB 57585C</Typography>
              </Paper>
              <Typography align='center'>Самый тёмный. Текст, иконки</Typography>
            </Grid>
            <Grid xs={3} item>
              <Paper style={{ backgroundColor: '#C7D1F2' }} className={classes.paperItem}>
                <Typography align='center'>RGB C7D1F2</Typography>
              </Paper>
              <Typography align='center'>Кнопки 3 порядка и разметка страницы</Typography>
            </Grid>
            <Grid xs={3} item>
              <Paper style={{ backgroundColor: '#FBF7F7' }} className={classes.paperItem}>
                <Typography align='center'>RGB FBF7F7</Typography>
              </Paper>
              <Typography align='center'>Фоновый цвет</Typography>
            </Grid>
            <Grid xs={3} item>
              <Paper style={{ backgroundColor: '#FFFFFF' }} className={classes.paperItem}>
                <Typography align='center'>RGB FFFFFF</Typography>
              </Paper>
              <Typography align='center'>Фон рабочих областей, текст на тёмном фоне</Typography>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography variant='h5' className={classes.typographySubHeader}>
              Интерфейс - акцентные кнопки
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={10}>
            <Grid item xs={3}>
              <Paper style={{ backgroundColor: '#BDC7E8' }} className={classes.paperItem}>
                <Typography align='center'>RGB BDC7E8</Typography>
              </Paper>
              <Typography align='center'>Кнопки 2 порядка</Typography>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{ backgroundColor: '#7A829F' }} className={classes.paperItem}>
                <Typography align='center'>RGB #7A829F</Typography>
              </Paper>
              <Typography align='center'>Кнопки 1 порядка</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6} item>
          <Grid xs={12} item>
            <Typography variant='h5' className={classes.typographySubHeader}>
              Индикаторы служб
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={10}>
            <Grid xs={3} item>
              <Paper style={{ backgroundColor: '#CFEFE3' }} className={classes.paperItem}>
                <Typography align='center'>RGB CFEFE3</Typography>
              </Paper>
              <Typography align='center'>Завершена</Typography>
            </Grid>
            <Grid xs={3} item>
              <Paper style={{ backgroundColor: '#A5D3BD' }} className={classes.paperItem}>
                <Typography align='center'>RGB A5D3BD</Typography>
              </Paper>
              <Typography align='center'>Реагирование</Typography>
            </Grid>
            <Grid xs={3} item>
              <Paper style={{ backgroundColor: '#F8E08E' }} className={classes.paperItem}>
                <Typography align='center'>RGB F8E08E</Typography>
              </Paper>
              <Typography align='center'>Обрабатывается</Typography>
            </Grid>
            <Grid xs={3} item>
              <Paper style={{ backgroundColor: '#F77079' }} className={classes.paperItem}>
                <Typography align='center'>RGB F77079</Typography>
              </Paper>
              <Typography align='center'>Новая, Передача данных</Typography>
            </Grid>
            <Grid xs={3} item>
              <Paper style={{ backgroundColor: '#FFB46E' }} className={classes.paperItem}>
                <Typography align='center'>RGB FFB46E</Typography>
              </Paper>
              <Typography align='center'>Назначается</Typography>
            </Grid>
            <Grid xs={3} item>
              <Paper style={{ backgroundColor: '#D0D9E1' }} className={classes.paperItem}>
                <Typography align='center'>RGB D0D9E1</Typography>
              </Paper>
              <Typography align='center'>Отменяется, Отменена</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ColorPalette112;
