<template>
  <section class="finished">
    <h2>已完成</h2>
    <section class="tasks">
      尚未完成任何事項
      {{ todoCompleted }}
    </section>
  </section>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  computed: {
    todoCompleted() {
      return this.$store.getters.todoCompleted;
    }
  }
};
</script>
