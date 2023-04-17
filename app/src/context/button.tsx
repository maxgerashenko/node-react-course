import { useContext } from 'react';
import { ThemeContext } from './context';

export function Button({ children }: any) {
  const { theme }: any = useContext(ThemeContext);
  const className = 'button-' + theme;
  return <button className={className}>{children}</button>;
}
