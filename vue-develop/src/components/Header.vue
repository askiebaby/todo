<template>
  <header class="globalHeader">
    <nav>
      <ul>
        <li>
          <a href="/todo/js-version/">Vanilla</a>
        </li>
        <li>
          <a href="/todo/jq-version/">JQuery</a>
        </li>
        <li>
          <router-link to="vue" class="active">Vue</router-link>
        </li>
        <li>
          <a href="/todo/react-hooks-version/">React Hooks</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/modules/_colors.scss";

.globalHeader {
  padding: 10px 0;
}

ul {
  list-style-type: none;
  padding-left: 0;
  font-size: 0;
  text-align: center;

  li {
    display: inline-block;
  }
  li + li {
    border-left: 1px solid $borderColor;
  }

  a {
    text-decoration: none;
    font-size: 0.8rem;
    margin: 0 0.75rem;
    padding: 0.25rem;
    &.active {
      color: $deepOrange;
      font-weight: 700;
    }
  }
}
</style>
<script>
export default {};
</script>
