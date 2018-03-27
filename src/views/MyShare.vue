<template>
<el-dialog
  title="分享链接"
  :visible.sync="dialogVisible"
  width="35%"
>
  <span>{{shareLink}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</template>
<script>
import { bus } from "../bus";
import {getLink} from '../leanCloud';
export default {
  name: "MyShare",
  created() {
    bus.$on("sharelink", this.open);
    this.shareLink = getLink()
  },
  data() {
    return {
      dialogVisible: false,
      shareLink:'',
    };
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },

  }
};
</script>

<style  scoped>

</style>