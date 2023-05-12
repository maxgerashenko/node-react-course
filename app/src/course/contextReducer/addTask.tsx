import {useState} from "react";
import {useTasksDispatch} from "./contexts";

export default function AddTask () {

    const [
            text,
            setText
        ] = useState(""),
        dispatch = useTasksDispatch() as any;
    return (
        <>
            <input
                onChange={(e) => setText(e.target.value)}
                placeholder="Add task"
                value={text}
            />

            <button
                onClick={() => {

                    setText("");
                    dispatch({
                        "type": "added",
                        "id": nextId++,
                        text
                    });

                }}
            >
                Add
            </button>
        </>
    );

}

let nextId = 3;
