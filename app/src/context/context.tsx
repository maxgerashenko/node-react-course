import './styles.scss';
import { createContext, useContext, useState } from 'react';
import { Form } from './form';
import { CheckBox } from './checkBox';

export const ThemeContext = createContext<null | { theme: any; setTheme: any }>(
  null
);

export function Context() {
  const [theme, setTheme] = useState('dark');
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Form />
        <CheckBox />
      </ThemeContext.Provider>
    </>
  );
}
