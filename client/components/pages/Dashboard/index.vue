<template>
  <div class="desk-wrapper">
    <modal :shown="dialogFormVisible">
      <create-form v-on:close-modal="closeModal">
      </create-form>
    </modal>
    <div class="desk-head">
      <el-button type="primary" @click="openModal" icon="el-icon-plus" circle></el-button>
      <el-select v-model="sortingby" placeholder="Sort by">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          ></slot>
        </el-option>
      </el-select>
      <template>
        <el-radio v-model="directSorting" :label="true" :border="false" fill="#fff"><i class="el-icon-arrow-down"></i></el-radio>
        <el-radio v-model="directSorting" :label="false" :border="false" fill="#fff"><i class="el-icon-arrow-up"></i></el-radio>
      </template>
    </div>
    <tasks-list :elements="currentSort.length ? currentSort : taskCards"></tasks-list>
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
          value: 'title',
          label: 'By title'
          },
          {
          value: 'date',
          label: 'By date'
          }
      ],
      search: '',
      sortingby: 'title',
      directSorting: true,


    }
  },
  computed: {
    ...mapGetters({
        taskCards: 'getTaskCards'
    }),
    currentSort: function () {
      return this.currentSort=this.taskCards.sort( (a,b) => {
        if (this.sortingby==="title") {
          return (this.directSorting ? (a.title < b.title) : (a.title > b.title) ) ? -1 : (a.title === b.title) ? 0 : 1;
        }
        if (this.sortingby==="date") {
          return (this.directSorting ? (a.date < b.date) : (a.date > b.date) ) ? -1 : (a.date === b.date) ? 0 : 1;
        }
      })
    }
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
  width: 30%;
  padding: 10px;
  padding-left: 50px;

  .el-radio {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  button, div, label {
    margin: 0 5px;
  }


}
// You can import all your SCSS variables using webpack alias

</style>
