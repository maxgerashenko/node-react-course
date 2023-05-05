import { useContext } from 'react';
import { ThemeContext } from './contexts';
import logo from './logo.svg';

export function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={'footer ' + theme}>
      <img src={logo} className="App-logo" alt="logo" />
    </footer>
  );
}
