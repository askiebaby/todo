<template>
  <section class="notFinish">
    <section class="tasks">
      <span v-if="!hasTodoNotComplete">尚未新增待辦事項</span>
      <div class="task" data-index="0" v-for="todo of todoNotComplete" :key="todo.id">
        <span class="task__checkbox"></span>
        <input type="text" :value="todo.todo" class="task__content">
        <input type="button" class="task__button task__delete" value="刪除">
      </div>
    </section>
  </section>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  computed: {
    todoNotComplete() {
      return this.$store.getters.todoNotComplete;
    },
    hasTodoNotComplete() {
      return this.todoNotComplete.length > 0;
    }
  }
};
</script>
