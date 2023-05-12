import {useState} from "react";
import {useTasks, useTasksDispatch} from "./contexts";

export default function TaskList () {

    const tasks: any = useTasks();
    return (
        <ul>
            {tasks.map((task: any) => (<li key={task.id}>
                    <Task task={task} />
                </li>))}
        </ul>
    );

}

function Task ({task}: any) {

    const [
            isEditing,
            setIsEditing
        ] = useState(false),
        dispatch: any = useTasksDispatch(),
        taskContent = isEditing
            ? (<>
    <input
                    onChange={(e) => {

                        dispatch({
                            type: "changed",
                            task: {
                                ...task,
                                text: e.target.value
            }
                        });
                    }}
                    value={task.text}
                />

                <button onClick={() => setIsEditing(false)}>
          Save
</button>
      </>)
            : (<>
       {task.text}

                <button onClick={() => setIsEditing(true)}>
          Edit
</button>
         </>);
    return (
        <label>
            <input
                checked={task.done}
                onChange={(e) => {

                    dispatch({
                        "type": "changed",
                        "task": {
                            ...task,
                            "done": e.target.checked
                        }
                    });

                }}
                type="checkbox"
            />

            {taskContent}

            <button
                onClick={() => {

                    dispatch({
                        "type": "deleted",
                        "id": task.id
                    });

                }}
            >
                Delete
            </button>
        </label>
    );

}
