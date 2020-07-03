<template>
    <div class="todo-container" :style="{ backgroundColor: todo.completed ? '#ffc80042' : 'unset' }">
      <q-input class='todo-input' ref="todoInput" v-model="title"  @keyup.enter="saveEdit" :hint="editing ? 'Press enter to save' : ''" :readonly="!editing" dense clearable spellcheck="false"  />
      <div class="todo-controls">
          <q-checkbox v-model="checkobx" @input="updateTodoData"/>
          <q-btn flat round color="blue" icon="edit" @click="startEditing"/>
          <q-btn flat round color="red" icon="delete" @click="deleteTodoAction(todo.id)"/>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['todo'],
  data () {
    return {
      checkobx: this.todo.completed,
      todoInput: null,
      editing: false,
      title: this.todo.title
    }
  },
  methods: {
    startEditing: function () {
      this.editing = true
      // use setTimeout nested of just foucs for usage of quasar input effect
      setTimeout(() => this.$refs.todoInput.$el.focus(), 0)
    },
    saveEdit: function () {
      this.editing = false
      // remove quasar focus style from input
      setTimeout(() => this.$refs.todoInput.$el.classList.remove('q-field--focused'), 0)
      this.updateTodoData()
    },
    updateTodoData: function () {
      this.todo.completed = this.checkobx
      this.updateTodoAction({ id: this.todo.id, completed: this.checkobx, title: this.title })
    },
    ...mapActions({
      updateTodoAction: 'todos/updateTodoAction',
      deleteTodoAction: 'todos/deleteTodoAction'
    })
  }
}
</script>
<style lang="sass">
  .todo-container
    display: flex
    justify-content: space-between
    font-size: 20px
    padding: 10px
    padding-left: 20px
    border-bottom: #d6d6d6 solid 1px

  .todo-input
    flex: 1

  .q-field--readonly .q-field__control:before
    border-bottom-style: none !important
</style>
