import { Theme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import KitButtons from '../components/KitButtons';
import { getThemeLight } from '../theme';

const ThemeKitButtons = () => {
  const [theme, setTheme] = useState(getThemeLight());

  const onChangeTheme = (t: Theme) => {
    setTheme(t);
  };

  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <KitButtons onChangeTheme={onChangeTheme} />
    </ThemeProvider>
  );
};

export default ThemeKitButtons;
