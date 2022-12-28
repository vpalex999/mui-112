import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

type CoolButtonProps = {
  cool?: boolean;
};

type CoolButton2Props = {
  cool?: boolean;
};

type CoolButtonThemeProps = {
  cool?: boolean;
};

const useStyles = makeStyles({
  buttonStyle: {
    color: ({ cool }: CoolButtonProps) => (cool ? 'blue' : 'red'),
  },
});

const useStyles2 = makeStyles({
  buttonStyle: (props: CoolButton2Props) => {
    return {
      color: props.cool ? 'green' : 'red',
      backgroundColor: props.cool ? 'orange' : 'yellow',
    };
  },
});

const useStylesTheme = makeStyles((theme) => ({
  buttonStyle: {
    color: 'red',
    [theme.breakpoints.up('sm')]: { color: 'blue' },
  },
  buttonBackground: {
    background: 'red',
  },
}));

const CoolButton = (props: CoolButtonProps) => {
  const classes = useStyles(props);
  return <Button className={classes.buttonStyle}>the Cool button</Button>;
};

const CoolButton2 = (props: CoolButton2Props) => {
  const classes = useStyles2(props);
  return (
    <Button fullWidth className={classes.buttonStyle}>
      the Cool2 button
    </Button>
  );
};

const CoolButtonTheme = () => {
  const classes = useStylesTheme();
  return <Button className={(classes.buttonStyle, classes.buttonBackground)}> the Cool button with Theme </Button>;
};

export { CoolButton, CoolButton2, CoolButtonTheme };
