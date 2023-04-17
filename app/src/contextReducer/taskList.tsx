import { useState, useContext } from 'react';
import { useTasks, useTasksDispatch } from './contexts';

export default function TaskList() {
  const tasks: any = useTasks();
  return (
    <ul>
      {tasks.map((task: any) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }: any) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch: any = useTasksDispatch();
  const taskContent = isEditing ? (
    <>
      <input
        value={task.text}
        onChange={(e) => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              text: e.target.value,
            },
          });
        }}
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      {task.text}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: 'deleted',
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
