import { ReactNode, useState } from 'react';
import { Panel } from './panel';

interface Props {
  children?: ReactNode;
  title?: string;
}

export default function CheckToShow({ children, title = 'Title' }: Props) {
  const [isChecked, setIschecked] = useState(true);
  const setTheme = () => {
    setIschecked((pre) => !pre);
  };
  return (
    <Panel
      title={title}
      showCheckBox={true}
      onChange={setTheme}
      isChecked={isChecked}
    >
      {isChecked && children}
    </Panel>
  );
}
