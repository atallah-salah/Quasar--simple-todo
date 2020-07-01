<template>
  <q-page class="flex flex-center">
    <ul v-show="false">
      <li>
      </li>
    </ul>
    <div class="container">
      <div class="container-header">Todos</div>
      <ul class="todos-list">
        <li>
          <Todo :key="index" v-for="(todo,index) in todos" :todo="todo">{{todo.title}}</Todo>
        </li>
      </ul>
    </div>
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

<style lang="sass">
.container
  display: flex
  flex-direction: column
  height: 600px
  width: 90%
  max-width: 1000px
  background-color: #e8e8e8
  border-radius: 18px

  .container-header
    padding: 20px
    font-size: 20px
    border-radius: 18px 18px 0 0
    background-color: $secondary
    color: white

  .todos-list
    height: 86%
    margin: 4px
    padding: 0px
    overflow-y: auto;
    list-style: none
</style>
