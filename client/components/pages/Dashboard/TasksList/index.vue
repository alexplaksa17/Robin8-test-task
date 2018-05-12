<template>
    <div>
        <el-button type="text" @click="dialogFormVisible = !dialogFormVisible">open a Form nested Dialog</el-button>
        <el-dialog
  title="Tips"
  :visible.sync="dialogFormVisible"
  width="30%">
  <span>This is a message</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
  </span>
</el-dialog>


    </div>
</template>

<script>
import Modal from 'components/shared/Modal'
export default {
  name: 'Dashboard',
  components: {
    Modal
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
    };
  }
}
</script>
<style lang="scss">
// You can import all your SCSS variables using webpack alias

</style>
