import React, { useState } from 'react';
import './Tasks.component.scss';

import CreateSection from './CreateSection/CreateSection.component';
import TodoTasks from './Todo/TodoTasks.component';
import CompletedTasks from './Completed/CompletedTasks.component';

const Tasks = () => {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = (e, todo) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo,
        isTodoCompleted: false,
      },
    ]);
  };

  const handleUpdateTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      return todo.id === selectedTodo.id ? selectedTodo : todo;
    });

    setTodos(newTodos);
  };
  const handleDeleteTodo = (selectedTodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== selectedTodoId);

    setTodos(newTodos);
  };

  return (
    <article className='content'>
      <header>
        <h1>TO.DO</h1>
        <CreateSection handleCreateTodo={handleCreateTodo} />
        <TodoTasks
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
        <CompletedTasks
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </header>
    </article>
  );
};

export default Tasks;
