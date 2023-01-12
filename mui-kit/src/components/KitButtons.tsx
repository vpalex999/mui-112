import React from 'react';
import { Divider, Grid, Paper, Typography, Theme, Switch } from '@material-ui/core';
import { ImportantButton, ImportantDangerButton, ImportantMainButton } from './ImportantButtons';
import UnImportantButton from './UnImportantButtons';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import { getThemeColor, getThemeLight } from '../theme';

type KitButtonsProps = {
  onChangeTheme: (t: Theme) => void;
};

const KitButtons = ({ onChangeTheme }: KitButtonsProps) => {
  const onChangeSwitchTheme = (evt: React.ChangeEvent<HTMLInputElement>) => {
    switch (evt.target.checked) {
      case true:
        onChangeTheme(getThemeColor());
        break;
      default:
        onChangeTheme(getThemeLight());
    }
  };

  return (
    <Paper>
      <Grid container>
        <Grid container>
          <Grid item>
            <Switch onChange={onChangeSwitchTheme} />
          </Grid>
          <Grid item>
            <Typography variant='h5' align='center' color='textPrimary'>
              Кнопки
            </Typography>
          </Grid>
          <Divider />
        </Grid>
        <Grid item lg={6}>
          <Grid container>
            <Grid item lg={12}>
              <Typography variant='h6' align='center' color='textPrimary'>
                Важные безвозвратные действия
              </Typography>
              <Grid item lg={12}>
                <Typography variant='h6' color='textPrimary'>
                  Размер
                </Typography>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <Typography color='textPrimary'>Много внимания - главные кнопки окна. 36px</Typography>
                  <ImportantButton style={{ marginRight: '5px' }}>Авто назначение</ImportantButton>
                  <ImportantButton>Сохранить</ImportantButton>
                </Grid>
                <Grid item>
                  <Typography color='textPrimary'>Главные кнопки формы. 31px</Typography>
                  <ImportantMainButton>Отмена</ImportantMainButton>
                </Grid>
                <Grid item>
                  <Typography color='textPrimary'>Опасные кнопки. 28px</Typography>
                  <ImportantDangerButton>Закрыть карточку</ImportantDangerButton>
                </Grid>
              </Grid>
              <Grid item lg={12}>
                <Typography variant='h6' color='textPrimary'>
                  Состояния
                </Typography>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <ImportantButton>Стандарт, Наведение, Нажатие</ImportantButton>
                </Grid>
                <Grid item>
                  <ImportantButton disabled>Недоступно</ImportantButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Grid item lg={12}>
            <Typography variant='h6' align='center' color='textPrimary'>
              Не такие важные действия + кнопки интерфейса
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <UnImportantButton startIcon={<PublicOutlinedIcon />}>Стандарт, Наведение, Нажатие</UnImportantButton>
              </Grid>
              <Grid item>
                <UnImportantButton startIcon={<PublicOutlinedIcon />} disabled>
                  Недоступно
                </UnImportantButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default KitButtons;
