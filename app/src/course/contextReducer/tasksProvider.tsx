import {TasksContext, TasksDispatchContext} from "../contextReducer/contexts";
import {useTasksReducer} from "./reducer";

export function TasksProvider ({children}: any) {

    const [
        tasks,
        dispatch]: any[
] = useTasksReducer();

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );

}
