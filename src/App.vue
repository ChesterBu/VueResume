<template>
    <div id="app">
        <my-aside></my-aside>
        <my-main></my-main>
    </div>
</template>
<script>
import MyAside from "./views/MyAside";
import MyMain from "./views/MyMain.vue";
export default {
  name: "app",
  components: {
    MyAside,
    MyMain
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
ul,
ol {
  list-style: none;
}
body {
  font-size: 18px;
}
button {
  font: inherit;
}
</style>
