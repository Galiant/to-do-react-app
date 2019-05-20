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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
      return {
        todos: updatedTodos
      }
    })
  }
  
  render() {
    const todoItemComponent = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange}/>);

    return (
      <div className="Container">
        {todoItemComponent}
      </div>
    );
  }  
}

export default App;