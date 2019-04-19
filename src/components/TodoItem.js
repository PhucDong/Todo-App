import React from "react";

const TodoItem = (props) => {
    return (
        <div>
            <input
                type="checkbox"
                id={props.task.id}
                checked={props.task.completed}
                onChange={() => props.handleChange(props.task.id)}
            />
            <label
                htmlFor={props.task.id}
            >
                {props.task.title}
            </label>
        </div>
    )
}

export default TodoItem;