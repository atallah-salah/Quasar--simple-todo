<template>
    <div class="todo-container" :style="{ backgroundColor: checkobx ? '#ffc80042' : 'unset' }">
      <!-- placehoder ( content loader ) -->
      <content-placeholders v-if="PlaceHolder" :style="{flex:1}" rounded centerd>
        <content-placeholders-text :style="{flex:1}" :lines="1" />
      </content-placeholders>
      <!-- end placehoder ( content loader ) -->
      <q-input name="todoInput" v-if="!PlaceHolder" class='todo-input' ref="todoInput" v-model="title"  @keyup.enter="saveEdit" :hint="editing ? 'Press enter to save' : ''" :readonly="!editing" dense clearable spellcheck="false" aria-label="todo" />
      <div class="todo-controls">
        <q-checkbox v-model="checkobx" @input="!PlaceHolder && updateTodoData()" aria-label="complete the todo" :id="'tab-completed-'+todo.id" tabindex="-1"/>
        <q-btn flat round :style="{'color': '#0068bb'}" icon="edit" @click="!PlaceHolder && startEditing()" role="button" tabindex="-1" aria-label="Edit" aria-pressed/>
        <q-btn flat round :style="{'color': '#9e0000'}" icon="delete" @click="!PlaceHolder && deleteTodoAction(todo.id)" aria-label="delete todo" role="button" aria-pressed :id="'tab-delete-'+todo.id" tabindex="-1"/>
      </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['todo', 'PlaceHolder'],
  data () {
    return {
      checkobx: this.todo.completed || false,
      todoInput: null,
      editing: false,
      title: this.todo.title
    }
  },
  mounted () {
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

  .vue-content-placeholders-text
    height: 60px

  .q-field--readonly .q-field__control:before
    border-bottom-style: none !important

  .q-field__marginal
    color: black
</style>
