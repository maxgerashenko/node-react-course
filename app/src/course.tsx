import * as React from 'react';
import Conditions from './conditions';
import FetchComponent from './fetchComponent';
import { Counter, HigherOrderFunction } from './higherOrderFunction';
import { PropsToList } from './propsToList';

type Status = 'info' | 'warning' | 'error';
type NotificationProps = {
  text: string;
  status: Status;
};

export default function Course() {
  const isConditions = false;
  const isHigherOrderFunction = true;
  const isFetch = true;

  return (
    <div>
      {isConditions && <Conditions />}
      {isHigherOrderFunction && (
        <React.Fragment>
          <HigherOrderFunction />
          <Counter />
        </React.Fragment>
      )}
      {isFetch && <FetchComponent />}
      <PropsToList />
    </div>
  );
}
