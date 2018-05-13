<template>
  <el-form :model="newTask" :rules="rules" ref="newTask" label-width="120px">
    <el-form-item label="Task Title" prop="title">
      <el-input v-model="newTask.title"></el-input>
    </el-form-item>
    <el-form-item label="Task priority" prop="priority">
      <el-select v-model="newTask.priority" placeholder="select task priority">
        <el-option label="High" value="high"></el-option>
        <el-option label="Medium" value="medium"></el-option>
        <el-option label="Low" value="low"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Task category" prop="category">
      <el-select filterable allow-create v-model="newTask.category" placeholder="please select category">
        <el-option v-for="category in categories" :label="category.label" :value="category.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Task date" prop="date">
      <el-date-picker type="date" :picker-options="pickerOptions" placeholder="pick a date" v-model="newTask.date" value-format="timestamp"></el-date-picker>
    </el-form-item>
    <el-form-item label="Task description" prop="description">
      <el-input type="textarea" v-model="newTask.description"></el-input>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitNewTask">Create</el-button>
    <el-button @click="closeModal">Reset</el-button>
  </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CreteForm',
  props: {
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
      pickerOptions: {
        disabledDate: function (date) {
          return Date.now()>=date.getTime()
        }
      },
      rules: {
        title: [
          { required: true, message: 'Please input title', trigger: 'blur' },
          { min: 3, max: 90, message: 'Length should be 3 to 90', trigger: 'blur' }
        ],
        priority: [
          { required: true, message: 'Please select priority', trigger: 'change' }
        ],
        category: [
          { required: true, message: 'Please select category', trigger: 'change' }
        ],
        date: [
          { required: true, message: 'Please select date', trigger: 'change' }
        ],
        description: [
          { required: false, message: 'Please input description', trigger: 'blur' }
        ]
      }
    };
  },
  computed: {
    ...mapGetters({
        categories: 'getCategories'
    }),
  },
  methods: {
    closeModal () {
      this.$refs['newTask'].resetFields();
      this.$emit('close-modal')
    },
    submitNewTask () {
      console.log('this.newTask', this.newTask)
      let isValid = true
      this.$refs['newTask'].validate((valid) => {
        if (!valid) {
          console.log('error submit!!');
          isValid = false;
          return false;
        }
      })
      if (isValid){
        this.addNewTask(this.newTask)
        this.newTask = {
          title: '',
          description: '',
          priority: '',
          category: '',
          date: ''
        }
        this.$emit('close-modal')
      }
    },
    ...mapActions({
        addNewTask: 'addTask'
    }),
  }
}
</script>
<style lang="scss">
.el-dialog__headerbtn {
  display: none;
}
.el-picker-panel.el-date-picker.el-popper {
  width: 70px;
}
// You can import all your SCSS variables using webpack alias

</style>
