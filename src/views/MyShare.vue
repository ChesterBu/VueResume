<template>
<el-dialog
  title="分享链接"
  :visible.sync="dialogVisible"
  width="30%"
>
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</template>
<script>
import { bus } from "../bus";
export default {
  name: "MyShare",
  created() {
    bus.$on("sharelink", this.open);
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    open() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style  scoped>

</style>