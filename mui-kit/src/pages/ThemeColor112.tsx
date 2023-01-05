import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ColorPalette112 from '../components/ColorPalette112';
import { themeColor112 } from '../theme';

const ThemeColor112 = () => {
  return (
    <ThemeProvider theme={themeColor112}>
      <ColorPalette112 />
    </ThemeProvider>
  );
};

export default ThemeColor112;
