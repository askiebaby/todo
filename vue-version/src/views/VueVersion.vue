<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <Tasks msg="Welcome to Your Vue.js App"/>
    <Footer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "vue-version",
  components: {
    Header,
    Tasks,
    Footer
  }
};
</script>
