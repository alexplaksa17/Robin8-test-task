<template>
  <div class="desk-wrapper">
    <modal :shown="dialogFormVisible">
      <create-form v-on:close-modal="closeModal">
      </create-form>
    </modal>
    <div class="desk-head">
      <el-button type="primary" @click="openModal" icon="el-icon-plus" circle></el-button>
      <el-input
        placeholder="Type something"
        prefix-icon="el-icon-search"
        v-model="search">
      </el-input>
      <el-select v-model="search" clearable placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <tasks-list :elements="taskCards"></tasks-list>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Modal from 'components/shared/Modal'
import CreateForm from './CreateForm'
import TasksList from './TasksList'
export default {
  name: 'Dashboard',
  components: {
    Modal,
    CreateForm,
    TasksList
  },
  data() {
    return {
      dialogFormVisible: false,
      newTask: {
        title: '',
        description: '',
        priority: '',
        category: '',
        date: ''
      },
      options: [
         {
          value: 'Option1',
          label: 'Option1'
          },
          {
          value: 'Option2',
          label: 'Option2'
          },
          {
          value: 'Option3',
          label: 'Option3'
          },
          {
          value: 'Option4',
          label: 'Option4'
          },
        ],
        search: '',
        sortingby: [],
        sortingOrder:[],
        currentSort:[],
        cardsData: []


    }
  },
  computed: {
    ...mapGetters({
        taskCards: 'getTaskCards'
    }),
  },
  methods: {
    openModal () {
      this.dialogFormVisible = true;
      console.log('this.dialogFormVisible',this.dialogFormVisible)
    },
    closeModal () {
      this.dialogFormVisible = false;
      console.log('this.dialogFormVisible',this.dialogFormVisible)
    }
  }
}
</script>
<style lang="scss">
.desk-wrapper {

}
.desk-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button, div {
    margin: 0 10px;
  }


}
// You can import all your SCSS variables using webpack alias

</style>
