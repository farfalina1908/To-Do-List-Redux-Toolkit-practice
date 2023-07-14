import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo, toggleTodoComlete }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          toggleTodoComlete={toggleTodoComlete}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
