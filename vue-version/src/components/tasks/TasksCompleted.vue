<template>
  <section class="finished">
    <h2>已完成</h2>
    <section class="tasks">
      <span v-if="!hasTodoComplete">尚未完成任何事項</span>
      {{todoCompleted}}
      <div
        class="task"
        :data-index="todo.id"
        v-for="(todo, index) of todoCompleted"
        :key="`done-${index}`"
      >
        <span class="task__checkbox"></span>
        <span type="text" class="task__content">{{ todo.todo }}</span>
        <input
          type="button"
          class="task__button task__delete"
          value="刪除"
          @click="deleteTodo(todo.id)"
        >
      </div>
    </section>
  </section>
</template>
<style lang="scss" scoped></style>
<script>
export default {
  name: "TasksCompleted",
  computed: {
    todoCompleted() {
      return this.$store.getters.todoCompleted;
    },
    hasTodoComplete() {
      return this.todoCompleted.length > 0;
    }
  },
  methods: {
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    }
  }
};
</script>
