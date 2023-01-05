import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import LightPalette112 from '../components/LightPalette112';
import { themeLight112 } from '../theme';
const ThemeLight112 = () => {
  return (
    <ThemeProvider theme={themeLight112}>
      <LightPalette112 />
    </ThemeProvider>
  );
};

export default ThemeLight112;
