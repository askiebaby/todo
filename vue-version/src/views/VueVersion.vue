<template>
  <div class="home">
    <div id="nav">
      <a href="/todo/js-version/" class="active">Vanilla</a>|
      <a href="/todo/jq-version/">JQuery</a>|
      <router-link to="vue" class="active">Vue</router-link>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "vue-version",
  components: {
    HelloWorld
  }
};
</script>
