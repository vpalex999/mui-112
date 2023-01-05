import { createTheme } from '@material-ui/core';
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
      /** Кнопки 1 порядка */
      button1: React.CSSProperties['color'];
      /** Кнопки 2 порядка */
      button2: React.CSSProperties['color'];
      /** Кнопки 3 порядка и разметка страницы */
      button3: React.CSSProperties['color'];
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
    /** Кнопки */
    button: {
      /** Кнопки 1 порядка */
      button1: React.CSSProperties['color'];
      /** Кнопки 2 порядка */
      button2: React.CSSProperties['color'];
      /** Кнопки 3 порядка и разметка страницы */
      button3: React.CSSProperties['color'];
    };
  }
}

export const themeColor112 = createTheme({
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
    button1: '#7A829F',
    button2: '#BDC7E8',
    button3: '#C7D1F2',
  },
  palette: {
    background: {
      paper: '#FBF7F7',
      default: '#FBF7F7',
    },
  },
});

export const themeLight112 = createTheme({
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
    text2: '#D5D7E4',
  },
  button: {
    button1: '#6D6F76',
    button2: '#ADB2C3',
    button3: '#E0E5F0',
  },
  palette: {
    background: {
      paper: '#F7F8FB',
      default: '#F7F8FB',
    },
  },
});
