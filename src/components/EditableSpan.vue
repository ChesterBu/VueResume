<template>
    <span class="editableSpan">
        <span class='dbtext'  v-show="!editing" @click="editValue">{{value}}</span>
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
    editValue(e){
      this.editing = ! this.editing
      this.$nextTick(
        ()=>{
          this.$refs.elInput.$el.children[0].focus()
        }
      )
    },
    triggerEdit(e) {
      this.editing = ! this.editing
      this.$emit("edit", e.target.value);
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
