<template>
<div id="app">
    <div class="page-layout">
        <div class="page-layout-inner">
            <header-component :openSidebar="openSidebar" :title="title" />
            <main>
            <div class="main-content">
                <el-row class="container">
                    <router-view></router-view>
                </el-row>
            </div>
        </main>
    </div>
        <dimmer :active="obfuscatorActive" :closeSidebar="closeSidebar" />
    </div>
</div>
</template>
<script>
import Header from 'components/shared/Header'
import Dimmer from 'components/shared/Dimmer'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['handleResize', 'openSidebar', 'closeSidebar'])
  },
  computed: {
    ...mapState({
        sidebarOpened: state => {
            return state.ui.sidebarOpened
        },
        obfuscatorActive: state => {
            return state.ui.obfuscatorActive
        },
        title: state => {
          return state.route.meta.title
        }
    })
  },
  components: {
    'header-component': Header,
    Dimmer
  },
  created: function () {
    window.addEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  #app .page-layout main {
    z-index: 1000;
    padding-top: 80px;
    transition-property: transform;
  }
  #app .page-layout main .main-content .container {
    margin-top: 0;
    padding: 0 20px;
  }
}
// You can import all your SCSS variables using webpack alias
</style>
