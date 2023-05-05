import { TasksProvider } from '../contextReducer/tasksProvider';
import AddTask from './addTask';
import TaskList from './taskList';

export function Tasks() {
  return (
    <p>
      <TasksProvider>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </p>
  );
}
