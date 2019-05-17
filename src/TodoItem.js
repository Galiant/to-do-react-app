import React from 'react';
import './style.css';

const TodoItem = () => {
  return (
    <div>
        <li className="ListItem"><input type="checkbox" className="Checkbox" />
          <span className="Item">List Item</span>
        </li>
    </div>
  );
}

export default TodoItem;