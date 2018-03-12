<template>
    <span class="editableSpan">
        <span v-show="!editing">{{value}}</span>
        <input v-show="editing" type="text" :value="value" @input="triggerEdit">
        <button @click="editing = !editing">{{edit}}</button>
     </span>
</template>

<script>
export default {
  name: "EditableSpan",
  data() {
    return {
      editing: false

    };
  },
  computed: {
    edit() {
      return this.editing ? "done" : "edit";
    }
  },
  props: ["value"],
  methods: {
    triggerEdit(e) {
      this.$emit("edit", e.target.value);
    }
  }
};
</script>

<style scoped lang="scss">

</style>
