/** Кнопки. Не такие важные действия + кнопки интерфейса. */
import React from 'react';
import { Button, ButtonProps, createStyles, makeStyles, useTheme } from '@material-ui/core';

const useUnImportantButtonStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: '36px',
      color: theme.text.text2,
      backgroundColor: theme.button.secondary,
      '&:hover': { color: theme.text.text2, backgroundColor: theme.hover.secondary, boxShadow: 'none' },
      '&:active': {
        color: theme.text.text1,
        backgroundColor: theme.active.secondary,
        border: '1px solid',
        borderColor: theme.text.text1,
        boxShadow: 'none',
      },
      '&:disabled': {
        color: theme.active.secondary,
        backgroundColor: theme.disabled.secondary,
        border: '1px solid',
        borderColor: theme.active.secondary,
        boxShadow: 'none',
      },
    },
  }),
);

/** Кнопки. Не такие важные действия + кнопки интерфейса.
 * -Базовая кнопка. */
const UnImportantButton = (props: ButtonProps) => {
  const { children } = props;
  const theme = useTheme();
  const classes = useUnImportantButtonStyles(theme);

  return (
    <Button variant='contained' className={classes.root} {...props}>
      {children}
    </Button>
  );
};

export default UnImportantButton;
