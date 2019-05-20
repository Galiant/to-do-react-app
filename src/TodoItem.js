import React from 'react';
import './style.css';

const TodoItem = (props) => {

  const completedTodo = {
    fontStyle: "italic",
    color: '#cdcdcd',
    textDecoration: "line-through"
  }

  return (
    <div>
      <li className="ListItem">
        <input
          type="checkbox"
          className="Checkbox"
          checked={props.todo.completed}
          onChange={() => props.handleChange(props.todo.id)}
        />
        <span
          className="Item"
          style={props.todo.completed ? completedTodo : null}>
          {props.todo.text}
        </span>
      </li>
    </div>
  );
}

export default TodoItem;