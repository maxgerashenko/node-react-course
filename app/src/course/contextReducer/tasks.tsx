import {TasksProvider} from "../contextReducer/tasksProvider";
import AddTask from "./addTask";
import TaskList from "./taskList";

export function Tasks () {

    return (
        <div>
            <TasksProvider>
                <AddTask />

                <TaskList />
            </TasksProvider>
        </div>
    );

}
