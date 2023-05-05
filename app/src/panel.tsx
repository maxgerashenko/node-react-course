import { useContext } from 'react';
import { ThemeContext } from './contexts';

export function Panel({
  title,
  showCheckBox,
  onChange,
  isChecked,
  children,
}: any) {
  const { theme }: any = useContext(ThemeContext);
  const className = 'panel-' + theme;
  if (showCheckBox)
    return (
      <>
        <section className={className}>
          <h1>
            <input type="checkbox" checked={isChecked} onChange={onChange} />

            {title}
          </h1>
          {children}
        </section>
      </>
    );

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
