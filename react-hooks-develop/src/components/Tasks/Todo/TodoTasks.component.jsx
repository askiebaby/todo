import React from 'react';
import './TodoTasks.component.scss';

const TodoTasks = ({ todos = [], handleUpdateTodo, handleDeleteTodo }) => {
  const notFinishTasks = todos
    .filter((todo) => !todo.isTodoCompleted)
    .sort((a, b) => b.id - a.id);

  return (
    <section className='notFinish'>
      <section className='tasks'>
        {notFinishTasks.length ? (
          notFinishTasks.map((todo) => {
            return (
              <div className='task' key={todo.id}>
                <span
                  className='task__checkbox'
                  onClick={() =>
                    handleUpdateTodo({
                      ...todo,
                      isTodoCompleted: true,
                    })
                  }
                />
                <input
                  type='text'
                  className='task__content'
                  value={todo.todo}
                  onChange={(e) =>
                    handleUpdateTodo({
                      ...todo,
                      todo: e.target.value,
                    })
                  }
                />
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
          <span>尚未新增待辦事項</span>
        )}
      </section>
    </section>
  );
};

export default TodoTasks;
