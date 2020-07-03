<template>
  <q-page class="flex flex-center">
    <ul v-show="false">
      <li>
      </li>
    </ul>
    <div class="container">
      <div class="container-header">
        <p>Todos</p>
        <q-btn flat round color="" icon="add_circle" style="font-size: 1.8rem" @click="addTodo=true" />
      </div>
      <ul class="todos-list">
        <li>
          <Todo :key="index" v-for="(todo,index) in todos" :todo="todo">{{todo.title}}</Todo>
        </li>
      </ul>
    </div>

    <!-- Add todo modal -->
    <q-dialog v-model="addTodo" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense autofocus @keyup.enter="addTodo=false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup @click="addTodo=false" />
          <q-btn flat label="Add address" v-close-popup />
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
      addTodo: false
    }
  },
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
    hideModal: () => {
      this.addTodo = false
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
