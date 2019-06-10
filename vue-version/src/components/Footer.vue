<template>
  <footer>
    <section class="copyRight">Copyright &copy; 2019 Askie Lin All rights reserved.</section>
    <a href="https://github.com/askiebaby/todo" target="_blank">
      <i class="fab fa-github"></i>
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
export default {};
</script>
