import React from 'react';
import './CompletedTasks.component.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CompletedTasks = ({ todos = [], handleUpdateTodo, handleDeleteTodo }) => {
  const finishTasks = todos
    .filter((todo) => todo.isTodoCompleted)
    .sort((a, b) => b.id - a.id);

  return (
    <section className='finished'>
      <h2>已完成</h2>
      <section className='tasks'>
        {finishTasks.length ? (
          finishTasks.map((todo) => {
            return (
              <div className='task' key={todo.id}>
                <span
                  className='task__checkbox'
                  onClick={() =>
                    handleUpdateTodo({
                      ...todo,
                      isTodoCompleted: false,
                    })
                  }>
                  <FontAwesomeIcon icon={['fas', 'check']} />
                </span>
                <span type='text' className='task__content'>
                  {todo.todo}
                </span>
                <input
                  type='button'
                  className='task__button task__delete'
                  value='刪除'
                  onClick={() => handleDeleteTodo(todo.id)}
                />
              </div>
            );
          })
        ) : (
          <span>尚未完成任何事項</span>
        )}
      </section>
    </section>
  );
};

export default CompletedTasks;
