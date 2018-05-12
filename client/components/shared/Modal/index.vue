<template>
  <div>
    <span>{{modalVisibility}}</span>
    <el-dialog title="Shipping address" :visible="modalVisibility">
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal">Cancel</el-button>
        <el-button type="primary" @click="closeModal">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        default: false,
        type: Boolean
      }
    },
    data: function () {
      return {
        modalVisibility: this.show,
        formLabelWidth: '120px'
      };
    },
    methods: {
      closeModal () {
        this.modalVisibility = true
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
