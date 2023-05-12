import { useEffect, useRef } from 'react';
import { InputWithLabelInterface } from './interfaces';

export function InputWithLabel({
  id,
  value,
  onInputChange,
  type,
  focusOnInit,
  children,
}: InputWithLabelInterface) {
  const inputRef: any = useRef<HTMLInputElement>();

  useEffect(() => {
    onInputChange('');
    if (focusOnInit) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        id={id}
        onChange={(event) => onInputChange(event.target.value)}
        ref={inputRef!}
        type={type}
        value={value}
      />
    </>
  );
}
