import React from 'react';
import { Container, createStyles, Grid, makeStyles, Paper, Typography, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return createStyles({
    typographyHeader: {
      textAlign: 'center',
      padding: '20px',
      color: theme.text.text1,
    },
    typographySubHeader: {
      paddingTop: '20px',
      paddingBottom: '20px',
      color: theme.text.text1,
    },
    paperItem: {
      height: '100px',
    },
    typographyItem: {
      padding: '10px',
      color: theme.text.text1,
    },
    typographyContext: {
      color: theme.text.text1,
    },
  });
});

const LightPalette112 = () => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);

  return (
    <Paper style={{ backgroundColor: theme.background.default }}>
      <Container>
        <Grid container>
          <Grid item lg={12}>
            <Typography variant='h4' className={classes.typographyHeader}>
              Палитра цветов интерфейса клиента 112 (Light)
            </Typography>
          </Grid>
          <Grid lg={6} item>
            <Grid lg={12} item>
              <Typography variant='h5' className={classes.typographySubHeader}>
                Интерфейс - основная разбивка
              </Typography>
            </Grid>
            <Grid item lg={12} container spacing={4}>
              <Grid lg={3} item>
                <Paper style={{ backgroundColor: theme.text.text1 }} className={classes.paperItem}>
                  <Typography align='center' className={classes.typographyItem} style={{ color: theme.text.text2 }}>
                    {`RGB ${theme.text.text1}`}
                  </Typography>
                </Paper>
                <Typography align='center' className={classes.typographyContext}>
                  Текст1 Самый тёмный. Текст, иконки
                </Typography>
              </Grid>
              <Grid lg={3} item>
                <Paper style={{ backgroundColor: theme.text.text2 }} className={classes.paperItem}>
                  <Typography align='center' className={classes.typographyItem}>
                    {`RGB ${theme.text.text2}`}
                  </Typography>
                </Paper>
                <Typography align='center' className={classes.typographyContext}>
                  Текст2 Фон рабочих областей, текст на тёмном фоне
                </Typography>
              </Grid>
              <Grid lg={3} item>
                <Paper style={{ backgroundColor: theme.background.default }} className={classes.paperItem}>
                  <Typography align='center' className={classes.typographyItem}>
                    {`RGB ${theme.background.default}`}
                  </Typography>
                </Paper>
                <Typography align='center' className={classes.typographyContext}>
                  Фоновый цвет
                </Typography>
              </Grid>
            </Grid>
            <Grid lg={12} item>
              <Typography variant='h5' className={classes.typographySubHeader}>
                Интерфейс - акцентные кнопки
              </Typography>
            </Grid>
            <Grid item lg={12} container spacing={4}>
              <Grid item lg={3}>
                <Paper className={classes.paperItem} style={{ backgroundColor: theme.button.primary }}>
                  <Typography align='center' className={classes.typographyItem} style={{ color: theme.text.text2 }}>
                    {`RGB ${theme.button.primary}`}
                  </Typography>
                </Paper>
                <Typography align='center' className={classes.typographyContext}>
                  Кнопки 1 порядка
                </Typography>
              </Grid>
              <Grid item lg={3}>
                <Paper style={{ backgroundColor: theme.button.secondary }} className={classes.paperItem}>
                  <Typography align='center' className={classes.typographyItem} style={{ color: theme.text.text2 }}>
                    {`RGB ${theme.button.secondary}`}
                  </Typography>
                </Paper>
                <Typography align='center' className={classes.typographyContext}>
                  Кнопки 2 порядка
                </Typography>
              </Grid>
              <Grid lg={3} item>
                <Paper style={{ backgroundColor: theme.button.button3 }} className={classes.paperItem}>
                  <Typography align='center' className={classes.typographyItem}>
                    {`RGB ${theme.button.button3}`}
                  </Typography>
                </Paper>
                <Typography align='center' className={classes.typographyContext}>
                  Кнопки 3 порядка и разметка страницы
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid lg={6} item>
            <Grid lg={12} item>
              <Typography variant='h5' className={classes.typographySubHeader}>
                Индикаторы служб
              </Typography>
            </Grid>
            <Grid item lg={12} container spacing={4}>
              <Grid lg={3} item>
                <Paper style={{ backgroundColor: theme.statusDds.finished }} className={classes.paperItem}>
                  <Typography align='center' className={classes.typographyItem}>
                    {`RGB ${theme.statusDds.finished}`}
                  </Typography>
                </Paper>
                <Typography align='center' className={classes.typographyContext}>
                  Завершена
                </Typography>
              </Grid>
              <Grid lg={3} item>
                <Paper style={{ backgroundColor: theme.statusDds.reaction }} className={classes.paperItem}>
                  <Typography align='center' className={classes.typographyItem} style={{ color: theme.text.text1 }}>
                    {`RGB ${theme.statusDds.reaction}`}
                  </Typography>
                </Paper>
                <Typography align='center' className={classes.typographyContext}>
                  Реагирование
                </Typography>
              </Grid>
              <Grid lg={3} item>
                <Paper style={{ backgroundColor: theme.statusDds.processed }} className={classes.paperItem}>
                  <Typography align='center' className={classes.typographyItem}>
                    {`RGB ${theme.statusDds.processed}`}
                  </Typography>
                </Paper>
                <Typography align='center' className={classes.typographyContext}>
                  Обрабатывается
                </Typography>
              </Grid>
              <Grid lg={3} item>
                <Paper style={{ backgroundColor: theme.statusDds.new }} className={classes.paperItem}>
                  <Typography align='center' className={classes.typographyItem} style={{ color: theme.text.text1 }}>
                    {`RGB ${theme.statusDds.new}`}
                  </Typography>
                </Paper>
                <Typography align='center' className={classes.typographyContext}>
                  Новая, Передача данных
                </Typography>
              </Grid>
              <Grid lg={3} item>
                <Paper style={{ backgroundColor: theme.statusDds.assigned }} className={classes.paperItem}>
                  <Typography align='center' className={classes.typographyItem} style={{ color: theme.text.text1 }}>
                    {`RGB ${theme.statusDds.assigned}`}
                  </Typography>
                </Paper>
                <Typography align='center' className={classes.typographyContext}>
                  Назначается
                </Typography>
              </Grid>
              <Grid lg={3} item>
                <Paper style={{ backgroundColor: theme.statusDds.canceled }} className={classes.paperItem}>
                  <Typography align='center' className={classes.typographyItem}>
                    {`RGB ${theme.statusDds.canceled}`}
                  </Typography>
                </Paper>
                <Typography align='center' className={classes.typographyContext}>
                  Отменяется, Отменена
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default LightPalette112;
