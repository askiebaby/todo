import React from 'react';
import './TodoTasks.component.scss';

const TodoTasks = () => {
  return (
    <section className='notFinish'>
      <section className='tasks'>
        <span v-if='!hasTodoNotComplete'>尚未新增待辦事項</span>
        {/* <div className="task" v-for="(todo, index) of todoNotComplete" :key="`todo-${index}`">
        <span className="task__checkbox" onClick="updateTodoStatus(todo.id)"></span>
        <input type="text" v-model="todo.todo" className="task__content">
        <input
          type="button"
          className="task__button task__delete"
          value="刪除"
          onClick="deleteTodo(todo.id)"
        >
      </div> */}
      </section>
    </section>
  );
};

export default TodoTasks;
