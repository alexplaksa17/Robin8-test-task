import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'components/pages/Dashboard'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: Dashboard,
    meta: {
      title: 'Task management'
    }
  }
]
export const router = new Router({ mode: 'history', routes })
