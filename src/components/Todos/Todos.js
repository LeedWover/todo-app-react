import React from 'react';
import Todo from './Todo/Todo';

const Todos = props => {
  let todoHolder = props.todos.map(todo => {
    return (
      <Todo
        todo={todo.title}
        key={todo.id} />
    )
  });
  return (
    <div>{todoHolder}</div>
  )
}

export default Todos;