<template>
  <footer>
    <section class="copyRight">Copyright &copy; 2019 Askie Lin All rights reserved.</section>
    <a href="https://github.com/askiebaby/todo" target="_blank">
      <font-awesome :icon="['fab', 'github']"/>
    </a>
  </footer>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/modules/_colors.scss";

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;

  .copyRight {
    font-size: 0.8rem;
    color: $darkGray-2;
    margin-right: 0.5em;
  }
}
</style>
<script>
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
export default {};
</script>
