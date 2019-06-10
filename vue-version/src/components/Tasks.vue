<template>
  <div>
    <TasksTodo msg="待辦事項"></TasksTodo>
    <TasksCompleted msg="已完成"></TasksCompleted>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import TasksTodo from "@/components/tasks/TasksTodo.vue";
import TasksCompleted from "@/components/tasks/TasksCompleted.vue";

export default {
  name: "tasks",
  components: {
    TasksTodo,
    TasksCompleted
  }
};
</script>
