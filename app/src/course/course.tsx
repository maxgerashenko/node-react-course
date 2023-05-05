import { Fragment, useContext } from 'react';
import Conditions from './conditions';
import { Context } from './context/context';
import { Tasks } from './contextReducer/tasks';
import FetchComponent from './fetchComponent';
import { Counter, HigherOrderFunction } from './higherOrderFunction';
import { PropsToList } from './propsToList';
import { StateToComponent } from './stateToComponent';
import CheckToShow from '../checkToShow';
import { ThemeContext } from '../contexts';

type Status = 'info' | 'warning' | 'error';
type NotificationProps = {
  text: string;
  status: Status;
};

export default function Course() {
  const { theme }: any = useContext(ThemeContext);
  const isHigherOrderFunction = true;

  return (
    <div className={'app-course ' + theme}>
      <CheckToShow title="Context + Reducer">
        <Tasks />
      </CheckToShow>
      <CheckToShow title="Conditions">
        <Conditions />
      </CheckToShow>
      <CheckToShow title="Context">
        <Context />
      </CheckToShow>
      <CheckToShow title="isHigherOrderFunction">
        <HigherOrderFunction />
        <Counter />
      </CheckToShow>
      <CheckToShow title="FetchComponent">
        <FetchComponent />
        <Counter />
      </CheckToShow>
      <CheckToShow title="PropsToList">
        <PropsToList />
        <Counter />
      </CheckToShow>
      <CheckToShow title="StateToComponent">
        <StateToComponent />
        <Counter />
      </CheckToShow>
    </div>
  );
}
