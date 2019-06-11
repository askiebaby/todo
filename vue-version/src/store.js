import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    todoNotComplete: (state) => {
      const newTodos = state.todos
        .filter((todo) => !todo.isTodoCompleted)
        .sort((a, b) => b.id - a.id);

      return newTodos;
    },
    todoCompleted: (state) => {
      return state.todos
        .filter((todo) => todo.isTodoCompleted)
        .sort((a, b) => b.id - a.id);
    }
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    }
  },
  actions: {
    addTodo({ commit }, payload) {
      commit("addTodo", payload);
    }
  }
});
