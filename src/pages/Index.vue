<template>
  <q-page class="flex flex-center" onbeforeunload="console.log(9999999999999)">
    <div class="container">
      <div class="container-header">
        <p>Todos</p>
        <q-btn flat round color="" icon="add_circle" style="font-size: 1.8rem" @click="showAddTodoModal=true" />
      </div>
      <ul id="todosList" ref="todosList" class="todos-list">
        <li>
          <Todo :key="index" v-for="(todo,index) in todos" :todo="todo">{{todo.title}}</Todo>
        </li>
      </ul>
    </div>

    <!-- Add T modal -->
    <q-dialog v-model="showAddTodoModal" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Todo Title</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input ref="titleInput" v-model='addToDoTitle' dense autofocus @keyup.enter="addTodo" :rules="[val => !!val || 'Field is required']"/>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-checkbox v-model="completed" label="Completed" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup @click="showAddTodoModal=false" />
          <q-btn flat label="Add Todo" type="submit" @click="addTodo" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'todos',
  data: function () {
    return {
      showAddTodoModal: false,
      titleInput: null,
      todosList: null,
      addToDoTitle: '',
      completed: false
    }
  },
  created () {
  },
  async mounted () {
    // fetch todos data
    await this.getTodosData()
  },
  updated () {
    // load last scroll on todo list item
    const todosListScrollTop = localStorage.getItem('recentScroll')
    if (this.todos.length > 0) {
      this.$refs.todosList.scroll({ top: todosListScrollTop, behavior: 'smooth' })
    }

    // save last scroll on todo list item
    window.addEventListener('unload', function (event) {
      const recentScroll = document.getElementById('todosList').scrollTop
      localStorage.setItem('recentScroll', recentScroll)
    })
  },
  computed: {
    // get todos data from todos store
    ...mapGetters('todos', ['todos'])
  },
  methods: {
    addTodo: function () {
      // check if input has errors then stop function
      this.$refs.titleInput.validate()
      if (this.$refs.titleInput.hasError) return

      this.postTodo({ title: this.addToDoTitle, completed: this.completed })
      this.addToDoTitle = ''
      this.completed = false
      this.showAddTodoModal = false
    },
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
    display: flex
    justify-content: space-between
    align-items: center
    padding-right: 20px
    font-size: 20px
    border-radius: 18px 18px 0 0
    background-color: $secondary
    color: white

    p
      margin: unset
      padding: 20px
      font-size: 24px
      font-weight: bold

  .todos-list
    height: 86%
    margin: 4px
    padding: 0px
    overflow-y: auto;
    list-style: none
</style>
