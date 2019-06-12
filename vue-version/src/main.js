import Vue from "vue";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

// font awesome icon
library.add(faGithub, faCheck);

icon({ prefix: "fas", iconName: "check" });

Vue.component("font-awesome", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
