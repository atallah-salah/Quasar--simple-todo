<template>
  <q-page class="flex flex-center">
    <ul>
      <li>
        <Todo :key="index" v-for="(todo,index) in todos" :todo="todo">{{todo.title}}</Todo>
      </li>
    </ul>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'todos',
  created () {
    // fetch todos data
    this.getTodosData()
    this.postTodo('test title')
  },
  computed: {
    // get todos data from todos store
    ...mapGetters('todos', ['todos'])
  },
  methods: {
    ...mapActions({
      getTodosData: 'todos/getTodosData',
      postTodo: 'todos/postTodo'
    })
  },
  components: {
    Todo: require('components/Todo.vue').default
  }
}
</script>
