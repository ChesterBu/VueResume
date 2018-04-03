<!--suppress ALL -->
<template>
    <div id="app">
        <my-aside :isLogin='isLogin'></my-aside>
        <my-main></my-main>
        <my-login></my-login>
        <my-share></my-share>
    </div>
</template>
<script>
import MyAside from "./views/MyAside";
import MyMain from "./views/MyMain.vue";
import MyLogin from "./views/MyLogin.vue";
import MyShare from './views/MyShare';
import { bus } from "./bus";
import { hasLogin,getResume} from "./leanCloud";
export default {
  name: "app",
  created() {
    bus.$on("signInSuccess", this.login);
    bus.$on("quit", this.logOut);
    this.isLogin = hasLogin();
  },
  beforeMount(){
    this.router()
  },
  data() {
    return {
      isLogin: false,
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
    },
    async router(){
      if(window.location.href.indexOf('user_id')){
        let userId = window.location.href.split('=')[1]
        try{
          let resume = await getResume(userId)
          bus.$emit('preview',resume)
        } catch(e){

        }
      }
    }
    
  },
  components: {
    MyAside,
    MyMain,
    MyLogin,
    MyShare
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
@media print {
  .side{
    display: none;
  }
  .el-tooltip__popper.is-dark{
    display: none;
  }
  #app .resume{
    width: 100%;
    padding: 50px;
  }
  .add{
    display: none;
  }
}

.el-dialog__headerbtn .el-dialog__close {
  color: #909399;
  position: relative;
  z-index: 10;
}
</style>
