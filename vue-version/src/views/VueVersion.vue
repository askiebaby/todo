<template>
  <div class="wrapper">
    <div class="mainBody">
      <Header msg="Welcome to Your Vue.js App"/>
      <Tasks msg="Welcome to Your Vue.js App"/>
      <Footer msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/modules/_colors.scss";
@import "@/assets/sass/modules/_mediaQueries.scss";

// global

h2 {
  margin: 20px auto 5px;
  font-size: 1rem;

  @include media($tablet) {
    margin-top: 10px;
  }
}

a {
  color: $primaryColor;

  &:hover {
    color: $hoverLinkColor;
  }
}

input {
  border: 1px solid $lightGray-2;
  border-radius: 3px;
  padding: 0.5rem;
  outline: none;
  user-select: none;
}

input + input {
  margin-left: 10px;
}

input[type="button"],
input[type="submit"] {
  cursor: pointer;
}

.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $backgroundColor;

  .mainBody {
    background: $white-2;
    width: 75%;
    max-width: $media-xs;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 10px 20px $shadowColor;

    @include media($tablet) {
      width: 95%;
      padding: 10px;
    }
  }
}
// global header

header {
  h1 {
    text-align: center;
    color: darken($primaryColor, 5);
    padding: 0.25em 0;
  }
}
</style>


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
