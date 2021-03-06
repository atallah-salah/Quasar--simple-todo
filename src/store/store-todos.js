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
  getTodosDataAction({ commit }) {
    fetch(`${api}/todos`)
      .then(response => response.json())
      .then((data) => {
        // sort todos data to be non-completed first and completed to the last
        const sortedData = data.sort((x, y) => (x.completed === y.completed) ? 0 : x.completed ? 1 : -1)
        commit('FETCH_TODOS', sortedData)
        return data
      })
  },
  postTodoAction({ dispatch }, data) {
    fetch(`${api}/todos`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data })
    })
      .then(response => response.json())
      .then((data) => {
        // update data - fetch new data after add new todo
        dispatch('getTodosDataAction')
        return data
      })
  },
  updateTodoAction({ dispatch }, data) {
    fetch(`${api}/todos/${data.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data })
    })
      .then(response => response.json())
      .then(data => {
        dispatch('getTodosDataAction')
        return data
      })
  },
  deleteTodoAction({ dispatch }, id) {
    fetch(`${api}/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        dispatch('getTodosDataAction')
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
