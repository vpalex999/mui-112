import { createTheme, Theme, ThemeOptions } from '@material-ui/core';
import React from 'react';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    /** Индикаторы служб. */
    statusDds: {
      /** Завершена. */
      finished: React.CSSProperties['color'];
      /** Реагирование. */
      reaction: React.CSSProperties['color'];
      /** Обрабатывается. */
      processed: React.CSSProperties['color'];
      /** Новая. */
      new: React.CSSProperties['color'];
      /** Назначается. */
      assigned: React.CSSProperties['color'];
      /** Отменена, Отменяется. */
      canceled: React.CSSProperties['color'];
    };
    /** Текст. */
    text: {
      /** Самый тёмный. Текст. Иконки. */
      text1: React.CSSProperties['color'];
      /** Фон рабочих областей. Текст на тёмном фоне. */
      text2: React.CSSProperties['color'];
    };
    /** Кнопки */
    button: {
      /** Кнопки 1 порядка, Важные. */
      primary: React.CSSProperties['color'];
      /** Кнопки 2 порядка, Неважные. */
      secondary: React.CSSProperties['color'];
      /** Кнопки 3 порядка и разметка страницы. */
      button3: React.CSSProperties['color'];
    };
    /** Фоновый цвет. */
    background: {
      /** Фоновый цвет по умолчанию. */
      default: React.CSSProperties['color'];
    };
    /** состояние: Недоступно, неактивно. */
    disabled: {
      /** Важный. Недоступно, неактивно */
      primary: React.CSSProperties['color'];
      /** Неважный. Недоступно, неактивно*/
      secondary: React.CSSProperties['color'];
    };
    /** Наведение. */
    hover: {
      /** Наведение. Важный. */
      primary: React.CSSProperties['color'];
      /** Наведение. Неважный. */
      secondary: React.CSSProperties['color'];
    };
    /** Нажатие на кнопку или активный элемент. */
    active: {
      /** Активный. Важный. */
      primary: React.CSSProperties['color'];
      /** Активный. Неважный. */
      secondary: React.CSSProperties['color'];
    };
  }

  interface ThemeOptions {
    /** Индикаторы служб. */
    statusDds: {
      /** Завершена. */
      finished: React.CSSProperties['color'];
      /** Реагирование. */
      reaction: React.CSSProperties['color'];
      /** Обрабатывается. */
      processed: React.CSSProperties['color'];
      /** Новая. */
      new: React.CSSProperties['color'];
      /** Назначается. */
      assigned: React.CSSProperties['color'];
      /** Отменена, Отменяется. */
      canceled: React.CSSProperties['color'];
    };
    /** Текст. */
    text: {
      /** Самый тёмный. Текст. Иконки. */
      text1: React.CSSProperties['color'];
      /** Фон рабочих областей. Текст на тёмном фоне. */
      text2: React.CSSProperties['color'];
    };
    button: {
      /** Кнопки 1 порядка, Важные. */
      primary: React.CSSProperties['color'];
      /** Кнопки 2 порядка, Неважные. */
      secondary: React.CSSProperties['color'];
      /** Кнопки 3 порядка и разметка страницы. */
      button3: React.CSSProperties['color'];
    };
    /** Фоновый цвет. */
    background: {
      /** Фоновый цвет по умолчанию. */
      default: React.CSSProperties['color'];
    };
    /** состояние: Недоступно, неактивно. */
    disabled: {
      /** Важный. Недоступно, неактивно */
      primary: React.CSSProperties['color'];
      /** Неважный. Недоступно, неактивно*/
      secondary: React.CSSProperties['color'];
    };
    /** Наведение. */
    hover: {
      /** Наведение. Важный. */
      primary: React.CSSProperties['color'];
      /** Наведение. Неважный. */
      secondary: React.CSSProperties['color'];
    };
    /** Нажатие на кнопку или активный элемент. */
    active: {
      /** Активный. Важный. */
      primary: React.CSSProperties['color'];
      /** Активный. Неважный. */
      secondary: React.CSSProperties['color'];
    };
  }
}

/** Цвета "Тёмной (Цветной) темы" */
const CustomColor112: ThemeOptions = {
  statusDds: {
    finished: '#CFEFE3',
    reaction: '#A5D3BD',
    processed: '#F8E08E',
    new: '#F77079',
    assigned: '#FFB46E',
    canceled: '#D0D9E1',
  },
  text: {
    text1: '#57585C',
    text2: '#FFFFFF',
  },
  button: {
    primary: '#7A829F',
    secondary: '#BDC7E8',
    button3: '#C7D1F2',
  },
  background: {
    default: '#FBF7F7',
  },
  disabled: {
    primary: '#F2F2F6',
    secondary: '#F2F2F6',
  },
  hover: {
    primary: '#4F556B',
    secondary: '#8B99C8',
  },
  active: {
    primary: '#ADB2C3',
    secondary: '#D2DBF9',
  },
} as const;

/** Цвета Светлой темы */
export const CustomLight112: ThemeOptions = {
  statusDds: {
    finished: '#CFEFE3',
    reaction: '#A5D3BD',
    processed: '#F8E08E',
    new: '#F48D94',
    assigned: '#F2BA85',
    canceled: '#DCE0E4',
  },
  text: {
    text1: '#4C4D51',
    text2: '#FFFFFF',
  },
  button: {
    primary: '#6D6F76',
    secondary: '#ADB2C3',
    button3: '#E0E5F0',
  },
  background: {
    default: '#F7F8FB',
  },
  disabled: {
    primary: '#EAEAEA',
    secondary: '#ECEFF6',
  },
  hover: {
    primary: '#4F4F4F',
    secondary: '#7F87A0',
  },
  active: {
    primary: '#ADB2C3',
    secondary: '#CFD4E5',
  },
} as const;

const createCustomTheme = (customOptions: ThemeOptions, ...args: object[]): Theme =>
  createTheme(
    {
      ...customOptions,
      palette: {
        text: {
          primary: customOptions.text.text1,
          secondary: customOptions.text.text2,
        },
        background: {
          paper: customOptions.background.default,
          default: customOptions.background.default,
        },
      },
      /** Отступы между элементами (px) */
      spacing: [8, 10, 18, 24, 50],
      typography: {
        fontFamily: 'PT Sans',
        h1: { fontFamily: 'PT Sans', fontWeight: 700 },
        h2: { fontFamily: 'PT Sans', fontWeight: 700 },
        h3: { fontFamily: 'PT Sans', fontWeight: 700 },
        h4: { fontFamily: 'PT Sans', fontWeight: 700 },
        h5: { fontFamily: 'PT Sans', fontWeight: 700 },
        h6: { fontFamily: 'PT Sans', fontWeight: 700 },
        subtitle1: { fontFamily: 'PT Sans', fontWeight: 400 },
        subtitle2: { fontFamily: 'PT Sans', fontWeight: 400 },
        body1: { fontFamily: 'PT Sans', fontWeight: 400 },
        body2: { fontFamily: 'PT Sans', fontWeight: 400 },
        button: { fontFamily: 'PT Sans', fontWeight: 400 },
        caption: { fontFamily: 'PT Sans', fontWeight: 400 },
        overline: { fontFamily: 'PT Sans', fontWeight: 400 },
      },
      overrides: {
        MuiButton: {
          root: {
            textTransform: 'none',
          },
        },
      },
      props: {
        MuiButton: {
          disableRipple: true,
        },
      },
    },
    ...args,
  );

export const getThemeColor = (): Theme => createCustomTheme(CustomColor112);
export const getThemeLight = (): Theme => createCustomTheme(CustomLight112);
