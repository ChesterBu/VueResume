<template>
    <span class="editableSpan">
        <span class='dbtext'  v-show="!editing" @dblclick="editing = !editing">{{value}}</span>
        <el-input ref="elInput" size="medium" v-show="editing"  :value="elVal" @blur="triggerEdit">
          <i slot="suffix" class="el-input__icon el-icon-success" @click='editing = !editing'></i>
        </el-input>
     </span>
</template>

<script>
import {bus} from '../bus';
export default {
  name: "EditableSpan",
  props: ["value"],
  data() {
    return {
      editing: false,
      elVal:this.value
    };
  },
  methods: {
    triggerEdit(e) {
      this.$emit("edit", e.target.value);
      this.editing = ! this.editing
    }
  }
};
</script>

<style scoped lang="scss">
.dbtext{
  user-select: none;
  cursor: pointer;
}


</style>
