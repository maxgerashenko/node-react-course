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
    if (focusOnInit) inputRef.current.focus();
  }, [focusOnInit]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        ref={inputRef!}
        id={id}
        type={type}
        value={value}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </>
  );
}
