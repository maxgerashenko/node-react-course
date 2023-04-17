import { useContext } from 'react';
import { ThemeContext } from './contexts';

export function Panel({ title, children }: any) {
  const { theme }: any = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
