import React, {useState} from 'react';
import {LightTheme, DarkTheme} from './themes';

const initialState = {
  dark: false,
  theme: LightTheme,
  toggle: () => {},
};
const ThemeContext = React.createContext(initialState);
const ThemeProvider = ({children}) => {
  const [dark, setDark] = React.useState(false); // set default theme to light
  // Toggle theme between dark and light
  const toggle = () => {
    setDark(!dark);
  };

  // select theme based on dark state
  const theme = dark ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider value={{theme, dark, toggle}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, ThemeContext};
