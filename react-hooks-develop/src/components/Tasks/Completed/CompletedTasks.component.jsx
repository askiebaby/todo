import React from 'react';
import './CompletedTasks.component.scss';

const CompletedTasks = () => {
  return (
    <section className='finished'>
      <h2>已完成</h2>
      <section className='tasks'>
        <span v-if='!hasTodoComplete'>尚未完成任何事項</span>
        {/* <div
        className="task"
        :data-index="todo.id"
        v-for="(todo, index) of todoCompleted"
        :key="`done-${index}`"
      >
        <span className="task__checkbox" @click="updateTodoStatus(todo.id)">
          <font-awesome :icon="['fas', 'check']"/>
        </span>
        <span type="text" className="task__content">{{ todo.todo }}</span>
        <input
          type="button"
          className="task__button task__delete"
          value="刪除"
          @click="deleteTodo(todo.id)"
        >
      </div> */}
      </section>
    </section>
  );
};

export default CompletedTasks;
