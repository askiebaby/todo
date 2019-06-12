import Vue from "vue";
import Router from "vue-router";
import VueVersion from "./views/VueVersion.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: VueVersion,
      redirect: "/todo/vue-version"
    },
    {
      path: "/todo/vue-version",
      name: "vue",
      component: VueVersion
    }
  ]
});
