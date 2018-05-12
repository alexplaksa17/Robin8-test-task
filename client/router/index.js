import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'components/pages/Dashboard'
import Post from 'components/pages/Post'
import About from 'components/pages/About'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: Dashboard,
    meta: {
      title: 'Dashboard'
    }
  }, {
    path: '/post/:id',
    component: Post,
    meta: {
      title: 'Post'
    }
  }, {
    path: '/about',
    component: About,
    meta: {
      title: 'About'
    }
  }
]
export const router = new Router({ mode: 'history', routes })
