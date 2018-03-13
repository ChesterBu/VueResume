<template>
    <div class="side">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                 :collapse="isCollapse">
            <el-menu-item index="1" @click="save">
                <i class="iconfont icon-save"></i>
                <span slot="title">保存</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="iconfont icon-dayin"></i>
                <span slot="title">打印</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="iconfont icon-fenxiang"></i>
                <span slot="title">分享</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="iconfont icon-denglu"></i>
                <span slot="title">登录</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="iconfont icon-tuichu"></i>
                <span slot="title">退出</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { bus } from "../bus";
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    save() {
      bus.$emit("save");
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