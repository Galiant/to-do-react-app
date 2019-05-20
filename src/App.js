import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
  }
  
  render() {
    const todoItemComponent = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} />);

    return (
      <div className="Container">
        {todoItemComponent}
      </div>
    );
  }  
}

export default App;