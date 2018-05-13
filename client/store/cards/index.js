export const SET_CARDS = 'SET_CARDS'
export const SET_SORTED_CARDS = 'SET_SORTED_CARDS'
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'

const state = {
  cardsList: [
    {
      title: 'teee',
      date: 1526153942391,
      category: 'sadda',
      priority: 'dcsdf',
      description: 'dsfcds'
    },
    {
      title: 'dsfcds',
      date: 152615394167,
      category: 'afdfs',
      priority: 'uhjhg',
      description: 'fghfb'
    },
    {
      title: 'bgfh',
      date: 1526153941311,
      category: 'sadda',
      priority: 'tyhf',
      description: 'fghbg'
    },
    {
      title: 'gbf',
      date: 1526153941331,
      category: 'sadda',
      priority: 'werf',
      description: 'dfb h'
    },
    {
      title: 'dge',
      date: 1526153941351,
      category: 'afdf',
      priority: 'jhm',
      description: 'yjg'
    }
  ]
}
const getters = {
  getTaskCards (state) {
    return state.cardsList
  }
}

const mutations = {
  [SET_CARDS] (cards) {
    state.cardsList = cards
  },
  [SET_SORTED_CARDS] (state) {
    // TODO
  },
  [ADD_CARD] (state, payload) {
    console.log('mutation card', payload.task)
    state.cardsList = [...state.cardsList, payload.task]
  },
  [REMOVE_CARD] (card) {
    state.cardsList = state.cardsList.filter((elem) => { return card.id !== elem.id })
  }
}

const actions = {
  uploadTasks ({ commit }, payload) {
    const cards = payload
    // TODO get data from get request
    commit({ type: SET_CARDS, cards })
  },
  addTask ({ commit }, task) {
    console.log('sdsdss')
    console.log('task in action', task)
    commit({ type: ADD_CARD, task })
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
