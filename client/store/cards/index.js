export const SET_CARDS = 'SET_CARDS'
export const SET_SORTED_CARDS = 'SET_SORTED_CARDS'
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'

const state = {
  cardsList: [
    {
      id: 1,
      title: 'Book tickets',
      date: 1527590800000,
      category: 'Weekends',
      priority: 'low',
      description: 'book tickets to London'
    },
    {
      id: 2,
      title: 'Play HoMM3',
      date: 1526589800000,
      category: 'afdfs',
      priority: 'uhjhg',
      description: 'fghfb'
    },
    {
      id: 3,
      title: 'Awesome task 1',
      date: 1526590870000,
      category: 'sadda',
      priority: 'tyhf',
      description: 'fghbg'
    },
    {
      id: 4,
      title: 'Awesome task 2',
      date: 1526750800000,
      category: 'sadda',
      priority: 'werf',
      description: 'dfb h'
    },
    {
      id: 5,
      title: 'Awesome task 3',
      date: 1526590600000,
      category: 'afdf',
      priority: 'jhm',
      description: 'yjg'
    }
  ],
  categories: [
    {
      label: 'Sport',
      value: 'sport'
    },
    {
      label: 'JS',
      value: 'js'
    },
    {
      label: 'Study',
      value: 'study'
    },
    {
      label: 'Python',
      value: 'python'
    },
    {
      label: 'Hobby',
      value: 'hobby'
    }

  ]
}
const getters = {
  getTaskCards (state) {
    return state.cardsList
  },
  getCategories (state) {
    return state.categories
  }
}

const mutations = {
  [SET_CARDS] (state, cards) {
    state.cardsList = cards
  },
  [SET_SORTED_CARDS] (state) {
    // TODO
  },
  [ADD_CARD] (state, payload) {
    console.log('mutation card', payload.task)
    payload.task.id = state.cardsList.length ? state.cardsList[state.cardsList.length - 1].id + 1 : 0
    state.cardsList = [...state.cardsList, payload.task]
  },
  [REMOVE_CARD] (state, payload) {
    console.log('mutation', payload.id)
    state.cardsList = state.cardsList.filter((elem) => { return payload.id !== elem.id })
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
  },
  removeTask ({ commit }, id) {
    commit({ type: REMOVE_CARD, id })
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
