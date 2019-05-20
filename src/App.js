import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import './style.css';

const App = () => {
  return (
    <div className="Container">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;