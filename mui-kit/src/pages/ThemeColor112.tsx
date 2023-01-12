import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ColorPalette112 from '../components/ColorPalette112';
import { getThemeColor } from '../theme';

const ThemeColor112 = () => {
  return (
    <ThemeProvider theme={getThemeColor()}>
      <ColorPalette112 />
    </ThemeProvider>
  );
};

export default ThemeColor112;
