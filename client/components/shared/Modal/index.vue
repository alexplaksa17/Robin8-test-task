<template>
  <div>
    <el-dialog title="New task" :visible="shown" >
      <slot></slot>
      <span slot="footer" class="dialog-footer">
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name:'Modal',
    props: {
      shown: {
        default: false,
        type: Boolean
      }
    },
    data: function () {
      return {
        formLabelWidth: '120px'
      };
    },
    methods : {
      closeModal () {
        this.$emit('close-modal')
      }
    }
  };
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
.el-dialog__wrapper {
  z-index: 2500;
}
</style>
