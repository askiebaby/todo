<template>
  <section class="notFinish">
    <section class="tasks">
      <span v-if="!hasTodoNotComplete">尚未新增待辦事項</span>
      <div class="task" v-for="(todo, index) of todoNotComplete" :key="`todo-${index}`">
        <span class="task__checkbox" @click="updateTodoStatus(todo.id)"></span>
        <input type="text" v-model="todo.todo" class="task__content" @blur="updateTodoValue(todo)">
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
  name: "TasksTodo",
  computed: {
    todoNotComplete() {
      return this.$store.getters.todoNotComplete;
    },
    hasTodoNotComplete() {
      return this.todoNotComplete.length > 0;
    }
  },
  methods: {
    updateTodoStatus(id) {
      this.$store.dispatch("updateTodoStatus", id);
    },
    updateTodoValue(todo) {
      console.log("updateTodoValue", todo);
    },
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    }
  }
};
</script>
