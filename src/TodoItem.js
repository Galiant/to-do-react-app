import React from 'react';
import './style.css';

const TodoItem = (props) => {
  return (
    <div>
      <li className="ListItem">
        <input
          type="checkbox"
          className="Checkbox"
          checked={props.todo.completed}
          onChange={() => props.handleChange(props.todo.id)}
        />
          <span className="Item">{props.todo.text}</span>
      </li>
    </div>
  );
}

export default TodoItem;