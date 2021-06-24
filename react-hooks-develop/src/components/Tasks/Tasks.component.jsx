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

  return (
    <article className='content'>
      <header>
        <h1>TO.DO</h1>
        <CreateSection handleCreateTodo={handleCreateTodo} />
        <TodoTasks todos={todos} />
        <CompletedTasks />
      </header>
    </article>
  );
};

export default Tasks;
