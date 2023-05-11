import { ReactElement } from 'react';

export interface InputWithLabelInterface {
  id: string;
  value: string;
  type: string;
  onInputChange: (val: string) => void;
  focusOnInit: boolean;
  children: ReactElement | null;
}
