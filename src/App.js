import React from 'react';
import TodoItem from './TodoItem';

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