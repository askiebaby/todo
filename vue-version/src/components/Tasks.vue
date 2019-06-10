<template>
  <article class="content">
    <header>
      <h1>TO.DO</h1>
    </header>
    <TasksTodo></TasksTodo>
    <TasksCompleted></TasksCompleted>
  </article>
</template>

<style lang="scss">
@import "@/assets/sass/modules/_colors.scss";
@import "@/assets/sass/modules/_mediaQueries.scss";

.tasks {
  background: $white;
  padding: 1rem;
  text-align: center;
  color: $primaryColor;
  max-height: 200px;
  overflow: auto;

  @include media($tablet) {
    padding: 0.5rem;
    max-height: 150px;
  }
}

.task {
  display: flex;
  align-items: center;

  &__checkbox {
    border: 1px solid $lightGray-2;
    border-radius: 7px;
    flex-basis: 25px;
    flex-shrink: 0;
    height: 25px;
    margin-right: 10px;
    cursor: pointer;
  }

  &__content {
    flex-grow: 1;
    border-radius: 0;
    border-color: transparent;
    color: $darkGray-3;
    font-size: 1.1rem;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
      border-bottom-color: $lightGray-1;
    }

    &:focus {
      border-bottom-color: $primaryColor;
    }
  }

  &__button {
    padding: 0.5rem 0.75rem;
  }

  &__submit {
    color: $white;
    background: $primaryColor;
    border-color: $primaryColor;

    &:hover {
      background: darken($primaryColor, 5);
      border-color: darken($primaryColor, 5);
    }
  }

  &__edit {
    color: $primaryColor;
    border-color: $primaryColor;

    &:hover {
      color: $white;
      background: darken($primaryColor, 5);
      border-color: darken($primaryColor, 5);
    }
  }

  &__delete {
    color: $tomato;
    border-color: $tomato;
    background: $white;

    &:hover {
      color: $white;
      background: darken($tomato, 5);
      border-color: darken($tomato, 5);
    }
  }
}

.task + .task {
  margin-top: 10px;
}

.finished {
  .task__content {
    color: $lightGray-2;
    text-decoration: line-through;
    cursor: pointer;
  }

  .task__checkbox {
    position: relative;

    &::after {
      content: "\f00c";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      color: $primaryColor;
      left: 30%;
    }
  }
}
</style>

<script>
import TasksCreate from "@/components/tasks/TasksCreate.vue";
import TasksTodo from "@/components/tasks/TasksTodo.vue";
import TasksCompleted from "@/components/tasks/TasksCompleted.vue";

export default {
  name: "tasks",
  components: {
    TasksCreate,
    TasksTodo,
    TasksCompleted
  }
};
</script>
