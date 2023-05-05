import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export function Button({ children, disabled, onClick }: any) {
  const { theme }: any = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
