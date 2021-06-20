import React from 'react';
import './CompletedTasks.component.scss';

const CompletedTasks = () => {
  return (
    <section class='finished'>
      <h2>已完成</h2>
      <section class='tasks'>
        <span v-if='!hasTodoComplete'>尚未完成任何事項</span>
        {/* <div
        class="task"
        :data-index="todo.id"
        v-for="(todo, index) of todoCompleted"
        :key="`done-${index}`"
      >
        <span class="task__checkbox" @click="updateTodoStatus(todo.id)">
          <font-awesome :icon="['fas', 'check']"/>
        </span>
        <span type="text" class="task__content">{{ todo.todo }}</span>
        <input
          type="button"
          class="task__button task__delete"
          value="刪除"
          @click="deleteTodo(todo.id)"
        >
      </div> */}
      </section>
    </section>
  );
};

export default CompletedTasks;
