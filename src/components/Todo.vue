<template>
    <div class="todo-container"  v-bind:style="{ backgroundColor: todo.completed && '#ff820042' }">
      <p>{{todo.title}}</p>
      <div class="todo-controls">
              <q-checkbox v-model="checkobx" />
        <button>
          <q-icon color='red' name='delete'/>
        </button>
      </div>
    </div>
</template>

<script>
export default {
  props: ['todo'],
  data () {
    return { checkobx: false }
  }
}
</script>
<style lang="sass" scoped>
  .todo-container
    display: flex
    justify-content: space-between
    font-size: 20px
    padding: 10px
    padding-left: 20px
    border-bottom: #d6d6d6 solid 1px
</style>
