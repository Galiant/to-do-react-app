import React from 'react';
import './style.css';

const TodoItem = () => {
  return (
    <div className="Container">
      <ul>
        <li className="ListItem"><input type="checkbox" className="Checkbox" />
          <span className="Item">Bread</span>
        </li>
        <li className="ListItem"><input type="checkbox" className="Checkbox"/>
          <span className="Item">Milk</span>
        </li>
        <li className="ListItem"><input type="checkbox" className="Checkbox" />
          <span className="Item">Egg</span>
        </li>
        <li className="ListItem"><input type="checkbox" className="Checkbox" />
          <span className="Item">Fruit</span>
        </li>
      </ul>
    </div>
  );
}

export default TodoItem;