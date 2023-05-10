import { InputWithLabelInterface } from 'my-ts-types';
import { useEffect, useRef } from 'react';

export function InputWithLabel({
  id,
  value,
  type = 'text',
  onInputChange,
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
