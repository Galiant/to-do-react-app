import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import './style.css';

const App = () => {

  const todoItemComponent = todosData.map(todo => <TodoItem key={todo.id} todo={todo} />);

  return (
    <div className="Container">
      {todoItemComponent}
    </div>
  );
}

export default App;