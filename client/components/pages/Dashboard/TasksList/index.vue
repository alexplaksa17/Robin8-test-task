<template>
  <div class="list-wrapper">
    <div class="list">
      <el-card v-for="task in elements" :key="task.id" :body-style="{ padding: '0px' }">
        <div class="card" style="padding: 14px;">
          <div class="info-row">
            <h3>{{ task.title }}</h3>
            <el-button type="danger" icon="el-icon-delete" @click="removeTask(task.id)" circle></el-button>
          </div>
          <div class="card-info">
            <div class="info-row">
              <span class="date">{{ getDate(task.date) }}</span>
              <el-tag :type="getPriorityStyle(task.priority)">{{ task.priority }}</el-tag>
            </div>
            <div class="info-row">
              <el-tag type="primary">{{ task.category }}</el-tag>
            </div>
          </div>
          <p class="card-description">
            {{task.description}}
          </p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
    ...mapActions({
        removeTask: 'removeTask'
    }),
    getDate (time) {
      let date = new Date(time);
      return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    },
    getPriorityStyle (priority) {
      if (priority==="low") return "success"
      if (priority==="medium") return "warning"
      if (priority==="high") return "danger"
    },
  }
}
</script>
<style lang="scss">
.list-wrapper {
  background-color: #f2f2f2;
  .list {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
  }

}
.info-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.el-card {
  padding: 5px;
  margin-top: 10px;
  .card-info {
    display: flex;
    flex-direction: column;
    .date {
      font-size: 12px
    }
    .card-description {
      font-size: 14px;
    }
    .el-tag {
      width: auto;
    }
    .el-tag .priority-low {

    }
    .el-tag .priority-low {

    }
    .el-tag .priority-high {

    }
  }
}
</style>
