/* eslint-disable space-before-function-paren */

const api = 'https://jsonplaceholder.typicode.com'

// set initial todos data
const state = {
  todos: []
}

const mutations = {
  FETCH_TODOS(state, todos) {
    state.todos = todos
  }
}

const actions = {
  getTodosData({ commit }) {
    fetch(`${api}/todos`)
      .then(response => response.json())
      .then((data) => {
        commit('FETCH_TODOS', data)
        return data
      })
  },
  postTodo({ dispatch }, title) {
    fetch(`${api}/todos`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: title })
    })
      .then(response => response.json())
      .then((data) => {
        // update data - fetch new data after add new todo
        dispatch('getTodosData')
        return data
      })
  }
}

const getters = {
  todos: state => state.todos
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
