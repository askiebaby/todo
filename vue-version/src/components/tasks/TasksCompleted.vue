<template>
  <section class="finished">
    <h2>已完成</h2>
    <section class="tasks">
      <span v-if="!hasTodoComplete">尚未完成任何事項</span>
      <div class="task" :data-index="todo.id" v-for="todo of todoCompleted" :key="todo.id">
        <span class="task__checkbox"></span>
        <span type="text" class="task__content">d</span>
        <input type="button" class="task__button task__delete" value="刪除">
      </div>
    </section>
  </section>
</template>
<style lang="scss" scoped></style>
<script>
export default {
  computed: {
    todoCompleted() {
      return this.$store.getters.todoCompleted;
    },
    hasTodoComplete() {
      return this.todoCompleted.length > 0;
    }
  }
};
</script>
