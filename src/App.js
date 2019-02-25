import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos/Todos';

class App extends Component {
  state = {
    loading: false,
    todos : []
  }
  
  componentDidMount = () => {
    this.setState({loading: true});
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        const todoList = todos.slice(0, 10);
        this.setState({todos: todoList, loading: false});
      });
  }

  render() {
    let component = this.state.loading ? 'Loading...' : <Todos todos={this.state.todos} />
    return (
      <div>
        {component}
      </div>
    );
  }
}

export default App;
