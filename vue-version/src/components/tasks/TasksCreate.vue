<template>
  <section class="create">
    <h2>
      待辦事項
      <span class="msgBox"></span>
    </h2>
    <input
      type="text"
      placeholder="例如：倒垃圾"
      class="addInput"
      autofocus
      ref="addInput"
      @keyup.enter="createTodo"
    >
    <input type="submit" class="task__button task__submit" value="新增" @click="createTodo">
  </section>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/modules/_colors.scss";

.create {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;

  h2 {
    flex-basis: 100%;
    .msgBox {
      color: $tomato;
      margin-left: 1em;
      font-size: 0.9rem;
    }
  }

  .addInput {
    border: 0;
    border-bottom: 1px solid $lightGray-2;
    background: #f5f5f8;
    border-radius: 0;
    flex-grow: 1;
    padding: 0.5rem 0;
    font-size: 1.15rem;

    &:focus {
      border-color: $primaryColor;
    }
  }
}
</style>
<script>
export default {
  name: "TaskCreate",
  data() {
    return {
      todoId: Date.now()
    };
  },
  // mounted() {
  //   this.$refs.addInput.addEventListener("click", this.resetInput);
  // },
  methods: {
    createTodo() {
      const todo = {
        id: this.todoId,
        todo: this.$refs.addInput.value,
        isTodoCompleted: false
      };

      this.$store.dispatch("addTodo", todo);
      this.todoId++;

      this.resetInput();
    },
    resetInput() {
      this.$refs.addInput.value = "";
      this.$refs.addInput.focus();
    }
  }
};
</script>
