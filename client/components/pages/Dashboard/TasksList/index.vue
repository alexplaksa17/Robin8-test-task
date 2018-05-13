<template>
    <div class="list-wrapper">
      <el-card v-for="task in elements" :body-style="{ padding: '0px' }">
        <div class="card" style="padding: 14px;">
          <h3>{{ task.title }}</h3>
          <div class="card-info">
            <span>{{ getDate(task.date) }}</span>
            <span>{{ task.category }}</span>
            <span>{{ task.priority }}</span>
          </div>
          <p class="bottom clearfix">
            {{task.description}}
          </p>
        </div>
    </el-card>
    </div>
</template>

<script>
export default {
  name: 'TasksList',
  props: {
    elements: {
      default: [],
      type: Array
    }

  },
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  methods: {
    getDate (time) {
      let date = new Date(time);
      return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    }
  }
}
</script>
<style lang="scss">
// You can import all your SCSS variables using webpack alias
.el-card {
  width: 30%;
  padding: 5px;
  margin-top: 10px;

  .card-info {
    display: flex;
    flex-direction: column;
  }
}
</style>
