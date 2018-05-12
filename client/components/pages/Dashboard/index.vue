<template>
    <div>
        <el-button type="text" @click="openModal">open a Form nested Dialog</el-button>
        <modal :show="dialogFormVisible"></modal>
        <h1>{{dialogFormVisible}}</h1>


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
    }
  },
  methods: {
    openModal () {
      this.dialogFormVisible = true;
      console.log('this.dialogFormVisible',this.dialogFormVisible)
    }
  }
}
</script>
<style lang="scss">
// You can import all your SCSS variables using webpack alias

</style>
