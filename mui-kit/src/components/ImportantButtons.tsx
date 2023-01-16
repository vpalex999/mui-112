/** Кнопки. Важные безвозвратные действия. */
import React from 'react';
import { Button, ButtonProps, createStyles, makeStyles, useTheme } from '@material-ui/core';

const useImportantMainButtonStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: '36px',
      color: theme.text.text2,
      backgroundColor: theme.button.primary,
      '&:hover': { backgroundColor: theme.hover.primary, boxShadow: 'none' },
      '&:active': {
        color: theme.text.text1,
        backgroundColor: theme.active.primary,
        border: '1px solid',
        borderColor: theme.text.text1,
        boxShadow: 'none',
      },
      '&:disabled': {
        color: theme.button.secondary,
        backgroundColor: theme.disabled.primary,
        border: '1px solid',
        borderColor: theme.button.secondary,
        boxShadow: 'none',
      },
    },
  }),
);

/**  Кнопки. Важные безвозвратные действия.
 * - Кнопка. Много внимания. */
export const ImportantButton = (props: ButtonProps) => {
  const { children } = props;
  const classes = useImportantMainButtonStyles();

  return (
    <Button variant='contained' className={classes.root} {...props}>
      {children}
    </Button>
  );
};

/**  Кнопки. Важные безвозвратные действия.
 * - Кнопка. Главные кнопки формы. */
export const ImportantMainButton = (props: ButtonProps) => <ImportantButton {...props} style={{ height: '31px', marginBottom: '5px' }} />;

/**  Кнопки. Важные безвозвратные действия.
 * - Кнопка. Опасные кнопки. */
export const ImportantDangerButton = (props: ButtonProps) => <ImportantButton {...props} style={{ height: '28px', marginBottom: '8px' }} />;
