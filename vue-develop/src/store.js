import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    todoNotComplete: (state) => {
      return state.todos
        .filter((todo) => !todo.isTodoCompleted)
        .sort((a, b) => b.id - a.id);
    },
    todoCompleted: (state) => {
      return state.todos
        .filter((todo) => todo.isTodoCompleted)
        .sort((a, b) => b.id - a.id);
    }
  },
  mutations: {
    addTodo(state, payload) {
      state.todos = [payload, ...state.todos];
    },
    updateTodoStatus(state, id) {
      const completeTodo = state.todos.find((todo) => todo.id === id);
      if (completeTodo)
        completeTodo.isTodoCompleted = !completeTodo.isTodoCompleted;
    },
    deleteTodo(state, id) {
      const remainTodos = state.todos.filter((todo) => todo.id !== id);
      state.todos = remainTodos;
    }
  },
  actions: {
    addTodo({ commit }, payload) {
      commit("addTodo", payload);
    },
    updateTodoStatus({ commit }, id) {
      commit("updateTodoStatus", id);
    },
    deleteTodo({ commit }, id) {
      commit("deleteTodo", id);
    }
  }
});
