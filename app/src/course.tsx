import * as React from 'react';
import Conditions from './conditions';
import { Context } from './context/context';
import FetchComponent from './fetchComponent';
import { Counter, HigherOrderFunction } from './higherOrderFunction';
import { PropsToList } from './propsToList';
import { StateToComponent } from './stateToComponent';

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
    <div className="app-course">
      <Context />
      {isConditions && <Conditions />}
      {isHigherOrderFunction && (
        <React.Fragment>
          <HigherOrderFunction />
          <Counter />
        </React.Fragment>
      )}
      {isFetch && <FetchComponent />}
      <PropsToList />
      <StateToComponent />
    </div>
  );
}
