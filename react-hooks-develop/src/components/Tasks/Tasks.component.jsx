import React from 'react';
import './Tasks.component.scss';

import CreateSection from './CreateSection/CreateSection.component';
import TodoTasks from './Todo/TodoTasks.component';
import CompletedTasks from './Completed/CompletedTasks.component';

const Tasks = () => {
  return (
    <article className='content'>
      <header>
        <h1>TO.DO</h1>
        <CreateSection />
        <TodoTasks />
        <CompletedTasks />
      </header>
    </article>
  );
};

export default Tasks;
