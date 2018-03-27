<template>
    <span class="editableSpan">
        <span class='dbtext'  v-show="!editing" @click="editValue">{{value}}</span>
        <el-input ref="elInput" size="medium" v-show="editing"  :value="elVal" @blur="triggerEdit">
          <i slot="suffix" class="el-input__icon el-icon-success" @click='edit = !edit'></i>
        </el-input>
     </span>
</template>

<script>
import {bus} from '../bus';
export default {
  name: "EditableSpan",
  props: ["value"],
  created(){
    bus.$on('preview',this.handlePreview)
  },
  data() {
    return {
      edit: false,
      elVal:this.value,
      preview:false
    };
  },
  computed:{
    editing(){
      return this.edit && !this.preview
    }
  },
  methods: {
    editValue(e){
      this.edit = ! this.edit
      this.$nextTick(
        ()=>{
          this.$refs.elInput.$el.children[0].focus()
        }
      )
    },
    triggerEdit(e) {
      this.edit = ! this.edit
      this.$emit("edit", e.target.value);
    },
    handlePreview(){
      this.preview = true
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
