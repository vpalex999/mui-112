import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import LightPalette112 from '../components/LightPalette112';
import { getThemeLight } from '../theme';

const ThemeLight112 = () => {
  return (
    <ThemeProvider theme={getThemeLight()}>
      <LightPalette112 />
    </ThemeProvider>
  );
};

export default ThemeLight112;
