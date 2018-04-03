<!--suppress ALL, JSAnnotator -->
<template>
    <div class="side" v-if="!preview">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                 :collapse="isCollapse">
            <template v-if="isLogin">
                <el-menu-item index="1" @click="save">
                    <i class="iconfont icon-save"></i>
                    <span slot="title">保存</span>
                </el-menu-item>
                <el-menu-item index="2" @click="print">
                    <i class="iconfont icon-dayin"></i>
                    <span slot="title">打印</span>
                </el-menu-item>
                <el-menu-item index="3" @click="share">
                    <i class="iconfont icon-fenxiang"></i>
                    <span slot="title">分享</span>
                </el-menu-item>
                <el-menu-item index="4" @click="signOut">
                    <i class="iconfont icon-tuichu"></i>
                    <span slot="title">退出</span>
                </el-menu-item>
            </template>
            <template v-else>
                <el-menu-item index="5" @click="sign">
                    <i class="iconfont icon-denglu"></i>
                    <span slot="title">登录</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script>
import { bus } from "../bus";
import { quitUser } from "../leanCloud";
export default {
  props: ["isLogin"],
  created(){
    bus.$on('preview',this.handlePreview)
  },
  data() {
    return {
      isCollapse: true,
      preview:false
    };
  },
  methods: {
    save() {
      bus.$emit("save");
      this.$notify({
        title: "成功",
        message: "保存成功",
        type: "success",
        duration: 1000
      });
    },
    sign() {
      bus.$emit("sign");
    },
    signOut() {
      quitUser();
      bus.$emit("quit");
    },
    share() {
      bus.$emit('sharelink')
    },
    handlePreview(){
      this.preview = true
    },
    print(){
      window.print()
    }
  }
};
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_587190_r5ozkcadwncm1jor.css");

.el-menu-vertical-demo {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}

.iconfont {
  font-size: 30px;
}

.el-menu-item.is-active {
  color: rgb(126, 129, 135);
}
</style>