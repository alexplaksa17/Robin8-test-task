import Vue from 'vue'
import Vuex from 'vuex'
import ui from './ui'
import cards from './cards'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ui,
    cards
  }
})

export default store
