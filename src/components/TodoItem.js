import React from "react";

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                id={props.task.id}
                checked={props.task.completed}
                onChange={() => props.handleChange(props.task.id)}
            />
            <label
                htmlFor={props.task.id}
                className={props.task.completed ? "display-status" : null}
            >
                {props.task.title}
            </label>
        </div>
    )
}

export default TodoItem;