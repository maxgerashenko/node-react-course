import { TasksProvider } from '../contextReducer/tasksProvider';
import AddTask from './addTask';
import TaskList from './taskList';

export function Tasks() {
  return (
    <>
      <h3>Context Reducer</h3>
      <TasksProvider>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  );
}
