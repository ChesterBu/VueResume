<!--suppress ALL -->
<template>
    <div id="app">
        <my-aside :isLogin='isLogin'></my-aside>
        <my-main></my-main>
        <my-dialog></my-dialog>
    </div>
</template>
<script>
import MyAside from "./views/MyAside";
import MyMain from "./views/MyMain.vue";
import MyDialog from "./views/MyDialog";
import { bus } from "./bus";
import { hasLogin } from "./leanCloud";
export default {
  name: "app",
  created() {
    bus.$on("signInSuccess", this.login);
    bus.$on("quit", this.logOut);
    this.isLogin = hasLogin();
  },
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    login() {
      this.isLogin = true;
      this.$notify({
        title: "成功",
        message: "登录成功",
        type: "success",
        duration:1000
      });
    },
    logOut() {
      this.isLogin = false;
      this.$notify({
          title: '成功',
          message: '已退出',
          type: 'success',
          duration:1000
        });
    }
  },
  components: {
    MyAside,
    MyMain,
    MyDialog
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
.el-dialog__headerbtn .el-dialog__close {
  color: #909399;
  position: relative;
  z-index: 10;
}
</style>
