import { createContext, useContext } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function useTasks() {
  return useContext(TasksContext)!;
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
